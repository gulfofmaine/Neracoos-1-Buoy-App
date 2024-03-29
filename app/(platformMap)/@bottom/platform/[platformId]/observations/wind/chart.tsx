"use client"
import { ErddapWindObservedCondition } from "Features/ERDDAP/Platform/Observations/WindCondition"
import { UsePlatform } from "Features/ERDDAP/hooks"
import React from "react"

export function WindChart({ platformId }: { platformId: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapWindObservedCondition platform={platform} />}
    </UsePlatform>
  )
}
