import * as React from "react"
import { Col, Row } from "reactstrap"

import { ErddapMap, Superlatives } from "Features/ERDDAP"
import { WagtailBlock } from "Features/WagtailApi"

/**
 * Home page component that combines a map with content from Drupal.
 */
export const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <Row>
      <Col sm={6}>
        <ErddapMap platformId="" />
        <Superlatives />
      </Col>
      <Col sm={6}>
        <WagtailBlock pageId="4" />
      </Col>
    </Row>
  )
}

export default HomePage
