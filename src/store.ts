import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
// import { createHashHistory } from 'history'
import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

import rootReducer from "./reducer"

import { StoreState } from "./Shared/constants/store"

/**
 * Browser history
 */
export const history = createBrowserHistory()
// export const history = createHashHistory()

/**
 * Global Redux store
 */
export const store: Store<StoreState> = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), reduxThunk))
)

export default store
