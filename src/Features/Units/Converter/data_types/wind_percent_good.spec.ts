import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { wind_percent_good } = data_types

const source_value = 1018.8694

describe("wind_percent_good conversions", () => {
  it("to imperial", () => {
    const result = wind_percent_good.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_percent_good.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_percent_good.displayName(UnitSystem.imperial)).toBe("Wind Percent Good")
    expect(wind_percent_good.displayName(UnitSystem.metric)).toBe("Wind Percent Good")
  })
})
