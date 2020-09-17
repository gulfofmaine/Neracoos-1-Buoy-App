import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ErddapAllObservationsTable } from "./all"

import { platform } from "stories/platform"

export default {
  component: ErddapAllObservationsTable,
  title: "ERDDAP/ObservationTable/All",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const english = (args) => <ErddapAllObservationsTable {...args} />
english.args = {
  unit_system: UnitSystem.english,
  platform,
}

export const metric = (args) => <ErddapAllObservationsTable {...args} />
metric.args = {
  unit_system: UnitSystem.metric,
  platform,
}
