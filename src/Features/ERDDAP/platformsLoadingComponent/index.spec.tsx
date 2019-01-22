import { mount } from "enzyme"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../types"
import { ErddapPlatformsLoaderBase, ReduxProps } from "./index"

function setup(loading: boolean, platforms: PlatformFeatureWithDatasets[], errorMessage?: string) {
  const props: ReduxProps = {
    errorMessage,
    loadPlatforms: jest.fn(),
    loading,
    platforms
  }

  const enzymeWrapper = mount(
    <ErddapPlatformsLoaderBase {...props}>
      <p>Hello</p>
    </ErddapPlatformsLoaderBase>
  )

  return {
    enzymeWrapper,
    props
  }
}

describe("ErddapPlatformsLoaderBase", () => {
  it("Should attempt to load when mounted", () => {
    const { props, enzymeWrapper } = setup(false, [])

    expect(enzymeWrapper.find("div.alert").text()).toEqual("Trying to load platforms from ERDDAP.")

    expect(props.loadPlatforms).toBeCalled()
    expect(props.loadPlatforms.mock.calls.length).toBe(1)
  })

  it("Should show loading alert when loading", () => {
    const { props, enzymeWrapper } = setup(true, [])

    expect(enzymeWrapper.find("div.alert").text()).toEqual("Loading information about platforms from ERDDAP.")
    expect(props.loadPlatforms.mock.calls.length).toBe(0)
  })

  it("Should show children when platforms are loaded", () => {
    const { props, enzymeWrapper } = setup(false, [
      {
        geometry: {
          coordinates: [0, 0],
          type: "Point"
        },
        id: "N01",
        properties: {
          attribution: [],
          mooring_site_desc: "NorthEast Channel",
          readings: []
        },
        type: "Feature"
      }
    ])

    expect(enzymeWrapper.find("p").text()).toEqual("Hello")
    expect(props.loadPlatforms.mock.calls.length).toBe(0)
  })
})
