"use client"

import { ErddapWaterLevelSensorListBase } from "Features/ERDDAP/List/waterSensorList"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { Col, Row } from "reactstrap"

import React, { useEffect, useState } from "react"

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
      <Row>
        <Col>{waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}</Col>
        <Col>
          <ErddapWaterLevelSensorListBase platforms={waterLevelPlatforms} />
        </Col>
      </Row>
    </>
  )
}
