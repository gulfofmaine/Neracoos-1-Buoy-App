import React from "react"

import { UnitSelectorBase } from "./index"
import { UnitSystem } from "Features/Units/types"

export default {
  component: UnitSelectorBase,
  title: "Units/UnitSelector/configurable",
  argTypes: {
    switchUnits: { action: "switch-units" },
  },
}

export const english = (args) => <UnitSelectorBase {...args} />
english.args = { system: UnitSystem.english }

export const metric = (args) => <UnitSelectorBase {...args} />
metric.args = { system: UnitSystem.metric }
