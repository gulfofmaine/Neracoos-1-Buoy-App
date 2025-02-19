import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import Row from "react-bootstrap/Row"

import { platformName } from "Features/ERDDAP/utils/platformName"
import { waterLevelPath } from "Shared/urlParams"
import { useDecodedUrl } from "util/hooks"

import { useEndTime, useStartTime, useDatum } from "./hooks"

export const WaterLevelSensorSelector = ({ sensors }) => {
  const params = useParams()
  const decodedId = useDecodedUrl(params.sensorId as string)
  const sensor = sensors.find((s) => s.id === decodedId)
  const { endTime } = useEndTime()
  const { startTime } = useStartTime(true)
  const { datum } = useDatum()

  const sensorOptions = sensors
    ? sensors
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1
          } else {
            return 1
          }
        })
        .map((p) => {
          return (
            <Link
              key={`dropdown-${p.id}`}
              href={waterLevelPath(p.id as string, startTime, endTime, datum)}
              className="list-group-item list-group-item-action"
            >
              {platformName(p)}
            </Link>
          )
        })
    : []

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle" }}>
      <Col style={{ width: "85px", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Station: </h6>
      </Col>
      <Col style={{ margin: 0, padding: 0 }}>
        <Dropdown
          style={{ border: "1px solid black", borderRadius: "7px" }}
        >
          <Dropdown.Toggle variant="outline-primary" color={"#FFFFFF"}>
            {platformName(sensor)}
          </Dropdown.Toggle>
          {sensorOptions && (
            <Dropdown.Menu end={true} style={{ padding: 0, border: "1px", maxHeight: "215px", overflow: "scroll" }}>
              {sensorOptions}
            </Dropdown.Menu>
          )}
        </Dropdown>
      </Col>
    </Row>
  )
}
