import Highcharts from 'highcharts'
import addWindBarbModule from 'highcharts/modules/windbarb'
import * as React from 'react'
import {
    Chart,
    HighchartsChart,
    SplineSeries,
    Tooltip,
    WindBarbSeries,
    withHighcharts,
    XAxis,
    YAxis,
} from 'react-jsx-highcharts'

import { round } from '@app/Shared/math'
import { DataTimeSeries } from '@app/Shared/timeSeries'

interface Props {
    data: DataTimeSeries[]
    days: number
    height: number
    readingPerBarb?: number
}

addWindBarbModule(Highcharts)

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

        const speedOnly = this.props.data.filter((d) => d.name.includes('speed'))
        const directions = this.props.data.filter((d) => d.name.includes('direction'))

        const windData: number[][] = []


        if (speedOnly.length > 0 && directions.length > 0 ) {
            const speed = speedOnly[0]
            const direction = directions[0]

            const speedTs = speed.timeSeries.filter((r) => r.time > daysAgo)
            const directionTs = direction.timeSeries.filter((r) => r.time > daysAgo)

            if ( speedTs.length === directionTs.length) {
                const stride = this.props.readingPerBarb ? this.props.readingPerBarb : 12 // 12 // round(speedTs.length / 12)

                for (let index = 0; index <= speedTs.length; index += stride) {
                    if (speedTs[index] !== undefined && directionTs[index] !== undefined) {
                        windData.push([
                            directionTs[index].time.valueOf(),
                            speedTs[index].reading,
                            directionTs[index].reading
                        ])
                    }
                }
            }
        }

        return (
            <HighchartsChart>
                <Chart height={this.props.height} />

                <XAxis type='datetime' />

                <YAxis>
                    { speedsSeries }
                    {/* { directionSeries } */}

                    { windData.length > 0 ? (
                        <WindBarbSeries
                            name='Direction'
                            color='red'
                            data={windData} />
                    ) : ( null )}
                </YAxis>

                <Tooltip 
                    // pointFormat={'{point.y}'}
                    shared={true} />
            </HighchartsChart>
        )
    }
}

export const SmallWindTimeSeriesChart = withHighcharts(SmallWindTimeSeriesChartBase, Highcharts)