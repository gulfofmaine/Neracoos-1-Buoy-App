import { Action } from "actions"

import * as actionTypes from "./actionTypes"
import { initialStoreState, MapState } from "./types"

export const mapStateReducer = (state: MapState = initialStoreState, action: Action): MapState => {
  switch (action.type) {
    case actionTypes.SET_VIEW:
      return {
        view: action.view,
      }
    default:
      return state
  }
}
