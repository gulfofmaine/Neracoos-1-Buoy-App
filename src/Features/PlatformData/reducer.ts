import { Action } from '@app/actions'

import { PlatformForecastLoading } from './actions'

import * as actionTypes from './actionTypes'
import { 
    DatasetData,
    ErddapDatasetAndField,
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
            if (state.datasetInfo.filter((d) => d.datasetId === action.dataset.datasetId && d.server === action.dataset.server).length > 0) {
                
                return {
                    ...state,
                    datasetInfo: state.datasetInfo.map((d) => {
                        if (d.datasetId === action.dataset.datasetId && d.server === action.dataset.server) {
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
                    ...action.dataset,
                    coverageEnd: new Date(),
                    coverageStart: new Date(),
                    error_message: '',
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
                    if (d.datasetId === action.dataset.datasetId && d.server === action.dataset.server) {
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
            if (state.datasetInfo.filter((d) => d.datasetId === action.dataset.datasetId && d.server === action.dataset.server).length > 0) {
                
                return {
                    ...state,
                    datasetInfo: state.datasetInfo.map((d) => {
                        if (d.datasetId === action.dataset.datasetId && d.server === action.dataset.server) {
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
        
        case actionTypes.PLATFORM_DATA_FORECAST_LOADING:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === (action as PlatformForecastLoading).platformId) {
                        if (p.forecasts_types.filter((f) => f.dataset === action.dataset).length > 0) {
                            return {
                                ...p,
                                forecasts_types: p.forecasts_types.map((f) => {
                                    if (f.dataset === action.dataset) {
                                        return {
                                            ...f,
                                            status: Status.Loading
                                        }
                                    } else {
                                        return f
                                    }
                                })
                            }
                        } else {
                            const newForecast: DatasetData = {
                                data: [],
                                data_type: '',
                                dataset: action.dataset as ErddapDatasetAndField,
                                depth: 0,
                                error_message: '',
                                status: Status.Loading,
                                unit: ''
                            }
                            return {
                                ...p,
                                forecasts_types: [...p.forecasts_types, newForecast]
                            }
                        }
                        
                    } else {
                        return p
                    }
                })
            }

        case actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            forecasts_types: p.forecasts_types.map((f) => {
                                if (f.dataset === action.dataset) {
                                    return {
                                        ...f,
                                        error_message: action.errorMessage,
                                        status: Status.Error
                                    }
                                } else {
                                    return f
                                }
                            })
                        }
                    } else {
                        return p
                    }
                })
            }
        
        case actionTypes.PLATFORM_DATA_FORECAST_CLEAR_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            forecasts_types: p.forecasts_types.map((f) => {
                                if (f.dataset === action.dataset) {
                                    return {
                                        ...f,
                                        error_message: ''
                                    }
                                } else {
                                    return f
                                }
                            })
                        }
                    } else {
                        return p
                    }
                })
            }
        
        case actionTypes.PLATFORM_DATA_FORECAST_LOAD_SUCCESS:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {
                        return {
                            ...p,
                            forecasts_types: p.forecasts_types.map((f) => {
                                if (f.dataset === action.dataset) {
                                    return {
                                        ...f,
                                        ...action.data,
                                        error_message: '',
                                        status: Status.Loaded
                                    }
                                } else {
                                    return f
                                }
                            })
                        }
                    } else {
                        return p
                    }
                })
            }

        default:
            return state
    }
}
