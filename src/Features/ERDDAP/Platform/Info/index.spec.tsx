import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import type { PlatformFeatureWithDatasets } from "../../types"
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

    expect(screen.getByRole("heading")).toHaveTextContent(platform.id)
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.properties.mooring_site_desc)
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.geometry.coordinates[0].toString())
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.geometry.coordinates[1].toString())
    expect(screen.getByRole("complementary")).toHaveTextContent(platform.properties.attribution[0].attribution)
  })
})
