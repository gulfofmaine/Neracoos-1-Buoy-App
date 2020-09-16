/**
 * Display current conditions for selected platform.
 */
import React from "react"

import { ErddapCurrentPlatformConditions } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

/**
 * Display current conditions for selected platform
 * @param platform ERDDAP platform object
 */
export const CurrentConditionsPage: React.FC<RenderProps> = ({ platform }) => {
  return (
    <div>
      <ErddapCurrentPlatformConditions platform={platform} />
    </div>
  )
}
