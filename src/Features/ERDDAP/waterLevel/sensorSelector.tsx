import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Col, Dropdown, DropdownMenu, DropdownToggle, NavLink, Row } from "reactstrap"

export const WaterLevelSensorSelector = ({ platforms }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sensorOptions, setSensorOptions] = useState()
  const params = useParams()

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (platforms) {
      const options = platforms.map((p, index) => {
        const link = urlPartReplacer(paths.waterLevel.sensor, ":id", p.id as string)
        return (
          <NavLink key={index} href={link} onClick={() => close()}>
            {p.id}
          </NavLink>
        )
      })
      setSensorOptions(options)
    }
  }, [platforms])

  return (
    <Row style={{ width: "fit-content", verticalAlign: "middle", marginBottom: "20px" }}>
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
            {decodeURIComponent(params.sensorId as string)}
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
