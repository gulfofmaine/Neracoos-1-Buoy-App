import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { Superlatives, ShowSuperlatives } from "./index"

import { platforms } from "stories/platforms"

export default {
  component: Superlatives,
  title: "ERDDAP/Superlatives",
}

export const configureable = (args) => <ShowSuperlatives {...args} />
configureable.args = {
  unitSystem: UnitSystem.english,
  platforms,
  laterThan: new Date("2020-09-23T19:49:02.212Z"),
}

export const shouldNotShowOutdatedData = (args) => <ShowSuperlatives {...args} />
shouldNotShowOutdatedData.args = {
  unitSystem: UnitSystem.english,
  platforms,
  laterThan: new Date("2020-09-30T19:49:02.212Z"),
}
