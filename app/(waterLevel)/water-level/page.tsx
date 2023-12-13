"use client"

import { ErddapWaterLevelSensorListBase } from "Features/ERDDAP/List/waterSensorList"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"

import { Col, Row } from "reactstrap"

import React, { useEffect, useState } from "react"

export default function WaterLevelIndexPage() {
  const { data, isLoading } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()

  useEffect(() => {
    if (data) {
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
    }
  }, [data])

  return (
    <>
      <Row>
        <Col>{waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}</Col>
        <Col>{waterLevelPlatforms && <ErddapWaterLevelSensorListBase platforms={waterLevelPlatforms} />}</Col>
      </Row>
    </>
  )
}
