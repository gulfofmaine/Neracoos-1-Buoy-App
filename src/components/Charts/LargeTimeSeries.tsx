"use client"
/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
import * as React from "react"
import { Chart, HighchartsChart, SplineSeries, Tooltip, HighchartsProvider, XAxis, YAxis } from "react-jsx-highcharts"

import { colors, colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { pointFormatMaker } from "./formatter"
import { TimeframeSelector } from "Features/ERDDAP/TimeframeSelector"

addAccessibility(Highcharts)

const plotOptions = {
  time: {
    useUTC: false,
  },
}

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
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart />
        <XAxis type="datetime" min={startTime?.valueOf()} max={endTime?.valueOf()} />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} color={colors.coastalMeadow} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
