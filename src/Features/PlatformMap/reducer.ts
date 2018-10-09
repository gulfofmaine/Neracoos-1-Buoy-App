import { Action } from '@app/actions'

import * as actionTypes from './actionTypes'
import { initialStoreState } from './constants'
import { PlatformMapStoreState } from './types'

/**
 * Platform Map reducer that is primarily concerned if it is possible to load the map.
 * 
 * @param state Platform Map redux store sub-state to transform.
 * @param action Any valid redux action.
 * 
 * @returns Updated Platform Map redux store sub-state
 */
export function platformMapReducer(state: PlatformMapStoreState = initialStoreState, action: Action): PlatformMapStoreState {
    switch(action.type) {
        case actionTypes.PLATFORM_LOACTIONS_LOAD_SUCCESS:
            return {
                ...state,
                platforms: action.platforms
            }

        default:
            return state
    }
}
