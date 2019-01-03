/**
 * Wind time series chart component that can display steady and gust speeds
 * in addition to wind barbs for wind direction
 */
import Highcharts from "highcharts"
import addWindBarbModule from "highcharts/modules/windbarb"
import * as React from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  SplineSeries,
  Tooltip,
  WindBarbSeries,
  withHighcharts,
  XAxis,
  YAxis
} from "react-jsx-highcharts"

import { round } from "@app/Shared/math"
import { DataTimeSeries } from "@app/Shared/timeSeries"
import { conversion, convertUnit } from "@app/Shared/unitConversion"

/**
 * Allow our tooltip to convert windspeeds to units that people might be more used to.
 *
 * @param this Highcharts position value
 */
function pointFormatter(this: any) {
  return (
    `${new Date(this.x).toLocaleString()}<br />` +
    this.points
      .map(p => {
        if (p.series.name === "Direction") {
          return `<b>${p.series.name}:</b> ${Math.round(p.point.direction)} (${p.point.beaufort})`
        }
        return `<b>${p.series.name}:</b> ${p.y} knots ${convertUnit("knot", p.y)}`
      })
      .join("<br />")
  )
}

const plotOptions = {
  time: {
    useUTC: false
  }
}

interface Props {
  /** Wind data to display */
  data: DataTimeSeries[]
  /** Number of days back to filter dataset by */
  days: number
  /** Hight to try to limit chart to */
  height: number
  /** Should the chart show a legend */
  legend: boolean
  /** Home many wind barbs should the chart show for each day */
  barbsPerDay: number
}

addWindBarbModule(Highcharts)

/**
 * Wind time series chart component that can display steady and gust speeds
 * in addition to wind barbs for wind direction
 */
export class WindTimeSeriesChartBase extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props)
  }

  public render() {
    // Extract wind direction from windspeed data
    const speeds = this.props.data.filter(d => !d.name.toLowerCase().includes("direction"))
    const directions = this.props.data.filter(d => d.name.toLowerCase().includes("direction"))

    const daysAgo = new Date()
    daysAgo.setDate(daysAgo.getDate() - this.props.days)

    const filteredSpeeds = speeds.map((d, index) => {
      const data = d.timeSeries.filter(r => r.time > daysAgo).map(r => [r.time.valueOf(), round(r.reading, 1)])
      return data
    })

    if (filteredSpeeds[0].length < 1) {
      return null
    }
    const speedsSeries = speeds.map((d, index) => {
      // Filter windspeeds to only include data from the time range
      const data = d.timeSeries
        .filter(reading => reading.time > daysAgo)
        .map(
          // Return Highcharts Spline dataformat [date, reading]
          r => [r.time.valueOf(), conversion(r.reading, "m/s", "knot")]
        )

      const nameParts = d.name.split("_")
      const name = nameParts[nameParts.length - 1]
      const nameCaps = name[0].toUpperCase() + name.slice(1)

      return <SplineSeries key={index} name={nameCaps} marker={{ enabled: false }} data={data} />
    })

    /** Array of wind data. Highcharts uses [time, speed, direction] for each reading */
    const windData: number[][] = []

    /** Make sure our speed and direction data actually exists */
    if (speeds.length > 0 && directions.length > 0) {
      const speed = speeds[0]
      const direction = directions[0]

      let speedTs = speed.timeSeries.filter(r => r.time > daysAgo)
      let directionTs = direction.timeSeries.filter(r => r.time > daysAgo)

      // cross filter our time series so that we only have matching times
      const directionTimes = directionTs.map(r => r.time.toISOString())
      speedTs = speedTs.filter(r => directionTimes.filter(d => d === r.time.toISOString()).length > 0)
      const speedTimes = speedTs.map(r => r.time.toISOString())
      directionTs = directionTs.filter(r => speedTimes.filter(d => d === r.time.toISOString()).length > 0)

      if (speedTs.length === directionTs.length) {
        // Figure out how many samples should be skipped between readings to manage chart density
        const stride = Math.round(speedTs.length / (this.props.barbsPerDay * this.props.days))

        for (let index = 0; index <= speedTs.length; index += stride) {
          if (speedTs[index] !== undefined && directionTs[index] !== undefined) {
            windData.push([
              directionTs[index].time.valueOf(),
              round(speedTs[index].reading, 1),
              directionTs[index].reading
            ])
          }
        }
      }
    }

    return (
      <HighchartsChart time={plotOptions.time}>
        <Chart height={this.props.height} />

        <XAxis type="datetime" />

        <YAxis softMin={0}>
          <YAxis.Title>Knots</YAxis.Title>
          {speedsSeries}

          {windData.length > 0 ? <WindBarbSeries name="Direction" color="red" data={windData} /> : null}
        </YAxis>

        {this.props.legend ? <Legend /> : null}

        <Tooltip formatter={pointFormatter} shared={true} />
      </HighchartsChart>
    )
  }
}

/** Highcharts enabled WindTimeSeriesChart. See [[WindTimeSeriesChartBase]] for details */
export const WindTimeSeriesChart = withHighcharts(WindTimeSeriesChartBase, Highcharts)
