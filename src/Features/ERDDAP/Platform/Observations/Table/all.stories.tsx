import React from "react"
import { select } from "@storybook/addon-knobs"

import { UnitSystem } from "Features/Units/types"

import { ErddapAllObservationsTable } from "./all"

import { platform } from "stories/platform"

export default {
  component: ErddapAllObservationsTable,
  title: "ERDDAP|ObservationTable/All"
}

export const configurable = () => {
  const options = [UnitSystem.imperial, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")
  return <ErddapAllObservationsTable platform={platform} unit_system={unit} />
}

export const imperial = () => <ErddapAllObservationsTable platform={platform} unit_system={UnitSystem.imperial} />

export const metric = () => <ErddapAllObservationsTable platform={platform} unit_system={UnitSystem.metric} />
