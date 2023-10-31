"use client"
import { UsePlatform } from "Features/ERDDAP/hooks"
import { useUnitSystem } from "Features/Units"
import { ErddapAllObservationsTable } from "Features/ERDDAP/Platform/Observations/Table/all.tsx"

export function AllObservations({ platformId }: { platformId: string }) {
  const unitSystem = useUnitSystem()

  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapAllObservationsTable platform={platform} unitSystem={unitSystem} />}
    </UsePlatform>
  )
}
