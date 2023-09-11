// import "../src/index.scss"
import { MemoryRouter } from "react-router-dom"

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
]
