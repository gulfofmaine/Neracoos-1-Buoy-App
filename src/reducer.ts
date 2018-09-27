import { combineReducers } from 'redux'

import { Action } from './actions'
import { StoreState } from './constants'

import { drupalReducer as drupal } from '@app/Features/Drupal'
import { platformDataReducer as platformData } from '@app/Features/PlatformData'
import { platformMapReducer as platformMap } from '@app/Features/PlatformMap'

export default combineReducers<StoreState, Action>({
    drupal,
    platformData,
    platformMap
})
