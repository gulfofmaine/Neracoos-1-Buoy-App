import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { wind_direction_uv } = data_types

const source_value = 1018.8694

describe("wind_direction_uv conversions", () => {
  it("to imperial", () => {
    const result = wind_direction_uv.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_direction_uv.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_direction_uv.displayName(UnitSystem.imperial)).toBe("Degrees")
    expect(wind_direction_uv.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
