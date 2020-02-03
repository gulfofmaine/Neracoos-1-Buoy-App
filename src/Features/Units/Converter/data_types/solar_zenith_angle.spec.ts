import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { solar_zenith_angle } = data_types

const source_value = 1018.8694

const displayName = "Radians"

describe("solar_zenith_angle conversions", () => {
  it("to imperial", () => {
    const result = solar_zenith_angle.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = solar_zenith_angle.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(solar_zenith_angle.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(solar_zenith_angle.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
