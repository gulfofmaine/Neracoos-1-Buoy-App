import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { lon_offset } = data_types

const source_value = 1018.8694

describe("lon_offset conversions", () => {
  it("to imperial", () => {
    const result = lon_offset.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = lon_offset.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(lon_offset.displayName(UnitSystem.imperial)).toBe("Angular Minutes")
    expect(lon_offset.displayName(UnitSystem.metric)).toBe("Angular Minutes")
  })
})
