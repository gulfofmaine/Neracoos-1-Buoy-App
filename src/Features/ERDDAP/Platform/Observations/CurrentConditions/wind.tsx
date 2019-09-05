/**
 * Wind specific current conditions card
 */
import * as React from "react"
import { Card, CardBody, CardHeader } from "reactstrap"

import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { compassDirection, convertUnit } from "Shared/unitConversion"

import { WindTimeSeriesChart } from "components/Charts"

import { PlatformDataset } from "../../../types"

interface Props {
  datasets: PlatformDataset[]
}

export const WindCard: React.SFC<Props> = ({ datasets }) => {
  if (datasets.length < 1) {
    return null
  }

  const data: DataTimeSeries[] = datasets.map(dataset => ({
    name: dataset.data_type.long_name,
    timeSeries: dataset.readings,
    unit: dataset.data_type.units
  }))

  const speed = datasets.filter(dataset => dataset.data_type.standard_name.includes("speed"))
  const gust = datasets.filter(dataset => dataset.data_type.standard_name.includes("gust"))
  const direction = datasets.filter(dataset => dataset.data_type.standard_name.includes("direction"))

  let speedTitle: string = ""
  if (speed.length > 0 && speed[0].readings.length > 0) {
    speedTitle =
      " - " +
      round(speed[0].readings[speed[0].readings.length - 1].reading, 1) +
      " " +
      speed[0].data_type.units +
      convertUnit("m/s", speed[0].readings[speed[0].readings.length - 1].reading)
  }

  let gustTitle: string = ""
  if (gust.length > 0) {
    gustTitle =
      " gusting to " +
      round(gust[0].readings[gust[0].readings.length - 1].reading) +
      " " +
      gust[0].data_type.units +
      convertUnit("m/s", gust[0].readings[gust[0].readings.length - 1].reading)
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
        <WindTimeSeriesChart days={1} barbsPerDay={10} data={data} height={150} />
      </CardBody>
    </Card>
  )
}
