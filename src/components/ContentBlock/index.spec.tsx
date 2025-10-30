import { describe, it, expect } from "vitest"
import * as React from "react"
import { createRoot } from "react-dom/client"

import ContentBlock from "."

it("renders without crashing", () => {
  const div = document.createElement("div")
  const root = createRoot(div)
  root.render(<ContentBlock content="<h2>Hello</h2>" />)
})
