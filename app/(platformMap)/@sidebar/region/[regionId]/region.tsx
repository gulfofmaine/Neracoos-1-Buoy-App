"use client"
import { Region } from "Shared/regions"
import { ErddapPlatformList } from "Features/ERDDAP"

export function RegionList({ region }: { region: Region }) {
  return <ErddapPlatformList boundingBox={region.bbox} />
}
