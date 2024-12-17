"use client"
import { usePlatforms, usePlatform } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"

import { filterForSensors, useWaterLevelPlatforms } from "Features/ERDDAP/waterLevel/sensor"

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
  const waterLevelPlatforms = useWaterLevelPlatforms()
  const id = useDecodedUrl(params.sensorId)
  const platform = usePlatform(id)

  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    const updateGraph = () => {
      setCurrentTime(Date.now())
    }

    const interval = setInterval(updateGraph, 60 * 1000 * 60) // Update every hour

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateGraph()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

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
          {platform && waterLevelPlatforms && (
            <WaterLevelSensorInfo platform={platform} sensors={waterLevelPlatforms} />
          )}
          {breakpoint !== "S" && waterLevelPlatforms && (
            <ErddapWaterLevelMapBase
              platforms={waterLevelPlatforms}
              platformId={id}
              height={"40vh"}
              mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
            />
          )}
        </Col>
        <Col sm={{ size: "6" }}>{platform && <WaterLevelObservationContent platform={platform} />}</Col>
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
