/**
 * Render prop components to standardize the loading of datasets
 */
import * as React from "react"
import { Alert } from "reactstrap"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"

import { DataTimeSeries } from "Shared/timeSeries"
import { PlatformTimeSeries } from "../types"

import { useDataset, useDatasets } from "./tabledap"

interface BaseProps {
  /** Override default loading alert */
  loading?: JSX.Element
  /** Override default error alert */
  error?: JSX.Element
}

interface UseDatasetsProps extends BaseProps {
  children: (props: UseDatasetsRenderProps) => JSX.Element
  timeSeries: PlatformTimeSeries[]
  startTime?: Date
}

export interface UseDatasetsRenderProps {
  datasets: DataTimeSeries[]
}

/**
 * Load and display multiple datasets for multiple time series
 *
 * @param children Children component to pass the datasets to
 * @param timeSeries Multiple time series to load the dataset for
 * @param startTime Load dataset back to this date
 * @param loading Override loading alert
 * @param error Override error alert
 */
export const UseDatasets: React.FunctionComponent<UseDatasetsProps> = ({
  children,
  timeSeries,
  startTime,
  loading,
  error,
}) => {
  const { isLoading, data } = useDatasets(timeSeries, startTime)

  if (isLoading) {
    if (loading) {
      return loading
    }

    return <Alert color="primary">Loading data</Alert>
  }

  if (data) {
    const datasets = data as DataTimeSeries[]

    return children({ datasets })
  }

  if (error) {
    return error
  }

  return <Alert color="warning">Error loading datasets</Alert>
}

interface UseDatasetProps extends BaseProps {
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
