import * as Sentry from "@sentry/browser"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "Shared/constants"

import * as actionTypes from "../actionTypes"
import { ForecastSource } from "../types"

// Action types
export interface ErddapForecastMetadataLoadStarted {
  type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED
}

export interface ErddapForecastMetadataLoadError {
  type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_ERROR
  message: string
}

export interface ErddapForecastMetadataLoadSuccess {
  type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_SUCCESS
  forecasts: ForecastSource[]
}

export type ErddapForecastMetadataActions =
  | ErddapForecastMetadataLoadStarted
  | ErddapForecastMetadataLoadError
  | ErddapForecastMetadataLoadSuccess

// Action creators

/**
 * Action creator to mark that forecast metadata loading has started
 */
export function erddapForecastMetadataLoadStarted(): ErddapForecastMetadataLoadStarted {
  return {
    type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED
  }
}

/**
 * Action creator when there is an error loading forecast metadata
 * @param message Error message
 */
export function erddapForecastMetadataLoadError(message: string): ErddapForecastMetadataLoadError {
  return {
    message,
    type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_ERROR
  }
}

/**
 * Action creator when forecasts have been sucessfully loaded
 * @param forecasts Loaded forecasts
 */
export function erddapForecastMetadataLoadSuccess(forecasts: ForecastSource[]): ErddapForecastMetadataLoadSuccess {
  return {
    forecasts,
    type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_SUCCESS
  }
}

/**
 * Load forecast metadata from ERDDAP service
 */
export const forecastMetadataLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch(erddapForecastMetadataLoadStarted())

      const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + "/api/forecasts/"

      Sentry.addBreadcrumb({
        category: "ERDDAP Service",
        data: {
          url
        },
        message: "Loading forecast metadata"
      })

      const result = await fetch(url)
      const json = (await result.json()) as ForecastSource[]

      return dispatch(erddapForecastMetadataLoadSuccess(json))
    } catch (error) {
      // tslint:disable-next-line:no-console
      //   console.log(error)
      Sentry.captureException(error)

      return dispatch(erddapForecastMetadataLoadError("Unable to load forecast metadata"))
    }
  }
}
