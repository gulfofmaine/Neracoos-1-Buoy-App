/**
 * Combined redux reducer for all of the features.
 */

import { combineReducers } from 'redux'

import { Action } from './actions'
import { StoreState } from './constants'

import { drupalReducer as drupal } from '@app/Features/Drupal'
import { erddapReducer as erddap } from '@app/Features/ERDDAP'
import { platformDataReducer as platformData } from '@app/Features/PlatformData'
import { platformMapReducer as platformMap } from '@app/Features/PlatformMap'

/**
 * Redux reducer
 */
export default combineReducers<StoreState, Action>({
    drupal,
    erddap,
    platformData,
    platformMap
})
