import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import { SmallTimeSeriesChart } from "@app/components/Charts"
import { paths } from "@app/constants"

import { naturalBounds } from "@app/Shared/dataTypes"
import { round } from "@app/Shared/math"
import { convertUnit } from "@app/Shared/unitConversion"
import { urlPartReplacer } from "@app/Shared/urlParams"

import { PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"

import { WindCard } from "./wind"

interface Props {
  platform: PlatformFeatureWithDatasets
}

const prefferedDataTypesList = [
  "significant_height_of_wind_and_swell_waves",
  "dominant_wave_period",
  "period",
  "air_temperature",
  "barometric_pressure",
  "sea_level_pressure",
  "visibility_in_air"
]

/** Data types that we wish to display on the current conditions page */
const prefferedDataTypes = new Set(prefferedDataTypesList)

/** Wind data types that we wish to display */
const windDataTypes = new Set(["wind_from_direction", "wind_gust", "wind_speed"])

const cardProps = {
  md: "4",
  sm: "6",
  style: {
    paddingTop: "1rem"
  }
}

export const ErddapCurrentPlatformConditions: React.SFC<Props> = ({ platform }) => {
  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  const windDatasets = platform.properties.readings.filter(reading =>
    windDataTypes.has(reading.data_type.standard_name)
  )

  let showWinds = false
  if (windDatasets.length > 0) {
    if (windDatasets[0].readings.filter(r => r.time > aDayAgo).length > 0) {
      showWinds = true
    }
  }

  const filteredDatasets = platform.properties.readings.filter(
    reading => prefferedDataTypes.has(reading.data_type.standard_name) && reading.depth < 2
  )
  filteredDatasets.sort(
    (a, b) =>
      prefferedDataTypesList.indexOf(a.data_type.standard_name) -
      prefferedDataTypesList.indexOf(b.data_type.standard_name)
  )

  // Data cards
  const dataCards = filteredDatasets.map(reading => {
    let depth: string
    if (reading.depth === undefined || reading.depth === 0) {
      depth = ""
    } else if (reading.depth > 0) {
      depth = " @ " + reading.depth + "m"
    } else {
      depth = " @ " + -reading.depth + "m"
    }

    const data = reading.readings.filter(r => r.time > aDayAgo)

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
              {reading.data_type.long_name + depth} - {round(latest.reading, 1)} {reading.data_type.units}{" "}
              {convertUnit(reading.data_type.units, latest.reading)}
            </CardHeader>
            <CardBody style={{ padding: ".2rem" }}>
              <SmallTimeSeriesChart
                name={reading.data_type.standard_name}
                timeSeries={data}
                unit={reading.data_type.units}
                softMin={bounds[0]}
                softMax={bounds[1]}
              />
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  })

  return (
    <React.Fragment>
      <ErddapDatasetStatus datasets={[...filteredDatasets, ...windDatasets]} />
      <ErddapDatasetLoader datasets={[...filteredDatasets, ...windDatasets]} platformId={platform.id as string}>
        <Row>
          {showWinds ? (
            <Col {...cardProps}>
              <Link to={urlPartReplacer(paths.platforms.observationsWind, ":id", platform.id as string)}>
                <WindCard datasets={windDatasets} />
              </Link>
            </Col>
          ) : null}

          {dataCards}
        </Row>
      </ErddapDatasetLoader>
    </React.Fragment>
  )
}
