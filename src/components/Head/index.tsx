import React from "react"
import NextHead from "next/head"

interface HeadProps {
  pageName?: string
}

export const Head: React.FunctionComponent<HeadProps> = ({ pageName }) => (
  <NextHead>
    <title>NERACOOS Mariners Dashboard{pageName ? " - " + pageName : null}</title>
  </NextHead>
)
