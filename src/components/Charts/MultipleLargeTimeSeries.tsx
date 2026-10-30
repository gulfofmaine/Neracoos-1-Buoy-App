"use client"
/**
 * Time series chart component for displaying multiple sets of time series data
 */
import { Chart, Legend, Tooltip, XAxis, YAxis } from "@highcharts/react"
import { Accessibility } from "@highcharts/react/modules/Accessibility"
import { ScatterSeries } from "@highcharts/react/series/Scatter"
import { SplineSeries } from "@highcharts/react/series/Spline"

import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"

import { baseChartOptions } from "./chartOptions"

function formatterWrapper(unit) {
  return function pointFormatter(this: any) {
    if (this.point) {
      const p = this.point
      return `${new Date(this.x).toLocaleString()}<br /> <b>${p.series.name}:</b> ${p.y} ${unit}`
    }

    return (
      `${new Date(this.x).toLocaleString()}<br />` +
      this.points.map((p) => `<b>${p.series.name}:</b> ${p.y} ${unit}`).join("<br />")
    )
  }
}

interface Props {
  /** Time series data to display */
  data: DataTimeSeries[]
  /** Units to display on chart */
  unit: string
  /** Use scatter points rather than splines */
  scatter?: boolean
}

/**
 * Time series chart component for displaying multiple sets of time series data
 */
export function MultipleLargeTimeSeriesChart({ data, unit, scatter = false }: Props) {
  const series = data.map((d, index) => {
    const seriesData = d.timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 1)])

    if (scatter) {
      return <ScatterSeries key={index} name={d.name} data={seriesData} />
    }

    return <SplineSeries key={index} name={d.name} data={seriesData} options={{ marker: { enabled: false } }} />
  })

  return (
    <Chart colors={colorCycle} options={baseChartOptions}>
      <Accessibility />

      <XAxis type="datetime" />

      <YAxis>{unit}</YAxis>

      {series}

      <Legend />

      <Tooltip formatter={formatterWrapper(unit)} shared={true} />
    </Chart>
  )
}
