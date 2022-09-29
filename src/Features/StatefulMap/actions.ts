import type { RView } from "rlayers/RMap"

import * as actionTypes from "./actionTypes"

// Action Types

export interface SetView {
  type: typeof actionTypes.SET_VIEW
  view: RView
}

export type MapStateActions = SetView

/**
 * Persist the map view in redux state
 * @param view
 * @returns
 */
export const setView = (view: RView): SetView => {
  return {
    view,
    type: actionTypes.SET_VIEW,
  }
}
