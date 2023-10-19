import { platform } from "stories/platform"

import { forecastToStandardNames } from "./index"

export const forecast_type = "wave_height"

export const standard_name = forecastToStandardNames[forecast_type]

export const wave_datasets = platform.properties.readings.filter((reading) =>
  standard_name.has(reading.data_type.standard_name),
)

export let data = wave_datasets.map((dataset) => ({
  name: dataset.data_type.long_name + " observed",
  timeSeries: dataset.readings,
  unit: dataset.data_type.units,
}))

export const forecast = platform.properties.forecasts[0]

data.push({
  name: forecast.source.name,
  timeSeries: forecast.readings,
  unit: forecast.source.units,
})
