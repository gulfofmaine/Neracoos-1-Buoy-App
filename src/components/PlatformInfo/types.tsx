/**
 * Types that the Platform pages use to match URL parameters.
 */

import { PlatformFeature } from "Features/ERDDAP/types"

export interface PlatformMatchParams {
  /**
   * Platform ID from URL parameter
   */
  platform: PlatformFeature
  sensors?: PlatformFeature[] | undefined
}

export type PlatformObservationMatchParams = PlatformMatchParams & {
  /**
   * Platform datatype from URL parameter
   */
  type: string
}
