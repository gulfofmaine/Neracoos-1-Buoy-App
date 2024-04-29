import * as React from "react"
import { render, screen } from "@testing-library/react"

import { UnitSystem } from "Features/Units/types"

import { PlatformFeature } from "../../../types"
import { TableItem } from "./item"

const platform: PlatformFeature = {
  geometry: {
    coordinates: [0, 0],
    type: "Point",
  },
  id: "N01",
  properties: {
    attribution: [],
    mooring_site_desc: "Northeast channel",
    readings: [
      {
        constraints: {},
        data_type: {
          long_name: "Wind Speed",
          short_name: "WSPD",
          standard_name: "wind_speed",
          units: "m/s",
        },
        dataset: "N01",
        depth: -2,
        error: "",
        loading: false,
        readings: [],
        server: "neracoos",
        start_time: "2019-01-02T16:31:10.088Z",
        value: 4.25,
        variable: "wind",
      },
      {
        value: 0.310469806194305,
        time: "2020-06-02T15:59:59.999986Z",
        depth: null,
        data_type: {
          standard_name: "significant_height_of_wind_and_swell_waves_3",
          short_name: "WVHT",
          long_name: "Significant Wave Height",
          units: "m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "significant_wave_height",
        constraints: {
          "significant_wave_height_qc=": 0,
        },
        dataset: "E01_accelerometer_all",
        start_time: "2020-04-29T12:10:23Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
      },

      {
        value: 0.229300007224083,
        time: "2020-06-02T15:59:59.999986Z",
        depth: null,
        data_type: {
          standard_name: "significant_wave_height",
          short_name: "SWH",
          long_name: "Significant Wave Height",
          units: "m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "significant_wave_height_3",
        constraints: {
          "significant_wave_height_3_qc=": 0,
        },
        dataset: "E01_waves_mstrain_all",
        start_time: "2019-05-29T19:13:14Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
      },
    ],
  },
  type: "Feature",
}

describe("TableItem", () => {
  const windSpeed = platform.properties.readings.find((ts) => ts.data_type.standard_name === "wind_speed")

  it("Selectes and renders correct data", () => {
    render(<TableItem platform={platform} timeSeries={windSpeed} unitSystem={UnitSystem.english} />)

    expect(screen.getByRole("link")).toHaveTextContent("Wind Speed:")
  })

  it("Rounds the wind speed", () => {
    render(
      <TableItem
        platform={platform}
        // readings={platform.properties.readings}
        timeSeries={windSpeed}
        unitSystem={UnitSystem.metric}
      />,
    )

    expect(screen.getByRole("link")).toHaveTextContent("Wind Speed: 4.3 Meters/Second")
  })
})
