import * as actionTypes from "../actionTypes"
import * as actions from "./platform"

describe("Platform actions", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("should create an action with an error message", () => {
    const message = "An error occured"
    const expectedAction = {
      message,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    }
    expect(actions.erddapPlatformLoadError(message)).toEqual(expectedAction)
  })

  it("should create an action to show that we are loading", () => {
    const expectedAction = {
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    }

    expect(actions.erddapPlatformLoadStarted()).toEqual(expectedAction)
  })

  it("should create an action with the loaded geojson", () => {
    const geojson = require("../test-platforms.json")
    const expectedAction = {
      geojson,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    }
    expect(actions.erddapPlatformLoadSuccess(geojson)).toEqual(expectedAction)
  })

  it("should load platform data from erddap service", async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()
    const geojson = require("../test-platforms.json")

    fetch.mockResponseOnce(JSON.stringify(geojson))

    await actions.erddapPlatformLoad()(dispatch, getState)

    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    })
    expect(dispatch).toBeCalledWith({
      geojson,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    })

    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(process.env.REACT_APP_ERDDAP_SERVICE + "/api/platforms/")
  })

  it("should dispatch an error message if it cannot contact erddap service", async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()

    fetch.mockReject(new Error("404"))

    await actions.erddapPlatformLoad()(dispatch, getState)

    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    })
    expect(dispatch).toBeCalledWith({
      message: "Unable to load platform data",
      type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    })

    expect(fetch.mock.calls.length).toBe(1)
    expect(fetch.mock.calls[0][0]).toEqual(process.env.REACT_APP_ERDDAP_SERVICE + "/api/platforms/")
  })
})
