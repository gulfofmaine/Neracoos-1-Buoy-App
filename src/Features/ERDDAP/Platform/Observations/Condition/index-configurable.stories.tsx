import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ObservedConditionsDatasets } from "./index"

import { platform } from "stories/platform"

export default {
  component: ObservedConditionsDatasets,
  title: "ERDDAP/ObservedCondition/Configurable",
}

const standard_name = "visibility_in_air"
const datasets = platform.properties.readings.filter((reading) => reading.data_type.standard_name === standard_name)

export const english = (args) => <ObservedConditionsDatasets {...args} />
english.args = {
  unit_system: UnitSystem.english,
  platform,
  standardName: standard_name,
  datasets,
}

export const metric = (args) => <ObservedConditionsDatasets {...args} />
metric.args = {
  unit_system: UnitSystem.metric,
  platform,
  standardName: standard_name,
  datasets,
}
