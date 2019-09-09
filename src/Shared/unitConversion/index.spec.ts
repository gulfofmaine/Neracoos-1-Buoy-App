import { compassDirection, convertUnit } from "."

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

describe("compassDirection", () => {
  it("Can find North", () => {
    const degrees = 0
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("North")
    expect(short).toEqual("N")
  })

  it("Can find North-northeast", () => {
    const degrees = 23.97
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("North-northeast")
    expect(short).toEqual("NNE")
  })

  it("Can find Northeast by north", () => {
    const degrees = 33.7
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("Northeast by north")
    expect(short).toEqual("NEbN")
  })

  it("East-northeast", () => {
    const degrees = 73.12
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("East-northeast")
    expect(short).toEqual("ENE")
  })

  it("East by north", () => {
    const degrees = 73.13
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("East by north")
    expect(short).toEqual("EbN")
  })

  it("Southwest by south", () => {
    const degrees = 219
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("Southwest by south")
    expect(short).toEqual("SWbS")
  })

  it("West", () => {
    const degrees = 275
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("West")
    expect(short).toEqual("W")
  })

  it("West by north", () => {
    const degrees = 276
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("West by north")
    expect(short).toEqual("WbN")
  })

  it("West-northwest", () => {
    const degrees = 287
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("West-northwest")
    expect(short).toEqual("WNW")
  })

  it("Can find 355.92", () => {
    const degrees = 355.92
    const [long, short] = compassDirection(degrees)

    expect(long).toEqual("North")
    expect(short).toEqual("N")
  })
})
