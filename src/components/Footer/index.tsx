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
        Website and products developed and managed by{" "}
        <a href="https://www.gmri.org/our-work/research/our-approach/ocean-data">
          The Gulf of Maine Research Institute's Ocean Data Products team
        </a>
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
    <Row style={textStyle}>
      <Col md={colSize} className="mx-auto text-center">
        <strong>Regional Coastal Observing Systems:</strong>{" "}
        <a href="http://www.aoos.org/" target="_blank" title="Alaska Ocean Observing System" rel="noopener noreferrer">
          Alaska
        </a>{" "}
        •{" "}
        <a
          href="http://www.nanoos.org/"
          target="_blank"
          title="Pacific Northwest Regional Ocean Observing System"
          rel="noopener noreferrer"
        >
          Pacific Northwest
        </a>{" "}
        •{" "}
        <a
          href="http://www.cencoos.org/"
          target="_blank"
          title="Central and Northern California Ocean Observing"
          rel="noopener noreferrer"
        >
          Central and Northern California
        </a>{" "}
        •{" "}
        <a
          href="http://www.sccoos.org/"
          target="_blank"
          title="Southern California Coastal Ocean Observing System"
          rel="noopener noreferrer"
        >
          Southern California
        </a>{" "}
        •{" "}
        <a
          href="http://www.pacioos.org/"
          target="_blank"
          title="Pacific Islands Ocean Observing System"
          rel="noopener noreferrer"
        >
          Pacific Islands
        </a>{" "}
        •{" "}
        <a href="http://glos.us/" title="Great Lakes Observing System" target="_blank" rel="noopener noreferrer">
          Great Lakes{" "}
        </a>{" "}
        •{" "}
        <a
          href="http://www.neracoos.org/"
          target="_blank"
          title="Northeastern Regional Association of Coastal Ocean Observing Systems"
          rel="noopener noreferrer"
        >
          Atlantic-Northeast
        </a>{" "}
        •{" "}
        <a
          href="http://maracoos.org/"
          target="_blank"
          title="Mid-Atlantic Regional Association Coastal Ocean Observing System"
          rel="noopener noreferrer"
        >
          Mid-Atlantic
        </a>{" "}
        •{" "}
        <a
          href="http://secoora.org"
          target="_blank"
          title="Southeast Coastal Ocean Observing Regional Association"
          rel="noopener noreferrer"
        >
          Atlantic-Southeast
        </a>{" "}
        •{" "}
        <a
          href="http://gcoos.org/"
          target="_blank"
          title="Gulf of Mexico Coastal Ocean Observing System"
          rel="noopener noreferrer"
        >
          Gulf of Mexico
        </a>{" "}
        •{" "}
        <a href="http://cara.uprm.edu/" title="Caribbean Coastal Ocean Observing System" rel="noopener noreferrer">
          Caribbean
        </a>{" "}
        •{" "}
        <a href="http://www.ioosassociation.org/" target="_blank" title="IOOS Association" rel="noopener noreferrer">
          IOOS Association
        </a>
        <br />
        <strong>National Observing System Partners:</strong>{" "}
        <a
          href="http://www.act-us.info/"
          target="_blank"
          title="Alliance for Coastal Technologies ACT"
          rel="noopener noreferrer"
        >
          Alliance for Coastal Technologies (ACT)
        </a>{" "}
        •{" "}
        <a
          href="http://www.sura.org/home/"
          target="_blank"
          title="Southeastern Universities Research Association SURA"
          rel="noopener noreferrer"
        >
          Southeastern Universities Research Association (SURA)
        </a>
      </Col>
    </Row>
  </div>
)

export default Footer
