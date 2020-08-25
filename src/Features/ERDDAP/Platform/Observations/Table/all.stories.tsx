import React from "react"

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

export const configurable = (args) => <ErddapAllObservationsTable {...args} />
configurable.args = {
  unit_system: UnitSystem.english,
  platform,
}

export const english = () => <ErddapAllObservationsTable platform={platform} unit_system={UnitSystem.english} />

export const metric = () => <ErddapAllObservationsTable platform={platform} unit_system={UnitSystem.metric} />
