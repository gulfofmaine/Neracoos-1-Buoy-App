/**
 * Types that the Platform pages use to match URL parameters.
 */

export interface PlatformMatchParams {
  /**
   * Platform ID from URL parameter
   */
  id: string
}

export type PlatformObservationMatchParams = PlatformMatchParams & {
  /**
   * Platform datatype from URL parameter
   */
  type: string
}
