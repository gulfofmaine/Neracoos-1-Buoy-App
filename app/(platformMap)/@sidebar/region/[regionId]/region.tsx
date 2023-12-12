"use client"
import { ErddapPlatformList } from "Features/ERDDAP"
import { Region } from "Shared/regions"

export function RegionList({ region }: { region: Region }) {
  return <ErddapPlatformList boundingBox={region.bbox} />
}
