/**
 * Functions to help manage wind time series and datasets
 */
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../types"

import { conditions } from "./conditions"

const waveConditions = new Set([...conditions.waveHeight, ...conditions.wavePeriod, ...conditions.waveDirection])

/**
 * Select the overall wave related time series, and optionally only the ones that have recent data available.
 * Returns height, period, and direction individual time series also.
 *
 * @param platform Platform GeoJSON feature to extract wind time series from
 * @param afterDate Optional date to only select time series that are more recent than
 */
export function pickWaveTimeSeries(platform: PlatformFeature, afterDate?: Date) {
  let waveTimeSeries = platform.properties.readings.filter((timeSeries) =>
    waveConditions.has(timeSeries.data_type.standard_name),
  )

  let filteredTimeSeries = waveTimeSeries

  if (afterDate) {
    filteredTimeSeries = filteredTimeSeries.filter((timeSeries) =>
      timeSeries.time ? afterDate < new Date(timeSeries.time) : false,
    )
  }

  const height = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.waveHeight).has(timeSeries.data_type.standard_name),
  )
  const period = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.wavePeriod).has(timeSeries.data_type.standard_name),
  )
  const direction = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.waveDirection).has(timeSeries.data_type.standard_name),
  )

  const timeSeries: PlatformTimeSeries[] = []

  if (height) {
    timeSeries.push(height)
  }
  if (period) {
    timeSeries.push(period)
  }
  if (direction) {
    timeSeries.push(direction)
  }

  return { height, period, direction, timeSeries, waveTimeSeries }
}

/**
 * Match the datasets to the correct height, period, or direction based on the platforms wave time series.
 *
 * @param platform Platform GeoJSON feature to find specific datasets from
 * @param datasets Datasets loaded from ERDDAP to match to wind variables
 * @param afterDate Optional date to only select datasets that are more recent then
 */
export function pickWaveDatasets(platform: PlatformFeature, datasets: DataTimeSeries[], afterDate?: Date) {
  const {
    height: heightTimeSeries,
    period: periodTimeSeries,
    direction: directionTimeSeries,
  } = pickWaveTimeSeries(platform, afterDate)

  let height = datasets.find((ds) => ds.name === heightTimeSeries?.variable)
  if (height && heightTimeSeries) {
    height = { ...height, name: heightTimeSeries.data_type.long_name }
  }
  let period = datasets.find((ds) => ds.name === periodTimeSeries?.variable)
  if (period && periodTimeSeries) {
    period = { ...period, name: periodTimeSeries.data_type.long_name }
  }
  let direction = datasets.find((ds) => ds.name === directionTimeSeries?.variable)
  if (direction && directionTimeSeries) {
    direction = { ...direction, name: directionTimeSeries.data_type.long_name }
  }

  return { height, period, direction }
}
