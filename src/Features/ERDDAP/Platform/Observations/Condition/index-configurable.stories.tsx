import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ErddapObservedCondition, ChartTimeSeriesDisplay } from "./index"

import { platform } from "stories/platform"

export default {
  component: ErddapObservedCondition,
  title: "ERDDAP/ObservedCondition/Configurable",
  tags: ["skip-snapshot"],
}

const standard_name = "visibility_in_air"
const dataset = platform.properties.readings.find((reading) => reading.data_type.standard_name === standard_name)

export const english = (args) => <ChartTimeSeriesDisplay {...args} />
english.args = {
  standardName: standard_name,
  timeSeries: dataset,
  unitSystem: UnitSystem.english,
  platform,
  dataset: { timeSeries: dataset.readings },
}
