/**
 * Display current conditions for selected platform.
 */
import * as React from "react"

import { ErddapCurrentPlatformConditions, RenderProps } from "Features/ERDDAP"

/**
 * Display current conditions for selected platform
 * @param platform ERDDAP platform object
 */
export const CurrentConditionsPage: React.SFC<RenderProps> = ({ platform }) => (
  <div>
    <ErddapCurrentPlatformConditions platform={platform} />
  </div>
)
