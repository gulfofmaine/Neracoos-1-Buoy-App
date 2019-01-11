import * as actionTypes from "../actionTypes"
import * as actions from "./forecast_metadata"
import { ForecastSource } from "../types"

describe("Forecast metadata actions", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("Should create an action to show that we are loading", () => {
    const expectedAction = {
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED
    }

    expect(actions.erddapForecastMetadataLoadStarted()).toEqual(expectedAction)
  })

  it("should set an error message is there is an error loading", () => {
    const message = "An error occured"
    const expectedAction = {
      message,
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_ERROR
    }

    expect(actions.erddapForecastMetadataLoadError(message)).toEqual(expectedAction)
  })

  it("Should be able to create an action with loaded forecasts", () => {
    const expectedAction = {
      forecasts,
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_SUCCESS
    }

    expect(actions.erddapForecastMetadataLoadSuccess(forecasts)).toEqual(expectedAction)
  })

  it("Can load forecasts from erddap service", async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()

    fetch.mockResponseOnce(JSON.stringify(forecasts))

    await actions.forecastMetadataLoad()(dispatch, getState)

    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED
    })
    expect(dispatch).toBeCalledWith({
      forecasts,
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_SUCCESS
    })

    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(process.env.REACT_APP_ERDDAP_SERVICE + "/api/forecasts/")
  })

  it("Should dispatch an error message if it cannot load forecasts from the ERDDAP service", async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()

    fetch.mockReject(new Error("404"))

    await actions.forecastMetadataLoad()(dispatch, getState)

    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_STARTED
    })
    expect(dispatch).toBeCalledWith({
      message: "Unable to load forecast metadata",
      type: actionTypes.ERDDAP_FORECAST_METADATA_LOAD_ERROR
    })

    expect(fetch.mock.calls.length).toBe(1)
    expect(fetch.mock.calls[0][0]).toEqual(process.env.REACT_APP_ERDDAP_SERVICE + "/api/forecasts/")
  })
})

const forecasts: ForecastSource[] = [
  {
    description: "Wave Direction from the Bedford Institute Wave Model",
    forecast_type: "Wave Direction",
    name: "Bedford Institute Wave Model - Direction",
    point_forecast: "/api/forecasts/bedford_ww3_wave_direction/",
    slug: "bedford_ww3_wave_direction",
    source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html"
  },
  {
    description: "Wave Height from the Bedford Institute Wave Model",
    forecast_type: "Wave Height",
    name: "Bedford Institute Wave Model - Height",
    point_forecast: "/api/forecasts/bedford_ww3_wave_height/",
    slug: "bedford_ww3_wave_height",
    source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html"
  }
]
