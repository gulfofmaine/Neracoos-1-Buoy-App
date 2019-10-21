/**
 * Combined redux reducer for all of the features.
 */

import { connectRouter, LocationChangeAction } from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "Shared/constants/store"

import { erddapReducer as erddap } from "Features/ERDDAP"
import { unitReducer as unit } from "Features/Units"
import { wagtailReducer as wagtail } from "Features/WagtailApi"

/**
 * Redux reducer
 */
export default (history: History) =>
  combineReducers<StoreState, Action & LocationChangeAction>({
    erddap,
    router: connectRouter(history),
    unit,
    wagtail
  })
