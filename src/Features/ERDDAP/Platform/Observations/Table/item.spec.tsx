import { mount } from "enzyme"
import * as React from "react"
import { MemoryRouter } from "react-router-dom"

import { UnitSystem } from "Features/Units/types"

import { PlatformFeatureWithDatasets } from "../../../types"
import { TableItem } from "./item"

describe("TableItem", () => {
  it("Selectes and renders correct data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <TableItem platform={platform} data_type="wind_speed" name="Wind Speed" unit_system={UnitSystem.english} />
      </MemoryRouter>
    )

    expect(wrapper.text()).toContain("Wind Speed:")
  })

  it("Rounds the wind speed", () => {
    const wrapper = mount(
      <MemoryRouter>
        <TableItem platform={platform} data_type="wind_speed" name="Wind Speed" unit_system={UnitSystem.metric} />
      </MemoryRouter>
    )

    expect(wrapper.text()).toContain("Wind Speed: 4.3 Meters/Second")
  })

  it("Returns null when there is not a matching datatype", () => {
    const wrapper = mount(
      <MemoryRouter>
        <TableItem platform={platform} data_type="air_temp" unit_system={UnitSystem.english} name="Air Temp" />
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe("")
  })

  it("Returns only the first selected datatype", () => {
    // Need to have a div in the body for the tooltip to attach to
    const div = document.createElement("div")
    document.body.appendChild(div)

    const wrapper = mount(
      <MemoryRouter>
        <TableItem
          platform={platform}
          data_type={["significant_wave_height", "significant_height_of_wind_and_swell_waves_3"]}
          unit_system={UnitSystem.english}
          name="Wave Height"
        />
      </MemoryRouter>,
      { attachTo: div }
    )

    expect(wrapper.text()).toContain("Wave Height: 0.8 Feet")
    expect(wrapper.text()).not.toContain("Wave Height: 1.1 Feet")
  })
})

const platform: PlatformFeatureWithDatasets = {
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
