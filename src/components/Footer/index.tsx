"use client"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export const Footer: React.FunctionComponent = () => (
  <footer className="mt-auto caption py-6 bg-secondary bg-opacity-5">
    <Row className="text-center">
      <Col xs={12} md={12}>{`Copyright © ${new Date().getFullYear()} - NERACOOS`}</Col>
      <Col xs={12} md={12}>
        Use{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzP90655d-ZuDGpdgcMmTvxW1sgR_Hg4KI1KCfQDFU8MMF0g/viewform?usp=sf_link">
          this form
        </a>{" "}
        to send us feedback or bug reports
      </Col>
      <Col xs={12} md={12}>
        Product of <a href="http://www.neracoos.org/">NERACOOS.org</a> - Developed and maintained by the{" "}
        <a href="https://gmri.org/commitments/science/ocean-data-products/">Gulf of Maine Research Institute</a>
      </Col>
    </Row>
  </footer>
)

export default Footer
