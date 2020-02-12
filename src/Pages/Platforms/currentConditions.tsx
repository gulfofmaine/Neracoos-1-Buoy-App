/**
 * Display current conditions for selected platform.
 */
import * as React from "react"

import { ErddapCurrentPlatformConditions } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

/**
 * Display current conditions for selected platform
 * @param platform ERDDAP platform object
 */
export const CurrentConditionsPage: React.SFC<RenderProps> = ({ platform, unit_system }) => (
  <div>
    <ErddapCurrentPlatformConditions platform={platform} unit_system={unit_system} />
  </div>
)
