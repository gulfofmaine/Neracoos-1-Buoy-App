"use client"
import { ErddapPlatformList } from "Features/ERDDAP"
import { Region, regionList } from "Shared/regions"
import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import Link from "next/link"

export function RegionList({ region }: { region: Region }) {
  return <ErddapPlatformList boundingBox={region.bbox} />
}

export function NextRegion({ region, offset }: { region: Region; offset: number }) {
  let regionIdx = regionList.findIndex((r) => r.slug === region.slug)
  if (regionIdx < 0) {
    return <div />
  }

  let nextRegionIdx = (regionIdx + regionList.length + offset) % regionList.length
  let prevRegionIdx = (regionIdx + regionList.length - 1) % regionList.length
  // Don't show if we only have 1 region or we're trying to show next and it's the same as prev.
  if (regionIdx == nextRegionIdx || (offset == 1 && nextRegionIdx == prevRegionIdx)) {
    return <div />
  }

  return (
    <div>
      <Link
        href={urlPartReplacer(paths.regions.region, ":id", regionList[nextRegionIdx].slug as string)}
        key={regionList[nextRegionIdx].name}
      >
        {regionList[nextRegionIdx].name}
      </Link>
    </div>
  )
}
