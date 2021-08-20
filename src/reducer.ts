/**
 * Combined redux reducer for all of the features.
 */

import { connectRouter, LocationChangeAction } from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"

import { Action } from "./actions"
import { StoreState } from "Shared/constants/store"

import { mapStateReducer as mapState } from "Features/StatefulMap"
import { unitReducer as unit } from "Features/Units"

/**
 * Redux reducer
 */
const reducer = (history: History) =>
  combineReducers<StoreState, Action & LocationChangeAction>({
    router: connectRouter(history),
    mapState,
    unit,
  })

export default reducer
