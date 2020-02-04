import React from "react"
import { select } from "@storybook/addon-knobs"

import { TableItem } from "./item"
import { UnitSystem } from "Features/Units/types"

import { platform } from "stories/platform"

export default {
  component: TableItem,
  title: "ERDDAP|ObservationTable/Item"
}

export const Configurable = () => {
  const options = [UnitSystem.imperial, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")
  return <TableItem platform={platform} data_type="wind_speed" name="Wind Speed" unit_system={unit} />
}
