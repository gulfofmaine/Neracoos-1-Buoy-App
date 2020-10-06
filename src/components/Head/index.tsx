import React from "react"
import NextHead from "next/head"

interface HeadProps {
  pageName?: string
}

export const Head: React.FunctionComponent<HeadProps> = ({ pageName }) => (
  <NextHead>
    <title>NERACOOS Mariners Dashboard{pageName ? " - " + pageName : null}</title>

    <link
      rel="shortcut icon"
      href="http://neracoos.org/sites/neracoos.org/files/neracoosfavicon_0.ico"
      type="image/vnd.microsoft.icon"
    ></link>
  </NextHead>
)
