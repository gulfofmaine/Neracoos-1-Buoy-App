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
        const { name, softMax, softMin, timeSeries, unit } = this.props
        const data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart height={150}/>

                <XAxis type='datetime' />

                <YAxis
                    softMin={ softMin }
                    softMax={ softMax }>
                    <YAxis.Title>{ unit }</YAxis.Title>
                    <SplineSeries
                        name={ name }
                        marker={{enabled: false}}
                        data={data} />
                </YAxis>

                <Tooltip 
                    pointFormat={'{point.y} ' + unit}
                />
            </HighchartsChart>
        )
    }
}

/** Hightcharts enabled SmallTimeSeriesChart component. See [[SmallTimeSeriesChartBase]] for details. */
export const SmallTimeSeriesChart = withHighcharts(SmallTimeSeriesChartBase, Highcharts)
