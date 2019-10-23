import { mount, render } from "enzyme"
import * as React from "react"

import { UnitSystem } from "../types"
import { UnitSelectorBase } from "./index"

describe("UnitSelector", () => {
  it("Will display the currently selected unit system", () => {
    const system = UnitSystem.mariners
    const switchUnit = jest.fn()

    const wrapper = mount(<UnitSelectorBase system={system} switchUnits={switchUnit} />)

    expect(switchUnit).not.toBeCalled()
    expect(wrapper.text()).toContain("Mariner's")
  })
})
