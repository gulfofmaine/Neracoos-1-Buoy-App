import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { significant_height_of_wind_and_swell_waves } = data_types

describe("significant_height_of_wind_and_swell_waves conversions", () => {
  it("to english", () => {
    const result = significant_height_of_wind_and_swell_waves.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = significant_height_of_wind_and_swell_waves.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(significant_height_of_wind_and_swell_waves.displayName(UnitSystem.english)).toBe("ft")
    expect(significant_height_of_wind_and_swell_waves.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
