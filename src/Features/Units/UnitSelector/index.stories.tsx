import React from "react"
import { action } from "@storybook/addon-actions"

import { UnitSelectorBase } from "./index"
import { UnitSystem } from "Features/Units/types"

export default {
  component: UnitSelectorBase,
  title: "Units/UnitSelector",
  includeStories: [],
}

export const english = () => <UnitSelectorBase system={UnitSystem.english} switchUnits={action("switch-units")} />

export const metric = () => <UnitSelectorBase system={UnitSystem.metric} switchUnits={action("switch-units")} />
