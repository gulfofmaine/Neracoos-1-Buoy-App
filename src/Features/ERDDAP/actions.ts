/**
 * ERDDAP related actions and functions
 */
import * as Sentry from "@sentry/browser"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "@app/constants"
import { ErddapJson, tabledapUrl } from "@app/Shared/erddap"
import { groupBy } from "@app/Shared/groupBy"
import { proxytizeUrl } from "@app/Shared/proxyUrl"

import * as actionTypes from "./actionTypes"
import { FetchGroup, PlatformDataset, PlatformFeatureCollection } from "./types"

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

      const url = process.env.REACT_APP_ERDDAP_SERVICE as string

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

// Dataset action types
export interface ErddapDatasetLoadSuccess {
  type: actionTypes.ERDDAP_DATASET_LOAD_SUCCESS
  platformId: string
  data: ErddapJson
  datasets: PlatformDataset[]
}

export interface ErddapDatasetLoadStarted {
  type: actionTypes.ERDDAP_DATASET_LOAD_STARTED
  time: Date
  platformId: string
  datasets: PlatformDataset[]
}

export interface ErddapDatasetLoadError {
  type: actionTypes.ERDDAP_DATASET_LOAD_ERROR
  platformId: string
  message: string
  datasets: PlatformDataset[]
}

export type ErddapDatasetActions = ErddapDatasetLoadSuccess | ErddapDatasetLoadStarted | ErddapDatasetLoadError

// Dataset action creators

export function erddapDatasetLoadSuccess(
  platformId: string,
  datasets: PlatformDataset[],
  data: ErddapJson
): ErddapDatasetLoadSuccess {
  return {
    data,
    datasets,
    platformId,
    type: actionTypes.ERDDAP_DATASET_LOAD_SUCCESS
  }
}

export function erddapDatasetLoadStarted(
  platformId: string,
  datasets: PlatformDataset[],
  time: Date
): ErddapDatasetLoadStarted {
  return {
    datasets,
    platformId,
    time,
    type: actionTypes.ERDDAP_DATASET_LOAD_STARTED
  }
}

export function erddapDatasetLoadError(
  platformId: string,
  datasets: PlatformDataset[],
  message: string
): ErddapDatasetLoadError {
  return {
    datasets,
    message,
    platformId,
    type: actionTypes.ERDDAP_DATASET_LOAD_ERROR
  }
}

// export const erddapDatasetsLoadGroup: ActionCreator<ThunkAction<void, StoreState, undefined, Action>> = (
export const erddapDatasetsLoadGroup: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (
  platformId: string,
  datasets: PlatformDataset[],
  startTime: Date,
  endTime?: Date
) => {
  return async (dispatch: Dispatch) => {
    try {
      // datasets.forEach(dataset => {
      //   dispatch(erddapDatasetLoadStarted(platformId, dataset))
      // })
      dispatch(erddapDatasetLoadStarted(platformId, datasets, startTime))

      const firstDataset = datasets[0]
      const constraints = {
        ...firstDataset.constraints,
        "time>=": startTime.toISOString()
      }
      if (endTime) {
        constraints["time<="] = firstDataset.time
      } else if (firstDataset.time) {
        constraints["time<="] = firstDataset.time
      }

      const variables = datasets.map(d => d.variable)

      const url = tabledapUrl(firstDataset.server, firstDataset.dataset, variables, constraints)
      const proxyUrl = proxytizeUrl(url)

      Sentry.addBreadcrumb({
        category: "ERDDAP Service",
        data: {
          proxyUrl,
          url
        },
        message: "Loading ERDDAP datasets"
      })

      const result = await fetch(proxyUrl)
      const json = (await result.json()) as ErddapJson

      return dispatch(erddapDatasetLoadSuccess(platformId, datasets, json))
      // datasets.slice(1).forEach(dataset => {
      //   dispatch(erddapDatasetLoadSuccess(platformId, dataset, json))
      // })
      // return dispatch(erddapDatasetLoadSuccess(platformId, datasets[0], json))
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)

      Sentry.captureException(error)

      return dispatch(erddapDatasetLoadError(platformId, datasets, "Unable to load datasets."))
      // datasets.slice(1).forEach(dataset => {
      //   dispatch(erddapDatasetLoadError(platformId, dataset, "Unable to load dataset"))
      // })
      // return dispatch(erddapDatasetLoadError(platformId, datasets[0], "Unable to load dataset"))
    }
  }
}

export const erddapDatasetsOrganizeLoadGroups: ActionCreator<ThunkAction<void, StoreState, undefined, Action>> = (
  platformId: string,
  datasets: PlatformDataset[],
  startTime: Date,
  endTime?: Date
) => {
  return async (dispatch: Dispatch) => {
    const fetchGroups = groupByServerDatasetConstraint(datasets)

    for (const group of fetchGroups) {
      dispatch<any>(erddapDatasetsLoadGroup(platformId, group.datasets, startTime, endTime))
    }
  }
}

export function groupByServerDatasetConstraint(readings: PlatformDataset[]): FetchGroup[] {
  const results: FetchGroup[] = []
  const servers = groupBy(readings, "server")
  for (const server in servers) {
    if (Object.prototype.hasOwnProperty.call(servers, server)) {
      const datasets = groupBy(servers[server], "dataset")
      for (const dataset in datasets) {
        if (Object.prototype.hasOwnProperty.call(datasets, dataset)) {
          const constraints = groupBy(datasets[dataset], "constraints")
          for (const constraint in constraints) {
            if (Object.prototype.hasOwnProperty.call(constraints, constraint)) {
              results.push({
                constraints: constraints[constraint][0].constraints,
                dataset,
                datasets: constraints[constraint],
                server
              })
            }
          }
        }
      }
    }
  }
  return results
}

export type ErddapActions = ErddapPlatformActions | ErddapDatasetActions
