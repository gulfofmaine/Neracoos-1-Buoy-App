import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { ErddapObservationTable } from "./table"

import { platform } from "stories/platform"

export default {
  component: ErddapObservationTable,
  title: "ERDDAP/ObservationTable/Current",
  tags: ["skip-snapshot"],
  argTypes: {
    unitSelector: { control: { disable: true } },
  },
}

export const english = (args) => <ErddapObservationTable {...args} unitSelector={<i>Unit selector goes here</i>} />
english.args = {
  unitSystem: UnitSystem.english,
  platform,
}

export const metric = (args) => <ErddapObservationTable {...args} unitSelector={<i>Unit selector goes here</i>} />
metric.args = {
  unitSystem: UnitSystem.metric,
  platform,
}
