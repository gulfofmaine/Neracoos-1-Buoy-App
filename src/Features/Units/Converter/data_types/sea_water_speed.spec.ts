import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1000

const { sea_water_speed } = data_types

describe("sea_water_speed conversions", () => {
  it("to english", () => {
    const result = sea_water_speed.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = sea_water_speed.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 100)
  })

  it("to mariners", () => {
    const result = sea_water_speed.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(sea_water_speed.displayName(UnitSystem.english)).toBe("Knots")
    expect(sea_water_speed.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
