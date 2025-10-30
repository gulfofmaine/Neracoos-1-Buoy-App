import { describe, it, expect } from "vitest"
import { converter } from "./index"
import { UnitSystem } from "../types"

describe("Unit converter", () => {
  it("Can retrieve data_type and convert values", () => {
    const data_type = "wind_gust"
    const source_value = 1000

    const dataConverter = converter(data_type)

    expect(dataConverter.convertTo(source_value, UnitSystem.english)).toBeCloseTo(19.4384)
    expect(dataConverter.displayName(UnitSystem.english)).toBe("Knots")
  })

  it("Does not explode and return an invalid data type silently", () => {
    const data_type = "invalid_data_type"
    const source_value = 1000

    const dataConverter = converter(data_type)

    expect(dataConverter).toBeDefined()

    expect(dataConverter.convertTo(source_value, UnitSystem.english)).toBe(source_value)
    expect(dataConverter.displayName(UnitSystem.english)).toBe("Unknown")
  })
})
