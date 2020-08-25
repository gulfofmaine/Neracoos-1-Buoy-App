import React from "react"
import { action } from "@storybook/addon-actions"

import { UnitSelectorBase } from "./index"
import { UnitSystem } from "Features/Units/types"

export default {
  component: UnitSelectorBase,
  title: "Units/UnitSelector/configurable",
}

export const configurable = (args) => <UnitSelectorBase {...args} switchUnits={action("switch-units")} />
configurable.args = { system: UnitSystem.english }

export const english = () => <UnitSelectorBase system={UnitSystem.english} />

export const metric = () => <UnitSelectorBase system={UnitSystem.metric} />
