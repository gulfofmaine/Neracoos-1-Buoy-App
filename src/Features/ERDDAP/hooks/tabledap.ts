/**
 * Hooks to acquire data from ERDDAP TableDAP datasets
 */
import * as Sentry from "@sentry/react"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { resultToTimeseries, tabledapUrl } from "Shared/erddap"
import { ErddapJson } from "Shared/erddap/types"
import { groupBy } from "Shared/groupBy"
import { aWeekAgoRounded, weeksInFuture } from "Shared/time"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformTimeSeries, FetchGroup } from "../types"
import { defaultQueryConfig } from "./hookConfig"

const FORBIDDEN = "Forbidden"

export const getDataset = (timeSeries: PlatformTimeSeries, startTime?: Date, endTime?: Date) => {
  return async () => {
    const url = urlBuilder([timeSeries], startTime)

    Sentry.addBreadcrumb({
      category: "ERDDAP TableDAP Dataset",
      data: {
        url,
      },
      message: "Loading ERDDAP dataset",
    })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const result = await fetch(url, { signal: controller.signal })

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

const erddapService = (process.env.NEXT_PUBLIC_ERDDAP_SERVICE || "https://buoybarn.neracoos.org") as string

export function urlBuilder(timeSeries: PlatformTimeSeries[], startTime?: Date, endTime?: Date): string {
  startTime = startTime ?? aWeekAgoRounded()
  endTime = endTime ?? weeksInFuture(1)

  const constraints = {
    ...timeSeries[0].constraints,
    "time>=": startTime.toISOString(),
    "time<=": endTime.toISOString(),
  }

  const variables = timeSeries.map((ts) => ts.variable)
  const server = timeSeries[0].cors_proxy_url ? erddapService + timeSeries[0].cors_proxy_url : timeSeries[0].server

  return tabledapUrl(server, timeSeries[0].dataset, variables, constraints)
}

/** Fetch a single dataset given a time series */
export function useDataset(timeSeries?: PlatformTimeSeries, startTime?: Date, endTime?: Date) {
  const [enabled, setEnabled] = useState<boolean>(true)

  startTime = startTime ?? aWeekAgoRounded()

  return useQuery<DataTimeSeries, Error>({
    queryKey: ["erddap-dataset", timeSeries, startTime],
    queryFn: getDataset(timeSeries!, startTime),
    enabled,
    retry: (failureCount: number, error: Error) => {
      if (error.message === FORBIDDEN) {
        setEnabled(false)
        return false
      }
      return true
    },
    ...defaultQueryConfig,
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

export const getDatasetGroup = async (fetchGroup: FetchGroup, startTime?: Date, endTime?: Date) => {
  const url = urlBuilder(fetchGroup.datasets, startTime, endTime)

  Sentry.addBreadcrumb({
    category: "ERDDAP TableDAP Grouped Dataset",
    data: {
      url,
    },
    message: "Loading grouped ERDDAP dataset",
  })

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)

  const result = await fetch(url, { signal: controller.signal })

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
    fetchGroup.datasets.map((ts) => ts.variable),
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
export function useDatasets(timeSeries: PlatformTimeSeries[], startTime?: Date) {
  const [enabled, setEnabled] = useState<boolean>(true)

  startTime = startTime ?? aWeekAgoRounded()

  return useQuery<DataTimeSeries[], Error>({
    queryKey: ["erddap-datasets", { timeSeries, startTime }],
    queryFn: getDatasets(timeSeries, startTime),
    enabled,
    retry: (failureCount: number, error: Error) => {
      if (error.message === FORBIDDEN) {
        setEnabled(false)
        return false
      }
      return true
    },
    ...defaultQueryConfig,
  })
}
