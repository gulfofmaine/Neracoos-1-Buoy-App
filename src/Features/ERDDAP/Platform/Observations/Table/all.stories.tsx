import { platform } from "stories/platform"

import { UnitSystem } from "Features/Units/types"

import { ErddapAllObservationsTable } from "./all"

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
  unitSystem: UnitSystem.english,
  platform,
}

export const metric = (args) => <ErddapAllObservationsTable {...args} />
metric.args = {
  unitSystem: UnitSystem.metric,
  platform,
}
