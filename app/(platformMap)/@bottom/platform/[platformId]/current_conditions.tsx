"use client"
import { UsePlatform } from "Features/ERDDAP/hooks"
import { ErddapCurrentPlatformConditions } from "Features/ERDDAP/Platform/Observations/CurrentConditions"

export function CurrentConditions({ platformId }: { platformId: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => <ErddapCurrentPlatformConditions platform={platform} />}
    </UsePlatform>
  )
}
