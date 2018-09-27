import { Action } from '@app/actions'

import * as actionTypes from './actionTypes'
import { initialStoreState, Platform, PlatformDataStoreState, Status } from './types'

export function platformDataReducer(state: PlatformDataStoreState = initialStoreState, action: Action): PlatformDataStoreState {
    switch(action.type) {
        case actionTypes.PLATFORM_DATA_LOADING:
            const filteredPlatformsLoading = state.platforms.filter((p) => p.id === action.platformId)
            const otherPlatformsLoading = state.platforms.filter((p) => p.id !== action.platformId)

            let platform: Platform
            if (filteredPlatformsLoading.length > 0) {
                platform = filteredPlatformsLoading[0]
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
                platforms: [...otherPlatformsLoading, platform]
            }

        case actionTypes.PLATFORM_DATA_LOAD_SUCCESS:
            const filteredPlatformsSuccess = state.platforms.filter((p) => p.id === action.platformId)
            const otherPlatformsSuccess = state.platforms.filter((p) => p.id !== action.platformId)

            const platformSuccess = filteredPlatformsSuccess[0]
            platformSuccess.status = Status.Loaded
            platformSuccess.data_types = action.data

            return {
                ...state, 
                platforms: [...otherPlatformsSuccess, platformSuccess]
            }

        default:
            return state
    }
}
