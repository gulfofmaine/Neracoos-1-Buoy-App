/**
 * Generalized observation page.
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservedCondition } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

import { PlatformObservationMatchParams } from "./types"

export type ObservationPageProps = RenderProps & RouteComponentProps

/**
 * General observation data page
 * @param platform Platform to load observations for
 * @param routeProps RouteComponentProps from 'react-router-dom'
 */
export const ObservationsPage: React.SFC<ObservationPageProps> = ({ platform, match, unit_system }) => {
  const { type } = match.params as PlatformObservationMatchParams

  return <ErddapObservedCondition platform={platform} standardName={type} unit_system={unit_system} />
}
