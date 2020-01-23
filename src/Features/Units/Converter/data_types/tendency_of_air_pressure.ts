import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { tendency_of_air_pressure } = data_types

const source_value = 1018.8694

describe("tendency_of_air_pressure conversions", () => {
  it("to imperial", () => {
    const result = tendency_of_air_pressure.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(14.777)
  })

  it("to metric", () => {
    const result = tendency_of_air_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = tendency_of_air_pressure.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(tendency_of_air_pressure.displayName(UnitSystem.imperial)).toBe("psi")
    expect(tendency_of_air_pressure.displayName(UnitSystem.mariners)).toBe("millibars")
    expect(tendency_of_air_pressure.displayName(UnitSystem.metric)).toBe("hPa")
  })
})
