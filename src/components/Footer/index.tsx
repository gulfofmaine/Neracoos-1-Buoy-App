import * as React from "react"
import { Col, Row } from "reactstrap"

const textStyle = { fontSize: ".8rem", padding: ".25rem" }

const colSize = 10

export const Footer: React.FunctionComponent = () => (
  <div className="footer">
    <Row style={{ ...textStyle, paddingTop: "1rem" }}>
      <Col md={colSize} className="mx-auto text-center">
        Copyright © 2020 ~ NERACOOS
      </Col>
    </Row>
    <Row style={textStyle}>
      <Col md={colSize} className="mx-auto text-center">
        Product of <a href="http://www.neracoos.org/">NERACOOS.org</a> - Developed and maintained by the{" "}
        <a href="https://gmri.org/commitments/science/ocean-data-products/">Gulf of Maine Research Institute</a>
      </Col>
    </Row>
  </div>
)

export default Footer
