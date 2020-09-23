/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import * as React from "react"
import { Chart, HighchartsChart, SplineSeries, Tooltip, withHighcharts, XAxis, YAxis } from "react-jsx-highcharts"

import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { pointFormatMaker } from "./formatter"

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
class LargeTimeSeriesChartBase extends React.Component<Props, object> {
  public render() {
    const { name, softMax, softMin, timeSeries, data_type, unitSystem } = this.props

    const data_converter = converter(data_type)

    const data = timeSeries.map((r) => [
      r.time.valueOf(),
      round(data_converter.convertToNumber(r.reading as number, unitSystem) as number, 2),
    ])

    return (
      <HighchartsChart time={plotOptions.time}>
        <Chart />

        <XAxis type="datetime" />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{data_converter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    )
  }
}

/** Highcharts connected LargeTimeSeriesChart component. See [[LargeTimeSeriesChartBase]] for details. */
export const LargeTimeSeriesChart = withHighcharts(LargeTimeSeriesChartBase, Highcharts)
