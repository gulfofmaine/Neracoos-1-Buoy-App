import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { surface_partial_pressure_of_carbon_dioxide_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "microATM"

describe("surface_partial_pressure_of_carbon_dioxide_in_sea_water conversions", () => {
  it("to english", () => {
    const result = surface_partial_pressure_of_carbon_dioxide_in_sea_water.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = surface_partial_pressure_of_carbon_dioxide_in_sea_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(surface_partial_pressure_of_carbon_dioxide_in_sea_water.displayName(UnitSystem.english)).toBe(displayName)
    expect(surface_partial_pressure_of_carbon_dioxide_in_sea_water.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
