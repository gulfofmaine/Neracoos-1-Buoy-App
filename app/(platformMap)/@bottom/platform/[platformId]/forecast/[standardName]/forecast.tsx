"use client"
import { Forecast } from "Features/ERDDAP/Platform/Forecasts/Page"
import { UsePlatform } from "Features/ERDDAP/hooks"
import { useUnitSystem } from "Features/Units"

export function ForecastChart({ platformId, standardName }: { platformId: string; standardName: string }) {
  const unitSystem = useUnitSystem()

  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <Forecast platform={platform} forecast_type={standardName} unitSystem={unitSystem} />}
    </UsePlatform>
  )
}
