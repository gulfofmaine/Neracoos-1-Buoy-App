"use client"

import { ErddapMap } from "Features/ERDDAP"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
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

  return (
    <>
      <ErddapMap platforms={waterLevelPlatforms} height={"60vh"} />
    </>
  )
}
