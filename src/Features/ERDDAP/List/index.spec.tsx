import { describe, it, expect } from "vitest"
import * as React from "react"
import { render, screen } from "@testing-library/react"

import { BoundingBox } from "Shared/regions"

import { PlatformFeatureWithDatasets } from "../types"
import { ErddapPlatformListBase, Props, ReduxProps } from "./index"

function setup(platforms: PlatformFeatureWithDatasets[], boundingBox?: BoundingBox) {
  const props: Props & ReduxProps = {
    boundingBox,
    platforms,
  }

  const testWrapper = render(<ErddapPlatformListBase {...props} />)

  return {
    testWrapper,
    props,
  }
}

describe("ErddapPlatfromList", () => {
  it("Should list platforms in the Gulf of Maine", () => {
    const platforms: PlatformFeatureWithDatasets[] = [
      {
        geometry: {
          coordinates: [-68.02734375, 42.890625],
          type: "Point",
        },
        id: "N01",
        properties: {
          attribution: [],
          mooring_site_desc: "NorthEast Shelf",
          readings: [],
        },
        type: "Feature",
      },
      {
        geometry: {
          coordinates: [-63, 40],
          type: "Point",
        },
        id: "Not in the GOM",
        properties: {
          attribution: [],
          mooring_site_desc: "Lost at sea",
          readings: [],
        },
        type: "Feature",
      },
    ]
    const boundingBox: BoundingBox = {
      east: -65.375,
      north: 45.125,
      south: 40.375,
      west: -70.975,
    }

    setup(platforms, boundingBox)

    expect(screen.getAllByRole("link").length).toBe(1)

    const platformList = screen.getByRole("list")
    expect(platformList).toHaveTextContent(platforms[0].id)
    expect(platformList).not.toHaveTextContent(platforms[1].id as string)
  })
})
