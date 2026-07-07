import { Metadata, Viewport } from "next"
import React from "react"
import { Container } from "react-bootstrap"

import NavBar from "components/NavBar"
import { Footer } from "../src/components/Footer"

import Providers from "./providers"

import "../src/index.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="App d-flex flex-column min-vh-100 overflow-x-hidden">
          <Providers>
            <NavBar />
            <Container fluid className="p-0 px-5">
              {children}
            </Container>
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
export const revalidate = 300 // 5 * 60
