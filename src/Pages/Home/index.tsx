import * as React from 'react'
import { Col, Row } from 'reactstrap'

import { DrupalBlock } from '@app/Features/Drupal'
import { PlatformMap, PlatformMapLoader } from '@app/Features/PlatformMap'


export const HomePage: React.StatelessComponent<{}> = () => {
    return (
        <Row>
            <Col>
                <PlatformMapLoader>
                    <PlatformMap />
                </PlatformMapLoader>
            </Col>
            <Col>
                <DrupalBlock node="node/5" />
            </Col>
        </Row>
    )
}

export default HomePage
