import { describe, it, expect } from "vitest"

import { regions, regionMenuList, regionPageList } from "./regions"

describe("regions", () => {
  it("regionMenuList contains all the regions", () => {
    const regionNames = Object.values(regions).map((r) => r.name)
    const menuRegionNames = regionMenuList.map((r) => r.name)
    expect(menuRegionNames.sort()).toEqual(regionNames.sort())
  })

  it("regionPageList contains all the regions", () => {
    const regionNames = Object.values(regions).map((r) => r.name)
    const pageRegionNames = regionPageList.map((r) => r.name)
    expect(pageRegionNames.sort()).toEqual(regionNames.sort())
  })

  it("regionMenuList and regionPageList have the same regions", () => {
    const menuRegionNames = regionMenuList.map((r) => r.name).sort()
    const pageRegionNames = regionPageList.map((r) => r.name).sort()
    expect(menuRegionNames).toEqual(pageRegionNames)
  })
})
