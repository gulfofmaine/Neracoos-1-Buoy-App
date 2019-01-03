import * as actions from "./actions"
import * as actionTypes from "./actionTypes"
import { erddapReducer } from "./reducer"
import { ERDDAPStoreState } from "./types"

const resultOf = (reduceActions, initialState) => reduceActions.reduce(erddapReducer, initialState)

describe("ERDDAP reducer", () => {
  it("Creates a valid initial state with no nodes loaded", () => {
    const initialState = undefined
    const action = {}

    const finalState = resultOf([action], initialState)

    expect(finalState.platforms).toBeDefined()
    expect(finalState.loading).toBe(false)
  })

  it("Sets the status as loading, when platform loading starts", () => {
    const initialState = undefined
    const action = {
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    }

    const finalState = resultOf([action], initialState)

    expect(finalState.loading).toBe(true)
  })

  it("Will add an error message when a loading error occurs", () => {
    const initialState = undefined
    const loadingAction = {
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    }
    const message = "Uh, oh"
    const action = {
      message,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    }

    const finalState = resultOf([loadingAction, action], initialState)

    expect(finalState.platforms).toBeDefined()
    expect(finalState.errorMessage).toEqual(message)
    expect(finalState.loading).toBe(false)
  })

  it("Will add platforms to the store", () => {
    const initialState = undefined
    const geojson = require("./test-platforms.json")
    const loadingAction = {
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    }
    const action = {
      geojson,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    }

    const finalState = resultOf([loadingAction, action], initialState)

    expect(finalState.platforms.length).toBe(geojson.features.length)
    expect(finalState.loading).toBe(false)
  })

  it("Can set datasets as loading", () => {
    const initialN01 = initialDatasetState.platforms.filter(platfrom => platfrom.id === "N01")[0]
    const initialA01 = initialDatasetState.platforms.filter(platform => platform.id === "A01")[0]

    expect(initialA01.properties.readings.map(reading => reading.loading)).toContain(false)
    expect(initialA01.properties.readings.map(reading => reading.loading)).not.toContain(true)
    expect(initialN01.properties.readings.map(reading => reading.loading)).toContain(false)
    expect(initialN01.properties.readings.map(reading => reading.loading)).not.toContain(true)

    const loadingAction: actions.ErddapDatasetLoadStarted = {
      datasets: [dataset],
      platformId: "N01",
      type: actionTypes.ERDDAP_DATASET_LOAD_STARTED
    }

    const finalState = resultOf([loadingAction], initialDatasetState)

    const n01 = finalState.platforms.filter(platform => platform.id === "N01")[0]
    const a01 = finalState.platforms.filter(platform => platform.id === "A01")[0]

    expect(n01.properties.readings.map(reading => reading.loading)).toContain(true)
    expect(n01.properties.readings.map(reading => reading.loading)).toContain(false)
    expect(a01.properties.readings.every(reading => reading.loading === false)).toBe(true)

    expect(n01.properties.readings.every(reading => reading.error === "")).toBe(true)
    expect(a01.properties.readings.every(reading => reading.error === "")).toBe(true)
  })

  it("Can set datasets as having an error", () => {
    const initialState = {
      ...initialDatasetState,
      platforms: [
        ...initialDatasetState.platforms.filter(platform => platform.id !== "N01"),
        ...initialDatasetState.platforms
          .filter(platform => platform.id === "N01")
          .map(platform => ({
            ...platform,
            properties: {
              ...platform.properties,
              readings: [
                ...platform.properties.readings.filter(reading => reading.variable !== dataset.variable),
                loadingDataset
              ]
            }
          }))
      ]
    }

    const initialN01 = initialState.platforms.filter(platfrom => platfrom.id === "N01")[0]
    const initialA01 = initialState.platforms.filter(platform => platform.id === "A01")[0]

    expect(initialA01.properties.readings.every(reading => reading.loading === false)).toBe(true)
    expect(initialN01.properties.readings.map(reading => reading.loading)).toContain(false)
    expect(initialN01.properties.readings.map(reading => reading.loading)).toContain(true)

    const action: actions.ErddapDatasetLoadError = {
      datasets: [loadingDataset],
      message: "It exploded",
      platformId: "N01",
      type: actionTypes.ERDDAP_DATASET_LOAD_ERROR
    }

    const finalState = resultOf([action], initialState)

    const n01 = finalState.platforms.filter(platform => platform.id === "N01")[0]
    const a01 = finalState.platforms.filter(platform => platform.id === "A01")[0]

    expect(n01.properties.readings.map(reading => reading.error)).toContain("")
    expect(n01.properties.readings.map(reading => reading.error)).toContain(action.message)
    expect(n01.properties.readings.every(reading => reading.loading === false)).toBe(true)

    expect(a01.properties.readings.every(reading => reading.error === "")).toBe(true)
    expect(a01.properties.readings.every(reading => reading.loading === false)).toBe(true)
  })

  it("Can load new timeseries for datasets", () => {
    const initialState = {
      ...initialDatasetState,
      platforms: [
        ...initialDatasetState.platforms.filter(platform => platform.id !== "N01"),
        ...initialDatasetState.platforms
          .filter(platform => platform.id === "N01")
          .map(platform => ({
            ...platform,
            properties: {
              ...platform.properties,
              readings: [
                ...platform.properties.readings.filter(reading => reading.variable !== dataset.variable),
                loadingDataset
              ]
            }
          }))
      ]
    }

    const initialN01 = initialState.platforms.filter(platfrom => platfrom.id === "N01")[0]
    const initialA01 = initialState.platforms.filter(platform => platform.id === "A01")[0]

    expect(initialA01.properties.readings.every(reading => reading.loading === false)).toBe(true)
    expect(initialN01.properties.readings.map(reading => reading.loading)).toContain(false)
    expect(initialN01.properties.readings.map(reading => reading.loading)).toContain(true)

    const action: actions.ErddapDatasetLoadSuccess = {
      data: {
        table: {
          columnNames: ["time", "salinity"],
          columnTypes: ["String", "float"],
          columnUnits: ["UTC", ""],
          rows: [["2018-12-15T00:00:00Z", 26.1037], ["2018-12-15T01:00:00Z", 12.3186], ["2018-12-15T02:00:00Z", 9.0923]]
        }
      },
      datasets: [dataset],
      platformId: "N01",
      type: actionTypes.ERDDAP_DATASET_LOAD_SUCCESS
    }

    const finalState = resultOf([action], initialState)

    const n01 = finalState.platforms.filter(platform => platform.id === "N01")[0]
    const a01 = finalState.platforms.filter(platform => platform.id === "A01")[0]

    expect(n01.properties.readings.every(reading => reading.loading === false)).toBe(true)
    expect(a01.properties.readings.every(reading => reading.loading === false)).toBe(true)

    const salinity = n01.properties.readings.filter(readings => readings.variable === dataset.variable)[0]

    expect(salinity.readings.length).toBe(3)
    expect(salinity.readings.every(reading => reading.time instanceof Date)).toBe(true)
  })
})

