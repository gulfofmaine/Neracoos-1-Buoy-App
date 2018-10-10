/**
 * Platform map related actions and functions.
 */
import * as Sentry from '@sentry/browser'
import { Feature, point } from '@turf/helpers'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionTypes from './actionTypes'
import { PlatformLocationsJson, PlatformProperties } from './types'

import { StoreState } from '@app/constants'

// Action types
export interface PlatformLocationsLoadSucccess {
    type: actionTypes.PLATFORM_LOACTIONS_LOAD_SUCCESS
    platforms: Feature[]
}

export interface PlatformLocationsLoadError { 
    type: actionTypes.PLATFORM_LOACTIONS_LOAD_ERROR
    message: string
}

export type PlatformMapActions = PlatformLocationsLoadSucccess | PlatformLocationsLoadError


// Action creators

/**
 * Action creator for successfully loaded platforms.
 * 
 * @param platforms GeoJSON features for loaded platforms.
 */
export function platformLocationsLoadSuccess(platforms: Feature[]): PlatformLocationsLoadSucccess {
    return {
        platforms,
        type: actionTypes.PLATFORM_LOACTIONS_LOAD_SUCCESS
    }
}

/**
 * Action creator when platforms are unable to be loaded.
 * 
 * @param message Error message.
 */
export function platformLocationsLoadError(message: string): PlatformLocationsLoadError {
    return {
        message,
        type: actionTypes.PLATFORM_LOACTIONS_LOAD_ERROR
    }
}


/**
 * Platform map data loading function.
 */
export const platformLocationsLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            Sentry.addBreadcrumb({
                category: 'PlatformMap',
                message: 'Loading platform locations'
            })

            const url = 'http://www.neracoos.org/data/json/monitoringlocations.php'

            const result = await fetch(url)
            const json = await result.json() as PlatformLocationsJson

            const platforms: Feature[] = []

            // reshape the json into GeoJson features for each platform
            for (const platform in json) {
                if (json.hasOwnProperty(platform)) {
                    const { lat, lon, data_types, data_depths, ...properties } = json[platform]
                    if (properties.active && platform !== 'GREAT_BAY') {
                        const platformProperties = properties as PlatformProperties
                        platformProperties.name = platform
                        platformProperties.sensors = []

                        for (const dataType in data_types) {
                            if (data_types.hasOwnProperty(dataType)) {
                                platformProperties.sensors.push({name: data_types[dataType], stub: dataType})
                            }
                        }

                        const platformPoint = point([parseFloat(lon), parseFloat(lat)], platformProperties)
                        platforms.push(platformPoint)
                    }
                }
            }

            return dispatch(platformLocationsLoadSuccess(platforms))

        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error)
            Sentry.captureException(error)

            return dispatch(platformLocationsLoadError('Unable to load platform location data.'))
        }
    }
}
