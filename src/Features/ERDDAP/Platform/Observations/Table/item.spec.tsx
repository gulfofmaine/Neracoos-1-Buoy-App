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
        <TableItem platform={platform} data_type="wind_speed" name="Wind Speed" unit_system={UnitSystem.imperial} />
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
        <TableItem platform={platform} data_type="air_temp" unit_system={UnitSystem.imperial} name="Air Temp" />
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe("")
  })
})

const platform: PlatformFeatureWithDatasets = {
  geometry: {
    coordinates: [0, 0],
    type: "Point"
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
          units: "m/s"
        },
        dataset: "N01",
        depth: -2,
        error: "",
        loading: false,
        readings: [],
        server: "neracoos",
        start_time: "2019-01-02T16:31:10.088Z",
        value: 4.25,
        variable: "wind"
      }
    ]
  },
  type: "Feature"
}
