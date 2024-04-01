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
  }
  return null
}

export const floodLevelThresholdsAlertColors = (alert, old, opacity) => {
  const colorMap = {
    Major: `${colors.alertMajor}${opacity}`,
    Moderate: `${colors.alertModerate}${opacity}`,
    Minor: `${colors.alertMinor}${opacity}`,
    Action: `${colors.alertAction}${opacity}`,
    null: `#cf5c00${opacity}`,
    NA: `#cf5c00${opacity}`,
    None: `#cf5c00${opacity}`,
  }
  const color = old ? "gray" : colorMap[alert]
  return color
}
