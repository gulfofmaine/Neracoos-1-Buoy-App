import { describe, it, expect } from "vitest"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature } from "../types"

import { pickWindDatasets } from "./wind"

const variable = "wind_speed"
const long_name = "Wind Speed"

const timeSeries = {
  value: 2.33999991416931,
  time: "2020-02-04T12:59:59.999986Z",
  depth: 0,
  data_type: {
    standard_name: "wind_speed",
    short_name: "WSPD",
    long_name,
    units: "m/s",
  },
  server: "http://www.neracoos.org/erddap",
  variable,
  constraints: {},
  dataset: "M01_met_all",
  start_time: "2001-07-16T16:00:00Z",
}

const platform: PlatformFeature = {
  id: "M01",
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-67.8798, 43.4907],
  },
  properties: {
    id: 98,
    readings: [timeSeries],
    attribution: [
      {
        program: {
          name: "University of Maine",
          website: "http://gyre.umeoce.maine.edu/gomoos.php",
        },
        attribution: "University of Maine",
      },
    ],
    alerts: [],
    mooring_site_desc: "Jordan Basin",
    active: true,
    ndbc_site_id: "44037",
    uscg_light_letter: "M",
    uscg_light_num: "6",
    watch_circle_radius: null,
    programs: [1],
  },
}

const dataset: DataTimeSeries = {
  timeSeries: [],
  name: "wind_speed",
  unit: "m/s",
}

const datasets = [dataset]

describe("Wind utils", () => {
  it("pickWindDataset won't rename source datasets", () => {
    const { speed } = pickWindDatasets(platform, datasets)

    expect(speed.name).toEqual(long_name)
    expect(speed.name).not.toEqual(variable)

    expect(dataset.name).toEqual(variable)
    expect(speed.name).not.toEqual(dataset.name)
  })
})
