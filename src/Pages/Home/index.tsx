import * as React from "react"
import { Col, Row } from "reactstrap"

import { ErddapMap, Superlatives } from "Features/ERDDAP"
import { WagtailBlock } from "Features/WagtailApi"
import { regions } from "Shared/regions"

/**
 * Home page component that combines a map with content from Drupal.
 */
export const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <Row>
      <Col sm={6}>
        <ErddapMap boundingBox={regions.GulfOfMaine.bbox} height="60vh" />
        <Superlatives />
      </Col>
      <Col sm={6}>
        <WagtailBlock pageId="4" />
      </Col>
    </Row>
  )
}

export default HomePage
