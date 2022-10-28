import React from "react"

import { Col, Row } from "components/Bootstrap/layout"
import WagtailBlock from "app/wagtailBlock"

export default async function AboutPage() {
  return (
    <Row>
      <Col>
        <WagtailBlock pageId={5} />
      </Col>
    </Row>
  )
}
