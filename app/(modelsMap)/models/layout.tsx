"use client"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { STACProvider } from "./stac-queries"

export default function ModelingLayout({ children }: { children: React.ReactNode }) {
  return (
    <STACProvider>
      <Row>
        <Col>{children}</Col>
      </Row>
    </STACProvider>
  )
}
