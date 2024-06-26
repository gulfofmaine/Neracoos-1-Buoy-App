import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"

export const WaterLevelSensorSelector = ({ sensors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sensorOptions, setSensorOptions] = useState()
  const params = useParams()
  const sensorId = useDecodedUrl(params.sensorId as string)

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (sensors) {
      const options = sensors.map((p, index) => {
        const link = `/water-level/sensor/${p.id as string}/${params.startTime}/${params.endTime}/${params.datum}`
        return (
          <DropdownItem key={index} href={link} onClick={() => close()}>
            {p.id}
          </DropdownItem>
        )
      })
      setSensorOptions(options)
    }
  }, [sensors])

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
            {sensorId}
          </DropdownToggle>
          {sensorOptions && (
            <DropdownMenu end={true} style={{ padding: "5px" }}>
              {sensorOptions}
            </DropdownMenu>
          )}
        </Dropdown>
      </Col>
    </Row>
  )
}
