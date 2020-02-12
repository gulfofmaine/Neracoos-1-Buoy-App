import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { mean_wave_direction } = data_types

describe("mean_wave_direction conversions", () => {
  it("to english", () => {
    const result = mean_wave_direction.convertTo(source_value, UnitSystem.english)
    expect(result).toBe("NE")
  })

  it("to metric", () => {
    const result = mean_wave_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(mean_wave_direction.displayName(UnitSystem.english)).toBe("Cardinal Direction")
    expect(mean_wave_direction.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
