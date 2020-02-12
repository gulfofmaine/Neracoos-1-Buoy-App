import React from "react"
import { select } from "@storybook/addon-knobs"

import { UnitSystem } from "Features/Units/types"

import { ObservedConditionsDatasets } from "./index"

import { platform } from "stories/platform"

export default {
  component: ObservedConditionsDatasets,
  title: "ERDDAP|ObservedCondition"
}

const standard_name = "visibility_in_air"
const datasets = platform.properties.readings.filter(reading => reading.data_type.standard_name === standard_name)

export const configurable = () => {
  const options = [UnitSystem.english, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")

  return (
    <ObservedConditionsDatasets
      platform={platform}
      standardName={standard_name}
      unit_system={unit}
      datasets={datasets}
    />
  )
}

export const english = () => (
  <ObservedConditionsDatasets
    platform={platform}
    standardName={standard_name}
    unit_system={UnitSystem.english}
    datasets={datasets}
  />
)

export const metric = () => (
  <ObservedConditionsDatasets
    platform={platform}
    standardName={standard_name}
    unit_system={UnitSystem.metric}
    datasets={datasets}
  />
)
