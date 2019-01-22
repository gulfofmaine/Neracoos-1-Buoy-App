import * as React from "react"
import { Col, Row } from "reactstrap"

import { DrupalBlock } from "@app/Features/Drupal"
import { ErddapMap, ErddapPlatformsLoader } from "@app/Features/ERDDAP"

/**
 * Home page component that combines a map with content from Drupal.
 */
export const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <Row>
      <Col sm={6}>
        <ErddapPlatformsLoader>
          <ErddapMap platformId="" />
        </ErddapPlatformsLoader>
      </Col>
      <Col sm={6}>
        <DrupalBlock node="node/27" />
      </Col>
    </Row>
  )
}

export default HomePage
