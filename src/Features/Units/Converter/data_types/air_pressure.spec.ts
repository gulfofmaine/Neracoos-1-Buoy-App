import { UnitSystem } from "../../types"
import { air_pressure } from "./air_pressure"

const source_value = 1018.8694

describe("air_pressure conversions", () => {
  it("to imperial", () => {
    const result = air_pressure.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(14.777)
  })

  it("to metric", () => {
    const result = air_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = air_pressure.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(air_pressure.displayName(UnitSystem.imperial)).toBe("psi")
    expect(air_pressure.displayName(UnitSystem.mariners)).toBe("millibars")
    expect(air_pressure.displayName(UnitSystem.metric)).toBe("millibars")
  })
})
