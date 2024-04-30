"use client"
/**
 * A single row in the current or all conditions tables
 */
import * as React from "react"
import Link from "next/link"
import { Tooltip } from "reactstrap"
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

type TableItemDisplayProps = Pick<TableItemProps, "timeSeries" | "unitSystem"> & {
  name: string
}

const TableItemDisplay: React.FC<TableItemDisplayProps> = ({ name, unitSystem, timeSeries }: TableItemDisplayProps) => {
  const unit_converter = converter(timeSeries.data_type.standard_name)

  const value = unit_converter.convertTo(timeSeries.value as number, unitSystem)

  return (
    <React.Fragment>
      <b>{name}:</b> {typeof value === "number" ? round(value as number, 1) : value}{" "}
      {unit_converter.displayName(unitSystem)}
    </React.Fragment>
  )
}

export const TableItem = ({ timeSeries, unitSystem, platform }: TableItemProps) => {
  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false)
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)
  const tooltipId = `${timeSeries.data_type.standard_name}-tooltip`

  let name = timeSeries.data_type.long_name
  if (timeSeries.depth) {
    name = `${name} @ ${timeSeries.depth}m`
  }

  return (
    <React.Fragment>
      <Link
        href={urlPartReplacer(
          urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
          ":type",
          timeSeries.data_type.standard_name,
        )}
        style={itemStyle}
        className="list-group-item"
      >
        <span
          // href="#"
          id={tooltipId}
        >
          <Sentry.ErrorBoundary fallback={<b>Error displaying {timeSeries.data_type.long_name}</b>} showDialog={false}>
            <TableItemDisplay name={name} unitSystem={unitSystem} timeSeries={timeSeries} />
          </Sentry.ErrorBoundary>
        </span>
      </Link>
      {timeSeries.time ? (
        <Tooltip
          className="condition-tooltip"
          isOpen={tooltipOpen}
          autohide={false}
          target={tooltipId}
          toggle={toggleTooltip}
        >
          {new Date(timeSeries.time).toLocaleString()}
        </Tooltip>
      ) : null}
    </React.Fragment>
  )
}
