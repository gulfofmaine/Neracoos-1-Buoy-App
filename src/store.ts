import * as Sentry from "@sentry/react"
import { createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./reducer"

import { StoreState } from "./Shared/constants/store"

/**
 * Browser history
 */
// export const history = createBrowserHistory()

const sentryReduxEnhancer = Sentry.createReduxEnhancer({})

/**
 * Global Redux store
 */
export const store: Store<StoreState> = createStore(rootReducer, composeWithDevTools(sentryReduxEnhancer))

export default store
