import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import { PlatformDataset } from "./types";

describe("actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should create an action with an error message", () => {
    const message = "An error occured";
    const expectedAction = {
      message,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    };
    expect(actions.erddapPlatformLoadError(message)).toEqual(expectedAction);
  });

  it("should create an action to show that we are loading", () => {
    const expectedAction = {
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    };

    expect(actions.erddapPlatformLoadStarted()).toEqual(expectedAction);
  });

  it("should create an action with the loaded geojson", () => {
    const geojson = require("./test-platforms.json");
    const expectedAction = {
      geojson,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    };
    expect(actions.erddapPlatformLoadSuccess(geojson)).toEqual(expectedAction);
  });

  it("should load platform data from erddap service", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const geojson = require("./test-platforms.json");

    fetch.mockResponseOnce(JSON.stringify(geojson));

    await actions.erddapPlatformLoad()(dispatch, getState);

    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    });
    expect(dispatch).toBeCalledWith({
      geojson,
      type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      process.env.REACT_APP_ERDDAP_SERVICE
    );
  });

  it("should dispatch an error message if it cannot contact erddap service", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    fetch.mockReject(new Error("404"));

    await actions.erddapPlatformLoad()(dispatch, getState);

    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch).toBeCalledWith({
      type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
    });
    expect(dispatch).toBeCalledWith({
      message: "Unable to load platform data",
      type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
    });

    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      process.env.REACT_APP_ERDDAP_SERVICE
    );
  });
});

describe("groupByServerDatasetConstraints", () => {
  it("Will create the correct groups", () => {
    const groups = actions.groupByServerDatasetConstraint(
      testDatasets as PlatformDataset[]
    );

    expect(groups.length).toEqual(5);
    expect(groups[0].datasets.length).toEqual(2);
    expect(groups[4].datasets.length).toEqual(1);
  });
});

// tslint:disable:object-literal-sort-keys
const testDatasets = [
  {
    value: 1030.0,
    time: "2018-12-26T21:00:00Z",
    depth: null,
    data_type: {
      standard_name: "air_pressure_at_sea_level",
      short_name: null,
      long_name: "Air Pressure",
      units: "hPa"
    },
    server: "https://coastwatch.pfeg.noaa.gov/erddap",
    variable: "bar",
    constraints: {
      "station=": "NAXR1"
    },
    dataset: "cwwcNDBCMet",
    start_time: "1970-02-26T20:00:00Z"
  },
  {
    value: 3.4000000953674316,
    time: "2018-12-26T21:00:00Z",
    depth: null,
    data_type: {
      standard_name: "air_temperature",
      short_name: "AT",
      long_name: "Air Temperature",
      units: "celsius"
    },
    server: "https://coastwatch.pfeg.noaa.gov/erddap",
    variable: "atmp",
    constraints: {
      "station=": "NAXR1"
    },
    dataset: "cwwcNDBCMet",
    start_time: "1970-02-26T20:00:00Z"
  },
  {
    value: 1.0,
    time: "2018-12-26T22:00:00Z",
    depth: null,
    data_type: {
      standard_name: "eastward_wind",
      short_name: null,
      long_name: "Wind Speed, Zonal",
      units: "m s-1"
    },
    server: "https://coastwatch.pfeg.noaa.gov/erddap",
    variable: "wspu",
    constraints: {
      "station=": "44022"
    },
    dataset: "cwwcNDBCMet",
    start_time: "1970-02-26T20:00:00Z"
  },
  {
    value: -1.7000000476837158,
    time: "2018-12-26T22:00:00Z",
    depth: null,
    data_type: {
      standard_name: "northward_wind",
      short_name: null,
      long_name: "Wind Speed, Meridional",
      units: "m s-1"
    },
    server: "https://coastwatch.pfeg.noaa.gov/erddap",
    variable: "wspv",
    constraints: {
      "station=": "44022"
    },
    dataset: "cwwcNDBCMet",
    start_time: "1970-02-26T20:00:00Z"
  },
  {
    value: 0.8399999737739563,
    time: "2018-12-26T21:59:59Z",
    depth: null,
    data_type: {
      standard_name: "air_temperature",
      short_name: "AT",
      long_name: "Air Temperature",
      units: "celsius"
    },
    server: "http://www.neracoos.org/erddap",
    variable: "air_temperature",
    constraints: {},
    dataset: "N01_met_all",
    start_time: "2004-06-03T21:00:00Z"
  },
  {
    value: 2968.13525390625,
    time: "2018-12-26T21:59:59Z",
    depth: null,
    data_type: {
      standard_name: "visibility_in_air",
      short_name: "VIS",
      long_name: "Visibility",
      units: "meters"
    },
    server: "http://www.neracoos.org/erddap",
    variable: "visibility",
    constraints: {},
    dataset: "N01_met_all",
    start_time: "2004-06-03T21:00:00Z"
  },
  {
    value: 17.01140022277832,
    time: "2018-12-26T21:59:59Z",
    depth: null,
    data_type: {
      standard_name: "sea_water_velocity",
      short_name: "CSPD",
      long_name: "Current Speed",
      units: "cm/s"
    },
    server: "http://www.neracoos.org/erddap",
    variable: "current_speed",
    constraints: {},
    dataset: "N01_aanderaa_all",
    start_time: "2004-06-03T21:00:00Z"
  },
  {
    value: null,
    time: null,
    depth: null,
    data_type: {
      standard_name: "sea_water_density",
      short_name: "SIGMAT",
      long_name: "Sigma-T",
      units: "kg/m^3"
    },
    server: "http://www.neracoos.org/erddap",
    variable: "sigma_t",
    constraints: {
      "depth=": 1.0
    },
    dataset: "N01_sbe37_all",
    start_time: "2004-06-03T21:00:00Z"
  }
];
