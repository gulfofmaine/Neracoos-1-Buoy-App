"use client"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  )
}
