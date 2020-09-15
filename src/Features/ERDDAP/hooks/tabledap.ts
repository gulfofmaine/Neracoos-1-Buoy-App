import * as Sentry from "@sentry/react"
import { useQuery, QueryResult } from "react-query"

import { resultToTimeseries, tabledapUrl } from "Shared/erddap"
import { ErddapJson } from "Shared/erddap/types"
import { groupBy } from "Shared/groupBy"
import { proxytizeUrl } from "Shared/proxyUrl"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformTimeSeries } from "../types"
import { defaultQueryConfig } from "./hookConfig"

const getDataset = (timeSeries: PlatformTimeSeries, startTime?: Date) => {
  return async () => {
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    startTime = startTime ? startTime : sevenDaysAgo

    const constraints = {
      ...timeSeries.constraints,
      "time>=": startTime.toISOString(),
    }

    const variables = [timeSeries.variable]

    const url = tabledapUrl(timeSeries.server, timeSeries.dataset, variables, constraints)
    const proxyUrl = proxytizeUrl(url)

    Sentry.addBreadcrumb({
      category: "ERDDAP TableDAP Dataset",
      data: {
        proxyUrl,
        url,
      },
      message: "Loading ERDDAP dataset",
    })

    const result = await fetch(proxyUrl)
    const json = (await result.json()) as ErddapJson
    const resultTimeSeries = resultToTimeseries(json, [timeSeries.variable])

    return resultTimeSeries[0]
  }
}

export function useDataset(timeSeries: PlatformTimeSeries, startTime?: Date): QueryResult<DataTimeSeries, Error> {
  return useQuery(["erddap-dataset", timeSeries, startTime], getDataset(timeSeries, startTime), defaultQueryConfig)
}
