import * as React from "react"

import { UnitSystem } from "Features/Units/types"

import { WindTimeSeriesChart } from "./WindTimeSeries"

export default {
  component: WindTimeSeriesChart,
  title: "Components/Charts/WindTimeSeriesChart",
  parameters: {
    storyshots: { disable: true },
  },
}

/** Must be manually tested. Does not snapshot correctly */
export const doesntExplodeWithNegativeDates = (args) => <WindTimeSeriesChart {...args} />
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
