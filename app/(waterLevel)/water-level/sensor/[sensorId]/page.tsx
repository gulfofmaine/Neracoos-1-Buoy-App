"use client"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"

import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"

import { fromLonLat } from "ol/proj"
import { useEffect, useState } from "react"
import { Alert, Col, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"
import { createBreakpoint } from "react-use"
import { WaterLevelSensorInfo } from "components/PlatformInfo/WaterLevelSensorInfo"
import { useSearchParams } from "next/navigation"
import React from "react"
import { SecondaryBanner } from "components/SecondaryBanner"

const useBreakpoint = createBreakpoint({ S: 576, M: 768, L: 992 })

export default function SensorIdPage({ params }) {
  const breakpoint = useBreakpoint()
  const { data } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()
  const id = useDecodedUrl(params.sensorId)

  useEffect(() => {
    if (data) {
      data.features.forEach((feature) => {
        if (feature.properties.readings[0]) {
        }
      })
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
    }
  }, [data])

  return (
    <div>
      <SecondaryBanner>
        <p style={{ fontStyle: "italic", fontSize: "14px", marginBottom: "0px", textAlign: "center" }}>
          For official watch, warning, advisory, and forecast information please visit the{" "}
          <a href="https://www.weather.gov/erh/coastalflood" target="_blank">
            NWS Eastern Region Coastal Flood Page
          </a>
        </p>
      </SecondaryBanner>
      <Row>
        <Col sm={{ size: "6" }} md={{ size: "4" }}>
          {waterLevelPlatforms && <WaterLevelSensorInfo id={id} sensors={waterLevelPlatforms} />}
          {breakpoint !== "S" && waterLevelPlatforms && (
            <ErddapWaterLevelMapBase
              platforms={waterLevelPlatforms}
              platformId={id}
              height={"40vh"}
              mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
            />
          )}
        </Col>
        <Col sm={{ size: "6" }}>
          {data && (
            <WaterLevelObservationContent sensorId={id} platforms={waterLevelPlatforms} allPlatforms={data.features} />
          )}
        </Col>
        {breakpoint === "S" && waterLevelPlatforms && (
          <Col sm={{ size: "6" }}>
            <ErddapWaterLevelMapBase
              platforms={waterLevelPlatforms}
              platformId={id}
              height={"30vh"}
              mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
            />
          </Col>
        )}
      </Row>
    </div>
  )
}
