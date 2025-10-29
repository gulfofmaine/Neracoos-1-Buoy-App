import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { concentration_of_colored_dissolved_organic_matter_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "ppbQSE"

describe("concentration_of_colored_dissolved_organic_matter_in_sea_water conversions", () => {
  it("to english", () => {
    const result = concentration_of_colored_dissolved_organic_matter_in_sea_water.convertTo(
      source_value,
      UnitSystem.english,
    )
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = concentration_of_colored_dissolved_organic_matter_in_sea_water.convertTo(
      source_value,
      UnitSystem.metric,
    )
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(concentration_of_colored_dissolved_organic_matter_in_sea_water.displayName(UnitSystem.english)).toBe(
      displayName,
    )
    expect(concentration_of_colored_dissolved_organic_matter_in_sea_water.displayName(UnitSystem.metric)).toBe(
      displayName,
    )
  })
})
