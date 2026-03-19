import { platform } from "stories/platform"

import { UnitSystem } from "Features/Units/types"

import { ChartTimeSeriesDisplay, ErddapObservedCondition } from "./index"

export default {
  component: ErddapObservedCondition,
  title: "ERDDAP/ObservedCondition/Configurable",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
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
