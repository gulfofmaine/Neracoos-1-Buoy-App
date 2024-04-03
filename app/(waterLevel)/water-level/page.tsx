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
        <Col sm={{ order: "2" }} md={{ order: "1", size: "6" }}>
          {waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}
        </Col>
        <Col sm={{ order: "1" }} md={{ order: "2", size: "6" }}>
          {waterLevelPlatforms && <ErddapWaterLevelSensorListBase platforms={waterLevelPlatforms} />}
        </Col>
      </Row>
    </>
  )
}
