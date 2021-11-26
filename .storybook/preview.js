import { MemoryRouter } from "react-router-dom"

import "../src/index.scss"

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
]
