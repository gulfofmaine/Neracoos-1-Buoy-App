"use client"
import { useParams } from "next/navigation"

import { regionList } from "Shared/constants"
import { Region, BoundingBox } from "Shared/regions"
import { ErddapMap } from "Features/ERDDAP/Map"

export function Map({ height }: { height: number }) {
  const params: { regionId?: string } = useParams()

  let region: Region | undefined

  if (typeof params.regionId !== "undefined") {
    const regionId = decodeURIComponent(params.regionId)
    region = regionList.find((r) => r.slug === regionId)
  }

  return <ErddapMap height={region ? "80vh" : height} width="100%" boundingBox={region?.bbox} />
}
