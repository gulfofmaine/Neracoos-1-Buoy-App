import * as React from "react"
import { render, screen } from "@testing-library/react"

import AboutPage from "."

it("renders without crashing", () => {
  render(<AboutPage />)
})
