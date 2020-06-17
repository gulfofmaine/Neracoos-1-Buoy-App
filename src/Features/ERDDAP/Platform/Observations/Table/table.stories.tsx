import React from "react"
import { select } from "@storybook/addon-knobs"

import { UnitSystem } from "Features/Units/types"

import { ErddapObservationTable } from "./table"

import { platform } from "stories/platform"

export default {
  component: ErddapObservationTable,
  title: "ERDDAP|ObservationTable/Current",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const configurable = () => {
  const options = [UnitSystem.english, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")
  return <ErddapObservationTable platform={platform} unit_system={unit} unitSelector={<i>Unit selector goes here</i>} />
}

export const english = () => {
  return <ErddapObservationTable platform={platform} unit_system={UnitSystem.english} />
}

export const metric = () => {
  return <ErddapObservationTable platform={platform} unit_system={UnitSystem.metric} />
}
