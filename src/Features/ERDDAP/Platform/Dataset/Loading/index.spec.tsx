import { mount, render } from "enzyme"
import * as React from "react"

import { PlatformDataset } from "../../../types"

import { ErddapDatasetLoaderBase } from "./index"

describe("ErddapDatasetLoader", () => {
  it("Will not request a dataset when it is already loading", () => {
    const testDataset = { ...dataset, loading: true }

    const load = jest.fn()

    const wrapper = mount(
      <ErddapDatasetLoaderBase platformId={platformId} datasets={[testDataset]} loadDatasets={load}>
        <p>Hi</p>
      </ErddapDatasetLoaderBase>
    )

    expect(load).not.toBeCalled()
    expect(wrapper.text()).toContain("Hi")
  })

  it("Will load a dataset that doesn't have any readings", () => {
    const load = jest.fn()
    const startTime = new Date()

    const wrapper = mount(
      <ErddapDatasetLoaderBase platformId={platformId} datasets={[dataset]} loadDatasets={load} startTime={startTime}>
        <p>Hi</p>
      </ErddapDatasetLoaderBase>
    )

    expect(load).toBeCalledWith(platformId, [dataset], startTime)
    expect(wrapper.text()).toContain("Hi")
  })

  it("Will load a dataset that has readings but not close to start time", () => {
    const startTime = new Date()
    const sixHoursLater = new Date()
    sixHoursLater.setHours(sixHoursLater.getHours() + 6)

    const testDataset: PlatformDataset = {
      ...dataset,
      readings: [
        {
          time: sixHoursLater,
          value: 0.5
        }
      ]
    }

    const load = jest.fn()

    const wrapper = render(
      <ErddapDatasetLoaderBase
        platformId={platformId}
        loadDatasets={load}
        startTime={startTime}
        datasets={[testDataset]}
      >
        <p>Hi</p>
      </ErddapDatasetLoaderBase>
    )

    expect(wrapper.text()).toContain("Hi")
    expect(load).toHaveBeenCalledWith("N01", [testDataset], startTime)
  })

  it("Will not try to load when there are recent enough readings", () => {
    const startTime = new Date()
    const testDataset: PlatformDataset = {
      ...dataset,
      readings: [
        {
          time: startTime,
          value: 0.5
        }
      ]
    }

    const load = jest.fn()

    const wrapper = render(
      <ErddapDatasetLoaderBase
        platformId={platformId}
        loadDatasets={load}
        startTime={startTime}
        datasets={[testDataset]}
      >
        <p>Hi</p>
      </ErddapDatasetLoaderBase>
    )

    expect(wrapper.text()).toContain("Hi")
    expect(load).not.toHaveBeenCalled()
  })
})

const platformId = "N01"

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
