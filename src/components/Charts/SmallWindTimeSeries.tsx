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
import { DataTimeSeries } from '@app/Shared/timeSeries'

interface Props {
    data: DataTimeSeries[]
    days: number
}

export class SmallWindTimeSeriesChartBase extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const speeds = this.props.data.filter((d) => ! d.name.includes('direction'))

        const daysAgo = new Date()
        daysAgo.setDate(daysAgo.getDate() - this.props.days)

        const speedsSeries = speeds.map((d, index) => {
            const data = d.timeSeries.filter(
                (reading) => reading.time > daysAgo
            ).map(
                (r) => [r.time.valueOf(), round(r.reading, 1)]
            )

            const nameParts = d.name.split('_')
            const name = nameParts[nameParts.length - 1]
            const nameCaps = name[0].toUpperCase() + name.slice(1)

            return (
                <SplineSeries
                    key={index}
                    name={nameCaps}
                    data={data} />
            )
        })

        return (
            <HighchartsChart>
                <Chart height={150} />

                <XAxis type='datetime' />

                <YAxis>
                    { speedsSeries }
                </YAxis>

                <Tooltip 
                    // pointFormat={'{point.y}'}
                    shared={true} />
            </HighchartsChart>
        )
    }
}

export const SmallWindTimeSeriesChart = withHighcharts(SmallWindTimeSeriesChartBase, Highcharts)