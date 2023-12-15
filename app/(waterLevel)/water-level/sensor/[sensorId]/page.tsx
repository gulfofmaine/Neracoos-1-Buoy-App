"use client"
import { usePlatform, usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationBase } from "Features/ERDDAP/waterLevel/observationBase"
import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"
import { WaterLevelSensorSelector } from "Features/ERDDAP/waterLevel/sensorSelector"

import { PlatformInfo } from "Pages/Platforms/platformInfo"
import { fromLonLat } from "ol/proj"
import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"

export default function SensorIdPage({ params }) {
  const { data, isLoading } = usePlatforms()
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()
  const [sensor, setSensor] = useState<PlatformFeature>()

  useEffect(() => {
    if (data) {
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      const foundSensor = usePlatform(data.features, decodeURIComponent(params.sensorId))
      setSensor(foundSensor)
    }
  }, [params, data])

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
        <WaterLevelSensorSelector platforms={waterLevelPlatforms} />
        {sensor && <WaterLevelObservationBase platform={sensor} />}
      </Col>
    </Row>
  )
}
