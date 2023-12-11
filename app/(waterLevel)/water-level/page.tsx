"use client"

import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevelMap"
import { useEffect, useState } from "react"

export default function WaterLevelIndexPage() {
  const { data, isLoading } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()

  useEffect(() => {
    const platforms = data?.features.filter(
      (p) => p.properties.attribution[0].attribution === "NOAA NOS Water Level Observation Network",
    )
    setWaterLevelPlatforms(platforms)
  }, [data])

  return <>{waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}</>
}
