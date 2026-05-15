import { conditions } from "./conditions"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { pickWindTimeSeries } from "./wind"
import { pickWaveTimeSeries } from "./waves"

/// Filter to current observation time series for specified data types
export function filterTimeSeries(timeSeries: PlatformTimeSeries[], dataTypes: string[], laterThan: Date) {
  let filterTimeSeries: PlatformTimeSeries[] = []

  dataTypes.forEach((dataType) => {
    const matchStandard = timeSeries.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    const matchObservation = matchStandard.filter((reading) => reading.type === "Observation") // that are observations
    const matchTime = matchObservation.filter((reading) => (reading.time ? laterThan < new Date(reading.time) : false)) // that have data in the last day
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    matchDepth.forEach((ts) => filterTimeSeries.push(ts))
  })

  if (filterTimeSeries.length > 0) {
    return filterTimeSeries[0]
  }

  return null
}

/**
 * Filters timeseries that should be displayed on current conditions page or in sidebar.
 * They are grouped by timeseries that are manually selected to before or after the normal set of conditions,
 * the wind timeseries, and the remaining selection with those three groups filtered out.
 *
 * Additionally return all of the filtered timeseries
 * @param platform
 * @param laterThan
 * @returns
 */
export function currentConditionsTimeseries(platform: PlatformFeature, laterThan: Date) {
  const before = platform.properties.readings.filter((ts) => ts.highlighted === "Before")
  const after = platform.properties.readings.filter((ts) => ts.highlighted === "After")

  const notHighlighted = platform.properties.readings.filter((ts) => ts.highlighted === "No")

  const airTemp = filterTimeSeries(notHighlighted, conditions.airTemp, laterThan)
  const airPressure = filterTimeSeries(notHighlighted, conditions.airPressure, laterThan)
  const waterTemp = filterTimeSeries(notHighlighted, conditions.waterTemp, laterThan)
  const waterLevel = filterTimeSeries(notHighlighted, conditions.waterLevel, laterThan)
  const visibility = filterTimeSeries(notHighlighted, conditions.visibility, laterThan)

  const { timeSeries: windTimeSeries } = pickWindTimeSeries(platform, laterThan)
  const { timeSeries: waveTimeSeries } = pickWaveTimeSeries(platform, laterThan)

  const timeSeriesWithNull = [waterTemp, airTemp, airPressure, waterLevel, visibility]
  const timeSeries = timeSeriesWithNull.filter((ts) => ts !== null) as PlatformTimeSeries[]

  const nonGroupTimeSeriesWithNull = [...before, waterTemp, airTemp, airPressure, waterLevel, visibility, ...after]
  const nonGroupTimeSeries = nonGroupTimeSeriesWithNull.filter((ts) => ts !== null) as PlatformTimeSeries[]

  const allWithNull = [...before, ...windTimeSeries, ...waveTimeSeries, ...timeSeries, ...after]
  const allCurrentConditionsTimeseries = allWithNull.filter((ts) => ts !== null) as PlatformTimeSeries[]

  return {
    before,
    after,
    windTimeSeries,
    waveTimeSeries,
    nonGroupTimeSeries,
    timeSeries,
    allCurrentConditionsTimeseries,
  }
}
