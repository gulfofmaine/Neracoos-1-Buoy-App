import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { direction_of_sea_water_velocity } = data_types

const source_value = 1018.8694

describe("direction_of_sea_water_velocity conversions", () => {
  it("to imperial", () => {
    const result = direction_of_sea_water_velocity.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = direction_of_sea_water_velocity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(direction_of_sea_water_velocity.displayName(UnitSystem.imperial)).toBe("Angular Degrees")
    expect(direction_of_sea_water_velocity.displayName(UnitSystem.metric)).toBe("Angular Degrees")
  })
})
