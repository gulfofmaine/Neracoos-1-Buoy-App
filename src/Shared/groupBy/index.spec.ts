import { describe, it, expect } from "vitest"
import { groupBy } from "./index"

describe("groupBy", () => {
  it("Can group by a key corresponding to a string", () => {
    const datasets = groupBy(testObjects, "dataset")

    expect(datasets.A.length).toEqual(2)
    expect(datasets.B.length).toEqual(1)

    const servers = groupBy(testObjects, "server")

    expect(servers.a.length).toEqual(1)
    expect(servers.b.length).toEqual(1)
    expect(servers.c.length).toEqual(1)
  })

  it("Can group by a key corresponding to an object", () => {
    const constraints = groupBy(testObjects, "constraints")

    expect(constraints['{"station=":"NAXR1"}'].length).toEqual(2)
    expect(constraints['{"station=":"44022"}'].length).toEqual(1)
  })
})

const testObjects = [
  {
    constraints: { "station=": "NAXR1" },
    dataset: "A",
    server: "a",
  },
  {
    constraints: { "station=": "NAXR1" },
    dataset: "A",
    server: "b",
  },
  {
    constraints: { "station=": "44022" },
    dataset: "B",
    server: "c",
  },
]
