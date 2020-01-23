import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { mean_wave_direction } = data_types

describe("mean_wave_direction conversions", () => {
  it("to imperial", () => {
    const result = mean_wave_direction.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBe("NE")
  })

  it("to metric", () => {
    const result = mean_wave_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = mean_wave_direction.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBe("NE")
  })

  it("display names", () => {
    expect(mean_wave_direction.displayName(UnitSystem.imperial)).toBe("Cardinal Direction")
    expect(mean_wave_direction.displayName(UnitSystem.mariners)).toBe("Cardinal Direction")
    expect(mean_wave_direction.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
