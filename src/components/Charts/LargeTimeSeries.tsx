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


interface Props {
    /** Time series data to dispaly */
    timeSeries: ReadingTimeSeries[]
    /** Name of data */
    name: string
    /** Unit to display on Y axis */
    unit: string
}

/**
 * Single large time series chart component
 */
class LargeTimeSeriesChartBase extends React.Component<Props, object> {

    public render() {
        const { name, timeSeries, unit } = this.props
        const data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart />

                <XAxis type="datetime" />

                <YAxis>
                    <YAxis.Title>{ humanUnitName(unit) }</YAxis.Title>
                    <SplineSeries
                        name={ name }
                        marker={{enabled: false}}
                        data={ data } />
                </YAxis>

                <Tooltip
                    pointFormat={'{point.y} ' + (unit !== null ? unit : '') } />
            </HighchartsChart>
        )
    }
}

/** Highcharts connected LargeTimeSeriesChart component. See [[LargeTimeSeriesChartBase]] for details. */
export const LargeTimeSeriesChart = withHighcharts(LargeTimeSeriesChartBase, Highcharts)
