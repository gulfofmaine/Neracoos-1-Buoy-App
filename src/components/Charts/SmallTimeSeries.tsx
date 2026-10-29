"use client"
/**
 * Small time series chart component (as seen on current conditions page)
 */
import { Chart, Tooltip, XAxis, YAxis } from "@highcharts/react"
import { Accessibility } from "@highcharts/react/modules/Accessibility"
import { SplineSeries } from "@highcharts/react/series/Spline"
import * as React from "react"

import { colors, colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"

import { noLegendChartOptions } from "./chartOptions"
import { pointFormatMaker } from "./formatter"
import { UnitSystem } from "Features/Units/types"

interface Props {
  /** Time series to display */
  timeSeries: ReadingTimeSeries[]
  /** Name of time series */
  name: string
  /** Unit time series is measured in */
  unit: string
  /** Soft minimum for Y axis */
  softMin: number | undefined
  /** Soft maximum for Y axis */
  softMax: number | undefined
  /** Currently selected unit system */
  unitSystem: UnitSystem
  /** Data type being displayed */
  data_type: string
  /** Earliest date to show */
  startTime?: Date
  /** Maximum date to show */
  endTime?: Date
}

/**
 * Small time series chart component (as seen on current conditions page)
 */
export function SmallTimeSeriesChart({
  name,
  softMax,
  softMin,
  timeSeries,
  unitSystem,
  data_type,
  startTime,
  endTime,
  unit,
}: Props) {
  let data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

  return (
    <Chart height={150} colors={colorCycle} options={noLegendChartOptions}>
      <Accessibility />

      <XAxis type="datetime" min={startTime?.valueOf()} max={endTime?.valueOf()} />

      <YAxis softMin={softMin} softMax={softMax}>
        {unit}
      </YAxis>

      <SplineSeries name={name} data={data} color={colors.coastalMeadow} options={{ marker: { enabled: false } }} />

      <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
    </Chart>
  )
}
