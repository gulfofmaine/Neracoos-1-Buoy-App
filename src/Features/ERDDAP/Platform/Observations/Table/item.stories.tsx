import React from "react"
import { date, select } from "@storybook/addon-knobs"

import { TableItem } from "./item"
import { UnitSystem } from "Features/Units/types"

import { platform } from "stories/platform"

export default {
  component: TableItem,
  title: "ERDDAP|ObservationTable/Item",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const Configurable = () => {
  const options = [UnitSystem.english, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")
  const later_then = new Date(date("Display only later then", new Date("2/3/2020")))
  return (
    <TableItem
      platform={platform}
      data_type="wind_speed"
      name="Wind Speed"
      unit_system={unit}
      later_then={later_then}
    />
  )
}
