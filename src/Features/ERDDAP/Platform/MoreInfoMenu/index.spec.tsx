import { mount } from "enzyme"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../../types"
import { ErddapMoreInfoDropdown } from "./index"

describe("ErddapMoreInfoDropdown", () => {
  it("Renders a more info menu for a platform", () => {
    const wrapper = mount(<ErddapMoreInfoDropdown platform={platform} />)

    expect(wrapper.find("a.dropdown-toggle").text()).toEqual("More info")

    const dropdownDiv = wrapper.find("div.dropdown-menu")
    const items = dropdownDiv.children()

    expect(items.length).toEqual(2)
    expect(dropdownDiv.childAt(0).html()).toContain("https://marine.weather.gov/MapClick.php?lon=-73.73&amp;lat=40.88")
  })
})

// tslint:disable:object-literal-sort-keys
const platform: PlatformFeatureWithDatasets = {
  geometry: {
    type: "Point",
    coordinates: [-73.73, 40.88],
  },
  id: "EXRX",
  type: "Feature",
  properties: {
    id: 86,
    readings: [],
    attribution: [],
    mooring_site_desc: "Execution Rocks Long Island Sound",
    active: true,
    ndbc_site_id: "44022",
    uscg_light_letter: null,
    uscg_light_num: null,
    watch_circle_radius: null,
    programs: [],
  },
}
