/**
 * Forecast type page
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { Forecast } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

import { PlatformObservationMatchParams } from "./types"

export type ForecastTypePageProps = RenderProps & RouteComponentProps

export const ForecastTypePage: React.SFC<ForecastTypePageProps> = ({ platform, match, unit_system }) => {
  const { type } = match.params as PlatformObservationMatchParams

  return <Forecast platform={platform} type={type} unit_system={unit_system} />
}
