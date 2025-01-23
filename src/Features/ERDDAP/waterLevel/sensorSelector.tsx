import { useParams, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap"

import { useDecodedUrl } from "util/hooks"
import { waterLevelPath } from "Shared/urlParams"
import { platformName } from "Features/ERDDAP/utils/platformName"

import { useEndTime, useStartTime, useDatum } from "./hooks"

export const WaterLevelSensorSelector = ({ sensors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()
  const decodedId = useDecodedUrl(params.sensorId as string)
  const sensor = sensors.find((s) => s.id === decodedId)
  const { endTime } = useEndTime()
  const { startTime } = useStartTime(true)
  const { datum } = useDatum()

  const close = () => {
    setIsOpen(false)
  }

  const sensorOptions = sensors
    ? sensors
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1
          } else {
            return 1
          }
        })
        .map((p, index) => {
          return (
            <Link
              key={`dropdown-${p.id}`}
              onClick={close}
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
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          style={{ border: "1px solid black", borderRadius: "7px" }}
        >
          <DropdownToggle color={"#FFFFFF"} caret={true}>
            {platformName(sensor)}
          </DropdownToggle>
          {sensorOptions && (
            <DropdownMenu end={true} style={{ padding: 0, border: "1px", maxHeight: "215px", overflow: "scroll" }}>
              {sensorOptions}
            </DropdownMenu>
          )}
        </Dropdown>
      </Col>
    </Row>
  )
}
