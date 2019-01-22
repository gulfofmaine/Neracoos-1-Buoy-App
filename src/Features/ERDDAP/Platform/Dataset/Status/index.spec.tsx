import { render } from "enzyme"
import * as React from "react"

import { PlatformDataset } from "../../../types"

import { ErddapDatasetStatus } from "./index"

describe("ErddapDatasetStatus", () => {
  it("Will display that datasets were from ERDDAP", () => {
    const wrapper = render(<ErddapDatasetStatus datasets={[]} />)

    expect(wrapper.text()).toEqual("")
  })

  it("Will display when a dataset is loading", () => {
    const datasets: PlatformDataset[] = [datasetA]
    const wrapper = render(<ErddapDatasetStatus datasets={datasets} />)

    expect(wrapper.text()).toContain("Currently loading")
    expect(wrapper.text()).toContain(datasetA.data_type.long_name)
    expect(wrapper.text()).toContain("dataset.")
  })

  it("Will display when two datasets are loading", () => {
    const datasets: PlatformDataset[] = [datasetA, datasetB]
    const wrapper = render(<ErddapDatasetStatus datasets={datasets} />)

    expect(wrapper.text()).toContain("Currently loading")
    expect(wrapper.text()).toContain(datasetA.data_type.long_name)
    expect(wrapper.text()).toContain(datasetB.data_type.long_name)
    expect(wrapper.text()).toContain(" and ")
    expect(wrapper.text()).toContain("datasets.")
  })

  it("Will display when more than two datasets are loading", () => {
    const datasets: PlatformDataset[] = [datasetA, datasetB, datasetC]
    const wrapper = render(<ErddapDatasetStatus datasets={datasets} />)

    expect(wrapper.text()).toContain("Currently loading")
    expect(wrapper.text()).toContain(datasetA.data_type.long_name)
    expect(wrapper.text()).toContain(datasetB.data_type.long_name)
    expect(wrapper.text()).toContain(datasetC.data_type.long_name)
    expect(wrapper.text()).toContain(", and ")
    expect(wrapper.text()).toContain("datasets.")
  })

  it("Will display when there are errors loading dataset", () => {
    const datasets: PlatformDataset[] = [datasetErrorA, datasetErrorB]
    const wrapper = render(<ErddapDatasetStatus datasets={datasets} />)

    expect(wrapper.text()).not.toContain("Currently Loading")
    expect(wrapper.text()).toContain(datasetErrorA.error)
    expect(wrapper.text()).toContain(datasetErrorA.data_type.long_name)
    expect(wrapper.text()).toContain(datasetErrorB.error)
    expect(wrapper.text()).toContain(datasetErrorB.data_type.long_name)
  })
})

const datasetA: PlatformDataset = {
  constraints: {},
  data_type: {
    long_name: "Air Temperature",
    short_name: "AIR",
    standard_name: "air_temperature",
    units: "celsius"
  },
  dataset: "met",
  depth: -2,
  error: "",
  loading: true,
  readings: [],
  server: "neracoos",
  start_time: "",
  variable: "temp"
}

const datasetB: PlatformDataset = {
  constraints: {},
  data_type: {
    long_name: "Wind Speed",
    short_name: "wspd",
    standard_name: "wind_speed",
    units: "m/s"
  },
  dataset: "met",
  depth: -2,
  error: "",
  loading: true,
  readings: [],
  server: "neracoos",
  start_time: "",
  variable: "wind_speed"
}

const datasetC: PlatformDataset = {
  constraints: {},
  data_type: {
    long_name: "Wind Gust",
    short_name: "wgst",
    standard_name: "wind_gust",
    units: "m/s"
  },
  dataset: "met",
  depth: -2,
  error: "",
  loading: true,
  readings: [],
  server: "neracoos",
  start_time: "",
  variable: "wind_gust"
}

const datasetErrorA: PlatformDataset = {
  ...datasetA,
  error: "An error occured",
  loading: false
}

const datasetErrorB: PlatformDataset = {
  ...datasetB,
  error: "Something bad happened",
  loading: false
}
