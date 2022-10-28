import { Col, Row } from "components/Bootstrap/layout"
import React from "react"

export interface Props {
  children: React.ReactNode
  params: { platformId: string }
}

export default function PlatformLayout({ children, params }: Props) {
  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>Platform info for {params.platformId}</Col>
        <Col sm={{ size: true, order: 1 }}>Map</Col>
      </Row>
      <Row>
        <Col>Platform tabs for {params.platformId}</Col>
      </Row>
      {children}
    </React.Fragment>
  )
}
