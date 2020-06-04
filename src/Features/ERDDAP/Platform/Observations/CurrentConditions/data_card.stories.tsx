import React from "react"
import { select } from "@storybook/addon-knobs"

import { DataCard } from "./data_card"
import { UnitSystem } from "Features/Units/types"

import { platform } from "stories/platform"

export default {
  component: DataCard,
  title: "ERDDAP|CurrentConditions/Data Card",
}

export const configurable = () => {
  const options = [UnitSystem.english, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")
  return <DataCard platform={platform} unit_system={unit} data_types={["significant_wave_height", "max_wave_height"]} />
}
