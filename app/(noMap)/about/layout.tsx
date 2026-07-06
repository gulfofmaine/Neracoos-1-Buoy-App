"use client"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { SecondaryBanner } from "components/SecondaryBanner"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryBanner variant="warning">
        <p style={{ fontStyle: "italic", fontSize: "14px", marginBottom: "0px", textAlign: "center" }}>
          Try the updated <a href="https://mariners-dev.aws.neracoos.org/">Mariners' Dashboard (Beta)</a>
        </p>
      </SecondaryBanner>
      <Row>
        <Col>{children}</Col>
      </Row>
    </>
  )
}
