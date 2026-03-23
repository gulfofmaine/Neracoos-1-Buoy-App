"use client"

import { UsePlatform } from "Features/ERDDAP/hooks"
import { ErddapObservedCondition } from "Features/ERDDAP/Platform/Observations/Condition"

export function ObservationChart({ platformId, standardName }: { platformId: string; standardName: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapObservedCondition platform={platform} standardName={standardName} />}
    </UsePlatform>
  )
}
