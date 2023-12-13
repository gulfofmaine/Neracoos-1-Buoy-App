import { PlatformFeatureCollection } from "../types"

export const filterForSensors = (platforms: PlatformFeatureCollection) => {
  return platforms?.features.filter(
    (p) =>
      p.properties.attribution[0].attribution === "NOAA NOS Water Level Observation Network" ||
      p.properties.attribution[0].attribution === "NERACOOS",
  )
}
