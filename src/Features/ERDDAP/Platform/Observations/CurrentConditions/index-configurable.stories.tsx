import React from "react"
import { Row } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { CurrentConditions, prefferedDataTypes, prefferedDataTypesList, windDataTypes } from "./index"

import { platform } from "stories/platform"

export default {
  component: CurrentConditions,
  title: "ERDDAP/CurrentConditions/Configurable",
}

const wind_datasets = platform.properties.readings.filter((reading) =>
  windDataTypes.has(reading.data_type.standard_name)
)

const filtered_datasets = platform.properties.readings.filter(
  (reading) => prefferedDataTypes.has(reading.data_type.standard_name) && reading.depth < 2
)
filtered_datasets.sort(
  (a, b) =>
    prefferedDataTypesList.indexOf(a.data_type.standard_name) -
    prefferedDataTypesList.indexOf(b.data_type.standard_name)
)

export const configurable = (args) => (
  <Row>
    <CurrentConditions {...args} />
  </Row>
)

configurable.args = {
  unit_system: UnitSystem.english,
  platform,
  wind_datasets,
  filtered_datasets,
}

export const english = () => (
  <Row>
    <CurrentConditions
      unit_system={UnitSystem.english}
      platform={platform}
      wind_datasets={wind_datasets}
      filtered_datasets={filtered_datasets}
    />
  </Row>
)

export const metric = () => (
  <Row>
    <CurrentConditions
      unit_system={UnitSystem.metric}
      platform={platform}
      wind_datasets={wind_datasets}
      filtered_datasets={filtered_datasets}
    />
  </Row>
)
