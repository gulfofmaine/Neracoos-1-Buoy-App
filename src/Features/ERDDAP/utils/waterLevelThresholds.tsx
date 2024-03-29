import { fa2 } from "@fortawesome/free-solid-svg-icons"
import { colors } from "Shared/colors"

export const getWaterLevelThresholdsMapWithDatum = (floodThresholds, datumOffset, dataConverter, unitSystem) => {
  console.log("1:", floodThresholds, "2: ", datumOffset, "3:", dataConverter, "4: ", unitSystem)
  const map = floodThresholds.reduce((acc, level, index) => {
    if (!acc[level.name] && typeof datumOffset === "number") {
      acc[level.name] =
        level.name === "Major"
          ? {
              minValue: dataConverter.convertToNumber(level.min_value, unitSystem) + datumOffset,
              maxValue: dataConverter.convertToNumber(level.min_value, unitSystem) + 1 + datumOffset,
            }
          : {
              minValue: dataConverter.convertToNumber(level.min_value, unitSystem) + datumOffset,
              maxValue: dataConverter.convertToNumber(floodThresholds[index - 1].min_value, unitSystem) + datumOffset,
            }
    }
    return acc
  }, {})
  return map
}

export const getWaterLevelThresholdsMapRawComp = (floodThresholds) => {
  if (floodThresholds) {
    return floodThresholds.map((threshold) => {
      const max_value =
        threshold.name == "Major" ? null : floodThresholds.find((f) => f.name === compChart[threshold.name])?.min_value
      return {
        name: threshold.name,
        min_value: threshold.min_value,
        max_value: max_value,
        description: threshold.description,
      }
    })
  }
  return null
}

const compChart = {
  Action: "Minor",
  Minor: "Moderate",
  Moderate: "Major",
}

export const getSurpassedThreshold = (value, thresholds) => {
  const range = thresholds.find((t) => {
    if (t.name === "Major") {
      return value >= t.min_value
    }
    return value >= t.min_value && value <= t.max_value
  })
  if (range) {
    return range.name
  }
  return null
}

export const floodLevelThresholdsAlertColors = (alert, old, opacity) => {
  const colorMap = {
    Major: colors.alertMajor,
    Moderate: colors.alertModerate,
    Minor: colors.alertMinor,
    Action: colors.alertAction,
    null: `#cf5c00${opacity}`,
    NA: `#cf5c00${opacity}`,
    None: `#cf5c00${opacity}`,
  }
  const color = old ? "gray" : colorMap[alert]
  console.log(color)
  return color
}
