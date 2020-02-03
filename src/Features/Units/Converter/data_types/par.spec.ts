import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { par } = data_types

const source_value = 1018.8694

const displayName = "µE/m2/sec"

describe("par conversions", () => {
  it("to imperial", () => {
    const result = par.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = par.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(par.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(par.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
