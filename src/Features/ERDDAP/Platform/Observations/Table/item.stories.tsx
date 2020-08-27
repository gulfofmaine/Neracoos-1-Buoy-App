import React from "react"

import { TableItem } from "./item"
import { UnitSystem } from "Features/Units/types"

import { platform } from "stories/platform"

export default {
  component: TableItem,
  title: "ERDDAP/ObservationTable/Item",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  argTypes: {
    later_then: {
      control: {
        type: "date",
      },
    },
  },
}

export const english = (args) => <TableItem {...args} />
english.args = {
  unit_system: UnitSystem.english,
  later_then: new Date("2/3/2020"),
  data_type: "wind_speed",
  name: "Wind Speed",
  platform,
}

export const metric = (args) => <TableItem {...args} />
metric.args = {
  unit_system: UnitSystem.metric,
  later_then: new Date("2/3/2020"),
  data_type: "wind_speed",
  name: "Wind Speed",
  platform,
}
