"use client"

import { ErddapPlatformList } from "Features/ERDDAP"
import type { Region } from "Shared/regions"

export function RegionList({ region }: { region: Region }) {
  return <ErddapPlatformList boundingBox={region.bbox} />
}
