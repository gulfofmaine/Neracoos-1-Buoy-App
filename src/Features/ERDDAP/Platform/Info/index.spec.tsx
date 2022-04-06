import { mount } from "enzyme"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../../types"
import { ErddapPlatformInfoPanel } from "./index"

describe("ErddapPlatformInfoPanel", () => {
  it("Should display the platform info", () => {
    const platform: PlatformFeatureWithDatasets = {
      geometry: {
        coordinates: [-65.9, 42.3],
        type: "Point",
      },
      id: "N01",
      properties: {
        attribution: [
          {
            attribution: "Data management by NERACOOS",
            program: {
              name: "NERACOOS",
              website: "http://neracoos.org",
            },
          },
        ],
        mooring_site_desc: "NorthEast Channel",
        readings: [],
      },
      type: "Feature",
    }

    const enzymeWrapper = mount(<ErddapPlatformInfoPanel platform={platform} />)

    expect(enzymeWrapper.find(".card-title").text()).toContain(platform.id)
    expect(enzymeWrapper.find(".card-text").text()).toContain(platform.properties.mooring_site_desc)
    expect(enzymeWrapper.find(".card-text").text()).toContain(platform.geometry.coordinates[0].toString())
    expect(enzymeWrapper.find(".card-text").text()).toContain(platform.geometry.coordinates[1].toString())
    expect(enzymeWrapper.find(".card-text").text()).toContain(platform.properties.attribution[0].attribution)
  })
})
