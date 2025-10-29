import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1.5

const { sea_surface_height_above_geopotential_datum } = data_types

describe("sea_surface_height_above_geopotential_datum conversions", () => {
  it("to english", () => {
    const result = sea_surface_height_above_geopotential_datum.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(4.92)
  })

  it("to metric", () => {
    const result = sea_surface_height_above_geopotential_datum.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_surface_height_above_geopotential_datum.displayName(UnitSystem.english)).toBe("ft")
    expect(sea_surface_height_above_geopotential_datum.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
