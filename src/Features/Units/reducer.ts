import { Action } from "actions"

import * as actionTypes from "./actionTypes"
import { initialStoreState, UnitStoreState } from "./types"

export const unitReducer = (state: UnitStoreState = initialStoreState, action: Action): UnitStoreState => {
  switch (action.type) {
    case actionTypes.UNIT_SWITCH:
      return {
        system: action.system
      }
    default:
      return state
  }
}
