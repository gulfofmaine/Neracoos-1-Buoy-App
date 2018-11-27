/**
 * Current platform conditions component
 */
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row
} from 'reactstrap'

import { SmallTimeSeriesChart } from '@app/components/Charts'
import { 
    paths,
    StoreState 
} from '@app/constants'

import { humanDataName, naturalBounds } from '@app/Shared/dataTypes'
import { round } from '@app/Shared/math'
import { convertUnit } from '@app/Shared/unitConversion'
import { urlPartReplacer } from '@app/Shared/urlParams'

import { Platform } from '../types'

import { WindCard } from './WindCard'


interface Props {
    /** Platform ID to display the current conditions for */
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

const prefferedDataTypesList = [
    'significant_height_of_wind_and_swell_waves',
    'dominant_wave_period',
    'air_temperature',
    'sea_level_pressure',
    'visibility_in_air'
]

/** Data types that we wish to display on the current conditions page */
const prefferedDataTypes = new Set(prefferedDataTypesList)

/** Wind data types that we wish to display */
const windDataTypes = new Set([
    'wind_from_direction',
    'wind_gust',
    'wind_speed'
])


/**
 * Current Platform Conditions component
 */
export class CurrentPlatformConditionsBase extends React.Component<Props & ReduxProps, object> {

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)
        const platform = filteredPlatforms[0]

        const aDayAgo = new Date()
        aDayAgo.setDate(aDayAgo.getDate() - 1)

        // Seperate out wind data
        const windData = platform.data_types.filter(
            (type) => windDataTypes.has(type.data_type)
        )

        let showWinds = false
        if (windData.length > 0) {
            if (windData[0].data.filter((r) => r.time > aDayAgo).length > 0) {
                showWinds = true
            }
        }

        // The rest of the data to display
        const filteredData = platform.data_types.filter(
            (type) => prefferedDataTypes.has(type.data_type) && type.depth < 2)
        
        filteredData.sort((a, b) => prefferedDataTypesList.indexOf(a.data_type) - prefferedDataTypesList.indexOf(b.data_type))
        
        // Data cards
        const dataTypes = filteredData.map((type, index) => {
            let depth: string
            if (type.depth === 0) {
                depth = ''
            } else if (type.depth > 0) {
                depth = ' - ' + type.depth + 'm'
            } else {
                depth = ' - ' + -type.depth + 'm'
            }

            const data = type.data.filter((reading) => reading.time > aDayAgo)

            // If there is currently no valid data, then display a card letting us know.
            if (data.length === 0) {
                return (
                    <Col md="4" sm="6" style={{paddingTop: '1rem'}} key={index}>
                        <Card>
                            <CardBody>
                                No data for {humanDataName(type.data_type)} in the last day.
                            </CardBody>
                            
                        </Card>
                    </Col>
                )
            }

            const latest = data[data.length - 1]
            const bounds = naturalBounds(type.data_type)

            return (
                <Col key={index} md="4" sm="6" style={{paddingTop: '1rem'}}>
                    <Link to={urlPartReplacer(
                                        urlPartReplacer(paths.platforms.observations, ':id', this.props.platformId),
                                        ':type', type.data_type)} >
                        <Card >
                            <CardHeader>
                                
                                    {humanDataName(type.data_type) + depth} - { round(latest.reading, 1) } { type.unit }
                                     { convertUnit(type.unit, latest.reading)}
                                
                            </CardHeader>
                            <CardBody style={{padding: '.2rem'}}>
                                <SmallTimeSeriesChart 
                                    name={type.data_type} 
                                    timeSeries={data}
                                    unit={type.unit} 
                                    softMin={bounds[0]}
                                    softMax={bounds[1]}/>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            )
        })

        return (
            <Row>
                { showWinds ? (
                    <Col md="4" sm="6" style={{paddingTop: '1rem'}} >
                        <Link to={urlPartReplacer(paths.platforms.observationsWind, ':id', this.props.platformId)} >
                            <WindCard 
                                days={1} 
                                timeSeries={windData} />
                        </Link>
                    </Col>
                ) : null}
                { dataTypes }
            </Row>
        )
    }
}

/** Redux connected CurrentPlatformConditions component. See [[CurrentPlatformConditionsBase]] for details. */
export const CurrentPlatformConditions = connect(mapStateToProps)(CurrentPlatformConditionsBase)
