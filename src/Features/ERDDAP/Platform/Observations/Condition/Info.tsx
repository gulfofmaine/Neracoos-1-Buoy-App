import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import ListGroup from "react-bootstrap/ListGroup"

import { tabledapProtocolUrl } from "Shared/erddap/tabledap"

import { PlatformTimeSeries } from "../../../types"

interface InfoProps {
  timeSeries: PlatformTimeSeries[]
  id: number
  startDate: Date
}

/**
 * Display tooltip for a chart
 *
 * @param timeSeries PlatformTimeSeries to display tooltip for
 * @param id Unique key to identify tooltip, usually index from map
 */
export const Info: React.FC<InfoProps> = ({ timeSeries, id, startDate }: InfoProps) => {
  const protocolUrl = (protocol: string) =>
    tabledapProtocolUrl(
      timeSeries[0].server,
      timeSeries[0].dataset,
      protocol,
      timeSeries.map((ts) => ts.variable),
      {
        ...timeSeries[0].constraints,
        "time>=": startDate.toISOString(),
      },
    )

  const renderToolTip = (props) => {
    return (
      <Popover id={`tooltip-${id}`} {...props}>
        <Popover.Header as="h5">Data access</Popover.Header>
        <Popover.Body style={{ padding: 0 }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href={protocolUrl("htmlTable")}>Data table</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={protocolUrl("csv")}>Download CSV</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={protocolUrl("html")}>ERDDAP dataset</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={protocolUrl("kml")}>KML</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href={protocolUrl("geojson")}>GeoJSON</a>
            </ListGroup.Item>
          </ListGroup>
        </Popover.Body>
      </Popover>
    )
  }

  return (
    <React.Fragment>
      <OverlayTrigger delay={{ show: 250, hide: 4000 }} overlay={renderToolTip} trigger={["click"]}>
        <FontAwesomeIcon
          id={`tooltip-${id}-trigger`}
          icon={faInfoCircle}
          style={{ fontSize: "1rem", verticalAlign: "middle" }}
        />
      </OverlayTrigger>
    </React.Fragment>
  )
}
