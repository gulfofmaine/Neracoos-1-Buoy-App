"use client"
/**
 * Time series chart component for displaying multiple sets of time series data with current time line
 */
import { Chart, Legend, Tooltip, XAxis, YAxis } from "@highcharts/react"
import { Accessibility } from "@highcharts/react/modules/Accessibility"
import { ScatterSeries } from "@highcharts/react/series/Scatter"
import { SplineSeries } from "@highcharts/react/series/Spline"
import { useEffect, useState } from "react"

import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { StyledTimeSeries } from "Shared/timeSeries"

import { baseChartOptions } from "./chartOptions"

function formatterWrapper(unit) {
  return function pointFormatter(this: any) {
    if (this.point) {
      const p = this.point
      return `${new Date(this.x).toLocaleString()}<br /> <b>${p.series.name}:</b> ${p.y} ${unit}`
    }

    return (
      `${new Date(this.x).toLocaleString()}<br />` +
      this.points.map((p) => `<b style="color: ${p.series.color}">${p.series.name}:</b> ${p.y} ${unit}`).join("<br />")
    )
  }
}

interface Props {
  /** Time series data to display */
  data: StyledTimeSeries[]
  /** Units to display on chart */
  unit: string
  /** Use scatter points rather than splines */
  scatter: boolean
}

export const MultipleLargeTimeSeriesChartCurrent = ({ data, unit, scatter = false }: Props) => {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  })

  const series = data.map((d, index) => {
    const seriesData = d.timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 1)])

    if (scatter) {
      return <ScatterSeries key={index} name={d.name} data={seriesData} />
    }

    return (
      <SplineSeries
        key={index}
        name={d.name}
        color={d.color}
        data={seriesData}
        options={{ marker: { enabled: false }, dashStyle: d.dashStyle }}
      />
    )
  })

  return (
    <Chart colors={colorCycle} options={baseChartOptions}>
      <Accessibility />

      <XAxis type="datetime" plotLines={[{ id: "now-line", value: date.valueOf() }]} />

      <YAxis>{unit}</YAxis>

      {series}

      <Legend />

      <Tooltip formatter={formatterWrapper(unit)} shared={true} />
    </Chart>
  )
}
