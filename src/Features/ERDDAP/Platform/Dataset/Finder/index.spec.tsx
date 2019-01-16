import { mount, render } from "enzyme"
import * as React from "react"

import { PlatformDataset, PlatformFeatureWithDatasets, PlatformProperties } from "../../../types"

import { ErddapDatasetFinder } from "./index"

describe("ErddapDatasetFinder", () => {
  it("Will display an error if there are no matching datasets", () => {
    const platform: Partial<PlatformFeatureWithDatasets> = {
      id: "N01",
      properties: {
        ...properties,
        readings: []
      }
    }
    const standardName = "air_temp"

    const child = jest.fn()

    const wrapper = mount(
      <ErddapDatasetFinder platform={platform} standardName={standardName}>
        {() => {
          child()
          return <p>Hi</p>
        }}
      </ErddapDatasetFinder>
    )

    expect(child).not.toHaveBeenCalled()
    expect(wrapper.text()).toContain(platform.id)
    expect(wrapper.text()).toContain(standardName)
  })

  it("Will call the child with requsted datasets", () => {
    const platform: Partial<PlatformFeatureWithDatasets> = {
      id: "N01",
      properties: {
        ...properties,
        readings: [dataset]
      }
    }

    const child = jest.fn()

    const wrapper = render(
      <ErddapDatasetFinder platform={platform} standardName={dataset.data_type.standard_name}>
        {({ datasets }) => {
          child(datasets)
          return <p>Hi</p>
        }}
      </ErddapDatasetFinder>
    )

    expect(wrapper.text()).toContain("Hi")
    expect(child).toHaveBeenCalledWith([dataset])
  })

  it("Has an alert that data is loaded from ERDDAP", () => {
    const platform: Partial<PlatformFeatureWithDatasets> = {
      properties: {
        ...properties,
        readings: [dataset]
      }
    }

    const wrapper = render(
      <ErddapDatasetFinder platform={platform} standardName={dataset.data_type.standard_name}>
        {() => <p>Hi</p>}
      </ErddapDatasetFinder>
    )

    expect(wrapper.text()).toContain("")
  })
})

const properties: PlatformProperties = {
  attribution: [],
  mooring_site_desc: "Northeast channel"
}

const dataset: PlatformDataset = {
  constraints: {},
  data_type: {
    long_name: "Air Temperature",
    short_name: "air",
    standard_name: "air_temperature",
    units: "celsius"
  },
  dataset: "N01_met",
  depth: -2,
  error: "",
  loading: false,
  readings: [],
  server: "neracoos",
  start_time: "",
  variable: "temp"
}
