import { mount } from "enzyme"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../../types"
import { ErddapPlatformGetterBase, ReduxProps, Props } from "./index"

describe("ErddapPlatformGetterBase", () => {
  it("Should pass the correct platform to the child component when loaded", () => {
    const children = jest.fn()

    const props: Partial<ReduxProps & Props> = {
      platformId: "N01",
      platforms: [platform]
    }

    const enzymeWrapper = mount(
      <ErddapPlatformGetterBase {...props}>
        {data => {
          children(data)
          return <p>Hi</p>
        }}
      </ErddapPlatformGetterBase>
    )

    expect(children).toHaveBeenCalledWith({ platform })
    expect(enzymeWrapper.text()).toContain("Hi")
  })

  it('Should display "Unable to load platform" when an invalid platform name is passed', () => {
    const children = jest.fn()

    const props: Partial<ReduxProps & Props> = {
      platformId: "A01",
      platforms: [platform]
    }

    const enzymeWrapper = mount(
      <ErddapPlatformGetterBase {...props}>
        {data => {
          children(data)
          return <p>Hi</p>
        }}
      </ErddapPlatformGetterBase>
    )

    expect(children).not.toHaveBeenCalled()
    expect(enzymeWrapper.text()).not.toContain("Hi")
    expect(enzymeWrapper.text()).toContain("Unable to load platform A01")
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
    mooring_site_desc: "Northeast Shelf",
    readings: []
  },
  type: "Feature"
}
