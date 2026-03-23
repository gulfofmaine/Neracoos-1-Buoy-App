/**
 * Small time series chart component (as seen on current conditions page)
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
import { Chart, HighchartsChart, HighchartsProvider, SplineSeries, Tooltip, XAxis, YAxis } from "react-jsx-highcharts"

import type { UnitSystem } from "Features/Units/types"
import { colorCycle, colors } from "Shared/colors"
import { round } from "Shared/math"
import type { ReadingTimeSeries } from "Shared/timeSeries"

import { pointFormatMaker } from "./formatter"

addAccessibility(Highcharts)
const plotOptions = {
  time: {
    useUTC: false,
  },
}

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
  const data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart height={150} />

        <XAxis type="datetime" min={startTime?.valueOf()} max={endTime?.valueOf()} />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{unit}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} color={colors.coastalMeadow} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
