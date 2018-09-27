import { Action } from '@app/actions'

import * as actionTypes from './actionTypes'
import { initialStoreState, Platform, PlatformDataStoreState, Status } from './types'

export function platformDataReducer(state: PlatformDataStoreState = initialStoreState, action: Action): PlatformDataStoreState {
    switch(action.type) {
        case actionTypes.PLATFORM_DATA_LOADING:
            const filteredPlatforms = state.platforms.filter((p) => p.id === action.platformId)
            const otherPlatforms = state.platforms.filter((p) => p.id !== action.platformId)

            let platform: Platform
            if (filteredPlatforms.length > 0) {
                platform = filteredPlatforms[0]
                platform.status = Status.Loading
            } else {
                platform = {
                    data_types: [],
                    error_message: '',
                    id: action.platformId,
                    status: Status.Loading
                }
            }

            return {
                ...state,
                platforms: [...otherPlatforms, platform]
            }
        default:
            return state
    }
}
