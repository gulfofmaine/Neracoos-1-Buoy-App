/**
 * Combined redux reducer for all of the features.
 */

import { connectRouter } from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "/Shared/constants"

import { erddapReducer as erddap } from "Features/ERDDAP"
import { wagtailReducer as wagtail } from "Features/WagtailApi"

/**
 * Redux reducer
 */
export default (history: History) =>
  combineReducers<StoreState, Action>({
    erddap,
    router: connectRouter(history),
    wagtail
  })
