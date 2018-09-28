import * as React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col
} from 'reactstrap'

import { round } from '@app/Shared/math'
import { DataTimeSeries } from '@app/Shared/timeSeries'

import { SmallWindTimeSeriesChart } from '@app/components/Charts'

import { PlatformData } from '../types'

interface Props {
    timeSeries: PlatformData[]
    days: number
}

export class WindCard extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)
    }

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
                <Col md="4" style={{paddingTop: '1rem'}}>
                    <Card>
                        <CardHeader>
                            Winds 
                            { speed.length > 0 ? ' - ' + round(speed[0].data[speed[0].data.length - 1].reading, 1) : null }
                            { gust.length > 0 ? ' gusting to ' + round(gust[0].data[gust[0].data.length - 1].reading, 1) + ' ' + gust[0].unit : null}
                            </CardHeader>
                        <CardBody style={{padding: '.2rem'}}>
                            <SmallWindTimeSeriesChart
                                days={this.props.days}
                                data={data} />
                        </CardBody>
                    </Card>
                </Col>
            )
        }
    }
}