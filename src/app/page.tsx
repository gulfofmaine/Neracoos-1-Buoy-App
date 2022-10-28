import React from "react"

import { Col, Row } from "components/Bootstrap/layout"

import WagtailBlock from "./wagtailBlock"
import { Superlatives } from "./superlatives"

export default async function HomePage() {
  return (
    <Row>
      <Col sm={6}>
        Map
        <Superlatives />
      </Col>
      <Col sm={6}>
        <WagtailBlock pageId={4} />
      </Col>
    </Row>
  )
}
