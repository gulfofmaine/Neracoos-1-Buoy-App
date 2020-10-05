/**
 * Combined redux reducer for all of the features.
 */
import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "Shared/constants/store"

import { unitReducer as unit } from "Features/Units"

/**
 * Redux reducer
 */
export default combineReducers<StoreState, Action>({
  unit,
})
