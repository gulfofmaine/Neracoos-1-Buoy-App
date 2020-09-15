import * as Sentry from "@sentry/react"
import { useQuery } from "react-query"

import { PlatformFeatureCollection } from "../types"
import { defaultQueryConfig } from "./hookConfig"

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
export function usePlatforms() {
  return useQuery("erddap-platforms", getPlatforms, defaultQueryConfig)
}
