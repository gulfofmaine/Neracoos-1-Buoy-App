import * as React from 'react'
import { connect } from 'react-redux'
import {
    // Card,
    // CardBody,
    // CardHeader,
    Col,
    Row
} from 'reactstrap'

import { LargeTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { humanDataName } from '@app/Shared/dataTypes'
// import { round } from '@app/Shared/math'

import { Platform } from '../types'

interface Props {
    platformId: string
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

export class ObservedPlatformConditionsBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            const timeSeries = platform.data_types.filter((d) => d.data_type === this.props.type).sort((d) => d.depth)

            const charts = timeSeries.map((d, index) => {

                const depth = d.depth > 0 ? ' at ' + d.depth + 'm below' : ''

                return (
                    <Row key={index}>
                        <Col>
                            <h4>{humanDataName(d.data_type)}{depth}</h4>
                            <LargeTimeSeriesChart timeSeries={d.data} unit={d.unit} name={humanDataName(d.data_type)} /> 
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

export const ObservedPlatformConditions = connect(mapStateToProps)(ObservedPlatformConditionsBase)
