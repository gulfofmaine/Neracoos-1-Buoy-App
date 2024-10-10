/**
 * Render prop components to standardize the loading of datasets
 */
import { useQueries, useQueryClient } from "@tanstack/react-query"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { aWeekAgoRounded } from "Shared/time"
import * as React from "react"
import { Alert, Spinner } from "reactstrap"

import { DataTimeSeries } from "Shared/timeSeries"
import { PlatformTimeSeries } from "../types"
import { defaultQueryConfig } from "./hookConfig"

import { getDatasetGroup, groupByServerDatasetConstraint, useDataset } from "./tabledap"

interface UseDatasetsProps {
  children: (props: UseDatasetsRenderProps) => JSX.Element
  timeSeries: PlatformTimeSeries[]
  startTime?: Date
  endTime?: Date
  platformId?: string
}

export interface UseDatasetsRenderProps {
  datasets: DataTimeSeries[]
}

interface UseQueryGroupResult {
  isLoading: boolean
  data: DataTimeSeries[] | undefined | unknown
  error: Error | undefined | null | unknown
}

/**
 * Load and display multiple datasets for multiple time series
 *
 * @param children Children component to pass the datasets to
 * @param timeSeries Multiple time series to load the dataset for
 * @param startTime Load dataset back to this date
 */
export const UseDatasets: React.FunctionComponent<UseDatasetsProps> = ({
  children,
  timeSeries,
  startTime,
  endTime,
  platformId,
}) => {
  const fetchGroups = groupByServerDatasetConstraint(timeSeries)
  const queryClient = useQueryClient()

  startTime = startTime ?? aWeekAgoRounded()

  const results: UseQueryGroupResult[] | undefined = useQueries({
    queries: fetchGroups.map((group) => ({
      ...defaultQueryConfig,
      queryKey: ["erddap-dataset", group.datasets, startTime, endTime],
      queryFn: () => getDatasetGroup(group, startTime, endTime),
    })),
  })

  if (results === undefined) {
    return <h4>Results is not defined</h4>
  }

  const loadingGroups = results.filter((group) => group.isLoading)
  const errorGroups = results.filter((group) => group.error)
  const loadedGroups = results.filter((group) => group.data)

  const loadedDatasets: DataTimeSeries[] = []

  for (let group of loadedGroups) {
    if (group.data) {
      for (let dataset of group.data as DataTimeSeries[]) {
        loadedDatasets.push(dataset)
      }
    }
  }

  //Combine latest values from useDataset and combines them into usePlatform data. If the recent value from useDataset is different than the value from usePlatform, it will pull into update usePlatform.
  if (loadedDatasets && platformId) {
    const platforms: any = queryClient.getQueryData(["buoybarn-platforms"])
    if (platforms) {
      const platform = platforms.features.find((f) => f.id === platformId)
      const latestReading = loadedDatasets.map((d) => {
        return {
          name: d.name,
          latestValue: d.timeSeries[d.timeSeries.length - 1].reading,
          time: d.timeSeries[d.timeSeries.length - 1].time.toISOString(),
        }
      })

      const updatedReadings = platform.properties.readings.map((reading) => {
        const update = latestReading.find((r) => r.name === reading.variable)
        return update ? { ...reading, value: update.latestValue, time: update.time } : { ...reading }
      })
      const updatedPlatform = {
        ...platform,
        properties: {
          ...platform.properties,
          readings: updatedReadings,
        },
      }
      const updatedPlatforms = {
        ...platforms,
        features: platforms.features.map((f) => (f.id === platformId ? updatedPlatform : f)),
      }
      const updatedValues = updatedReadings.map((r) => r.value).toString()
      const originalValues = platform.properties.readings.map((r) => r.value).toString()
      // If original values are different than the new values (i.e. a new reading was taken),then set usePlatform data to the updated values.
      if (originalValues !== updatedValues) {
        queryClient.setQueryData(["buoybarn-platforms"], (originalValues) => updatedPlatforms)
      }
    }
  }

  const loadingDatasetName = timeSeries.filter((ts) => !loadedDatasets.map((d) => d.name).includes(ts.variable))

  return (
    <React.Fragment>
      {loadingGroups.length > 0
        ? loadingDatasetName.map((d) => (
            <Alert color="primary">
              <span style={{ marginRight: "10px" }}>{`Loading ${d?.data_type.long_name} dataset`}</span>
              <Spinner size="sm"></Spinner>
            </Alert>
          ))
        : null}

      {errorGroups.length > 0 ? <Alert color="warning">Error loading datasets</Alert> : null}

      {loadedDatasets.length > 0 ? children({ datasets: loadedDatasets }) : null}
    </React.Fragment>
  )
}

/* HTML: <div class="loader"></div> */

interface UseDatasetProps {
  /** Override default loading alert */
  loading?: JSX.Element
  /** Override default error alert */
  error?: JSX.Element
  children: (props: UseDatasetRenderProps) => JSX.Element
  timeSeries: PlatformTimeSeries
  startTime?: Date
}

export interface UseDatasetRenderProps {
  dataset: DataTimeSeries
}

/**
 * Load and display a specific dataset for a time series
 *
 * @param children Children component to pass the dataset to
 * @param timeSeries Single time series to load the dataset for
 * @param startTime Load dataset back to this date
 * @param loading Override loading alert
 * @param error Override error alert
 */
export const UseDataset: React.FunctionComponent<UseDatasetProps> = ({
  children,
  timeSeries,
  startTime,
  loading,
  error,
}) => {
  const { isLoading, data } = useDataset(timeSeries, startTime)

  if (isLoading) {
    if (loading) {
      return loading
    }

    return <Alert color="primary">Loading {timeSeries.data_type.long_name} data</Alert>
  }

  if (data) {
    const dataset = data as DataTimeSeries

    return children({ dataset })
  }

  if (error) {
    return error
  }

  return (
    <Alert color="warning">
      Error loading {timeSeries.data_type.long_name} data.{" "}
      <a href={tabledapHtmlUrl(timeSeries.server, timeSeries.dataset, [timeSeries.variable], timeSeries.constraints)}>
        Try accessing dataset directly.
      </a>
    </Alert>
  )
}
