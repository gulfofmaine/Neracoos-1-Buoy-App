"use client"
/**
 * Time series chart component for displaying multiple sets of time series data with current time line
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
import React, { useEffect, useState } from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  PlotLine,
  ScatterSeries,
  SplineSeries,
  Tooltip,
  HighchartsProvider,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { StyledTimeSeries } from "Shared/timeSeries"

addAccessibility(Highcharts)
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

const plotOptions = {
  time: {
    useUTC: false,
  },
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
      return (
        <ScatterSeries
          key={index}
          name={d.name}
          // marker={{
          //   enabled: false,
          // }}
          data={seriesData}
        />
      )
    }

    return (
      <SplineSeries
        key={index}
        name={d.name}
        marker={{
          enabled: false,
        }}
        color={d.color}
        dashStyle={d.dashStyle}
        data={seriesData}
      />
    )
  })

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart />

        <XAxis type="datetime">
          <PlotLine value={date.valueOf()} id={"now-line"} />
        </XAxis>

        <YAxis>
          <YAxis.Title>{unit}</YAxis.Title>
          {series}
        </YAxis>

        <Legend />

        <Tooltip formatter={formatterWrapper(unit)} shared={true} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
