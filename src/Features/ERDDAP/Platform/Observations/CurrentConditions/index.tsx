import * as React from "react"
import { Link } from "react-router-dom"
import { Alert, Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import { SmallTimeSeriesChart } from "components/Charts"
import { paths } from "Shared/constants"

import { naturalBounds } from "Shared/dataTypes"
import { round } from "Shared/math"
import { convertUnit } from "Shared/unitConversion"
import { urlPartReplacer } from "Shared/urlParams"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { PlatformFeatureWithDatasets, PlatformDataset } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"

import { WindCard } from "./wind"

interface Props {
  platform: PlatformFeatureWithDatasets

  unit_system: UnitSystem
}

export const prefferedDataTypesList = [
  "significant_height_of_wind_and_swell_waves",
  "sea_surface_wave_significant_height",
  "dominant_wave_period",
  "sea_surface_swell_wave_period",
  "period",
  "mean_wave_direction",
  "air_temperature",
  "barometric_pressure",
  "sea_water_temperature",
  "sea_level_pressure",
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

  // Data cards
  const dataCards = filtered_datasets.map((reading) => {
    let depth: string
    if (reading.depth === undefined || reading.depth <= 5) {
      depth = ""
    } else if (reading.depth > 0) {
      depth = " @ " + reading.depth + "m"
    } else {
      depth = " @ " + -reading.depth + "m"
    }

    let data = reading.readings

    // If there is no current data, display a card letting us know
    if (data.length === 0) {
      return (
        <Col {...cardProps} key={reading.data_type.standard_name}>
          <Card>
            <CardBody>No data for {reading.data_type.long_name} in the last day.</CardBody>
          </Card>
        </Col>
      )
    }

    const latest = data[data.length - 1]
    const bounds = naturalBounds(reading.data_type.standard_name)

    const data_converter = converter(reading.data_type.standard_name)

    data = data.map((r) => ({
      ...r,
      reading: round(data_converter.convertTo(r.reading, unit_system) as number, 2),
    }))

    return (
      <Col key={reading.data_type.standard_name} {...cardProps}>
        <Link
          to={urlPartReplacer(
            urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
            ":type",
            reading.data_type.standard_name
          )}
        >
          <Card>
            <CardHeader>
              {reading.data_type.long_name + depth} -{" "}
              {round(data_converter.convertTo(latest.reading, unit_system) as number, 1)}{" "}
              {data_converter.displayName(unit_system)} {convertUnit(reading.data_type.units, latest.reading)}
            </CardHeader>
            <CardBody style={{ padding: ".2rem" }}>
              <SmallTimeSeriesChart
                name={reading.data_type.standard_name}
                timeSeries={data}
                unit={data_converter.displayName(unit_system)}
                softMin={bounds[0]}
                softMax={bounds[1]}
                unit_system={unit_system}
                data_type={reading.data_type.standard_name}
              />
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  })

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
      {dataCards}
    </React.Fragment>
  )
}
