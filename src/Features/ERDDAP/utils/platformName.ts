import type { Feature } from "geojson"
import { PlatformProperties } from "../types"

interface PlatformNameProp extends Pick<PlatformProperties, "station_name"> {}

interface PlatformName extends Feature {
  id: string
  properties: PlatformNameProp
}

type PlatformNameAndId = {
  platformName: string | undefined
  platformId: string
}

/**
 * Renders the platform name from the slug and the optional specified name in the API
 * @param platform a subset of platform info
 */
export function platformName(platform: PlatformName) {
  let name = platform.id

  if (platform.properties.station_name && platform.properties.station_name !== "") {
    name += ": " + platform.properties.station_name
  }

  return name
}

export function platformNameAndId(platform: PlatformName): PlatformNameAndId {
  return {
    platformName: platform.properties.station_name,
    platformId: platform.id,
  }
}
