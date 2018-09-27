import * as React from 'react'
import { Col, Row } from 'reactstrap'

export class RootInfo extends React.Component<object, object> {
    public render() {
        return (
            <Row>
                <Col>
                    <p>This map displays real-time observations from buoys and monitoring stations in the Northeast region.</p>
                    <p>Due to atmospheric or other conditions, latest data may not always be available.</p>
                    <p><small>NOTICE: Realtime data is considered provisional. Please read the defintion of <a href="http://neracoos.org/data/provisional.html">provisional data</a> and it's inherent limations.</small></p>
                </Col>
            </Row>
        )
    }
}