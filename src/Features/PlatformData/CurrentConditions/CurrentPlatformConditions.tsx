import * as React from 'react'
import { connect } from 'react-redux'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row
} from 'reactstrap'

import { 
    SmallTimeSeriesChart
} from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { humanDataName } from '@app/Shared/dataTypes'
import { round } from '@app/Shared/math'

import { Platform } from '../types'

import { WindCard } from './WindCard'

interface Props {
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

const prefferedDataTypes = new Set([
    'air_temperature',
    'sea_level_pressure',
    'visibility_in_air',
    'dominant_wave_period',
    'significant_height_of_wind_and_swell_waves',
    'sea_water_temperature',
    // 'pressure_tendency'
])

const windDataTypes = new Set([
    'wind_from_direction',
    'wind_gust',
    'wind_speed'
])

export class CurrentPlatformConditionsBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            const windData = platform.data_types.filter(
                (type) => windDataTypes.has(type.data_type)
            )

            const filteredData = platform.data_types.filter(
                (type) => prefferedDataTypes.has(type.data_type) && type.depth < 2)
            
            const dataTypes = filteredData.map((type, index) => {
                let depth: string
                if (type.depth === 0) {
                    depth = ''
                } else if (type.depth > 0) {
                    depth = ' - ' + type.depth + 'm'
                } else {
                    depth = ' - ' + -type.depth + 'm'
                }

                const aDayAgo = new Date()
                aDayAgo.setDate(aDayAgo.getDate() - 1)
                const data = type.data.filter((reading) => reading.time > aDayAgo)

                const latest = data[data.length - 1]
                if (latest === undefined) {
                    // tslint:disable-next-line:no-debugger
                    debugger
                }

                return (
                    <Col key={index} md="4" style={{paddingTop: '1rem'}}>
                        <Card >
                            <CardHeader>{humanDataName(type.data_type) + depth} - { round(latest.reading, 1) } { type.unit }</CardHeader>
                            <CardBody style={{padding: '.2rem'}}>
                                <SmallTimeSeriesChart 
                                    name={type.data_type} 
                                    timeSeries={data}
                                    unit={type.unit} />
                            </CardBody>
                        </Card>
                    </Col>
                )
            })

            return (
                <Row>
                    <WindCard 
                        days={1} 
                        timeSeries={windData} />
                    { dataTypes }
                </Row>
            )
        } else {

            return (
                <div>Loading platform</div>
            )
        }
    }
}

export const CurrentPlatformConditions = connect(mapStateToProps)(CurrentPlatformConditionsBase)
