"use client"
/**
 * Wind time series chart component that can display steady and gust speeds
 * in addition to wind barbs for wind direction
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
import addWindBarbModule from "highcharts/modules/windbarb"
import * as React from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  SplineSeries,
  Tooltip,
  WindBarbSeries,
  HighchartsProvider,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { colors, colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { compassDirection } from "Shared/unitConversion/compassDirection"

addAccessibility(Highcharts)

const dataConverter = converter("wind_speed")

interface DirectionPoint {
  direction: number
  beaufort: string
}

function pointFormatterMaker(unitSystem: UnitSystem) {
  /**
   * Allow our tooltip to convert windspeeds to units that people might be more used to.
   *
   * @param this Highcharts position value
   */
  // eslint-disable-next-line
  function pointFormatter(this: Highcharts.TooltipFormatterContextObject, tooltip: Highcharts.Tooltip): string {
    return (
      `${this.x ? new Date(this.x).toLocaleString() : null}<br />` +
      this.points!.map((p) => {
        if (p.series.name === "Direction") {
          const direction = compassDirection((p.point as unknown as DirectionPoint).direction)
          return `<b>${p.series.name}:</b> ${Math.round((p.point as unknown as DirectionPoint).direction)} (${
            direction[1]
          }) (${(p.point as unknown as DirectionPoint).beaufort})`
        }

        return `<b>${p.series.name}:</b> ${p.y ? round(p.y, 1) : null} ${dataConverter.displayName(unitSystem)}`
      }).join("<br />")
    )
  }

  return pointFormatter
}

const plotOptions = {
  time: {
    useUTC: false,
  },
}

interface Props {
  /** Wind data to display */
  speed?: DataTimeSeries
  gust?: DataTimeSeries
  direction?: DataTimeSeries
  /** Number of days back to filter dataset by */
  days?: number
  /** Hight to try to limit chart to */
  height?: number
  /** Should the chart show a legend */
  legend: boolean
  /** Home many wind barbs should the chart show for each day */
  barbsPerDay: number
  /** Which unit system should the axis and tooltip be in */
  unitSystem: UnitSystem
  /** Earliest date to show */
  startTime?: Date
  /** Maximum date to show */
  endTime?: Date
}

addWindBarbModule(Highcharts)

/**
 * Wind time series chart component that can display steady and gust speeds
 * in addition to wind barbs for wind direction
 */
// export class WindTimeSeriesChartBase extends React.Component<Props, object> {
//   public render() {
export const WindTimeSeriesChart: React.FunctionComponent<Props> = ({
  unitSystem,
  speed,
  gust,
  direction,
  days,
  barbsPerDay,
  height,
  legend,
  startTime,
  endTime,
}) => {
  const speeds: DataTimeSeries[] = []
  if (speed) {
    speeds.push(speed)
  }
  if (gust) {
    speeds.push(gust)
  }

  const speedsSeries = speeds.map((d, index) => {
    // Filter windspeeds to only include data from the time range
    let data: number[][] = []
    if (days) {
      const daysAgo = new Date()
      daysAgo.setDate(daysAgo.getDate() - days)

      data = d.timeSeries
        .filter((reading) => reading.time > daysAgo)
        .map(
          // Return Highcharts Spline dataformat [date, reading]
          (r) => [new Date(r.time).valueOf(), round(dataConverter.convertToNumber(r.reading, unitSystem), 1)],
        )
    } else {
      data = d.timeSeries.map(
        // Return Highcharts Spline dataformat [date, reading]
        (r) => [new Date(r.time).valueOf(), round(dataConverter.convertToNumber(r.reading, unitSystem), 1)],
      )
    }

    const nameParts = d.name.split("_")
    const name = nameParts[nameParts.length - 1]
    const nameCaps = name[0].toUpperCase() + name.slice(1)

    return (
      <SplineSeries key={index} name={nameCaps} marker={{ enabled: false }} data={data} color={colorCycle[index]} />
    )
  })

  /** Array of wind data. Highcharts uses [time, speed, direction] for each reading */
  const windData: number[][] = []

  /** Make sure our speed and direction data actually exists */
  if (speed && direction) {
    let speedTs = speed.timeSeries

    let directionTs = direction.timeSeries
    if (days) {
      const daysAgo = new Date()
      daysAgo.setDate(daysAgo.getDate() - days)

      speedTs = speedTs.filter((r) => new Date(r.time) > daysAgo)
      directionTs = directionTs.filter((r) => new Date(r.time) > daysAgo)
    }

    // cross filter our time series so that we only have matching times
    const directionTimes = directionTs.map((r) => r.time.toISOString())
    speedTs = speedTs.filter((r) => directionTimes.filter((d) => d === r.time.toISOString()).length > 0)
    const speedTimes = speedTs.map((r) => r.time.toISOString())
    directionTs = directionTs.filter((r) => speedTimes.filter((d) => d === r.time.toISOString()).length > 0)

    if (speedTs.length === directionTs.length && 0 < speedTs.length) {
      // Figure out how many samples should be skipped between readings to manage chart density
      const days = (speedTs[speedTs.length - 1].time.valueOf() - speedTs[0].time.valueOf()) / 1000 / 60 / 60 / 24
      const stride = Math.round(speedTs.length / (barbsPerDay * days))

      for (let index = 0; index <= speedTs.length; index += stride) {
        if (speedTs[index] !== undefined && directionTs[index] !== undefined) {
          windData.push([
            directionTs[index].time.valueOf(),
            round(speedTs[index].reading, 1),
            directionTs[index].reading,
          ])
        }
      }
    }
  }

  const pointFormatter = pointFormatterMaker(unitSystem)

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart height={height} />

        <XAxis type="datetime" min={startTime?.valueOf()} max={endTime?.valueOf()} />

        <YAxis softMin={0}>
          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          {speedsSeries}

          {windData.length > 0 ? <WindBarbSeries name="Direction" color={colors.whatOrange} data={windData} /> : null}
        </YAxis>

        {legend ? <Legend /> : null}

        <Tooltip formatter={pointFormatter} shared={true} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
