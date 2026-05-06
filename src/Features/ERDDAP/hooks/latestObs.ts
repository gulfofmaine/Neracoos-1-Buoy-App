import { round } from "Shared/math"
import { converter } from "Features/Units/Converter"
import { PlatformTimeSeries } from "../types"
import { UnitSystem } from "Features/Units/types"

type CardDispData = {
  primary: string | number | null
  secondary: string | number | null
  primaryUnit: string | null
  secondaryUnit: string | null
  direction: string | number | null
  directionDeg: number | null
  directionUnit: string | null
}

// A collection of possible metric names for each variable
const metric_names = {
  waveHeight: ["WVHT", "sea_surface_wave_significant_height", "wave_ht_sig"],
  wavePeriod: ["DPD", "AWP", "DWP", "sea_surface_wave_mean_period", "average_wave_period", "wave_period_max"],
  waveDirection: ["MWD"],
  windSpeed: ["WSPD"],
  windGust: ["GST", "WGST"],
  windDirection: ["WDIR", "WD"],
}

// Grouped layer of metrics to identify when special cards will need to be made
const group_metrics = {
  Waves: ["waveHeight", "wavePeriod", "waveDirection"],
  Wind: ["windSpeed", "windGust", "windDirection"],
} as const

// Makes the function defintions below a little more mellow
type MetricName = keyof typeof metric_names
type MetricList = ReadonlyArray<MetricName>

const commonHelpers = (unitSystem?: UnitSystem) => {
  const getValue = (ts: PlatformTimeSeries) => {
    if (!unitSystem) return null
    const unit_converter = converter(ts.data_type.standard_name)
    const value = unit_converter.convertTo(ts.value as number, unitSystem)
    return typeof value === "number" ? round(value as number, 1) : value
  }

  const getUnit = (ts: PlatformTimeSeries) => {
    if (!unitSystem) return null
    const unit_converter = converter(ts.data_type.standard_name)
    return unit_converter.displayName(unitSystem)
  }

  const getVariableName = (ts: PlatformTimeSeries) => {
    return (ts.data_type.short_name ?? ts.variable ?? ts.data_type.standard_name ?? "").toUpperCase()
  }

  const upperCaseVariable = (value: string) => value.toUpperCase()

  const toDegrees = (ts: PlatformTimeSeries) => {
    const unit_converter = converter(ts.data_type.standard_name)
    const degrees: number = unit_converter.convertTo(ts.value as number, UnitSystem.metric) as number
    return round(degrees, 0)
  }

  return { getValue, getUnit, getVariableName, upperCaseVariable, toDegrees }
}

export const getGroupData = (unitSystem: UnitSystem, groupName: string, groupTs: PlatformTimeSeries[]) => {
  const { getValue, getUnit, getVariableName, upperCaseVariable, toDegrees } = commonHelpers(unitSystem)

  // Get a set of metric names
  const metricNameSet = (names: string[]) => new Set(names.map(upperCaseVariable))

  const getSpecificTs = (metric: MetricName) => {
    const possibleVars = metricNameSet(metric_names[metric])
    return groupTs.find((ts) => possibleVars.has(getVariableName(ts)))
  }

  const getWindOrWaveData = (): CardDispData | null => {
    if (groupName === "Waves") {
      const height = getSpecificTs("waveHeight")
      const period = getSpecificTs("wavePeriod")
      const direction = getSpecificTs("waveDirection")
      return {
        primary: height ? getValue(height) : null,
        secondary: period ? getValue(period) : null,
        primaryUnit: height ? getUnit(height) : null,
        secondaryUnit: period ? getUnit(period) : null,
        direction: direction ? getValue(direction) : null,
        directionDeg: direction ? toDegrees(direction) : null,
        directionUnit: direction ? getUnit(direction) : null,
      }
    }
    if (groupName === "Wind") {
      const speed = getSpecificTs("windSpeed")
      const gust = getSpecificTs("windGust")
      const direction = getSpecificTs("windDirection")
      return {
        primary: speed ? getValue(speed) : null,
        secondary: gust ? getValue(gust) : null,
        primaryUnit: speed ? getUnit(speed) : null,
        secondaryUnit: gust ? getUnit(gust) : null,
        direction: direction ? getValue(direction) : null,
        directionDeg: direction ? toDegrees(direction) : null,
        directionUnit: direction ? getUnit(direction) : null,
      }
    }
    return null
  }

  return { getWindOrWaveData }
}

// Return simple data which does not require grouping, such as Air Temperature.
export const getNonGroupData = (unitSystem: UnitSystem, ts: PlatformTimeSeries) => {
  const { getValue, getUnit } = commonHelpers(unitSystem)

  const getOtherData = (): CardDispData => {
    return {
      primary: getValue(ts),
      secondary: null,
      primaryUnit: getUnit(ts),
      secondaryUnit: null,
      direction: null,
      directionDeg: null,
      directionUnit: null,
    }
  }

  return { getOtherData }
}

// Find desired variable groups and return an array of platform timeseries.
export const getLatestObsGroups = (allTs: PlatformTimeSeries[]) => {
  const { getVariableName, upperCaseVariable } = commonHelpers()

  // Take each metric in a possible group and uppercase the variables.
  const metricSet = (metrics: MetricList) =>
    new Set(metrics.flatMap((metric) => metric_names[metric]).map(upperCaseVariable))

  const groups = {
    Waves: metricSet(group_metrics.Waves),
    Wind: metricSet(group_metrics.Wind),
  }

  const filterByVar = (vars: Set<string>) => {
    return allTs.filter((ts) => {
      return vars.has(getVariableName(ts))
    })
  }

  // Take the given sets, combine them and exclude all variables that do not
  // exist in it.
  const filterOut = (...sets: Set<string>[]) => {
    let excludeSet = new Set(sets.flatMap((set) => [...set]))
    return allTs.filter((ts) => !excludeSet.has(getVariableName(ts)))
  }

  const waveTs = filterByVar(groups.Waves)
  const windTs = filterByVar(groups.Wind)
  const otherTs = filterOut(groups.Waves, groups.Wind)

  return { waveTs, windTs, otherTs }
}
