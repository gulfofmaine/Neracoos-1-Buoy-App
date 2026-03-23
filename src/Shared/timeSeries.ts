/**
 * Common time series types.
 */

import type { DashStyleValue } from "highcharts"

import type { TimeSeriesType } from "Features/ERDDAP/types"

/**
 * A single time series reading.
 */
export interface ReadingTimeSeries {
  time: Date
  reading: number
}

/**
 * A collection of time series readings with an associated name and unit.
 */
export interface DataTimeSeries {
  timeSeries: ReadingTimeSeries[]
  name: string
  unit: string
  displayName: string | null
  type: TimeSeriesType
}

/** A time series with optional styles to display */
export type StyledTimeSeries = DataTimeSeries & {
  dashStyle?: DashStyleValue
  color?: string
}
