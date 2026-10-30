"use client"
/**
 * Single large time series chart component
 */
import { Chart, Tooltip, XAxis, YAxis } from "@highcharts/react"
import { Accessibility } from "@highcharts/react/modules/Accessibility"
import { SplineSeries } from "@highcharts/react/series/Spline"

import { colors, colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { noLegendChartOptions } from "./chartOptions"
import { pointFormatMaker } from "./formatter"

interface Props {
  /** Time series data to dispaly */
  timeSeries: ReadingTimeSeries[]
  /** Name of data */
  name: string
  /** Soft minimum for Y axis */
  softMin: number | undefined
  /** Soft maximum for Y axis */
  softMax: number | undefined
  /** Unit system to display in */
  unitSystem: UnitSystem
  /** Data type to display */
  data_type: string
  startTime?: Date
  endTime?: Date
}

/**
 * Single large time series chart component
 */
export function LargeTimeSeriesChart({
  name,
  softMax,
  softMin,
  timeSeries,
  data_type,
  unitSystem,
  startTime,
  endTime,
}: Props) {
  const dataConverter = converter(data_type)

  const data = timeSeries.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(r.reading as number, unitSystem) as number, 2),
  ])

  return (
    <Chart colors={colorCycle} options={noLegendChartOptions}>
      <Accessibility />

      <XAxis type="datetime" min={startTime?.valueOf()} max={endTime?.valueOf()} />

      <YAxis softMin={softMin} softMax={softMax}>
        {dataConverter.displayName(unitSystem)}
      </YAxis>

      <SplineSeries name={name} data={data} color={colors.coastalMeadow} options={{ marker: { enabled: false } }} />

      <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
    </Chart>
  )
}
