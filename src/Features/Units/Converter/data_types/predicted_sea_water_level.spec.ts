import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { predicted_sea_water_level } = data_types

describe("predicted_sea_water_level conversions", () => {
  it("to english", () => {
    const result = predicted_sea_water_level.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = predicted_sea_water_level.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(predicted_sea_water_level.displayName(UnitSystem.english)).toBe("ft")
    expect(predicted_sea_water_level.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
