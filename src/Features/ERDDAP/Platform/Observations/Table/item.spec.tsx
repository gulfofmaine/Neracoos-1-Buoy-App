import { mount } from "enzyme"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../../../types"
import { TableItem } from "./item"

describe("TableItem", () => {
  it("Selectes and renders correct data", () => {
    const wrapper = mount(<TableItem platform={platform} data_type="wind_speed" printed_unit="M/S" name="Wind Speed" />)

    expect(wrapper.text()).toContain("Wind Speed:")
  })

  it("Rounds the wind speed", () => {
    const wrapper = mount(<TableItem platform={platform} data_type="wind_speed" printed_unit="M/S" name="Wind Speed" />)

    expect(wrapper.text()).toContain("Wind Speed: 4.3 M/S")
  })

  it("Includes similar measures", () => {
    const wrapper = mount(<TableItem platform={platform} data_type="wind_speed" printed_unit="M/S" name="Wind Speed" />)

    expect(wrapper.text()).toContain("(8.3 knots, 9.6 mph)")
  })

  it("Transforms measurement value when preffered_unit differs", () => {
    const wrapper = mount(
      <TableItem
        platform={platform}
        data_type="wind_speed"
        printed_unit="Knots"
        name="Wind Speed"
        prefered_unit="knot"
      />
    )

    expect(wrapper.text()).toContain("Wind Speed: 8.3 Knots")
  })

  it("Returns null when there is not a matching datatype", () => {
    const wrapper = mount(<TableItem platform={platform} data_type="air_temp" printed_unit="C" name="Air Temp" />)

    expect(wrapper.text()).toBe(null)
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
