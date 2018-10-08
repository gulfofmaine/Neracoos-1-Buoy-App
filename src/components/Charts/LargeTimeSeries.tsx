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
    timeSeries: ReadingTimeSeries[]
    name: string
    unit: string
}

class LargeTimeSeriesChartBase extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const data = this.props.timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart />

                <XAxis type="datetime" />

                <YAxis>
                    <YAxis.Title>{this.props.unit}</YAxis.Title>
                    <SplineSeries
                        name={this.props.name}
                        marker={{enabled: false}}
                        data={data} />
                </YAxis>

                <Tooltip
                    pointFormat={'{point.y} ' + this.props.unit} />
            </HighchartsChart>
        )
    }
}

export const LargeTimeSeriesChart = withHighcharts(LargeTimeSeriesChartBase, Highcharts)
