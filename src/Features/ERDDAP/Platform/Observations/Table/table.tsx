/**
 * Current observations table component
 */
import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { currentConditionsTimeseries } from "../../../utils/currentConditionsTimeseries"

import { itemStyle, TableItem, MapItemPopup } from "./item"
import { platformName } from "Features/ERDDAP/utils/platformName"
import { PlatformTimeSeries } from "Features/ERDDAP/types"

interface LastUpdatedProps {
  label: string
  times: Date[]
  className?: string
  boldKey?: boolean
}

interface LimitedObsProps extends Omit<Props, "laterThan"> {
  allCurrentConditions: PlatformTimeSeries[]
  times: Date[]
}

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unitSystem: UnitSystem
  laterThan: Date
  limit?: number
  children?: any
}

/**
 * Render a key followed by the last time in a series of dates.
 */
const LastUpdated = ({ label, times, className, boldKey }: LastUpdatedProps) => {
  if (times.length <= 0) {
    return null
  }

  const timeVal = times[times.length - 1].toLocaleString(undefined, {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    month: "short",
    day: "numeric",
  })

  return (
    <span className={className}>
      {boldKey ? <strong>{label}</strong> : label}
      {timeVal}
    </span>
  )
}

/**
 * Render a lightweight limited number of observations.
 */
export const LimitedItems: React.FC<LimitedObsProps> = ({
  allCurrentConditions,
  limit,
  unitSystem,
  platform,
  times,
}: LimitedObsProps) => {
  allCurrentConditions = allCurrentConditions.slice(0, limit)
  return (
    <div>
      <LastUpdated label="Updated: " times={times} className="caption d-flex justify-content-start" />
      {allCurrentConditions.map((timeSeries, index) => (
        <MapItemPopup key={index} timeSeries={timeSeries} unitSystem={unitSystem} platform={platform} />
      ))}
    </div>
  )
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
  limit,
  children,
}: Props) => {
  let { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)

  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  if (typeof limit !== "undefined") {
    return (
      <LimitedItems
        allCurrentConditions={allCurrentConditionsTimeseries}
        limit={limit}
        unitSystem={unitSystem}
        platform={platform}
        times={times}
      />
    )
  }

  return (
    <ListGroup className="pt-4" as="ul">
      <ListGroup.Item as="li">
        <LastUpdated label="Last updated at: " times={times} boldKey />
      </ListGroup.Item>
      {allCurrentConditionsTimeseries.map((timeSeries, index) => {
        return <TableItem key={index} timeSeries={timeSeries} platform={platform} unitSystem={unitSystem} />
      })}

      {unitSelector ? (
        <ListGroup.Item style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }} as="li">
          <b>Unit system:</b> {unitSelector}
        </ListGroup.Item>
      ) : null}
      {children && <ListGroup.Item>{children}</ListGroup.Item>}
    </ListGroup>
  )
}
