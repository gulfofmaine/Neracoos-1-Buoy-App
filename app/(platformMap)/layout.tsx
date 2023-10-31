"use client"
import * as React from "react"
import { Col, Row } from "reactstrap"

export default function Layout({
  children,
  sidebar,
  belowMap,
  bottom,
}: {
  children: React.ReactNode
  sidebar: React.ReactNode
  bottom: React.ReactNode
  belowMap: React.ReactNode
}) {
  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>{sidebar}</Col>

        <Col sm={{ size: true, order: 1 }}>
          <div>Map</div>
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {bottom ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
