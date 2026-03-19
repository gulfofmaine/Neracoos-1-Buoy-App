import { createRoot } from "react-dom/client"
import { it } from "vitest"

import ContentBlock from "."

it("renders without crashing", () => {
  const div = document.createElement("div")
  const root = createRoot(div)
  root.render(<ContentBlock content="<h2>Hello</h2>" />)
})
