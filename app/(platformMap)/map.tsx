"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import { ErddapMap } from "Features/ERDDAP/Map"
import { regionList } from "Shared/constants"

export function Map({ height }: { height: number }) {
  const params: { regionId?: string } = useParams()
  const [ bbox, setBbox ] = useState()

useEffect(() => {
  if (typeof params.regionId !== "undefined") {
    const regionId = decodeURIComponent(params.regionId)
    const region = regionList.find((r) => r.slug === regionId)
    setBbox(region?.bbox)
  }
}, [params.regionId])
  

  return <ErddapMap height={"80vh"} width="100%" boundingBox={bbox}/>
}
