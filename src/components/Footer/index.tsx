"use client"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const colSize = 10

export const Footer: React.FunctionComponent = () => (
  <footer className="footer mt-auto pb-2 footer-font">
    <Row className="p-1 pt-2">
      <Col md={colSize} className="mx-auto text-center">
        Copyright © 2021 ~ NERACOOS
      </Col>
    </Row>
    <Row className="p-1">
      <Col md={colSize} className="mx-auto text-center">
        Use{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzP90655d-ZuDGpdgcMmTvxW1sgR_Hg4KI1KCfQDFU8MMF0g/viewform?usp=sf_link">
          this form
        </a>{" "}
        to send us feedback or bug reports
      </Col>
    </Row>
    <Row className="p-1">
      <Col md={colSize} className="mx-auto text-center">
        Product of <a href="http://www.neracoos.org/">NERACOOS.org</a> - Developed and maintained by the{" "}
        <a href="https://gmri.org/commitments/science/ocean-data-products/">Gulf of Maine Research Institute</a>
      </Col>
    </Row>
  </footer>
)

export default Footer
