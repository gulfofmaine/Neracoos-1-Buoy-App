import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { sea_surface_wave_to_direction } = data_types

describe("sea_surface_wave_to_direction conversions", () => {
  it("to english", () => {
    const result = sea_surface_wave_to_direction.convertTo(source_value, UnitSystem.english)
    expect(result).toBe("NE")
  })

  it("to english number", () => {
    const result = sea_surface_wave_to_direction.convertToNumber(source_value, UnitSystem.english)
    expect(result).toBe(source_value)
  })

  it("to metric", () => {
    const result = sea_surface_wave_to_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_surface_wave_to_direction.displayName(UnitSystem.english)).toBe("")
    expect(sea_surface_wave_to_direction.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
