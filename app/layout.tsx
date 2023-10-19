import { Metadata } from "next"
import React from "react"

import NavBar from "components/NavBar/index.next"
import { Footer } from "../src/components/Footer"

import "../src/index.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://openlayers.org/en/v5.2.0/css/ol.css" type="text/css" />
      </head>
      <body>
        <div className="App">
          <NavBar />
          <div className="container-fluid">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: "NERACOOS Mariners Dashboard",
    template: "%s | NERACOOS Mariners Dashboard",
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    title: "NERACOOS",
  },
}
