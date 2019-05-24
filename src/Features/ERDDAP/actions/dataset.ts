import * as Sentry from "@sentry/browser"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "Shared/constants"
import { ErddapJson, tabledapUrl } from "Shared/erddap"
import { groupBy } from "Shared/groupBy"
import { proxytizeUrl } from "Shared/proxyUrl"

import * as actionTypes from "../actionTypes"
import { FetchGroup, PlatformDataset } from "../types"

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

      if (result.status !== 200) {
        const msg = `Not sucessful retrieving request. Status: ${result.status} - ${result.statusText}`

        // tslint:disable-next-line:no-console
        console.log(msg)

        Sentry.captureMessage(msg)

        return dispatch(erddapDatasetLoadError(platformId, datasets, "Unable to load dataset due to server error"))
      }

      const json = (await result.json()) as ErddapJson

      return dispatch(erddapDatasetLoadSuccess(platformId, datasets, json))
    } catch (error) {
      if ((error as Error).message.includes("Unexpected token")) {
        // tslint:disable-next-line:no-console
        console.error(error)

        return dispatch(erddapDatasetLoadError(platformId, datasets, "Dataset returned invalid data"))
      }

      // tslint:disable-next-line:no-console
      console.log(error)

      Sentry.captureException(error)

      return dispatch(erddapDatasetLoadError(platformId, datasets, "Unable to load datasets."))
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
