"use client"
// import { UsePlatform } from "Features/ERDDAP/hooks"
// import { useUnitSystem } from "Features/Units"
// import { Forecast } from "Features/ERDDAP/Platform/Forecasts/Page"
import { WarningAlert } from "components/Alerts"

// export function ForecastChart({ platformId, standardName }: { platformId: string; standardName: string }) {

// const unitSystem = useUnitSystem()

// return (
//   <UsePlatform platformId={platformId}>
//     {({ platform }) => <Forecast platform={platform} forecast_type={standardName} unitSystem={unitSystem} />}
//   </UsePlatform>
// )
// }

export function ForecastChart({ platformId, standardName }: { platformId: string; standardName: string }) {
  return (
    <WarningAlert>
      Forecasts are temporarily unavailable. A new and improved version of this feature is in development for early
      2026!
    </WarningAlert>
  )
}
