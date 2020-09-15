import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

/** Common props for formatting current conditions cards */
export const cardProps = {
  md: "4",
  sm: "6",
  style: {
    paddingTop: "1rem",
  },
}

/**
 * URL to the observation page for a data type
 *
 * @param platform
 * @param timeSeries
 */
export function cardUrl(platform: PlatformFeature, timeSeries: PlatformTimeSeries): string {
  return urlPartReplacer(
    urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
    ":type",
    timeSeries.data_type.standard_name
  )
}
