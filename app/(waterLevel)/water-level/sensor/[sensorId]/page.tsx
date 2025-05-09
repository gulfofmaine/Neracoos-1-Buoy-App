"use client"
import { fromLonLat } from "ol/proj"
import React, { useEffect, useState, use } from "react"
import { createBreakpoint } from "react-use"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { WaterLevelSensorInfo } from "components/PlatformInfo/WaterLevelSensorInfo"
import { SecondaryBanner } from "components/SecondaryBanner"
import { usePlatform } from "Features/ERDDAP/hooks"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"
import { useWaterLevelPlatforms } from "Features/ERDDAP/waterLevel/hooks"
import { useDecodedUrl } from "util/hooks"

const useBreakpoint = createBreakpoint({ S: 576, M: 768, L: 992 })

export default function SensorIdPage(props: { params: Promise<{ sensorId: string }> }) {
  const params = use(props.params)
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
        <Col sm={6} md={4}>
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
        <Col sm={6}>{platform && <WaterLevelObservationContent platform={platform} />}</Col>
        {breakpoint === "S" && waterLevelPlatforms && (
          <Col sm={6}>
            <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} platformId={id} height={"30vh"} />
          </Col>
        )}
      </Row>
    </div>
  )
}
