import { mount } from "enzyme"
import * as React from "react"
import { MemoryRouter } from "react-router-dom"

import NavBar from "."

import { regions } from "Shared/regions"

describe("The NavBar should have our primary links", () => {
  let nav: any

  beforeEach(() => {
    nav = mount(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  })
  {
    /* const nav = mount(<MemoryRouter><NavBar /><MemoryRouter></MemoryRouter>) */
  }

  it("Has an about item", () => {
    expect(nav.contains("About")).toEqual(true)
  })

  it("Has a region dropdown", () => {
    expect(nav.contains("Regions")).toEqual(true)
  })

  it("Has our regions", () => {
    const ourRegions: string[] = [
      regions.Boston,
      regions.CapeCod,
      regions.GreatBay,
      regions.GulfOfMaine,
      regions.LongIslandSound,
      regions.NarragansettBay,
      regions.Newfoundland
    ].map(r => r.name)

    ourRegions.forEach(r => {
      expect(nav.contains(r)).toEqual(true)
    })
  })

  it("Doesn't contain a link to the map", () => {
    expect(nav.contains("Map")).toEqual(false)
  })
})
