import { colors } from "Shared/colors"

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
  } else {
    return "None"
  }
}

export const floodLevelThresholdColors = (alert, old, opacity, platform) => {
  const colorMap = {
    Major: `${colors.majorThreshold}${opacity}`,
    Moderate: `${colors.moderateThreshold}${opacity}`,
    Minor: `${colors.minorThreshold}${opacity}`,
    Action: `${colors.actionThreshold}${opacity}`,
    null: `${colors.floodNone}${opacity}`,
    NA: `${colors.floodNA}${opacity}`,
    None: `${colors.floodNone}${opacity}`,
  }
  const color = old ? `${colors.floodNA}${opacity}` : colorMap[alert]
  return color
}
