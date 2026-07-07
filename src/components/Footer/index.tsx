"use client"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export const Footer: React.FunctionComponent = () => (
  <footer className="mt-auto caption py-6 px-auto bg-secondary bg-opacity-5">
    <Row className="text-center g-1">
      <Col xs={12} md={12}>{`Copyright © ${new Date().getFullYear()} - NERACOOS`}</Col>
      <Col xs={12} md={12}>
        Send us{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzP90655d-ZuDGpdgcMmTvxW1sgR_Hg4KI1KCfQDFU8MMF0g/viewform?usp=sf_link">
          feedback/bug reports
        </a>
      </Col>
      <Col xs={12} md={12}>
        Product of: <a href="http://www.neracoos.org/">NERACOOS.org</a> - Developed by:{" "}
        <a href="https://gmri.org/commitments/science/ocean-data-products/">GMRI</a>
      </Col>
    </Row>
  </footer>
)

export default Footer
