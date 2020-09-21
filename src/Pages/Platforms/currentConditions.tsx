/**
 * Display current conditions for selected platform.
 */
import * as React from "react"

import { ErddapCurrentPlatformConditions } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"

/**
 * Display current conditions for selected platform
 * @param platform ERDDAP platform object
 */
export const CurrentConditionsPage: React.FunctionComponent<UsePlatformRenderProps> = ({ platform }) => {
  return (
    <div>
      <ErddapCurrentPlatformConditions platform={platform} />
    </div>
  )
}
