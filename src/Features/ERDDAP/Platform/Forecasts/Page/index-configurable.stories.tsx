import React from "react"

import { UnitSystem } from "Features/Units/types"
import { ForecastChart } from "./index"
import { data, forecast_type } from "./story-data"

export default {
  component: ForecastChart,
  title: "ERDDAP/Forecast/Configurable",
}

export const english = (args) => <ForecastChart {...args} />
english.args = {
  unit_system: UnitSystem.english,
  data,
  type: forecast_type,
}

export const metric = (args) => <ForecastChart {...args} />
metric.args = {
  unit_system: UnitSystem.metric,
  data,
  type: forecast_type,
}
