"use client"
import React from "react"
import { Col, Row } from "reactstrap"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  )
}
