/**
 * Wind specific current conditions card
 */
import * as React from 'react'
import {
    Card,
    CardBody,
    CardHeader
} from 'reactstrap'

import { round } from '@app/Shared/math'
import { DataTimeSeries } from '@app/Shared/timeSeries'

import { WindTimeSeriesChart } from '@app/components/Charts'

import { PlatformData } from '../types'


interface Props {
    /** Wind time series */
    timeSeries: PlatformData[]
    /** Number of days to display */
    days: number
}


/**
 * Wind current conditions card component
 */
export class WindCard extends React.Component<Props, object> {

    public render() {
        if (this.props.timeSeries.length < 1) {
            return (null)
        } else {

            const data: DataTimeSeries[] = this.props.timeSeries.map(
                (type) => ({
                    name: type.data_type,
                    timeSeries: type.data,
                    unit: type.unit
                })
            )

            const speed = this.props.timeSeries.filter((type) => type.data_type.includes('speed'))
            const gust = this.props.timeSeries.filter((type) => type.data_type.includes('gust'))

            return (
                
                    <Card>
                        <CardHeader>
                            Winds 
                            { speed.length > 0 ? ' - ' + round(speed[0].data[speed[0].data.length - 1].reading, 1) : null }
                            { gust.length > 0 ? ' gusting to ' + round(gust[0].data[gust[0].data.length - 1].reading, 1) + ' ' + gust[0].unit : null}
                            </CardHeader>
                        <CardBody style={{padding: '.2rem'}}>
                            <WindTimeSeriesChart
                                days={this.props.days}
                                barbsPerDay={10}
                                data={data}
                                height={150} />
                        </CardBody>
                    </Card>
            )
        }
    }
}
