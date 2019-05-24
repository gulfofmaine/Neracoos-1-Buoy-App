import * as Sentry from "@sentry/browser"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "Shared/constants"

import * as actionTypes from "../actionTypes"
import { PlatformFeatureCollection } from "../types"

// Action types
export interface ErddapPlatformLoadSuccess {
  type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
  geojson: PlatformFeatureCollection
}

export interface ErddapPlatformLoadError {
  type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
  message: string
}

export interface ErddapPlatformLoadStarted {
  type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
}

export type ErddapPlatformActions = ErddapPlatformLoadSuccess | ErddapPlatformLoadError | ErddapPlatformLoadStarted

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
 * Action creator when platforms are unable to be loaded
 * @param message Error message
 */
export function erddapPlatformLoadError(message: string): ErddapPlatformLoadError {
  return {
    message,
    type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
  }
}

/**
 * Action creator for when platforms start loading
 */
export function erddapPlatformLoadStarted(): ErddapPlatformLoadStarted {
  return {
    type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
  }
}

/**
 * Load platforms from ERDDAP service
 */
export const erddapPlatformLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch(erddapPlatformLoadStarted())

      const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + "/api/platforms/"

      Sentry.addBreadcrumb({
        category: "ERDDAP Service",
        data: {
          url
        },
        message: "Loading platform GeoJSON"
      })

      const result = await fetch(url)
      const json = (await result.json()) as PlatformFeatureCollection

      return dispatch(erddapPlatformLoadSuccess(json))
    } catch (error) {
      // tslint:disable-next-line:no-console
      // console.log(error)
      Sentry.captureException(error)

      return dispatch(erddapPlatformLoadError("Unable to load platform data"))
    }
  }
}
