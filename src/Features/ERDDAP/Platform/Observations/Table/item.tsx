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
  readings: PlatformTimeSeries[]
  data_type: string | string[]
  name: string
  unitSystem: UnitSystem
  /** Show only data later than the selected date */
  later_then?: Date
  /** The readings have already been filtered, show only the filtered value */
  exact?: boolean
}

/**
 * A single item in the current or all conditions tables
 */
export const TableItem: React.FunctionComponent<TableItemProps> = ({
  platform,
  readings,
  data_type,
  name,
  unitSystem,
  later_then,
  exact = false,
}: TableItemProps) => {
  const [tooltipOpen, setTooltipOpen] = React.useState<boolean>(false)

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)

  let data: PlatformTimeSeries[] = []

  // If there is only one reading specified display that, otherwise filter for the most appropriate one
  if (readings.length === 1 && exact) {
    data = readings
  } else {
    let data_type_list: string[]

    if (typeof data_type === "string") {
      data_type_list = [data_type]
    } else {
      data_type_list = data_type
    }

    data_type_list.forEach((data_type) => {
      readings
        .filter((ts) => data_type === ts.data_type.standard_name && (ts.depth ? ts.depth < 2 : true))
        .forEach((ts) => data.push(ts))
    })
  }

  if (data.length > 0) {
    if (later_then) {
      data = data.filter((ts) => (ts.time ? later_then < new Date(ts.time) : false))
    }

    if (data.length === 0) {
      return <div className="list-group-item">No {name} data received in the last hour</div>
    }

    const selected = data[0]

    const tooltipId = `${selected.data_type.standard_name}-tooltip`

    return (
      <React.Fragment>
        <Link
          href={urlPartReplacer(
            urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
            ":type",
            selected.data_type.standard_name,
          )}
          style={itemStyle}
          className="list-group-item"
        >
          <span
            // href="#"
            id={tooltipId}
          >
            <Sentry.ErrorBoundary fallback={<b>Error displaying {name}</b>} showDialog={false}>
              <TableItemDisplay name={name} unitSystem={unitSystem} selected={selected} />
            </Sentry.ErrorBoundary>
          </span>
        </Link>
        {selected.time ? (
          <Tooltip
            className="condition-tooltip"
            isOpen={tooltipOpen}
            autohide={false}
            target={tooltipId}
            toggle={toggleTooltip}
          >
            {new Date(selected.time).toLocaleString()}
          </Tooltip>
        ) : null}
      </React.Fragment>
    )
  }

  return null
}

type TableItemDisplayProps = Pick<TableItemProps, "name" | "unitSystem"> & {
  selected: PlatformTimeSeries
}

const TableItemDisplay: React.FC<TableItemDisplayProps> = ({ name, unitSystem, selected }: TableItemDisplayProps) => {
  const unit_converter = converter(selected.data_type.standard_name)

  const value = unit_converter.convertTo(selected.value as number, unitSystem)

  return (
    <React.Fragment>
      <b>{name}:</b> {typeof value === "number" ? round(value as number, 1) : value}{" "}
      {unit_converter.displayName(unitSystem)}
    </React.Fragment>
  )
}
