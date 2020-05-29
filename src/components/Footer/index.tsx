import * as React from "react"
import { Col, Row } from "reactstrap"

import { SignalFlag } from "components/SignalFlag"

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
        Product of <a href="http://www.neracoos.org/">NERACOOS.org</a> developed and maintained by the{" "}
        <a href="https://www.gmri.org/our-work/research/our-approach/ocean-data">Gulf of Maine Research Institute</a>
      </Col>
    </Row>
    <Row style={textStyle}>
      <Col md={colSize} className="mx-auto text-center">
        <a href="https://www.gmri.org/">
          <img
            src="http://gmri.org/sites/default/files/gmri_logo_tag.jpg"
            style={logoStyle}
            alt="Gulf of Maine Research Institute"
            title="Gulf of Maine Research Institute"
          />
        </a>
        <a href="https://www.gmri.org/our-work/research/our-approach/ocean-data" style={{ display: "inline-block" }}>
          <SignalFlag character="o" title="O for Ocean" style={imageStyle} />
          <SignalFlag character="d" title="D for Data" style={imageStyle} />
          <SignalFlag character="p" title="P for Products" style={imageStyle} />
        </a>
      </Col>
    </Row>
  </div>
)

export default Footer
