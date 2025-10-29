import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import { PlatformFeatureWithDatasets } from "../../types"
import { ErddapMoreInfoDropdown } from "./index"

describe("ErddapMoreInfoDropdown", () => {
  it("Renders a more info menu for a platform", async () => {
    render(<ErddapMoreInfoDropdown platform={platform} />)

    expect(screen.getByRole("menu")).toHaveTextContent("More info")

    const user = userEvent.setup()
    await user.click(screen.getByText("More info"))

    const dropdownDiv = screen.getAllByRole("menuitem")

    expect(dropdownDiv.length).toBeGreaterThan(0)
    expect(dropdownDiv[0]).toContainHTML(wxUrl)
  })
})

const lon = -73.73
const lat = 40.88

const wxUrl = `https://marine.weather.gov/MapClick.php?lon=${lon}&amp;lat=${lat}`

// tslint:disable:object-literal-sort-keys
const platform: PlatformFeatureWithDatasets = {
  geometry: {
    type: "Point",
    coordinates: [lon, lat],
  },
  id: "EXRX",
  type: "Feature",
  properties: {
    id: 86,
    readings: [],
    attribution: [],
    mooring_site_desc: "Execution Rocks Long Island Sound",
    active: true,
    ndbc_site_id: "44022",
    uscg_light_letter: null,
    uscg_light_num: null,
    watch_circle_radius: null,
    programs: [],
  },
}
