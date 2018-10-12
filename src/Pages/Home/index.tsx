import * as React from 'react'
import { Col, Row } from 'reactstrap'

import { DrupalBlock } from '@app/Features/Drupal'
import { PlatformMap, PlatformMapLoader } from '@app/Features/PlatformMap'


/**
 * Home page component that combines a map with content from Drupal.
 */
export const HomePage: React.StatelessComponent<{}> = () => {
    return (
        <Row>
            <Col>
                <PlatformMapLoader>
                    <PlatformMap platformId='' />
                </PlatformMapLoader>
            </Col>
            <Col>
                <DrupalBlock node="node/27" />
            </Col>
        </Row>
    )
}

export default HomePage
