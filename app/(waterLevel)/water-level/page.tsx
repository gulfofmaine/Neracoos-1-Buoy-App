"use client"
import Card from "react-bootstrap/Card"
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
          <Card.Header>{r.name}</Card.Header>
          <ErddapWaterLevelSensorListBase platforms={waterLevelPlatforms} boundingBox={r.bbox} />
        </Card>
      )
    })

  return (
    <>
      <Row className="mx-5 mx-md-10 mt-2 mt-md-5">
        <Col xs={12} md={6} className="ps-0 pe-0 pe-md-5">
          {waterLevelPlatforms && <ErddapWaterLevelMapBase platforms={waterLevelPlatforms} height={"60vh"} />}
        </Col>
        <Col xs={12} md={6} className="ps-0 pe-0 ps-md-5 mt-5 mt-md-0">
          {regionCards}
        </Col>
      </Row>
    </>
  )
}
