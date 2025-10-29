import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { sea_surface_wave_significant_height } = data_types

describe("sea_surface_wave_significant_height conversions", () => {
  it("to english", () => {
    const result = sea_surface_wave_significant_height.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = sea_surface_wave_significant_height.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_surface_wave_significant_height.displayName(UnitSystem.english)).toBe("ft")
    expect(sea_surface_wave_significant_height.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
