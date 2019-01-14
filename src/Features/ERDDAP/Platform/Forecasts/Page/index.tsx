import * as React from "react"
import { connect } from "react-redux"

import { MultipleLargeTimeSeriesChart } from "@app/components/Charts"
import { StoreState } from "@app/constants"
import { DataTimeSeries } from "@app/Shared/timeSeries"

import { ForecastSource, PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"
import { ForecastLoader } from "../Loader"

export interface Props {
  platform: PlatformFeatureWithDatasets
  type: string
}

export interface ReduxProps {
  forecasts: ForecastSource[]
}

function mapStateToProps({ erddap }: StoreState): ReduxProps {
  return {
    forecasts: erddap.forecasts.forecasts
  }
}

// "northward_wind", "eastward_wind", "sea_surface_temperature", "wind_speed_of_gust",
// , , "tendency_of_air_pressure",
// "dew_point_temperature", , "air_pressure_at_sea_level",
// , ,
// "visibility_in_air", , "sea_water_salinity",
// "sea_water_density", "sea_water_electrical_conductivity", "sea_water_temperature",
// , , "barometric_pressure",
// "sea_water_velocity", "direction_of_sea_water_velocity",
// "volume_fraction_of_oxygen_in_sea_water", "oxygen_saturation",
// "fractional_saturation_of_oxygen_in_sea_water"

const forecastToStandardNames: { [key: string]: Set<string> } = {
  air_temperature: new Set(["air_temperature"]),
  wave_direction: new Set(["sea_surface_wave_to_direction"]),
  wave_height: new Set(["sea_surface_wave_significant_height", "significant_height_of_wind_and_swell_waves"]),
  wave_period: new Set(["sea_surface_swell_wave_period", "period"]),
  wind_direction: new Set(["wind_from_direction"]),
  wind_speed: new Set(["wind_speed"])
}

export const ForecastBase: React.SFC<Props & ReduxProps> = ({ platform, type, forecasts }) => {
  const filteredForecasts = forecasts.filter(
    forecast => forecast.forecast_type.toLowerCase().replace(" ", "_") === type
  )

  if (filteredForecasts.length < 1) {
    return <p>There are no forecasts for the selected type avaliable. Not completely sure how you got here.</p>
  }

  const standardNames = forecastToStandardNames[type]

  const datasets = platform.properties.readings.filter(dataset => standardNames.has(dataset.data_type.standard_name))
  const platformForecasts = platform.properties.forecasts.filter(
    forecast => forecast.source.forecast_type.toLowerCase().replace(" ", "_") === type
  )

  const data: DataTimeSeries[] = datasets.map(dataset => ({
    name: dataset.data_type.long_name,
    timeSeries: dataset.readings,
    unit: dataset.data_type.units
  }))

  platformForecasts.map(forecast => {
    if (forecast.readings.length > 0) {
      data.push({
        name: forecast.source.name,
        timeSeries: forecast.readings,
        unit: forecast.source.units
      })
    }
  })

  const units = Array.from(new Set(data.map(ts => ts.unit)))

  return (
    <React.Fragment>
      <h4>{filteredForecasts[0].forecast_type} Forecast</h4>
      <ErddapDatasetLoader platformId={platform.id as string} datasets={datasets}>
        <ErddapDatasetStatus datasets={datasets} />
        <ForecastLoader platform={platform} forecasts={filteredForecasts}>
          <React.Fragment>
            {units.length > 0 ? <MultipleLargeTimeSeriesChart unit={units[0]} data={data} /> : null}
          </React.Fragment>
        </ForecastLoader>
      </ErddapDatasetLoader>
    </React.Fragment>
  )
}

export const Forecast = connect(mapStateToProps)(ForecastBase)
