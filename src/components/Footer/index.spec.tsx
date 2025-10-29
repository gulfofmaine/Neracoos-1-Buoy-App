import { describe, it, expect } from "vitest"
import * as React from "react"
import { createRoot } from "react-dom/client"

import Footer from "./index"

describe("Footer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<Footer />)
  })
})
