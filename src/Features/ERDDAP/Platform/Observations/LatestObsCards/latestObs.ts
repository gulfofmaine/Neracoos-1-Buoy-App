import { round } from "Shared/math"
import { converter } from "Features/Units/Converter"
import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { UnitSystem } from "Features/Units/types"
import { conditions } from "Features/ERDDAP/utils/conditions"

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
const grouped_metric_names = {
  waveHeight: new Set([...conditions.waveHeight]),
  wavePeriod: new Set([...conditions.wavePeriod]),
  waveDirection: new Set([...conditions.waveDirection]),
  windSpeed: new Set([...conditions.windSpeed]),
  windGust: new Set([...conditions.windGust]),
  windDirection: new Set([...conditions.windDirection]),
}

const non_grouped_metric_names = {
  waterTemp: new Set([...conditions.waterTemp]),
  airTemp: new Set([...conditions.airTemp]),
  airPressure: new Set([...conditions.airPressure]),
}

// Makes the function defintions below a little more mellow
type GroupedMetricName = keyof typeof grouped_metric_names

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
    return ts.data_type.standard_name ?? ""
  }

  const toDegrees = (ts: PlatformTimeSeries) => {
    const unit_converter = converter(ts.data_type.standard_name)
    const degrees: number = unit_converter.convertTo(ts.value as number, UnitSystem.metric) as number
    return round(degrees, 0)
  }

  return { getValue, getUnit, getVariableName, toDegrees }
}

export const getGroupData = (unitSystem: UnitSystem, groupName: string, groupTs: PlatformTimeSeries[]) => {
  const { getValue, getUnit, getVariableName, toDegrees } = commonHelpers(unitSystem)

  const getSpecificTs = (metric: GroupedMetricName) => {
    return groupTs.find((ts) => grouped_metric_names[metric].has(getVariableName(ts)))
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
  const name = ts.data_type.standard_name

  const getOtherData = (): CardDispData | null => {
    // Desired data aside from wind and waves
    if (
      !non_grouped_metric_names.airTemp.has(name) &&
      !non_grouped_metric_names.waterTemp.has(name) &&
      !non_grouped_metric_names.airPressure.has(name)
    )
      return null

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
