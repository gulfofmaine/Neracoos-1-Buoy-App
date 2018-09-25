import * as Sentry from '@sentry/browser'
import { Feature, point } from '@turf/helpers'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionTypes from './actionTypes'
import { PlatformLocationsJson, PlatformProperties } from './types'

import { StoreState } from '@app/constants'

export interface PlatformLocationsLoadSucccess {
    type: actionTypes.PLATFORM_LOACTIONS_LOAD_SUCCESS
    platforms: Feature[]
}

export interface PlatformLocationsLoadError { 
    type: actionTypes.PLATFORM_LOACTIONS_LOAD_ERROR
}

export type PlatformMapActions = PlatformLocationsLoadSucccess | PlatformLocationsLoadError

export function platformLocationsLoadSuccess(platforms: Feature[]): PlatformLocationsLoadSucccess {
    return {
        platforms,
        type: actionTypes.PLATFORM_LOACTIONS_LOAD_SUCCESS
    }
}

export function platformLocationsLoadError(): PlatformLocationsLoadError {
    return {
        type: actionTypes.PLATFORM_LOACTIONS_LOAD_ERROR
    }
}

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
                    const platformProperties = properties as PlatformProperties
                    platformProperties.name = platform
                    const platformPoint = point([lon, lat], platformProperties)
                    platforms.push(platformPoint)
                }
            }

            return dispatch(platformLocationsLoadSuccess(platforms))

        } catch(e) {
            // tslint:disable-next-line:no-console
            console.exception(e)
            Sentry.captureException(e)
            return dispatch(platformLocationsLoadError())
        }
    }
}
