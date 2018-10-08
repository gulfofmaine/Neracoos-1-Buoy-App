import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch} from 'redux'
import { ThunkAction } from 'redux-thunk'

import { StoreState } from '@app/constants'
import { 
    datasetInfoJson,
    ErddapDataset,
    erddapUrl,
    extractColumn,
    GriddapJson, 
    metadataValue 
} from '@app/Shared/erddap'
import {
    todayIso
} from '@app/Shared/time'

import * as actionTypes from './actionTypes'
import { transformPlatformJson } from './jsonTransformer'
import { 
    ErddapDatasetAndField,
    ErddapDatasetInfo,
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
    data: PlatformData,
    dataset: ErddapDatasetAndField,
    platformId: string,
}

export interface PlatformForecastLoading {
    type: actionTypes.PLATFORM_DATA_FORECAST_LOADING,
    platformId: string,
    dataset: ErddapDatasetAndField
}

export interface PlatformForecastError {
    type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR,
    platformId: string,
    dataset: ErddapDatasetAndField,
    errorMessage: string
}

export interface PlatformForecastClearError {
    type: actionTypes.PLATFORM_DATA_FORECAST_CLEAR_ERROR,
    platformId: string,
    dataset: ErddapDatasetAndField
}

export interface PlatformMetadataLoadSuccess {
    type: actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS,
    dataset: ErddapDataset,
    coverageStart: Date,
    coverageEnd: Date
}

export interface PlatformMetadataLoading {
    type: actionTypes.PLATFORM_DATA_METADATA_LOADING,
    dataset: ErddapDataset
}

export interface PlatformMetadataError {
    type: actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR
    dataset: ErddapDataset
    message: string
}

export interface PlatformMetadataClearError {
    type: actionTypes.PLATFORM_DATA_METADATA_CLEAR_ERROR,
    message: string
}

export type PlatformDataActions = (PlatformDataLoadSuccess 
    | PlatformDataLoading | PlatformDataError | PlatformDataClearError 
    | PlatformForecastLoadSuccess | PlatformForecastLoading 
    | PlatformForecastError | PlatformForecastClearError 
    | PlatformMetadataLoadSuccess | PlatformMetadataLoading 
    | PlatformMetadataError | PlatformMetadataClearError )

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

            if (data.length === 0) {
                Sentry.captureMessage(platformId + ' returned no data.')

                return dispatch(
                    platformDataError(
                        platformId,
                        platformId + ' did not return any data. Please try again later, and let us know if the issue reoccurs.'
                    ))
            }

            return dispatch(platformDataLoadSuccess(platformId, data))
        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)
            
            return dispatch(platformDataError(platformId, 'An error occured loading data for ' + platformId))
        }
    }
}

export function platformForecastLoadSuccess(platformId: string, dataset: ErddapDatasetAndField, data: PlatformData): PlatformForecastLoadSuccess {
    return {
        data,
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_SUCCESS
    }
}

export function platformForecastLoading(platformId: string, dataset: ErddapDatasetAndField): PlatformForecastLoading {
    return {
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOADING
    }
}

export function platformForecastError(platformId: string, dataset: ErddapDatasetAndField, message: string): PlatformForecastError {
    return {
        dataset,
        errorMessage: message,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR
    }
}

export function platformForecastClearError(platformId: string, dataset: ErddapDatasetAndField): PlatformForecastClearError {
    return {
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_CLEAR_ERROR
    }
}

export function platformMetadataSuccess(dataset: ErddapDataset, coverageStart: Date, coverageEnd: Date): PlatformMetadataLoadSuccess {
    return {
        coverageEnd,
        coverageStart,
        dataset,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS
    }
}

export function platformMetadataLoading(dataset: ErddapDataset): PlatformMetadataLoading {
    return {
        dataset,
        type: actionTypes.PLATFORM_DATA_METADATA_LOADING
    }
}

export function platformMetadataError(dataset: ErddapDataset, message: string): PlatformMetadataError {
    return {
        dataset,
        message,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR
    }
}

// export function platformMetadataClearError(message: )

export const metadataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (dataset: ErddapDataset) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            dispatch(platformMetadataLoading(dataset))

            const url = datasetInfoJson(dataset)
            const proxyUrl = 'http://www.neracoos.org' + '/proxy2?ajax=1&url=' + encodeURIComponent(url)

            Sentry.addBreadcrumb({
                category: 'Platform ERDDAP Metadata',
                data: {
                    dataset,
                    proxyUrl,
                    url
                },
                message: 'Loading ERDDAP dataset metadata'
            })

            const result = await fetch(proxyUrl)

            const json = await result.json() as GriddapJson

            const coverageStart = new Date(metadataValue(json.table, 'time_coverage_start') as number)
            const coverageEnd = new Date(metadataValue(json.table, 'time_coverage_end') as number)

            const now = new Date()

            if (coverageStart <= now && now <= coverageEnd) {
                return dispatch(platformMetadataSuccess(
                    dataset,
                    coverageStart,
                    coverageEnd
                ))
            } else {
                return dispatch(platformMetadataError(
                    dataset,
                    dataset.datasetId + ' is not avaliable for the current time period.'
                ))
            }

            
        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)

            return dispatch(platformMetadataError(dataset, 'Unknown error loading ' + dataset.datasetId))
        }
    }
}

export const forecastDataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (platformId: string, dataset: ErddapDatasetInfo, lat: number, lon: number, field: string, datasetAndField: ErddapDatasetAndField) => {
    return async (dispatch: Dispatch): Promise<Action> => {

        dispatch(platformForecastLoading(platformId, datasetAndField))

        try {
            const url = erddapUrl(dataset as ErddapDataset, lat, lon, field, todayIso(), dataset.coverageEnd)
            const proxyUrl = 'http://www.neracoos.org' + '/proxy2?ajax=1&url=' + encodeURIComponent(url)

            Sentry.addBreadcrumb({
                category: 'Platform ERDDAP request',
                data: {
                    dataset,
                    field,
                    lat,
                    lon,
                    platformId,
                    proxyUrl,
                    url
                },
                message: 'Loading ERDDAP dataset'
            })

            const result = await fetch(proxyUrl)

            const json = await result.json() as GriddapJson

            const ts = extractColumn(json.table, field)

            const data: PlatformData = {
                data: ts,
                data_type: 'forecast',
                depth: 0,
                unit: ''
            }

            return dispatch(platformForecastLoadSuccess(
                platformId,
                datasetAndField,
                data
            ))

        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)

            return dispatch(platformForecastError(platformId, datasetAndField, error))
        }
    }
}
