import * as React from 'react'
import { Col, Row } from 'reactstrap'

import { DrupalBlock } from '@app/Features/Drupal'
import { ErddapMap, ErddapPlatformsLoader } from '@app/Features/ERDDAP'


/**
 * Home page component that combines a map with content from Drupal.
 */
export const HomePage: React.StatelessComponent<{}> = () => {
    return (
        <Row>
            <Col>
                <ErddapPlatformsLoader>
                    <ErddapMap platformId='' />
                </ErddapPlatformsLoader>
            </Col>
            <Col>
                <DrupalBlock node="node/27" />
            </Col>
        </Row>
    )
}

export default HomePage
