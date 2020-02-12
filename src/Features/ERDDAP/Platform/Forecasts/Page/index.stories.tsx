import React from "react"
import { select } from "@storybook/addon-knobs"

import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { ForecastChart, forecastToStandardNames } from "./index"

import { platform } from "stories/platform"

export default {
  component: ForecastChart,
  title: "ERDDAP|Forecast"
}

const forecast_type = "wave_height"

const standard_name = forecastToStandardNames[forecast_type]

const wave_datasets = platform.properties.readings.filter(reading => standard_name.has(reading.data_type.standard_name))

let data: DataTimeSeries[] = wave_datasets.map(dataset => ({
  name: dataset.data_type.long_name + " observed",
  timeSeries: dataset.readings,
  unit: dataset.data_type.units
}))

const forecast = platform.properties.forecasts[0]

data.push({
  name: forecast.source.name,
  timeSeries: forecast.readings,
  unit: forecast.source.units
})

export const configurable = () => {
  const options = [UnitSystem.english, UnitSystem.metric]
  const unit = select("Unit System", options, options[0], "unit-system-0")

  return <ForecastChart data={data} unit_system={unit} type={forecast_type} />
}

export const english = () => <ForecastChart data={data} unit_system={UnitSystem.english} type={forecast_type} />

export const metric = () => <ForecastChart data={data} unit_system={UnitSystem.metric} type={forecast_type} />
