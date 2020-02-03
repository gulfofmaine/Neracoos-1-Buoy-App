import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { fractional_saturation_of_oxygen_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "percent"

describe("fractional_saturation_of_oxygen_in_sea_water conversions", () => {
  it("to imperial", () => {
    const result = fractional_saturation_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = fractional_saturation_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(fractional_saturation_of_oxygen_in_sea_water.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(fractional_saturation_of_oxygen_in_sea_water.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
