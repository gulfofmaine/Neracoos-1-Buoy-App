/**
 * Current observations table component
 */
import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { currentConditionsTimeseries } from "../../../utils/currentConditionsTimeseries"

import { itemStyle, TableItem } from "./item"
import { platformName } from "Features/ERDDAP/utils/platformName"

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unitSystem: UnitSystem
  laterThan: Date
  children?: any
}

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationTable: React.FC<Props> = ({
  platform,
  unitSelector,
  unitSystem,
  laterThan,
  children,
}: Props) => {
  const { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)
  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroup.Item style={itemStyle}>
          <b>Last updated at:</b>{" "}
          {times[times.length - 1].toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            month: "short",
            day: "numeric",
          })}
        </ListGroup.Item>
      ) : (
        <ListGroup.Item style={itemStyle}>There is no recent data from {platformName(platform)}</ListGroup.Item>
      )}
      {allCurrentConditionsTimeseries.map((timeSeries, index) => {
        return <TableItem key={index} timeSeries={timeSeries} platform={platform} unitSystem={unitSystem} />
      })}

      {unitSelector ? (
        <ListGroup.Item style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroup.Item>
      ) : null}
      {children && <ListGroup.Item>{children}</ListGroup.Item>}
    </ListGroup>
  )
}
