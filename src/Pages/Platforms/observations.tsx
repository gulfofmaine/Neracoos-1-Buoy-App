/**
 * Generalized observation page.
 */
import React from "react"
import { useParams } from "react-router-dom"

import { ErddapObservedCondition } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"

import { PlatformObservationMatchParams } from "./types"

export type ObservationPageProps = UsePlatformRenderProps

/**
 * General observation data page
 * @param platform Platform to load observations for
 * @param routeProps RouteComponentProps from 'react-router-dom'
 */
export const ObservationsPage: React.FC<ObservationPageProps> = ({ platform }) => {
  const { type } = useParams<keyof PlatformObservationMatchParams>()

  return <ErddapObservedCondition platform={platform} standardName={type!} />
}
