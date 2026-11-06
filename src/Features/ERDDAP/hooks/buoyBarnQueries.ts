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

/**
 * Check if a platform is known to Buoy Barn.
 *
 * Returns `undefined` if platforms could not be loaded,
 * so callers can avoid treating an outage as a missing platform.
 */
export const platformExists = async (platformId: string): Promise<boolean | undefined> => {
  try {
    const platforms = await getPlatforms()
    if (!Array.isArray(platforms?.features)) {
      return undefined
    }
    return platforms.features.some((p) => p.id === platformId)
  } catch {
    return undefined
  }
}
