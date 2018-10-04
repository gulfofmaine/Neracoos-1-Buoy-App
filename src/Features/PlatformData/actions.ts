import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch} from 'redux'
import { ThunkAction } from 'redux-thunk'

import { StoreState } from '@app/constants'
import { 
    GriddapJson, 
    metadataValue 
} from '@app/Shared/erddap'

import * as actionTypes from './actionTypes'
import { transformPlatformJson } from './jsonTransformer'
import { 
    PlatformData, 
    PlatformJson 
} from './types'


export interface PlatformDataLoadSuccess {
    type: actionTypes.PLATFORM_DATA_LOAD_SUCCESS,
    data: PlatformData[],
    platformId: string
}

export interface PlatformDataLoading {
    type: actionTypes.PLATFORM_DATA_LOADING,
    platformId: string
}

export interface PlatformDataError {
    type: actionTypes.PLATFORM_DATA_LOAD_ERROR,
    platformId: string,
    error: string
}

export interface PlatformDataClearError {
    type: actionTypes.PLATFORM_DATA_CLEAR_ERROR,
    platformId: string
}

export interface PlatformForecastLoadSuccess {
    type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_SUCCESS,
    data: PlatformData[],
    platformId: string,
    forecastType: string
}

export interface PlatformForecastLoading {
    type: actionTypes.PLATFORM_DATA_FORECAST_LOADING,
    platformId: string,
    forecastType: string
}

export interface PlatformForecastError {
    type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR,
    platformId: string,
    forecastType: string
}

export interface PlatformMetadataLoadSuccess {
    type: actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS,
    dataset: string,
    server: string,
    coverageStart: Date,
    coverageEnd: Date
}

export interface PlatformMetadataLoading {
    type: actionTypes.PLATFORM_DATA_METADATA_LOADING,
    dataset: string,
    server: string
}

export interface PlatformMetadataError {
    type: actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR
    dataset: string
    server: string
    message: string
}

export interface PlatformMetadataClearError {
    type: actionTypes.PLATFORM_DATA_METADATA_CLEAR_ERROR,
    message: string
}

export type PlatformDataActions = (PlatformDataLoadSuccess 
    | PlatformDataLoading | PlatformDataError | PlatformDataClearError 
    | PlatformForecastLoadSuccess | PlatformForecastLoading 
    | PlatformForecastError | PlatformMetadataLoadSuccess
    | PlatformMetadataLoading | PlatformMetadataError | PlatformMetadataClearError )

export function platformDataLoadSuccess(platformId: string, data: PlatformData[]): PlatformDataLoadSuccess {
    return {
        data,
        platformId,
        type: actionTypes.PLATFORM_DATA_LOAD_SUCCESS
    }
}

export function platformDataLoading(platformId: string): PlatformDataLoading {
    return {
        platformId,
        type: actionTypes.PLATFORM_DATA_LOADING
    }
}

export function platformDataError(platformId: string, error: string): PlatformDataError {
    return {
        error,
        platformId,
        type: actionTypes.PLATFORM_DATA_LOAD_ERROR
    }
}

export function platformDataClearError(platformId: string): PlatformDataClearError {
    return {
        platformId,
        type: actionTypes.PLATFORM_DATA_CLEAR_ERROR
    }
}

export const platformDataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (platformId: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            dispatch(platformDataLoading(platformId))
            const url = 'http://neracoos.org/data/json/buoyrecentdata.php?platform=' + platformId + '&mp=no&hb=168&tsdt=all'

            Sentry.addBreadcrumb({
                category: 'Platform Data',
                data: {
                    platformId,
                    url
                },
                message: 'Loading platform data'
            })

            const result = await fetch(url)
            const json = await result.json() as PlatformJson

            const data = transformPlatformJson(json)

            return dispatch(platformDataLoadSuccess(platformId, data))
        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)
            
            return dispatch(platformDataError(platformId, 'An error occured loading data for ' + platformId))
        }
    }
}

export function platformForecastLoadSuccess(platformId: string, forecastType: string, data: PlatformData[]): PlatformForecastLoadSuccess {
    return {
        data,
        forecastType,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_SUCCESS
    }
}

export function platformForecastLoading(platformId: string, forecastType: string): PlatformForecastLoading {
    return {
        forecastType,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOADING
    }
}

export function platformForecastError(platformId: string, forecastType: string): PlatformForecastError {
    return {
        forecastType,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR
    }
}

export function platformMetadataSuccess(dataset: string, server: string, coverageStart: Date, coverageEnd: Date): PlatformMetadataLoadSuccess {
    return {
        coverageEnd,
        coverageStart,
        dataset,
        server,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS
    }
}

export function platformMetadataLoading(dataset: string, server: string): PlatformMetadataLoading {
    return {
        dataset,
        server,
        type: actionTypes.PLATFORM_DATA_METADATA_LOADING
    }
}

export function platformMetadataError(dataset: string, server: string, message: string): PlatformMetadataError {
    return {
        dataset,
        message,
        server,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR
    }
}

// export function platformMetadataClearError(message: )

export const metadataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (datasetId: string, server: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            dispatch(platformMetadataLoading(datasetId, server))

            const url = server + '/info/' + datasetId + '/index.json'
            // const proxyUrl = url.includes('neracoos') ? 'http://www.neracoos.org' + '/proxy2?ajax=1&url=' + encodeURIComponent(url) : url
            const proxyUrl = 'http://www.neracoos.org' + '/proxy2?ajax=1&url=' + encodeURIComponent(url)

            Sentry.addBreadcrumb({
                category: 'Platform ERDDAP Metadata',
                data: {
                    datasetId,
                    proxyUrl,
                    server,
                    url
                },
                message: 'Loading ERDDAP dataset metadata'
            })

            // tslint:disable-next-line:no-console
            console.log(url, proxyUrl)

            const result = await fetch(proxyUrl)

            const json = await result.json() as GriddapJson

            const coverageStart = new Date(metadataValue(json.table, 'time_coverage_start') as number)
            const coverageEnd = new Date(metadataValue(json.table, 'time_coverage_end') as number)

            const now = new Date()

            if (coverageStart <= now && now <= coverageEnd) {
                return dispatch(platformMetadataSuccess(
                    datasetId,
                    server,
                    coverageStart,
                    coverageEnd
                ))
            } else {
                return dispatch(platformMetadataError(
                    datasetId,
                    server,
                    datasetId + ' is not avaliable for the current time period.'
                ))
            }

            
        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)

            return dispatch(platformMetadataError(datasetId, server, 'Unknown error loading ' + datasetId))
        }
    }
}

// export const forecastDataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (platformId: string, datasetId: string, server: string, lat: number, lon: number) => {
//     return async (dispatch: Dispatch): Promise<Action> => {
//         try {
//             dispatch(platformForecastLoading(platformId, forecastType))


//         } catch(error) {
//             // tslint:disable-next-line:no-console
//             console.log(error)

//             Sentry.captureException(error)

//             return dispatch(platformForecastError(platformId, forecastType))
//         }
//     }
// }