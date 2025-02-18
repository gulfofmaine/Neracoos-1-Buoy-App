"use client"
import React from "react"
import { Card, CardHeader} from "reactstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { ErddapWaterLevelSensorListBase } from "Features/ERDDAP/List/waterSensorList"
import { usePlatforms } from "Features/ERDDAP/hooks"
import { ErddapWaterLevelMapBase } from "Features/ERDDAP/waterLevel/map"
import { filterForSensors } from "Features/ERDDAP/waterLevel/hooks"
import { regionList } from "Shared/regions"

export default function WaterLevelIndexPage() {
  const { data } = usePlatforms()

  const waterLevelPlatforms = data && filterForSensors(data)

  const regionCards =
    waterLevelPlatforms &&
    regionList.map((r, index) => {
      return (
        <Card style={{ marginBottom: "20px" }} key={`sensor-region-list-#${index}`}>
          <CardHeader>{r.name}</CardHeader>
          <ErddapWaterLevelSensorListBase platforms={waterLevelPlatforms} boundingBox={r.bbox} />
        </Card>
      )
    })

  return (
    <>
      <Row>
        <Col sm={{ order: "2" }} md={{ order: "1", span: "6" }}>
          {waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}
        </Col>
        <Col sm={{ order: "1" }} md={{ order: "2", span: "6" }}>
          {regionCards}
        </Col>
      </Row>
    </>
  )
}
