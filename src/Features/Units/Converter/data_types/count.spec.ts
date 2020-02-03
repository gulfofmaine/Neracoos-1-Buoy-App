import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { count } = data_types

const source_value = 1018.8694

describe("count conversions", () => {
  it("to imperial", () => {
    const result = count.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = count.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(count.displayName(UnitSystem.imperial)).toBe("Count")
    expect(count.displayName(UnitSystem.metric)).toBe("Count")
  })
})
