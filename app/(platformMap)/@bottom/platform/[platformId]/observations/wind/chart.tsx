"use client"

import { UsePlatform } from "Features/ERDDAP/hooks"
import { ErddapWindObservedCondition } from "Features/ERDDAP/Platform/Observations/WindCondition"

export function WindChart({ platformId }: { platformId: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapWindObservedCondition platform={platform} />}
    </UsePlatform>
  )
}
