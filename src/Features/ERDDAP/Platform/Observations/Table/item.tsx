import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Tooltip } from "reactstrap"

import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { urlPartReplacer } from "Shared/urlParams"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { PlatformFeatureWithDatasets, PlatformDataset } from "../../../types"

export const itemStyle = { padding: ".5rem", paddingLeft: "1rem", color: "black" }

interface TableItemProps {
  platform: PlatformFeatureWithDatasets
  data_type: string | string[]
  name: string
  unit_system: UnitSystem
  /** Show only data later than the selected date */
  later_then?: Date
}

export const TableItem: React.SFC<TableItemProps> = ({
  platform,
  data_type,
  name,
  unit_system,
  later_then,
}: TableItemProps) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)

  let data_type_list: string[]

  if (typeof data_type === "string") {
    data_type_list = [data_type]
  } else {
    data_type_list = data_type
  }

  let data: PlatformDataset[] = []

  data_type_list.forEach((data_type) => {
    platform.properties.readings.filter((ts) => data_type === ts.data_type.standard_name).forEach((ts) => data.push(ts))
  })

  if (data.length > 0) {
    if (later_then) {
      data = data.filter((ts) => (ts.time ? later_then < new Date(ts.time) : false))
    }

    if (data.length === 0) {
      return <div className="list-group-item">No data avaliable for {name} recently</div>
    }

    const selected = data[0]

    const unit_converter = converter(typeof data_type === "string" ? data_type : data_type[0])

    const value = unit_converter.convertTo(selected.value as number, unit_system)

    const tooltipId = `${selected.data_type.standard_name}-tooltip`

    return (
      <React.Fragment>
        <Link
          to={urlPartReplacer(
            urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
            ":type",
            selected.data_type.standard_name
          )}
          style={itemStyle}
          className="list-group-item"
        >
          <span
            // href="#"
            id={tooltipId}
          >
            <b>{name}:</b> {typeof value === "number" ? round(value as number, 1) : value}{" "}
            {unit_converter.displayName(unit_system)}
          </span>
        </Link>
        {selected.time ? (
          <Tooltip
            className="condition-tooltip"
            isOpen={tooltipOpen}
            // isOpen={true}
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
