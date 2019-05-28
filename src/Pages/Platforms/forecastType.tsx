/**
 * Forecast type page
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { Forecast } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"

import { PlatformObservationMatchParams } from "./types"

export const ForecastTypePage: React.SFC<RenderProps & RouteComponentProps> = ({ platform, match }) => {
  const { type } = match.params as PlatformObservationMatchParams

  return <Forecast platform={platform} type={type} />
}
