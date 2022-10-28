import { Col, Row } from "components/Bootstrap/layout"
import React from "react"

export default function PlatformLayout() {
  return (
    <Row>
      <Col sm={{ size: true, order: 2 }}>Platform list</Col>
      <Col sm={{ size: true, order: 1 }}>Map</Col>
    </Row>
  )
}
