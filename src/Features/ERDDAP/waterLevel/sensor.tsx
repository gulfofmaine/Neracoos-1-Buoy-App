import { PlatformFeatureCollection } from "../types"

export const filterForSensors = (platforms: PlatformFeatureCollection) => {
  console.log("chicken", platforms.features[0].properties.readings)
  return platforms?.features.filter((p) => {
    return (
      p.properties.readings.find((r) => r.data_type.short_name === "SWL") ||
      p.properties.attribution[0].attribution === "Hohonu"
    )
  })
}
