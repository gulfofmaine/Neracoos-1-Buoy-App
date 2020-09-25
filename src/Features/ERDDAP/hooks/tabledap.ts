/**
 * Hooks to acquire data from ERDDAP TableDAP datasets
 */
import * as Sentry from "@sentry/react"
import { useState } from "react"
import { useQuery, QueryResult } from "react-query"

import { resultToTimeseries, tabledapUrl } from "Shared/erddap"
import { ErddapJson } from "Shared/erddap/types"
import { groupBy } from "Shared/groupBy"
import { proxytizeUrl } from "Shared/proxyUrl"
import { aWeekAgoRounded } from "Shared/time"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformTimeSeries, FetchGroup } from "../types"
import { defaultQueryConfig } from "./hookConfig"

const FORBIDDEN = "Forbidden"

const getDataset = (timeSeries: PlatformTimeSeries, startTime?: Date) => {
  return async () => {
    const url = urlBuilder([timeSeries], startTime)
    const proxyUrl = proxytizeUrl(url)

    Sentry.addBreadcrumb({
      category: "ERDDAP TableDAP Dataset",
      data: {
        proxyUrl,
        url,
      },
      message: "Loading ERDDAP dataset",
    })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const result = await fetch(proxyUrl, { signal: controller.signal })

    if (!result.ok) {
      if (result.status === 403) {
        Sentry.captureMessage("Forbidden response")
        throw new Error(FORBIDDEN)
      } else {
        Sentry.captureMessage(`Unknown error with status code ${result.status}`)
      }
    }

    const json = (await result.json()) as ErddapJson

    clearTimeout(timeoutId)

    const resultTimeSeries = resultToTimeseries(json, [timeSeries.variable])

    return resultTimeSeries[0]
  }
}

function urlBuilder(timeSeries: PlatformTimeSeries[], startTime?: Date): string {
  startTime = startTime ?? aWeekAgoRounded()

  const constraints = {
    ...timeSeries[0].constraints,
    "time>=": startTime.toISOString(),
  }

  const variables = timeSeries.map((ts) => ts.variable)

  return tabledapUrl(timeSeries[0].server, timeSeries[0].dataset, variables, constraints)
}

/** Fetch a single dataset given a time series */
export function useDataset(timeSeries?: PlatformTimeSeries, startTime?: Date): QueryResult<DataTimeSeries, Error> {
  const [enabled, setEnabled] = useState<boolean>(true)

  startTime = startTime ?? aWeekAgoRounded()

  return useQuery(["erddap-dataset", timeSeries, startTime], getDataset(timeSeries!, startTime), {
    ...defaultQueryConfig,
    enabled,
    retry: (failureCount: number, error: Error) => {
      if (error.message === FORBIDDEN) {
        setEnabled(false)
        return false
      }
      return true
    },
  })
}

export function groupByServerDatasetConstraint(readings: PlatformTimeSeries[]): FetchGroup[] {
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
                server,
              })
            }
          }
        }
      }
    }
  }
  return results
}

const getDatasetGroup = async (fetchGroup: FetchGroup, startTime?: Date) => {
  const url = urlBuilder(fetchGroup.datasets, startTime)
  const proxyUrl = proxytizeUrl(url)

  Sentry.addBreadcrumb({
    category: "ERDDAP TableDAP Grouped Dataset",
    data: {
      proxyUrl,
      url,
    },
    message: "Loading grouped ERDDAP dataset",
  })

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)

  const result = await fetch(proxyUrl, { signal: controller.signal })

  if (!result.ok) {
    if (result.status === 403) {
      Sentry.captureMessage("Forbidden response")
      throw new Error(FORBIDDEN)
    } else {
      Sentry.captureMessage(`Unknown error with status code ${result.status}`)
    }
  }

  const json = (await result.json()) as ErddapJson

  clearTimeout(timeoutId)

  const resultTimeSeries = resultToTimeseries(
    json,
    fetchGroup.datasets.map((ts) => ts.variable)
  )

  return resultTimeSeries
}

const getDatasets = (timeSeries: PlatformTimeSeries[], startTime?: Date) => {
  startTime = startTime ?? aWeekAgoRounded()

  const fetchGroups = groupByServerDatasetConstraint(timeSeries)

  return async () => {
    const results: DataTimeSeries[] = []

    for (let group of fetchGroups) {
      const datasets = await getDatasetGroup(group, startTime)

      for (let dataset of datasets) {
        results.push(dataset)
      }
    }

    return results
  }
}

/** Fetch multiple datasets given multiple time series */
export function useDatasets(timeSeries: PlatformTimeSeries[], startTime?: Date): QueryResult<DataTimeSeries[], Error> {
  const [enabled, setEnabled] = useState<boolean>(true)

  startTime = startTime ?? aWeekAgoRounded()

  return useQuery(["erddap-datasets", { timeSeries, startTime }], getDatasets(timeSeries, startTime), {
    ...defaultQueryConfig,
    enabled,
    retry: (failureCount: number, error: Error) => {
      if (error.message === FORBIDDEN) {
        setEnabled(false)
        return false
      }
      return true
    },
  })
}
