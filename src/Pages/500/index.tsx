import Image from "next/image"
import React from "react"
import { Col, Row } from "reactstrap"

import Footer from "components/Footer"
import NavBar from "components/NavBar"

import n_walkabout from "./n_walkabout.png"

export const FiveHundredInner: React.FC = () => (
  <React.Fragment>
    <Row>
      <Col md={{ offset: 2, size: 8 }}>
        <h1>The data has escaped</h1>
        <Image src={n_walkabout} style={{ maxWidth: "100%" }} alt="Track of a lost buoy" />
        <p>Despite our best intentions, something has gone wrong while trying to display the data.</p>

        <p>
          If you saw a <b>It looks like we&apos;re having issues</b> form, we hope that you filled it out, as it will help us
          fix the issue. Otherwise you can email <a href="mailto:info@neracoos.org">info@neracoos.org</a> with
          information about the error.
        </p>

        <p>
          Sometimes issues are short lived, so if you give it a minute, then try reloading the page, hopefully you will
          be able to get to the data. If you can&apos;t and this error shows up again, please fill out the form, or email us
          for help.
        </p>
      </Col>
    </Row>
  </React.Fragment>
)

export const FiveHundredPage: React.FC = () => (
  <div className="App" id="500_page">
    <NavBar />
    <FiveHundredInner />
    <Footer />
  </div>
)
