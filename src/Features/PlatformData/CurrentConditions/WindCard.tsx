import * as React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col
} from 'reactstrap'

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

            return (
                <Col md="4" style={{paddingTop: '1rem'}}>
                    <Card>
                        <CardHeader>Winds</CardHeader>
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