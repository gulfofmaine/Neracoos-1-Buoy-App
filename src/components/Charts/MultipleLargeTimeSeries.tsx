/**
 * Time series chart component for displaying multiple sets of time series data
 */
import Highcharts from 'highcharts'
import * as React from 'react'
import {
    Chart,
    HighchartsChart,
    Legend,
    SplineSeries,
    Tooltip,
    withHighcharts,
    XAxis,
    YAxis
} from 'react-jsx-highcharts'

import { round } from '@app/Shared/math'
import { DataTimeSeries } from '@app/Shared/timeSeries'
import { convertUnit } from '@app/Shared/unitConversion'


function formatterWrapper(unit) {
    return function pointFormatter(this: any) {

        // tslint:disable-next-line:no-console
        console.log(this)
    
        return this.points.map((p) => 
            `<b>${p.series.name}:</b> ${p.y} m ${convertUnit(unit, p.y)}`
        ).join('<br />')
    }
}


interface Props {
    /** Time series data to display */
    data: DataTimeSeries[]
    /** Units to display on chart */
    unit: string
}

/**
 * Time series chart component for displaying multiple sets of time series data
 */
class MultipleLargeTimeSeriesChartBase extends React.Component<Props, object> {
    public render() {
        const series = this.props.data.map((d, index) => {
            const data = d.timeSeries.map(
                (r) => [r.time.valueOf(), round(r.reading, 1)]
            )
            
            return (
                <SplineSeries
                    key={index}
                    name={d.name}
                    marker={{
                        enabled: false
                    }}
                    data={data} />
            )
        })

        return (
            <HighchartsChart>
                <Chart />

                <XAxis type="datetime" />

                <YAxis>
                    <YAxis.Title>{ this.props.unit }</YAxis.Title>
                    { series }
                </YAxis>

                <Legend />

                <Tooltip
                    formatter={formatterWrapper(this.props.unit)}
                    // valueSuffix='m'
                    shared={true} />

            </HighchartsChart>
        )
    }
}

/** Highcharts enabled MultipleTimeSeriesChart component. See [[MultipleLargeTimeSeriesChartBase]] for details. */
export const MultipleLargeTimeSeriesChart = withHighcharts(MultipleLargeTimeSeriesChartBase, Highcharts)
