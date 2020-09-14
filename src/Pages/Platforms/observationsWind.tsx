/**
 * Specialty Wind observation page.
 */
import React from "react"

import { ErddapWindObservedCondition } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"
import { useUnitSystem } from "Features/Units"

/**
 *
 * @param platform Platform object to load wind data from
 */
export const WindObservationsPage: React.SFC<RenderProps> = ({ platform }) => {
  const unit_system = useUnitSystem()

  return <ErddapWindObservedCondition platform={platform} unit_system={unit_system} />
}
