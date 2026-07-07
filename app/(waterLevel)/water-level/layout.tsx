import React from "react"
import { SitewideBanner } from "components/SitewideBanner"

export default function Layout({ children }) {
  return (
    <>
      <SitewideBanner />
      {children}
    </>
  )
}
