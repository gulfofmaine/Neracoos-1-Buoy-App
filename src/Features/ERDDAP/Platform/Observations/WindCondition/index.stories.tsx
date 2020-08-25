import React from "react"

import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { WindChart, windStandards } from "./index"

import { platform } from "stories/platform"

export default {
  component: WindChart,
  title: "ERDDAP/ObservedWindCondition",
}

const windDatasets = platform.properties.readings.filter((reading) =>
  windStandards.has(reading.data_type.standard_name)
)

const windTimeSeries: DataTimeSeries[] = windDatasets.map((reading) => ({
  name: reading.data_type.long_name,
  timeSeries: reading.readings,
  unit: reading.data_type.units,
}))

export const configurable = (args) => <WindChart {...args} />
configurable.args = {
  unit_system: UnitSystem.english,
  barbsPerDay: 5,
  data: windTimeSeries,
}

export const english = () => <WindChart data={windTimeSeries} barbsPerDay={5} unit_system={UnitSystem.english} />

export const metric = () => <WindChart data={windTimeSeries} barbsPerDay={5} unit_system={UnitSystem.metric} />
