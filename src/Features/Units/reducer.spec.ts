import * as actionTypes from "./actionTypes"
import { unitReducer } from "./reducer"
import { UnitSystem } from "./types"

const resultOf = (actions, initialState) => actions.reduce(unitReducer, initialState)

describe("Unit System Reducer", () => {
  it("Creates a valid initial state with the imperial system selected", () => {
    const initialState = undefined
    const action = {}
    const finalState = resultOf([action], initialState)

    expect(finalState.system).toBeDefined()
    expect(finalState.system).toEqual(UnitSystem.imperial)
  })

  it("Can switch unit system to imperial", () => {
    const initialState = {
      system: UnitSystem.metric
    }
    const action = {
      system: UnitSystem.imperial,
      type: actionTypes.UNIT_SWITCH
    }

    const finalState = resultOf([action], initialState)

    expect(finalState.system).toEqual(UnitSystem.imperial)
  })
})
