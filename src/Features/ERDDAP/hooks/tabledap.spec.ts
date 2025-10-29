import { describe, it, expect } from "vitest"
import { PlatformTimeSeries } from "../types"
import { urlBuilder } from "./tabledap"

const timeseries: PlatformTimeSeries = {
  data_type: {
    standard_name: "air_temperature",
    long_name: "Air Temperature",
    units: "Celsius",
  },
  server: "http://neracoos.org/erddap",
  variable: "temp",
  dataset: "A01_met",
  start_time: "2010-01-01",
  constraints: {},
}
const startTime = new Date("2021-04-21T00:00:00Z")

describe("TableDAP urlBuilder", () => {
  it("Will produce a non-proxied URL when appropriate", () => {
    const url = urlBuilder([timeseries], startTime)

    expect(url).toEqual(
      "http://neracoos.org/erddap/tabledap/A01_met.json?time%2Ctemp&time%3E%3D%222021-04-21T00%3A00%3A00.000Z%22",
    )
    expect(url).not.toContain("proxy")
  })

  it("Will produce a proxy url when appropriate", () => {
    const cors_proxy_url = "/api/servers/1/proxy"
    const url = urlBuilder([{ ...timeseries, cors_proxy_url }], startTime)

    expect(url).toContain(cors_proxy_url)
    expect(url).toContain(
      "/api/servers/1/proxy/tabledap/A01_met.json?time%2Ctemp&time%3E%3D%222021-04-21T00%3A00%3A00.000Z%22",
    )
    expect(url).not.toContain("erddap")
  })
})
