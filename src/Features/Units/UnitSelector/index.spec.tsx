import { describe, it, expect, vi } from "vitest"
import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { UnitSystem } from "../types"
import { UnitSelectorBase } from "./index"

describe("UnitSelector", () => {
  it("Will display the currently selected unit system", async () => {
    const system = UnitSystem.metric
    const switchUnit = vi.fn()

    render(<UnitSelectorBase system={system} switchUnits={switchUnit} />)

    expect(switchUnit).not.toHaveBeenCalled()
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("Metric")
    expect(screen.getAllByRole("button")[1]).toHaveTextContent("English")

    const user = userEvent.setup()
    await user.click(screen.getByText("English"))
    expect(switchUnit).toHaveBeenCalledWith("English")
  })
})
