import * as React from "react"
import { ListGroupItem } from "reactstrap"

import { round } from "Shared/math"
import { conversion, convertUnit } from "Shared/unitConversion"

import { PlatformFeatureWithDatasets } from "../../../types"

export const itemStyle = { padding: ".5rem", paddingLeft: "1rem" }

interface TableItemProps {
  platform: PlatformFeatureWithDatasets
  data_type: string
  name: string
  prefered_unit?: string
  printed_unit: string
}

export const TableItem: React.SFC<TableItemProps> = ({
  platform,
  data_type,
  name,
  prefered_unit,
  printed_unit
}: TableItemProps) => {
  const data = platform.properties.readings.filter(ts => ts.data_type.standard_name === data_type)

  if (data.length > 0) {
    const selected = data[0]

    return (
      <ListGroupItem style={itemStyle}>
        <b>{name}:</b>{" "}
        {prefered_unit !== undefined
          ? `${conversion(selected.value as number, selected.data_type.units, prefered_unit)} ${printed_unit}`
          : `${round(selected.value as number, 1)} ${printed_unit} ${convertUnit(
              selected.data_type.units,
              selected.value as number
            )}`}
      </ListGroupItem>
    )
  }

  return null
}
