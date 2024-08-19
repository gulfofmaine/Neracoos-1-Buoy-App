import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ErddapAllObservationsTable } from "./all"

import { platform } from "stories/platform"

export default {
  component: ErddapAllObservationsTable,
  title: "ERDDAP/ObservationTable/All",
  tags: ["skip-snapshot"],
}

export const english = (args) => <ErddapAllObservationsTable {...args} />
english.args = {
  unitSystem: UnitSystem.english,
  platform,
}

export const metric = (args) => <ErddapAllObservationsTable {...args} />
metric.args = {
  unitSystem: UnitSystem.metric,
  platform,
}
