/**
 * Specialty Wind observation page.
 */
import * as React from "react"

import { ErddapWindObservedCondition, RenderProps } from "Features/ERDDAP"

/**
 *
 * @param platform Platform object to load wind data from
 */
export const WindObservationsPage: React.SFC<RenderProps> = ({ platform }) => (
  <ErddapWindObservedCondition platform={platform} />
)
