import * as React from "react"
import { Col, Row } from "reactstrap"

import { ErddapMap, ErddapPlatformsLoader } from "@app/Features/ERDDAP"
import { WagtailBlock } from "@app/Features/WagtailApi"

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
        <WagtailBlock pageId="4" />
      </Col>
    </Row>
  )
}

export default HomePage
