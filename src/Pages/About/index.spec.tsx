import * as React from "react"
import { act } from "@testing-library/react"

import { renderWithClient } from "../../tests/utils"

import AboutPage from "."

it("renders without crashing", async () => {
  await act(async () => renderWithClient(<AboutPage />))
})
