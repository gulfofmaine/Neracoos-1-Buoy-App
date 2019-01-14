import * as actionTypes from "../actionTypes"
import { ForecastSource, PlatformFeatureWithDatasets } from "../types"
import * as actions from "./forecast"

describe("Forecast actions", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("Should create an action to start loading", () => {
    const expectedAction = {
      forecast,
      platformId,
      type: actionTypes.ERDDAP_FORECAST_LOAD_STARTED
    }

    expect(actions.forecastLoadStarted(platformId, forecast)).toEqual(expectedAction)
  })

  it("Should create an action with an error message", () => {
    const message = "Things have gone horribly"
    const expectedAction = {
      forecast,
      message,
      platformId,
      type: actionTypes.ERDDAP_FORECAST_LOAD_ERROR
    }

    expect(actions.forecastLoadError(platformId, forecast, message)).toEqual(expectedAction)
  })

  it("Should create an action with readings", () => {
    const expectedAction = {
      forecast,
      platformId,
      readings,
      type: actionTypes.ERDDAP_FORECAST_LOAD_SUCCESS
    }

    expect(actions.forecastLoadSuccess(platformId, forecast, readings)).toEqual(expectedAction)
  })

  it("Should load forecast data from erddap service", async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()

    fetch.mockResponseOnce(JSON.stringify(response))

    await actions.forecastLoad(platform, forecast)(dispatch, getState)

    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch).toBeCalledWith({
      forecast,
      platformId,
      type: actionTypes.ERDDAP_FORECAST_LOAD_STARTED
    })
    expect(dispatch).toBeCalledWith({
      forecast,
      platformId,
      readings,
      type: actionTypes.ERDDAP_FORECAST_LOAD_SUCCESS
    })
  })
})

const platformId = "N01"
const platform: PlatformFeatureWithDatasets = {
  geometry: {
    coordinates: [-65.0, 42.34],
    type: "Point"
  },
  id: platformId,
  properties: {
    alerts: [],
    attribution: [],
    forecasts: [],
    mooring_site_desc: "Northeast Channel",
    readings: []
  },
  type: "Feature"
}

const forecast: ForecastSource = {
  description: "Wave Direction from the Bedford Institute Wave Model",
  forecast_type: "Wave Direction",
  name: "Bedford Institute Wave Model - Direction",
  point_forecast: "/api/forecasts/bedford_ww3_wave_direction/",
  slug: "bedford_ww3_wave_direction",
  source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html"
}

const readings = [
  {
    time: "2019-01-14T00:00:00Z",
    value: 346.5862084564193
  },
  {
    time: "2019-01-14T03:00:00Z",
    value: 56.48942151481367
  },
  {
    time: "2019-01-14T06:00:00Z",
    value: 356.55931033474735
  }
]

// tslint:disable:object-literal-sort-keys
const response = {
  slug: "gfs_wind_direction",
  forecast_type: "Wind Direction",
  name: "NOAA/NCEP Global Forecast System - Wind Direction",
  description: "Wind Direction from NOAA/NCEP's Global Forecast System",
  source_url: "https://coastwatch.pfeg.noaa.gov/erddap/griddap/NCEP_Global_Best.html",
  point_forecast: "/api/forecasts/gfs_wind_direction/",
  latitude: 43.629503,
  longitude: -70.064824,
  time_series: readings
}
