import { platform } from "stories/platform"

import { UnitSystem } from "Features/Units/types"

import { DataCardDisplay } from "./data_card"

export default {
  component: DataCardDisplay,
  title: "ERDDAP/CurrentConditions/Data Card",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const configurable = (args) => <DataCardDisplay {...args} />
configurable.args = {
  unitSystem: UnitSystem.english,
  platform,
  timeSeries: platform.properties.readings[0],
  readings: platform.properties.readings[0].readings,
}
