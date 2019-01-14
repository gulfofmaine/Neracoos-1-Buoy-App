import * as Sentry from "@sentry/browser"
import { Point } from "@turf/helpers"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "@app/constants"
import { ReadingTimeSeries } from "@app/Shared/timeSeries"

import * as actionTypes from "../actionTypes"
import { ForecastJson, ForecastSource, PlatformFeatureWithDatasets } from "../types"

// Forecast action types
export interface ErddapForecastLoadSuccess {
  type: actionTypes.ERDDAP_FORECAST_LOAD_SUCCESS
  platformId: string
  forecast: ForecastSource
  readings: ReadingTimeSeries[]
}

export interface ErddapForecastLoadStarted {
  type: actionTypes.ERDDAP_FORECAST_LOAD_STARTED
  platformId: string
  forecast: ForecastSource
}

export interface ErddapForecastLoadError {
  type: actionTypes.ERDDAP_FORECAST_LOAD_ERROR
  platformId: string
  forecast: ForecastSource
  message: string
}

export type ErddapForecastActions = ErddapForecastLoadSuccess | ErddapForecastLoadStarted | ErddapForecastLoadError

// Forecast action creators

export function forecastLoadStarted(platformId: string, forecast: ForecastSource): ErddapForecastLoadStarted {
  return {
    forecast,
    platformId,
    type: actionTypes.ERDDAP_FORECAST_LOAD_STARTED
  }
}

export function forecastLoadError(
  platformId: string,
  forecast: ForecastSource,
  message: string
): ErddapForecastLoadError {
  return {
    forecast,
    message,
    platformId,
    type: actionTypes.ERDDAP_FORECAST_LOAD_ERROR
  }
}

export function forecastLoadSuccess(
  platformId: string,
  forecast: ForecastSource,
  readings: ReadingTimeSeries[]
): ErddapForecastLoadSuccess {
  return {
    forecast,
    platformId,
    readings,
    type: actionTypes.ERDDAP_FORECAST_LOAD_SUCCESS
  }
}

export const forecastLoad: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (
  platform: PlatformFeatureWithDatasets,
  forecast: ForecastSource
) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch(forecastLoadStarted(platform.id as string, forecast))

      const lat = (platform.geometry as Point).coordinates[1]
      const lon = (platform.geometry as Point).coordinates[0]

      const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + forecast.point_forecast + `?lat=${lat}&lon=${lon}`

      Sentry.addBreadcrumb({
        category: "ERDDAP Service",
        data: {
          forecast,
          platformId: platform.id,
          url
        },
        message: "Loading forecast"
      })

      const result = await fetch(url)
      const json = (await result.json()) as ForecastJson

      return dispatch(
        forecastLoadSuccess(
          platform.id as string,
          forecast,
          json.time_series.map(ts => ({ ...ts, time: new Date(ts.time) }))
        )
      )
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      Sentry.captureException(error)

      return dispatch(forecastLoadError(platform.id as string, forecast, "Cannot load forecast"))
    }
  }
}
