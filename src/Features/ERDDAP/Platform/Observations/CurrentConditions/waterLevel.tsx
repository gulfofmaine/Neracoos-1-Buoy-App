import { PlatformTimeSeries } from "Features/ERDDAP/types"

/**
 * Filters timeseries so it returns the desired time series
 * @param timeSeries - Timeserieses to filter
 * @param dataTypes - Filter by anything in this datatype
 * @param laterThan - Make sure it has a recent reading
 * @returns the timeseries that matches the dataTypes parameter. If there are two matches (i.e. the sensor has multiple timeseries for waterlevel (filterTimeSeries.length !==0)) then it returns the timeseries that contains datums
 */
export function filterWaterLevelTimeSeries(timeSeries: PlatformTimeSeries[], dataTypes: string[], laterThan: Date) {
  let filterTimeSeries: PlatformTimeSeries[] = []

  dataTypes.forEach((dataType) => {
    const matchStandard = timeSeries.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    const matchTime = matchStandard.filter((reading) => (reading.time ? laterThan < new Date(reading.time) : false)) // that have data in the last day
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    matchDepth.forEach((ts) => filterTimeSeries.push(ts))
  })

  if (filterTimeSeries.length === 1) {
    return filterTimeSeries[0]
  }
  //Because some gauges have both "sea_surface_height_above_sea_level", and "tidal_sea_surface_height_above_mean_lower_low_water", we want the water level timeseries that has datums
  if (filterTimeSeries.length >= 1) {
    return filterTimeSeries.find((t) => Object.keys(t.datum_offsets).length !== 0)
  }

  return null
}
