import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

import { CurrentPlatformConditions } from '@app/Features/PlatformData'

import { PlatformMatchParams } from './types'

export class CurrentConditionsPage extends React.Component<RouteComponentProps, object> {
    public render() {

        const { id } = this.props.match.params as PlatformMatchParams

        return (
            <Row>
                <Col>
                    Current conditions here { id }
                    <CurrentPlatformConditions platformId={id} />
                </Col>
            </Row>
            
        )
    }
}
