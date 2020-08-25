import React from "react"

import { DataCard } from "./data_card"
import { UnitSystem } from "Features/Units/types"

import { platform } from "stories/platform"

export default {
  component: DataCard,
  title: "ERDDAP/CurrentConditions/Data Card",
}

export const configurable = (args) => <DataCard {...args} />
configurable.args = {
  unit_system: UnitSystem.english,
  data_types: ["significant_wave_height", "max_wave_height"],
  platform,
}
