import { describe, it, expect } from "vitest"
import { constraintsToString, resultToTimeseries, tabledapUrl, variableString } from "./tabledap"

describe("constraintsToString()", () => {
  it("Can create a valid constraints string", () => {
    const constraints = {
      "time>=": "2018-12-15T00:00:00Z",
      "temperature_qc<": 1,
    }

    const result = constraintsToString(constraints)

    expect(result).toEqual("&time%3E%3D%222018-12-15T00%3A00%3A00Z%22&temperature_qc%3C1")
  })
})

describe("variableString", () => {
  it("Can create a valid variable string", () => {
    const variables = ["current_speed", "current_direction"]

    const result = variableString(variables)

    expect(result).toEqual("time%2Ccurrent_speed%2Ccurrent_direction")
  })
})

describe("datasetUrl", () => {
  it("Can create a valid URL", () => {
    const server = "http://www.neracoos.org/erddap"
    const dataset = "N01_aanderaa_all"
    const variables = ["current_speed", "current_direction"]
    const constraints = {
      "time>=": "2018-12-15T00:00:00Z",
    }

    const result = tabledapUrl(server, dataset, variables, constraints)

    expect(result).toEqual(
      "http://www.neracoos.org/erddap/tabledap/N01_aanderaa_all.json?time%2Ccurrent_speed%2Ccurrent_direction&time%3E%3D%222018-12-15T00%3A00%3A00Z%22",
    )
  })
})

describe("resultToTimeSeries", () => {
  it("Will turn a JSON ERDDAP response into an array of DataTimeSeries", () => {
    const variables = ["current_speed", "current_direction"]
    const result = resultToTimeseries(erddapJson, variables)

    expect(result.length).toBe(variables.length)
    expect(result[0].name).toBe(variables[0])
    expect(result[0].timeSeries.length).toBe(3)
  })
})

// describe('fetchDataset', () => {
//     it('Can fetch a dataset', async () => {
//         const server = 'http://www.neracoos.org/erddap'
//         const dataset = 'N01_aanderaa_all'
//         const variables = ['current_speed', 'current_direction']
//         const constraints = {
//             'time>=': '2018-12-15T00:00:00Z'
//         }

//         const result = await fetchDataset(server, dataset, variables, constraints)

//         const ts = resultToTimeseries(result, variables)

//         expect(ts.length).toBe(variables.length)
//     })
// })

const erddapJson = {
  table: {
    columnNames: ["time", "current_speed", "current_direction", "temperature", "depth"],
    columnTypes: ["String", "float", "float", "float", "float"],
    columnUnits: ["UTC", "cm/s", "angular_degrees", "celsius", "m"],
    rows: [
      ["2018-12-15T00:00:00Z", 26.1037, 8.9216, 6.22366, 2.0],
      ["2018-12-15T01:00:00Z", 12.3186, 45.488, 6.4490333, 2.0],
      ["2018-12-15T02:00:00Z", 9.0923, 64.4744, 6.4490333, 2.0],
    ],
  },
}
