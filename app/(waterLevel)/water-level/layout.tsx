import React from "react"
import { SecondaryBanner } from "components/SecondaryBanner"

export default function Layout({ children }) {
  return (
    <>
      <SecondaryBanner variant="warning">
        <p style={{ fontStyle: "italic", fontSize: "14px", marginBottom: "0px", textAlign: "center" }}>
          Try the updated <a href="https://mariners-dev.aws.neracoos.org/">Mariners' Dashboard (Beta)</a>
        </p>
      </SecondaryBanner>
      {children}
    </>
  )
}
