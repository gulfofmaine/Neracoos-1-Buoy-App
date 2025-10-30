import { describe, it, expect } from "vitest"
import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { PlatformFeatureWithDatasets } from "../../../types"
import { ErddapObservedDropdown } from "./index"

describe("ErddapObservedDropdown", () => {
  it("Renders a menu for a platform", async () => {
    render(<ErddapObservedDropdown platform={platform} />)

    expect(screen.getByRole("menu")).toHaveTextContent("Observations")

    const user = userEvent.setup()
    await user.click(screen.getByText("Observations"))

    const items = screen.getAllByRole("menuitem")

    expect(items.length).toEqual(12)
    expect(items[1]).toHaveTextContent("Air Pressure")
  })
})

// tslint:disable:object-literal-sort-keys
const platform: PlatformFeatureWithDatasets = {
  geometry: {
    type: "Point",
    coordinates: [-73.73, 40.88],
  },
  id: "EXRX",
  type: "Feature",
  properties: {
    id: 86,
    readings: [
      {
        value: -1.899999976158142,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        data_type: {
          standard_name: "northward_wind",
          short_name: null,
          long_name: "Wind Speed, Meridional",
          units: "m s-1",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wspv",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        loading: false,
        error: "",
        readings: [],
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: -0.699999988079071,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "eastward_wind",
          short_name: null,
          long_name: "Wind Speed, Zonal",
          units: "m s-1",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wspu",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "surface_altitude",
          short_name: null,
          long_name: "Water Level",
          units: "m",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "tide",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "tendency_of_air_pressure",
          short_name: null,
          long_name: "Pressure Tendency",
          units: "hPa",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "ptdy",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "visibility_in_air",
          short_name: "VIS",
          long_name: "Visibility",
          units: "meters",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "vis",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "dew_point_temperature",
          short_name: "DEWP",
          long_name: "Dewpoint Temperature",
          units: "celsius",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "dewp",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: 4.699999809265137,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "sea_surface_temperature",
          short_name: null,
          long_name: "SST",
          units: "degree_C",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wtmp",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "air_temperature",
          short_name: "AT",
          long_name: "Air Temperature",
          units: "celsius",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "atmp",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "air_pressure_at_sea_level",
          short_name: null,
          long_name: "Air Pressure",
          units: "hPa",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "bar",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "sea_surface_wave_to_direction",
          short_name: null,
          long_name: "Wave Direction",
          units: "degrees_true",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "mwd",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "sea_surface_swell_wave_period",
          short_name: null,
          long_name: "Wave Period, Dominant",
          units: "s",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "apd",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "sea_surface_swell_wave_period",
          short_name: null,
          long_name: "Wave Period, Dominant",
          units: "s",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "dpd",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: null,
        time: null,
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "sea_surface_wave_significant_height",
          short_name: null,
          long_name: "Wave Height",
          units: "m",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wvht",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: 3.0,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "wind_speed_of_gust",
          short_name: "WGST",
          long_name: "Wind Gust",
          units: "m/s",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "gst",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: 2.0,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "wind_speed",
          short_name: "WSPD",
          long_name: "Wind Speed",
          units: "m/s",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wspd",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
      {
        value: 20.0,
        time: "2018-12-20T14:00:00Z",
        depth: null,
        loading: false,
        error: "",
        readings: [],
        data_type: {
          standard_name: "wind_from_direction",
          short_name: "WD",
          long_name: "Wind Direction",
          units: "degrees",
        },
        server: "https://coastwatch.pfeg.noaa.gov/erddap",
        variable: "wd",
        constraints: {
          "station=": "44022",
        },
        dataset: "cwwcNDBCMet",
        start_time: "1970-02-26T20:00:00Z",
      },
    ],
    attribution: [],
    mooring_site_desc: "Execution Rocks Long Island Sound",
    active: true,
    ndbc_site_id: "44022",
    uscg_light_letter: null,
    uscg_light_num: null,
    watch_circle_radius: null,
    programs: [],
  },
}
