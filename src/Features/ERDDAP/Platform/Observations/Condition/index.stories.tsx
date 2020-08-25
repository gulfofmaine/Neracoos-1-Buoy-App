import React from "react"

import { UnitSystem } from "Features/Units/types"

import { ObservedConditionsDatasets } from "./index"

import { platform } from "stories/platform"

export default {
  component: ObservedConditionsDatasets,
  title: 'ERDDAP/ObservedCondition',
  includeStories: [],
}

const standard_name = "visibility_in_air"
const datasets = platform.properties.readings.filter((reading) => reading.data_type.standard_name === standard_name)

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
