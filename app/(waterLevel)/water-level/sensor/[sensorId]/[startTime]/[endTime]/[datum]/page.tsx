"use client"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { WaterLevelObservationContent } from "Features/ERDDAP/waterLevel/observationContent"

import { filterForSensors } from "Features/ERDDAP/waterLevel/sensor"
import { PlatformInfo } from "components/PlatformInfo/platformInfo"

import { fromLonLat } from "ol/proj"
import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"

export default function SensorIdPage({ params }) {
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
      <Row>
        <Col sm={{ size: "6" }} md={{ size: "4" }}>
          <PlatformInfo id={id} />
          {window.innerWidth > 567 && waterLevelPlatforms && (
            <ErddapWaterLevelMapBase
              platforms={waterLevelPlatforms}
              platformId={id}
              height={"30vh"}
              mapView={{ center: fromLonLat([-69.7, 43]), zoom: 6 }}
            />
          )}
        </Col>
        <Col sm={{ size: "6" }}>
          {data && (
            <WaterLevelObservationContent sensorId={id} platforms={waterLevelPlatforms} allPlatforms={data.features} />
          )}
        </Col>
        {window.innerWidth <= 567 && waterLevelPlatforms && (
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
