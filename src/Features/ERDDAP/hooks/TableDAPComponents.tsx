/**
 * Render prop components to standardize the loading of datasets
 */
import { useQueries } from "@tanstack/react-query"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { aWeekAgoRounded } from "Shared/time"
import * as React from "react"
import { Alert } from "reactstrap"

import { DataTimeSeries } from "Shared/timeSeries"
import { PlatformTimeSeries } from "../types"
import { defaultQueryConfig } from "./hookConfig"

import { getDatasetGroup, groupByServerDatasetConstraint, useDataset } from "./tabledap"

interface UseDatasetsProps {
  children: (props: UseDatasetsRenderProps) => JSX.Element
  timeSeries: PlatformTimeSeries[]
  startTime?: Date
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
export const UseDatasets: React.FunctionComponent<UseDatasetsProps> = ({ children, timeSeries, startTime }) => {
  const fetchGroups = groupByServerDatasetConstraint(timeSeries)

  startTime = startTime ?? aWeekAgoRounded()

  const results: UseQueryGroupResult[] | undefined = useQueries({
    queries: fetchGroups.map((group) => ({
      ...defaultQueryConfig,
      queryKey: ["erddap-dataset", group.datasets, startTime],
      queryFn: () => getDatasetGroup(group, startTime),
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

  return (
    <React.Fragment>
      {loadingGroups.length > 0 ? <Alert color="primary">Loading data</Alert> : null}

      {errorGroups.length > 0 ? <Alert color="warning">Error loading datasets</Alert> : null}

      {loadedDatasets.length > 0 ? children({ datasets: loadedDatasets }) : null}
    </React.Fragment>
  )
}

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
