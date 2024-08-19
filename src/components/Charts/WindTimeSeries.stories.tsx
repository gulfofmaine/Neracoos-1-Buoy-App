import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { WindTimeSeriesChart } from "./WindTimeSeries"

export default {
  component: WindTimeSeriesChart,
  title: "Components/Charts/WindTimeSeriesChart",
  tags: ["skip-snapshot"],
}

/** Must be manually tested. Does not snapshot correctly */
export const doesntExplodeWithNegativeDates = (args) => <WindTimeSeriesChart {...args} />

export const scaleShouldReach40 = (args) => <WindTimeSeriesChart {...args} />

doesntExplodeWithNegativeDates.args = {
  days: 1,
  barbsPerDay: 10,
  data: [
    {
      name: "apd",
      timeSeries: [
        {
          reading: 6.9,
          time: new Date("2020-10-01T02:50:00.000Z"),
        },
        {
          reading: 6.8,
          time: new Date("2020-10-01T03:50:00.000Z"),
        },
        {
          reading: 6.8,
          time: new Date("2020-10-01T04:50:00.000Z"),
        },
        {
          reading: 6.9,
          time: new Date("2020-10-01T05:50:00.000Z"),
        },
        {
          reading: 6.7,
          time: new Date("2020-10-01T06:50:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T07:50:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T08:50:00.000Z"),
        },
        {
          reading: 6.8,
          time: new Date("2020-10-01T09:50:00.000Z"),
        },
        {
          reading: 6.9,
          time: new Date("2020-10-01T10:50:00.000Z"),
        },
        {
          reading: 6.9,
          time: new Date("2020-10-01T11:50:00.000Z"),
        },
        {
          reading: 6.8,
          time: new Date("2020-10-01T12:50:00.000Z"),
        },
        {
          reading: 6.7,
          time: new Date("2020-10-01T13:50:00.000Z"),
        },
      ],
      unit: "s",
    },
    {
      name: "gst",
      timeSeries: [
        {
          reading: 6,
          time: new Date("2020-10-01T02:50:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T03:00:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T03:10:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T03:20:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T03:30:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T03:40:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T03:50:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T04:00:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T04:10:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T04:20:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T04:40:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T04:50:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T05:00:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T05:10:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T05:20:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T05:40:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T05:50:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T06:00:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T06:10:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T06:20:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T06:30:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T06:50:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T07:00:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T07:10:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T07:20:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T07:30:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T07:50:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T08:00:00.000Z"),
        },
        {
          reading: 8,
          time: new Date("2020-10-01T08:10:00.000Z"),
        },
        {
          reading: 7,
          time: new Date("2020-10-01T08:20:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T08:40:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T08:50:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T09:00:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T09:10:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T09:20:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T09:30:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T09:40:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T09:50:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T10:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T10:10:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T10:20:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T10:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T10:50:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T11:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T11:10:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T11:20:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T11:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T11:50:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T12:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T12:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T12:20:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T12:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T12:50:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T13:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T13:10:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T13:20:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T13:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T13:50:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T14:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T14:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T14:20:00.000Z"),
        },
      ],
      unit: "m s-1",
    },
    {
      name: "wd",
      timeSeries: [
        {
          reading: 250,
          time: new Date("2020-10-01T02:50:00.000Z"),
        },
        {
          reading: 240,
          time: new Date("2020-10-01T03:00:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T03:10:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T03:20:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T03:30:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T03:40:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T03:50:00.000Z"),
        },
        {
          reading: 240,
          time: new Date("2020-10-01T04:00:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T04:10:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T04:20:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T04:40:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T04:50:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T05:00:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T05:10:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T05:20:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T05:40:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T05:50:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T06:00:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T06:10:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T06:20:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T06:30:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T06:50:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T07:00:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T07:10:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T07:20:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T07:30:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T07:50:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T08:00:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T08:10:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T08:20:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T08:40:00.000Z"),
        },
        {
          reading: 270,
          time: new Date("2020-10-01T08:50:00.000Z"),
        },
        {
          reading: 260,
          time: new Date("2020-10-01T09:00:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T09:10:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T09:20:00.000Z"),
        },
        {
          reading: 250,
          time: new Date("2020-10-01T09:30:00.000Z"),
        },
        {
          reading: 240,
          time: new Date("2020-10-01T09:40:00.000Z"),
        },
        {
          reading: 210,
          time: new Date("2020-10-01T09:50:00.000Z"),
        },
        {
          reading: 200,
          time: new Date("2020-10-01T10:00:00.000Z"),
        },
        {
          reading: 190,
          time: new Date("2020-10-01T10:10:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T10:20:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T10:40:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T10:50:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T11:00:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T11:10:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T11:20:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T11:40:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T11:50:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T12:00:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T12:10:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T12:20:00.000Z"),
        },
        {
          reading: 180,
          time: new Date("2020-10-01T12:40:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T12:50:00.000Z"),
        },
        {
          reading: 160,
          time: new Date("2020-10-01T13:00:00.000Z"),
        },
        {
          reading: 160,
          time: new Date("2020-10-01T13:10:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T13:20:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T13:40:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T13:50:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T14:00:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T14:10:00.000Z"),
        },
        {
          reading: 170,
          time: new Date("2020-10-01T14:20:00.000Z"),
        },
      ],
      unit: "degrees_true",
    },
    {
      name: "wspd",
      timeSeries: [
        {
          reading: 4,
          time: new Date("2020-10-01T02:50:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T03:00:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T03:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T03:20:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T03:30:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T03:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T03:50:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T04:00:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T04:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T04:20:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T04:40:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T04:50:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T05:00:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T05:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T05:20:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T05:40:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T05:50:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T06:00:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T06:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T06:20:00.000Z"),
        },
        {
          reading: 6,
          time: new Date("2020-10-01T06:30:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T06:50:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T07:00:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T07:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T07:20:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T07:30:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T07:50:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T08:00:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T08:10:00.000Z"),
        },
        {
          reading: 5,
          time: new Date("2020-10-01T08:20:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T08:40:00.000Z"),
        },
        {
          reading: 4,
          time: new Date("2020-10-01T08:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T09:00:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T09:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T09:20:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T09:30:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T09:40:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T09:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T10:00:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T10:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T10:20:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T10:40:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T10:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T11:00:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T11:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T11:20:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T11:40:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T11:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T12:00:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T12:10:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T12:20:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T12:40:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T12:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T13:00:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T13:10:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T13:20:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T13:40:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T13:50:00.000Z"),
        },
        {
          reading: 3,
          time: new Date("2020-10-01T14:00:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T14:10:00.000Z"),
        },
        {
          reading: 2,
          time: new Date("2020-10-01T14:20:00.000Z"),
        },
      ],
      unit: "m s-1",
    },
    {
      name: "wvht",
      timeSeries: [
        {
          reading: 2.6,
          time: new Date("2020-10-01T02:50:00.000Z"),
        },
        {
          reading: 2.6,
          time: new Date("2020-10-01T03:50:00.000Z"),
        },
        {
          reading: 2.7,
          time: new Date("2020-10-01T04:50:00.000Z"),
        },
        {
          reading: 2.7,
          time: new Date("2020-10-01T05:50:00.000Z"),
        },
        {
          reading: 2.4,
          time: new Date("2020-10-01T06:50:00.000Z"),
        },
        {
          reading: 2.7,
          time: new Date("2020-10-01T07:50:00.000Z"),
        },
        {
          reading: 2.7,
          time: new Date("2020-10-01T08:50:00.000Z"),
        },
        {
          reading: 2.6,
          time: new Date("2020-10-01T09:50:00.000Z"),
        },
        {
          reading: 2.6,
          time: new Date("2020-10-01T10:50:00.000Z"),
        },
        {
          reading: 2.7,
          time: new Date("2020-10-01T11:50:00.000Z"),
        },
        {
          reading: 2.5,
          time: new Date("2020-10-01T12:50:00.000Z"),
        },
        {
          reading: 2.3,
          time: new Date("2020-10-01T13:50:00.000Z"),
        },
      ],
      unit: "m",
    },
  ],
  height: 150,
  speed: {
    name: "Wind Speed",
    timeSeries: [
      {
        reading: 4,
        time: new Date("2020-10-01T02:50:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T03:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T03:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T03:20:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T03:30:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T03:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T03:50:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T04:00:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T04:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T04:20:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T04:40:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T04:50:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T05:00:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T05:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T05:20:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T05:40:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T05:50:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T06:00:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T06:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T06:20:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T06:30:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T06:50:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T07:00:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T07:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T07:20:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T07:30:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T07:50:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T08:00:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T08:10:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T08:20:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T08:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T08:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T09:00:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T09:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T09:20:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T09:30:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T09:40:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T09:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T10:00:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T10:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T10:20:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T10:40:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T10:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T11:00:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T11:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T11:20:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T11:40:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T11:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T12:00:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T12:10:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T12:20:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T12:40:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T12:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T13:00:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T13:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T13:20:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T13:40:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T13:50:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T14:00:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T14:10:00.000Z"),
      },
      {
        reading: 2,
        time: new Date("2020-10-01T14:20:00.000Z"),
      },
    ],
    unit: "m s-1",
  },
  gust: {
    name: "Wind Gust",
    timeSeries: [
      {
        reading: 6,
        time: new Date("2020-10-01T02:50:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T03:00:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T03:10:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T03:20:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T03:30:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T03:40:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T03:50:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T04:00:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T04:10:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T04:20:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T04:40:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T04:50:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T05:00:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T05:10:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T05:20:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T05:40:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T05:50:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T06:00:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T06:10:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T06:20:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T06:30:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T06:50:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T07:00:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T07:10:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T07:20:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T07:30:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T07:50:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T08:00:00.000Z"),
      },
      {
        reading: 8,
        time: new Date("2020-10-01T08:10:00.000Z"),
      },
      {
        reading: 7,
        time: new Date("2020-10-01T08:20:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T08:40:00.000Z"),
      },
      {
        reading: 6,
        time: new Date("2020-10-01T08:50:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T09:00:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T09:10:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T09:20:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T09:30:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T09:40:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T09:50:00.000Z"),
      },
      {
        reading: 5,
        time: new Date("2020-10-01T10:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T10:10:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T10:20:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T10:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T10:50:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T11:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T11:10:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T11:20:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T11:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T11:50:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T12:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T12:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T12:20:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T12:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T12:50:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T13:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T13:10:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T13:20:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T13:40:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T13:50:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T14:00:00.000Z"),
      },
      {
        reading: 4,
        time: new Date("2020-10-01T14:10:00.000Z"),
      },
      {
        reading: 3,
        time: new Date("2020-10-01T14:20:00.000Z"),
      },
    ],
    unit: "m s-1",
  },
  direction: {
    name: "Wind Direction",
    timeSeries: [
      {
        reading: 250,
        time: new Date("2020-10-01T02:50:00.000Z"),
      },
      {
        reading: 240,
        time: new Date("2020-10-01T03:00:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T03:10:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T03:20:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T03:30:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T03:40:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T03:50:00.000Z"),
      },
      {
        reading: 240,
        time: new Date("2020-10-01T04:00:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T04:10:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T04:20:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T04:40:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T04:50:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T05:00:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T05:10:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T05:20:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T05:40:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T05:50:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T06:00:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T06:10:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T06:20:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T06:30:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T06:50:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T07:00:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T07:10:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T07:20:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T07:30:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T07:50:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T08:00:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T08:10:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T08:20:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T08:40:00.000Z"),
      },
      {
        reading: 270,
        time: new Date("2020-10-01T08:50:00.000Z"),
      },
      {
        reading: 260,
        time: new Date("2020-10-01T09:00:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T09:10:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T09:20:00.000Z"),
      },
      {
        reading: 250,
        time: new Date("2020-10-01T09:30:00.000Z"),
      },
      {
        reading: 240,
        time: new Date("2020-10-01T09:40:00.000Z"),
      },
      {
        reading: 210,
        time: new Date("2020-10-01T09:50:00.000Z"),
      },
      {
        reading: 200,
        time: new Date("2020-10-01T10:00:00.000Z"),
      },
      {
        reading: 190,
        time: new Date("2020-10-01T10:10:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T10:20:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T10:40:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T10:50:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T11:00:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T11:10:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T11:20:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T11:40:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T11:50:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T12:00:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T12:10:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T12:20:00.000Z"),
      },
      {
        reading: 180,
        time: new Date("2020-10-01T12:40:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T12:50:00.000Z"),
      },
      {
        reading: 160,
        time: new Date("2020-10-01T13:00:00.000Z"),
      },
      {
        reading: 160,
        time: new Date("2020-10-01T13:10:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T13:20:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T13:40:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T13:50:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T14:00:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T14:10:00.000Z"),
      },
      {
        reading: 170,
        time: new Date("2020-10-01T14:20:00.000Z"),
      },
    ],
    unit: "degrees_true",
  },
  unitSystem: UnitSystem.english,
  startTime: new Date("Wed Sep 30 2020 22:50:00 GMT-0400 (Eastern Daylight Time)"),
  endTime: new Date("Thu Oct 01 2020 10:20:00 GMT-0400 (Eastern Daylight Time)"),
}

