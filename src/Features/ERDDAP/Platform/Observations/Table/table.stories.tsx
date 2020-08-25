import React from "react"

import { UnitSystem } from "Features/Units/types"

import { ErddapObservationTable } from "./table"

import { platform } from "stories/platform"

export default {
  component: ErddapObservationTable,
  title: "ERDDAP/ObservationTable/Current",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
}

export const configurable = (args) => <ErddapObservationTable {...args} unitSelector={<i>Unit selector goes here</i>} />
configurable.args = {
  unit_system: UnitSystem.english,
  platform,
}
configurable.argTypes = {
  unitSelector: { control: { disable: true } },
}

export const english = () => {
  return <ErddapObservationTable platform={platform} unit_system={UnitSystem.english} />
}

export const metric = () => {
  return <ErddapObservationTable platform={platform} unit_system={UnitSystem.metric} />
}
