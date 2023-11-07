import { Metadata, Viewport } from "next"
import React from "react"

import NavBar from "components/NavBar"
import { Footer } from "../src/components/Footer"

import Providers from "./providers"

import "../src/index.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://openlayers.org/en/v5.2.0/css/ol.css" type="text/css" />
      </head>
      <body>
        <div className="App">
          <Providers>
            <NavBar />
            <div className="container-fluid">{children}</div>
            <Footer />
          </Providers>
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
  appleWebApp: {
    capable: true,
    title: "NERACOOS",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

/**
 * Revalidate any server side fetches by default every 5 minutes
 */
export const revalidate = 5 * 50
