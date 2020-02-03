import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sea_water_alkalinity_expressed_as_mole_equivalent } = data_types

const source_value = 1018.8694

const displayName = "microM/kg"

describe("sea_water_alkalinity_expressed_as_mole_equivalent conversions", () => {
  it("to imperial", () => {
    const result = sea_water_alkalinity_expressed_as_mole_equivalent.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sea_water_alkalinity_expressed_as_mole_equivalent.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_alkalinity_expressed_as_mole_equivalent.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(sea_water_alkalinity_expressed_as_mole_equivalent.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
