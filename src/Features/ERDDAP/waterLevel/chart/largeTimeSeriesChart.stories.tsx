import * as React from "react"

import { UnitSystem } from "Features/Units/types"
import { freezeTime, sineSeries } from "stories/chartFixtures"

import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"

export default {
  title: "ERDDAP/WaterLevel/LargeTimeSeriesWaterLevelChart",
  component: LargeTimeSeriesWaterLevelChart,
  parameters: {
    storyshots: { disable: true },
    screenshot: true,
  },
  beforeEach: () => freezeTime(),
}

const observed = sineSeries("Observed", {
  start: new Date("2020-09-29T12:00:00.000Z"),
  hours: 48,
  mean: 2.2,
  amplitude: 1.2,
})
const predicted = sineSeries("Predicted", {
  start: new Date("2020-09-29T12:00:00.000Z"),
  hours: 96,
  mean: 2.2,
  amplitude: 1.1,
  phase: 0.2,
})
const forecast = sineSeries("Forecast", {
  start: new Date("2020-10-01T12:00:00.000Z"),
  hours: 48,
  mean: 2.3,
  amplitude: 1.4,
  phase: 0.4,
})

const floodThresholds = {
  Action: { minValue: 2.0, maxValue: 2.5 },
  Minor: { minValue: 2.5, maxValue: 3.0 },
  Moderate: { minValue: 3.0, maxValue: 3.5 },
  Major: { minValue: 3.5, maxValue: 4.5 },
}

const args = {
  name: "Water level",
  data_type: "tidal_sea_surface_height_above_mean_lower_low_water",
  unitSystem: UnitSystem.metric,
  softMin: 0,
  softMax: 5,
  datumOffset: 0,
  startTime: new Date("2020-09-29T12:00:00.000Z"),
  endTime: new Date("2020-10-03T12:00:00.000Z"),
  timeSeries: observed.timeSeries,
}

export const WithFloodThresholdsPredictedAndForecast = () => (
  <LargeTimeSeriesWaterLevelChart
    {...args}
    floodThresholds={floodThresholds}
    predictedDataset={predicted}
    forecastedTidesDatasets={[forecast]}
  />
)

export const ObservedOnly = () => (
  <LargeTimeSeriesWaterLevelChart
    {...args}
    floodThresholds={undefined as any}
    predictedDataset={null}
    forecastedTidesDatasets={null}
  />
)
