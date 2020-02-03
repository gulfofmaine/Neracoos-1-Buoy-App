import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { mole_concentration_of_nitrate_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "microM"

describe("mole_concentration_of_nitrate_in_sea_water conversions", () => {
  it("to imperial", () => {
    const result = mole_concentration_of_nitrate_in_sea_water.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = mole_concentration_of_nitrate_in_sea_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(mole_concentration_of_nitrate_in_sea_water.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(mole_concentration_of_nitrate_in_sea_water.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
