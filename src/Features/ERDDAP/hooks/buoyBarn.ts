import * as Sentry from "@sentry/react"
import { useQuery, useQueries } from "@tanstack/react-query"

import { ForecastJson, ForecastSource, PlatformFeatureCollection } from "../types"
import { defaultQueryConfig } from "./hookConfig"

const erddapService = (process.env.NEXT_PUBLIC_ERDDAP_SERVICE || "https://buoybarn.neracoos.org") as string

/**
 * Load platforms from Buoy Barn
 */
const getPlatforms = async () => {
  const url = erddapService + "/api/platforms/"

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
export function usePlatforms() {
  return useQuery<PlatformFeatureCollection, Error>({
    queryKey: ["buoybarn-platforms"],
    queryFn: getPlatforms,
    ...defaultQueryConfig,
  })
}

/**
 * Load available forecasts from Buoy Barn
 */
const getForecasts = async () => {
  const url = erddapService + "/api/forecasts/"

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
export function useForecastMeta() {
  return useQuery({ queryKey: ["buoybarn-forecasts"], queryFn: getForecasts, ...defaultQueryConfig })
}

/**
 * Load forecast for a given lat, lon
 */
const getForecast = async (forecast: ForecastSource, lat: number, lon: number) => {
  const url = erddapService + forecast.point_forecast + `?lat=${lat}&lon=${lon}`

  Sentry.addBreadcrumb({
    category: "Buoy Barn",
    data: {
      forecast,
      lat,
      lon,
      url,
    },
    message: "Loading forecast",
  })

  const result = await fetch(url)
  const json = (await result.json()) as ForecastJson

  return json.time_series.map((ts) => ({ ...ts, time: new Date(ts.time) }))
}

/**
 * Load forecast dataset for a given point
 *
 * @param lat
 * @param lon
 * @param forecast
 */
export function useForecast(lat: number, lon: number, forecast?: ForecastSource) {
  return useQuery({
    queryKey: ["buoybarn-forecast", { forecast, lat, lon }],
    queryFn: () => getForecast(forecast!, lat, lon),
    enabled: forecast?.source_url ? true : false,
    ...defaultQueryConfig,
  })
}

/**
 * Load multiple forecasts for a given point
 *
 * @param lat Latitude in decimal degrees
 * @param lon Logitude in decimal degrees
 * @param forecasts Forecast sources to load
 */
export function useForecasts(lat: number, lon: number, forecasts: ForecastSource[]) {
  return useQueries({
    queries: forecasts.map((forecast) => ({
      ...defaultQueryConfig,
      queryKey: ["buoybarn-forecast", { forecast, lat, lon }],
      queryFn: () => getForecast(forecast, lat, lon),
    })),
  })
}
