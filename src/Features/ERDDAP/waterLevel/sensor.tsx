import { PlatformFeatureCollection } from "../types"

export const filterForSensors = (platforms: PlatformFeatureCollection) => {
  return platforms?.features.filter(
    (p) =>
      p.properties.attribution[0].attribution === "NERACOOS" ||
      p.properties.attribution[0].attribution === "Gulf of Maine Research Institute" ||
      p.properties.attribution[0].attribution === "Hohonu",
  )
}
