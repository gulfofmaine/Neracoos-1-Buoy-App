/**
 * Generalized observation page.
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservedCondition, RenderProps } from "@app/Features/ERDDAP"

import { PlatformObservationMatchParams } from "./types"

/**
 * General observation data page
 * @param platform Platform to load observations for
 * @param routeProps RouteComponentProps from 'react-router-dom'
 */
export const ObservationsPage: React.SFC<RenderProps & RouteComponentProps> = ({ platform, match }) => {
  const { type } = match.params as PlatformObservationMatchParams

  return <ErddapObservedCondition platform={platform} standardName={type} />
}
