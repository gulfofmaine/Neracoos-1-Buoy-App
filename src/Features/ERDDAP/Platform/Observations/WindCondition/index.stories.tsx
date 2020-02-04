import React from "react"
import { select } from "@storybook/addon-knobs"

import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { WindChart, windStandards } from "./index"

import { platform } from "stories/platform"

export default {
  component: WindChart,
  title: "ERDDAP|ObservedWindCondition"
}

const windDatasets = platform.properties.readings.filter(reading => windStandards.has(reading.data_type.standard_name))

const windTimeSeries: DataTimeSeries[] = windDatasets.map(reading => ({
  name: reading.data_type.long_name,
  timeSeries: reading.readings,
  unit: reading.data_type.units
}))

export const configurable = () => {
  const options = [UnitSystem.imperial, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")

  return <WindChart data={windTimeSeries} barbsPerDay={5} unit_system={unit} />
}

export const imperial = () => <WindChart data={windTimeSeries} barbsPerDay={5} unit_system={UnitSystem.imperial} />

export const metric = () => <WindChart data={windTimeSeries} barbsPerDay={5} unit_system={UnitSystem.metric} />
