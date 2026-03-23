import { createRoot } from "react-dom/client"
import { describe, it } from "vitest"

import Footer from "./index"

describe("Footer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    const root = createRoot(div)
    root.render(<Footer />)
  })
})
