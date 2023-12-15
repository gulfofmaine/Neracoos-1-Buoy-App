"use client"
/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import { Chart, HighchartsChart, HighchartsProvider, SplineSeries, Tooltip, XAxis, YAxis } from "react-jsx-highcharts"

import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { colorCycle, colors } from "Shared/colors"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { pointFormatMaker } from "components/Charts/formatter"

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
}

/**
 * Single large time series chart component
 */
export function LargeTimeSeriesWaterLevelChart({ name, softMax, softMin, timeSeries, data_type, unitSystem }: Props) {
  const dataConverter = converter(data_type)

  const data = timeSeries.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(r.reading as number, unitSystem) as number, 2),
  ])

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart />

        <XAxis type="datetime" />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} color={colors.coastalMeadow} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
