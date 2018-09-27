import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch} from 'redux'
import { ThunkAction } from 'redux-thunk'

import { StoreState } from '@app/constants'

import * as actionTypes from './actionTypes'
import { transformPlatformJson } from './jsonTransformer'
import { PlatformData, PlatformJson } from './types'


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

export type PlatformDataActions = PlatformDataLoadSuccess | PlatformDataLoading | PlatformDataError

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

export const platformDataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (platformId: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            dispatch(platformDataLoading(platformId))
            const url = 'http://neracoos.org/data/json/buoyrecentdata.php?platform=' + platformId + '&mp=no&hb=24&tsdt=all'

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
            
            return dispatch(platformDataError(platformId, 'An error occured loading data'))
        }
    }
}
