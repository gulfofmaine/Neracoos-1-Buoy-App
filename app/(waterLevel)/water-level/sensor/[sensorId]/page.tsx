"use client"
import { usePlatform, usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"

import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"

import { fromLonLat } from "ol/proj"
import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"
import { createBreakpoint } from "react-use"
import { WaterLevelSensorInfo } from "components/PlatformInfo/WaterLevelSensorInfo"

const useBreakpoint = createBreakpoint({ S: 576, M: 768, L: 992 })

export default function SensorIdPage({ params }) {
  const breakpoint = useBreakpoint()
  const { data } = usePlatforms()
  const id = useDecodedUrl(params.sensorId)
  const [waterLevelPlatforms, setWaterLevelPlatforms] = useState<PlatformFeature[] | undefined>()
  const [platform, setPlatform] = useState<PlatformFeature>()

  useEffect(() => {
    if (data) {
      data.features.forEach((feature) => {
        if (feature.properties.readings[0]) {
        }
      })
      const platforms = filterForSensors(data)
      setWaterLevelPlatforms(platforms)
      if (id) {
        const platform = usePlatform(platforms, id)
        setPlatform(platform)
      }
    }
  }, [data])

  return (
    <div>
      <Row>
        <Col sm={{ size: "6" }} md={{ size: "4" }}>
          {waterLevelPlatforms && platform && (
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
