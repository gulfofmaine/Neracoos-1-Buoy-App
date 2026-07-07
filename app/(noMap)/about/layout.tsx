"use client"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { SitewideBanner } from "components/SitewideBanner"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SitewideBanner />
      <Row>
        <Col>{children}</Col>
      </Row>
    </>
  )
}
