import React from "react"

import { Container } from "components/Bootstrap/layout"
import Footer from "components/Footer"
import NavBar from "components/NavBar"

import "../index.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className="App">
          <NavBar />

          <Container fluid={true}>
            {children}
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  )
}
