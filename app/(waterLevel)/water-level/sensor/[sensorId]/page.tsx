"use client"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"

import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"
import { PlatformInfo } from "Pages/Platforms/platformInfo"

import { fromLonLat } from "ol/proj"
import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"

export default function SensorIdPage({ params }) {
  const { data } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()

  useEffect(() => {
    if (data) {
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
    }
  }, [data])

  return (
    <Row>
      <Col style={{ width: "20vw" }}>
        <div style={{ width: "100%" }}>
          <PlatformInfo id={decodeURIComponent(params.sensorId)} />
          {waterLevelPlatforms && (
            <div style={{ marginTop: "2vh" }}>
              <ErddapWaterLevelMapBase
                platforms={waterLevelPlatforms}
                platformId={decodeURIComponent(params.sensorId)}
                height={"30vh"}
                mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
              />
            </div>
          )}
        </div>
      </Col>
      <Col>
        {data && (
          <WaterLevelObservationContent
            sensorId={decodeURIComponent(params.sensorId)}
            platforms={waterLevelPlatforms}
            allPlatforms={data.features}
          />
        )}
      </Col>
    </Row>
  )
}
