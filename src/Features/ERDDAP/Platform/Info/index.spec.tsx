import { describe, it, expect } from "vitest"
import * as React from "react"
import { render, screen } from "@testing-library/react"

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

    render(<ErddapPlatformInfoPanel platform={platform} />)

    expect(screen.getByRole("header")).toHaveTextContent(platform.id)
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.properties.mooring_site_desc)
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.geometry.coordinates[0].toString())
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.geometry.coordinates[1].toString())
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.properties.attribution[0].attribution)
  })
})
