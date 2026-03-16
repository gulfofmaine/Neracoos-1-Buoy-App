import { Metadata, Viewport } from "next"
import React from "react"

import NavBar from "components/NavBar"
import { Footer } from "../src/components/Footer"

import Providers from "./providers"

import "../src/index.scss"
import { Container } from "react-bootstrap"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Flex & fluid for responsiveness */}
          <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <Container fluid className="flex-fill p-0">
              {children}
            </Container>
          </div>
          <Footer />
        </Providers>
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
