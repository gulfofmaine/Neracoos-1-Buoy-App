import React from "react"
import { action } from "@storybook/addon-actions"

import { UnitSelectorBase } from "./index"
import { UnitSystem } from "Features/Units/types"

export default {
  component: UnitSelectorBase,
  title: "Units/UnitSelector",
  includeStories: [],
  argTypes: {
    switchUnits: { action: "switch-units" },
  },
}

export const english = (args) => <UnitSelectorBase {...args} />
english.args = { system: UnitSystem.english }

export const metric = (args) => <UnitSelectorBase {...args} />
metric.args = { system: UnitSystem.metric }
