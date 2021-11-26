import * as Sentry from "@sentry/react"
import { createBrowserHistory } from "history"
import { createReduxHistoryContext } from "redux-first-history"
import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./reducer"

import { StoreState } from "./Shared/constants/store"

/**
 * Browser history
 */

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
})

const sentryReduxEnhancer = Sentry.createReduxEnhancer({})

/**
 * Global Redux store
 */
export const store: Store<StoreState> = createStore(
  rootReducer(routerReducer),
  composeWithDevTools(applyMiddleware(routerMiddleware), sentryReduxEnhancer)
)

export default store

export const history = createReduxHistory(store)
