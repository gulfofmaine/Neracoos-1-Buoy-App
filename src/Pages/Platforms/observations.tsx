/**
 * Generalized observation page.
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservedCondition } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"

import { PlatformObservationMatchParams } from "./types"

export type ObservationPageProps = UsePlatformRenderProps & RouteComponentProps

/**
 * General observation data page
 * @param platform Platform to load observations for
 * @param routeProps RouteComponentProps from 'react-router-dom'
 */
export const ObservationsPage: React.FunctionComponent<ObservationPageProps> = ({ platform, match }) => {
  const { type } = match.params as PlatformObservationMatchParams

  return <ErddapObservedCondition platform={platform} standardName={type} />
}
