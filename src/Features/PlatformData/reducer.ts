import { Action } from '@app/actions'

import * as actionTypes from './actionTypes'
import { 
    ErddapDatasetInfo,
    initialStoreState, 
    Platform, 
    PlatformDataStoreState, 
    Status 
} from './types'

export function platformDataReducer(state: PlatformDataStoreState = initialStoreState, action: Action): PlatformDataStoreState {
    switch(action.type) {
        case actionTypes.PLATFORM_DATA_LOADING:
            if ((state.platforms.filter((p) => p.id === action.platformId)).length > 0) {
                
                return {
                    ...state,
                    platforms: state.platforms.map((p) => {
                        if (p.id === action.platformId) {
                            return {
                                    ...p,
                                    status: Status.Loading
                                }
                        } else {
                            return p
                        }
                    })
                }

            } else {
                const newPlatform: Platform = {
                    data_types: [],
                    error_message: '',
                    forecasts_types: [],
                    id: action.platformId,
                    status: Status.Loading
                }
                
                return {
                    ...state,
                    platforms: [...state.platforms, newPlatform]
                }

            }

        case actionTypes.PLATFORM_DATA_LOAD_SUCCESS:
            
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            data_types: action.data,
                            status: Status.Loaded
                        }
                    } else {
                        return p
                    }
                })
            }
        
        case actionTypes.PLATFORM_DATA_LOAD_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            error_message: action.error,
                            status: Status.Error
                        }
                    } else {
                        return p
                    }
                })
            }
        
        case actionTypes.PLATFORM_DATA_CLEAR_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            error_message: ''
                        }
                    } else {
                        return p
                    }
                })
            }

        case actionTypes.PLATFORM_DATA_METADATA_LOADING:
            if (state.datasetInfo.filter((d) => d.datasetId === action.dataset && d.server === action.server).length > 0) {
                
                return {
                    ...state,
                    datasetInfo: state.datasetInfo.map((d) => {
                        if (d.datasetId === action.dataset && d.server === action.server) {
                            return {
                                ...d,
                                status: Status.Loading
                            }
                        } else {
                            return d
                        }
                    })
                }

            } else {
                const newMetadata: ErddapDatasetInfo = {
                    coverageEnd: new Date(),
                    coverageStart: new Date(),
                    datasetId: action.dataset,
                    error_message: '',
                    server: action.server,
                    status: Status.Loading
                }

                return {
                    ...state,
                    datasetInfo: [...state.datasetInfo, newMetadata]
                }
            }
        
        case actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR:
            return {
                ...state,
                datasetInfo: state.datasetInfo.map((d) => {
                    if (d.datasetId === action.dataset && d.server === action.server) {
                        return {
                            ...d,
                            error_message: action.message,
                            status: Status.Error
                        }
                    } else {
                        return d
                    }
                })
            }

        case actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS:
            if (state.datasetInfo.filter((d) => d.datasetId === action.dataset && d.server === action.server).length > 0) {
                
                return {
                    ...state,
                    datasetInfo: state.datasetInfo.map((d) => {
                        if (d.datasetId === action.dataset && d.server === action.server) {
                            return {
                                ...d,
                                coverageEnd: action.coverageEnd,
                                coverageStart: action.coverageStart,
                                status: Status.Loaded
                            }
                        } else {
                            return d
                        }
                    })
                }
            }

        default:
            return state
    }
}
