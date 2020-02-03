import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { dissolved_oxygen } = data_types

const source_value = 1018.8694

const displayName = "ml/l"

describe("dissolved_oxygen conversions", () => {
  it("to imperial", () => {
    const result = dissolved_oxygen.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = dissolved_oxygen.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(dissolved_oxygen.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(dissolved_oxygen.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
