/**
 * Small time series chart component (as seen on current conditions page)
 */
import Highcharts from "highcharts"
import * as React from "react"
import { Chart, HighchartsChart, SplineSeries, Tooltip, withHighcharts, XAxis, YAxis } from "react-jsx-highcharts"

import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"

import { pointFormatMaker } from "./formatter"
import { UnitSystem } from "Features/Units/types"

const plotOptions = {
  time: {
    useUTC: false
  }
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
  unit_system: UnitSystem
  /** Data type being displayed */
  data_type: string
}

/**
 * Small time series chart component (as seen on current conditions page)
 */
class SmallTimeSeriesChartBase extends React.Component<Props, object> {
  public render() {
    const { name, softMax, softMin, timeSeries, unit_system, data_type } = this.props
    let { unit } = this.props
    let data = timeSeries.map(r => [r.time.valueOf(), round(r.reading, 2)])

    return (
      <HighchartsChart time={plotOptions.time}>
        <Chart height={150} />

        <XAxis type="datetime" />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{unit}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unit_system, data_type)} />
      </HighchartsChart>
    )
  }
}

/** Hightcharts enabled SmallTimeSeriesChart component. See [[SmallTimeSeriesChartBase]] for details. */
export const SmallTimeSeriesChart = withHighcharts(SmallTimeSeriesChartBase, Highcharts)
