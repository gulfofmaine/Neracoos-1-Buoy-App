import { Action } from '@app/actions'

import * as actionTypes from './actionTypes'
import { initialStoreState } from './constants'
import { PlatformMapStoreState } from './types'

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
