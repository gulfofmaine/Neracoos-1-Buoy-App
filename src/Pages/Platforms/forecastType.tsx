/**
 * Forecast type page
 */
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { Forecast } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"
import { useUnitSystem } from "Features/Units"

import { PlatformObservationMatchParams } from "./types"

export type ForecastTypePageProps = UsePlatformRenderProps & RouteComponentProps

export const ForecastTypePage: React.FunctionComponent<ForecastTypePageProps> = ({ platform, match }) => {
  const { type } = match.params as PlatformObservationMatchParams
  const unitSystem = useUnitSystem()

  return <Forecast platform={platform} forecast_type={type} unitSystem={unitSystem} />
}
