"use client"
/**
 * A single row in the current or all conditions tables
 */
import * as React from "react"
import Link from "next/link"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import * as Sentry from "@sentry/react"

import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { urlPartReplacer } from "Shared/urlParams"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

export const itemStyle = { padding: ".5rem", paddingLeft: "1rem", color: "black" }

interface TableItemProps {
  platform: PlatformFeature
  timeSeries: PlatformTimeSeries
  unitSystem: UnitSystem
}

type TableItemDisplayProps = Pick<TableItemProps, "timeSeries" | "unitSystem"> &
  React.HTMLProps<HTMLSpanElement> & {
    name: string
  }

const TableItemDisplay: React.FC<TableItemDisplayProps> = ({
  ref,
  name,
  unitSystem,
  timeSeries,
}: TableItemDisplayProps) => {
  const unit_converter = converter(timeSeries.data_type.standard_name)

  const value = unit_converter.convertTo(timeSeries.value as number, unitSystem)

  return (
    <span ref={ref}>
      <b>{name}:</b> {typeof value === "number" ? round(value as number, 1) : value}{" "}
      {unit_converter.displayName(unitSystem)}
    </span>
  )
}

export const TableItem = ({ timeSeries, unitSystem, platform }: TableItemProps) => {
  const tooltipId = `${timeSeries.data_type.standard_name}-tooltip`

  let name = timeSeries.data_type.long_name
  if (timeSeries.depth && timeSeries.depth > 0) {
    name = `${name} @ ${timeSeries.depth}m`
  }

  const renderToolTip = (props) => {
    if (timeSeries.time) {
      return (
        <Tooltip {...props} id={tooltipId}>
          {new Date(timeSeries.time).toLocaleString()}
        </Tooltip>
      )
    }
    return null
  }

  return (
    <Link
      href={urlPartReplacer(
        urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
        ":type",
        timeSeries.data_type.standard_name,
      )}
      style={itemStyle}
      className="list-group-item"
    >
      <OverlayTrigger overlay={renderToolTip} delay={{ show: 250, hide: 400 }}>
        <span>
          <Sentry.ErrorBoundary fallback={<b>Error displaying {timeSeries.data_type.long_name}</b>} showDialog={false}>
            <TableItemDisplay name={name} unitSystem={unitSystem} timeSeries={timeSeries} />
          </Sentry.ErrorBoundary>
        </span>
      </OverlayTrigger>
    </Link>
  )
}
