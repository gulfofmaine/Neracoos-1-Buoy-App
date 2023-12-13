"use client"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"
import { WaterLevelSensorSelector } from "Features/ERDDAP/waterLevel/sensorSelector"

import { PlatformInfo } from "Pages/Platforms/platformInfo"
import { fromLonLat } from "ol/proj"
import React, { useEffect, useState } from "react"

export default function SensorIdPage({ params }) {
  const { data, isLoading } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()

  useEffect(() => {
    if (data) {
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
    }
  }, [data])

  return (
    <div style={{ width: "30vw" }}>
      <PlatformInfo id={params.sensorId} />
      {waterLevelPlatforms && (
        <div style={{ marginTop: "2vh" }}>
          <ErddapWaterLevelMapBase
            platforms={waterLevelPlatforms}
            platformId={params.sensorId}
            height={"30vh"}
            mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
          />
        </div>
      )}
      <WaterLevelSensorSelector platforms={waterLevelPlatforms} />
    </div>
  )
}
