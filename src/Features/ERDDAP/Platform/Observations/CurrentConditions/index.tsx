import * as React from "react"
import { Link } from "react-router-dom"
import { Alert, Col, Row } from "reactstrap"

import { paths } from "Shared/constants"

import { urlPartReplacer } from "Shared/urlParams"
import { UnitSystem } from "Features/Units/types"

import { PlatformFeatureWithDatasets, PlatformDataset } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"

import { DataCard } from "./data_card"
import { WindCard } from "./wind"

interface Props {
  platform: PlatformFeatureWithDatasets

  unit_system: UnitSystem
}

export const prefferedDataTypesList = [
  "air_temperature",
  "air_temperature_1m",
  "air_pressure",
  "barometric_pressure",
  "sea_level_pressure",
  "air_pressure_at_sea_level",

  "significant_height_of_wind_and_swell_waves",
  "sea_surface_wave_significant_height",
  "significant_height_of_wind_and_swell_waves_3",
  "significant_wave_height",

  "dominant_wave_period",
  "average_wave_period",
  "sea_surface_swell_wave_period",
  "period",
  "dominant_wave_period_3",

  "mean_wave_direction",
  "sea_surface_wave_to_direction",

  "sea_surface_temperature",
  "sea_water_temperature",
  "visibility_in_air",
]

/** Data types that we wish to display on the current conditions page */
export const prefferedDataTypes = new Set(prefferedDataTypesList)

/** Wind data types that we wish to display */
export const windDataTypes = new Set(["wind_from_direction", "wind_gust", "wind_speed"])

const cardProps = {
  md: "4",
  sm: "6",
  style: {
    paddingTop: "1rem",
  },
}

export const ErddapCurrentPlatformConditions: React.SFC<Props> = ({ platform, unit_system }) => {
  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  const windDatasets = platform.properties.readings
    .filter((dataset) => windDataTypes.has(dataset.data_type.standard_name))
    .map((dataset) => ({
      ...dataset,
      readings: dataset.readings.filter((r) => r.time > aDayAgo),
    }))

  const filteredDatasets = platform.properties.readings
    .filter((dataset) => prefferedDataTypes.has(dataset.data_type.standard_name) && dataset.depth < 2)
    .map((dataset) => ({
      ...dataset,
      readings: dataset.readings.filter((r) => r.time > aDayAgo),
    }))

  filteredDatasets.sort(
    (a, b) =>
      prefferedDataTypesList.indexOf(a.data_type.standard_name) -
      prefferedDataTypesList.indexOf(b.data_type.standard_name)
  )

  return (
    <React.Fragment>
      <ErddapDatasetStatus datasets={[...filteredDatasets, ...windDatasets]} />
      <ErddapDatasetLoader datasets={[...filteredDatasets, ...windDatasets]} platformId={platform.id as string}>
        <Row>
          <CurrentConditions
            wind_datasets={windDatasets.filter((dataset) => dataset.readings.length > 0)}
            filtered_datasets={filteredDatasets.filter((dataset) => dataset.readings.length > 0)}
            platform={platform}
            unit_system={unit_system}
          />
        </Row>
      </ErddapDatasetLoader>
    </React.Fragment>
  )
}

interface CurrentConditionsProps {
  wind_datasets: PlatformDataset[]

  filtered_datasets: PlatformDataset[]

  platform: PlatformFeatureWithDatasets

  unit_system: UnitSystem
}

export const CurrentConditions: React.SFC<CurrentConditionsProps> = ({
  wind_datasets,
  filtered_datasets,
  platform,
  unit_system,
}) => {
  if (wind_datasets.length === 0 && filtered_datasets.length === 0) {
    return (
      <Col>
        <Alert color="info">No recent data avaliable for {platform.id as string}.</Alert>
      </Col>
    )
  }

  let showWinds = false
  if (wind_datasets.length > 0) {
    if (wind_datasets[0].readings.length > 0) {
      showWinds = true
    }
  }

  const commonDataCardProps = { platform, unit_system }

  return (
    <React.Fragment>
      <React.Fragment>
        {showWinds ? (
          <Col {...cardProps}>
            <Link to={urlPartReplacer(paths.platforms.observationsWind, ":id", platform.id as string)}>
              <WindCard datasets={wind_datasets} unit_system={unit_system} />
            </Link>
          </Col>
        ) : null}
      </React.Fragment>

      <DataCard {...commonDataCardProps} data_types={["air_temperature", "air_temperature_1m"]} />
      <DataCard
        {...commonDataCardProps}
        data_types={["air_pressure", "barometric_pressure", "sea_level_pressure", "air_pressure_at_sea_level"]}
      />
      <DataCard
        {...commonDataCardProps}
        data_types={[
          "sea_surface_wave_significant_height",
          "significant_height_of_wind_and_swell_waves",
          "significant_wave_height",
          "significant_height_of_wind_and_swell_waves_3",
        ]}
      />
      <DataCard
        {...commonDataCardProps}
        data_types={[
          "period",
          "sea_surface_swell_wave_period",
          "dominant_wave_period",
          "average_wave_period",
          "dominant_wave_period_3",
        ]}
      />
      <DataCard {...commonDataCardProps} data_types={["mean_wave_direction", "sea_surface_wave_to_direction"]} />
      <DataCard {...commonDataCardProps} data_types={["sea_surface_temperature", "sea_water_temperature"]} />
      <DataCard {...commonDataCardProps} data_types={["visibility_in_air"]} />
    </React.Fragment>
  )
}
