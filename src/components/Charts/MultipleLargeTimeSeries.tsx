/**
 * Time series chart component for displaying multiple sets of time series data
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
import * as React from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  ScatterSeries,
  SplineSeries,
  Tooltip,
  withHighcharts,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"

addAccessibility(Highcharts)
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

const plotOptions = {
  time: {
    useUTC: false,
  },
}

interface Props {
  /** Time series data to display */
  data: DataTimeSeries[]
  /** Units to display on chart */
  unit: string
  /** Use scatter points rather than splines */
  scatter: boolean
}

/**
 * Time series chart component for displaying multiple sets of time series data
 */
class MultipleLargeTimeSeriesChartBase extends React.Component<Props, object> {
  static defaultProps = {
    scatter: false,
  }

  public render() {
    const series = this.props.data.map((d, index) => {
      const data = d.timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 1)])

      if (this.props.scatter) {
        return (
          <ScatterSeries
            key={index}
            name={d.name}
            // marker={{
            //   enabled: false,
            // }}
            data={data}
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
          data={data}
        />
      )
    })

    return (
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart />

        <XAxis type="datetime" />

        <YAxis>
          <YAxis.Title>{this.props.unit}</YAxis.Title>
          {series}
        </YAxis>

        <Legend />

        <Tooltip
          formatter={formatterWrapper(this.props.unit)}
          // valueSuffix='m'
          shared={true}
        />
      </HighchartsChart>
    )
  }
}

/** Highcharts enabled MultipleTimeSeriesChart component. See [[MultipleLargeTimeSeriesChartBase]] for details. */
export const MultipleLargeTimeSeriesChart = withHighcharts(MultipleLargeTimeSeriesChartBase, Highcharts)
