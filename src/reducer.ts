/**
 * Combined redux reducer for all of the features.
 */

import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "./constants"

import { erddapReducer as erddap } from "@app/Features/ERDDAP"
import { wagtailReducer as wagtail } from "@app/Features/WagtailApi"

/**
 * Redux reducer
 */
export default combineReducers<StoreState, Action>({
  erddap,
  wagtail
})
