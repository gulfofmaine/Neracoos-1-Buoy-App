import * as React from "react"

import { UnitSystem } from "Features/Units/types"
import { freezeTime, multipleSeries, sineSeries } from "stories/chartFixtures"

import { LargeTimeSeriesChart } from "./LargeTimeSeries"
import { MultipleLargeTimeSeriesChart } from "./MultipleLargeTimeSeries"
import { MultipleLargeTimeSeriesChartCurrent } from "./MultipleLargeTimeSeriesCurrent"
import { SmallTimeSeriesChart } from "./SmallTimeSeries"

export default {
  title: "Components/Charts/TimeSeries",
  parameters: {
    storyshots: { disable: true },
    screenshot: true,
  },
  beforeEach: () => freezeTime(),
}

const observed = sineSeries("Observed", { amplitude: 2, mean: 5 })

export const Small = () => (
  <SmallTimeSeriesChart
    name="Observed"
    unit="m"
    softMin={0}
    softMax={10}
    unitSystem={UnitSystem.metric}
    data_type="sea_water_temperature"
    timeSeries={observed.timeSeries}
  />
)

export const Large = () => (
  <LargeTimeSeriesChart
    name="Observed"
    softMin={0}
    softMax={10}
    unitSystem={UnitSystem.metric}
    data_type="sea_water_temperature"
    timeSeries={observed.timeSeries}
    startTime={new Date("2020-09-29T12:00:00.000Z")}
    endTime={new Date("2020-10-02T12:00:00.000Z")}
  />
)

export const MultipleSpline = () => <MultipleLargeTimeSeriesChart data={multipleSeries} unit="m" scatter={false} />

export const MultipleScatter = () => <MultipleLargeTimeSeriesChart data={multipleSeries} unit="m" scatter={true} />

/** The "now" line is frozen to FROZEN_NOW */
export const MultipleCurrentSpline = () => (
  <MultipleLargeTimeSeriesChartCurrent data={multipleSeries} unit="m" scatter={false} />
)

export const MultipleCurrentScatter = () => (
  <MultipleLargeTimeSeriesChartCurrent data={multipleSeries} unit="m" scatter={true} />
)
