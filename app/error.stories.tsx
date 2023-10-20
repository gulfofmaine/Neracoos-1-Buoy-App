import React from "react"

import ErrorPage, { FiveHundredInner } from "./error"

export default {
  component: ErrorPage,
  title: "App/Error Page",
}

export const fiveHundredPage = () => <ErrorPage />
