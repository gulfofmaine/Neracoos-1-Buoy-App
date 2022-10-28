// import * as Sentry from "@sentry/react"

import { PlatformFeatureCollection } from "Features/ERDDAP/types"
import React from "react"

export const getPlatforms = async () => {
  const url = (process.env.NEXT_PUBLIC_ERDDAP_SERVICE as string) + "/api/platforms"

  const result = await fetch(url, { next: { revalidate: 300 } })
  const json = (await result.json()) as PlatformFeatureCollection

  return json.features
}
