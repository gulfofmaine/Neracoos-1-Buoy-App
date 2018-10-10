/**
 * Small time series chart component (as seen on current conditions page)
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

import { round } from '@app/Shared/math'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'


interface Props {
    /** Time series to display */
    timeSeries: ReadingTimeSeries[]
    /** Name of time series */
    name: string
    /** Unit time series is measured in */
    unit: string
}

/**
 * Small time series chart component (as seen on current conditions page)
 */
class SmallTimeSeriesChartBase extends React.Component<Props, object> {

    public render() {
        const data = this.props.timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart height={150}/>

                <XAxis type='datetime' />

                <YAxis>
                    <YAxis.Title>{this.props.unit}</YAxis.Title>
                    <SplineSeries
                        name={this.props.name}
                        marker={{enabled: false}}
                        data={data} />
                </YAxis>

                <Tooltip 
                    pointFormat={'{point.y} ' + this.props.unit}
                />
            </HighchartsChart>
        )
    }
}

/** Hightcharts enabled SmallTimeSeriesChart component. See [[SmallTimeSeriesChartBase]] for details. */
export const SmallTimeSeriesChart = withHighcharts(SmallTimeSeriesChartBase, Highcharts)
