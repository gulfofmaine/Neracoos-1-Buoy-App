import * as Sentry from "@sentry/react"
import { useQuery } from "react-query"

import { ForecastJson, ForecastSource, PlatformFeatureCollection } from "../types"
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

/**
 * Load forecast for a given lat, lon
 */
const getForecast = (forecast: ForecastSource, lat: number, lon: number) => {
  return async () => {
    const url = (process.env.REACT_APP_ERDDAP_SERVICE as string) + forecast.point_forecast + `?lat=${lat}&lon=${lon}`

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
}

/**
 * Load forecast dataset for a given point
 *
 * @param lat
 * @param lon
 * @param forecast
 */
export function useForecast(lat: number, lon: number, forecast?: ForecastSource) {
  return useQuery(["buoybarn-forecast", { forecast, lat, lon }], getForecast(forecast!, lat, lon), {
    ...defaultQueryConfig,
    enabled: forecast?.source_url ? true : false,
  })
}
