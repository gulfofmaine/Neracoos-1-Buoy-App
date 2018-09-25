import * as React from 'react'
import { Col, Row } from 'reactstrap'

import { DrupalBlock } from '@app/Features/Drupal'
import { PlatformMap } from '@app/Features/PlatformMap'


export const HomePage: React.StatelessComponent<{}> = () => {
    return (
        <Row>
            <Col>
                <h2>Home</h2>
                <PlatformMap />
            </Col>
            <Col>
                <DrupalBlock node="node/5" />
            </Col>
        </Row>
    )
}

export default HomePage
