/**
 * Specialty Wind observation page.
 */
import * as React from "react"

import { ErddapWindObservedCondition } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

/**
 *
 * @param platform Platform object to load wind data from
 */
export const WindObservationsPage: React.SFC<RenderProps> = ({ platform, unit_system }) => (
  <ErddapWindObservedCondition platform={platform} unit_system={unit_system} />
)
