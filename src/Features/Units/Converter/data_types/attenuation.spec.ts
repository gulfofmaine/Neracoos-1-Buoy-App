import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { attenuation } = data_types

const source_value = 1018.8694

const displayName = "Per Meter"

describe("attenuation conversions", () => {
  it("to imperial", () => {
    const result = attenuation.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = attenuation.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(attenuation.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(attenuation.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
