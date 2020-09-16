/**
 * Specialty Wind observation page.
 */
import React from "react"

import { ErddapWindObservedCondition } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

/**
 *
 * @param platform Platform object to load wind data from
 */
export const WindObservationsPage: React.FC<RenderProps> = ({ platform }) => (
  <ErddapWindObservedCondition platform={platform} />
)
