/**
 * All current conditions table component
 */
import * as React from "react"
import ListGroup from "react-bootstrap/ListGroup"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { itemStyle, TableItem } from "./item"

interface Props extends UsePlatformRenderProps {
  unitSystem: UnitSystem
}

/**
 * Display all current conditions
 */
export const ErddapAllObservationsTable: React.FunctionComponent<Props> = ({ platform, unitSystem }) => {
  const times = platform.properties.readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  const datasets = platform.properties.readings

  datasets.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))
  datasets.sort((a, b) => (a.data_type.long_name < b.data_type.long_name ? -1 : 1))

  return (
    <ListGroup style={{ paddingTop: "1rem" }} className="all-observations" as="ul">
      {times.length > 0 ? (
        <ListGroup.Item style={itemStyle} as="li">
          <b>Last updated at: </b> {times[times.length - 1].toLocaleString()}
        </ListGroup.Item>
      ) : null}

      {datasets.map((dataset, index) => {
        let name = dataset.data_type.long_name
        if (dataset.depth) {
          name = name + " @ " + dataset.depth + "m"
        }
        return <TableItem key={index} platform={platform} timeSeries={dataset} unitSystem={unitSystem} />
      })}
    </ListGroup>
  )
}
