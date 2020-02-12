import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { sea_surface_wave_to_direction } = data_types

describe("sea_surface_wave_to_direction conversions", () => {
  it("to english", () => {
    const result = sea_surface_wave_to_direction.convertTo(source_value, UnitSystem.english)
    expect(result).toBe("NE")
  })

  it("to metric", () => {
    const result = sea_surface_wave_to_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_surface_wave_to_direction.displayName(UnitSystem.english)).toBe("Cardinal Direction")
    expect(sea_surface_wave_to_direction.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
