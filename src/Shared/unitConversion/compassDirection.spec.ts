import { describe, it, expect } from "vitest"
import { compassDirection } from "./compassDirection"

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
