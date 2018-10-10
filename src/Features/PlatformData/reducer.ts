/**
 * Platform data reducer
 */

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


/**
 * Platform data reducer
 * 
 * @param state Platform data redux store sub-state
 * @param action Any valid redux action
 * 
 * @returns Platform data redux store sub-state
 */
export function platformDataReducer(state: PlatformDataStoreState = initialStoreState, action: Action): PlatformDataStoreState {
    switch(action.type) {

        // Data loading transformation
        case actionTypes.PLATFORM_DATA_LOADING:
            
            // if there is an existing platform, update it's status
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

            } else {  // otherwise create a new platform
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

        // When a platform has sucessfully loaded data
        case actionTypes.PLATFORM_DATA_LOAD_SUCCESS:
            
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {  // if we have the correct platform update the status and data_types
                        return {
                            ...p,
                            data_types: action.data,
                            status: Status.Loaded
                        }
                    } else {  // otherwise return the unmodified platform
                        return p
                    }
                })
            }
        
        // When there is an error loading a platform
        case actionTypes.PLATFORM_DATA_LOAD_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {  // dispense blame appropriately
                        return {
                            ...p,
                            error_message: action.error,
                            status: Status.Error
                        }
                    } else {  // otherwise don't blame everyone
                        return p
                    }
                })
            }
        
        // The user has acknoledged the error
        case actionTypes.PLATFORM_DATA_CLEAR_ERROR:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === action.platformId) {  // Abosolve the platform of it's sins.
                        return {
                            ...p,
                            error_message: ''
                        }
                    } else {  // But only absolve the correct sinner.
                        return p
                    }
                })
            }

        // Add loading status when a dataset is updating metadata
        case actionTypes.PLATFORM_DATA_METADATA_LOADING:

            // If the dataset exists, change the status
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

            } else {  // Otherwise add a new dataset object
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
        
        // Display error when dataset fails to load metadata
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

        // Add loaded metadata to dataset
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
        
        // Display that a dataset is loading
        case actionTypes.PLATFORM_DATA_FORECAST_LOADING:
            return {
                ...state,
                platforms: state.platforms.map((p) => {
                    if (p.id === (action as PlatformForecastLoading).platformId) {

                        // If the dataset already exists, update the dataset status
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
                        } else {  // Otherwise add a new dataset
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


        // Mark that a dataset has had an error loading
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
        
        // Remove a dataset loading error
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
        
        // Add the loaded data to a dataset
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
