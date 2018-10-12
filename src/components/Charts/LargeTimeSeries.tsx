/**
 * Single large time series chart component
 */
import Highcharts from 'highcharts'
import * as React from 'react'
import {
    Chart,
    HighchartsChart,
    SplineSeries,
    Tooltip,
    withHighcharts,
    XAxis,
    YAxis
} from 'react-jsx-highcharts'

import { humanUnitName } from '@app/Shared/dataTypes'
import { round } from '@app/Shared/math'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'
import { convertUnit } from '@app/Shared/unitConversion'


/**
 * Wrap up our tooltip formatting function so we can specifiy the unit it should use
 * 
 * @param unit Unit that the chart should conver from
 * @returns A function ready to be called by tooltip to convert our units.
 */
function pointFormatMaker(unit: string) {
    return function pointFormatter(this: any) {
        return `${this.y} ${unit} ${convertUnit(unit, this.y)}`
    }
}


interface Props {
    /** Time series data to dispaly */
    timeSeries: ReadingTimeSeries[]
    /** Name of data */
    name: string
    /** Unit to display on Y axis */
    unit: string
    /** Soft minimum for Y axis */
    softMin: number | undefined
    /** Soft maximum for Y axis */
    softMax: number | undefined
}

/**
 * Single large time series chart component
 */
class LargeTimeSeriesChartBase extends React.Component<Props, object> {

    public render() {
        const { name, timeSeries, unit, softMin, softMax } = this.props
        const data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart />

                <XAxis type="datetime" />

                <YAxis 
                    softMin={softMin}
                    softMax={softMax}>
                    <YAxis.Title>{ humanUnitName(unit) }</YAxis.Title>
                    <SplineSeries
                        name={ name }
                        marker={{enabled: false}}
                        data={ data } />
                </YAxis>

                <Tooltip
                    formatter={pointFormatMaker(unit)} />
                    // pointFormat={'{point.y} ' + (unit !== null ? unit : '') } />
            </HighchartsChart>
        )
    }
}

/** Highcharts connected LargeTimeSeriesChart component. See [[LargeTimeSeriesChartBase]] for details. */
export const LargeTimeSeriesChart = withHighcharts(LargeTimeSeriesChartBase, Highcharts)
