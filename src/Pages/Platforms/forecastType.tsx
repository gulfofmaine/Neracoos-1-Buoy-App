/**
 * Forecast type page
 */
import React from "react"
import { useParams } from "react-router-dom"

import { Forecast } from "Features/ERDDAP"
import { UsePlatformRenderProps } from "Features/ERDDAP/hooks/BuoyBarnComponents"
import { useUnitSystem } from "Features/Units"

import { PlatformObservationMatchParams } from "./types"

export type ForecastTypePageProps = UsePlatformRenderProps

export const ForecastTypePage: React.FC<ForecastTypePageProps> = ({ platform }: ForecastTypePageProps) => {
  const { type } = useParams<keyof PlatformObservationMatchParams>()
  const unitSystem = useUnitSystem()

  return <Forecast platform={platform} forecast_type={type!} unitSystem={unitSystem} />
}
