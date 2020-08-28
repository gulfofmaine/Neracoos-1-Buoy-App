/**
 * Wind specific current conditions card
 */
import React from "react"
import { Card, CardBody, CardHeader } from "reactstrap"

import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { compassDirection } from "Shared/unitConversion"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { WindTimeSeriesChart } from "components/Charts"

import { PlatformDataset } from "../../../types"

interface Props {
  datasets: PlatformDataset[]
  unit_system: UnitSystem
}

export const WindCard: React.SFC<Props> = ({ datasets, unit_system }) => {
  if (datasets.length < 1) {
    return null
  }

  const data: DataTimeSeries[] = datasets.map((dataset) => ({
    name: dataset.data_type.long_name,
    timeSeries: dataset.readings,
    unit: dataset.data_type.units,
  }))

  const speed = datasets.filter((dataset) => dataset.data_type.standard_name.includes("speed"))
  const gust = datasets.filter((dataset) => dataset.data_type.standard_name.includes("gust"))
  const direction = datasets.filter((dataset) => dataset.data_type.standard_name.includes("direction"))

  const speedAndGust = [...speed, ...gust]
  if (speedAndGust.length < 1) {
    return null
  }

  const data_converter = converter(speedAndGust[0].data_type.standard_name)

  let speedTitle: string = ""
  if (speed.length > 0 && speed[0].readings.length > 0) {
    speedTitle =
      " - " +
      round(
        data_converter.convertTo(speed[0].readings[speed[0].readings.length - 1].reading, unit_system) as number,
        1
      ) +
      " " +
      data_converter.displayName(unit_system)
  }

  let gustTitle: string = ""
  if (gust.length > 0) {
    gustTitle =
      " gusting to " +
      round(data_converter.convertTo(gust[0].readings[gust[0].readings.length - 1].reading, unit_system) as number, 1) +
      " " +
      data_converter.displayName(unit_system)
  }

  let directionTitle: string = ""
  if (direction.length > 0 && direction[0].readings.length > 0) {
    const reading = direction[0].readings[direction[0].readings.length - 1].reading
    const compass = compassDirection(reading)
    directionTitle = " from " + compass[1]
  }

  return (
    <Card>
      <CardHeader>
        Winds{speedTitle}
        {gustTitle}
        {directionTitle}
      </CardHeader>
      <CardBody style={{ padding: ".2rem" }}>
        <WindTimeSeriesChart days={1} barbsPerDay={10} data={data} height={150} unit_system={unit_system} />
      </CardBody>
    </Card>
  )
}
