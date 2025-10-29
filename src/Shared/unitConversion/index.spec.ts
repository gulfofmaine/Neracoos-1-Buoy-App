import { describe, it, expect } from "vitest"
import { convertUnit } from "./index"

describe("convertUnit", () => {
  it("Regression: Does not crash when given a null", () => {
    const result = convertUnit(null, 248)
    expect(result).toEqual("")
  })

  it("Give appropriate values and conversions for meters to miles", () => {
    const result = convertUnit("meters", 248)
    expect(result).toContain("(0.2 miles)")
  })

  it("Give appropriate values and conversions for C to F", () => {
    const result = convertUnit("deg c", 18)
    expect(result).toContain("(64.4° F)")
  })

  it("Give appropriate values and conversions for F to C", () => {
    const result = convertUnit("f", 70)
    expect(result).toContain("(21.2° C)")
  })

  it("Give appropriate values and conversions for m/s to knots and mph", () => {
    const result = convertUnit("m/s", 5)
    expect(result).toContain("(9.8 knots, 11.2 mph)")
  })

  it("Give appropriate values and conversions for knots", () => {
    const result = convertUnit("knot", 15)
    expect(result).toContain("(7.8 m/s, 17.3 mph)")
  })
})
