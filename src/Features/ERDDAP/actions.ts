/**
 * ERDDAP related actions and functions
 */
import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { StoreState } from '@app/constants'

import * as actionTypes from './actionTypes'
import { PlatformFeatureCollection } from './types'


// Action types
export interface ErddapPlatformLoadSuccess {
    type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS,
    geojson: PlatformFeatureCollection
}

export interface ErddapPlatformLoadError {
    type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR,
    message: string
}

export type ErddapActions = ErddapPlatformLoadSuccess | ErddapPlatformLoadError


// Action creators

/**
 * Action creator for successfully loaded platforms
 * @param geojson GeoJSON feature collection of successfully loaded platforms
 */
export function erddapPlatformLoadSuccess(geojson: PlatformFeatureCollection): ErddapPlatformLoadSuccess {
    return {
        geojson,
        type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    }
}


/**
 * Acction creator when platforms are unable to be loaded
 * @param message Error message
 */
export function erddapPlatformLoadError(message: string): ErddapPlatformLoadError {
    return {
        message,
        type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    }
}

/**
 * Load platforms from ERDDAP service
 */
export const erddapPlatformLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            Sentry.addBreadcrumb({
                category: 'ERDDAP Service',
                message: 'Loading platform GeoJSON'
            })

            const url = process.env.REACT_APP_ERDDAP_SERVICE as string

            const result = await fetch(url)
            const json = await result.json() as PlatformFeatureCollection

            return dispatch(erddapPlatformLoadSuccess(json))
        } catch(error) {
            // tslint:disable-next-line:no-console
            // console.log(error)
            Sentry.captureException(error)

            return dispatch(erddapPlatformLoadError('Unable to load platform data'))
        }
    }
}
