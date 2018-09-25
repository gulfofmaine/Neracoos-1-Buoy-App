import { combineReducers } from 'redux'

import { Action } from './actions'
import { StoreState } from './constants'

import { drupalReducer as drupal } from '@app/Features/Drupal'

export default combineReducers<StoreState, Action>({
    drupal
})
