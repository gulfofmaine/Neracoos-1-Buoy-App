import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1000

const { eastward_sea_water_velocity } = data_types

describe("eastward_sea_water_velocity conversions", () => {
  it("to imperial", () => {
    const result = eastward_sea_water_velocity.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = eastward_sea_water_velocity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 100)
  })

  it("to mariners", () => {
    const result = eastward_sea_water_velocity.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(eastward_sea_water_velocity.displayName(UnitSystem.imperial)).toBe("Knots")
    expect(eastward_sea_water_velocity.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
