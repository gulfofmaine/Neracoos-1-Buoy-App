import * as React from "react"

import { UnitSystem } from "Features/Units/types"
import { ForecastChart } from "./index"
import { data, forecast_type } from "./story-data"

export default {
  component: ForecastChart,
  title: "ERDDAP/Forecast/Configurable",
  tags: ["skip-snapshot"],
}

export const english = (args) => <ForecastChart {...args} />
english.args = {
  unitSystem: UnitSystem.english,
  data,
  type: forecast_type,
}

export const metric = (args) => <ForecastChart {...args} />
metric.args = {
  unitSystem: UnitSystem.metric,
  data,
  type: forecast_type,
}
