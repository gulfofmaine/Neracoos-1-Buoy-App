"use client"
import { ErddapWavesObservedCondition } from "Features/ERDDAP/Platform/Observations/WavesCondition"
import { UsePlatform } from "Features/ERDDAP/hooks"
import React from "react"

export function WavesCharts({ platformId }: { platformId: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapWavesObservedCondition platform={platform} />}
    </UsePlatform>
  )
}
