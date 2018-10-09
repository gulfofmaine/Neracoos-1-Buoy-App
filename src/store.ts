import { connectRouter, routerMiddleware } from 'connected-react-router'
// import { createBrowserHistory } from 'history'
import { createHashHistory } from 'history'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import rootReducer from './reducer'

import { StoreState } from './constants'

/**
 * Browser history
 */
// export const history = createBrowserHistory()
export const history = createHashHistory()

/**
 * Global Redux store
 */
export const store: Store<StoreState> = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk
        )
    )
)

export default store
