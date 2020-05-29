import * as React from "react"
import { Col, Row } from "reactstrap"

import neracoos from "./NERACOOS_horizontal_logo_acronym title_yellowline.png"
import gmri from "./gmri.jpg"

const imageStyle = { height: "40px", margin: ".2rem" }
const logoStyle = { ...imageStyle, height: "80px", marginRight: ".5rem" }

const textStyle = { fontSize: ".8rem", padding: ".25rem" }

const colSize = 10

export const Footer: React.SFC = () => (
  <div className="footer">
    <Row style={{ ...textStyle, paddingTop: "1rem" }}>
      <Col md={colSize} className="mx-auto text-center">
        Copyright © 2020 ~ NERACOOS
      </Col>
    </Row>
    <Row style={textStyle}>
      <Col md={colSize} className="mx-auto text-center">
        Product of <a href="http://www.neracoos.org/">NERACOOS.org</a> - Developed by the{" "}
        <a href="https://www.gmri.org/our-work/research/our-approach/ocean-data">
          Gulf of Maine Research Institute Ocean Data Products Team
        </a>
      </Col>
    </Row>
    <Row style={textStyle}>
      <Col md={colSize} className="mx-auto text-center">
        <a href="http://neracoos.org">
          <img src={neracoos} style={logoStyle} alt="NERACOOS" title="NERACOOS" />
        </a>
        <a href="https://www.gmri.org/our-work/research/our-approach/ocean-data">
          <img
            src={gmri}
            style={logoStyle}
            alt="Gulf of Maine Research Institute"
            title="Gulf of Maine Research Institute"
          />
        </a>
      </Col>
    </Row>
  </div>
)

export default Footer
