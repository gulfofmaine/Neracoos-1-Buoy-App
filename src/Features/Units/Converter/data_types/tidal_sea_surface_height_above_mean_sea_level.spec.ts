import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1.5

const { tidal_sea_surface_height_above_mean_sea_level } = data_types

describe("tidal_sea_surface_height_above_mean_sea_level conversions", () => {
  it("to english", () => {
    const result = tidal_sea_surface_height_above_mean_sea_level.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(4.92)
  })

  it("to metric", () => {
    const result = tidal_sea_surface_height_above_mean_sea_level.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(tidal_sea_surface_height_above_mean_sea_level.displayName(UnitSystem.english)).toBe("ft")
    expect(tidal_sea_surface_height_above_mean_sea_level.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
