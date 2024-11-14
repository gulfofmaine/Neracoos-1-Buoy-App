import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Tooltip } from "reactstrap"

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
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)

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

  const target = `Tooltip-${id}`
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "1rem", verticalAlign: "middle" }} id={target} />
      <Tooltip isOpen={tooltipOpen} toggle={toggle} target={target} autohide={false} style={{ textAlign: "left" }}>
        Data access:
        <ul style={{ paddingLeft: "1rem" }}>
          <li>
            <a href={protocolUrl("htmlTable")}>Data table</a>
          </li>
          <li>
            <a href={protocolUrl("csv")}>Download CSV</a>
          </li>
          <li>
            <a href={protocolUrl("html")}>ERDDAP dataset</a>
          </li>
          <li>
            <a href={protocolUrl("graph")}>ERDDAP graph</a>
          </li>
        </ul>
      </Tooltip>
    </React.Fragment>
  )
}
