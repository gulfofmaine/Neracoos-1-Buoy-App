/**
 * Specialty Wind observation page.
 */
import * as React from "react"

import { ErddapWindObservedCondition } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"

/**
 *
 * @param platform Platform object to load wind data from
 */
export const WindObservationsPage: React.FunctionComponent<UsePlatformRenderProps> = ({ platform }) => (
  <ErddapWindObservedCondition platform={platform} />
)
