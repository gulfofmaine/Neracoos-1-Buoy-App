import * as React from "react"
import { Row } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { CurrentConditions } from "./index"
import { wind_datasets, filtered_datasets } from "./test_data"

import { platform } from "stories/platform"

export default {
  component: CurrentConditions,
  title: "ERDDAP/CurrentConditions/Configurable",
}

export const english = (args) => (
  <Row>
    <CurrentConditions {...args} />
  </Row>
)
english.args = {
  unit_system: UnitSystem.english,
  platform,
  wind_datasets,
  filtered_datasets,
}

export const metric = (args) => (
  <Row>
    <CurrentConditions {...args} />
  </Row>
)
metric.args = {
  unit_system: UnitSystem.metric,
  platform,
  wind_datasets,
  filtered_datasets,
}
