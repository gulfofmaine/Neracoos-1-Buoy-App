/**
 * Functions to help manage wind time series and datasets
 */
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../types"

import { conditions } from "./conditions"

const windConditions = new Set([...conditions.windDirection, ...conditions.windGust, ...conditions.windSpeed])

/**
 * Select the overall wind related time series, and optionally only the ones that have recent data available.
 * Returns speed, gust, and direction individual time series also.
 *
 * @param platform Platform GeoJSON feature to extract wind time series from
 * @param afterDate Optional date to only select time series that are more recent than
 */
export function pickWindTimeSeries(platform: PlatformFeature, afterDate?: Date) {
  let windTimeSeries = platform.properties.readings.filter((timeSeries) =>
    windConditions.has(timeSeries.data_type.standard_name)
  )

  let filteredTimeSeries = windTimeSeries

  if (afterDate) {
    filteredTimeSeries = filteredTimeSeries.filter((timeSeries) =>
      timeSeries.time ? afterDate < new Date(timeSeries.time) : false
    )
  }

  const speed = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.windSpeed).has(timeSeries.data_type.standard_name)
  )
  const gust = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.windGust).has(timeSeries.data_type.standard_name)
  )
  const direction = filteredTimeSeries.find((timeSeries) =>
    new Set(conditions.windDirection).has(timeSeries.data_type.standard_name)
  )

  const timeSeries: PlatformTimeSeries[] = []

  if (speed) {
    timeSeries.push(speed)
  }
  if (gust) {
    timeSeries.push(gust)
  }
  if (direction) {
    timeSeries.push(direction)
  }

  return { speed, gust, direction, timeSeries, windTimeSeries }
}

/**
 * Match the datasets to the correct speed, gust, or direction based on the platforms wind time series.
 *
 * @param platform Platform GeoJSON feature to find specific datasets from
 * @param datasets Datasets loaded from ERDDAP to match to wind variables
 * @param afterDate Optional date to only select datasets that are more recent then
 */
export function pickWindDatasets(platform: PlatformFeature, datasets: DataTimeSeries[], afterDate?: Date) {
  const { speed: speedTimeSeries, gust: gustTimeSeries, direction: directionTimeSeries } = pickWindTimeSeries(
    platform,
    afterDate
  )

  const speed = datasets.find((ds) => ds.name === speedTimeSeries?.variable)
  if (speed && speedTimeSeries) {
    speed.name = speedTimeSeries.data_type.long_name
  }
  const gust = datasets.find((ds) => ds.name === gustTimeSeries?.variable)
  if (gust && gustTimeSeries) {
    gust.name = gustTimeSeries.data_type.long_name
  }
  const direction = datasets.find((ds) => ds.name === directionTimeSeries?.variable)
  if (direction && directionTimeSeries) {
    direction.name = directionTimeSeries.data_type.long_name
  }

  return { speed, gust, direction }
}
