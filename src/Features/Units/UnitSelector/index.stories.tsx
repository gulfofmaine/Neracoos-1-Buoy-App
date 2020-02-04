import React from "react"
import { select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { UnitSelectorBase } from "./index"
import { UnitSystem } from "Features/Units/types"

export default {
  component: UnitSelectorBase,
  title: "Units|UnitSelector"
}

export const configurable = () => {
  const options = [UnitSystem.imperial, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")

  return <UnitSelectorBase system={unit} switchUnits={action("switch-units")} />
}
