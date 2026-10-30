import * as React from "react"

import { DataCardDisplay } from "./data_card"
import { UnitSystem } from "Features/Units/types"

import { freezeTime } from "stories/chartFixtures"
import { platform } from "stories/platform"

export default {
  component: DataCardDisplay,
  title: "ERDDAP/CurrentConditions/Data Card",
  parameters: {
    storyshots: {
      disable: true,
    },
    screenshot: true,
  },
  beforeEach: () => freezeTime(),
}

export const configurable = (args) => <DataCardDisplay {...args} />
configurable.args = {
  unitSystem: UnitSystem.english,
  platform,
  timeSeries: platform.properties.readings[0],
  readings: platform.properties.readings[0].readings,
}
