/**
 * Platform data actions
 */

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

// Action types
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


// Platform DataAction Creators. See ERDDAP metadata and dataset actions below.

/**
 * Platform Data Load Success action creator
 * 
 * @param platformId ID of loaded platform
 * @param data Data for loaded platform
 * @returns Formatted action
 */
export function platformDataLoadSuccess(platformId: string, data: PlatformData[]): PlatformDataLoadSuccess {
    return {
        data,
        platformId,
        type: actionTypes.PLATFORM_DATA_LOAD_SUCCESS
    }
}

/**
 * Platform data loading in progress action creator
 * 
 * @param platformId ID of platform that is currently loading
 * @returns Formatted action
 */
export function platformDataLoading(platformId: string): PlatformDataLoading {
    return {
        platformId,
        type: actionTypes.PLATFORM_DATA_LOADING
    }
}

/**
 * Platform data loading error
 * 
 * @param platformId Platform that had an error
 * @param error Error message
 * @returns Formatted Action
 */
export function platformDataError(platformId: string, error: string): PlatformDataError {
    return {
        error,
        platformId,
        type: actionTypes.PLATFORM_DATA_LOAD_ERROR
    }
}

/**
 * Platform data clear error
 * 
 * @param platformId Platform to clear an error from
 * @returns Formatted Action
 */
export function platformDataClearError(platformId: string): PlatformDataClearError {
    return {
        platformId,
        type: actionTypes.PLATFORM_DATA_CLEAR_ERROR
    }
}


/**
 * Thunk action to load data for a selected platform.
 * 
 * @param platformId Platform to load data for
 */
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
            let text = await result.text()

            // If the json has malformed HTML at the beginning, strip the html
            if (text.includes('>')) {
                text = text.slice(text.lastIndexOf('>') + 1)
                Sentry.captureMessage(platformId + ' has malformed but recoverable data.')
            }

            const json = JSON.parse(text) as PlatformJson

            const data = transformPlatformJson(json)

            // If there is no data we shouldn't try to display empty datasets.
            if (data.length === 0) {
                Sentry.captureMessage(platformId + ' returned no data in the last week.')

                return dispatch(
                    platformDataError(
                        platformId,
                        platformId 
                        + ' did not return any data within the last week. '
                        + 'Please try again later, and let us know if the issue reoccurs.'
                    ))
            }

            return dispatch(platformDataLoadSuccess(platformId, data))

        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)

            Sentry.captureException(error)
            
            return dispatch(
                platformDataError(
                    platformId, 
                    'An error occured loading data for ' 
                    + platformId 
                    + '. This error may have been caused by bad data being returned by our server, '
                    + 'or it may be a platform that we are still adding to our data sources.'
                    + ' Please retry is a few minutes.'
                    ))
        }
    }
}


// Forecast data loading action creators

/**
 * Platform dataset loading action creator.
 * 
 * @param platformId Platform ID that data was loaded for.
 * @param dataset Dataset that was loaded.
 * @param data Dataset data in a friendlier time series format.
 * @return Formatted action
 */
export function platformForecastLoadSuccess(platformId: string, dataset: ErddapDatasetAndField, data: PlatformData): PlatformForecastLoadSuccess {
    return {
        data,
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_SUCCESS
    }
}

/**
 * Platform dataset loading in progress action creator
 * 
 * @param platformId Platform ID that requested the data
 * @param dataset Dataset that was requested
 * @returns Formatted Action
 */
export function platformForecastLoading(platformId: string, dataset: ErddapDatasetAndField): PlatformForecastLoading {
    return {
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOADING
    }
}

/**
 * Platform dataset error action creator
 * 
 * @param platformId Platform ID that requested data
 * @param dataset Dataset that was requested
 * @param message Error message that occured while loading data
 * @returns Formatted Action
 */
export function platformForecastError(platformId: string, dataset: ErddapDatasetAndField, message: string): PlatformForecastError {
    return {
        dataset,
        errorMessage: message,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_LOAD_ERROR
    }
}

/**
 * Platform dataset error clearing action creator
 * 
 * @param platformId Platform ID that requested data
 * @param dataset Dataset that was requested
 * @returns Formatted Action
 */
export function platformForecastClearError(platformId: string, dataset: ErddapDatasetAndField): PlatformForecastClearError {
    return {
        dataset,
        platformId,
        type: actionTypes.PLATFORM_DATA_FORECAST_CLEAR_ERROR
    }
}


// Metadata action creators

/**
 * ERDDAP dataset metadata loaded
 * 
 * @param dataset Dataset that metadata needed to be loaded for
 * @param coverageStart First valid date for the dataset
 * @param coverageEnd Last valid date for the dataset
 * @returns Formatted Action
 */
export function platformMetadataSuccess(dataset: ErddapDataset, coverageStart: Date, coverageEnd: Date): PlatformMetadataLoadSuccess {
    return {
        coverageEnd,
        coverageStart,
        dataset,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_SUCCESS
    }
}

/**
 * ERDDAP dataset metadata loading in progress
 * 
 * @param dataset Dataset that is currently loading
 * @returns Formatted Action
 */
export function platformMetadataLoading(dataset: ErddapDataset): PlatformMetadataLoading {
    return {
        dataset,
        type: actionTypes.PLATFORM_DATA_METADATA_LOADING
    }
}

/**
 * ERDDAP dataset metadata loading error
 * 
 * @param dataset Dataset that had an error
 * @param message Error message
 * @returns Formatted Action
 */
export function platformMetadataError(dataset: ErddapDataset, message: string): PlatformMetadataError {
    return {
        dataset,
        message,
        type: actionTypes.PLATFORM_DATA_METADATA_LOAD_ERROR
    }
}


/**
 * Load dataset metadata from ERDDAP server.
 * 
 * @param dataset Dataset to load
 */
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

            // Extract coverage start and end dates.
            const coverageStart = new Date(metadataValue(json.table, 'time_coverage_start') as number)
            const coverageEnd = new Date(metadataValue(json.table, 'time_coverage_end') as number)

            const now = new Date()

            // If we are within the datasets covered range, then save the metadata 
            if (coverageStart <= now && now <= coverageEnd) {
                return dispatch(platformMetadataSuccess(
                    dataset,
                    coverageStart,
                    coverageEnd
                ))
            } else { // Otherwise notify that there is no data to load.
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

/**
 * Thunk action to load data for ERDDAP grid dataset for a selected location
 * 
 * @param platformId Platform ID that the returned data should be associated with
 * @param dataset Dataset info with metadata like start and end dates
 * @param lat Latitude North to load
 * @param lon Longitude East to load
 * @param datasetAndField Matching dataset and field object
 */
export const forecastDataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (platformId: string, dataset: ErddapDatasetInfo, lat: number, lon: number, datasetAndField: ErddapDatasetAndField) => {
    return async (dispatch: Dispatch): Promise<Action> => {

        dispatch(platformForecastLoading(platformId, datasetAndField))
        try {
            const url = erddapUrl(dataset as ErddapDataset, lat, lon, datasetAndField.field, todayIso(), dataset.coverageEnd)
            const proxyUrl = 'http://www.neracoos.org' + '/proxy2?ajax=1&url=' + encodeURIComponent(url)

            Sentry.addBreadcrumb({
                category: 'Platform ERDDAP request',
                data: {
                    dataset,
                    field: datasetAndField.field,
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

            const ts = extractColumn(json.table, datasetAndField.field)

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
