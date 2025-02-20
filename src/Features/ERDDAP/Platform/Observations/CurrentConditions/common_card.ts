/**
 * Shared utilities and configuration for current conditions cards
 */
import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

/** Common props for formatting current conditions cards */
export const cardProps = {
  md: 4,
  sm: 6,
  style: {
    paddingTop: "1rem",
  },
}

/**
 * Link to a given platforms observation
 *
 * @param platform
 * @param observationSlug slug of observation, usually timeSeries.data_type.standard_name
 */
export function observationLink(platform: PlatformFeature, observationSlug: string): string {
  return urlPartReplacer(
    urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
    ":type",
    observationSlug,
  )
}

/**
 * URL to the observation page for a data type
 *
 * @param platform
 * @param timeSeries
 */
export function cardUrl(platform: PlatformFeature, timeSeries: PlatformTimeSeries): string {
  return observationLink(platform, timeSeries.data_type.standard_name)
}
