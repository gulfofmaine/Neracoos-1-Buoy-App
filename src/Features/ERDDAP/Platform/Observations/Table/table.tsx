/**
 * Current observations table component
 */
import * as React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { conditions } from "../CurrentConditions/conditions"

import { itemStyle, TableItem } from "./item"

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unit_system: UnitSystem
}

const timeDelta = 60 * 60 * 1000

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationTable: React.FunctionComponent<Props> = ({ platform, unitSelector, unit_system }) => {
  const times = platform.properties.readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  /** Sixty minute window for updated times */
  const timeWindow = times.length > 0 ? new Date(times[times.length - 1].getTime() - timeDelta) : undefined

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated around:</b>{" "}
          {times[times.length - 1].toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            // month: "short",
            // day: "numeric",
          })}
        </ListGroupItem>
      ) : null}

      <TableItem
        platform={platform}
        data_type={conditions.windSpeed}
        name="Wind Speed"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type={conditions.windGust}
        name="Wind Gusts"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type={conditions.windDirection}
        name="Wind Direction"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type={conditions.waveHeight}
        name="Wave Height"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type={conditions.wavePeriod}
        name="Wave Period"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type={conditions.waveDirection}
        name="Wave Direction"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type={conditions.airTemp}
        name="Air Temperature"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type={conditions.waterTemp}
        name="Water Temperature"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type={conditions.visibility}
        name="Visibility"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      {unitSelector ? (
        <ListGroupItem style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroupItem>
      ) : null}
    </ListGroup>
  )
}
