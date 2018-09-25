import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import rootReducer from './reducer'

import { StoreState } from './constants'

export const store: Store<StoreState> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store
