/**
 * Load and display forecasts
 */
import { Point } from "@turf/helpers"
import * as React from "react"
import { Alert, Row, Col } from "reactstrap"

import { MultipleLargeTimeSeriesChart } from "components/Charts"
import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { useDataset, useForecast, useForecasts } from "../../../hooks"
import { ForecastSource, PlatformFeature, PlatformTimeSeries } from "../../../types"

interface Props {
  platform: PlatformFeature
  forecast_type: string
  unit_system: UnitSystem
}

/**
 * Match relevant forecast to platform datasets
 */
export const Forecast: React.FunctionComponent<Props> = ({ platform, forecast_type, ...props }) => {
  const standardNames = forecastToStandardNames[forecast_type]
  const timeSeries = platform.properties.readings.find((r) => standardNames.has(r.data_type.standard_name))

  return <LoadForecastInfo {...props} {...{ platform, forecast_type, timeSeries }} />
}

interface LoadInfoProps extends Props {
  timeSeries?: PlatformTimeSeries
}

/**
 * Load all the forecasts, and load a matching time series if available.
 */
const LoadForecastInfo: React.FunctionComponent<LoadInfoProps> = ({ timeSeries, forecast_type, ...props }) => {
  const { isLoading: isLoadingForecasts, data: forecastsInfo } = useForecasts()
  const { data: dataset } = useDataset(timeSeries)

  const forecastInfo = forecastsInfo?.find((f) => f.forecast_type.toLowerCase().replace(" ", "_") === forecast_type)

  if (isLoadingForecasts) {
    return <Alert>Loading forecast metadata</Alert>
  }

  if (forecastInfo) {
    return <LoadForecast {...props} {...{ timeSeries, dataset, forecast_type, forecastInfo }} />
  }

  return <Alert color="warning">Error loading forecast info</Alert>
}

interface LoadForecastProps extends LoadInfoProps {
  forecastInfo: ForecastSource
  dataset?: DataTimeSeries
}

/**
 * Load the forecast itself
 */
const LoadForecast: React.FunctionComponent<LoadForecastProps> = ({
  forecastInfo,
  platform,
  unit_system,
  timeSeries,
  dataset,
  forecast_type,
}) => {
  const point = platform.geometry as Point
  const [lon, lat] = point.coordinates

  const { isLoading, data } = useForecast(lat, lon, forecastInfo)

  if (isLoading) {
    return <Alert>Loading forecast</Alert>
  }

  if (data) {
    const forecastDataset: DataTimeSeries = {
      timeSeries: data,
      name: forecastInfo.name,
      unit: forecastInfo.units,
    }

    const datasets = [forecastDataset]

    if (timeSeries && dataset) {
      const aDayAgo = new Date()
      aDayAgo.setDate(aDayAgo.getDate() - 1)

      datasets.push({
        ...dataset,
        timeSeries: dataset.timeSeries.filter((r) => aDayAgo < r.time),
        name: `${timeSeries.dataset}: ${timeSeries.data_type.long_name}`,
      })
    }

    return (
      <Row>
        <Col>
          <h4>{forecastInfo.forecast_type} Forecast</h4>
          <ForecastChart data={datasets} unit_system={unit_system} type={forecast_type} />
        </Col>
      </Row>
    )
  }

  return <Alert color="warning">Unable to load forecasts</Alert>
}

/**
 * Which forecasts match up with which standard names
 */
export const forecastToStandardNames: { [key: string]: Set<string> } = {
  air_temperature: new Set(["air_temperature"]),
  wave_direction: new Set(["sea_surface_wave_to_direction"]),
  wave_height: new Set([
    "sea_surface_wave_significant_height",
    "significant_height_of_wind_and_swell_waves",
    "significant_wave_height",
    "max_wave_height",
  ]),
  wave_period: new Set(["sea_surface_swell_wave_period", "period"]),
  wind_direction: new Set(["wind_from_direction"]),
  wind_speed: new Set(["wind_speed"]),
}

const direction_forecast_types = new Set(["wave_direction", "wind_direction"])

interface ForecastChartProps {
  data: DataTimeSeries[]
  // forecast type
  type: string
  // Unit system to display in
  unit_system: UnitSystem
}

/** Forecast chart component */
export const ForecastChart: React.FunctionComponent<ForecastChartProps> = ({ data, type, unit_system }) => {
  const standardNames = forecastToStandardNames[type]

  if (!direction_forecast_types.has(type)) {
    const data_converter = converter(Array.from(standardNames)[0])

    data = data.map((d) => ({
      ...d,
      unit: data_converter.displayName(unit_system),
      timeSeries: d.timeSeries.map((r) => ({
        ...r,
        reading: round(data_converter.convertToNumber(r.reading, unit_system), 2),
      })),
    }))
  }

  const units = Array.from(new Set(data.map((ts) => ts.unit)))

  if (units.length > 0) {
    return <MultipleLargeTimeSeriesChart unit={units[0]} data={data} scatter={direction_forecast_types.has(type)} />
  }
  return null
}
