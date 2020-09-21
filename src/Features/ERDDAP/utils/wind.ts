/**
 * Functions to help manage wind time series and datasets
 */
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../types"

/**
 * Select the overall wind related time series, and optionally only the ones that have recent data available.
 * Returns speed, gust, and direction individual time series also.
 *
 * @param platform Platform GeoJSON feature to extract wind time series from
 * @param afterDate Optional date to only select time series that are more recent than
 */
export function pickWindTimeSeries(platform: PlatformFeature, afterDate?: Date) {
  let windTimeSeries = platform.properties.readings.filter(
    (timeSeries) =>
      timeSeries.data_type.standard_name.includes("wind") && !timeSeries.data_type.standard_name.includes("wave")
  )

  let filteredTimeSeries = windTimeSeries

  if (afterDate) {
    filteredTimeSeries = filteredTimeSeries.filter((timeSeries) =>
      timeSeries.time ? afterDate < new Date(timeSeries.time) : false
    )
  }

  const speed = filteredTimeSeries.find(
    (timeSeries) =>
      timeSeries.data_type.standard_name.includes("speed") && !timeSeries.data_type.standard_name.includes("gust")
  )
  const gust = filteredTimeSeries.find((timeSeries) => timeSeries.data_type.standard_name.includes("gust"))
  const direction = filteredTimeSeries.find((timeSeries) => timeSeries.data_type.standard_name.includes("direction"))

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