const dataset = {
  constraints: {
    "depth=": 1.0
  },
  data_type: {
    long_name: "Salinity",
    short_name: "S",
    standard_name: "sea_water_salinity",
    units: "psu"
  },
  dataset: "N01_sbe37_all",
  depth: null,
  error: "",
  loading: false,
  readings: [],
  server: "http://www.neracoos.org/erddap",
  start_time: "2004-06-03T21:00:00Z",
  time: null,
  value: null,
  variable: "salinity"
}

const loadingDataset = {
  ...dataset,
  loading: true
}

const initialDatasetState: ERDDAPStoreState = {
  loading: false,
  platforms: [
    {
      geometry: {
        coordinates: [0, 0],
        type: "Point"
      },
      id: "N01",
      properties: {
        attribution: [],
        mooring_site_desc: "Northeast Channel",
        readings: [
          dataset,
          {
            constraints: {
              "depth=": 1.0
            },
            data_type: {
              long_name: "Water Temperature",
              short_name: "WT",
              standard_name: "sea_water_temperature",

              units: "celsius"
            },
            dataset: "N01_sbe37_all",
            depth: null,
            error: "",
            loading: false,
            readings: [],
            server: "http://www.neracoos.org/erddap",
            start_time: "2004-06-03T21:00:00Z",
            time: null,
            value: null,
            variable: "temperature"
          }
        ]
      },
      type: "Feature"
    },
    {
      geometry: {
        coordinates: [-70.566186, 42.523156],
        type: "Point"
      },
      id: "A01",
      properties: {
        attribution: [],

        mooring_site_desc: "Massachusetts Bay",
        ndbc_site_id: "44029",
        readings: [
          {
            constraints: {
              "station=": "44029"
            },
            data_type: {
              long_name: "Wind Speed, Meridional",
              short_name: null,
              standard_name: "northward_wind",

              units: "m s-1"
            },
            dataset: "cwwcNDBCMet",
            depth: null,
            error: "",
            loading: false,
            readings: [],
            server: "https://coastwatch.pfeg.noaa.gov/erddap",
            start_time: "1970-02-26T20:00:00Z",
            time: "2018-12-31T11:00:00Z",
            value: 0.0,
            variable: "wspv"
          }
        ],
        uscg_light_letter: "A",
        uscg_light_num: "367",
        watch_circle_radius: null
      },
      type: "Feature"
    }
  ]
}
