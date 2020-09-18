/**
 * Forecast type page
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { Forecast } from "Features/ERDDAP"
import { RenderProps } from "Features/ERDDAP/Platform/Grabber"
import { useUnitSystem } from "Features/Units"

import { PlatformObservationMatchParams } from "./types"

export type ForecastTypePageProps = RenderProps & RouteComponentProps

export const ForecastTypePage: React.FunctionComponent<ForecastTypePageProps> = ({ platform, match }) => {
  const { type } = match.params as PlatformObservationMatchParams
  const unit_system = useUnitSystem()

  return <Forecast platform={platform} forecast_type={type} unit_system={unit_system} />
}
