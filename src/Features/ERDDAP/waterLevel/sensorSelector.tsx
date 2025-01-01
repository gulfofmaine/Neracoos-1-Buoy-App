import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import { useDecodedUrl } from "util/hooks"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { platformName } from "Features/ERDDAP/utils/platformName"
import { getIsoForPicker, threeDaysAgoRounded, weeksInFuture } from "Shared/time"
import { DatumOffsetOptions } from "Features/ERDDAP/types"

import { useEndTime, useStartTime, useDatum } from "./hooks"

export const WaterLevelSensorSelector = ({ sensors }) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [sensorOptions, setSensorOptions] = useState()
  const params = useParams()
  const searchParams = useSearchParams()
  const decodedId = useDecodedUrl(params.sensorId as string)
  const sensor = sensors.find((s) => s.id === decodedId)
  const {endTime} = useEndTime()
  const {startTime} = useStartTime()
  const {datum} = useDatum()

  const close = () => {
    setIsOpen(false)
  }

  const sensorOptions = sensors ? sensors
    .sort((a, b) => { if (a.id < b.id) { return -1} else { return 1}})
    .map((p, index) => {
      return (
        <Link key={`dropdown-${p.id}`} onClick={close} 
        href={{pathname: `/water-level/sensor/${p.id as string}`,
        query: buildSearchParamsQuery(startTime, endTime, datum)
        }}
        className="list-group-item list-group-item-action"
      >{platformName(p)}</Link>
      )
    })
      : []

  // useEffect(() => {
  //   if (sensors) {
  //     const options = sensors
  //       .sort((a, b) => {
  //         if (a.id < b.id) {
  //           return -1
  //         } else return 1
  //       })
  //       .map((p, index) => {
  //         return (
  //           <Link
  //             key={`dropdown-${index}`}
  //             onClick={() => close()}
  //             href={{
  //               pathname: `/water-level/sensor/${p.id as string}`,
  //               query: buildSearchParamsQuery(startTime as string, endTime as string, datum as DatumOffsetOptions),
  //             }}
  //             className="list-group-item list-group-item-action"
  //           >
  //             {platformName(p)}
  //           </Link>
  //         )
  //       })
  //     setSensorOptions(options)
  //   }
  // }, [sensors, startTime, endTime, datum])

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
