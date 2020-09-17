/**
 * All current conditions table component
 */
import * as React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { RenderProps } from "../../Grabber"
import { itemStyle, TableItem } from "./item"

interface Props extends RenderProps {
  unit_system: UnitSystem
}

export const ErddapAllObservationsTable: React.FunctionComponent<Props> = ({ platform, unit_system }) => {
  const times = platform.properties.readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  const datasets = platform.properties.readings

  datasets.sort((a, b) => a.depth - b.depth)
  datasets.sort((a, b) => (a.data_type.long_name < b.data_type.long_name ? -1 : 1))

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated at: </b> {times[times.length - 1].toLocaleString()}
        </ListGroupItem>
      ) : null}

      {datasets.map((dataset, index) => {
        let name = dataset.data_type.long_name
        if (dataset.depth) {
          name = name + " @ " + dataset.depth + "m"
        }
        return (
          <TableItem
            key={index}
            platform={platform}
            data_type={dataset.data_type.standard_name}
            name={name}
            unit_system={unit_system}
          />
        )
      })}
    </ListGroup>
  )
}
