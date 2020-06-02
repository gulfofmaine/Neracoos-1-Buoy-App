import * as React from "react"
import { Link } from "react-router-dom"

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
}

export const TableItem: React.SFC<TableItemProps> = ({ platform, data_type, name, unit_system }: TableItemProps) => {
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
    const selected = data[0]

    const unit_converter = converter(typeof data_type === "string" ? data_type : data_type[0])

    const value = unit_converter.convertTo(selected.value as number, unit_system)

    return (
      <Link
        to={urlPartReplacer(
          urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
          ":type",
          selected.data_type.standard_name
        )}
        style={itemStyle}
        className="list-group-item"
      >
        <b>{name}:</b> {typeof value === "number" ? round(value as number, 1) : value}{" "}
        {unit_converter.displayName(unit_system)}
      </Link>
    )
  }

  return null
}
