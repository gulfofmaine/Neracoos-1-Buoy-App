/**
 * Display current conditions for selected platform.
 */
import * as React from "react"

import { ErddapCurrentPlatformConditions } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"
import { useUnitSystem } from "Features/Units"

/**
 * Display current conditions for selected platform
 * @param platform ERDDAP platform object
 */
export const CurrentConditionsPage: React.SFC<RenderProps> = ({ platform }) => {
  const unit_system = useUnitSystem()

  return (
    <div>
      <ErddapCurrentPlatformConditions platform={platform} unit_system={unit_system} />
    </div>
  )
}
