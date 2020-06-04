import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Col } from "reactstrap"

import { SmallTimeSeriesChart } from "components/Charts"
import { paths } from "Shared/constants"

import { naturalBounds } from "Shared/dataTypes"
import { round } from "Shared/math"
import { convertUnit } from "Shared/unitConversion"
import { urlPartReplacer } from "Shared/urlParams"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { PlatformFeatureWithDatasets, PlatformDataset } from "../../../types"

interface DataCardProps {
  platform: PlatformFeatureWithDatasets
  data_types: string[]
  unit_system: UnitSystem
}

const cardProps = {
  md: "4",
  sm: "6",
  style: {
    paddingTop: "1rem",
  },
}

export const DataCard: React.SFC<DataCardProps> = ({ platform, data_types, unit_system }) => {
  let filtered_datasets: PlatformDataset[] = []

  data_types.forEach((data_type) => {
    platform.properties.readings
      .filter((reading) => data_type === reading.data_type.standard_name)
      .forEach((reading) => filtered_datasets.push(reading))
  })

  // Don't return anything if there are no datasets
  if (filtered_datasets.length === 0) {
    return null
  }

  let reading = filtered_datasets[0]

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
}
