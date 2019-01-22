/**
 * Small time series chart component (as seen on current conditions page)
 */
import Highcharts from "highcharts"
import * as React from "react"
import { Chart, HighchartsChart, SplineSeries, Tooltip, withHighcharts, XAxis, YAxis } from "react-jsx-highcharts"

import { round } from "@app/Shared/math"
import { ReadingTimeSeries } from "@app/Shared/timeSeries"
import { conversion } from "@app/Shared/unitConversion"

import { pointFormatMaker } from "./formatter"

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
}

/**
 * Small time series chart component (as seen on current conditions page)
 */
class SmallTimeSeriesChartBase extends React.Component<Props, object> {
  public render() {
    const { name, softMax, softMin, timeSeries } = this.props
    let { unit } = this.props
    let data = timeSeries.map(r => [r.time.valueOf(), round(r.reading, 2)])
    if (unit === "Deg C") {
      data = timeSeries.map(r => [r.time.valueOf(), conversion(r.reading, unit, "F")])
      unit = "F"
    }
    if (name === "visibility_in_air") {
      data = timeSeries.map(r => [r.time.valueOf(), conversion(r.reading, "m", "mi")])
      unit = "Miles"
    }
    if (name === "significant_height_of_wind_and_swell_waves") {
      data = timeSeries.map(r => [r.time.valueOf(), conversion(r.reading, "m", "ft")])
      unit = "Feet"
    }

    return (
      <HighchartsChart time={plotOptions.time}>
        <Chart height={150} />

        <XAxis type="datetime" />

        <YAxis softMin={softMin} softMax={softMax}>
          <YAxis.Title>{unit}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unit)} />
      </HighchartsChart>
    )
  }
}

/** Hightcharts enabled SmallTimeSeriesChart component. See [[SmallTimeSeriesChartBase]] for details. */
export const SmallTimeSeriesChart = withHighcharts(SmallTimeSeriesChartBase, Highcharts)