scaleShouldReach40.args = {
  unitSystem: UnitSystem.english,
  speed: {
    name: "Wind Speed",
    timeSeries: [
      {
        reading: 6.073,
        time: "2021-04-02T19:30:00.000Z",
      },
      {
        reading: 6.683,
        time: "2021-04-02T19:40:00.000Z",
      },
      {
        reading: 6.493,
        time: "2021-04-02T19:50:00.000Z",
      },
      {
        reading: 6.773,
        time: "2021-04-02T20:00:00.000Z",
      },
      {
        reading: 6.44,
        time: "2021-04-02T20:10:00.000Z",
      },
      {
        reading: 6.423,
        time: "2021-04-02T20:20:00.000Z",
      },
      {
        reading: 6.275,
        time: "2021-04-02T20:30:00.000Z",
      },
      {
        reading: 6.118,
        time: "2021-04-02T20:40:00.000Z",
      },
      {
        reading: 6.176,
        time: "2021-04-02T20:50:00.000Z",
      },
      {
        reading: 6.355,
        time: "2021-04-02T21:00:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-02T21:10:00.000Z",
      },
      {
        reading: 6.481,
        time: "2021-04-02T21:20:00.000Z",
      },
      {
        reading: 6.489,
        time: "2021-04-02T21:30:00.000Z",
      },
      {
        reading: 6.676,
        time: "2021-04-02T21:40:00.000Z",
      },
      {
        reading: 7.174,
        time: "2021-04-02T21:50:00.000Z",
      },
      {
        reading: 7.236,
        time: "2021-04-02T22:00:00.000Z",
      },
      {
        reading: 6.947,
        time: "2021-04-02T22:10:00.000Z",
      },
      {
        reading: 6.633,
        time: "2021-04-02T22:20:00.000Z",
      },
      {
        reading: 6.813,
        time: "2021-04-02T22:30:00.000Z",
      },
      {
        reading: 6.903,
        time: "2021-04-02T22:40:00.000Z",
      },
      {
        reading: 6.375,
        time: "2021-04-02T22:50:00.000Z",
      },
      {
        reading: 6.109,
        time: "2021-04-02T23:00:00.000Z",
      },
      {
        reading: 5.498,
        time: "2021-04-02T23:10:00.000Z",
      },
      {
        reading: 5.266,
        time: "2021-04-02T23:20:00.000Z",
      },
      {
        reading: 5.33,
        time: "2021-04-02T23:30:00.000Z",
      },
      {
        reading: 4.464,
        time: "2021-04-02T23:40:00.000Z",
      },
      {
        reading: 4.029,
        time: "2021-04-02T23:50:00.000Z",
      },
      {
        reading: 6.771,
        time: "2021-04-03T00:00:00.000Z",
      },
      {
        reading: 9.43,
        time: "2021-04-03T00:10:00.000Z",
      },
      {
        reading: 8.46,
        time: "2021-04-03T00:20:00.000Z",
      },
      {
        reading: 9.44,
        time: "2021-04-03T00:30:00.000Z",
      },
      {
        reading: 9.55,
        time: "2021-04-03T00:40:00.000Z",
      },
      {
        reading: 9.31,
        time: "2021-04-03T00:50:00.000Z",
      },
      {
        reading: 9.16,
        time: "2021-04-03T01:00:00.000Z",
      },
      {
        reading: 8.65,
        time: "2021-04-03T01:10:00.000Z",
      },
      {
        reading: 8.2,
        time: "2021-04-03T01:20:00.000Z",
      },
      {
        reading: 9.17,
        time: "2021-04-03T01:30:00.000Z",
      },
      {
        reading: 8.39,
        time: "2021-04-03T01:40:00.000Z",
      },
      {
        reading: 8.04,
        time: "2021-04-03T01:50:00.000Z",
      },
      {
        reading: 8.18,
        time: "2021-04-03T02:00:00.000Z",
      },
      {
        reading: 8.47,
        time: "2021-04-03T02:10:00.000Z",
      },
      {
        reading: 8.18,
        time: "2021-04-03T02:20:00.000Z",
      },
      {
        reading: 9.01,
        time: "2021-04-03T02:30:00.000Z",
      },
      {
        reading: 8.08,
        time: "2021-04-03T02:40:00.000Z",
      },
      {
        reading: 7.667,
        time: "2021-04-03T02:50:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-03T03:00:00.000Z",
      },
      {
        reading: 7.912,
        time: "2021-04-03T03:10:00.000Z",
      },
      {
        reading: 6.937,
        time: "2021-04-03T03:20:00.000Z",
      },
      {
        reading: 7.414,
        time: "2021-04-03T03:30:00.000Z",
      },
      {
        reading: 7.157,
        time: "2021-04-03T03:40:00.000Z",
      },
      {
        reading: 7.409,
        time: "2021-04-03T03:50:00.000Z",
      },
      {
        reading: 7.97,
        time: "2021-04-03T04:00:00.000Z",
      },
      {
        reading: 7.595,
        time: "2021-04-03T04:10:00.000Z",
      },
      {
        reading: 7.286,
        time: "2021-04-03T04:20:00.000Z",
      },
      {
        reading: 6.555,
        time: "2021-04-03T04:30:00.000Z",
      },
      {
        reading: 6.244,
        time: "2021-04-03T04:40:00.000Z",
      },
      {
        reading: 6.359,
        time: "2021-04-03T04:50:00.000Z",
      },
      {
        reading: 5.589,
        time: "2021-04-03T05:00:00.000Z",
      },
      {
        reading: 5.965,
        time: "2021-04-03T05:10:00.000Z",
      },
      {
        reading: 6.505,
        time: "2021-04-03T05:20:00.000Z",
      },
      {
        reading: 6.372,
        time: "2021-04-03T05:30:00.000Z",
      },
      {
        reading: 6.558,
        time: "2021-04-03T05:40:00.000Z",
      },
      {
        reading: 6.751,
        time: "2021-04-03T05:50:00.000Z",
      },
      {
        reading: 7.206,
        time: "2021-04-03T06:00:00.000Z",
      },
      {
        reading: 7.36,
        time: "2021-04-03T06:10:00.000Z",
      },
      {
        reading: 7.423,
        time: "2021-04-03T06:20:00.000Z",
      },
      {
        reading: 7.513,
        time: "2021-04-03T06:30:00.000Z",
      },
      {
        reading: 7.349,
        time: "2021-04-03T06:40:00.000Z",
      },
      {
        reading: 7.407,
        time: "2021-04-03T06:50:00.000Z",
      },
      {
        reading: 7.59,
        time: "2021-04-03T07:00:00.000Z",
      },
      {
        reading: 6.929,
        time: "2021-04-03T07:10:00.000Z",
      },
      {
        reading: 6.708,
        time: "2021-04-03T07:20:00.000Z",
      },
      {
        reading: 5.306,
        time: "2021-04-03T07:30:00.000Z",
      },
      {
        reading: 5.585,
        time: "2021-04-03T07:40:00.000Z",
      },
      {
        reading: 5.314,
        time: "2021-04-03T07:50:00.000Z",
      },
      {
        reading: 5.579,
        time: "2021-04-03T08:00:00.000Z",
      },
      {
        reading: 5.29,
        time: "2021-04-03T08:10:00.000Z",
      },
      {
        reading: 5.29,
        time: "2021-04-03T08:20:00.000Z",
      },
      {
        reading: 5.705,
        time: "2021-04-03T08:30:00.000Z",
      },
      {
        reading: 5.981,
        time: "2021-04-03T08:40:00.000Z",
      },
      {
        reading: 5.911,
        time: "2021-04-03T08:50:00.000Z",
      },
      {
        reading: 5.431,
        time: "2021-04-03T09:00:00.000Z",
      },
      {
        reading: 6.068,
        time: "2021-04-03T09:10:00.000Z",
      },
      {
        reading: 6.805,
        time: "2021-04-03T09:20:00.000Z",
      },
      {
        reading: 6.69,
        time: "2021-04-03T09:30:00.000Z",
      },
      {
        reading: 6.608,
        time: "2021-04-03T09:40:00.000Z",
      },
      {
        reading: 6.58,
        time: "2021-04-03T09:50:00.000Z",
      },
      {
        reading: 6.343,
        time: "2021-04-03T10:00:00.000Z",
      },
      {
        reading: 6.068,
        time: "2021-04-03T10:10:00.000Z",
      },
      {
        reading: 5.124,
        time: "2021-04-03T10:20:00.000Z",
      },
      {
        reading: 4.926,
        time: "2021-04-03T10:30:00.000Z",
      },
      {
        reading: 5.017,
        time: "2021-04-03T10:40:00.000Z",
      },
      {
        reading: 5.143,
        time: "2021-04-03T10:50:00.000Z",
      },
      {
        reading: 4.902,
        time: "2021-04-03T11:00:00.000Z",
      },
      {
        reading: 4.728,
        time: "2021-04-03T11:10:00.000Z",
      },
      {
        reading: 4.421,
        time: "2021-04-03T11:20:00.000Z",
      },
      {
        reading: 4.854,
        time: "2021-04-03T11:30:00.000Z",
      },
      {
        reading: 5.247,
        time: "2021-04-03T11:40:00.000Z",
      },
      {
        reading: 5.001,
        time: "2021-04-03T11:50:00.000Z",
      },
      {
        reading: 4.905,
        time: "2021-04-03T12:00:00.000Z",
      },
      {
        reading: 5.327,
        time: "2021-04-03T12:10:00.000Z",
      },
      {
        reading: 5.599,
        time: "2021-04-03T12:20:00.000Z",
      },
      {
        reading: 5.187,
        time: "2021-04-03T12:30:00.000Z",
      },
      {
        reading: 4.6,
        time: "2021-04-03T12:40:00.000Z",
      },
      {
        reading: 4.479,
        time: "2021-04-03T12:50:00.000Z",
      },
      {
        reading: 4.637,
        time: "2021-04-03T13:00:00.000Z",
      },
      {
        reading: 4.591,
        time: "2021-04-03T13:10:00.000Z",
      },
      {
        reading: 4.858,
        time: "2021-04-03T13:20:00.000Z",
      },
      {
        reading: 4.625,
        time: "2021-04-03T13:30:00.000Z",
      },
      {
        reading: 3.75,
        time: "2021-04-03T13:40:00.000Z",
      },
      {
        reading: 3.688,
        time: "2021-04-03T13:50:00.000Z",
      },
      {
        reading: 3.795,
        time: "2021-04-03T14:00:00.000Z",
      },
      {
        reading: 3.797,
        time: "2021-04-03T14:10:00.000Z",
      },
      {
        reading: 3.619,
        time: "2021-04-03T14:20:00.000Z",
      },
      {
        reading: 3.127,
        time: "2021-04-03T14:30:00.000Z",
      },
      {
        reading: 3.047,
        time: "2021-04-03T14:40:00.000Z",
      },
      {
        reading: 2.721,
        time: "2021-04-03T14:50:00.000Z",
      },
      {
        reading: 2.499,
        time: "2021-04-03T15:00:00.000Z",
      },
      {
        reading: 2.412,
        time: "2021-04-03T15:10:00.000Z",
      },
      {
        reading: 1.981,
        time: "2021-04-03T15:20:00.000Z",
      },
      {
        reading: 2.5,
        time: "2021-04-03T15:30:00.000Z",
      },
      {
        reading: 2.442,
        time: "2021-04-03T15:40:00.000Z",
      },
      {
        reading: 2.186,
        time: "2021-04-03T15:50:00.000Z",
      },
      {
        reading: 1.94,
        time: "2021-04-03T16:00:00.000Z",
      },
      {
        reading: 1.09,
        time: "2021-04-03T16:10:00.000Z",
      },
      {
        reading: 1.577,
        time: "2021-04-03T16:20:00.000Z",
      },
      {
        reading: 1.41,
        time: "2021-04-03T16:30:00.000Z",
      },
      {
        reading: 2.17,
        time: "2021-04-03T16:40:00.000Z",
      },
      {
        reading: 3.93,
        time: "2021-04-03T16:50:00.000Z",
      },
      {
        reading: 3.962,
        time: "2021-04-03T17:00:00.000Z",
      },
      {
        reading: 3.604,
        time: "2021-04-03T17:10:00.000Z",
      },
      {
        reading: 3.818,
        time: "2021-04-03T17:20:00.000Z",
      },
      {
        reading: 3.932,
        time: "2021-04-03T17:30:00.000Z",
      },
      {
        reading: 3.751,
        time: "2021-04-03T17:40:00.000Z",
      },
      {
        reading: 3.65,
        time: "2021-04-03T17:50:00.000Z",
      },
      {
        reading: 4.122,
        time: "2021-04-03T18:00:00.000Z",
      },
      {
        reading: 4.652,
        time: "2021-04-03T18:10:00.000Z",
      },
      {
        reading: 4.466,
        time: "2021-04-03T18:20:00.000Z",
      },
      {
        reading: 4.665,
        time: "2021-04-03T18:30:00.000Z",
      },
      {
        reading: 4.149,
        time: "2021-04-03T18:40:00.000Z",
      },
      {
        reading: 3.977,
        time: "2021-04-03T18:50:00.000Z",
      },
      {
        reading: 4.482,
        time: "2021-04-03T19:00:00.000Z",
      },
      {
        reading: 4.782,
        time: "2021-04-03T19:10:00.000Z",
      },
      {
        reading: 5.23,
        time: "2021-04-03T19:20:00.000Z",
      },
      {
        reading: 5.29,
        time: "2021-04-03T19:30:00.000Z",
      },
      {
        reading: 5.073,
        time: "2021-04-03T19:40:00.000Z",
      },
      {
        reading: 4.808,
        time: "2021-04-03T19:50:00.000Z",
      },
      {
        reading: 4.826,
        time: "2021-04-03T20:00:00.000Z",
      },
      {
        reading: 4.812,
        time: "2021-04-03T20:10:00.000Z",
      },
      {
        reading: 4.551,
        time: "2021-04-03T20:20:00.000Z",
      },
      {
        reading: 4.757,
        time: "2021-04-03T20:30:00.000Z",
      },
      {
        reading: 5.484,
        time: "2021-04-03T20:40:00.000Z",
      },
      {
        reading: 5.165,
        time: "2021-04-03T20:50:00.000Z",
      },
      {
        reading: 5.125,
        time: "2021-04-03T21:00:00.000Z",
      },
      {
        reading: 4.932,
        time: "2021-04-03T21:10:00.000Z",
      },
      {
        reading: 5.02,
        time: "2021-04-03T21:20:00.000Z",
      },
      {
        reading: 5.178,
        time: "2021-04-03T21:30:00.000Z",
      },
      {
        reading: 4.791,
        time: "2021-04-03T21:40:00.000Z",
      },
      {
        reading: 4.347,
        time: "2021-04-03T21:50:00.000Z",
      },
      {
        reading: 3.955,
        time: "2021-04-03T22:00:00.000Z",
      },
      {
        reading: 4.046,
        time: "2021-04-03T22:10:00.000Z",
      },
      {
        reading: 3.611,
        time: "2021-04-03T22:20:00.000Z",
      },
      {
        reading: 3.304,
        time: "2021-04-03T22:30:00.000Z",
      },
      {
        reading: 3.287,
        time: "2021-04-03T22:40:00.000Z",
      },
      {
        reading: 2.767,
        time: "2021-04-03T22:50:00.000Z",
      },
      {
        reading: 2.417,
        time: "2021-04-03T23:00:00.000Z",
      },
      {
        reading: 1.724,
        time: "2021-04-03T23:10:00.000Z",
      },
      {
        reading: 1.621,
        time: "2021-04-03T23:20:00.000Z",
      },
      {
        reading: 1.278,
        time: "2021-04-03T23:30:00.000Z",
      },
      {
        reading: 1.476,
        time: "2021-04-03T23:40:00.000Z",
      },
      {
        reading: 1.594,
        time: "2021-04-03T23:50:00.000Z",
      },
      {
        reading: 2.358,
        time: "2021-04-04T00:00:00.000Z",
      },
      {
        reading: 2.898,
        time: "2021-04-04T00:10:00.000Z",
      },
      {
        reading: 3.084,
        time: "2021-04-04T00:20:00.000Z",
      },
      {
        reading: 4.447,
        time: "2021-04-04T00:30:00.000Z",
      },
      {
        reading: 4.961,
        time: "2021-04-04T00:40:00.000Z",
      },
      {
        reading: 6.214,
        time: "2021-04-04T00:50:00.000Z",
      },
      {
        reading: 6.744,
        time: "2021-04-04T01:00:00.000Z",
      },
      {
        reading: 6.09,
        time: "2021-04-04T01:10:00.000Z",
      },
      {
        reading: 6.716,
        time: "2021-04-04T01:20:00.000Z",
      },
      {
        reading: 7.137,
        time: "2021-04-04T01:30:00.000Z",
      },
      {
        reading: 6.698,
        time: "2021-04-04T01:40:00.000Z",
      },
      {
        reading: 6.179,
        time: "2021-04-04T01:50:00.000Z",
      },
      {
        reading: 5.651,
        time: "2021-04-04T02:00:00.000Z",
      },
      {
        reading: 5.889,
        time: "2021-04-04T02:10:00.000Z",
      },
      {
        reading: 5.449,
        time: "2021-04-04T02:20:00.000Z",
      },
      {
        reading: 5.848,
        time: "2021-04-04T02:30:00.000Z",
      },
      {
        reading: 5.919,
        time: "2021-04-04T02:40:00.000Z",
      },
      {
        reading: 6.225,
        time: "2021-04-04T02:50:00.000Z",
      },
      {
        reading: 6.392,
        time: "2021-04-04T03:00:00.000Z",
      },
      {
        reading: 6.63,
        time: "2021-04-04T03:10:00.000Z",
      },
      {
        reading: 6.484,
        time: "2021-04-04T03:20:00.000Z",
      },
      {
        reading: 7.007,
        time: "2021-04-04T03:30:00.000Z",
      },
      {
        reading: 6.948,
        time: "2021-04-04T03:40:00.000Z",
      },
      {
        reading: 7.07,
        time: "2021-04-04T03:50:00.000Z",
      },
      {
        reading: 6.962,
        time: "2021-04-04T04:00:00.000Z",
      },
      {
        reading: 6.932,
        time: "2021-04-04T04:10:00.000Z",
      },
      {
        reading: 6.562,
        time: "2021-04-04T04:20:00.000Z",
      },
      {
        reading: 6.906,
        time: "2021-04-04T04:30:00.000Z",
      },
      {
        reading: 6.651,
        time: "2021-04-04T04:40:00.000Z",
      },
      {
        reading: 5.878,
        time: "2021-04-04T04:50:00.000Z",
      },
      {
        reading: 5.826,
        time: "2021-04-04T05:00:00.000Z",
      },
      {
        reading: 5.962,
        time: "2021-04-04T05:10:00.000Z",
      },
      {
        reading: 5.646,
        time: "2021-04-04T05:20:00.000Z",
      },
      {
        reading: 5.773,
        time: "2021-04-04T05:30:00.000Z",
      },
      {
        reading: 5.776,
        time: "2021-04-04T05:40:00.000Z",
      },
      {
        reading: 5.438,
        time: "2021-04-04T05:50:00.000Z",
      },
      {
        reading: 5.241,
        time: "2021-04-04T06:00:00.000Z",
      },
      {
        reading: 5.187,
        time: "2021-04-04T06:10:00.000Z",
      },
      {
        reading: 4.79,
        time: "2021-04-04T06:20:00.000Z",
      },
      {
        reading: 4.884,
        time: "2021-04-04T06:30:00.000Z",
      },
      {
        reading: 4.668,
        time: "2021-04-04T06:40:00.000Z",
      },
      {
        reading: 4.439,
        time: "2021-04-04T06:50:00.000Z",
      },
      {
        reading: 4.298,
        time: "2021-04-04T07:00:00.000Z",
      },
      {
        reading: 4.393,
        time: "2021-04-04T07:10:00.000Z",
      },
      {
        reading: 4.175,
        time: "2021-04-04T07:20:00.000Z",
      },
      {
        reading: 4.581,
        time: "2021-04-04T07:30:00.000Z",
      },
      {
        reading: 4.735,
        time: "2021-04-04T07:40:00.000Z",
      },
      {
        reading: 4.688,
        time: "2021-04-04T07:50:00.000Z",
      },
      {
        reading: 3.939,
        time: "2021-04-04T08:00:00.000Z",
      },
      {
        reading: 3.367,
        time: "2021-04-04T08:10:00.000Z",
      },
      {
        reading: 3.383,
        time: "2021-04-04T08:20:00.000Z",
      },
      {
        reading: 2.391,
        time: "2021-04-04T08:30:00.000Z",
      },
      {
        reading: 2.761,
        time: "2021-04-04T08:40:00.000Z",
      },
      {
        reading: 2.825,
        time: "2021-04-04T08:50:00.000Z",
      },
      {
        reading: 2.485,
        time: "2021-04-04T09:00:00.000Z",
      },
      {
        reading: 3.448,
        time: "2021-04-04T09:10:00.000Z",
      },
      {
        reading: 2.903,
        time: "2021-04-04T09:20:00.000Z",
      },
      {
        reading: 1.801,
        time: "2021-04-04T09:30:00.000Z",
      },
      {
        reading: 2.792,
        time: "2021-04-04T09:40:00.000Z",
      },
      {
        reading: 3.568,
        time: "2021-04-04T09:50:00.000Z",
      },
      {
        reading: 3.671,
        time: "2021-04-04T10:00:00.000Z",
      },
      {
        reading: 3.376,
        time: "2021-04-04T10:10:00.000Z",
      },
      {
        reading: 2.539,
        time: "2021-04-04T10:20:00.000Z",
      },
      {
        reading: 3.38,
        time: "2021-04-04T10:30:00.000Z",
      },
      {
        reading: 5.146,
        time: "2021-04-04T10:40:00.000Z",
      },
      {
        reading: 5.815,
        time: "2021-04-04T10:50:00.000Z",
      },
      {
        reading: 5.806,
        time: "2021-04-04T11:00:00.000Z",
      },
      {
        reading: 6.41,
        time: "2021-04-04T11:10:00.000Z",
      },
      {
        reading: 6.322,
        time: "2021-04-04T11:20:00.000Z",
      },
      {
        reading: 6.183,
        time: "2021-04-04T11:30:00.000Z",
      },
      {
        reading: 6.739,
        time: "2021-04-04T11:40:00.000Z",
      },
      {
        reading: 6.628,
        time: "2021-04-04T11:50:00.000Z",
      },
      {
        reading: 7.102,
        time: "2021-04-04T12:00:00.000Z",
      },
      {
        reading: 7.293,
        time: "2021-04-04T12:10:00.000Z",
      },
      {
        reading: 7.97,
        time: "2021-04-04T12:20:00.000Z",
      },
      {
        reading: 7.711,
        time: "2021-04-04T12:30:00.000Z",
      },
      {
        reading: 7.021,
        time: "2021-04-04T12:40:00.000Z",
      },
      {
        reading: 7.008,
        time: "2021-04-04T12:50:00.000Z",
      },
      {
        reading: 7.043,
        time: "2021-04-04T13:00:00.000Z",
      },
      {
        reading: 7.306,
        time: "2021-04-04T13:10:00.000Z",
      },
      {
        reading: 6.653,
        time: "2021-04-04T13:20:00.000Z",
      },
      {
        reading: 6.732,
        time: "2021-04-04T13:30:00.000Z",
      },
      {
        reading: 6.931,
        time: "2021-04-04T13:40:00.000Z",
      },
      {
        reading: 6.723,
        time: "2021-04-04T13:50:00.000Z",
      },
      {
        reading: 6.128,
        time: "2021-04-04T14:00:00.000Z",
      },
      {
        reading: 5.927,
        time: "2021-04-04T14:10:00.000Z",
      },
      {
        reading: 6.66,
        time: "2021-04-04T14:20:00.000Z",
      },
      {
        reading: 7.116,
        time: "2021-04-04T14:30:00.000Z",
      },
      {
        reading: 7.085,
        time: "2021-04-04T14:40:00.000Z",
      },
      {
        reading: 6.789,
        time: "2021-04-04T14:50:00.000Z",
      },
      {
        reading: 6.42,
        time: "2021-04-04T15:00:00.000Z",
      },
      {
        reading: 6.454,
        time: "2021-04-04T15:10:00.000Z",
      },
      {
        reading: 6.511,
        time: "2021-04-04T15:20:00.000Z",
      },
      {
        reading: 7.415,
        time: "2021-04-04T15:30:00.000Z",
      },
      {
        reading: 8.84,
        time: "2021-04-04T15:40:00.000Z",
      },
      {
        reading: 8.13,
        time: "2021-04-04T15:50:00.000Z",
      },
      {
        reading: 8.97,
        time: "2021-04-04T16:00:00.000Z",
      },
      {
        reading: 8.62,
        time: "2021-04-04T16:10:00.000Z",
      },
      {
        reading: 9.89,
        time: "2021-04-04T16:20:00.000Z",
      },
      {
        reading: 10.36,
        time: "2021-04-04T16:30:00.000Z",
      },
      {
        reading: 10,
        time: "2021-04-04T16:40:00.000Z",
      },
      {
        reading: 9.7,
        time: "2021-04-04T16:50:00.000Z",
      },
      {
        reading: 9.73,
        time: "2021-04-04T17:00:00.000Z",
      },
      {
        reading: 9.14,
        time: "2021-04-04T17:10:00.000Z",
      },
      {
        reading: 10.33,
        time: "2021-04-04T17:20:00.000Z",
      },
      {
        reading: 10.48,
        time: "2021-04-04T17:30:00.000Z",
      },
      {
        reading: 10.69,
        time: "2021-04-04T17:40:00.000Z",
      },
      {
        reading: 9.65,
        time: "2021-04-04T17:50:00.000Z",
      },
      {
        reading: 10.7,
        time: "2021-04-04T18:00:00.000Z",
      },
      {
        reading: 10.31,
        time: "2021-04-04T18:10:00.000Z",
      },
      {
        reading: 10.38,
        time: "2021-04-04T18:20:00.000Z",
      },
      {
        reading: 11.15,
        time: "2021-04-04T18:30:00.000Z",
      },
      {
        reading: 11.15,
        time: "2021-04-04T18:40:00.000Z",
      },
      {
        reading: 10.25,
        time: "2021-04-04T18:50:00.000Z",
      },
      {
        reading: 9.27,
        time: "2021-04-04T19:00:00.000Z",
      },
      {
        reading: 9.65,
        time: "2021-04-04T19:10:00.000Z",
      },
      {
        reading: 10.29,
        time: "2021-04-04T19:20:00.000Z",
      },
      {
        reading: 10.69,
        time: "2021-04-04T19:30:00.000Z",
      },
      {
        reading: 9.44,
        time: "2021-04-04T19:40:00.000Z",
      },
      {
        reading: 10.18,
        time: "2021-04-04T19:50:00.000Z",
      },
      {
        reading: 10.74,
        time: "2021-04-04T20:00:00.000Z",
      },
      {
        reading: 10.13,
        time: "2021-04-04T20:10:00.000Z",
      },
      {
        reading: 10.15,
        time: "2021-04-04T20:20:00.000Z",
      },
      {
        reading: 12.92,
        time: "2021-04-04T20:30:00.000Z",
      },
      {
        reading: 11.42,
        time: "2021-04-04T20:40:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-04T20:50:00.000Z",
      },
      {
        reading: 8.91,
        time: "2021-04-04T21:00:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-04T21:10:00.000Z",
      },
      {
        reading: 10.32,
        time: "2021-04-04T21:20:00.000Z",
      },
      {
        reading: 9.36,
        time: "2021-04-04T21:30:00.000Z",
      },
      {
        reading: 10.77,
        time: "2021-04-04T21:40:00.000Z",
      },
      {
        reading: 10.92,
        time: "2021-04-04T21:50:00.000Z",
      },
      {
        reading: 10,
        time: "2021-04-04T22:00:00.000Z",
      },
      {
        reading: 10.58,
        time: "2021-04-04T22:10:00.000Z",
      },
      {
        reading: 10.56,
        time: "2021-04-04T22:20:00.000Z",
      },
      {
        reading: 10.12,
        time: "2021-04-04T22:30:00.000Z",
      },
      {
        reading: 11.11,
        time: "2021-04-04T22:40:00.000Z",
      },
      {
        reading: 13.51,
        time: "2021-04-04T22:50:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-04T23:00:00.000Z",
      },
      {
        reading: 12.85,
        time: "2021-04-04T23:10:00.000Z",
      },
      {
        reading: 11.71,
        time: "2021-04-04T23:20:00.000Z",
      },
      {
        reading: 11.02,
        time: "2021-04-04T23:30:00.000Z",
      },
      {
        reading: 12.62,
        time: "2021-04-04T23:40:00.000Z",
      },
      {
        reading: 12.15,
        time: "2021-04-04T23:50:00.000Z",
      },
      {
        reading: 12.14,
        time: "2021-04-05T00:00:00.000Z",
      },
      {
        reading: 11.46,
        time: "2021-04-05T00:10:00.000Z",
      },
      {
        reading: 9.34,
        time: "2021-04-05T00:20:00.000Z",
      },
      {
        reading: 9.99,
        time: "2021-04-05T00:30:00.000Z",
      },
      {
        reading: 10.65,
        time: "2021-04-05T00:40:00.000Z",
      },
      {
        reading: 10.6,
        time: "2021-04-05T00:50:00.000Z",
      },
      {
        reading: 10.89,
        time: "2021-04-05T01:00:00.000Z",
      },
      {
        reading: 11.43,
        time: "2021-04-05T01:10:00.000Z",
      },
      {
        reading: 13.15,
        time: "2021-04-05T01:20:00.000Z",
      },
      {
        reading: 13.17,
        time: "2021-04-05T01:30:00.000Z",
      },
      {
        reading: 14.42,
        time: "2021-04-05T01:40:00.000Z",
      },
      {
        reading: 13.82,
        time: "2021-04-05T01:50:00.000Z",
      },
      {
        reading: 14.55,
        time: "2021-04-05T02:00:00.000Z",
      },
      {
        reading: 13.43,
        time: "2021-04-05T02:10:00.000Z",
      },
      {
        reading: 12.06,
        time: "2021-04-05T02:20:00.000Z",
      },
      {
        reading: 12.09,
        time: "2021-04-05T02:30:00.000Z",
      },
      {
        reading: 12.11,
        time: "2021-04-05T02:40:00.000Z",
      },
      {
        reading: 11.39,
        time: "2021-04-05T02:50:00.000Z",
      },
      {
        reading: 11.71,
        time: "2021-04-05T03:00:00.000Z",
      },
      {
        reading: 11.44,
        time: "2021-04-05T03:10:00.000Z",
      },
      {
        reading: 10.33,
        time: "2021-04-05T03:20:00.000Z",
      },
      {
        reading: 10.08,
        time: "2021-04-05T03:30:00.000Z",
      },
      {
        reading: 9.65,
        time: "2021-04-05T03:40:00.000Z",
      },
      {
        reading: 9.67,
        time: "2021-04-05T03:50:00.000Z",
      },
      {
        reading: 9.63,
        time: "2021-04-05T04:00:00.000Z",
      },
      {
        reading: 9.45,
        time: "2021-04-05T04:10:00.000Z",
      },
      {
        reading: 9.81,
        time: "2021-04-05T04:20:00.000Z",
      },
      {
        reading: 10.04,
        time: "2021-04-05T04:30:00.000Z",
      },
      {
        reading: 9.43,
        time: "2021-04-05T04:40:00.000Z",
      },
      {
        reading: 10.62,
        time: "2021-04-05T04:50:00.000Z",
      },
      {
        reading: 10.37,
        time: "2021-04-05T05:00:00.000Z",
      },
      {
        reading: 10.8,
        time: "2021-04-05T05:10:00.000Z",
      },
      {
        reading: 10.7,
        time: "2021-04-05T05:20:00.000Z",
      },
      {
        reading: 10.17,
        time: "2021-04-05T05:30:00.000Z",
      },
      {
        reading: 10.37,
        time: "2021-04-05T05:40:00.000Z",
      },
      {
        reading: 10.71,
        time: "2021-04-05T05:50:00.000Z",
      },
      {
        reading: 10.49,
        time: "2021-04-05T06:00:00.000Z",
      },
      {
        reading: 10.42,
        time: "2021-04-05T06:10:00.000Z",
      },
      {
        reading: 10.35,
        time: "2021-04-05T06:20:00.000Z",
      },
      {
        reading: 9.93,
        time: "2021-04-05T06:30:00.000Z",
      },
      {
        reading: 10.08,
        time: "2021-04-05T06:40:00.000Z",
      },
      {
        reading: 9.91,
        time: "2021-04-05T06:50:00.000Z",
      },
      {
        reading: 9.72,
        time: "2021-04-05T07:00:00.000Z",
      },
      {
        reading: 9.68,
        time: "2021-04-05T07:10:00.000Z",
      },
      {
        reading: 9.68,
        time: "2021-04-05T07:20:00.000Z",
      },
      {
        reading: 9.34,
        time: "2021-04-05T07:30:00.000Z",
      },
      {
        reading: 9.53,
        time: "2021-04-05T07:40:00.000Z",
      },
      {
        reading: 9.91,
        time: "2021-04-05T07:50:00.000Z",
      },
      {
        reading: 9.74,
        time: "2021-04-05T08:00:00.000Z",
      },
      {
        reading: 9.58,
        time: "2021-04-05T08:10:00.000Z",
      },
      {
        reading: 9.71,
        time: "2021-04-05T08:20:00.000Z",
      },
      {
        reading: 9.79,
        time: "2021-04-05T08:30:00.000Z",
      },
      {
        reading: 9.67,
        time: "2021-04-05T08:40:00.000Z",
      },
      {
        reading: 9.73,
        time: "2021-04-05T08:50:00.000Z",
      },
      {
        reading: 9.77,
        time: "2021-04-05T09:00:00.000Z",
      },
      {
        reading: 9.48,
        time: "2021-04-05T09:10:00.000Z",
      },
      {
        reading: 9.22,
        time: "2021-04-05T09:20:00.000Z",
      },
      {
        reading: 9.41,
        time: "2021-04-05T09:30:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-05T09:40:00.000Z",
      },
      {
        reading: 9.57,
        time: "2021-04-05T09:50:00.000Z",
      },
      {
        reading: 9.62,
        time: "2021-04-05T10:00:00.000Z",
      },
      {
        reading: 9.49,
        time: "2021-04-05T10:10:00.000Z",
      },
      {
        reading: 9.57,
        time: "2021-04-05T10:20:00.000Z",
      },
      {
        reading: 9.21,
        time: "2021-04-05T10:30:00.000Z",
      },
      {
        reading: 9.22,
        time: "2021-04-05T10:40:00.000Z",
      },
      {
        reading: 9.07,
        time: "2021-04-05T10:50:00.000Z",
      },
      {
        reading: 9.36,
        time: "2021-04-05T11:00:00.000Z",
      },
      {
        reading: 9.03,
        time: "2021-04-05T11:10:00.000Z",
      },
      {
        reading: 8.79,
        time: "2021-04-05T11:20:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-05T11:30:00.000Z",
      },
      {
        reading: 8.95,
        time: "2021-04-05T11:40:00.000Z",
      },
      {
        reading: 8.59,
        time: "2021-04-05T11:50:00.000Z",
      },
      {
        reading: 8.59,
        time: "2021-04-05T12:00:00.000Z",
      },
      {
        reading: 8.6,
        time: "2021-04-05T12:10:00.000Z",
      },
      {
        reading: 8.57,
        time: "2021-04-05T12:20:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-05T12:30:00.000Z",
      },
      {
        reading: 9.04,
        time: "2021-04-05T12:40:00.000Z",
      },
      {
        reading: 9.48,
        time: "2021-04-05T12:50:00.000Z",
      },
      {
        reading: 9.2,
        time: "2021-04-05T13:00:00.000Z",
      },
      {
        reading: 8.68,
        time: "2021-04-05T13:10:00.000Z",
      },
      {
        reading: 8.44,
        time: "2021-04-05T13:20:00.000Z",
      },
      {
        reading: 9.05,
        time: "2021-04-05T13:30:00.000Z",
      },
      {
        reading: 9.08,
        time: "2021-04-05T13:40:00.000Z",
      },
      {
        reading: 8.68,
        time: "2021-04-05T13:50:00.000Z",
      },
      {
        reading: 8.77,
        time: "2021-04-05T14:00:00.000Z",
      },
      {
        reading: 9.8,
        time: "2021-04-05T14:10:00.000Z",
      },
      {
        reading: 9.81,
        time: "2021-04-05T14:20:00.000Z",
      },
      {
        reading: 9.59,
        time: "2021-04-05T14:30:00.000Z",
      },
      {
        reading: 9.71,
        time: "2021-04-05T14:40:00.000Z",
      },
      {
        reading: 9.83,
        time: "2021-04-05T14:50:00.000Z",
      },
      {
        reading: 9.17,
        time: "2021-04-05T15:00:00.000Z",
      },
      {
        reading: 9.47,
        time: "2021-04-05T15:10:00.000Z",
      },
      {
        reading: 9.53,
        time: "2021-04-05T15:20:00.000Z",
      },
      {
        reading: 9.71,
        time: "2021-04-05T15:30:00.000Z",
      },
      {
        reading: 9.26,
        time: "2021-04-05T15:40:00.000Z",
      },
      {
        reading: 9.73,
        time: "2021-04-05T15:50:00.000Z",
      },
      {
        reading: 9.57,
        time: "2021-04-05T16:00:00.000Z",
      },
      {
        reading: 9.77,
        time: "2021-04-05T16:10:00.000Z",
      },
      {
        reading: 9.84,
        time: "2021-04-05T16:20:00.000Z",
      },
      {
        reading: 9.48,
        time: "2021-04-05T16:30:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-05T16:40:00.000Z",
      },
      {
        reading: 8.66,
        time: "2021-04-05T16:50:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-05T17:00:00.000Z",
      },
      {
        reading: 9.34,
        time: "2021-04-05T17:10:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-05T17:20:00.000Z",
      },
      {
        reading: 8.77,
        time: "2021-04-05T17:30:00.000Z",
      },
      {
        reading: 8.38,
        time: "2021-04-05T17:40:00.000Z",
      },
      {
        reading: 8.23,
        time: "2021-04-05T17:50:00.000Z",
      },
      {
        reading: 8.73,
        time: "2021-04-05T18:00:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-05T18:10:00.000Z",
      },
      {
        reading: 9.33,
        time: "2021-04-05T18:20:00.000Z",
      },
      {
        reading: 8.94,
        time: "2021-04-05T18:30:00.000Z",
      },
      {
        reading: 8.66,
        time: "2021-04-05T18:40:00.000Z",
      },
      {
        reading: 9,
        time: "2021-04-05T18:50:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-05T19:00:00.000Z",
      },
      {
        reading: 9.38,
        time: "2021-04-05T19:10:00.000Z",
      },
      {
        reading: 9.49,
        time: "2021-04-05T19:20:00.000Z",
      },
      {
        reading: 10.53,
        time: "2021-04-05T19:30:00.000Z",
      },
      {
        reading: 9.17,
        time: "2021-04-05T19:40:00.000Z",
      },
      {
        reading: 10.69,
        time: "2021-04-05T19:50:00.000Z",
      },
      {
        reading: 9.64,
        time: "2021-04-05T20:00:00.000Z",
      },
      {
        reading: 8.71,
        time: "2021-04-05T20:10:00.000Z",
      },
      {
        reading: 8.76,
        time: "2021-04-05T20:20:00.000Z",
      },
      {
        reading: 9.3,
        time: "2021-04-05T20:30:00.000Z",
      },
      {
        reading: 9.65,
        time: "2021-04-05T20:40:00.000Z",
      },
      {
        reading: 8.33,
        time: "2021-04-05T20:50:00.000Z",
      },
      {
        reading: 8.51,
        time: "2021-04-05T21:00:00.000Z",
      },
      {
        reading: 9,
        time: "2021-04-05T21:10:00.000Z",
      },
      {
        reading: 9.7,
        time: "2021-04-05T21:20:00.000Z",
      },
      {
        reading: 9.53,
        time: "2021-04-05T21:30:00.000Z",
      },
      {
        reading: 10.12,
        time: "2021-04-05T21:40:00.000Z",
      },
      {
        reading: 9.35,
        time: "2021-04-05T21:50:00.000Z",
      },
      {
        reading: 9.23,
        time: "2021-04-05T22:00:00.000Z",
      },
      {
        reading: 9.38,
        time: "2021-04-05T22:10:00.000Z",
      },
      {
        reading: 9.14,
        time: "2021-04-05T22:20:00.000Z",
      },
      {
        reading: 8.46,
        time: "2021-04-05T22:30:00.000Z",
      },
      {
        reading: 9.68,
        time: "2021-04-05T22:40:00.000Z",
      },
      {
        reading: 9.5,
        time: "2021-04-05T22:50:00.000Z",
      },
      {
        reading: 9.72,
        time: "2021-04-05T23:00:00.000Z",
      },
      {
        reading: 9.44,
        time: "2021-04-05T23:10:00.000Z",
      },
      {
        reading: 9.23,
        time: "2021-04-05T23:20:00.000Z",
      },
      {
        reading: 10.8,
        time: "2021-04-05T23:30:00.000Z",
      },
      {
        reading: 11.46,
        time: "2021-04-05T23:40:00.000Z",
      },
      {
        reading: 10.51,
        time: "2021-04-05T23:50:00.000Z",
      },
      {
        reading: 11.73,
        time: "2021-04-06T00:00:00.000Z",
      },
      {
        reading: 10.88,
        time: "2021-04-06T00:10:00.000Z",
      },
      {
        reading: 10.38,
        time: "2021-04-06T00:20:00.000Z",
      },
      {
        reading: 10.57,
        time: "2021-04-06T00:30:00.000Z",
      },
      {
        reading: 9.97,
        time: "2021-04-06T00:40:00.000Z",
      },
      {
        reading: 10.3,
        time: "2021-04-06T00:50:00.000Z",
      },
      {
        reading: 9.65,
        time: "2021-04-06T01:00:00.000Z",
      },
      {
        reading: 10.3,
        time: "2021-04-06T01:10:00.000Z",
      },
      {
        reading: 9.55,
        time: "2021-04-06T01:20:00.000Z",
      },
      {
        reading: 9.54,
        time: "2021-04-06T01:30:00.000Z",
      },
      {
        reading: 9.84,
        time: "2021-04-06T01:40:00.000Z",
      },
      {
        reading: 9.14,
        time: "2021-04-06T01:50:00.000Z",
      },
      {
        reading: 8.84,
        time: "2021-04-06T02:00:00.000Z",
      },
      {
        reading: 9.64,
        time: "2021-04-06T02:10:00.000Z",
      },
      {
        reading: 9.78,
        time: "2021-04-06T02:20:00.000Z",
      },
      {
        reading: 9.46,
        time: "2021-04-06T02:30:00.000Z",
      },
      {
        reading: 9.56,
        time: "2021-04-06T02:40:00.000Z",
      },
      {
        reading: 10.15,
        time: "2021-04-06T02:50:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-06T03:00:00.000Z",
      },
      {
        reading: 10.78,
        time: "2021-04-06T03:10:00.000Z",
      },
      {
        reading: 10.61,
        time: "2021-04-06T03:20:00.000Z",
      },
      {
        reading: 9.21,
        time: "2021-04-06T03:30:00.000Z",
      },
      {
        reading: 9.16,
        time: "2021-04-06T03:40:00.000Z",
      },
      {
        reading: 10.15,
        time: "2021-04-06T03:50:00.000Z",
      },
      {
        reading: 11.02,
        time: "2021-04-06T04:00:00.000Z",
      },
      {
        reading: 10.1,
        time: "2021-04-06T04:10:00.000Z",
      },
      {
        reading: 10.29,
        time: "2021-04-06T04:20:00.000Z",
      },
      {
        reading: 10.45,
        time: "2021-04-06T04:30:00.000Z",
      },
      {
        reading: 10.1,
        time: "2021-04-06T04:40:00.000Z",
      },
      {
        reading: 10.31,
        time: "2021-04-06T04:50:00.000Z",
      },
      {
        reading: 10.13,
        time: "2021-04-06T05:00:00.000Z",
      },
      {
        reading: 10.29,
        time: "2021-04-06T05:10:00.000Z",
      },
      {
        reading: 9.75,
        time: "2021-04-06T05:20:00.000Z",
      },
      {
        reading: 9.34,
        time: "2021-04-06T05:30:00.000Z",
      },
      {
        reading: 8.78,
        time: "2021-04-06T05:40:00.000Z",
      },
      {
        reading: 8.95,
        time: "2021-04-06T05:50:00.000Z",
      },
      {
        reading: 10.05,
        time: "2021-04-06T06:00:00.000Z",
      },
      {
        reading: 9.41,
        time: "2021-04-06T06:10:00.000Z",
      },
      {
        reading: 9.55,
        time: "2021-04-06T06:20:00.000Z",
      },
      {
        reading: 8.88,
        time: "2021-04-06T06:30:00.000Z",
      },
      {
        reading: 9.57,
        time: "2021-04-06T06:40:00.000Z",
      },
      {
        reading: 9.3,
        time: "2021-04-06T06:50:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-06T07:00:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-06T07:10:00.000Z",
      },
      {
        reading: 8.77,
        time: "2021-04-06T07:20:00.000Z",
      },
      {
        reading: 8.92,
        time: "2021-04-06T07:30:00.000Z",
      },
      {
        reading: 8.56,
        time: "2021-04-06T07:40:00.000Z",
      },
      {
        reading: 7.951,
        time: "2021-04-06T07:50:00.000Z",
      },
      {
        reading: 7.817,
        time: "2021-04-06T08:00:00.000Z",
      },
      {
        reading: 7.91,
        time: "2021-04-06T08:10:00.000Z",
      },
      {
        reading: 7.488,
        time: "2021-04-06T08:20:00.000Z",
      },
      {
        reading: 7.392,
        time: "2021-04-06T08:30:00.000Z",
      },
      {
        reading: 7.104,
        time: "2021-04-06T08:40:00.000Z",
      },
      {
        reading: 7.305,
        time: "2021-04-06T08:50:00.000Z",
      },
      {
        reading: 7.228,
        time: "2021-04-06T09:00:00.000Z",
      },
      {
        reading: 7.546,
        time: "2021-04-06T09:10:00.000Z",
      },
      {
        reading: 7.545,
        time: "2021-04-06T09:20:00.000Z",
      },
      {
        reading: 7.074,
        time: "2021-04-06T09:30:00.000Z",
      },
      {
        reading: 6.32,
        time: "2021-04-06T09:40:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-06T09:50:00.000Z",
      },
      {
        reading: 6.709,
        time: "2021-04-06T10:00:00.000Z",
      },
      {
        reading: 6.324,
        time: "2021-04-06T10:10:00.000Z",
      },
      {
        reading: 6.255,
        time: "2021-04-06T10:20:00.000Z",
      },
      {
        reading: 6.035,
        time: "2021-04-06T10:30:00.000Z",
      },
      {
        reading: 5.929,
        time: "2021-04-06T10:40:00.000Z",
      },
      {
        reading: 5.599,
        time: "2021-04-06T10:50:00.000Z",
      },
      {
        reading: 5.618,
        time: "2021-04-06T11:00:00.000Z",
      },
      {
        reading: 5.441,
        time: "2021-04-06T11:10:00.000Z",
      },
      {
        reading: 6.035,
        time: "2021-04-06T11:20:00.000Z",
      },
      {
        reading: 6.335,
        time: "2021-04-06T11:30:00.000Z",
      },
      {
        reading: 6.454,
        time: "2021-04-06T11:40:00.000Z",
      },
      {
        reading: 6.827,
        time: "2021-04-06T11:50:00.000Z",
      },
      {
        reading: 6.889,
        time: "2021-04-06T12:00:00.000Z",
      },
      {
        reading: 6.951,
        time: "2021-04-06T12:10:00.000Z",
      },
      {
        reading: 7.124,
        time: "2021-04-06T12:20:00.000Z",
      },
      {
        reading: 7.384,
        time: "2021-04-06T12:30:00.000Z",
      },
      {
        reading: 6.938,
        time: "2021-04-06T12:40:00.000Z",
      },
      {
        reading: 6.805,
        time: "2021-04-06T12:50:00.000Z",
      },
      {
        reading: 6.976,
        time: "2021-04-06T13:00:00.000Z",
      },
      {
        reading: 6.588,
        time: "2021-04-06T13:10:00.000Z",
      },
      {
        reading: 5.929,
        time: "2021-04-06T13:20:00.000Z",
      },
      {
        reading: 5.426,
        time: "2021-04-06T13:30:00.000Z",
      },
      {
        reading: 5.068,
        time: "2021-04-06T13:40:00.000Z",
      },
      {
        reading: 4.821,
        time: "2021-04-06T13:50:00.000Z",
      },
      {
        reading: 4.133,
        time: "2021-04-06T14:00:00.000Z",
      },
      {
        reading: 3.621,
        time: "2021-04-06T14:10:00.000Z",
      },
      {
        reading: 4.148,
        time: "2021-04-06T14:20:00.000Z",
      },
      {
        reading: 4.988,
        time: "2021-04-06T14:30:00.000Z",
      },
      {
        reading: 4.701,
        time: "2021-04-06T14:40:00.000Z",
      },
      {
        reading: 3.621,
        time: "2021-04-06T14:50:00.000Z",
      },
      {
        reading: 3.208,
        time: "2021-04-06T15:00:00.000Z",
      },
      {
        reading: 2.699,
        time: "2021-04-06T15:10:00.000Z",
      },
      {
        reading: 1.987,
        time: "2021-04-06T15:20:00.000Z",
      },
      {
        reading: 2.735,
        time: "2021-04-06T15:30:00.000Z",
      },
      {
        reading: 2.95,
        time: "2021-04-06T15:40:00.000Z",
      },
      {
        reading: 3.105,
        time: "2021-04-06T15:50:00.000Z",
      },
      {
        reading: 3.191,
        time: "2021-04-06T16:00:00.000Z",
      },
      {
        reading: 2.896,
        time: "2021-04-06T16:10:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-06T16:20:00.000Z",
      },
      {
        reading: 3.056,
        time: "2021-04-06T16:30:00.000Z",
      },
      {
        reading: 2.556,
        time: "2021-04-06T16:40:00.000Z",
      },
      {
        reading: 2.492,
        time: "2021-04-06T16:50:00.000Z",
      },
      {
        reading: 2.127,
        time: "2021-04-06T17:00:00.000Z",
      },
      {
        reading: 3.124,
        time: "2021-04-06T17:10:00.000Z",
      },
      {
        reading: 2.361,
        time: "2021-04-06T17:20:00.000Z",
      },
      {
        reading: 2.232,
        time: "2021-04-06T17:30:00.000Z",
      },
      {
        reading: 2.194,
        time: "2021-04-06T17:40:00.000Z",
      },
      {
        reading: 2.484,
        time: "2021-04-06T17:50:00.000Z",
      },
      {
        reading: 1.944,
        time: "2021-04-06T18:00:00.000Z",
      },
      {
        reading: 2.037,
        time: "2021-04-06T18:10:00.000Z",
      },
      {
        reading: 1.713,
        time: "2021-04-06T18:20:00.000Z",
      },
      {
        reading: 1.97,
        time: "2021-04-06T18:30:00.000Z",
      },
      {
        reading: 2.75,
        time: "2021-04-06T18:40:00.000Z",
      },
      {
        reading: 2.973,
        time: "2021-04-06T18:50:00.000Z",
      },
      {
        reading: 3.329,
        time: "2021-04-06T19:00:00.000Z",
      },
      {
        reading: 2.907,
        time: "2021-04-06T19:10:00.000Z",
      },
      {
        reading: 2.284,
        time: "2021-04-06T19:20:00.000Z",
      },
      {
        reading: 2.358,
        time: "2021-04-06T19:30:00.000Z",
      },
      {
        reading: 2.632,
        time: "2021-04-06T19:40:00.000Z",
      },
      {
        reading: 3.387,
        time: "2021-04-06T19:50:00.000Z",
      },
      {
        reading: 3.423,
        time: "2021-04-06T20:00:00.000Z",
      },
      {
        reading: 2.975,
        time: "2021-04-06T20:10:00.000Z",
      },
      {
        reading: 2.768,
        time: "2021-04-06T20:20:00.000Z",
      },
      {
        reading: 3.186,
        time: "2021-04-06T20:30:00.000Z",
      },
      {
        reading: 3.132,
        time: "2021-04-06T20:40:00.000Z",
      },
      {
        reading: 4.134,
        time: "2021-04-06T20:50:00.000Z",
      },
      {
        reading: 4.779,
        time: "2021-04-06T21:00:00.000Z",
      },
      {
        reading: 4.322,
        time: "2021-04-06T21:10:00.000Z",
      },
      {
        reading: 4.571,
        time: "2021-04-06T21:20:00.000Z",
      },
      {
        reading: 4.876,
        time: "2021-04-06T21:30:00.000Z",
      },
      {
        reading: 4.142,
        time: "2021-04-06T21:40:00.000Z",
      },
      {
        reading: 3.856,
        time: "2021-04-06T21:50:00.000Z",
      },
      {
        reading: 3.932,
        time: "2021-04-06T22:00:00.000Z",
      },
      {
        reading: 3.631,
        time: "2021-04-06T22:10:00.000Z",
      },
      {
        reading: 3.513,
        time: "2021-04-06T22:20:00.000Z",
      },
      {
        reading: 3.912,
        time: "2021-04-06T22:30:00.000Z",
      },
      {
        reading: 3.655,
        time: "2021-04-06T22:40:00.000Z",
      },
      {
        reading: 3.459,
        time: "2021-04-06T22:50:00.000Z",
      },
      {
        reading: 3.037,
        time: "2021-04-06T23:00:00.000Z",
      },
      {
        reading: 3.7,
        time: "2021-04-06T23:10:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-06T23:20:00.000Z",
      },
      {
        reading: 3.657,
        time: "2021-04-06T23:30:00.000Z",
      },
      {
        reading: 3.522,
        time: "2021-04-06T23:40:00.000Z",
      },
      {
        reading: 3.498,
        time: "2021-04-06T23:50:00.000Z",
      },
      {
        reading: 3.847,
        time: "2021-04-07T00:00:00.000Z",
      },
      {
        reading: 3.284,
        time: "2021-04-07T00:10:00.000Z",
      },
      {
        reading: 3.445,
        time: "2021-04-07T00:20:00.000Z",
      },
      {
        reading: 3.491,
        time: "2021-04-07T00:30:00.000Z",
      },
      {
        reading: 3.185,
        time: "2021-04-07T00:40:00.000Z",
      },
      {
        reading: 2.721,
        time: "2021-04-07T00:50:00.000Z",
      },
      {
        reading: 2.332,
        time: "2021-04-07T01:00:00.000Z",
      },
      {
        reading: 2.684,
        time: "2021-04-07T01:10:00.000Z",
      },
      {
        reading: 3.631,
        time: "2021-04-07T01:20:00.000Z",
      },
      {
        reading: 4.665,
        time: "2021-04-07T01:30:00.000Z",
      },
      {
        reading: 4.461,
        time: "2021-04-07T01:40:00.000Z",
      },
      {
        reading: 3.832,
        time: "2021-04-07T01:50:00.000Z",
      },
      {
        reading: 4.539,
        time: "2021-04-07T02:00:00.000Z",
      },
      {
        reading: 4.516,
        time: "2021-04-07T02:10:00.000Z",
      },
      {
        reading: 4.722,
        time: "2021-04-07T02:20:00.000Z",
      },
      {
        reading: 4.229,
        time: "2021-04-07T02:30:00.000Z",
      },
      {
        reading: 4.544,
        time: "2021-04-07T02:40:00.000Z",
      },
      {
        reading: 4.828,
        time: "2021-04-07T02:50:00.000Z",
      },
      {
        reading: 5.145,
        time: "2021-04-07T03:00:00.000Z",
      },
      {
        reading: 5.045,
        time: "2021-04-07T03:10:00.000Z",
      },
      {
        reading: 5.301,
        time: "2021-04-07T03:20:00.000Z",
      },
      {
        reading: 5.735,
        time: "2021-04-07T03:30:00.000Z",
      },
      {
        reading: 5.461,
        time: "2021-04-07T03:40:00.000Z",
      },
      {
        reading: 4.254,
        time: "2021-04-07T03:50:00.000Z",
      },
      {
        reading: 5.009,
        time: "2021-04-07T04:00:00.000Z",
      },
      {
        reading: 5.202,
        time: "2021-04-07T04:10:00.000Z",
      },
      {
        reading: 5.826,
        time: "2021-04-07T04:20:00.000Z",
      },
      {
        reading: 4.79,
        time: "2021-04-07T04:30:00.000Z",
      },
      {
        reading: 5.385,
        time: "2021-04-07T04:40:00.000Z",
      },
      {
        reading: 5.74,
        time: "2021-04-07T04:50:00.000Z",
      },
      {
        reading: 5.781,
        time: "2021-04-07T05:00:00.000Z",
      },
      {
        reading: 5.536,
        time: "2021-04-07T05:10:00.000Z",
      },
      {
        reading: 4.969,
        time: "2021-04-07T05:20:00.000Z",
      },
      {
        reading: 5.037,
        time: "2021-04-07T05:30:00.000Z",
      },
      {
        reading: 5.413,
        time: "2021-04-07T05:40:00.000Z",
      },
      {
        reading: 5.535,
        time: "2021-04-07T05:50:00.000Z",
      },
      {
        reading: 6.317,
        time: "2021-04-07T06:00:00.000Z",
      },
      {
        reading: 6.199,
        time: "2021-04-07T06:10:00.000Z",
      },
      {
        reading: 6.224,
        time: "2021-04-07T06:20:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-07T06:30:00.000Z",
      },
      {
        reading: 6.031,
        time: "2021-04-07T06:40:00.000Z",
      },
      {
        reading: 6.032,
        time: "2021-04-07T06:50:00.000Z",
      },
      {
        reading: 6.137,
        time: "2021-04-07T07:00:00.000Z",
      },
      {
        reading: 5.163,
        time: "2021-04-07T07:10:00.000Z",
      },
      {
        reading: 4.851,
        time: "2021-04-07T07:20:00.000Z",
      },
      {
        reading: 4.331,
        time: "2021-04-07T07:30:00.000Z",
      },
      {
        reading: 3.755,
        time: "2021-04-07T07:40:00.000Z",
      },
      {
        reading: 3.539,
        time: "2021-04-07T07:50:00.000Z",
      },
      {
        reading: 3.656,
        time: "2021-04-07T08:00:00.000Z",
      },
      {
        reading: 4.239,
        time: "2021-04-07T08:10:00.000Z",
      },
      {
        reading: 4.26,
        time: "2021-04-07T08:20:00.000Z",
      },
      {
        reading: 4.82,
        time: "2021-04-07T08:30:00.000Z",
      },
      {
        reading: 4.22,
        time: "2021-04-07T08:40:00.000Z",
      },
      {
        reading: 3.667,
        time: "2021-04-07T08:50:00.000Z",
      },
      {
        reading: 3.991,
        time: "2021-04-07T09:00:00.000Z",
      },
      {
        reading: 3.812,
        time: "2021-04-07T09:10:00.000Z",
      },
      {
        reading: 3.76,
        time: "2021-04-07T09:20:00.000Z",
      },
      {
        reading: 3.383,
        time: "2021-04-07T09:30:00.000Z",
      },
      {
        reading: 3.096,
        time: "2021-04-07T09:40:00.000Z",
      },
      {
        reading: 2.994,
        time: "2021-04-07T09:50:00.000Z",
      },
      {
        reading: 2.912,
        time: "2021-04-07T10:00:00.000Z",
      },
      {
        reading: 3.422,
        time: "2021-04-07T10:10:00.000Z",
      },
      {
        reading: 3.994,
        time: "2021-04-07T10:20:00.000Z",
      },
      {
        reading: 3.656,
        time: "2021-04-07T10:30:00.000Z",
      },
      {
        reading: 3.227,
        time: "2021-04-07T10:40:00.000Z",
      },
      {
        reading: 3.434,
        time: "2021-04-07T10:50:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-07T11:00:00.000Z",
      },
      {
        reading: 3.391,
        time: "2021-04-07T11:10:00.000Z",
      },
      {
        reading: 3.772,
        time: "2021-04-07T11:20:00.000Z",
      },
      {
        reading: 3.961,
        time: "2021-04-07T11:30:00.000Z",
      },
      {
        reading: 3.867,
        time: "2021-04-07T11:40:00.000Z",
      },
      {
        reading: 4.082,
        time: "2021-04-07T11:50:00.000Z",
      },
      {
        reading: 4.29,
        time: "2021-04-07T12:00:00.000Z",
      },
      {
        reading: 4.026,
        time: "2021-04-07T12:10:00.000Z",
      },
      {
        reading: 3.865,
        time: "2021-04-07T12:20:00.000Z",
      },
      {
        reading: 3.765,
        time: "2021-04-07T12:30:00.000Z",
      },
      {
        reading: 4.064,
        time: "2021-04-07T12:40:00.000Z",
      },
      {
        reading: 4.717,
        time: "2021-04-07T12:50:00.000Z",
      },
      {
        reading: 4.19,
        time: "2021-04-07T13:00:00.000Z",
      },
      {
        reading: 4.377,
        time: "2021-04-07T13:10:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-07T13:20:00.000Z",
      },
      {
        reading: 4.835,
        time: "2021-04-07T13:30:00.000Z",
      },
      {
        reading: 5.517,
        time: "2021-04-07T13:40:00.000Z",
      },
      {
        reading: 5.167,
        time: "2021-04-07T13:50:00.000Z",
      },
      {
        reading: 5.495,
        time: "2021-04-07T14:00:00.000Z",
      },
      {
        reading: 6.187,
        time: "2021-04-07T14:10:00.000Z",
      },
      {
        reading: 5.274,
        time: "2021-04-07T14:20:00.000Z",
      },
      {
        reading: 5.123,
        time: "2021-04-07T14:30:00.000Z",
      },
      {
        reading: 5.565,
        time: "2021-04-07T14:40:00.000Z",
      },
      {
        reading: 4.598,
        time: "2021-04-07T14:50:00.000Z",
      },
      {
        reading: 5.154,
        time: "2021-04-07T15:00:00.000Z",
      },
      {
        reading: 4.961,
        time: "2021-04-07T15:10:00.000Z",
      },
      {
        reading: 4.443,
        time: "2021-04-07T15:20:00.000Z",
      },
      {
        reading: 3.908,
        time: "2021-04-07T15:30:00.000Z",
      },
      {
        reading: 3.422,
        time: "2021-04-07T15:40:00.000Z",
      },
      {
        reading: 4.018,
        time: "2021-04-07T15:50:00.000Z",
      },
      {
        reading: 4.274,
        time: "2021-04-07T16:00:00.000Z",
      },
      {
        reading: 3.806,
        time: "2021-04-07T16:10:00.000Z",
      },
      {
        reading: 2.613,
        time: "2021-04-07T16:20:00.000Z",
      },
      {
        reading: 2.967,
        time: "2021-04-07T16:30:00.000Z",
      },
      {
        reading: 4.327,
        time: "2021-04-07T16:40:00.000Z",
      },
      {
        reading: 4.45,
        time: "2021-04-07T16:50:00.000Z",
      },
      {
        reading: 3.59,
        time: "2021-04-07T17:00:00.000Z",
      },
      {
        reading: 3.436,
        time: "2021-04-07T17:10:00.000Z",
      },
      {
        reading: 4.168,
        time: "2021-04-07T17:20:00.000Z",
      },
      {
        reading: 3.615,
        time: "2021-04-07T17:30:00.000Z",
      },
      {
        reading: 2.683,
        time: "2021-04-07T17:40:00.000Z",
      },
      {
        reading: 3.308,
        time: "2021-04-07T17:50:00.000Z",
      },
      {
        reading: 2.388,
        time: "2021-04-07T18:00:00.000Z",
      },
      {
        reading: 2.37,
        time: "2021-04-07T18:10:00.000Z",
      },
      {
        reading: 2.414,
        time: "2021-04-07T18:20:00.000Z",
      },
      {
        reading: 2.14,
        time: "2021-04-07T18:30:00.000Z",
      },
      {
        reading: 2.368,
        time: "2021-04-07T18:40:00.000Z",
      },
      {
        reading: 1.608,
        time: "2021-04-07T18:50:00.000Z",
      },
      {
        reading: 2.085,
        time: "2021-04-07T19:00:00.000Z",
      },
      {
        reading: 2.619,
        time: "2021-04-07T19:10:00.000Z",
      },
      {
        reading: 2.725,
        time: "2021-04-07T19:20:00.000Z",
      },
      {
        reading: 2.969,
        time: "2021-04-07T19:30:00.000Z",
      },
      {
        reading: 2.476,
        time: "2021-04-07T19:40:00.000Z",
      },
      {
        reading: 2.265,
        time: "2021-04-07T19:50:00.000Z",
      },
      {
        reading: 2.479,
        time: "2021-04-07T20:00:00.000Z",
      },
      {
        reading: 2.498,
        time: "2021-04-07T20:10:00.000Z",
      },
      {
        reading: 2.843,
        time: "2021-04-07T20:20:00.000Z",
      },
      {
        reading: 2.8,
        time: "2021-04-07T20:30:00.000Z",
      },
      {
        reading: 2.603,
        time: "2021-04-07T20:40:00.000Z",
      },
      {
        reading: 2.274,
        time: "2021-04-07T20:50:00.000Z",
      },
      {
        reading: 2.167,
        time: "2021-04-07T21:00:00.000Z",
      },
      {
        reading: 2.081,
        time: "2021-04-07T21:10:00.000Z",
      },
      {
        reading: 1.758,
        time: "2021-04-07T21:20:00.000Z",
      },
      {
        reading: 1.891,
        time: "2021-04-07T21:30:00.000Z",
      },
      {
        reading: 1.536,
        time: "2021-04-07T21:40:00.000Z",
      },
      {
        reading: 1.306,
        time: "2021-04-07T21:50:00.000Z",
      },
      {
        reading: 1.467,
        time: "2021-04-07T22:00:00.000Z",
      },
      {
        reading: 1.733,
        time: "2021-04-07T22:10:00.000Z",
      },
      {
        reading: 1.374,
        time: "2021-04-07T22:20:00.000Z",
      },
      {
        reading: 1.214,
        time: "2021-04-07T22:30:00.000Z",
      },
      {
        reading: 1.383,
        time: "2021-04-07T22:40:00.000Z",
      },
      {
        reading: 1.5,
        time: "2021-04-07T22:50:00.000Z",
      },
      {
        reading: 0.964,
        time: "2021-04-07T23:00:00.000Z",
      },
      {
        reading: 0.868,
        time: "2021-04-07T23:10:00.000Z",
      },
      {
        reading: 1.196,
        time: "2021-04-07T23:20:00.000Z",
      },
      {
        reading: 1.069,
        time: "2021-04-07T23:30:00.000Z",
      },
      {
        reading: 0.698,
        time: "2021-04-07T23:40:00.000Z",
      },
      {
        reading: 0.437,
        time: "2021-04-07T23:50:00.000Z",
      },
      {
        reading: 0.492,
        time: "2021-04-08T00:00:00.000Z",
      },
      {
        reading: 1.09,
        time: "2021-04-08T00:10:00.000Z",
      },
      {
        reading: 1.105,
        time: "2021-04-08T00:20:00.000Z",
      },
      {
        reading: 1.7,
        time: "2021-04-08T00:30:00.000Z",
      },
      {
        reading: 1.512,
        time: "2021-04-08T00:40:00.000Z",
      },
      {
        reading: 0.971,
        time: "2021-04-08T00:50:00.000Z",
      },
      {
        reading: 0.892,
        time: "2021-04-08T01:00:00.000Z",
      },
      {
        reading: 0.83,
        time: "2021-04-08T01:10:00.000Z",
      },
      {
        reading: 0.029,
        time: "2021-04-08T01:20:00.000Z",
      },
      {
        reading: 0.04,
        time: "2021-04-08T01:30:00.000Z",
      },
      {
        reading: 1.045,
        time: "2021-04-08T01:40:00.000Z",
      },
      {
        reading: 1.477,
        time: "2021-04-08T01:50:00.000Z",
      },
      {
        reading: 1.799,
        time: "2021-04-08T02:00:00.000Z",
      },
      {
        reading: 3.306,
        time: "2021-04-08T02:10:00.000Z",
      },
      {
        reading: 2.225,
        time: "2021-04-08T02:20:00.000Z",
      },
      {
        reading: 1.884,
        time: "2021-04-08T02:30:00.000Z",
      },
      {
        reading: 1.375,
        time: "2021-04-08T02:40:00.000Z",
      },
      {
        reading: 0.777,
        time: "2021-04-08T02:50:00.000Z",
      },
      {
        reading: 0.931,
        time: "2021-04-08T03:00:00.000Z",
      },
      {
        reading: 1.85,
        time: "2021-04-08T03:10:00.000Z",
      },
      {
        reading: 1.084,
        time: "2021-04-08T03:20:00.000Z",
      },
      {
        reading: 1.542,
        time: "2021-04-08T03:30:00.000Z",
      },
      {
        reading: 1.576,
        time: "2021-04-08T03:40:00.000Z",
      },
      {
        reading: 2.148,
        time: "2021-04-08T03:50:00.000Z",
      },
      {
        reading: 2.471,
        time: "2021-04-08T04:00:00.000Z",
      },
      {
        reading: 2.963,
        time: "2021-04-08T04:10:00.000Z",
      },
      {
        reading: 2.969,
        time: "2021-04-08T04:20:00.000Z",
      },
      {
        reading: 3.111,
        time: "2021-04-08T04:30:00.000Z",
      },
      {
        reading: 3.231,
        time: "2021-04-08T04:40:00.000Z",
      },
      {
        reading: 3.34,
        time: "2021-04-08T04:50:00.000Z",
      },
      {
        reading: 3.316,
        time: "2021-04-08T05:00:00.000Z",
      },
      {
        reading: 3.774,
        time: "2021-04-08T05:10:00.000Z",
      },
      {
        reading: 4.436,
        time: "2021-04-08T05:20:00.000Z",
      },
      {
        reading: 4.139,
        time: "2021-04-08T05:30:00.000Z",
      },
      {
        reading: 3.568,
        time: "2021-04-08T05:40:00.000Z",
      },
      {
        reading: 2.9,
        time: "2021-04-08T05:50:00.000Z",
      },
      {
        reading: 2.253,
        time: "2021-04-08T06:00:00.000Z",
      },
      {
        reading: 2.921,
        time: "2021-04-08T06:10:00.000Z",
      },
      {
        reading: 3.884,
        time: "2021-04-08T06:20:00.000Z",
      },
      {
        reading: 4.87,
        time: "2021-04-08T06:30:00.000Z",
      },
      {
        reading: 5.111,
        time: "2021-04-08T06:40:00.000Z",
      },
      {
        reading: 4.189,
        time: "2021-04-08T06:50:00.000Z",
      },
      {
        reading: 3.4,
        time: "2021-04-08T07:00:00.000Z",
      },
      {
        reading: 2.206,
        time: "2021-04-08T07:10:00.000Z",
      },
      {
        reading: 2.765,
        time: "2021-04-08T07:20:00.000Z",
      },
      {
        reading: 2.424,
        time: "2021-04-08T07:30:00.000Z",
      },
      {
        reading: 2.295,
        time: "2021-04-08T07:40:00.000Z",
      },
      {
        reading: 0.855,
        time: "2021-04-08T07:50:00.000Z",
      },
      {
        reading: 0.758,
        time: "2021-04-08T08:00:00.000Z",
      },
      {
        reading: 0.987,
        time: "2021-04-08T08:10:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-08T08:20:00.000Z",
      },
      {
        reading: 2.301,
        time: "2021-04-08T08:30:00.000Z",
      },
      {
        reading: 2.936,
        time: "2021-04-08T08:40:00.000Z",
      },
      {
        reading: 2.838,
        time: "2021-04-08T08:50:00.000Z",
      },
      {
        reading: 2.826,
        time: "2021-04-08T09:00:00.000Z",
      },
      {
        reading: 2.581,
        time: "2021-04-08T09:10:00.000Z",
      },
      {
        reading: 2.357,
        time: "2021-04-08T09:20:00.000Z",
      },
      {
        reading: 2.458,
        time: "2021-04-08T09:30:00.000Z",
      },
      {
        reading: 2.872,
        time: "2021-04-08T09:40:00.000Z",
      },
      {
        reading: 2.06,
        time: "2021-04-08T09:50:00.000Z",
      },
      {
        reading: 1.848,
        time: "2021-04-08T10:00:00.000Z",
      },
      {
        reading: 1.949,
        time: "2021-04-08T10:10:00.000Z",
      },
      {
        reading: 2.218,
        time: "2021-04-08T10:20:00.000Z",
      },
      {
        reading: 2.143,
        time: "2021-04-08T10:30:00.000Z",
      },
      {
        reading: 1.909,
        time: "2021-04-08T10:40:00.000Z",
      },
      {
        reading: 2.999,
        time: "2021-04-08T10:50:00.000Z",
      },
      {
        reading: 2.82,
        time: "2021-04-08T11:00:00.000Z",
      },
      {
        reading: 2.34,
        time: "2021-04-08T11:10:00.000Z",
      },
      {
        reading: 2.124,
        time: "2021-04-08T11:20:00.000Z",
      },
      {
        reading: 1.99,
        time: "2021-04-08T11:30:00.000Z",
      },
      {
        reading: 1.872,
        time: "2021-04-08T11:40:00.000Z",
      },
      {
        reading: 2.103,
        time: "2021-04-08T11:50:00.000Z",
      },
      {
        reading: 2.55,
        time: "2021-04-08T12:00:00.000Z",
      },
      {
        reading: 2.799,
        time: "2021-04-08T12:10:00.000Z",
      },
      {
        reading: 2.519,
        time: "2021-04-08T12:20:00.000Z",
      },
      {
        reading: 2.855,
        time: "2021-04-08T12:30:00.000Z",
      },
      {
        reading: 3.718,
        time: "2021-04-08T12:40:00.000Z",
      },
      {
        reading: 3.697,
        time: "2021-04-08T12:50:00.000Z",
      },
      {
        reading: 3.422,
        time: "2021-04-08T13:00:00.000Z",
      },
      {
        reading: 3.132,
        time: "2021-04-08T13:10:00.000Z",
      },
      {
        reading: 2.312,
        time: "2021-04-08T13:20:00.000Z",
      },
      {
        reading: 1.71,
        time: "2021-04-08T13:30:00.000Z",
      },
      {
        reading: 1.813,
        time: "2021-04-08T13:40:00.000Z",
      },
      {
        reading: 1.942,
        time: "2021-04-08T13:50:00.000Z",
      },
      {
        reading: 2.12,
        time: "2021-04-08T14:00:00.000Z",
      },
      {
        reading: 3.184,
        time: "2021-04-08T14:10:00.000Z",
      },
      {
        reading: 3.212,
        time: "2021-04-08T14:20:00.000Z",
      },
      {
        reading: 3.119,
        time: "2021-04-08T14:30:00.000Z",
      },
      {
        reading: 3.983,
        time: "2021-04-08T14:40:00.000Z",
      },
      {
        reading: 4.461,
        time: "2021-04-08T14:50:00.000Z",
      },
      {
        reading: 3.898,
        time: "2021-04-08T15:00:00.000Z",
      },
      {
        reading: 3.55,
        time: "2021-04-08T15:10:00.000Z",
      },
      {
        reading: 3.789,
        time: "2021-04-08T15:20:00.000Z",
      },
      {
        reading: 3.427,
        time: "2021-04-08T15:30:00.000Z",
      },
      {
        reading: 3.508,
        time: "2021-04-08T15:40:00.000Z",
      },
      {
        reading: 3.442,
        time: "2021-04-08T15:50:00.000Z",
      },
      {
        reading: 3.21,
        time: "2021-04-08T16:00:00.000Z",
      },
      {
        reading: 2.825,
        time: "2021-04-08T16:10:00.000Z",
      },
      {
        reading: 2.309,
        time: "2021-04-08T16:20:00.000Z",
      },
      {
        reading: 2.453,
        time: "2021-04-08T16:30:00.000Z",
      },
      {
        reading: 3.256,
        time: "2021-04-08T16:40:00.000Z",
      },
      {
        reading: 3.198,
        time: "2021-04-08T16:50:00.000Z",
      },
      {
        reading: 2.642,
        time: "2021-04-08T17:00:00.000Z",
      },
      {
        reading: 3.969,
        time: "2021-04-08T17:10:00.000Z",
      },
      {
        reading: 4.382,
        time: "2021-04-08T17:20:00.000Z",
      },
      {
        reading: 5.51,
        time: "2021-04-08T17:30:00.000Z",
      },
      {
        reading: 4.099,
        time: "2021-04-08T17:40:00.000Z",
      },
      {
        reading: 2.852,
        time: "2021-04-08T17:50:00.000Z",
      },
      {
        reading: 1.856,
        time: "2021-04-08T18:00:00.000Z",
      },
      {
        reading: 1.243,
        time: "2021-04-08T18:10:00.000Z",
      },
      {
        reading: 1.157,
        time: "2021-04-08T18:20:00.000Z",
      },
      {
        reading: 0.526,
        time: "2021-04-08T18:30:00.000Z",
      },
      {
        reading: 1.113,
        time: "2021-04-08T18:40:00.000Z",
      },
      {
        reading: 1.117,
        time: "2021-04-08T18:50:00.000Z",
      },
      {
        reading: 1.214,
        time: "2021-04-08T19:00:00.000Z",
      },
      {
        reading: 0.893,
        time: "2021-04-08T19:10:00.000Z",
      },
      {
        reading: 0.802,
        time: "2021-04-08T19:20:00.000Z",
      },
      {
        reading: 1.482,
        time: "2021-04-08T19:30:00.000Z",
      },
      {
        reading: 2.007,
        time: "2021-04-08T19:40:00.000Z",
      },
      {
        reading: 2.233,
        time: "2021-04-08T19:50:00.000Z",
      },
      {
        reading: 1.658,
        time: "2021-04-08T20:00:00.000Z",
      },
      {
        reading: 1.643,
        time: "2021-04-08T20:10:00.000Z",
      },
      {
        reading: 2.361,
        time: "2021-04-08T20:20:00.000Z",
      },
      {
        reading: 2.285,
        time: "2021-04-08T20:30:00.000Z",
      },
      {
        reading: 1.806,
        time: "2021-04-08T20:40:00.000Z",
      },
      {
        reading: 1.376,
        time: "2021-04-08T20:50:00.000Z",
      },
      {
        reading: 1.615,
        time: "2021-04-08T21:00:00.000Z",
      },
      {
        reading: 2,
        time: "2021-04-08T21:10:00.000Z",
      },
      {
        reading: 2.596,
        time: "2021-04-08T21:20:00.000Z",
      },
      {
        reading: 2.743,
        time: "2021-04-08T21:30:00.000Z",
      },
      {
        reading: 1.989,
        time: "2021-04-08T21:40:00.000Z",
      },
      {
        reading: 2.377,
        time: "2021-04-08T21:50:00.000Z",
      },
      {
        reading: 2.043,
        time: "2021-04-08T22:00:00.000Z",
      },
      {
        reading: 1.513,
        time: "2021-04-08T22:10:00.000Z",
      },
      {
        reading: 1.787,
        time: "2021-04-08T22:20:00.000Z",
      },
      {
        reading: 2.104,
        time: "2021-04-08T22:30:00.000Z",
      },
      {
        reading: 2.35,
        time: "2021-04-08T22:40:00.000Z",
      },
      {
        reading: 2.325,
        time: "2021-04-08T22:50:00.000Z",
      },
      {
        reading: 2.344,
        time: "2021-04-08T23:00:00.000Z",
      },
      {
        reading: 3.056,
        time: "2021-04-08T23:10:00.000Z",
      },
      {
        reading: 2.937,
        time: "2021-04-08T23:20:00.000Z",
      },
      {
        reading: 2.68,
        time: "2021-04-08T23:30:00.000Z",
      },
      {
        reading: 2.526,
        time: "2021-04-08T23:40:00.000Z",
      },
      {
        reading: 2.627,
        time: "2021-04-08T23:50:00.000Z",
      },
      {
        reading: 2.417,
        time: "2021-04-09T00:00:00.000Z",
      },
      {
        reading: 2.968,
        time: "2021-04-09T00:10:00.000Z",
      },
      {
        reading: 2.375,
        time: "2021-04-09T00:20:00.000Z",
      },
      {
        reading: 1.765,
        time: "2021-04-09T00:30:00.000Z",
      },
      {
        reading: 1.691,
        time: "2021-04-09T00:40:00.000Z",
      },
      {
        reading: 1.41,
        time: "2021-04-09T00:50:00.000Z",
      },
      {
        reading: 1.266,
        time: "2021-04-09T01:00:00.000Z",
      },
      {
        reading: 0.926,
        time: "2021-04-09T01:10:00.000Z",
      },
      {
        reading: 1.51,
        time: "2021-04-09T01:20:00.000Z",
      },
      {
        reading: 1.148,
        time: "2021-04-09T01:30:00.000Z",
      },
      {
        reading: 1.269,
        time: "2021-04-09T01:40:00.000Z",
      },
      {
        reading: 1.068,
        time: "2021-04-09T01:50:00.000Z",
      },
      {
        reading: 0.599,
        time: "2021-04-09T02:00:00.000Z",
      },
      {
        reading: 0.307,
        time: "2021-04-09T02:10:00.000Z",
      },
      {
        reading: 0.344,
        time: "2021-04-09T02:20:00.000Z",
      },
      {
        reading: 0.402,
        time: "2021-04-09T02:30:00.000Z",
      },
      {
        reading: 0.516,
        time: "2021-04-09T02:40:00.000Z",
      },
      {
        reading: 0.286,
        time: "2021-04-09T02:50:00.000Z",
      },
      {
        reading: 0.665,
        time: "2021-04-09T03:00:00.000Z",
      },
      {
        reading: 0.474,
        time: "2021-04-09T03:10:00.000Z",
      },
      {
        reading: 1.269,
        time: "2021-04-09T03:20:00.000Z",
      },
      {
        reading: 0.679,
        time: "2021-04-09T03:30:00.000Z",
      },
      {
        reading: 0.239,
        time: "2021-04-09T03:40:00.000Z",
      },
      {
        reading: 0.617,
        time: "2021-04-09T03:50:00.000Z",
      },
      {
        reading: 0.339,
        time: "2021-04-09T04:00:00.000Z",
      },
      {
        reading: 0.158,
        time: "2021-04-09T04:10:00.000Z",
      },
      {
        reading: 0.909,
        time: "2021-04-09T04:20:00.000Z",
      },
      {
        reading: 0.701,
        time: "2021-04-09T04:30:00.000Z",
      },
      {
        reading: 1.313,
        time: "2021-04-09T04:40:00.000Z",
      },
      {
        reading: 1.327,
        time: "2021-04-09T04:50:00.000Z",
      },
      {
        reading: 1.167,
        time: "2021-04-09T05:00:00.000Z",
      },
      {
        reading: 1.051,
        time: "2021-04-09T05:10:00.000Z",
      },
      {
        reading: 0.57,
        time: "2021-04-09T05:20:00.000Z",
      },
      {
        reading: 0.401,
        time: "2021-04-09T05:30:00.000Z",
      },
      {
        reading: 1.014,
        time: "2021-04-09T05:40:00.000Z",
      },
      {
        reading: 0.555,
        time: "2021-04-09T05:50:00.000Z",
      },
      {
        reading: 0.388,
        time: "2021-04-09T06:00:00.000Z",
      },
      {
        reading: 0.665,
        time: "2021-04-09T06:10:00.000Z",
      },
      {
        reading: 0.477,
        time: "2021-04-09T06:20:00.000Z",
      },
      {
        reading: 0.83,
        time: "2021-04-09T06:30:00.000Z",
      },
      {
        reading: 1.037,
        time: "2021-04-09T06:40:00.000Z",
      },
      {
        reading: 1.024,
        time: "2021-04-09T06:50:00.000Z",
      },
      {
        reading: 1.213,
        time: "2021-04-09T07:00:00.000Z",
      },
      {
        reading: 1.766,
        time: "2021-04-09T07:10:00.000Z",
      },
      {
        reading: 1.364,
        time: "2021-04-09T07:20:00.000Z",
      },
      {
        reading: 1.09,
        time: "2021-04-09T07:30:00.000Z",
      },
      {
        reading: 0.594,
        time: "2021-04-09T07:40:00.000Z",
      },
      {
        reading: 0.408,
        time: "2021-04-09T07:50:00.000Z",
      },
      {
        reading: 0.726,
        time: "2021-04-09T08:00:00.000Z",
      },
      {
        reading: 1.04,
        time: "2021-04-09T08:10:00.000Z",
      },
      {
        reading: 1.055,
        time: "2021-04-09T08:20:00.000Z",
      },
      {
        reading: 0.84,
        time: "2021-04-09T08:30:00.000Z",
      },
      {
        reading: 1.494,
        time: "2021-04-09T08:40:00.000Z",
      },
      {
        reading: 1.081,
        time: "2021-04-09T08:50:00.000Z",
      },
      {
        reading: 1.254,
        time: "2021-04-09T09:00:00.000Z",
      },
      {
        reading: 1.076,
        time: "2021-04-09T09:10:00.000Z",
      },
      {
        reading: 1.349,
        time: "2021-04-09T09:20:00.000Z",
      },
      {
        reading: 1.726,
        time: "2021-04-09T09:30:00.000Z",
      },
      {
        reading: 1.944,
        time: "2021-04-09T09:40:00.000Z",
      },
      {
        reading: 1.113,
        time: "2021-04-09T09:50:00.000Z",
      },
      {
        reading: 0.915,
        time: "2021-04-09T10:00:00.000Z",
      },
      {
        reading: 0.895,
        time: "2021-04-09T10:10:00.000Z",
      },
      {
        reading: 1.229,
        time: "2021-04-09T10:20:00.000Z",
      },
      {
        reading: 1.621,
        time: "2021-04-09T10:30:00.000Z",
      },
      {
        reading: 1.505,
        time: "2021-04-09T10:40:00.000Z",
      },
      {
        reading: 1.375,
        time: "2021-04-09T10:50:00.000Z",
      },
      {
        reading: 1.696,
        time: "2021-04-09T11:00:00.000Z",
      },
      {
        reading: 1.525,
        time: "2021-04-09T11:10:00.000Z",
      },
      {
        reading: 1.578,
        time: "2021-04-09T11:20:00.000Z",
      },
      {
        reading: 1.571,
        time: "2021-04-09T11:30:00.000Z",
      },
      {
        reading: 1.563,
        time: "2021-04-09T11:40:00.000Z",
      },
      {
        reading: 0.938,
        time: "2021-04-09T11:50:00.000Z",
      },
      {
        reading: 0.938,
        time: "2021-04-09T12:00:00.000Z",
      },
      {
        reading: 0.773,
        time: "2021-04-09T12:10:00.000Z",
      },
      {
        reading: 0.863,
        time: "2021-04-09T12:20:00.000Z",
      },
      {
        reading: 1.118,
        time: "2021-04-09T12:30:00.000Z",
      },
      {
        reading: 1.406,
        time: "2021-04-09T12:40:00.000Z",
      },
      {
        reading: 1.569,
        time: "2021-04-09T12:50:00.000Z",
      },
      {
        reading: 1.132,
        time: "2021-04-09T13:00:00.000Z",
      },
      {
        reading: 1.129,
        time: "2021-04-09T13:10:00.000Z",
      },
      {
        reading: 1.2,
        time: "2021-04-09T13:20:00.000Z",
      },
      {
        reading: 1.652,
        time: "2021-04-09T13:30:00.000Z",
      },
      {
        reading: 1.624,
        time: "2021-04-09T13:40:00.000Z",
      },
      {
        reading: 1.811,
        time: "2021-04-09T13:50:00.000Z",
      },
      {
        reading: 1.499,
        time: "2021-04-09T14:00:00.000Z",
      },
      {
        reading: 1.457,
        time: "2021-04-09T14:10:00.000Z",
      },
      {
        reading: 1.665,
        time: "2021-04-09T14:20:00.000Z",
      },
      {
        reading: 2.054,
        time: "2021-04-09T14:30:00.000Z",
      },
      {
        reading: 2.165,
        time: "2021-04-09T14:40:00.000Z",
      },
      {
        reading: 2.715,
        time: "2021-04-09T14:50:00.000Z",
      },
      {
        reading: 2.847,
        time: "2021-04-09T15:00:00.000Z",
      },
      {
        reading: 3.098,
        time: "2021-04-09T15:10:00.000Z",
      },
      {
        reading: 3.179,
        time: "2021-04-09T15:20:00.000Z",
      },
      {
        reading: 3.28,
        time: "2021-04-09T15:30:00.000Z",
      },
      {
        reading: 3.451,
        time: "2021-04-09T15:40:00.000Z",
      },
      {
        reading: 3.247,
        time: "2021-04-09T15:50:00.000Z",
      },
      {
        reading: 3.377,
        time: "2021-04-09T16:00:00.000Z",
      },
      {
        reading: 3.184,
        time: "2021-04-09T16:10:00.000Z",
      },
      {
        reading: 3.017,
        time: "2021-04-09T16:20:00.000Z",
      },
      {
        reading: 3.214,
        time: "2021-04-09T16:30:00.000Z",
      },
      {
        reading: 2.981,
        time: "2021-04-09T16:40:00.000Z",
      },
      {
        reading: 2.981,
        time: "2021-04-09T16:50:00.000Z",
      },
      {
        reading: 3.798,
        time: "2021-04-09T17:00:00.000Z",
      },
      {
        reading: 4.368,
        time: "2021-04-09T17:10:00.000Z",
      },
      {
        reading: 4.421,
        time: "2021-04-09T17:20:00.000Z",
      },
      {
        reading: 4.179,
        time: "2021-04-09T17:30:00.000Z",
      },
      {
        reading: 4.379,
        time: "2021-04-09T17:40:00.000Z",
      },
      {
        reading: 4.674,
        time: "2021-04-09T17:50:00.000Z",
      },
      {
        reading: 4.512,
        time: "2021-04-09T18:00:00.000Z",
      },
    ].map((ts) => ({ reading: ts.reading, time: new Date(ts.time) })),
    unit: "m/s",
  },
  gust: {
    name: "Wind Gust",
    timeSeries: [
      {
        reading: 7.37,
        time: "2021-04-02T19:30:00.000Z",
      },
      {
        reading: 8.31,
        time: "2021-04-02T19:40:00.000Z",
      },
      {
        reading: 7.879,
        time: "2021-04-02T19:50:00.000Z",
      },
      {
        reading: 9.72,
        time: "2021-04-02T20:00:00.000Z",
      },
      {
        reading: 8.47,
        time: "2021-04-02T20:10:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-02T20:20:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-02T20:30:00.000Z",
      },
      {
        reading: 7.683,
        time: "2021-04-02T20:40:00.000Z",
      },
      {
        reading: 7.409,
        time: "2021-04-02T20:50:00.000Z",
      },
      {
        reading: 7.84,
        time: "2021-04-02T21:00:00.000Z",
      },
      {
        reading: 7.997,
        time: "2021-04-02T21:10:00.000Z",
      },
      {
        reading: 7.762,
        time: "2021-04-02T21:20:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-02T21:30:00.000Z",
      },
      {
        reading: 8.27,
        time: "2021-04-02T21:40:00.000Z",
      },
      {
        reading: 8.31,
        time: "2021-04-02T21:50:00.000Z",
      },
      {
        reading: 9.53,
        time: "2021-04-02T22:00:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-02T22:10:00.000Z",
      },
      {
        reading: 7.997,
        time: "2021-04-02T22:20:00.000Z",
      },
      {
        reading: 8.23,
        time: "2021-04-02T22:30:00.000Z",
      },
      {
        reading: 8.23,
        time: "2021-04-02T22:40:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-02T22:50:00.000Z",
      },
      {
        reading: 7.762,
        time: "2021-04-02T23:00:00.000Z",
      },
      {
        reading: 7.37,
        time: "2021-04-02T23:10:00.000Z",
      },
      {
        reading: 6.115,
        time: "2021-04-02T23:20:00.000Z",
      },
      {
        reading: 6.468,
        time: "2021-04-02T23:30:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-02T23:40:00.000Z",
      },
      {
        reading: 7.879,
        time: "2021-04-02T23:50:00.000Z",
      },
      {
        reading: 11.13,
        time: "2021-04-03T00:00:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-03T00:10:00.000Z",
      },
      {
        reading: 9.96,
        time: "2021-04-03T00:20:00.000Z",
      },
      {
        reading: 11.21,
        time: "2021-04-03T00:30:00.000Z",
      },
      {
        reading: 12,
        time: "2021-04-03T00:40:00.000Z",
      },
      {
        reading: 11.21,
        time: "2021-04-03T00:50:00.000Z",
      },
      {
        reading: 12.19,
        time: "2021-04-03T01:00:00.000Z",
      },
      {
        reading: 10.7,
        time: "2021-04-03T01:10:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-03T01:20:00.000Z",
      },
      {
        reading: 10.62,
        time: "2021-04-03T01:30:00.000Z",
      },
      {
        reading: 10,
        time: "2021-04-03T01:40:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-03T01:50:00.000Z",
      },
      {
        reading: 10.35,
        time: "2021-04-03T02:00:00.000Z",
      },
      {
        reading: 10.98,
        time: "2021-04-03T02:10:00.000Z",
      },
      {
        reading: 10,
        time: "2021-04-03T02:20:00.000Z",
      },
      {
        reading: 10.9,
        time: "2021-04-03T02:30:00.000Z",
      },
      {
        reading: 9.8,
        time: "2021-04-03T02:40:00.000Z",
      },
      {
        reading: 9.53,
        time: "2021-04-03T02:50:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-03T03:00:00.000Z",
      },
      {
        reading: 10,
        time: "2021-04-03T03:10:00.000Z",
      },
      {
        reading: 8.94,
        time: "2021-04-03T03:20:00.000Z",
      },
      {
        reading: 8.74,
        time: "2021-04-03T03:30:00.000Z",
      },
      {
        reading: 9.29,
        time: "2021-04-03T03:40:00.000Z",
      },
      {
        reading: 9.25,
        time: "2021-04-03T03:50:00.000Z",
      },
      {
        reading: 10.23,
        time: "2021-04-03T04:00:00.000Z",
      },
      {
        reading: 10.47,
        time: "2021-04-03T04:10:00.000Z",
      },
      {
        reading: 8.9,
        time: "2021-04-03T04:20:00.000Z",
      },
      {
        reading: 8.04,
        time: "2021-04-03T04:30:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-03T04:40:00.000Z",
      },
      {
        reading: 7.997,
        time: "2021-04-03T04:50:00.000Z",
      },
      {
        reading: 7.566,
        time: "2021-04-03T05:00:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-03T05:10:00.000Z",
      },
      {
        reading: 8.31,
        time: "2021-04-03T05:20:00.000Z",
      },
      {
        reading: 8.35,
        time: "2021-04-03T05:30:00.000Z",
      },
      {
        reading: 8.98,
        time: "2021-04-03T05:40:00.000Z",
      },
      {
        reading: 8.86,
        time: "2021-04-03T05:50:00.000Z",
      },
      {
        reading: 9.33,
        time: "2021-04-03T06:00:00.000Z",
      },
      {
        reading: 9.09,
        time: "2021-04-03T06:10:00.000Z",
      },
      {
        reading: 9.76,
        time: "2021-04-03T06:20:00.000Z",
      },
      {
        reading: 9.56,
        time: "2021-04-03T06:30:00.000Z",
      },
      {
        reading: 9.45,
        time: "2021-04-03T06:40:00.000Z",
      },
      {
        reading: 9.29,
        time: "2021-04-03T06:50:00.000Z",
      },
      {
        reading: 9.29,
        time: "2021-04-03T07:00:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-03T07:10:00.000Z",
      },
      {
        reading: 8.74,
        time: "2021-04-03T07:20:00.000Z",
      },
      {
        reading: 6.978,
        time: "2021-04-03T07:30:00.000Z",
      },
      {
        reading: 7.566,
        time: "2021-04-03T07:40:00.000Z",
      },
      {
        reading: 6.782,
        time: "2021-04-03T07:50:00.000Z",
      },
      {
        reading: 7.291,
        time: "2021-04-03T08:00:00.000Z",
      },
      {
        reading: 6.821,
        time: "2021-04-03T08:10:00.000Z",
      },
      {
        reading: 7.33,
        time: "2021-04-03T08:20:00.000Z",
      },
      {
        reading: 7.134,
        time: "2021-04-03T08:30:00.000Z",
      },
      {
        reading: 7.605,
        time: "2021-04-03T08:40:00.000Z",
      },
      {
        reading: 7.683,
        time: "2021-04-03T08:50:00.000Z",
      },
      {
        reading: 7.056,
        time: "2021-04-03T09:00:00.000Z",
      },
      {
        reading: 7.918,
        time: "2021-04-03T09:10:00.000Z",
      },
      {
        reading: 8.78,
        time: "2021-04-03T09:20:00.000Z",
      },
      {
        reading: 8.43,
        time: "2021-04-03T09:30:00.000Z",
      },
      {
        reading: 8.11,
        time: "2021-04-03T09:40:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-03T09:50:00.000Z",
      },
      {
        reading: 7.84,
        time: "2021-04-03T10:00:00.000Z",
      },
      {
        reading: 8.08,
        time: "2021-04-03T10:10:00.000Z",
      },
      {
        reading: 6.429,
        time: "2021-04-03T10:20:00.000Z",
      },
      {
        reading: 6.037,
        time: "2021-04-03T10:30:00.000Z",
      },
      {
        reading: 6.546,
        time: "2021-04-03T10:40:00.000Z",
      },
      {
        reading: 6.546,
        time: "2021-04-03T10:50:00.000Z",
      },
      {
        reading: 6.546,
        time: "2021-04-03T11:00:00.000Z",
      },
      {
        reading: 5.645,
        time: "2021-04-03T11:10:00.000Z",
      },
      {
        reading: 5.449,
        time: "2021-04-03T11:20:00.000Z",
      },
      {
        reading: 6.194,
        time: "2021-04-03T11:30:00.000Z",
      },
      {
        reading: 6.35,
        time: "2021-04-03T11:40:00.000Z",
      },
      {
        reading: 6.35,
        time: "2021-04-03T11:50:00.000Z",
      },
      {
        reading: 6.194,
        time: "2021-04-03T12:00:00.000Z",
      },
      {
        reading: 6.899,
        time: "2021-04-03T12:10:00.000Z",
      },
      {
        reading: 6.664,
        time: "2021-04-03T12:20:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-03T12:30:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-03T12:40:00.000Z",
      },
      {
        reading: 5.449,
        time: "2021-04-03T12:50:00.000Z",
      },
      {
        reading: 6.115,
        time: "2021-04-03T13:00:00.000Z",
      },
      {
        reading: 6.233,
        time: "2021-04-03T13:10:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-03T13:20:00.000Z",
      },
      {
        reading: 5.566,
        time: "2021-04-03T13:30:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-03T13:40:00.000Z",
      },
      {
        reading: 4.861,
        time: "2021-04-03T13:50:00.000Z",
      },
      {
        reading: 4.978,
        time: "2021-04-03T14:00:00.000Z",
      },
      {
        reading: 4.939,
        time: "2021-04-03T14:10:00.000Z",
      },
      {
        reading: 4.743,
        time: "2021-04-03T14:20:00.000Z",
      },
      {
        reading: 4.234,
        time: "2021-04-03T14:30:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-03T14:40:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-03T14:50:00.000Z",
      },
      {
        reading: 3.41,
        time: "2021-04-03T15:00:00.000Z",
      },
      {
        reading: 3.41,
        time: "2021-04-03T15:10:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-03T15:20:00.000Z",
      },
      {
        reading: 3.254,
        time: "2021-04-03T15:30:00.000Z",
      },
      {
        reading: 3.254,
        time: "2021-04-03T15:40:00.000Z",
      },
      {
        reading: 2.901,
        time: "2021-04-03T15:50:00.000Z",
      },
      {
        reading: 2.862,
        time: "2021-04-03T16:00:00.000Z",
      },
      {
        reading: 1.725,
        time: "2021-04-03T16:10:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-03T16:20:00.000Z",
      },
      {
        reading: 2.117,
        time: "2021-04-03T16:30:00.000Z",
      },
      {
        reading: 3.528,
        time: "2021-04-03T16:40:00.000Z",
      },
      {
        reading: 5.174,
        time: "2021-04-03T16:50:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-03T17:00:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-03T17:10:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-03T17:20:00.000Z",
      },
      {
        reading: 5.253,
        time: "2021-04-03T17:30:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-03T17:40:00.000Z",
      },
      {
        reading: 4.547,
        time: "2021-04-03T17:50:00.000Z",
      },
      {
        reading: 5.723,
        time: "2021-04-03T18:00:00.000Z",
      },
      {
        reading: 5.802,
        time: "2021-04-03T18:10:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-03T18:20:00.000Z",
      },
      {
        reading: 5.527,
        time: "2021-04-03T18:30:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-03T18:40:00.000Z",
      },
      {
        reading: 5.331,
        time: "2021-04-03T18:50:00.000Z",
      },
      {
        reading: 5.527,
        time: "2021-04-03T19:00:00.000Z",
      },
      {
        reading: 5.88,
        time: "2021-04-03T19:10:00.000Z",
      },
      {
        reading: 6.311,
        time: "2021-04-03T19:20:00.000Z",
      },
      {
        reading: 6.35,
        time: "2021-04-03T19:30:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-03T19:40:00.000Z",
      },
      {
        reading: 5.723,
        time: "2021-04-03T19:50:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-03T20:00:00.000Z",
      },
      {
        reading: 5.841,
        time: "2021-04-03T20:10:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-03T20:20:00.000Z",
      },
      {
        reading: 5.919,
        time: "2021-04-03T20:30:00.000Z",
      },
      {
        reading: 6.625,
        time: "2021-04-03T20:40:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-03T20:50:00.000Z",
      },
      {
        reading: 6.311,
        time: "2021-04-03T21:00:00.000Z",
      },
      {
        reading: 6.468,
        time: "2021-04-03T21:10:00.000Z",
      },
      {
        reading: 5.723,
        time: "2021-04-03T21:20:00.000Z",
      },
      {
        reading: 5.919,
        time: "2021-04-03T21:30:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-03T21:40:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-03T21:50:00.000Z",
      },
      {
        reading: 4.782,
        time: "2021-04-03T22:00:00.000Z",
      },
      {
        reading: 4.861,
        time: "2021-04-03T22:10:00.000Z",
      },
      {
        reading: 4.312,
        time: "2021-04-03T22:20:00.000Z",
      },
      {
        reading: 4.155,
        time: "2021-04-03T22:30:00.000Z",
      },
      {
        reading: 3.959,
        time: "2021-04-03T22:40:00.000Z",
      },
      {
        reading: 3.606,
        time: "2021-04-03T22:50:00.000Z",
      },
      {
        reading: 3.097,
        time: "2021-04-03T23:00:00.000Z",
      },
      {
        reading: 2.509,
        time: "2021-04-03T23:10:00.000Z",
      },
      {
        reading: 2.117,
        time: "2021-04-03T23:20:00.000Z",
      },
      {
        reading: 1.686,
        time: "2021-04-03T23:30:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-03T23:40:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-03T23:50:00.000Z",
      },
      {
        reading: 3.097,
        time: "2021-04-04T00:00:00.000Z",
      },
      {
        reading: 3.92,
        time: "2021-04-04T00:10:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-04T00:20:00.000Z",
      },
      {
        reading: 5.488,
        time: "2021-04-04T00:30:00.000Z",
      },
      {
        reading: 5.88,
        time: "2021-04-04T00:40:00.000Z",
      },
      {
        reading: 8.23,
        time: "2021-04-04T00:50:00.000Z",
      },
      {
        reading: 8.27,
        time: "2021-04-04T01:00:00.000Z",
      },
      {
        reading: 7.801,
        time: "2021-04-04T01:10:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-04T01:20:00.000Z",
      },
      {
        reading: 8.47,
        time: "2021-04-04T01:30:00.000Z",
      },
      {
        reading: 7.84,
        time: "2021-04-04T01:40:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-04T01:50:00.000Z",
      },
      {
        reading: 7.409,
        time: "2021-04-04T02:00:00.000Z",
      },
      {
        reading: 7.997,
        time: "2021-04-04T02:10:00.000Z",
      },
      {
        reading: 6.39,
        time: "2021-04-04T02:20:00.000Z",
      },
      {
        reading: 7.017,
        time: "2021-04-04T02:30:00.000Z",
      },
      {
        reading: 7.33,
        time: "2021-04-04T02:40:00.000Z",
      },
      {
        reading: 7.409,
        time: "2021-04-04T02:50:00.000Z",
      },
      {
        reading: 7.37,
        time: "2021-04-04T03:00:00.000Z",
      },
      {
        reading: 8.78,
        time: "2021-04-04T03:10:00.000Z",
      },
      {
        reading: 7.762,
        time: "2021-04-04T03:20:00.000Z",
      },
      {
        reading: 8.27,
        time: "2021-04-04T03:30:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-04T03:40:00.000Z",
      },
      {
        reading: 8.39,
        time: "2021-04-04T03:50:00.000Z",
      },
      {
        reading: 8.51,
        time: "2021-04-04T04:00:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-04T04:10:00.000Z",
      },
      {
        reading: 7.605,
        time: "2021-04-04T04:20:00.000Z",
      },
      {
        reading: 8.11,
        time: "2021-04-04T04:30:00.000Z",
      },
      {
        reading: 7.918,
        time: "2021-04-04T04:40:00.000Z",
      },
      {
        reading: 7.291,
        time: "2021-04-04T04:50:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-04T05:00:00.000Z",
      },
      {
        reading: 8.27,
        time: "2021-04-04T05:10:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-04T05:20:00.000Z",
      },
      {
        reading: 6.899,
        time: "2021-04-04T05:30:00.000Z",
      },
      {
        reading: 6.86,
        time: "2021-04-04T05:40:00.000Z",
      },
      {
        reading: 6.272,
        time: "2021-04-04T05:50:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-04T06:00:00.000Z",
      },
      {
        reading: 6.468,
        time: "2021-04-04T06:10:00.000Z",
      },
      {
        reading: 5.762,
        time: "2021-04-04T06:20:00.000Z",
      },
      {
        reading: 5.645,
        time: "2021-04-04T06:30:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-04T06:40:00.000Z",
      },
      {
        reading: 5.41,
        time: "2021-04-04T06:50:00.000Z",
      },
      {
        reading: 5.253,
        time: "2021-04-04T07:00:00.000Z",
      },
      {
        reading: 5.527,
        time: "2021-04-04T07:10:00.000Z",
      },
      {
        reading: 4.939,
        time: "2021-04-04T07:20:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-04T07:30:00.000Z",
      },
      {
        reading: 5.841,
        time: "2021-04-04T07:40:00.000Z",
      },
      {
        reading: 5.527,
        time: "2021-04-04T07:50:00.000Z",
      },
      {
        reading: 4.822,
        time: "2021-04-04T08:00:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-04T08:10:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-04T08:20:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-04T08:30:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-04T08:40:00.000Z",
      },
      {
        reading: 4.116,
        time: "2021-04-04T08:50:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-04T09:00:00.000Z",
      },
      {
        reading: 4.194,
        time: "2021-04-04T09:10:00.000Z",
      },
      {
        reading: 4.116,
        time: "2021-04-04T09:20:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-04T09:30:00.000Z",
      },
      {
        reading: 4.312,
        time: "2021-04-04T09:40:00.000Z",
      },
      {
        reading: 4.194,
        time: "2021-04-04T09:50:00.000Z",
      },
      {
        reading: 4.508,
        time: "2021-04-04T10:00:00.000Z",
      },
      {
        reading: 4.978,
        time: "2021-04-04T10:10:00.000Z",
      },
      {
        reading: 3.332,
        time: "2021-04-04T10:20:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-04T10:30:00.000Z",
      },
      {
        reading: 6.978,
        time: "2021-04-04T10:40:00.000Z",
      },
      {
        reading: 6.899,
        time: "2021-04-04T10:50:00.000Z",
      },
      {
        reading: 7.174,
        time: "2021-04-04T11:00:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-04T11:10:00.000Z",
      },
      {
        reading: 7.33,
        time: "2021-04-04T11:20:00.000Z",
      },
      {
        reading: 7.291,
        time: "2021-04-04T11:30:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-04T11:40:00.000Z",
      },
      {
        reading: 8.39,
        time: "2021-04-04T11:50:00.000Z",
      },
      {
        reading: 8.55,
        time: "2021-04-04T12:00:00.000Z",
      },
      {
        reading: 9.33,
        time: "2021-04-04T12:10:00.000Z",
      },
      {
        reading: 9.56,
        time: "2021-04-04T12:20:00.000Z",
      },
      {
        reading: 9.13,
        time: "2021-04-04T12:30:00.000Z",
      },
      {
        reading: 8.19,
        time: "2021-04-04T12:40:00.000Z",
      },
      {
        reading: 8.47,
        time: "2021-04-04T12:50:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-04T13:00:00.000Z",
      },
      {
        reading: 9.17,
        time: "2021-04-04T13:10:00.000Z",
      },
      {
        reading: 7.762,
        time: "2021-04-04T13:20:00.000Z",
      },
      {
        reading: 7.918,
        time: "2021-04-04T13:30:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-04T13:40:00.000Z",
      },
      {
        reading: 7.801,
        time: "2021-04-04T13:50:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-04T14:00:00.000Z",
      },
      {
        reading: 7.37,
        time: "2021-04-04T14:10:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-04T14:20:00.000Z",
      },
      {
        reading: 8.74,
        time: "2021-04-04T14:30:00.000Z",
      },
      {
        reading: 8.86,
        time: "2021-04-04T14:40:00.000Z",
      },
      {
        reading: 8.23,
        time: "2021-04-04T14:50:00.000Z",
      },
      {
        reading: 7.997,
        time: "2021-04-04T15:00:00.000Z",
      },
      {
        reading: 8.35,
        time: "2021-04-04T15:10:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-04T15:20:00.000Z",
      },
      {
        reading: 9.17,
        time: "2021-04-04T15:30:00.000Z",
      },
      {
        reading: 10.98,
        time: "2021-04-04T15:40:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-04T15:50:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-04T16:00:00.000Z",
      },
      {
        reading: 10.35,
        time: "2021-04-04T16:10:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-04T16:20:00.000Z",
      },
      {
        reading: 12.58,
        time: "2021-04-04T16:30:00.000Z",
      },
      {
        reading: 12.54,
        time: "2021-04-04T16:40:00.000Z",
      },
      {
        reading: 12.74,
        time: "2021-04-04T16:50:00.000Z",
      },
      {
        reading: 12.39,
        time: "2021-04-04T17:00:00.000Z",
      },
      {
        reading: 11.56,
        time: "2021-04-04T17:10:00.000Z",
      },
      {
        reading: 13.09,
        time: "2021-04-04T17:20:00.000Z",
      },
      {
        reading: 14.31,
        time: "2021-04-04T17:30:00.000Z",
      },
      {
        reading: 13.05,
        time: "2021-04-04T17:40:00.000Z",
      },
      {
        reading: 11.84,
        time: "2021-04-04T17:50:00.000Z",
      },
      {
        reading: 13.45,
        time: "2021-04-04T18:00:00.000Z",
      },
      {
        reading: 14.15,
        time: "2021-04-04T18:10:00.000Z",
      },
      {
        reading: 12.78,
        time: "2021-04-04T18:20:00.000Z",
      },
      {
        reading: 16.07,
        time: "2021-04-04T18:30:00.000Z",
      },
      {
        reading: 13.84,
        time: "2021-04-04T18:40:00.000Z",
      },
      {
        reading: 12.98,
        time: "2021-04-04T18:50:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-04T19:00:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-04T19:10:00.000Z",
      },
      {
        reading: 13.01,
        time: "2021-04-04T19:20:00.000Z",
      },
      {
        reading: 14.74,
        time: "2021-04-04T19:30:00.000Z",
      },
      {
        reading: 12.35,
        time: "2021-04-04T19:40:00.000Z",
      },
      {
        reading: 13.88,
        time: "2021-04-04T19:50:00.000Z",
      },
      {
        reading: 14.7,
        time: "2021-04-04T20:00:00.000Z",
      },
      {
        reading: 13.68,
        time: "2021-04-04T20:10:00.000Z",
      },
      {
        reading: 13.6,
        time: "2021-04-04T20:20:00.000Z",
      },
      {
        reading: 15.64,
        time: "2021-04-04T20:30:00.000Z",
      },
      {
        reading: 15.17,
        time: "2021-04-04T20:40:00.000Z",
      },
      {
        reading: 10.98,
        time: "2021-04-04T20:50:00.000Z",
      },
      {
        reading: 12.03,
        time: "2021-04-04T21:00:00.000Z",
      },
      {
        reading: 13.25,
        time: "2021-04-04T21:10:00.000Z",
      },
      {
        reading: 12.66,
        time: "2021-04-04T21:20:00.000Z",
      },
      {
        reading: 12.74,
        time: "2021-04-04T21:30:00.000Z",
      },
      {
        reading: 14.35,
        time: "2021-04-04T21:40:00.000Z",
      },
      {
        reading: 13.96,
        time: "2021-04-04T21:50:00.000Z",
      },
      {
        reading: 13.64,
        time: "2021-04-04T22:00:00.000Z",
      },
      {
        reading: 15.33,
        time: "2021-04-04T22:10:00.000Z",
      },
      {
        reading: 13.72,
        time: "2021-04-04T22:20:00.000Z",
      },
      {
        reading: 12.98,
        time: "2021-04-04T22:30:00.000Z",
      },
      {
        reading: 14.7,
        time: "2021-04-04T22:40:00.000Z",
      },
      {
        reading: 18.11,
        time: "2021-04-04T22:50:00.000Z",
      },
      {
        reading: 16.23,
        time: "2021-04-04T23:00:00.000Z",
      },
      {
        reading: 17.52,
        time: "2021-04-04T23:10:00.000Z",
      },
      {
        reading: 18.23,
        time: "2021-04-04T23:20:00.000Z",
      },
      {
        reading: 14.54,
        time: "2021-04-04T23:30:00.000Z",
      },
      {
        reading: 15.05,
        time: "2021-04-04T23:40:00.000Z",
      },
      {
        reading: 16.27,
        time: "2021-04-04T23:50:00.000Z",
      },
      {
        reading: 15.21,
        time: "2021-04-05T00:00:00.000Z",
      },
      {
        reading: 16.9,
        time: "2021-04-05T00:10:00.000Z",
      },
      {
        reading: 11.68,
        time: "2021-04-05T00:20:00.000Z",
      },
      {
        reading: 12.86,
        time: "2021-04-05T00:30:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-05T00:40:00.000Z",
      },
      {
        reading: 13.72,
        time: "2021-04-05T00:50:00.000Z",
      },
      {
        reading: 14.39,
        time: "2021-04-05T01:00:00.000Z",
      },
      {
        reading: 16.54,
        time: "2021-04-05T01:10:00.000Z",
      },
      {
        reading: 16.78,
        time: "2021-04-05T01:20:00.000Z",
      },
      {
        reading: 17.52,
        time: "2021-04-05T01:30:00.000Z",
      },
      {
        reading: 18.97,
        time: "2021-04-05T01:40:00.000Z",
      },
      {
        reading: 17.6,
        time: "2021-04-05T01:50:00.000Z",
      },
      {
        reading: 17.44,
        time: "2021-04-05T02:00:00.000Z",
      },
      {
        reading: 17.95,
        time: "2021-04-05T02:10:00.000Z",
      },
      {
        reading: 14.7,
        time: "2021-04-05T02:20:00.000Z",
      },
      {
        reading: 14.54,
        time: "2021-04-05T02:30:00.000Z",
      },
      {
        reading: 14.86,
        time: "2021-04-05T02:40:00.000Z",
      },
      {
        reading: 13.99,
        time: "2021-04-05T02:50:00.000Z",
      },
      {
        reading: 14.43,
        time: "2021-04-05T03:00:00.000Z",
      },
      {
        reading: 13.52,
        time: "2021-04-05T03:10:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-05T03:20:00.000Z",
      },
      {
        reading: 12.39,
        time: "2021-04-05T03:30:00.000Z",
      },
      {
        reading: 11.49,
        time: "2021-04-05T03:40:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-05T03:50:00.000Z",
      },
      {
        reading: 12.78,
        time: "2021-04-05T04:00:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T04:10:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T04:20:00.000Z",
      },
      {
        reading: 12.11,
        time: "2021-04-05T04:30:00.000Z",
      },
      {
        reading: 11.13,
        time: "2021-04-05T04:40:00.000Z",
      },
      {
        reading: 12.58,
        time: "2021-04-05T04:50:00.000Z",
      },
      {
        reading: 13.48,
        time: "2021-04-05T05:00:00.000Z",
      },
      {
        reading: 13.13,
        time: "2021-04-05T05:10:00.000Z",
      },
      {
        reading: 13.29,
        time: "2021-04-05T05:20:00.000Z",
      },
      {
        reading: 13.48,
        time: "2021-04-05T05:30:00.000Z",
      },
      {
        reading: 12.39,
        time: "2021-04-05T05:40:00.000Z",
      },
      {
        reading: 12.54,
        time: "2021-04-05T05:50:00.000Z",
      },
      {
        reading: 12.86,
        time: "2021-04-05T06:00:00.000Z",
      },
      {
        reading: 12.47,
        time: "2021-04-05T06:10:00.000Z",
      },
      {
        reading: 12.43,
        time: "2021-04-05T06:20:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-05T06:30:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T06:40:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-05T06:50:00.000Z",
      },
      {
        reading: 12.78,
        time: "2021-04-05T07:00:00.000Z",
      },
      {
        reading: 11.88,
        time: "2021-04-05T07:10:00.000Z",
      },
      {
        reading: 11.88,
        time: "2021-04-05T07:20:00.000Z",
      },
      {
        reading: 11.05,
        time: "2021-04-05T07:30:00.000Z",
      },
      {
        reading: 11.25,
        time: "2021-04-05T07:40:00.000Z",
      },
      {
        reading: 11.6,
        time: "2021-04-05T07:50:00.000Z",
      },
      {
        reading: 11.56,
        time: "2021-04-05T08:00:00.000Z",
      },
      {
        reading: 12,
        time: "2021-04-05T08:10:00.000Z",
      },
      {
        reading: 12.31,
        time: "2021-04-05T08:20:00.000Z",
      },
      {
        reading: 11.72,
        time: "2021-04-05T08:30:00.000Z",
      },
      {
        reading: 11.76,
        time: "2021-04-05T08:40:00.000Z",
      },
      {
        reading: 11.41,
        time: "2021-04-05T08:50:00.000Z",
      },
      {
        reading: 11.52,
        time: "2021-04-05T09:00:00.000Z",
      },
      {
        reading: 11.49,
        time: "2021-04-05T09:10:00.000Z",
      },
      {
        reading: 11.33,
        time: "2021-04-05T09:20:00.000Z",
      },
      {
        reading: 11.33,
        time: "2021-04-05T09:30:00.000Z",
      },
      {
        reading: 11.33,
        time: "2021-04-05T09:40:00.000Z",
      },
      {
        reading: 11.6,
        time: "2021-04-05T09:50:00.000Z",
      },
      {
        reading: 11.56,
        time: "2021-04-05T10:00:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T10:10:00.000Z",
      },
      {
        reading: 11.45,
        time: "2021-04-05T10:20:00.000Z",
      },
      {
        reading: 11.13,
        time: "2021-04-05T10:30:00.000Z",
      },
      {
        reading: 11.41,
        time: "2021-04-05T10:40:00.000Z",
      },
      {
        reading: 12.11,
        time: "2021-04-05T10:50:00.000Z",
      },
      {
        reading: 11.29,
        time: "2021-04-05T11:00:00.000Z",
      },
      {
        reading: 11.02,
        time: "2021-04-05T11:10:00.000Z",
      },
      {
        reading: 10.62,
        time: "2021-04-05T11:20:00.000Z",
      },
      {
        reading: 10.54,
        time: "2021-04-05T11:30:00.000Z",
      },
      {
        reading: 10.74,
        time: "2021-04-05T11:40:00.000Z",
      },
      {
        reading: 10.15,
        time: "2021-04-05T11:50:00.000Z",
      },
      {
        reading: 10.11,
        time: "2021-04-05T12:00:00.000Z",
      },
      {
        reading: 11.25,
        time: "2021-04-05T12:10:00.000Z",
      },
      {
        reading: 10.23,
        time: "2021-04-05T12:20:00.000Z",
      },
      {
        reading: 11.56,
        time: "2021-04-05T12:30:00.000Z",
      },
      {
        reading: 10.66,
        time: "2021-04-05T12:40:00.000Z",
      },
      {
        reading: 11.92,
        time: "2021-04-05T12:50:00.000Z",
      },
      {
        reading: 11.84,
        time: "2021-04-05T13:00:00.000Z",
      },
      {
        reading: 10.58,
        time: "2021-04-05T13:10:00.000Z",
      },
      {
        reading: 10.58,
        time: "2021-04-05T13:20:00.000Z",
      },
      {
        reading: 12.03,
        time: "2021-04-05T13:30:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T13:40:00.000Z",
      },
      {
        reading: 10.43,
        time: "2021-04-05T13:50:00.000Z",
      },
      {
        reading: 10.7,
        time: "2021-04-05T14:00:00.000Z",
      },
      {
        reading: 12.58,
        time: "2021-04-05T14:10:00.000Z",
      },
      {
        reading: 12.54,
        time: "2021-04-05T14:20:00.000Z",
      },
      {
        reading: 11.92,
        time: "2021-04-05T14:30:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-05T14:40:00.000Z",
      },
      {
        reading: 12.27,
        time: "2021-04-05T14:50:00.000Z",
      },
      {
        reading: 11.68,
        time: "2021-04-05T15:00:00.000Z",
      },
      {
        reading: 12.19,
        time: "2021-04-05T15:10:00.000Z",
      },
      {
        reading: 11.64,
        time: "2021-04-05T15:20:00.000Z",
      },
      {
        reading: 12.19,
        time: "2021-04-05T15:30:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-05T15:40:00.000Z",
      },
      {
        reading: 12.82,
        time: "2021-04-05T15:50:00.000Z",
      },
      {
        reading: 12.94,
        time: "2021-04-05T16:00:00.000Z",
      },
      {
        reading: 12.98,
        time: "2021-04-05T16:10:00.000Z",
      },
      {
        reading: 11.84,
        time: "2021-04-05T16:20:00.000Z",
      },
      {
        reading: 11.21,
        time: "2021-04-05T16:30:00.000Z",
      },
      {
        reading: 10.07,
        time: "2021-04-05T16:40:00.000Z",
      },
      {
        reading: 10.54,
        time: "2021-04-05T16:50:00.000Z",
      },
      {
        reading: 13.29,
        time: "2021-04-05T17:00:00.000Z",
      },
      {
        reading: 11.68,
        time: "2021-04-05T17:10:00.000Z",
      },
      {
        reading: 11.21,
        time: "2021-04-05T17:20:00.000Z",
      },
      {
        reading: 10.39,
        time: "2021-04-05T17:30:00.000Z",
      },
      {
        reading: 10.15,
        time: "2021-04-05T17:40:00.000Z",
      },
      {
        reading: 9.96,
        time: "2021-04-05T17:50:00.000Z",
      },
      {
        reading: 11.02,
        time: "2021-04-05T18:00:00.000Z",
      },
      {
        reading: 11.68,
        time: "2021-04-05T18:10:00.000Z",
      },
      {
        reading: 11.21,
        time: "2021-04-05T18:20:00.000Z",
      },
      {
        reading: 11.41,
        time: "2021-04-05T18:30:00.000Z",
      },
      {
        reading: 10.74,
        time: "2021-04-05T18:40:00.000Z",
      },
      {
        reading: 12.31,
        time: "2021-04-05T18:50:00.000Z",
      },
      {
        reading: 11.76,
        time: "2021-04-05T19:00:00.000Z",
      },
      {
        reading: 12.03,
        time: "2021-04-05T19:10:00.000Z",
      },
      {
        reading: 13.21,
        time: "2021-04-05T19:20:00.000Z",
      },
      {
        reading: 12.58,
        time: "2021-04-05T19:30:00.000Z",
      },
      {
        reading: 12.7,
        time: "2021-04-05T19:40:00.000Z",
      },
      {
        reading: 12.9,
        time: "2021-04-05T19:50:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-05T20:00:00.000Z",
      },
      {
        reading: 11.52,
        time: "2021-04-05T20:10:00.000Z",
      },
      {
        reading: 11.49,
        time: "2021-04-05T20:20:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-05T20:30:00.000Z",
      },
      {
        reading: 11.49,
        time: "2021-04-05T20:40:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-05T20:50:00.000Z",
      },
      {
        reading: 10.47,
        time: "2021-04-05T21:00:00.000Z",
      },
      {
        reading: 11.8,
        time: "2021-04-05T21:10:00.000Z",
      },
      {
        reading: 12.86,
        time: "2021-04-05T21:20:00.000Z",
      },
      {
        reading: 12.43,
        time: "2021-04-05T21:30:00.000Z",
      },
      {
        reading: 12.94,
        time: "2021-04-05T21:40:00.000Z",
      },
      {
        reading: 11.13,
        time: "2021-04-05T21:50:00.000Z",
      },
      {
        reading: 11.6,
        time: "2021-04-05T22:00:00.000Z",
      },
      {
        reading: 12.03,
        time: "2021-04-05T22:10:00.000Z",
      },
      {
        reading: 11.45,
        time: "2021-04-05T22:20:00.000Z",
      },
      {
        reading: 10.51,
        time: "2021-04-05T22:30:00.000Z",
      },
      {
        reading: 11.64,
        time: "2021-04-05T22:40:00.000Z",
      },
      {
        reading: 12.43,
        time: "2021-04-05T22:50:00.000Z",
      },
      {
        reading: 12.35,
        time: "2021-04-05T23:00:00.000Z",
      },
      {
        reading: 12.82,
        time: "2021-04-05T23:10:00.000Z",
      },
      {
        reading: 11.29,
        time: "2021-04-05T23:20:00.000Z",
      },
      {
        reading: 12.66,
        time: "2021-04-05T23:30:00.000Z",
      },
      {
        reading: 14.78,
        time: "2021-04-05T23:40:00.000Z",
      },
      {
        reading: 12.7,
        time: "2021-04-05T23:50:00.000Z",
      },
      {
        reading: 15.95,
        time: "2021-04-06T00:00:00.000Z",
      },
      {
        reading: 14.82,
        time: "2021-04-06T00:10:00.000Z",
      },
      {
        reading: 13.01,
        time: "2021-04-06T00:20:00.000Z",
      },
      {
        reading: 13.09,
        time: "2021-04-06T00:30:00.000Z",
      },
      {
        reading: 12.62,
        time: "2021-04-06T00:40:00.000Z",
      },
      {
        reading: 13.09,
        time: "2021-04-06T00:50:00.000Z",
      },
      {
        reading: 12.31,
        time: "2021-04-06T01:00:00.000Z",
      },
      {
        reading: 14.03,
        time: "2021-04-06T01:10:00.000Z",
      },
      {
        reading: 13.17,
        time: "2021-04-06T01:20:00.000Z",
      },
      {
        reading: 14.5,
        time: "2021-04-06T01:30:00.000Z",
      },
      {
        reading: 12.43,
        time: "2021-04-06T01:40:00.000Z",
      },
      {
        reading: 10.94,
        time: "2021-04-06T01:50:00.000Z",
      },
      {
        reading: 11.37,
        time: "2021-04-06T02:00:00.000Z",
      },
      {
        reading: 13.68,
        time: "2021-04-06T02:10:00.000Z",
      },
      {
        reading: 13.41,
        time: "2021-04-06T02:20:00.000Z",
      },
      {
        reading: 12.27,
        time: "2021-04-06T02:30:00.000Z",
      },
      {
        reading: 12.03,
        time: "2021-04-06T02:40:00.000Z",
      },
      {
        reading: 13.01,
        time: "2021-04-06T02:50:00.000Z",
      },
      {
        reading: 12.82,
        time: "2021-04-06T03:00:00.000Z",
      },
      {
        reading: 13.96,
        time: "2021-04-06T03:10:00.000Z",
      },
      {
        reading: 14.5,
        time: "2021-04-06T03:20:00.000Z",
      },
      {
        reading: 12.15,
        time: "2021-04-06T03:30:00.000Z",
      },
      {
        reading: 11.96,
        time: "2021-04-06T03:40:00.000Z",
      },
      {
        reading: 12.47,
        time: "2021-04-06T03:50:00.000Z",
      },
      {
        reading: 14.19,
        time: "2021-04-06T04:00:00.000Z",
      },
      {
        reading: 12.66,
        time: "2021-04-06T04:10:00.000Z",
      },
      {
        reading: 13.17,
        time: "2021-04-06T04:20:00.000Z",
      },
      {
        reading: 13.6,
        time: "2021-04-06T04:30:00.000Z",
      },
      {
        reading: 13.52,
        time: "2021-04-06T04:40:00.000Z",
      },
      {
        reading: 13.64,
        time: "2021-04-06T04:50:00.000Z",
      },
      {
        reading: 15.29,
        time: "2021-04-06T05:00:00.000Z",
      },
      {
        reading: 13.01,
        time: "2021-04-06T05:10:00.000Z",
      },
      {
        reading: 13.76,
        time: "2021-04-06T05:20:00.000Z",
      },
      {
        reading: 11.84,
        time: "2021-04-06T05:30:00.000Z",
      },
      {
        reading: 11.41,
        time: "2021-04-06T05:40:00.000Z",
      },
      {
        reading: 11.29,
        time: "2021-04-06T05:50:00.000Z",
      },
      {
        reading: 13.37,
        time: "2021-04-06T06:00:00.000Z",
      },
      {
        reading: 12.78,
        time: "2021-04-06T06:10:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-06T06:20:00.000Z",
      },
      {
        reading: 11.25,
        time: "2021-04-06T06:30:00.000Z",
      },
      {
        reading: 12.5,
        time: "2021-04-06T06:40:00.000Z",
      },
      {
        reading: 12.47,
        time: "2021-04-06T06:50:00.000Z",
      },
      {
        reading: 12.07,
        time: "2021-04-06T07:00:00.000Z",
      },
      {
        reading: 10.47,
        time: "2021-04-06T07:10:00.000Z",
      },
      {
        reading: 11.33,
        time: "2021-04-06T07:20:00.000Z",
      },
      {
        reading: 10.98,
        time: "2021-04-06T07:30:00.000Z",
      },
      {
        reading: 10.62,
        time: "2021-04-06T07:40:00.000Z",
      },
      {
        reading: 9.84,
        time: "2021-04-06T07:50:00.000Z",
      },
      {
        reading: 10.04,
        time: "2021-04-06T08:00:00.000Z",
      },
      {
        reading: 9.84,
        time: "2021-04-06T08:10:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-06T08:20:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-06T08:30:00.000Z",
      },
      {
        reading: 8.43,
        time: "2021-04-06T08:40:00.000Z",
      },
      {
        reading: 8.82,
        time: "2021-04-06T08:50:00.000Z",
      },
      {
        reading: 8.62,
        time: "2021-04-06T09:00:00.000Z",
      },
      {
        reading: 9.33,
        time: "2021-04-06T09:10:00.000Z",
      },
      {
        reading: 8.7,
        time: "2021-04-06T09:20:00.000Z",
      },
      {
        reading: 8.19,
        time: "2021-04-06T09:30:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-06T09:40:00.000Z",
      },
      {
        reading: 7.566,
        time: "2021-04-06T09:50:00.000Z",
      },
      {
        reading: 8.15,
        time: "2021-04-06T10:00:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-06T10:10:00.000Z",
      },
      {
        reading: 7.448,
        time: "2021-04-06T10:20:00.000Z",
      },
      {
        reading: 7.134,
        time: "2021-04-06T10:30:00.000Z",
      },
      {
        reading: 6.978,
        time: "2021-04-06T10:40:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-06T10:50:00.000Z",
      },
      {
        reading: 7.134,
        time: "2021-04-06T11:00:00.000Z",
      },
      {
        reading: 6.468,
        time: "2021-04-06T11:10:00.000Z",
      },
      {
        reading: 6.978,
        time: "2021-04-06T11:20:00.000Z",
      },
      {
        reading: 7.487,
        time: "2021-04-06T11:30:00.000Z",
      },
      {
        reading: 7.722,
        time: "2021-04-06T11:40:00.000Z",
      },
      {
        reading: 7.644,
        time: "2021-04-06T11:50:00.000Z",
      },
      {
        reading: 8.31,
        time: "2021-04-06T12:00:00.000Z",
      },
      {
        reading: 8.47,
        time: "2021-04-06T12:10:00.000Z",
      },
      {
        reading: 8.86,
        time: "2021-04-06T12:20:00.000Z",
      },
      {
        reading: 8.62,
        time: "2021-04-06T12:30:00.000Z",
      },
      {
        reading: 8.62,
        time: "2021-04-06T12:40:00.000Z",
      },
      {
        reading: 7.918,
        time: "2021-04-06T12:50:00.000Z",
      },
      {
        reading: 7.958,
        time: "2021-04-06T13:00:00.000Z",
      },
      {
        reading: 9.02,
        time: "2021-04-06T13:10:00.000Z",
      },
      {
        reading: 7.134,
        time: "2021-04-06T13:20:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-06T13:30:00.000Z",
      },
      {
        reading: 5.88,
        time: "2021-04-06T13:40:00.000Z",
      },
      {
        reading: 5.566,
        time: "2021-04-06T13:50:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-06T14:00:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-06T14:10:00.000Z",
      },
      {
        reading: 5.214,
        time: "2021-04-06T14:20:00.000Z",
      },
      {
        reading: 5.802,
        time: "2021-04-06T14:30:00.000Z",
      },
      {
        reading: 5.331,
        time: "2021-04-06T14:40:00.000Z",
      },
      {
        reading: 4.743,
        time: "2021-04-06T14:50:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-06T15:00:00.000Z",
      },
      {
        reading: 3.528,
        time: "2021-04-06T15:10:00.000Z",
      },
      {
        reading: 2.234,
        time: "2021-04-06T15:20:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-06T15:30:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-06T15:40:00.000Z",
      },
      {
        reading: 3.606,
        time: "2021-04-06T15:50:00.000Z",
      },
      {
        reading: 3.959,
        time: "2021-04-06T16:00:00.000Z",
      },
      {
        reading: 4.038,
        time: "2021-04-06T16:10:00.000Z",
      },
      {
        reading: 3.332,
        time: "2021-04-06T16:20:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-06T16:30:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-06T16:40:00.000Z",
      },
      {
        reading: 2.979,
        time: "2021-04-06T16:50:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-06T17:00:00.000Z",
      },
      {
        reading: 4.704,
        time: "2021-04-06T17:10:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-06T17:20:00.000Z",
      },
      {
        reading: 2.626,
        time: "2021-04-06T17:30:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-06T17:40:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-06T17:50:00.000Z",
      },
      {
        reading: 2.352,
        time: "2021-04-06T18:00:00.000Z",
      },
      {
        reading: 2.43,
        time: "2021-04-06T18:10:00.000Z",
      },
      {
        reading: 1.999,
        time: "2021-04-06T18:20:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-06T18:30:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-06T18:40:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-06T18:50:00.000Z",
      },
      {
        reading: 4.155,
        time: "2021-04-06T19:00:00.000Z",
      },
      {
        reading: 3.763,
        time: "2021-04-06T19:10:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-06T19:20:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-06T19:30:00.000Z",
      },
      {
        reading: 3.175,
        time: "2021-04-06T19:40:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-06T19:50:00.000Z",
      },
      {
        reading: 4.038,
        time: "2021-04-06T20:00:00.000Z",
      },
      {
        reading: 3.606,
        time: "2021-04-06T20:10:00.000Z",
      },
      {
        reading: 3.097,
        time: "2021-04-06T20:20:00.000Z",
      },
      {
        reading: 3.567,
        time: "2021-04-06T20:30:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-06T20:40:00.000Z",
      },
      {
        reading: 5.135,
        time: "2021-04-06T20:50:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-06T21:00:00.000Z",
      },
      {
        reading: 5.057,
        time: "2021-04-06T21:10:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-06T21:20:00.000Z",
      },
      {
        reading: 5.488,
        time: "2021-04-06T21:30:00.000Z",
      },
      {
        reading: 4.547,
        time: "2021-04-06T21:40:00.000Z",
      },
      {
        reading: 4.469,
        time: "2021-04-06T21:50:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-06T22:00:00.000Z",
      },
      {
        reading: 4.978,
        time: "2021-04-06T22:10:00.000Z",
      },
      {
        reading: 4.077,
        time: "2021-04-06T22:20:00.000Z",
      },
      {
        reading: 4.351,
        time: "2021-04-06T22:30:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-06T22:40:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-06T22:50:00.000Z",
      },
      {
        reading: 3.567,
        time: "2021-04-06T23:00:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-06T23:10:00.000Z",
      },
      {
        reading: 4.547,
        time: "2021-04-06T23:20:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-06T23:30:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-06T23:40:00.000Z",
      },
      {
        reading: 3.881,
        time: "2021-04-06T23:50:00.000Z",
      },
      {
        reading: 4.782,
        time: "2021-04-07T00:00:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-07T00:10:00.000Z",
      },
      {
        reading: 3.763,
        time: "2021-04-07T00:20:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-07T00:30:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-07T00:40:00.000Z",
      },
      {
        reading: 3.018,
        time: "2021-04-07T00:50:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-07T01:00:00.000Z",
      },
      {
        reading: 3.41,
        time: "2021-04-07T01:10:00.000Z",
      },
      {
        reading: 4.704,
        time: "2021-04-07T01:20:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-07T01:30:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-07T01:40:00.000Z",
      },
      {
        reading: 4.469,
        time: "2021-04-07T01:50:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-07T02:00:00.000Z",
      },
      {
        reading: 5.566,
        time: "2021-04-07T02:10:00.000Z",
      },
      {
        reading: 5.214,
        time: "2021-04-07T02:20:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-07T02:30:00.000Z",
      },
      {
        reading: 5.723,
        time: "2021-04-07T02:40:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-07T02:50:00.000Z",
      },
      {
        reading: 6.86,
        time: "2021-04-07T03:00:00.000Z",
      },
      {
        reading: 5.606,
        time: "2021-04-07T03:10:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-07T03:20:00.000Z",
      },
      {
        reading: 6.586,
        time: "2021-04-07T03:30:00.000Z",
      },
      {
        reading: 6.35,
        time: "2021-04-07T03:40:00.000Z",
      },
      {
        reading: 5.214,
        time: "2021-04-07T03:50:00.000Z",
      },
      {
        reading: 5.88,
        time: "2021-04-07T04:00:00.000Z",
      },
      {
        reading: 6.076,
        time: "2021-04-07T04:10:00.000Z",
      },
      {
        reading: 7.017,
        time: "2021-04-07T04:20:00.000Z",
      },
      {
        reading: 5.958,
        time: "2021-04-07T04:30:00.000Z",
      },
      {
        reading: 6.194,
        time: "2021-04-07T04:40:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-07T04:50:00.000Z",
      },
      {
        reading: 7.252,
        time: "2021-04-07T05:00:00.000Z",
      },
      {
        reading: 6.546,
        time: "2021-04-07T05:10:00.000Z",
      },
      {
        reading: 5.488,
        time: "2021-04-07T05:20:00.000Z",
      },
      {
        reading: 5.684,
        time: "2021-04-07T05:30:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-07T05:40:00.000Z",
      },
      {
        reading: 6.742,
        time: "2021-04-07T05:50:00.000Z",
      },
      {
        reading: 7.566,
        time: "2021-04-07T06:00:00.000Z",
      },
      {
        reading: 7.801,
        time: "2021-04-07T06:10:00.000Z",
      },
      {
        reading: 7.017,
        time: "2021-04-07T06:20:00.000Z",
      },
      {
        reading: 6.978,
        time: "2021-04-07T06:30:00.000Z",
      },
      {
        reading: 6.782,
        time: "2021-04-07T06:40:00.000Z",
      },
      {
        reading: 7.213,
        time: "2021-04-07T06:50:00.000Z",
      },
      {
        reading: 8.04,
        time: "2021-04-07T07:00:00.000Z",
      },
      {
        reading: 6.938,
        time: "2021-04-07T07:10:00.000Z",
      },
      {
        reading: 5.488,
        time: "2021-04-07T07:20:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-07T07:30:00.000Z",
      },
      {
        reading: 4.547,
        time: "2021-04-07T07:40:00.000Z",
      },
      {
        reading: 4.312,
        time: "2021-04-07T07:50:00.000Z",
      },
      {
        reading: 4.39,
        time: "2021-04-07T08:00:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-07T08:10:00.000Z",
      },
      {
        reading: 5.802,
        time: "2021-04-07T08:20:00.000Z",
      },
      {
        reading: 6.311,
        time: "2021-04-07T08:30:00.000Z",
      },
      {
        reading: 5.057,
        time: "2021-04-07T08:40:00.000Z",
      },
      {
        reading: 4.43,
        time: "2021-04-07T08:50:00.000Z",
      },
      {
        reading: 4.822,
        time: "2021-04-07T09:00:00.000Z",
      },
      {
        reading: 4.9,
        time: "2021-04-07T09:10:00.000Z",
      },
      {
        reading: 4.469,
        time: "2021-04-07T09:20:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-07T09:30:00.000Z",
      },
      {
        reading: 3.489,
        time: "2021-04-07T09:40:00.000Z",
      },
      {
        reading: 3.763,
        time: "2021-04-07T09:50:00.000Z",
      },
      {
        reading: 3.293,
        time: "2021-04-07T10:00:00.000Z",
      },
      {
        reading: 4.194,
        time: "2021-04-07T10:10:00.000Z",
      },
      {
        reading: 4.822,
        time: "2021-04-07T10:20:00.000Z",
      },
      {
        reading: 4.077,
        time: "2021-04-07T10:30:00.000Z",
      },
      {
        reading: 3.724,
        time: "2021-04-07T10:40:00.000Z",
      },
      {
        reading: 3.881,
        time: "2021-04-07T10:50:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-07T11:00:00.000Z",
      },
      {
        reading: 3.998,
        time: "2021-04-07T11:10:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-07T11:20:00.000Z",
      },
      {
        reading: 4.39,
        time: "2021-04-07T11:30:00.000Z",
      },
      {
        reading: 4.155,
        time: "2021-04-07T11:40:00.000Z",
      },
      {
        reading: 4.469,
        time: "2021-04-07T11:50:00.000Z",
      },
      {
        reading: 5.253,
        time: "2021-04-07T12:00:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-07T12:10:00.000Z",
      },
      {
        reading: 4.547,
        time: "2021-04-07T12:20:00.000Z",
      },
      {
        reading: 4.194,
        time: "2021-04-07T12:30:00.000Z",
      },
      {
        reading: 4.782,
        time: "2021-04-07T12:40:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-07T12:50:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-07T13:00:00.000Z",
      },
      {
        reading: 5.41,
        time: "2021-04-07T13:10:00.000Z",
      },
      {
        reading: 5.645,
        time: "2021-04-07T13:20:00.000Z",
      },
      {
        reading: 6.194,
        time: "2021-04-07T13:30:00.000Z",
      },
      {
        reading: 6.233,
        time: "2021-04-07T13:40:00.000Z",
      },
      {
        reading: 5.998,
        time: "2021-04-07T13:50:00.000Z",
      },
      {
        reading: 7.095,
        time: "2021-04-07T14:00:00.000Z",
      },
      {
        reading: 7.526,
        time: "2021-04-07T14:10:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-07T14:20:00.000Z",
      },
      {
        reading: 5.802,
        time: "2021-04-07T14:30:00.000Z",
      },
      {
        reading: 6.546,
        time: "2021-04-07T14:40:00.000Z",
      },
      {
        reading: 6.311,
        time: "2021-04-07T14:50:00.000Z",
      },
      {
        reading: 6.35,
        time: "2021-04-07T15:00:00.000Z",
      },
      {
        reading: 6.154,
        time: "2021-04-07T15:10:00.000Z",
      },
      {
        reading: 5.41,
        time: "2021-04-07T15:20:00.000Z",
      },
      {
        reading: 4.508,
        time: "2021-04-07T15:30:00.000Z",
      },
      {
        reading: 4.43,
        time: "2021-04-07T15:40:00.000Z",
      },
      {
        reading: 4.782,
        time: "2021-04-07T15:50:00.000Z",
      },
      {
        reading: 5.37,
        time: "2021-04-07T16:00:00.000Z",
      },
      {
        reading: 5.135,
        time: "2021-04-07T16:10:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-07T16:20:00.000Z",
      },
      {
        reading: 3.881,
        time: "2021-04-07T16:30:00.000Z",
      },
      {
        reading: 5.174,
        time: "2021-04-07T16:40:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-07T16:50:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-07T17:00:00.000Z",
      },
      {
        reading: 4.351,
        time: "2021-04-07T17:10:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-07T17:20:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-07T17:30:00.000Z",
      },
      {
        reading: 5.018,
        time: "2021-04-07T17:40:00.000Z",
      },
      {
        reading: 6.507,
        time: "2021-04-07T17:50:00.000Z",
      },
      {
        reading: 3.293,
        time: "2021-04-07T18:00:00.000Z",
      },
      {
        reading: 3.175,
        time: "2021-04-07T18:10:00.000Z",
      },
      {
        reading: 3.175,
        time: "2021-04-07T18:20:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-07T18:30:00.000Z",
      },
      {
        reading: 3.293,
        time: "2021-04-07T18:40:00.000Z",
      },
      {
        reading: 2.313,
        time: "2021-04-07T18:50:00.000Z",
      },
      {
        reading: 3.136,
        time: "2021-04-07T19:00:00.000Z",
      },
      {
        reading: 3.567,
        time: "2021-04-07T19:10:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-07T19:20:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-07T19:30:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-07T19:40:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-07T19:50:00.000Z",
      },
      {
        reading: 3.41,
        time: "2021-04-07T20:00:00.000Z",
      },
      {
        reading: 2.979,
        time: "2021-04-07T20:10:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-07T20:20:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-07T20:30:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-07T20:40:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-07T20:50:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-07T21:00:00.000Z",
      },
      {
        reading: 2.94,
        time: "2021-04-07T21:10:00.000Z",
      },
      {
        reading: 2.274,
        time: "2021-04-07T21:20:00.000Z",
      },
      {
        reading: 2.391,
        time: "2021-04-07T21:30:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-07T21:40:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-07T21:50:00.000Z",
      },
      {
        reading: 1.882,
        time: "2021-04-07T22:00:00.000Z",
      },
      {
        reading: 2.117,
        time: "2021-04-07T22:10:00.000Z",
      },
      {
        reading: 1.686,
        time: "2021-04-07T22:20:00.000Z",
      },
      {
        reading: 1.568,
        time: "2021-04-07T22:30:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-07T22:40:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-07T22:50:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-07T23:00:00.000Z",
      },
      {
        reading: 1.725,
        time: "2021-04-07T23:10:00.000Z",
      },
      {
        reading: 1.646,
        time: "2021-04-07T23:20:00.000Z",
      },
      {
        reading: 1.686,
        time: "2021-04-07T23:30:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-07T23:40:00.000Z",
      },
      {
        reading: 0.784,
        time: "2021-04-07T23:50:00.000Z",
      },
      {
        reading: 1.215,
        time: "2021-04-08T00:00:00.000Z",
      },
      {
        reading: 1.45,
        time: "2021-04-08T00:10:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-08T00:20:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-08T00:30:00.000Z",
      },
      {
        reading: 1.999,
        time: "2021-04-08T00:40:00.000Z",
      },
      {
        reading: 1.411,
        time: "2021-04-08T00:50:00.000Z",
      },
      {
        reading: 1.411,
        time: "2021-04-08T01:00:00.000Z",
      },
      {
        reading: 1.254,
        time: "2021-04-08T01:10:00.000Z",
      },
      {
        reading: 0.392,
        time: "2021-04-08T01:20:00.000Z",
      },
      {
        reading: 0.392,
        time: "2021-04-08T01:30:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-08T01:40:00.000Z",
      },
      {
        reading: 1.842,
        time: "2021-04-08T01:50:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-08T02:00:00.000Z",
      },
      {
        reading: 5.174,
        time: "2021-04-08T02:10:00.000Z",
      },
      {
        reading: 2.587,
        time: "2021-04-08T02:20:00.000Z",
      },
      {
        reading: 2.509,
        time: "2021-04-08T02:30:00.000Z",
      },
      {
        reading: 1.921,
        time: "2021-04-08T02:40:00.000Z",
      },
      {
        reading: 1.49,
        time: "2021-04-08T02:50:00.000Z",
      },
      {
        reading: 1.45,
        time: "2021-04-08T03:00:00.000Z",
      },
      {
        reading: 2.352,
        time: "2021-04-08T03:10:00.000Z",
      },
      {
        reading: 1.568,
        time: "2021-04-08T03:20:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-08T03:30:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-08T03:40:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-08T03:50:00.000Z",
      },
      {
        reading: 3.136,
        time: "2021-04-08T04:00:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-08T04:10:00.000Z",
      },
      {
        reading: 3.332,
        time: "2021-04-08T04:20:00.000Z",
      },
      {
        reading: 3.489,
        time: "2021-04-08T04:30:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-08T04:40:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-08T04:50:00.000Z",
      },
      {
        reading: 4.038,
        time: "2021-04-08T05:00:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-08T05:10:00.000Z",
      },
      {
        reading: 5.135,
        time: "2021-04-08T05:20:00.000Z",
      },
      {
        reading: 4.665,
        time: "2021-04-08T05:30:00.000Z",
      },
      {
        reading: 4.312,
        time: "2021-04-08T05:40:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-08T05:50:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-08T06:00:00.000Z",
      },
      {
        reading: 3.489,
        time: "2021-04-08T06:10:00.000Z",
      },
      {
        reading: 4.861,
        time: "2021-04-08T06:20:00.000Z",
      },
      {
        reading: 5.88,
        time: "2021-04-08T06:30:00.000Z",
      },
      {
        reading: 5.919,
        time: "2021-04-08T06:40:00.000Z",
      },
      {
        reading: 4.743,
        time: "2021-04-08T06:50:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-08T07:00:00.000Z",
      },
      {
        reading: 3.018,
        time: "2021-04-08T07:10:00.000Z",
      },
      {
        reading: 3.371,
        time: "2021-04-08T07:20:00.000Z",
      },
      {
        reading: 3.136,
        time: "2021-04-08T07:30:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-08T07:40:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-08T07:50:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-08T08:00:00.000Z",
      },
      {
        reading: 1.45,
        time: "2021-04-08T08:10:00.000Z",
      },
      {
        reading: 2.43,
        time: "2021-04-08T08:20:00.000Z",
      },
      {
        reading: 2.94,
        time: "2021-04-08T08:30:00.000Z",
      },
      {
        reading: 3.136,
        time: "2021-04-08T08:40:00.000Z",
      },
      {
        reading: 3.097,
        time: "2021-04-08T08:50:00.000Z",
      },
      {
        reading: 3.606,
        time: "2021-04-08T09:00:00.000Z",
      },
      {
        reading: 3.214,
        time: "2021-04-08T09:10:00.000Z",
      },
      {
        reading: 2.862,
        time: "2021-04-08T09:20:00.000Z",
      },
      {
        reading: 2.901,
        time: "2021-04-08T09:30:00.000Z",
      },
      {
        reading: 3.254,
        time: "2021-04-08T09:40:00.000Z",
      },
      {
        reading: 2.744,
        time: "2021-04-08T09:50:00.000Z",
      },
      {
        reading: 2.43,
        time: "2021-04-08T10:00:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-08T10:10:00.000Z",
      },
      {
        reading: 2.626,
        time: "2021-04-08T10:20:00.000Z",
      },
      {
        reading: 2.587,
        time: "2021-04-08T10:30:00.000Z",
      },
      {
        reading: 2.234,
        time: "2021-04-08T10:40:00.000Z",
      },
      {
        reading: 3.567,
        time: "2021-04-08T10:50:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-08T11:00:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-08T11:10:00.000Z",
      },
      {
        reading: 2.509,
        time: "2021-04-08T11:20:00.000Z",
      },
      {
        reading: 2.274,
        time: "2021-04-08T11:30:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-08T11:40:00.000Z",
      },
      {
        reading: 2.705,
        time: "2021-04-08T11:50:00.000Z",
      },
      {
        reading: 3.293,
        time: "2021-04-08T12:00:00.000Z",
      },
      {
        reading: 3.528,
        time: "2021-04-08T12:10:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-08T12:20:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-08T12:30:00.000Z",
      },
      {
        reading: 4.351,
        time: "2021-04-08T12:40:00.000Z",
      },
      {
        reading: 4.077,
        time: "2021-04-08T12:50:00.000Z",
      },
      {
        reading: 4.155,
        time: "2021-04-08T13:00:00.000Z",
      },
      {
        reading: 3.92,
        time: "2021-04-08T13:10:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-08T13:20:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-08T13:30:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-08T13:40:00.000Z",
      },
      {
        reading: 2.313,
        time: "2021-04-08T13:50:00.000Z",
      },
      {
        reading: 2.901,
        time: "2021-04-08T14:00:00.000Z",
      },
      {
        reading: 3.92,
        time: "2021-04-08T14:10:00.000Z",
      },
      {
        reading: 4.155,
        time: "2021-04-08T14:20:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-08T14:30:00.000Z",
      },
      {
        reading: 4.626,
        time: "2021-04-08T14:40:00.000Z",
      },
      {
        reading: 4.939,
        time: "2021-04-08T14:50:00.000Z",
      },
      {
        reading: 4.665,
        time: "2021-04-08T15:00:00.000Z",
      },
      {
        reading: 4.586,
        time: "2021-04-08T15:10:00.000Z",
      },
      {
        reading: 4.234,
        time: "2021-04-08T15:20:00.000Z",
      },
      {
        reading: 3.724,
        time: "2021-04-08T15:30:00.000Z",
      },
      {
        reading: 4.077,
        time: "2021-04-08T15:40:00.000Z",
      },
      {
        reading: 3.92,
        time: "2021-04-08T15:50:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-08T16:00:00.000Z",
      },
      {
        reading: 3.528,
        time: "2021-04-08T16:10:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-08T16:20:00.000Z",
      },
      {
        reading: 3.45,
        time: "2021-04-08T16:30:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-08T16:40:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-08T16:50:00.000Z",
      },
      {
        reading: 3.332,
        time: "2021-04-08T17:00:00.000Z",
      },
      {
        reading: 4.665,
        time: "2021-04-08T17:10:00.000Z",
      },
      {
        reading: 7.252,
        time: "2021-04-08T17:20:00.000Z",
      },
      {
        reading: 6.821,
        time: "2021-04-08T17:30:00.000Z",
      },
      {
        reading: 5.292,
        time: "2021-04-08T17:40:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-08T17:50:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-08T18:00:00.000Z",
      },
      {
        reading: 1.686,
        time: "2021-04-08T18:10:00.000Z",
      },
      {
        reading: 1.529,
        time: "2021-04-08T18:20:00.000Z",
      },
      {
        reading: 1.333,
        time: "2021-04-08T18:30:00.000Z",
      },
      {
        reading: 1.999,
        time: "2021-04-08T18:40:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-08T18:50:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-08T19:00:00.000Z",
      },
      {
        reading: 1.294,
        time: "2021-04-08T19:10:00.000Z",
      },
      {
        reading: 1.529,
        time: "2021-04-08T19:20:00.000Z",
      },
      {
        reading: 2.587,
        time: "2021-04-08T19:30:00.000Z",
      },
      {
        reading: 2.626,
        time: "2021-04-08T19:40:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-08T19:50:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-08T20:00:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-08T20:10:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-08T20:20:00.000Z",
      },
      {
        reading: 2.822,
        time: "2021-04-08T20:30:00.000Z",
      },
      {
        reading: 2.274,
        time: "2021-04-08T20:40:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-08T20:50:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-08T21:00:00.000Z",
      },
      {
        reading: 2.626,
        time: "2021-04-08T21:10:00.000Z",
      },
      {
        reading: 3.254,
        time: "2021-04-08T21:20:00.000Z",
      },
      {
        reading: 3.293,
        time: "2021-04-08T21:30:00.000Z",
      },
      {
        reading: 3.214,
        time: "2021-04-08T21:40:00.000Z",
      },
      {
        reading: 3.058,
        time: "2021-04-08T21:50:00.000Z",
      },
      {
        reading: 2.47,
        time: "2021-04-08T22:00:00.000Z",
      },
      {
        reading: 2.234,
        time: "2021-04-08T22:10:00.000Z",
      },
      {
        reading: 2.352,
        time: "2021-04-08T22:20:00.000Z",
      },
      {
        reading: 2.43,
        time: "2021-04-08T22:30:00.000Z",
      },
      {
        reading: 2.744,
        time: "2021-04-08T22:40:00.000Z",
      },
      {
        reading: 2.666,
        time: "2021-04-08T22:50:00.000Z",
      },
      {
        reading: 2.783,
        time: "2021-04-08T23:00:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-08T23:10:00.000Z",
      },
      {
        reading: 3.489,
        time: "2021-04-08T23:20:00.000Z",
      },
      {
        reading: 3.097,
        time: "2021-04-08T23:30:00.000Z",
      },
      {
        reading: 3.175,
        time: "2021-04-08T23:40:00.000Z",
      },
      {
        reading: 2.979,
        time: "2021-04-08T23:50:00.000Z",
      },
      {
        reading: 2.94,
        time: "2021-04-09T00:00:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-09T00:10:00.000Z",
      },
      {
        reading: 2.94,
        time: "2021-04-09T00:20:00.000Z",
      },
      {
        reading: 2.117,
        time: "2021-04-09T00:30:00.000Z",
      },
      {
        reading: 2.509,
        time: "2021-04-09T00:40:00.000Z",
      },
      {
        reading: 2.274,
        time: "2021-04-09T00:50:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T01:00:00.000Z",
      },
      {
        reading: 1.607,
        time: "2021-04-09T01:10:00.000Z",
      },
      {
        reading: 2.352,
        time: "2021-04-09T01:20:00.000Z",
      },
      {
        reading: 1.646,
        time: "2021-04-09T01:30:00.000Z",
      },
      {
        reading: 1.686,
        time: "2021-04-09T01:40:00.000Z",
      },
      {
        reading: 1.842,
        time: "2021-04-09T01:50:00.000Z",
      },
      {
        reading: 1.098,
        time: "2021-04-09T02:00:00.000Z",
      },
      {
        reading: 1.176,
        time: "2021-04-09T02:10:00.000Z",
      },
      {
        reading: 0.823,
        time: "2021-04-09T02:20:00.000Z",
      },
      {
        reading: 0.902,
        time: "2021-04-09T02:30:00.000Z",
      },
      {
        reading: 1.215,
        time: "2021-04-09T02:40:00.000Z",
      },
      {
        reading: 0.862,
        time: "2021-04-09T02:50:00.000Z",
      },
      {
        reading: 1.529,
        time: "2021-04-09T03:00:00.000Z",
      },
      {
        reading: 1.098,
        time: "2021-04-09T03:10:00.000Z",
      },
      {
        reading: 2.313,
        time: "2021-04-09T03:20:00.000Z",
      },
      {
        reading: 1.411,
        time: "2021-04-09T03:30:00.000Z",
      },
      {
        reading: 0.588,
        time: "2021-04-09T03:40:00.000Z",
      },
      {
        reading: 1.215,
        time: "2021-04-09T03:50:00.000Z",
      },
      {
        reading: 1.176,
        time: "2021-04-09T04:00:00.000Z",
      },
      {
        reading: 0.588,
        time: "2021-04-09T04:10:00.000Z",
      },
      {
        reading: 1.842,
        time: "2021-04-09T04:20:00.000Z",
      },
      {
        reading: 1.333,
        time: "2021-04-09T04:30:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-09T04:40:00.000Z",
      },
      {
        reading: 1.803,
        time: "2021-04-09T04:50:00.000Z",
      },
      {
        reading: 1.529,
        time: "2021-04-09T05:00:00.000Z",
      },
      {
        reading: 1.45,
        time: "2021-04-09T05:10:00.000Z",
      },
      {
        reading: 1.568,
        time: "2021-04-09T05:20:00.000Z",
      },
      {
        reading: 0.745,
        time: "2021-04-09T05:30:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-09T05:40:00.000Z",
      },
      {
        reading: 1.019,
        time: "2021-04-09T05:50:00.000Z",
      },
      {
        reading: 0.588,
        time: "2021-04-09T06:00:00.000Z",
      },
      {
        reading: 1.058,
        time: "2021-04-09T06:10:00.000Z",
      },
      {
        reading: 0.862,
        time: "2021-04-09T06:20:00.000Z",
      },
      {
        reading: 1.019,
        time: "2021-04-09T06:30:00.000Z",
      },
      {
        reading: 1.254,
        time: "2021-04-09T06:40:00.000Z",
      },
      {
        reading: 1.176,
        time: "2021-04-09T06:50:00.000Z",
      },
      {
        reading: 2.038,
        time: "2021-04-09T07:00:00.000Z",
      },
      {
        reading: 2.156,
        time: "2021-04-09T07:10:00.000Z",
      },
      {
        reading: 1.607,
        time: "2021-04-09T07:20:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-09T07:30:00.000Z",
      },
      {
        reading: 1.019,
        time: "2021-04-09T07:40:00.000Z",
      },
      {
        reading: 0.706,
        time: "2021-04-09T07:50:00.000Z",
      },
      {
        reading: 1.058,
        time: "2021-04-09T08:00:00.000Z",
      },
      {
        reading: 1.333,
        time: "2021-04-09T08:10:00.000Z",
      },
      {
        reading: 1.607,
        time: "2021-04-09T08:20:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T08:30:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T08:40:00.000Z",
      },
      {
        reading: 1.411,
        time: "2021-04-09T08:50:00.000Z",
      },
      {
        reading: 1.568,
        time: "2021-04-09T09:00:00.000Z",
      },
      {
        reading: 1.49,
        time: "2021-04-09T09:10:00.000Z",
      },
      {
        reading: 1.803,
        time: "2021-04-09T09:20:00.000Z",
      },
      {
        reading: 2.117,
        time: "2021-04-09T09:30:00.000Z",
      },
      {
        reading: 2.234,
        time: "2021-04-09T09:40:00.000Z",
      },
      {
        reading: 1.921,
        time: "2021-04-09T09:50:00.000Z",
      },
      {
        reading: 1.137,
        time: "2021-04-09T10:00:00.000Z",
      },
      {
        reading: 1.098,
        time: "2021-04-09T10:10:00.000Z",
      },
      {
        reading: 1.49,
        time: "2021-04-09T10:20:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-09T10:30:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T10:40:00.000Z",
      },
      {
        reading: 1.607,
        time: "2021-04-09T10:50:00.000Z",
      },
      {
        reading: 2.078,
        time: "2021-04-09T11:00:00.000Z",
      },
      {
        reading: 1.999,
        time: "2021-04-09T11:10:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T11:20:00.000Z",
      },
      {
        reading: 1.803,
        time: "2021-04-09T11:30:00.000Z",
      },
      {
        reading: 1.999,
        time: "2021-04-09T11:40:00.000Z",
      },
      {
        reading: 1.176,
        time: "2021-04-09T11:50:00.000Z",
      },
      {
        reading: 1.215,
        time: "2021-04-09T12:00:00.000Z",
      },
      {
        reading: 1.176,
        time: "2021-04-09T12:10:00.000Z",
      },
      {
        reading: 1.098,
        time: "2021-04-09T12:20:00.000Z",
      },
      {
        reading: 1.372,
        time: "2021-04-09T12:30:00.000Z",
      },
      {
        reading: 1.764,
        time: "2021-04-09T12:40:00.000Z",
      },
      {
        reading: 1.921,
        time: "2021-04-09T12:50:00.000Z",
      },
      {
        reading: 1.49,
        time: "2021-04-09T13:00:00.000Z",
      },
      {
        reading: 1.529,
        time: "2021-04-09T13:10:00.000Z",
      },
      {
        reading: 1.45,
        time: "2021-04-09T13:20:00.000Z",
      },
      {
        reading: 2.078,
        time: "2021-04-09T13:30:00.000Z",
      },
      {
        reading: 2.078,
        time: "2021-04-09T13:40:00.000Z",
      },
      {
        reading: 2.313,
        time: "2021-04-09T13:50:00.000Z",
      },
      {
        reading: 1.96,
        time: "2021-04-09T14:00:00.000Z",
      },
      {
        reading: 1.803,
        time: "2021-04-09T14:10:00.000Z",
      },
      {
        reading: 2.195,
        time: "2021-04-09T14:20:00.000Z",
      },
      {
        reading: 2.43,
        time: "2021-04-09T14:30:00.000Z",
      },
      {
        reading: 2.744,
        time: "2021-04-09T14:40:00.000Z",
      },
      {
        reading: 3.214,
        time: "2021-04-09T14:50:00.000Z",
      },
      {
        reading: 3.763,
        time: "2021-04-09T15:00:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-09T15:10:00.000Z",
      },
      {
        reading: 3.685,
        time: "2021-04-09T15:20:00.000Z",
      },
      {
        reading: 3.881,
        time: "2021-04-09T15:30:00.000Z",
      },
      {
        reading: 4.038,
        time: "2021-04-09T15:40:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-09T15:50:00.000Z",
      },
      {
        reading: 4.273,
        time: "2021-04-09T16:00:00.000Z",
      },
      {
        reading: 3.842,
        time: "2021-04-09T16:10:00.000Z",
      },
      {
        reading: 3.489,
        time: "2021-04-09T16:20:00.000Z",
      },
      {
        reading: 3.802,
        time: "2021-04-09T16:30:00.000Z",
      },
      {
        reading: 3.724,
        time: "2021-04-09T16:40:00.000Z",
      },
      {
        reading: 3.646,
        time: "2021-04-09T16:50:00.000Z",
      },
      {
        reading: 4.743,
        time: "2021-04-09T17:00:00.000Z",
      },
      {
        reading: 5.41,
        time: "2021-04-09T17:10:00.000Z",
      },
      {
        reading: 5.214,
        time: "2021-04-09T17:20:00.000Z",
      },
      {
        reading: 4.9,
        time: "2021-04-09T17:30:00.000Z",
      },
      {
        reading: 5.096,
        time: "2021-04-09T17:40:00.000Z",
      },
      {
        reading: 5.37,
        time: "2021-04-09T17:50:00.000Z",
      },
      {
        reading: 5.174,
        time: "2021-04-09T18:00:00.000Z",
      },
    ].map((ts) => ({ reading: ts.reading, time: new Date(ts.time) })),
    unit: "m/s",
  },
  direction: {
    name: "Wind Direction",
    timeSeries: [
      {
        reading: 197.4,
        time: "2021-04-02T19:30:00.000Z",
      },
      {
        reading: 205.8,
        time: "2021-04-02T19:40:00.000Z",
      },
      {
        reading: 210.3,
        time: "2021-04-02T19:50:00.000Z",
      },
      {
        reading: 213,
        time: "2021-04-02T20:00:00.000Z",
      },
      {
        reading: 206.9,
        time: "2021-04-02T20:10:00.000Z",
      },
      {
        reading: 207,
        time: "2021-04-02T20:20:00.000Z",
      },
      {
        reading: 206.7,
        time: "2021-04-02T20:30:00.000Z",
      },
      {
        reading: 206.4,
        time: "2021-04-02T20:40:00.000Z",
      },
      {
        reading: 212.2,
        time: "2021-04-02T20:50:00.000Z",
      },
      {
        reading: 216.8,
        time: "2021-04-02T21:00:00.000Z",
      },
      {
        reading: 222.2,
        time: "2021-04-02T21:10:00.000Z",
      },
      {
        reading: 229.2,
        time: "2021-04-02T21:20:00.000Z",
      },
      {
        reading: 222.5,
        time: "2021-04-02T21:30:00.000Z",
      },
      {
        reading: 226,
        time: "2021-04-02T21:40:00.000Z",
      },
      {
        reading: 228.5,
        time: "2021-04-02T21:50:00.000Z",
      },
      {
        reading: 221.8,
        time: "2021-04-02T22:00:00.000Z",
      },
      {
        reading: 230.8,
        time: "2021-04-02T22:10:00.000Z",
      },
      {
        reading: 234.9,
        time: "2021-04-02T22:20:00.000Z",
      },
      {
        reading: 238.1,
        time: "2021-04-02T22:30:00.000Z",
      },
      {
        reading: 241.1,
        time: "2021-04-02T22:40:00.000Z",
      },
      {
        reading: 241.7,
        time: "2021-04-02T22:50:00.000Z",
      },
      {
        reading: 238.9,
        time: "2021-04-02T23:00:00.000Z",
      },
      {
        reading: 244.5,
        time: "2021-04-02T23:10:00.000Z",
      },
      {
        reading: 255.2,
        time: "2021-04-02T23:20:00.000Z",
      },
      {
        reading: 252.6,
        time: "2021-04-02T23:30:00.000Z",
      },
      {
        reading: 276.8,
        time: "2021-04-02T23:40:00.000Z",
      },
      {
        reading: 315.8,
        time: "2021-04-02T23:50:00.000Z",
      },
      {
        reading: 358.66,
        time: "2021-04-03T00:00:00.000Z",
      },
      {
        reading: 351.016,
        time: "2021-04-03T00:10:00.000Z",
      },
      {
        reading: 351.59,
        time: "2021-04-03T00:20:00.000Z",
      },
      {
        reading: 352.044,
        time: "2021-04-03T00:30:00.000Z",
      },
      {
        reading: 354.4,
        time: "2021-04-03T00:40:00.000Z",
      },
      {
        reading: 349.021,
        time: "2021-04-03T00:50:00.000Z",
      },
      {
        reading: 343.7,
        time: "2021-04-03T01:00:00.000Z",
      },
      {
        reading: 347.556,
        time: "2021-04-03T01:10:00.000Z",
      },
      {
        reading: 348.955,
        time: "2021-04-03T01:20:00.000Z",
      },
      {
        reading: 353.35,
        time: "2021-04-03T01:30:00.000Z",
      },
      {
        reading: 348.214,
        time: "2021-04-03T01:40:00.000Z",
      },
      {
        reading: 345.552,
        time: "2021-04-03T01:50:00.000Z",
      },
      {
        reading: 349.624,
        time: "2021-04-03T02:00:00.000Z",
      },
      {
        reading: 355.44,
        time: "2021-04-03T02:10:00.000Z",
      },
      {
        reading: 337.3,
        time: "2021-04-03T02:20:00.000Z",
      },
      {
        reading: 334.4,
        time: "2021-04-03T02:30:00.000Z",
      },
      {
        reading: 336.5,
        time: "2021-04-03T02:40:00.000Z",
      },
      {
        reading: 338.7,
        time: "2021-04-03T02:50:00.000Z",
      },
      {
        reading: 332.7,
        time: "2021-04-03T03:00:00.000Z",
      },
      {
        reading: 346.256,
        time: "2021-04-03T03:10:00.000Z",
      },
      {
        reading: 348.513,
        time: "2021-04-03T03:20:00.000Z",
      },
      {
        reading: 350.225,
        time: "2021-04-03T03:30:00.000Z",
      },
      {
        reading: 343.9,
        time: "2021-04-03T03:40:00.000Z",
      },
      {
        reading: 348.273,
        time: "2021-04-03T03:50:00.000Z",
      },
      {
        reading: 352.24,
        time: "2021-04-03T04:00:00.000Z",
      },
      {
        reading: 351.236,
        time: "2021-04-03T04:10:00.000Z",
      },
      {
        reading: 344,
        time: "2021-04-03T04:20:00.000Z",
      },
      {
        reading: 348.028,
        time: "2021-04-03T04:30:00.000Z",
      },
      {
        reading: 349.881,
        time: "2021-04-03T04:40:00.000Z",
      },
      {
        reading: 336.2,
        time: "2021-04-03T04:50:00.000Z",
      },
      {
        reading: 343.1,
        time: "2021-04-03T05:00:00.000Z",
      },
      {
        reading: 351.444,
        time: "2021-04-03T05:10:00.000Z",
      },
      {
        reading: 346.702,
        time: "2021-04-03T05:20:00.000Z",
      },
      {
        reading: 350.745,
        time: "2021-04-03T05:30:00.000Z",
      },
      {
        reading: 357.72,
        time: "2021-04-03T05:40:00.000Z",
      },
      {
        reading: 3.21,
        time: "2021-04-03T05:50:00.000Z",
      },
      {
        reading: 356.83,
        time: "2021-04-03T06:00:00.000Z",
      },
      {
        reading: 358.11,
        time: "2021-04-03T06:10:00.000Z",
      },
      {
        reading: 353.17,
        time: "2021-04-03T06:20:00.000Z",
      },
      {
        reading: 351.882,
        time: "2021-04-03T06:30:00.000Z",
      },
      {
        reading: 351.748,
        time: "2021-04-03T06:40:00.000Z",
      },
      {
        reading: 346.259,
        time: "2021-04-03T06:50:00.000Z",
      },
      {
        reading: 349.637,
        time: "2021-04-03T07:00:00.000Z",
      },
      {
        reading: 347.776,
        time: "2021-04-03T07:10:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-03T07:20:00.000Z",
      },
      {
        reading: 340.8,
        time: "2021-04-03T07:30:00.000Z",
      },
      {
        reading: 332.2,
        time: "2021-04-03T07:40:00.000Z",
      },
      {
        reading: 330,
        time: "2021-04-03T07:50:00.000Z",
      },
      {
        reading: 327,
        time: "2021-04-03T08:00:00.000Z",
      },
      {
        reading: 333.7,
        time: "2021-04-03T08:10:00.000Z",
      },
      {
        reading: 333,
        time: "2021-04-03T08:20:00.000Z",
      },
      {
        reading: 338,
        time: "2021-04-03T08:30:00.000Z",
      },
      {
        reading: 343.1,
        time: "2021-04-03T08:40:00.000Z",
      },
      {
        reading: 339.5,
        time: "2021-04-03T08:50:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-03T09:00:00.000Z",
      },
      {
        reading: 336.1,
        time: "2021-04-03T09:10:00.000Z",
      },
      {
        reading: 332.5,
        time: "2021-04-03T09:20:00.000Z",
      },
      {
        reading: 333.5,
        time: "2021-04-03T09:30:00.000Z",
      },
      {
        reading: 340.8,
        time: "2021-04-03T09:40:00.000Z",
      },
      {
        reading: 337.6,
        time: "2021-04-03T09:50:00.000Z",
      },
      {
        reading: 342.6,
        time: "2021-04-03T10:00:00.000Z",
      },
      {
        reading: 344.1,
        time: "2021-04-03T10:10:00.000Z",
      },
      {
        reading: 340.8,
        time: "2021-04-03T10:20:00.000Z",
      },
      {
        reading: 0.74,
        time: "2021-04-03T10:30:00.000Z",
      },
      {
        reading: 358.83,
        time: "2021-04-03T10:40:00.000Z",
      },
      {
        reading: 344,
        time: "2021-04-03T10:50:00.000Z",
      },
      {
        reading: 339.6,
        time: "2021-04-03T11:00:00.000Z",
      },
      {
        reading: 335.7,
        time: "2021-04-03T11:10:00.000Z",
      },
      {
        reading: 339.3,
        time: "2021-04-03T11:20:00.000Z",
      },
      {
        reading: 337.7,
        time: "2021-04-03T11:30:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-03T11:40:00.000Z",
      },
      {
        reading: 343.9,
        time: "2021-04-03T11:50:00.000Z",
      },
      {
        reading: 354.43,
        time: "2021-04-03T12:00:00.000Z",
      },
      {
        reading: 357.37,
        time: "2021-04-03T12:10:00.000Z",
      },
      {
        reading: 358.78,
        time: "2021-04-03T12:20:00.000Z",
      },
      {
        reading: 354.31,
        time: "2021-04-03T12:30:00.000Z",
      },
      {
        reading: 0.28,
        time: "2021-04-03T12:40:00.000Z",
      },
      {
        reading: 1.24,
        time: "2021-04-03T12:50:00.000Z",
      },
      {
        reading: 9.37,
        time: "2021-04-03T13:00:00.000Z",
      },
      {
        reading: 2.67,
        time: "2021-04-03T13:10:00.000Z",
      },
      {
        reading: 7.74,
        time: "2021-04-03T13:20:00.000Z",
      },
      {
        reading: 9.86,
        time: "2021-04-03T13:30:00.000Z",
      },
      {
        reading: 2.95,
        time: "2021-04-03T13:40:00.000Z",
      },
      {
        reading: 11.92,
        time: "2021-04-03T13:50:00.000Z",
      },
      {
        reading: 20.25,
        time: "2021-04-03T14:00:00.000Z",
      },
      {
        reading: 32.23,
        time: "2021-04-03T14:10:00.000Z",
      },
      {
        reading: 37.82,
        time: "2021-04-03T14:20:00.000Z",
      },
      {
        reading: 32.98,
        time: "2021-04-03T14:30:00.000Z",
      },
      {
        reading: 33.77,
        time: "2021-04-03T14:40:00.000Z",
      },
      {
        reading: 33,
        time: "2021-04-03T14:50:00.000Z",
      },
      {
        reading: 42.86,
        time: "2021-04-03T15:00:00.000Z",
      },
      {
        reading: 55.84,
        time: "2021-04-03T15:10:00.000Z",
      },
      {
        reading: 65.3,
        time: "2021-04-03T15:20:00.000Z",
      },
      {
        reading: 73.7,
        time: "2021-04-03T15:30:00.000Z",
      },
      {
        reading: 69.4,
        time: "2021-04-03T15:40:00.000Z",
      },
      {
        reading: 59.12,
        time: "2021-04-03T15:50:00.000Z",
      },
      {
        reading: 68,
        time: "2021-04-03T16:00:00.000Z",
      },
      {
        reading: 139.1,
        time: "2021-04-03T16:10:00.000Z",
      },
      {
        reading: 127,
        time: "2021-04-03T16:20:00.000Z",
      },
      {
        reading: 128.3,
        time: "2021-04-03T16:30:00.000Z",
      },
      {
        reading: 175.9,
        time: "2021-04-03T16:40:00.000Z",
      },
      {
        reading: 189,
        time: "2021-04-03T16:50:00.000Z",
      },
      {
        reading: 181.8,
        time: "2021-04-03T17:00:00.000Z",
      },
      {
        reading: 186.5,
        time: "2021-04-03T17:10:00.000Z",
      },
      {
        reading: 179.4,
        time: "2021-04-03T17:20:00.000Z",
      },
      {
        reading: 185.4,
        time: "2021-04-03T17:30:00.000Z",
      },
      {
        reading: 183.1,
        time: "2021-04-03T17:40:00.000Z",
      },
      {
        reading: 190.9,
        time: "2021-04-03T17:50:00.000Z",
      },
      {
        reading: 188.9,
        time: "2021-04-03T18:00:00.000Z",
      },
      {
        reading: 195.5,
        time: "2021-04-03T18:10:00.000Z",
      },
      {
        reading: 194.3,
        time: "2021-04-03T18:20:00.000Z",
      },
      {
        reading: 197.4,
        time: "2021-04-03T18:30:00.000Z",
      },
      {
        reading: 201.1,
        time: "2021-04-03T18:40:00.000Z",
      },
      {
        reading: 204.1,
        time: "2021-04-03T18:50:00.000Z",
      },
      {
        reading: 194.2,
        time: "2021-04-03T19:00:00.000Z",
      },
      {
        reading: 188.1,
        time: "2021-04-03T19:10:00.000Z",
      },
      {
        reading: 191,
        time: "2021-04-03T19:20:00.000Z",
      },
      {
        reading: 188.5,
        time: "2021-04-03T19:30:00.000Z",
      },
      {
        reading: 201.2,
        time: "2021-04-03T19:40:00.000Z",
      },
      {
        reading: 209.1,
        time: "2021-04-03T19:50:00.000Z",
      },
      {
        reading: 212.7,
        time: "2021-04-03T20:00:00.000Z",
      },
      {
        reading: 197.6,
        time: "2021-04-03T20:10:00.000Z",
      },
      {
        reading: 200.3,
        time: "2021-04-03T20:20:00.000Z",
      },
      {
        reading: 206.8,
        time: "2021-04-03T20:30:00.000Z",
      },
      {
        reading: 208.6,
        time: "2021-04-03T20:40:00.000Z",
      },
      {
        reading: 200.2,
        time: "2021-04-03T20:50:00.000Z",
      },
      {
        reading: 200.2,
        time: "2021-04-03T21:00:00.000Z",
      },
      {
        reading: 211.3,
        time: "2021-04-03T21:10:00.000Z",
      },
      {
        reading: 213.3,
        time: "2021-04-03T21:20:00.000Z",
      },
      {
        reading: 216.1,
        time: "2021-04-03T21:30:00.000Z",
      },
      {
        reading: 205.4,
        time: "2021-04-03T21:40:00.000Z",
      },
      {
        reading: 197.3,
        time: "2021-04-03T21:50:00.000Z",
      },
      {
        reading: 196.5,
        time: "2021-04-03T22:00:00.000Z",
      },
      {
        reading: 192.6,
        time: "2021-04-03T22:10:00.000Z",
      },
      {
        reading: 195.9,
        time: "2021-04-03T22:20:00.000Z",
      },
      {
        reading: 203,
        time: "2021-04-03T22:30:00.000Z",
      },
      {
        reading: 204.6,
        time: "2021-04-03T22:40:00.000Z",
      },
      {
        reading: 201.6,
        time: "2021-04-03T22:50:00.000Z",
      },
      {
        reading: 205,
        time: "2021-04-03T23:00:00.000Z",
      },
      {
        reading: 208.8,
        time: "2021-04-03T23:10:00.000Z",
      },
      {
        reading: 236.5,
        time: "2021-04-03T23:20:00.000Z",
      },
      {
        reading: 274.4,
        time: "2021-04-03T23:30:00.000Z",
      },
      {
        reading: 289.9,
        time: "2021-04-03T23:40:00.000Z",
      },
      {
        reading: 304.2,
        time: "2021-04-03T23:50:00.000Z",
      },
      {
        reading: 310.4,
        time: "2021-04-04T00:00:00.000Z",
      },
      {
        reading: 330.8,
        time: "2021-04-04T00:10:00.000Z",
      },
      {
        reading: 331.2,
        time: "2021-04-04T00:20:00.000Z",
      },
      {
        reading: 344,
        time: "2021-04-04T00:30:00.000Z",
      },
      {
        reading: 340.7,
        time: "2021-04-04T00:40:00.000Z",
      },
      {
        reading: 342.4,
        time: "2021-04-04T00:50:00.000Z",
      },
      {
        reading: 346.513,
        time: "2021-04-04T01:00:00.000Z",
      },
      {
        reading: 347.996,
        time: "2021-04-04T01:10:00.000Z",
      },
      {
        reading: 345.735,
        time: "2021-04-04T01:20:00.000Z",
      },
      {
        reading: 351.838,
        time: "2021-04-04T01:30:00.000Z",
      },
      {
        reading: 352.41,
        time: "2021-04-04T01:40:00.000Z",
      },
      {
        reading: 357.09,
        time: "2021-04-04T01:50:00.000Z",
      },
      {
        reading: 359.02,
        time: "2021-04-04T02:00:00.000Z",
      },
      {
        reading: 355.76,
        time: "2021-04-04T02:10:00.000Z",
      },
      {
        reading: 356.09,
        time: "2021-04-04T02:20:00.000Z",
      },
      {
        reading: 353.77,
        time: "2021-04-04T02:30:00.000Z",
      },
      {
        reading: 354.24,
        time: "2021-04-04T02:40:00.000Z",
      },
      {
        reading: 359.64,
        time: "2021-04-04T02:50:00.000Z",
      },
      {
        reading: 1.56,
        time: "2021-04-04T03:00:00.000Z",
      },
      {
        reading: 356.93,
        time: "2021-04-04T03:10:00.000Z",
      },
      {
        reading: 353.97,
        time: "2021-04-04T03:20:00.000Z",
      },
      {
        reading: 357.38,
        time: "2021-04-04T03:30:00.000Z",
      },
      {
        reading: 358.05,
        time: "2021-04-04T03:40:00.000Z",
      },
      {
        reading: 354.77,
        time: "2021-04-04T03:50:00.000Z",
      },
      {
        reading: 356.22,
        time: "2021-04-04T04:00:00.000Z",
      },
      {
        reading: 355.69,
        time: "2021-04-04T04:10:00.000Z",
      },
      {
        reading: 356.28,
        time: "2021-04-04T04:20:00.000Z",
      },
      {
        reading: 355.49,
        time: "2021-04-04T04:30:00.000Z",
      },
      {
        reading: 357.15,
        time: "2021-04-04T04:40:00.000Z",
      },
      {
        reading: 358.45,
        time: "2021-04-04T04:50:00.000Z",
      },
      {
        reading: 3.08,
        time: "2021-04-04T05:00:00.000Z",
      },
      {
        reading: 7.53,
        time: "2021-04-04T05:10:00.000Z",
      },
      {
        reading: 4.25,
        time: "2021-04-04T05:20:00.000Z",
      },
      {
        reading: 9.59,
        time: "2021-04-04T05:30:00.000Z",
      },
      {
        reading: 7.37,
        time: "2021-04-04T05:40:00.000Z",
      },
      {
        reading: 7.87,
        time: "2021-04-04T05:50:00.000Z",
      },
      {
        reading: 10.09,
        time: "2021-04-04T06:00:00.000Z",
      },
      {
        reading: 6.95,
        time: "2021-04-04T06:10:00.000Z",
      },
      {
        reading: 6.51,
        time: "2021-04-04T06:20:00.000Z",
      },
      {
        reading: 5.56,
        time: "2021-04-04T06:30:00.000Z",
      },
      {
        reading: 11.79,
        time: "2021-04-04T06:40:00.000Z",
      },
      {
        reading: 13.76,
        time: "2021-04-04T06:50:00.000Z",
      },
      {
        reading: 5.78,
        time: "2021-04-04T07:00:00.000Z",
      },
      {
        reading: 358.79,
        time: "2021-04-04T07:10:00.000Z",
      },
      {
        reading: 352.78,
        time: "2021-04-04T07:20:00.000Z",
      },
      {
        reading: 346.825,
        time: "2021-04-04T07:30:00.000Z",
      },
      {
        reading: 346.462,
        time: "2021-04-04T07:40:00.000Z",
      },
      {
        reading: 345.926,
        time: "2021-04-04T07:50:00.000Z",
      },
      {
        reading: 322.7,
        time: "2021-04-04T08:00:00.000Z",
      },
      {
        reading: 321.9,
        time: "2021-04-04T08:10:00.000Z",
      },
      {
        reading: 315.4,
        time: "2021-04-04T08:20:00.000Z",
      },
      {
        reading: 310.6,
        time: "2021-04-04T08:30:00.000Z",
      },
      {
        reading: 331.1,
        time: "2021-04-04T08:40:00.000Z",
      },
      {
        reading: 310.8,
        time: "2021-04-04T08:50:00.000Z",
      },
      {
        reading: 325.6,
        time: "2021-04-04T09:00:00.000Z",
      },
      {
        reading: 344.551,
        time: "2021-04-04T09:10:00.000Z",
      },
      {
        reading: 339.2,
        time: "2021-04-04T09:20:00.000Z",
      },
      {
        reading: 301.7,
        time: "2021-04-04T09:30:00.000Z",
      },
      {
        reading: 320.2,
        time: "2021-04-04T09:40:00.000Z",
      },
      {
        reading: 336.3,
        time: "2021-04-04T09:50:00.000Z",
      },
      {
        reading: 322.3,
        time: "2021-04-04T10:00:00.000Z",
      },
      {
        reading: 309.3,
        time: "2021-04-04T10:10:00.000Z",
      },
      {
        reading: 306.4,
        time: "2021-04-04T10:20:00.000Z",
      },
      {
        reading: 319.9,
        time: "2021-04-04T10:30:00.000Z",
      },
      {
        reading: 327.9,
        time: "2021-04-04T10:40:00.000Z",
      },
      {
        reading: 342.6,
        time: "2021-04-04T10:50:00.000Z",
      },
      {
        reading: 349.912,
        time: "2021-04-04T11:00:00.000Z",
      },
      {
        reading: 345.091,
        time: "2021-04-04T11:10:00.000Z",
      },
      {
        reading: 346.947,
        time: "2021-04-04T11:20:00.000Z",
      },
      {
        reading: 359.13,
        time: "2021-04-04T11:30:00.000Z",
      },
      {
        reading: 15.66,
        time: "2021-04-04T11:40:00.000Z",
      },
      {
        reading: 10.52,
        time: "2021-04-04T11:50:00.000Z",
      },
      {
        reading: 5.25,
        time: "2021-04-04T12:00:00.000Z",
      },
      {
        reading: 6.31,
        time: "2021-04-04T12:10:00.000Z",
      },
      {
        reading: 6.81,
        time: "2021-04-04T12:20:00.000Z",
      },
      {
        reading: 7.42,
        time: "2021-04-04T12:30:00.000Z",
      },
      {
        reading: 358.25,
        time: "2021-04-04T12:40:00.000Z",
      },
      {
        reading: 357.48,
        time: "2021-04-04T12:50:00.000Z",
      },
      {
        reading: 5.16,
        time: "2021-04-04T13:00:00.000Z",
      },
      {
        reading: 5.07,
        time: "2021-04-04T13:10:00.000Z",
      },
      {
        reading: 3.63,
        time: "2021-04-04T13:20:00.000Z",
      },
      {
        reading: 2.81,
        time: "2021-04-04T13:30:00.000Z",
      },
      {
        reading: 359.45,
        time: "2021-04-04T13:40:00.000Z",
      },
      {
        reading: 355.8,
        time: "2021-04-04T13:50:00.000Z",
      },
      {
        reading: 350.774,
        time: "2021-04-04T14:00:00.000Z",
      },
      {
        reading: 345.788,
        time: "2021-04-04T14:10:00.000Z",
      },
      {
        reading: 345.499,
        time: "2021-04-04T14:20:00.000Z",
      },
      {
        reading: 339.6,
        time: "2021-04-04T14:30:00.000Z",
      },
      {
        reading: 345.989,
        time: "2021-04-04T14:40:00.000Z",
      },
      {
        reading: 345.124,
        time: "2021-04-04T14:50:00.000Z",
      },
      {
        reading: 343.9,
        time: "2021-04-04T15:00:00.000Z",
      },
      {
        reading: 349.481,
        time: "2021-04-04T15:10:00.000Z",
      },
      {
        reading: 347.987,
        time: "2021-04-04T15:20:00.000Z",
      },
      {
        reading: 341.5,
        time: "2021-04-04T15:30:00.000Z",
      },
      {
        reading: 340.9,
        time: "2021-04-04T15:40:00.000Z",
      },
      {
        reading: 337.8,
        time: "2021-04-04T15:50:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-04T16:00:00.000Z",
      },
      {
        reading: 341,
        time: "2021-04-04T16:10:00.000Z",
      },
      {
        reading: 337.3,
        time: "2021-04-04T16:20:00.000Z",
      },
      {
        reading: 340.3,
        time: "2021-04-04T16:30:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-04T16:40:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-04T16:50:00.000Z",
      },
      {
        reading: 344,
        time: "2021-04-04T17:00:00.000Z",
      },
      {
        reading: 343.8,
        time: "2021-04-04T17:10:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-04T17:20:00.000Z",
      },
      {
        reading: 338.6,
        time: "2021-04-04T17:30:00.000Z",
      },
      {
        reading: 340.3,
        time: "2021-04-04T17:40:00.000Z",
      },
      {
        reading: 339.3,
        time: "2021-04-04T17:50:00.000Z",
      },
      {
        reading: 339,
        time: "2021-04-04T18:00:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-04T18:10:00.000Z",
      },
      {
        reading: 338.8,
        time: "2021-04-04T18:20:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-04T18:30:00.000Z",
      },
      {
        reading: 343.5,
        time: "2021-04-04T18:40:00.000Z",
      },
      {
        reading: 346.621,
        time: "2021-04-04T18:50:00.000Z",
      },
      {
        reading: 349.51,
        time: "2021-04-04T19:00:00.000Z",
      },
      {
        reading: 341.3,
        time: "2021-04-04T19:10:00.000Z",
      },
      {
        reading: 341.7,
        time: "2021-04-04T19:20:00.000Z",
      },
      {
        reading: 344.298,
        time: "2021-04-04T19:30:00.000Z",
      },
      {
        reading: 343,
        time: "2021-04-04T19:40:00.000Z",
      },
      {
        reading: 344.2,
        time: "2021-04-04T19:50:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-04T20:00:00.000Z",
      },
      {
        reading: 343.8,
        time: "2021-04-04T20:10:00.000Z",
      },
      {
        reading: 336.4,
        time: "2021-04-04T20:20:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-04T20:30:00.000Z",
      },
      {
        reading: 348.062,
        time: "2021-04-04T20:40:00.000Z",
      },
      {
        reading: 350.602,
        time: "2021-04-04T20:50:00.000Z",
      },
      {
        reading: 349.556,
        time: "2021-04-04T21:00:00.000Z",
      },
      {
        reading: 352.38,
        time: "2021-04-04T21:10:00.000Z",
      },
      {
        reading: 352.74,
        time: "2021-04-04T21:20:00.000Z",
      },
      {
        reading: 350.196,
        time: "2021-04-04T21:30:00.000Z",
      },
      {
        reading: 343.4,
        time: "2021-04-04T21:40:00.000Z",
      },
      {
        reading: 349.52,
        time: "2021-04-04T21:50:00.000Z",
      },
      {
        reading: 350.418,
        time: "2021-04-04T22:00:00.000Z",
      },
      {
        reading: 345.933,
        time: "2021-04-04T22:10:00.000Z",
      },
      {
        reading: 347.066,
        time: "2021-04-04T22:20:00.000Z",
      },
      {
        reading: 347.292,
        time: "2021-04-04T22:30:00.000Z",
      },
      {
        reading: 346.956,
        time: "2021-04-04T22:40:00.000Z",
      },
      {
        reading: 344.932,
        time: "2021-04-04T22:50:00.000Z",
      },
      {
        reading: 346.898,
        time: "2021-04-04T23:00:00.000Z",
      },
      {
        reading: 349.803,
        time: "2021-04-04T23:10:00.000Z",
      },
      {
        reading: 349.25,
        time: "2021-04-04T23:20:00.000Z",
      },
      {
        reading: 351.786,
        time: "2021-04-04T23:30:00.000Z",
      },
      {
        reading: 351.597,
        time: "2021-04-04T23:40:00.000Z",
      },
      {
        reading: 350.043,
        time: "2021-04-04T23:50:00.000Z",
      },
      {
        reading: 350.694,
        time: "2021-04-05T00:00:00.000Z",
      },
      {
        reading: 352.25,
        time: "2021-04-05T00:10:00.000Z",
      },
      {
        reading: 359.24,
        time: "2021-04-05T00:20:00.000Z",
      },
      {
        reading: 4.64,
        time: "2021-04-05T00:30:00.000Z",
      },
      {
        reading: 3.79,
        time: "2021-04-05T00:40:00.000Z",
      },
      {
        reading: 0.34,
        time: "2021-04-05T00:50:00.000Z",
      },
      {
        reading: 356.9,
        time: "2021-04-05T01:00:00.000Z",
      },
      {
        reading: 352.65,
        time: "2021-04-05T01:10:00.000Z",
      },
      {
        reading: 354.32,
        time: "2021-04-05T01:20:00.000Z",
      },
      {
        reading: 2.61,
        time: "2021-04-05T01:30:00.000Z",
      },
      {
        reading: 6.83,
        time: "2021-04-05T01:40:00.000Z",
      },
      {
        reading: 6.41,
        time: "2021-04-05T01:50:00.000Z",
      },
      {
        reading: 7.14,
        time: "2021-04-05T02:00:00.000Z",
      },
      {
        reading: 10.75,
        time: "2021-04-05T02:10:00.000Z",
      },
      {
        reading: 20.44,
        time: "2021-04-05T02:20:00.000Z",
      },
      {
        reading: 19.68,
        time: "2021-04-05T02:30:00.000Z",
      },
      {
        reading: 17.01,
        time: "2021-04-05T02:40:00.000Z",
      },
      {
        reading: 12.05,
        time: "2021-04-05T02:50:00.000Z",
      },
      {
        reading: 4.02,
        time: "2021-04-05T03:00:00.000Z",
      },
      {
        reading: 2.58,
        time: "2021-04-05T03:10:00.000Z",
      },
      {
        reading: 1.27,
        time: "2021-04-05T03:20:00.000Z",
      },
      {
        reading: 355.6,
        time: "2021-04-05T03:30:00.000Z",
      },
      {
        reading: 350.112,
        time: "2021-04-05T03:40:00.000Z",
      },
      {
        reading: 340.3,
        time: "2021-04-05T03:50:00.000Z",
      },
      {
        reading: 338.7,
        time: "2021-04-05T04:00:00.000Z",
      },
      {
        reading: 337.4,
        time: "2021-04-05T04:10:00.000Z",
      },
      {
        reading: 336.4,
        time: "2021-04-05T04:20:00.000Z",
      },
      {
        reading: 339.1,
        time: "2021-04-05T04:30:00.000Z",
      },
      {
        reading: 339.8,
        time: "2021-04-05T04:40:00.000Z",
      },
      {
        reading: 338.4,
        time: "2021-04-05T04:50:00.000Z",
      },
      {
        reading: 337.5,
        time: "2021-04-05T05:00:00.000Z",
      },
      {
        reading: 336.1,
        time: "2021-04-05T05:10:00.000Z",
      },
      {
        reading: 335.1,
        time: "2021-04-05T05:20:00.000Z",
      },
      {
        reading: 335.6,
        time: "2021-04-05T05:30:00.000Z",
      },
      {
        reading: 335.8,
        time: "2021-04-05T05:40:00.000Z",
      },
      {
        reading: 334.4,
        time: "2021-04-05T05:50:00.000Z",
      },
      {
        reading: 334.7,
        time: "2021-04-05T06:00:00.000Z",
      },
      {
        reading: 335.4,
        time: "2021-04-05T06:10:00.000Z",
      },
      {
        reading: 335.8,
        time: "2021-04-05T06:20:00.000Z",
      },
      {
        reading: 337.1,
        time: "2021-04-05T06:30:00.000Z",
      },
      {
        reading: 335.1,
        time: "2021-04-05T06:40:00.000Z",
      },
      {
        reading: 335,
        time: "2021-04-05T06:50:00.000Z",
      },
      {
        reading: 338.8,
        time: "2021-04-05T07:00:00.000Z",
      },
      {
        reading: 337,
        time: "2021-04-05T07:10:00.000Z",
      },
      {
        reading: 338.3,
        time: "2021-04-05T07:20:00.000Z",
      },
      {
        reading: 337.6,
        time: "2021-04-05T07:30:00.000Z",
      },
      {
        reading: 340,
        time: "2021-04-05T07:40:00.000Z",
      },
      {
        reading: 339.1,
        time: "2021-04-05T07:50:00.000Z",
      },
      {
        reading: 340.1,
        time: "2021-04-05T08:00:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-05T08:10:00.000Z",
      },
      {
        reading: 342.8,
        time: "2021-04-05T08:20:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-05T08:30:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-05T08:40:00.000Z",
      },
      {
        reading: 339.3,
        time: "2021-04-05T08:50:00.000Z",
      },
      {
        reading: 340.7,
        time: "2021-04-05T09:00:00.000Z",
      },
      {
        reading: 336,
        time: "2021-04-05T09:10:00.000Z",
      },
      {
        reading: 336,
        time: "2021-04-05T09:20:00.000Z",
      },
      {
        reading: 333.8,
        time: "2021-04-05T09:30:00.000Z",
      },
      {
        reading: 334.1,
        time: "2021-04-05T09:40:00.000Z",
      },
      {
        reading: 336.6,
        time: "2021-04-05T09:50:00.000Z",
      },
      {
        reading: 334.5,
        time: "2021-04-05T10:00:00.000Z",
      },
      {
        reading: 335.4,
        time: "2021-04-05T10:10:00.000Z",
      },
      {
        reading: 333.5,
        time: "2021-04-05T10:20:00.000Z",
      },
      {
        reading: 335.5,
        time: "2021-04-05T10:30:00.000Z",
      },
      {
        reading: 334.3,
        time: "2021-04-05T10:40:00.000Z",
      },
      {
        reading: 335.3,
        time: "2021-04-05T10:50:00.000Z",
      },
      {
        reading: 333.3,
        time: "2021-04-05T11:00:00.000Z",
      },
      {
        reading: 332,
        time: "2021-04-05T11:10:00.000Z",
      },
      {
        reading: 331.3,
        time: "2021-04-05T11:20:00.000Z",
      },
      {
        reading: 331.3,
        time: "2021-04-05T11:30:00.000Z",
      },
      {
        reading: 332,
        time: "2021-04-05T11:40:00.000Z",
      },
      {
        reading: 333.9,
        time: "2021-04-05T11:50:00.000Z",
      },
      {
        reading: 335.4,
        time: "2021-04-05T12:00:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-05T12:10:00.000Z",
      },
      {
        reading: 335.5,
        time: "2021-04-05T12:20:00.000Z",
      },
      {
        reading: 337.1,
        time: "2021-04-05T12:30:00.000Z",
      },
      {
        reading: 337.2,
        time: "2021-04-05T12:40:00.000Z",
      },
      {
        reading: 340.1,
        time: "2021-04-05T12:50:00.000Z",
      },
      {
        reading: 342.2,
        time: "2021-04-05T13:00:00.000Z",
      },
      {
        reading: 341.6,
        time: "2021-04-05T13:10:00.000Z",
      },
      {
        reading: 346.636,
        time: "2021-04-05T13:20:00.000Z",
      },
      {
        reading: 347.238,
        time: "2021-04-05T13:30:00.000Z",
      },
      {
        reading: 344.786,
        time: "2021-04-05T13:40:00.000Z",
      },
      {
        reading: 344.528,
        time: "2021-04-05T13:50:00.000Z",
      },
      {
        reading: 346.928,
        time: "2021-04-05T14:00:00.000Z",
      },
      {
        reading: 347.982,
        time: "2021-04-05T14:10:00.000Z",
      },
      {
        reading: 350.379,
        time: "2021-04-05T14:20:00.000Z",
      },
      {
        reading: 343.6,
        time: "2021-04-05T14:30:00.000Z",
      },
      {
        reading: 338.7,
        time: "2021-04-05T14:40:00.000Z",
      },
      {
        reading: 340.9,
        time: "2021-04-05T14:50:00.000Z",
      },
      {
        reading: 345.968,
        time: "2021-04-05T15:00:00.000Z",
      },
      {
        reading: 347.337,
        time: "2021-04-05T15:10:00.000Z",
      },
      {
        reading: 347.278,
        time: "2021-04-05T15:20:00.000Z",
      },
      {
        reading: 348.295,
        time: "2021-04-05T15:30:00.000Z",
      },
      {
        reading: 349.475,
        time: "2021-04-05T15:40:00.000Z",
      },
      {
        reading: 350.243,
        time: "2021-04-05T15:50:00.000Z",
      },
      {
        reading: 350.767,
        time: "2021-04-05T16:00:00.000Z",
      },
      {
        reading: 349.681,
        time: "2021-04-05T16:10:00.000Z",
      },
      {
        reading: 349.425,
        time: "2021-04-05T16:20:00.000Z",
      },
      {
        reading: 349.378,
        time: "2021-04-05T16:30:00.000Z",
      },
      {
        reading: 350.982,
        time: "2021-04-05T16:40:00.000Z",
      },
      {
        reading: 351.863,
        time: "2021-04-05T16:50:00.000Z",
      },
      {
        reading: 353.53,
        time: "2021-04-05T17:00:00.000Z",
      },
      {
        reading: 354.1,
        time: "2021-04-05T17:10:00.000Z",
      },
      {
        reading: 354.31,
        time: "2021-04-05T17:20:00.000Z",
      },
      {
        reading: 354.82,
        time: "2021-04-05T17:30:00.000Z",
      },
      {
        reading: 355.43,
        time: "2021-04-05T17:40:00.000Z",
      },
      {
        reading: 352.89,
        time: "2021-04-05T17:50:00.000Z",
      },
      {
        reading: 354.95,
        time: "2021-04-05T18:00:00.000Z",
      },
      {
        reading: 355.25,
        time: "2021-04-05T18:10:00.000Z",
      },
      {
        reading: 353.05,
        time: "2021-04-05T18:20:00.000Z",
      },
      {
        reading: 349.006,
        time: "2021-04-05T18:30:00.000Z",
      },
      {
        reading: 352.82,
        time: "2021-04-05T18:40:00.000Z",
      },
      {
        reading: 353.27,
        time: "2021-04-05T18:50:00.000Z",
      },
      {
        reading: 351.093,
        time: "2021-04-05T19:00:00.000Z",
      },
      {
        reading: 351.656,
        time: "2021-04-05T19:10:00.000Z",
      },
      {
        reading: 344.689,
        time: "2021-04-05T19:20:00.000Z",
      },
      {
        reading: 343.8,
        time: "2021-04-05T19:30:00.000Z",
      },
      {
        reading: 346.912,
        time: "2021-04-05T19:40:00.000Z",
      },
      {
        reading: 347.674,
        time: "2021-04-05T19:50:00.000Z",
      },
      {
        reading: 350.87,
        time: "2021-04-05T20:00:00.000Z",
      },
      {
        reading: 349.549,
        time: "2021-04-05T20:10:00.000Z",
      },
      {
        reading: 346.805,
        time: "2021-04-05T20:20:00.000Z",
      },
      {
        reading: 345.891,
        time: "2021-04-05T20:30:00.000Z",
      },
      {
        reading: 344.1,
        time: "2021-04-05T20:40:00.000Z",
      },
      {
        reading: 345.385,
        time: "2021-04-05T20:50:00.000Z",
      },
      {
        reading: 340.7,
        time: "2021-04-05T21:00:00.000Z",
      },
      {
        reading: 342.5,
        time: "2021-04-05T21:10:00.000Z",
      },
      {
        reading: 342.3,
        time: "2021-04-05T21:20:00.000Z",
      },
      {
        reading: 341,
        time: "2021-04-05T21:30:00.000Z",
      },
      {
        reading: 341.9,
        time: "2021-04-05T21:40:00.000Z",
      },
      {
        reading: 340.5,
        time: "2021-04-05T21:50:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-05T22:00:00.000Z",
      },
      {
        reading: 338,
        time: "2021-04-05T22:10:00.000Z",
      },
      {
        reading: 340.1,
        time: "2021-04-05T22:20:00.000Z",
      },
      {
        reading: 337.7,
        time: "2021-04-05T22:30:00.000Z",
      },
      {
        reading: 335.2,
        time: "2021-04-05T22:40:00.000Z",
      },
      {
        reading: 337.3,
        time: "2021-04-05T22:50:00.000Z",
      },
      {
        reading: 334.5,
        time: "2021-04-05T23:00:00.000Z",
      },
      {
        reading: 336.8,
        time: "2021-04-05T23:10:00.000Z",
      },
      {
        reading: 336.7,
        time: "2021-04-05T23:20:00.000Z",
      },
      {
        reading: 334.9,
        time: "2021-04-05T23:30:00.000Z",
      },
      {
        reading: 334.6,
        time: "2021-04-05T23:40:00.000Z",
      },
      {
        reading: 335.4,
        time: "2021-04-05T23:50:00.000Z",
      },
      {
        reading: 336.4,
        time: "2021-04-06T00:00:00.000Z",
      },
      {
        reading: 338.4,
        time: "2021-04-06T00:10:00.000Z",
      },
      {
        reading: 337.6,
        time: "2021-04-06T00:20:00.000Z",
      },
      {
        reading: 336.9,
        time: "2021-04-06T00:30:00.000Z",
      },
      {
        reading: 334,
        time: "2021-04-06T00:40:00.000Z",
      },
      {
        reading: 342.1,
        time: "2021-04-06T00:50:00.000Z",
      },
      {
        reading: 339.8,
        time: "2021-04-06T01:00:00.000Z",
      },
      {
        reading: 333.5,
        time: "2021-04-06T01:10:00.000Z",
      },
      {
        reading: 333.8,
        time: "2021-04-06T01:20:00.000Z",
      },
      {
        reading: 333.7,
        time: "2021-04-06T01:30:00.000Z",
      },
      {
        reading: 335.6,
        time: "2021-04-06T01:40:00.000Z",
      },
      {
        reading: 337.2,
        time: "2021-04-06T01:50:00.000Z",
      },
      {
        reading: 339,
        time: "2021-04-06T02:00:00.000Z",
      },
      {
        reading: 338.4,
        time: "2021-04-06T02:10:00.000Z",
      },
      {
        reading: 340.5,
        time: "2021-04-06T02:20:00.000Z",
      },
      {
        reading: 342.3,
        time: "2021-04-06T02:30:00.000Z",
      },
      {
        reading: 341.4,
        time: "2021-04-06T02:40:00.000Z",
      },
      {
        reading: 343.2,
        time: "2021-04-06T02:50:00.000Z",
      },
      {
        reading: 342.9,
        time: "2021-04-06T03:00:00.000Z",
      },
      {
        reading: 347.935,
        time: "2021-04-06T03:10:00.000Z",
      },
      {
        reading: 343.4,
        time: "2021-04-06T03:20:00.000Z",
      },
      {
        reading: 342.5,
        time: "2021-04-06T03:30:00.000Z",
      },
      {
        reading: 345.935,
        time: "2021-04-06T03:40:00.000Z",
      },
      {
        reading: 345.909,
        time: "2021-04-06T03:50:00.000Z",
      },
      {
        reading: 346.44,
        time: "2021-04-06T04:00:00.000Z",
      },
      {
        reading: 344.1,
        time: "2021-04-06T04:10:00.000Z",
      },
      {
        reading: 347.855,
        time: "2021-04-06T04:20:00.000Z",
      },
      {
        reading: 348.974,
        time: "2021-04-06T04:30:00.000Z",
      },
      {
        reading: 349.863,
        time: "2021-04-06T04:40:00.000Z",
      },
      {
        reading: 348.65,
        time: "2021-04-06T04:50:00.000Z",
      },
      {
        reading: 350.776,
        time: "2021-04-06T05:00:00.000Z",
      },
      {
        reading: 352.97,
        time: "2021-04-06T05:10:00.000Z",
      },
      {
        reading: 351.865,
        time: "2021-04-06T05:20:00.000Z",
      },
      {
        reading: 350.43,
        time: "2021-04-06T05:30:00.000Z",
      },
      {
        reading: 345.575,
        time: "2021-04-06T05:40:00.000Z",
      },
      {
        reading: 346.582,
        time: "2021-04-06T05:50:00.000Z",
      },
      {
        reading: 347.885,
        time: "2021-04-06T06:00:00.000Z",
      },
      {
        reading: 346.536,
        time: "2021-04-06T06:10:00.000Z",
      },
      {
        reading: 348.368,
        time: "2021-04-06T06:20:00.000Z",
      },
      {
        reading: 348.986,
        time: "2021-04-06T06:30:00.000Z",
      },
      {
        reading: 348.744,
        time: "2021-04-06T06:40:00.000Z",
      },
      {
        reading: 348.988,
        time: "2021-04-06T06:50:00.000Z",
      },
      {
        reading: 351.031,
        time: "2021-04-06T07:00:00.000Z",
      },
      {
        reading: 351.509,
        time: "2021-04-06T07:10:00.000Z",
      },
      {
        reading: 352.95,
        time: "2021-04-06T07:20:00.000Z",
      },
      {
        reading: 350.743,
        time: "2021-04-06T07:30:00.000Z",
      },
      {
        reading: 351.806,
        time: "2021-04-06T07:40:00.000Z",
      },
      {
        reading: 354.16,
        time: "2021-04-06T07:50:00.000Z",
      },
      {
        reading: 355.23,
        time: "2021-04-06T08:00:00.000Z",
      },
      {
        reading: 354.79,
        time: "2021-04-06T08:10:00.000Z",
      },
      {
        reading: 356.48,
        time: "2021-04-06T08:20:00.000Z",
      },
      {
        reading: 358.12,
        time: "2021-04-06T08:30:00.000Z",
      },
      {
        reading: 359.33,
        time: "2021-04-06T08:40:00.000Z",
      },
      {
        reading: 359.3,
        time: "2021-04-06T08:50:00.000Z",
      },
      {
        reading: 0.1,
        time: "2021-04-06T09:00:00.000Z",
      },
      {
        reading: 0.02,
        time: "2021-04-06T09:10:00.000Z",
      },
      {
        reading: 0.25,
        time: "2021-04-06T09:20:00.000Z",
      },
      {
        reading: 2.06,
        time: "2021-04-06T09:30:00.000Z",
      },
      {
        reading: 4.57,
        time: "2021-04-06T09:40:00.000Z",
      },
      {
        reading: 359.88,
        time: "2021-04-06T09:50:00.000Z",
      },
      {
        reading: 357.66,
        time: "2021-04-06T10:00:00.000Z",
      },
      {
        reading: 355.88,
        time: "2021-04-06T10:10:00.000Z",
      },
      {
        reading: 358.75,
        time: "2021-04-06T10:20:00.000Z",
      },
      {
        reading: 0.74,
        time: "2021-04-06T10:30:00.000Z",
      },
      {
        reading: 1.17,
        time: "2021-04-06T10:40:00.000Z",
      },
      {
        reading: 2.98,
        time: "2021-04-06T10:50:00.000Z",
      },
      {
        reading: 4.4,
        time: "2021-04-06T11:00:00.000Z",
      },
      {
        reading: 1.59,
        time: "2021-04-06T11:10:00.000Z",
      },
      {
        reading: 3.1,
        time: "2021-04-06T11:20:00.000Z",
      },
      {
        reading: 5.96,
        time: "2021-04-06T11:30:00.000Z",
      },
      {
        reading: 5.56,
        time: "2021-04-06T11:40:00.000Z",
      },
      {
        reading: 7.31,
        time: "2021-04-06T11:50:00.000Z",
      },
      {
        reading: 7.22,
        time: "2021-04-06T12:00:00.000Z",
      },
      {
        reading: 7.18,
        time: "2021-04-06T12:10:00.000Z",
      },
      {
        reading: 5.12,
        time: "2021-04-06T12:20:00.000Z",
      },
      {
        reading: 5.64,
        time: "2021-04-06T12:30:00.000Z",
      },
      {
        reading: 6.7,
        time: "2021-04-06T12:40:00.000Z",
      },
      {
        reading: 7.69,
        time: "2021-04-06T12:50:00.000Z",
      },
      {
        reading: 8.78,
        time: "2021-04-06T13:00:00.000Z",
      },
      {
        reading: 4,
        time: "2021-04-06T13:10:00.000Z",
      },
      {
        reading: 4.92,
        time: "2021-04-06T13:20:00.000Z",
      },
      {
        reading: 6.65,
        time: "2021-04-06T13:30:00.000Z",
      },
      {
        reading: 7.41,
        time: "2021-04-06T13:40:00.000Z",
      },
      {
        reading: 7.27,
        time: "2021-04-06T13:50:00.000Z",
      },
      {
        reading: 15.31,
        time: "2021-04-06T14:00:00.000Z",
      },
      {
        reading: 17.8,
        time: "2021-04-06T14:10:00.000Z",
      },
      {
        reading: 9.68,
        time: "2021-04-06T14:20:00.000Z",
      },
      {
        reading: 5.12,
        time: "2021-04-06T14:30:00.000Z",
      },
      {
        reading: 0.58,
        time: "2021-04-06T14:40:00.000Z",
      },
      {
        reading: 7.41,
        time: "2021-04-06T14:50:00.000Z",
      },
      {
        reading: 22.39,
        time: "2021-04-06T15:00:00.000Z",
      },
      {
        reading: 23.19,
        time: "2021-04-06T15:10:00.000Z",
      },
      {
        reading: 14.95,
        time: "2021-04-06T15:20:00.000Z",
      },
      {
        reading: 34.71,
        time: "2021-04-06T15:30:00.000Z",
      },
      {
        reading: 33.5,
        time: "2021-04-06T15:40:00.000Z",
      },
      {
        reading: 27.68,
        time: "2021-04-06T15:50:00.000Z",
      },
      {
        reading: 23.9,
        time: "2021-04-06T16:00:00.000Z",
      },
      {
        reading: 10.88,
        time: "2021-04-06T16:10:00.000Z",
      },
      {
        reading: 14.69,
        time: "2021-04-06T16:20:00.000Z",
      },
      {
        reading: 22.08,
        time: "2021-04-06T16:30:00.000Z",
      },
      {
        reading: 18.59,
        time: "2021-04-06T16:40:00.000Z",
      },
      {
        reading: 21.67,
        time: "2021-04-06T16:50:00.000Z",
      },
      {
        reading: 1.77,
        time: "2021-04-06T17:00:00.000Z",
      },
      {
        reading: 13.92,
        time: "2021-04-06T17:10:00.000Z",
      },
      {
        reading: 351.356,
        time: "2021-04-06T17:20:00.000Z",
      },
      {
        reading: 343.5,
        time: "2021-04-06T17:30:00.000Z",
      },
      {
        reading: 5.43,
        time: "2021-04-06T17:40:00.000Z",
      },
      {
        reading: 20.39,
        time: "2021-04-06T17:50:00.000Z",
      },
      {
        reading: 358.32,
        time: "2021-04-06T18:00:00.000Z",
      },
      {
        reading: 342.3,
        time: "2021-04-06T18:10:00.000Z",
      },
      {
        reading: 7.75,
        time: "2021-04-06T18:20:00.000Z",
      },
      {
        reading: 6.54,
        time: "2021-04-06T18:30:00.000Z",
      },
      {
        reading: 352.085,
        time: "2021-04-06T18:40:00.000Z",
      },
      {
        reading: 3.37,
        time: "2021-04-06T18:50:00.000Z",
      },
      {
        reading: 5.59,
        time: "2021-04-06T19:00:00.000Z",
      },
      {
        reading: 11.62,
        time: "2021-04-06T19:10:00.000Z",
      },
      {
        reading: 17.69,
        time: "2021-04-06T19:20:00.000Z",
      },
      {
        reading: 11,
        time: "2021-04-06T19:30:00.000Z",
      },
      {
        reading: 9.51,
        time: "2021-04-06T19:40:00.000Z",
      },
      {
        reading: 13.28,
        time: "2021-04-06T19:50:00.000Z",
      },
      {
        reading: 13.4,
        time: "2021-04-06T20:00:00.000Z",
      },
      {
        reading: 8.28,
        time: "2021-04-06T20:10:00.000Z",
      },
      {
        reading: 6.61,
        time: "2021-04-06T20:20:00.000Z",
      },
      {
        reading: 354.38,
        time: "2021-04-06T20:30:00.000Z",
      },
      {
        reading: 344.943,
        time: "2021-04-06T20:40:00.000Z",
      },
      {
        reading: 344.2,
        time: "2021-04-06T20:50:00.000Z",
      },
      {
        reading: 346.339,
        time: "2021-04-06T21:00:00.000Z",
      },
      {
        reading: 352.62,
        time: "2021-04-06T21:10:00.000Z",
      },
      {
        reading: 1.29,
        time: "2021-04-06T21:20:00.000Z",
      },
      {
        reading: 2.55,
        time: "2021-04-06T21:30:00.000Z",
      },
      {
        reading: 3.34,
        time: "2021-04-06T21:40:00.000Z",
      },
      {
        reading: 359.08,
        time: "2021-04-06T21:50:00.000Z",
      },
      {
        reading: 352.3,
        time: "2021-04-06T22:00:00.000Z",
      },
      {
        reading: 341.2,
        time: "2021-04-06T22:10:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-06T22:20:00.000Z",
      },
      {
        reading: 353.73,
        time: "2021-04-06T22:30:00.000Z",
      },
      {
        reading: 356.83,
        time: "2021-04-06T22:40:00.000Z",
      },
      {
        reading: 348.761,
        time: "2021-04-06T22:50:00.000Z",
      },
      {
        reading: 344.716,
        time: "2021-04-06T23:00:00.000Z",
      },
      {
        reading: 355.11,
        time: "2021-04-06T23:10:00.000Z",
      },
      {
        reading: 3.61,
        time: "2021-04-06T23:20:00.000Z",
      },
      {
        reading: 3.42,
        time: "2021-04-06T23:30:00.000Z",
      },
      {
        reading: 359.38,
        time: "2021-04-06T23:40:00.000Z",
      },
      {
        reading: 357.92,
        time: "2021-04-06T23:50:00.000Z",
      },
      {
        reading: 352.33,
        time: "2021-04-07T00:00:00.000Z",
      },
      {
        reading: 355.64,
        time: "2021-04-07T00:10:00.000Z",
      },
      {
        reading: 353.83,
        time: "2021-04-07T00:20:00.000Z",
      },
      {
        reading: 356.85,
        time: "2021-04-07T00:30:00.000Z",
      },
      {
        reading: 359.17,
        time: "2021-04-07T00:40:00.000Z",
      },
      {
        reading: 350.335,
        time: "2021-04-07T00:50:00.000Z",
      },
      {
        reading: 334.3,
        time: "2021-04-07T01:00:00.000Z",
      },
      {
        reading: 326.8,
        time: "2021-04-07T01:10:00.000Z",
      },
      {
        reading: 333.9,
        time: "2021-04-07T01:20:00.000Z",
      },
      {
        reading: 336.3,
        time: "2021-04-07T01:30:00.000Z",
      },
      {
        reading: 338.4,
        time: "2021-04-07T01:40:00.000Z",
      },
      {
        reading: 338.9,
        time: "2021-04-07T01:50:00.000Z",
      },
      {
        reading: 337.5,
        time: "2021-04-07T02:00:00.000Z",
      },
      {
        reading: 340.9,
        time: "2021-04-07T02:10:00.000Z",
      },
      {
        reading: 343.9,
        time: "2021-04-07T02:20:00.000Z",
      },
      {
        reading: 348.42,
        time: "2021-04-07T02:30:00.000Z",
      },
      {
        reading: 333.3,
        time: "2021-04-07T02:40:00.000Z",
      },
      {
        reading: 338.2,
        time: "2021-04-07T02:50:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-07T03:00:00.000Z",
      },
      {
        reading: 337.3,
        time: "2021-04-07T03:10:00.000Z",
      },
      {
        reading: 342.1,
        time: "2021-04-07T03:20:00.000Z",
      },
      {
        reading: 343.6,
        time: "2021-04-07T03:30:00.000Z",
      },
      {
        reading: 345.92,
        time: "2021-04-07T03:40:00.000Z",
      },
      {
        reading: 353.69,
        time: "2021-04-07T03:50:00.000Z",
      },
      {
        reading: 345.318,
        time: "2021-04-07T04:00:00.000Z",
      },
      {
        reading: 334.4,
        time: "2021-04-07T04:10:00.000Z",
      },
      {
        reading: 335,
        time: "2021-04-07T04:20:00.000Z",
      },
      {
        reading: 346.696,
        time: "2021-04-07T04:30:00.000Z",
      },
      {
        reading: 337.6,
        time: "2021-04-07T04:40:00.000Z",
      },
      {
        reading: 330.8,
        time: "2021-04-07T04:50:00.000Z",
      },
      {
        reading: 338,
        time: "2021-04-07T05:00:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-07T05:10:00.000Z",
      },
      {
        reading: 338.7,
        time: "2021-04-07T05:20:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-07T05:30:00.000Z",
      },
      {
        reading: 336.8,
        time: "2021-04-07T05:40:00.000Z",
      },
      {
        reading: 338.3,
        time: "2021-04-07T05:50:00.000Z",
      },
      {
        reading: 338.1,
        time: "2021-04-07T06:00:00.000Z",
      },
      {
        reading: 340.5,
        time: "2021-04-07T06:10:00.000Z",
      },
      {
        reading: 337.9,
        time: "2021-04-07T06:20:00.000Z",
      },
      {
        reading: 338.5,
        time: "2021-04-07T06:30:00.000Z",
      },
      {
        reading: 335.1,
        time: "2021-04-07T06:40:00.000Z",
      },
      {
        reading: 334.7,
        time: "2021-04-07T06:50:00.000Z",
      },
      {
        reading: 334.6,
        time: "2021-04-07T07:00:00.000Z",
      },
      {
        reading: 337.7,
        time: "2021-04-07T07:10:00.000Z",
      },
      {
        reading: 338.6,
        time: "2021-04-07T07:20:00.000Z",
      },
      {
        reading: 331.3,
        time: "2021-04-07T07:30:00.000Z",
      },
      {
        reading: 326,
        time: "2021-04-07T07:40:00.000Z",
      },
      {
        reading: 328.3,
        time: "2021-04-07T07:50:00.000Z",
      },
      {
        reading: 327.5,
        time: "2021-04-07T08:00:00.000Z",
      },
      {
        reading: 329.4,
        time: "2021-04-07T08:10:00.000Z",
      },
      {
        reading: 337.7,
        time: "2021-04-07T08:20:00.000Z",
      },
      {
        reading: 337,
        time: "2021-04-07T08:30:00.000Z",
      },
      {
        reading: 336.4,
        time: "2021-04-07T08:40:00.000Z",
      },
      {
        reading: 333.1,
        time: "2021-04-07T08:50:00.000Z",
      },
      {
        reading: 335.3,
        time: "2021-04-07T09:00:00.000Z",
      },
      {
        reading: 336.2,
        time: "2021-04-07T09:10:00.000Z",
      },
      {
        reading: 340.4,
        time: "2021-04-07T09:20:00.000Z",
      },
      {
        reading: 349.497,
        time: "2021-04-07T09:30:00.000Z",
      },
      {
        reading: 352.41,
        time: "2021-04-07T09:40:00.000Z",
      },
      {
        reading: 346.397,
        time: "2021-04-07T09:50:00.000Z",
      },
      {
        reading: 340.9,
        time: "2021-04-07T10:00:00.000Z",
      },
      {
        reading: 337.8,
        time: "2021-04-07T10:10:00.000Z",
      },
      {
        reading: 345.255,
        time: "2021-04-07T10:20:00.000Z",
      },
      {
        reading: 347.443,
        time: "2021-04-07T10:30:00.000Z",
      },
      {
        reading: 349.91,
        time: "2021-04-07T10:40:00.000Z",
      },
      {
        reading: 350.774,
        time: "2021-04-07T10:50:00.000Z",
      },
      {
        reading: 350.028,
        time: "2021-04-07T11:00:00.000Z",
      },
      {
        reading: 352.51,
        time: "2021-04-07T11:10:00.000Z",
      },
      {
        reading: 356.62,
        time: "2021-04-07T11:20:00.000Z",
      },
      {
        reading: 3.84,
        time: "2021-04-07T11:30:00.000Z",
      },
      {
        reading: 6.46,
        time: "2021-04-07T11:40:00.000Z",
      },
      {
        reading: 11.28,
        time: "2021-04-07T11:50:00.000Z",
      },
      {
        reading: 4.46,
        time: "2021-04-07T12:00:00.000Z",
      },
      {
        reading: 0.11,
        time: "2021-04-07T12:10:00.000Z",
      },
      {
        reading: 7.48,
        time: "2021-04-07T12:20:00.000Z",
      },
      {
        reading: 3.84,
        time: "2021-04-07T12:30:00.000Z",
      },
      {
        reading: 1.99,
        time: "2021-04-07T12:40:00.000Z",
      },
      {
        reading: 2.09,
        time: "2021-04-07T12:50:00.000Z",
      },
      {
        reading: 7.27,
        time: "2021-04-07T13:00:00.000Z",
      },
      {
        reading: 5.47,
        time: "2021-04-07T13:10:00.000Z",
      },
      {
        reading: 7.84,
        time: "2021-04-07T13:20:00.000Z",
      },
      {
        reading: 12.79,
        time: "2021-04-07T13:30:00.000Z",
      },
      {
        reading: 9.92,
        time: "2021-04-07T13:40:00.000Z",
      },
      {
        reading: 13.03,
        time: "2021-04-07T13:50:00.000Z",
      },
      {
        reading: 12.29,
        time: "2021-04-07T14:00:00.000Z",
      },
      {
        reading: 17.25,
        time: "2021-04-07T14:10:00.000Z",
      },
      {
        reading: 17.35,
        time: "2021-04-07T14:20:00.000Z",
      },
      {
        reading: 17.21,
        time: "2021-04-07T14:30:00.000Z",
      },
      {
        reading: 18.92,
        time: "2021-04-07T14:40:00.000Z",
      },
      {
        reading: 14.93,
        time: "2021-04-07T14:50:00.000Z",
      },
      {
        reading: 15.37,
        time: "2021-04-07T15:00:00.000Z",
      },
      {
        reading: 8.03,
        time: "2021-04-07T15:10:00.000Z",
      },
      {
        reading: 16.37,
        time: "2021-04-07T15:20:00.000Z",
      },
      {
        reading: 9.32,
        time: "2021-04-07T15:30:00.000Z",
      },
      {
        reading: 4.52,
        time: "2021-04-07T15:40:00.000Z",
      },
      {
        reading: 6.89,
        time: "2021-04-07T15:50:00.000Z",
      },
      {
        reading: 9.21,
        time: "2021-04-07T16:00:00.000Z",
      },
      {
        reading: 13.47,
        time: "2021-04-07T16:10:00.000Z",
      },
      {
        reading: 12.67,
        time: "2021-04-07T16:20:00.000Z",
      },
      {
        reading: 19.06,
        time: "2021-04-07T16:30:00.000Z",
      },
      {
        reading: 22.92,
        time: "2021-04-07T16:40:00.000Z",
      },
      {
        reading: 24.95,
        time: "2021-04-07T16:50:00.000Z",
      },
      {
        reading: 18.68,
        time: "2021-04-07T17:00:00.000Z",
      },
      {
        reading: 23.99,
        time: "2021-04-07T17:10:00.000Z",
      },
      {
        reading: 36.79,
        time: "2021-04-07T17:20:00.000Z",
      },
      {
        reading: 44.8,
        time: "2021-04-07T17:30:00.000Z",
      },
      {
        reading: 145.9,
        time: "2021-04-07T17:40:00.000Z",
      },
      {
        reading: 152.5,
        time: "2021-04-07T17:50:00.000Z",
      },
      {
        reading: 164.8,
        time: "2021-04-07T18:00:00.000Z",
      },
      {
        reading: 178.2,
        time: "2021-04-07T18:10:00.000Z",
      },
      {
        reading: 196.5,
        time: "2021-04-07T18:20:00.000Z",
      },
      {
        reading: 201.2,
        time: "2021-04-07T18:30:00.000Z",
      },
      {
        reading: 187.8,
        time: "2021-04-07T18:40:00.000Z",
      },
      {
        reading: 219.5,
        time: "2021-04-07T18:50:00.000Z",
      },
      {
        reading: 210.1,
        time: "2021-04-07T19:00:00.000Z",
      },
      {
        reading: 211.5,
        time: "2021-04-07T19:10:00.000Z",
      },
      {
        reading: 223,
        time: "2021-04-07T19:20:00.000Z",
      },
      {
        reading: 205.9,
        time: "2021-04-07T19:30:00.000Z",
      },
      {
        reading: 197,
        time: "2021-04-07T19:40:00.000Z",
      },
      {
        reading: 182.9,
        time: "2021-04-07T19:50:00.000Z",
      },
      {
        reading: 199.4,
        time: "2021-04-07T20:00:00.000Z",
      },
      {
        reading: 214.3,
        time: "2021-04-07T20:10:00.000Z",
      },
      {
        reading: 212.9,
        time: "2021-04-07T20:20:00.000Z",
      },
      {
        reading: 218.6,
        time: "2021-04-07T20:30:00.000Z",
      },
      {
        reading: 228.9,
        time: "2021-04-07T20:40:00.000Z",
      },
      {
        reading: 211.6,
        time: "2021-04-07T20:50:00.000Z",
      },
      {
        reading: 215.2,
        time: "2021-04-07T21:00:00.000Z",
      },
      {
        reading: 222.5,
        time: "2021-04-07T21:10:00.000Z",
      },
      {
        reading: 214.3,
        time: "2021-04-07T21:20:00.000Z",
      },
      {
        reading: 200.6,
        time: "2021-04-07T21:30:00.000Z",
      },
      {
        reading: 197.1,
        time: "2021-04-07T21:40:00.000Z",
      },
      {
        reading: 223.3,
        time: "2021-04-07T21:50:00.000Z",
      },
      {
        reading: 222.3,
        time: "2021-04-07T22:00:00.000Z",
      },
      {
        reading: 238.3,
        time: "2021-04-07T22:10:00.000Z",
      },
      {
        reading: 250.8,
        time: "2021-04-07T22:20:00.000Z",
      },
      {
        reading: 231.5,
        time: "2021-04-07T22:30:00.000Z",
      },
      {
        reading: 222.7,
        time: "2021-04-07T22:40:00.000Z",
      },
      {
        reading: 242.1,
        time: "2021-04-07T22:50:00.000Z",
      },
      {
        reading: 249.3,
        time: "2021-04-07T23:00:00.000Z",
      },
      {
        reading: 234.5,
        time: "2021-04-07T23:10:00.000Z",
      },
      {
        reading: 236.1,
        time: "2021-04-07T23:20:00.000Z",
      },
      {
        reading: 272.7,
        time: "2021-04-07T23:30:00.000Z",
      },
      {
        reading: 310.6,
        time: "2021-04-07T23:40:00.000Z",
      },
      {
        reading: 358.94,
        time: "2021-04-07T23:50:00.000Z",
      },
      {
        reading: 312,
        time: "2021-04-08T00:00:00.000Z",
      },
      {
        reading: 301.8,
        time: "2021-04-08T00:10:00.000Z",
      },
      {
        reading: 302.2,
        time: "2021-04-08T00:20:00.000Z",
      },
      {
        reading: 313.1,
        time: "2021-04-08T00:30:00.000Z",
      },
      {
        reading: 304,
        time: "2021-04-08T00:40:00.000Z",
      },
      {
        reading: 296.1,
        time: "2021-04-08T00:50:00.000Z",
      },
      {
        reading: 254.3,
        time: "2021-04-08T01:00:00.000Z",
      },
      {
        reading: 262.9,
        time: "2021-04-08T01:10:00.000Z",
      },
      {
        reading: 299.8,
        time: "2021-04-08T01:20:00.000Z",
      },
      {
        reading: 103.9,
        time: "2021-04-08T01:30:00.000Z",
      },
      {
        reading: 86.5,
        time: "2021-04-08T01:40:00.000Z",
      },
      {
        reading: 52.86,
        time: "2021-04-08T01:50:00.000Z",
      },
      {
        reading: 48.31,
        time: "2021-04-08T02:00:00.000Z",
      },
      {
        reading: 84.8,
        time: "2021-04-08T02:10:00.000Z",
      },
      {
        reading: 87.7,
        time: "2021-04-08T02:20:00.000Z",
      },
      {
        reading: 86,
        time: "2021-04-08T02:30:00.000Z",
      },
      {
        reading: 78.6,
        time: "2021-04-08T02:40:00.000Z",
      },
      {
        reading: 354.46,
        time: "2021-04-08T02:50:00.000Z",
      },
      {
        reading: 336.7,
        time: "2021-04-08T03:00:00.000Z",
      },
      {
        reading: 302.5,
        time: "2021-04-08T03:10:00.000Z",
      },
      {
        reading: 357.33,
        time: "2021-04-08T03:20:00.000Z",
      },
      {
        reading: 334,
        time: "2021-04-08T03:30:00.000Z",
      },
      {
        reading: 354.63,
        time: "2021-04-08T03:40:00.000Z",
      },
      {
        reading: 19.37,
        time: "2021-04-08T03:50:00.000Z",
      },
      {
        reading: 358.57,
        time: "2021-04-08T04:00:00.000Z",
      },
      {
        reading: 357.75,
        time: "2021-04-08T04:10:00.000Z",
      },
      {
        reading: 359.01,
        time: "2021-04-08T04:20:00.000Z",
      },
      {
        reading: 4.61,
        time: "2021-04-08T04:30:00.000Z",
      },
      {
        reading: 8.09,
        time: "2021-04-08T04:40:00.000Z",
      },
      {
        reading: 12.72,
        time: "2021-04-08T04:50:00.000Z",
      },
      {
        reading: 0.2,
        time: "2021-04-08T05:00:00.000Z",
      },
      {
        reading: 352.76,
        time: "2021-04-08T05:10:00.000Z",
      },
      {
        reading: 2.53,
        time: "2021-04-08T05:20:00.000Z",
      },
      {
        reading: 13.86,
        time: "2021-04-08T05:30:00.000Z",
      },
      {
        reading: 6.49,
        time: "2021-04-08T05:40:00.000Z",
      },
      {
        reading: 350.045,
        time: "2021-04-08T05:50:00.000Z",
      },
      {
        reading: 11.43,
        time: "2021-04-08T06:00:00.000Z",
      },
      {
        reading: 27.63,
        time: "2021-04-08T06:10:00.000Z",
      },
      {
        reading: 36.01,
        time: "2021-04-08T06:20:00.000Z",
      },
      {
        reading: 36.73,
        time: "2021-04-08T06:30:00.000Z",
      },
      {
        reading: 27.73,
        time: "2021-04-08T06:40:00.000Z",
      },
      {
        reading: 15.38,
        time: "2021-04-08T06:50:00.000Z",
      },
      {
        reading: 16.89,
        time: "2021-04-08T07:00:00.000Z",
      },
      {
        reading: 24.41,
        time: "2021-04-08T07:10:00.000Z",
      },
      {
        reading: 26.17,
        time: "2021-04-08T07:20:00.000Z",
      },
      {
        reading: 4.28,
        time: "2021-04-08T07:30:00.000Z",
      },
      {
        reading: 358.06,
        time: "2021-04-08T07:40:00.000Z",
      },
      {
        reading: 356.14,
        time: "2021-04-08T07:50:00.000Z",
      },
      {
        reading: 153.2,
        time: "2021-04-08T08:00:00.000Z",
      },
      {
        reading: 55.9,
        time: "2021-04-08T08:10:00.000Z",
      },
      {
        reading: 25.78,
        time: "2021-04-08T08:20:00.000Z",
      },
      {
        reading: 18.99,
        time: "2021-04-08T08:30:00.000Z",
      },
      {
        reading: 18.74,
        time: "2021-04-08T08:40:00.000Z",
      },
      {
        reading: 15.49,
        time: "2021-04-08T08:50:00.000Z",
      },
      {
        reading: 14.68,
        time: "2021-04-08T09:00:00.000Z",
      },
      {
        reading: 5.79,
        time: "2021-04-08T09:10:00.000Z",
      },
      {
        reading: 338.9,
        time: "2021-04-08T09:20:00.000Z",
      },
      {
        reading: 331.8,
        time: "2021-04-08T09:30:00.000Z",
      },
      {
        reading: 316.1,
        time: "2021-04-08T09:40:00.000Z",
      },
      {
        reading: 319,
        time: "2021-04-08T09:50:00.000Z",
      },
      {
        reading: 346.41,
        time: "2021-04-08T10:00:00.000Z",
      },
      {
        reading: 349.682,
        time: "2021-04-08T10:10:00.000Z",
      },
      {
        reading: 352.086,
        time: "2021-04-08T10:20:00.000Z",
      },
      {
        reading: 345.264,
        time: "2021-04-08T10:30:00.000Z",
      },
      {
        reading: 325.5,
        time: "2021-04-08T10:40:00.000Z",
      },
      {
        reading: 323.6,
        time: "2021-04-08T10:50:00.000Z",
      },
      {
        reading: 335.5,
        time: "2021-04-08T11:00:00.000Z",
      },
      {
        reading: 343.8,
        time: "2021-04-08T11:10:00.000Z",
      },
      {
        reading: 341.1,
        time: "2021-04-08T11:20:00.000Z",
      },
      {
        reading: 334.9,
        time: "2021-04-08T11:30:00.000Z",
      },
      {
        reading: 331.6,
        time: "2021-04-08T11:40:00.000Z",
      },
      {
        reading: 343.9,
        time: "2021-04-08T11:50:00.000Z",
      },
      {
        reading: 350.162,
        time: "2021-04-08T12:00:00.000Z",
      },
      {
        reading: 3.43,
        time: "2021-04-08T12:10:00.000Z",
      },
      {
        reading: 3.99,
        time: "2021-04-08T12:20:00.000Z",
      },
      {
        reading: 3.55,
        time: "2021-04-08T12:30:00.000Z",
      },
      {
        reading: 3.18,
        time: "2021-04-08T12:40:00.000Z",
      },
      {
        reading: 8.77,
        time: "2021-04-08T12:50:00.000Z",
      },
      {
        reading: 19.92,
        time: "2021-04-08T13:00:00.000Z",
      },
      {
        reading: 16.18,
        time: "2021-04-08T13:10:00.000Z",
      },
      {
        reading: 16.09,
        time: "2021-04-08T13:20:00.000Z",
      },
      {
        reading: 10.41,
        time: "2021-04-08T13:30:00.000Z",
      },
      {
        reading: 2.93,
        time: "2021-04-08T13:40:00.000Z",
      },
      {
        reading: 15.38,
        time: "2021-04-08T13:50:00.000Z",
      },
      {
        reading: 26.52,
        time: "2021-04-08T14:00:00.000Z",
      },
      {
        reading: 20.05,
        time: "2021-04-08T14:10:00.000Z",
      },
      {
        reading: 26.09,
        time: "2021-04-08T14:20:00.000Z",
      },
      {
        reading: 21.21,
        time: "2021-04-08T14:30:00.000Z",
      },
      {
        reading: 6.24,
        time: "2021-04-08T14:40:00.000Z",
      },
      {
        reading: 3.3,
        time: "2021-04-08T14:50:00.000Z",
      },
      {
        reading: 359.97,
        time: "2021-04-08T15:00:00.000Z",
      },
      {
        reading: 1.65,
        time: "2021-04-08T15:10:00.000Z",
      },
      {
        reading: 4.74,
        time: "2021-04-08T15:20:00.000Z",
      },
      {
        reading: 6.04,
        time: "2021-04-08T15:30:00.000Z",
      },
      {
        reading: 5.21,
        time: "2021-04-08T15:40:00.000Z",
      },
      {
        reading: 5,
        time: "2021-04-08T15:50:00.000Z",
      },
      {
        reading: 0.28,
        time: "2021-04-08T16:00:00.000Z",
      },
      {
        reading: 6.05,
        time: "2021-04-08T16:10:00.000Z",
      },
      {
        reading: 355.99,
        time: "2021-04-08T16:20:00.000Z",
      },
      {
        reading: 335.4,
        time: "2021-04-08T16:30:00.000Z",
      },
      {
        reading: 350.889,
        time: "2021-04-08T16:40:00.000Z",
      },
      {
        reading: 343.1,
        time: "2021-04-08T16:50:00.000Z",
      },
      {
        reading: 352.22,
        time: "2021-04-08T17:00:00.000Z",
      },
      {
        reading: 4,
        time: "2021-04-08T17:10:00.000Z",
      },
      {
        reading: 31.96,
        time: "2021-04-08T17:20:00.000Z",
      },
      {
        reading: 44.57,
        time: "2021-04-08T17:30:00.000Z",
      },
      {
        reading: 69.3,
        time: "2021-04-08T17:40:00.000Z",
      },
      {
        reading: 81.5,
        time: "2021-04-08T17:50:00.000Z",
      },
      {
        reading: 57.73,
        time: "2021-04-08T18:00:00.000Z",
      },
      {
        reading: 44.35,
        time: "2021-04-08T18:10:00.000Z",
      },
      {
        reading: 55.92,
        time: "2021-04-08T18:20:00.000Z",
      },
      {
        reading: 46.64,
        time: "2021-04-08T18:30:00.000Z",
      },
      {
        reading: 353.73,
        time: "2021-04-08T18:40:00.000Z",
      },
      {
        reading: 327.7,
        time: "2021-04-08T18:50:00.000Z",
      },
      {
        reading: 314.9,
        time: "2021-04-08T19:00:00.000Z",
      },
      {
        reading: 297,
        time: "2021-04-08T19:10:00.000Z",
      },
      {
        reading: 113.6,
        time: "2021-04-08T19:20:00.000Z",
      },
      {
        reading: 136.6,
        time: "2021-04-08T19:30:00.000Z",
      },
      {
        reading: 146.6,
        time: "2021-04-08T19:40:00.000Z",
      },
      {
        reading: 136.9,
        time: "2021-04-08T19:50:00.000Z",
      },
      {
        reading: 138.6,
        time: "2021-04-08T20:00:00.000Z",
      },
      {
        reading: 167.5,
        time: "2021-04-08T20:10:00.000Z",
      },
      {
        reading: 210,
        time: "2021-04-08T20:20:00.000Z",
      },
      {
        reading: 193.4,
        time: "2021-04-08T20:30:00.000Z",
      },
      {
        reading: 183,
        time: "2021-04-08T20:40:00.000Z",
      },
      {
        reading: 232.3,
        time: "2021-04-08T20:50:00.000Z",
      },
      {
        reading: 194.4,
        time: "2021-04-08T21:00:00.000Z",
      },
      {
        reading: 226.8,
        time: "2021-04-08T21:10:00.000Z",
      },
      {
        reading: 234.5,
        time: "2021-04-08T21:20:00.000Z",
      },
      {
        reading: 213.5,
        time: "2021-04-08T21:30:00.000Z",
      },
      {
        reading: 246.3,
        time: "2021-04-08T21:40:00.000Z",
      },
      {
        reading: 231,
        time: "2021-04-08T21:50:00.000Z",
      },
      {
        reading: 227.3,
        time: "2021-04-08T22:00:00.000Z",
      },
      {
        reading: 234.9,
        time: "2021-04-08T22:10:00.000Z",
      },
      {
        reading: 209.9,
        time: "2021-04-08T22:20:00.000Z",
      },
      {
        reading: 184.4,
        time: "2021-04-08T22:30:00.000Z",
      },
      {
        reading: 192,
        time: "2021-04-08T22:40:00.000Z",
      },
      {
        reading: 204,
        time: "2021-04-08T22:50:00.000Z",
      },
      {
        reading: 203.6,
        time: "2021-04-08T23:00:00.000Z",
      },
      {
        reading: 197.8,
        time: "2021-04-08T23:10:00.000Z",
      },
      {
        reading: 203.1,
        time: "2021-04-08T23:20:00.000Z",
      },
      {
        reading: 192.5,
        time: "2021-04-08T23:30:00.000Z",
      },
      {
        reading: 208.8,
        time: "2021-04-08T23:40:00.000Z",
      },
      {
        reading: 207.5,
        time: "2021-04-08T23:50:00.000Z",
      },
      {
        reading: 220.8,
        time: "2021-04-09T00:00:00.000Z",
      },
      {
        reading: 232.8,
        time: "2021-04-09T00:10:00.000Z",
      },
      {
        reading: 223.3,
        time: "2021-04-09T00:20:00.000Z",
      },
      {
        reading: 218.7,
        time: "2021-04-09T00:30:00.000Z",
      },
      {
        reading: 207.3,
        time: "2021-04-09T00:40:00.000Z",
      },
      {
        reading: 205,
        time: "2021-04-09T00:50:00.000Z",
      },
      {
        reading: 220,
        time: "2021-04-09T01:00:00.000Z",
      },
      {
        reading: 209.5,
        time: "2021-04-09T01:10:00.000Z",
      },
      {
        reading: 206.7,
        time: "2021-04-09T01:20:00.000Z",
      },
      {
        reading: 216.1,
        time: "2021-04-09T01:30:00.000Z",
      },
      {
        reading: 209.1,
        time: "2021-04-09T01:40:00.000Z",
      },
      {
        reading: 196.4,
        time: "2021-04-09T01:50:00.000Z",
      },
      {
        reading: 217.9,
        time: "2021-04-09T02:00:00.000Z",
      },
      {
        reading: 217.2,
        time: "2021-04-09T02:10:00.000Z",
      },
      {
        reading: 255,
        time: "2021-04-09T02:20:00.000Z",
      },
      {
        reading: 210,
        time: "2021-04-09T02:30:00.000Z",
      },
      {
        reading: 167.7,
        time: "2021-04-09T02:40:00.000Z",
      },
      {
        reading: 119.3,
        time: "2021-04-09T02:50:00.000Z",
      },
      {
        reading: 116.4,
        time: "2021-04-09T03:00:00.000Z",
      },
      {
        reading: 166.3,
        time: "2021-04-09T03:10:00.000Z",
      },
      {
        reading: 182.1,
        time: "2021-04-09T03:20:00.000Z",
      },
      {
        reading: 258.4,
        time: "2021-04-09T03:30:00.000Z",
      },
      {
        reading: 304.1,
        time: "2021-04-09T03:40:00.000Z",
      },
      {
        reading: 329.7,
        time: "2021-04-09T03:50:00.000Z",
      },
      {
        reading: 28.8,
        time: "2021-04-09T04:00:00.000Z",
      },
      {
        reading: 24.65,
        time: "2021-04-09T04:10:00.000Z",
      },
      {
        reading: 21.83,
        time: "2021-04-09T04:20:00.000Z",
      },
      {
        reading: 52.97,
        time: "2021-04-09T04:30:00.000Z",
      },
      {
        reading: 44.9,
        time: "2021-04-09T04:40:00.000Z",
      },
      {
        reading: 42.46,
        time: "2021-04-09T04:50:00.000Z",
      },
      {
        reading: 87.4,
        time: "2021-04-09T05:00:00.000Z",
      },
      {
        reading: 102.2,
        time: "2021-04-09T05:10:00.000Z",
      },
      {
        reading: 97.1,
        time: "2021-04-09T05:20:00.000Z",
      },
      {
        reading: 106.7,
        time: "2021-04-09T05:30:00.000Z",
      },
      {
        reading: 95.8,
        time: "2021-04-09T05:40:00.000Z",
      },
      {
        reading: 125.1,
        time: "2021-04-09T05:50:00.000Z",
      },
      {
        reading: 212.9,
        time: "2021-04-09T06:00:00.000Z",
      },
      {
        reading: 275.2,
        time: "2021-04-09T06:10:00.000Z",
      },
      {
        reading: 202.1,
        time: "2021-04-09T06:20:00.000Z",
      },
      {
        reading: 166.5,
        time: "2021-04-09T06:30:00.000Z",
      },
      {
        reading: 195.3,
        time: "2021-04-09T06:40:00.000Z",
      },
      {
        reading: 212,
        time: "2021-04-09T06:50:00.000Z",
      },
      {
        reading: 227.6,
        time: "2021-04-09T07:00:00.000Z",
      },
      {
        reading: 264.5,
        time: "2021-04-09T07:10:00.000Z",
      },
      {
        reading: 258.7,
        time: "2021-04-09T07:20:00.000Z",
      },
      {
        reading: 255.9,
        time: "2021-04-09T07:30:00.000Z",
      },
      {
        reading: 259.3,
        time: "2021-04-09T07:40:00.000Z",
      },
      {
        reading: 233.1,
        time: "2021-04-09T07:50:00.000Z",
      },
      {
        reading: 196.8,
        time: "2021-04-09T08:00:00.000Z",
      },
      {
        reading: 179,
        time: "2021-04-09T08:10:00.000Z",
      },
      {
        reading: 178.4,
        time: "2021-04-09T08:20:00.000Z",
      },
      {
        reading: 128.2,
        time: "2021-04-09T08:30:00.000Z",
      },
      {
        reading: 82,
        time: "2021-04-09T08:40:00.000Z",
      },
      {
        reading: 90.7,
        time: "2021-04-09T08:50:00.000Z",
      },
      {
        reading: 77.2,
        time: "2021-04-09T09:00:00.000Z",
      },
      {
        reading: 22.78,
        time: "2021-04-09T09:10:00.000Z",
      },
      {
        reading: 1.78,
        time: "2021-04-09T09:20:00.000Z",
      },
      {
        reading: 9.46,
        time: "2021-04-09T09:30:00.000Z",
      },
      {
        reading: 21.31,
        time: "2021-04-09T09:40:00.000Z",
      },
      {
        reading: 17.38,
        time: "2021-04-09T09:50:00.000Z",
      },
      {
        reading: 0.39,
        time: "2021-04-09T10:00:00.000Z",
      },
      {
        reading: 4.49,
        time: "2021-04-09T10:10:00.000Z",
      },
      {
        reading: 359.24,
        time: "2021-04-09T10:20:00.000Z",
      },
      {
        reading: 334.3,
        time: "2021-04-09T10:30:00.000Z",
      },
      {
        reading: 329,
        time: "2021-04-09T10:40:00.000Z",
      },
      {
        reading: 334,
        time: "2021-04-09T10:50:00.000Z",
      },
      {
        reading: 336.9,
        time: "2021-04-09T11:00:00.000Z",
      },
      {
        reading: 328.8,
        time: "2021-04-09T11:10:00.000Z",
      },
      {
        reading: 328.5,
        time: "2021-04-09T11:20:00.000Z",
      },
      {
        reading: 321.8,
        time: "2021-04-09T11:30:00.000Z",
      },
      {
        reading: 322.4,
        time: "2021-04-09T11:40:00.000Z",
      },
      {
        reading: 339.5,
        time: "2021-04-09T11:50:00.000Z",
      },
      {
        reading: 318.2,
        time: "2021-04-09T12:00:00.000Z",
      },
      {
        reading: 279.8,
        time: "2021-04-09T12:10:00.000Z",
      },
      {
        reading: 241.6,
        time: "2021-04-09T12:20:00.000Z",
      },
      {
        reading: 226.9,
        time: "2021-04-09T12:30:00.000Z",
      },
      {
        reading: 222.3,
        time: "2021-04-09T12:40:00.000Z",
      },
      {
        reading: 224.9,
        time: "2021-04-09T12:50:00.000Z",
      },
      {
        reading: 213.6,
        time: "2021-04-09T13:00:00.000Z",
      },
      {
        reading: 207.6,
        time: "2021-04-09T13:10:00.000Z",
      },
      {
        reading: 217,
        time: "2021-04-09T13:20:00.000Z",
      },
      {
        reading: 212.8,
        time: "2021-04-09T13:30:00.000Z",
      },
      {
        reading: 203.6,
        time: "2021-04-09T13:40:00.000Z",
      },
      {
        reading: 204,
        time: "2021-04-09T13:50:00.000Z",
      },
      {
        reading: 201.3,
        time: "2021-04-09T14:00:00.000Z",
      },
      {
        reading: 199.7,
        time: "2021-04-09T14:10:00.000Z",
      },
      {
        reading: 205.6,
        time: "2021-04-09T14:20:00.000Z",
      },
      {
        reading: 209.1,
        time: "2021-04-09T14:30:00.000Z",
      },
      {
        reading: 199,
        time: "2021-04-09T14:40:00.000Z",
      },
      {
        reading: 196.1,
        time: "2021-04-09T14:50:00.000Z",
      },
      {
        reading: 190.1,
        time: "2021-04-09T15:00:00.000Z",
      },
      {
        reading: 189.9,
        time: "2021-04-09T15:10:00.000Z",
      },
      {
        reading: 188.2,
        time: "2021-04-09T15:20:00.000Z",
      },
      {
        reading: 187.9,
        time: "2021-04-09T15:30:00.000Z",
      },
      {
        reading: 186.5,
        time: "2021-04-09T15:40:00.000Z",
      },
      {
        reading: 182.3,
        time: "2021-04-09T15:50:00.000Z",
      },
      {
        reading: 176.7,
        time: "2021-04-09T16:00:00.000Z",
      },
      {
        reading: 182,
        time: "2021-04-09T16:10:00.000Z",
      },
      {
        reading: 184.5,
        time: "2021-04-09T16:20:00.000Z",
      },
      {
        reading: 192.3,
        time: "2021-04-09T16:30:00.000Z",
      },
      {
        reading: 189.1,
        time: "2021-04-09T16:40:00.000Z",
      },
      {
        reading: 189.1,
        time: "2021-04-09T16:50:00.000Z",
      },
      {
        reading: 197.2,
        time: "2021-04-09T17:00:00.000Z",
      },
      {
        reading: 196.9,
        time: "2021-04-09T17:10:00.000Z",
      },
      {
        reading: 194.7,
        time: "2021-04-09T17:20:00.000Z",
      },
      {
        reading: 196.9,
        time: "2021-04-09T17:30:00.000Z",
      },
      {
        reading: 198.4,
        time: "2021-04-09T17:40:00.000Z",
      },
      {
        reading: 197.9,
        time: "2021-04-09T17:50:00.000Z",
      },
      {
        reading: 191.9,
        time: "2021-04-09T18:00:00.000Z",
      },
    ].map((ts) => ({ reading: ts.reading, time: new Date(ts.time) })),
    unit: "degrees_true",
  },
  days: undefined,
  barbsPerDay: 5,
  height: undefined,
  legend: true,
  startTime: undefined,
  endTime: undefined,
}
