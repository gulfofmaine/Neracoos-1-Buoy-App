"use client"

import { UsePlatform } from "Features/ERDDAP/hooks"
import { ErddapAllObservationsTable } from "Features/ERDDAP/Platform/Observations/Table/all"
import { useUnitSystem } from "Features/Units"

export function AllObservations({ platformId }: { platformId: string }) {
  const unitSystem = useUnitSystem()

  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapAllObservationsTable platform={platform} unitSystem={unitSystem} />}
    </UsePlatform>
  )
}
