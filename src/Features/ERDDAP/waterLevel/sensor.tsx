import { PlatformFeatureCollection } from "../types"
import { conditions } from "../utils/conditions"

export const filterForSensors = (platforms: PlatformFeatureCollection) => {
  return platforms?.features.filter((p) => {
    return (
      // p.properties.readings.find((r) => r.data_type.short_name === "SWL") ||
      p.properties.attribution[0]?.attribution === "Hohonu" ||
      conditions.waterLevel.find((c) => p.properties.readings.find((r) => r.data_type.standard_name === c))
    )
  })
}
