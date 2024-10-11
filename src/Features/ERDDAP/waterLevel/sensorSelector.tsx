import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { platformName } from "Features/ERDDAP/utils/platformName"

export const WaterLevelSensorSelector = ({ sensors }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sensorOptions, setSensorOptions] = useState()
  const params = useParams()
  const searchParams = useSearchParams()
  const sensor = sensors.find((s) => s.id === useDecodedUrl(params.sensorId as string))
  const endTime = searchParams.get("end")
  const startTime = searchParams.get("start")

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (sensors) {
      const options = sensors
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1
          } else return 1
        })
        .map((p, index) => {
          return (
            <Link
              key={`dropdown-${index}`}
              onClick={() => close()}
              href={{
                pathname: `/water-level/sensor/${p.id as string}`,
                query: buildSearchParamsQuery(startTime as string, endTime as string, "datum_mllw_meters"),
              }}
              className="list-group-item list-group-item-action"
            >
              {platformName(p)}
            </Link>
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
