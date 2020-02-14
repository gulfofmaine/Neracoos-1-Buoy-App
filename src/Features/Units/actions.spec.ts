import { unitSwitch } from "./actions"
import * as types from "./actionTypes"
import { UnitSystem } from "./types"

describe("Unit actions", () => {
  it("Should dispatch an action with the specified UnitSystem", () => {
    const expectedAction = {
      system: UnitSystem.mariners,
      type: types.UNIT_SWITCH
    }

    const result = unitSwitch(UnitSystem.mariners)

    expect(result).toEqual(expectedAction)
  })
})
