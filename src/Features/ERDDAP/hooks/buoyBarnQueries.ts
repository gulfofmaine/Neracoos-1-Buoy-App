import { PlatformFeatureCollection } from "../types"

export const erddapService = (process.env.NEXT_PUBLIC_ERDDAP_SERVICE || "https://buoybarn.neracoos.org") as string

/**
 * Load platforms from Buoy Barn
 */
export const getPlatforms = async () => {
  const url = erddapService + "/api/platforms/"

  const result = await fetch(url)
  const json = (await result.json()) as PlatformFeatureCollection

  return json
}

export const usePlatformsQueryKey = ["buoybarn-platforms"]
