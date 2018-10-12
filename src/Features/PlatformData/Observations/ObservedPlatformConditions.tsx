/**
 * Generalized Platform Observed Conditions Component
 */
import * as React from 'react'
import { connect } from 'react-redux'
import {
    Col,
    Row
} from 'reactstrap'

import { LargeTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { humanDataName, naturalBounds } from '@app/Shared/dataTypes'

import { Platform } from '../types'


interface Props {
    /** Platform id to show observed data for */
    platformId: string
    /** Type of data to display */
    type: string
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}


/**
 * Display observed conditions for given platform and condition type.
 */
export class ObservedPlatformConditionsBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            const timeSeries = platform.data_types.filter((d) => d.data_type === this.props.type).sort((d) => d.depth)

            timeSeries.sort((a, b) => a.depth - b.depth)

            const charts = timeSeries.map((d, index) => {

                const depth = d.depth > 0 ? ' at ' + d.depth + 'm below' : ''

                const bounds = naturalBounds(d.data_type)

                return (
                    <Row key={index}>
                        <Col>
                            <h4>{humanDataName(d.data_type)}{depth}</h4>
                            <LargeTimeSeriesChart 
                                timeSeries={d.data} 
                                unit={d.unit} 
                                name={humanDataName(d.data_type)} 
                                softMin={bounds[0]}
                                softMax={bounds[1]} /> 
                        </Col>
                    </Row>
                )
            })

            return (
                <div>
                    {charts}
                </div>
            )
        } else {
            return (
                <Row>
                    <Col>
                        Unknown stuff
                    </Col>
                </Row>
            )
        }
    }
}

/** Redux connected ObservedPlatformConditions component. See [[ObservedPlatformConditionsBase]] for details. */
export const ObservedPlatformConditions = connect(mapStateToProps)(ObservedPlatformConditionsBase)
