import { Metadata, Viewport } from "next"
import React from "react"

import NavBar from "components/NavBar"
import { Footer } from "../src/components/Footer"

import Providers from "./providers"

import "../src/index.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ margin: 0, overflow: "none" }}>
      <body>
        <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
          <Providers>
            <NavBar />
            <div className="container-fluid" style={{ paddingBottom: "110px" }}>
              {children}
            </div>
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
