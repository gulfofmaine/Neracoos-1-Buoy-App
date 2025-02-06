import * as React from "react"
import { render, screen } from "@testing-library/react"

jest.mock("next/navigation", () => {
  const origionalModule = jest.requireActual("next/navigation")

  return {
    __esModule: true,
    ...origionalModule,
    usePathname: jest.fn(() => "/"),
  }
})

import NavBar from "."

import { regions } from "Shared/regions"

describe("The NavBar should have our primary links", () => {
  let nav: any

  beforeEach(() => {
    render(<NavBar />)
  })

  it("Has an about item", () => {
    expect(screen.getByText("About"))
  })

  it("Has a region dropdown", () => {
    expect(screen.getByText("Regions"))
  })

  // it("Includes Model Viewer", () => {
  //   expect(screen.getByText("Model Viewer"))
  // })

  it("Includes the Water Level page", () => {
    expect(screen.getByText("Water Level"))
  })

  it("Has our regions", () => {
    const ourRegions: string[] = [
      regions.Boston,
      regions.CapeCod,
      regions.GreatBay,
      regions.GulfOfMaine,
      regions.LongIslandSound,
      regions.NarragansettBay,
      regions.Newfoundland,
    ].map((r) => r.name)

    ourRegions.forEach((r) => {
      expect(screen.getByText(r))
    })
  })

  it("Doesn't contain a link to the map", () => {
    // https://stackoverflow.com/a/52783201/3658919
    expect(screen.queryByText("Map")).not.toBeInTheDocument()
  })
})
