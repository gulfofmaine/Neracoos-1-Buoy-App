import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

import { ObservedPlatformConditions } from '@app/Features/PlatformData'

import { PlatformMatchParams } from './types'

export class ObservationsPage extends React.Component<RouteComponentProps, object> {
    public render() {

        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <div>
                <Row>
                    <Col>
                        Observations { id }
                    </Col>
                </Row>
                <ObservedPlatformConditions platformId={id} />
            </div>
            
        )
    }
}