import { MapView } from "components/Map"

import * as actionTypes from "./actionTypes"

// Action Types

export interface SetView {
  type: typeof actionTypes.SET_VIEW
  view: MapView
}

export type MapStateActions = SetView

/**
 * Persist the map view in redux state
 * @param view
 * @returns
 */
export const setView = (view: MapView): SetView => {
  return {
    view,
    type: actionTypes.SET_VIEW,
  }
}
