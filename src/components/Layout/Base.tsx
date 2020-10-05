import React from "react"
import { Container } from "reactstrap"

import { Footer } from "../Footer"
import { Head } from "../Head"
import NavBar from "../NavBar"

interface BaseLayoutProps {
  pageName?: string
}

export const BaseLayout: React.FunctionComponent<BaseLayoutProps> = ({ children, pageName }) => (
  <React.Fragment>
    <Head pageName={pageName} />
    <div className="App">
      <NavBar />
      <Container fluid={true}>{children}</Container>
      <Footer />
    </div>
  </React.Fragment>
)
