import * as Sentry from "@sentry/react"
import { useQuery } from "react-query"

import { ForecastSource, PlatformFeatureCollection } from "../types"
import { defaultQueryConfig } from "./hookConfig"

/**
 * Load platforms from Buoy Barn
 */
const getPlatforms = async () => {
  const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + "/api/platforms/"

  Sentry.addBreadcrumb({
    category: "Buoy Barn",
    data: {
      url,
    },
    message: "Loading platform GeoJSON",
  })

  const result = await fetch(url)
  const json = (await result.json()) as PlatformFeatureCollection

  return json
}

/**
 * Load all the platforms
 */
export function usePlatforms<PlatformFeatureCollection, Error>() {
  return useQuery("buoybarn-platforms", getPlatforms, defaultQueryConfig)
}

/**
 * Load available forecasts from Buoy Barn
 */
const getForecasts = async () => {
  const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + "/api/forecasts/"

  Sentry.addBreadcrumb({
    category: "Buoy Barn",
    data: {
      url,
    },
    message: "Loading forecast metadata",
  })

  const result = await fetch(url)
  const json = (await result.json()) as ForecastSource[]

  return json
}

/**
 * Load forecasts
 */
export function useForecasts() {
  return useQuery("buoybarn-forecasts", getForecasts, defaultQueryConfig)
}
