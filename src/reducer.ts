/**
 * Combined redux reducer for all of the features.
 */

import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "Shared/constants/store"

import { mapStateReducer as mapState } from "Features/StatefulMap"
import { unitReducer as unit } from "Features/Units"

/**
 * Redux reducer
 */
const reducer = (routerReducer) =>
  combineReducers<StoreState, Action>({
    router: routerReducer,
    mapState,
    unit,
  })

export default reducer
