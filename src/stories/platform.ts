// @ts-nocheck
import { PlatformFeatureWithDatasets, PlatformFeature } from "Features/ERDDAP/types"
import { forecastToStandardNames } from "Features/ERDDAP/Platform/Forecasts/Page"

const platform_base: PlatformFeature = {
  id: "M01",
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-67.8798, 43.4907],
  },
  properties: {
    id: 98,
    readings: [
      {
        value: 2.2260000705719,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "max_wave_height",
          short_name: "MWH",
          long_name: "Maximum Wave Height",
          units: "m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "maximum_wave_height_3",
        constraints: {
          "maximum_wave_height_3_qc=": 0,
        },
        dataset: "M01_waves_mstrain_all",
        start_time: "2019-05-29T19:19:19Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 4.55,
            time: "2020-02-11T20:00:00.000Z",
          },
          {
            reading: 4.2,
            time: "2020-02-11T21:00:00.000Z",
          },
          {
            reading: 4.82,
            time: "2020-02-11T22:00:00.000Z",
          },
          {
            reading: 4.47,
            time: "2020-02-11T23:00:00.000Z",
          },
          {
            reading: 4.54,
            time: "2020-02-12T00:00:00.000Z",
          },
          {
            reading: 4.75,
            time: "2020-02-12T01:00:00.000Z",
          },
          {
            reading: 4.28,
            time: "2020-02-12T02:00:00.000Z",
          },
          {
            reading: 4.11,
            time: "2020-02-12T03:00:00.000Z",
          },
          {
            reading: 4.08,
            time: "2020-02-12T04:00:00.000Z",
          },
          {
            reading: 3.91,
            time: "2020-02-12T05:00:00.000Z",
          },
          {
            reading: 3.7,
            time: "2020-02-12T06:00:00.000Z",
          },
          {
            reading: 3.28,
            time: "2020-02-12T07:00:00.000Z",
          },
          {
            reading: 3.47,
            time: "2020-02-12T08:00:00.000Z",
          },
          {
            reading: 3.56,
            time: "2020-02-12T09:00:00.000Z",
          },
          {
            reading: 3.87,
            time: "2020-02-12T10:00:00.000Z",
          },
          {
            reading: 3.93,
            time: "2020-02-12T11:00:00.000Z",
          },
          {
            reading: 3.8,
            time: "2020-02-12T12:00:00.000Z",
          },
          {
            reading: 3.87,
            time: "2020-02-12T13:00:00.000Z",
          },
          {
            reading: 3.14,
            time: "2020-02-12T14:00:00.000Z",
          },
          {
            reading: 3.07,
            time: "2020-02-12T15:00:00.000Z",
          },
          {
            reading: 2.94,
            time: "2020-02-12T16:00:00.000Z",
          },
          {
            reading: 2.58,
            time: "2020-02-12T17:00:00.000Z",
          },
          {
            reading: 2.48,
            time: "2020-02-12T18:00:00.000Z",
          },
        ],
      },
      {
        value: 26.1579704284668,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 100,
        data_type: {
          standard_name: "sea_water_density",
          short_name: "SIGMAT",
          long_name: "Sigma-T",
          units: "kg/m^3",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "sigma_t",
        constraints: {
          "depth=": 100,
          "sigma_t_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 33.9589462280273,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 100,
        data_type: {
          standard_name: "sea_water_salinity",
          short_name: "S",
          long_name: "Salinity",
          units: "psu",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "salinity",
        constraints: {
          "depth=": 100,
          "salinity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 9.89000034332275,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 100,
        data_type: {
          standard_name: "sea_water_temperature",
          short_name: "WT",
          long_name: "Water Temperature",
          units: "celsius",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "temperature",
        constraints: {
          "depth=": 100,
          "temperature_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 25.5368404388428,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 50,
        data_type: {
          standard_name: "sea_water_density",
          short_name: "SIGMAT",
          long_name: "Sigma-T",
          units: "kg/m^3",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "sigma_t",
        constraints: {
          "depth=": 50,
          "sigma_t_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 32.5026893615723,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 50,
        data_type: {
          standard_name: "sea_water_salinity",
          short_name: "S",
          long_name: "Salinity",
          units: "psu",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "salinity",
        constraints: {
          "depth=": 50,
          "salinity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 6.34700012207031,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 50,
        data_type: {
          standard_name: "sea_water_temperature",
          short_name: "WT",
          long_name: "Water Temperature",
          units: "celsius",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "temperature",
        constraints: {
          "depth=": 50,
          "temperature_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 25.2565860748291,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 1,
        data_type: {
          standard_name: "sea_water_density",
          short_name: "SIGMAT",
          long_name: "Sigma-T",
          units: "kg/m^3",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "sigma_t",
        constraints: {
          "depth=": 1,
          "sigma_t_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 31.966287612915,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 1,
        data_type: {
          standard_name: "sea_water_salinity",
          short_name: "S",
          long_name: "Salinity",
          units: "psu",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "salinity",
        constraints: {
          "depth=": 1,
          "salinity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 30.9360008239746,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 1,
        data_type: {
          standard_name: "sea_water_electrical_conductivity",
          short_name: "COND",
          long_name: "Conductivity",
          units: "siemens/m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "conductivity",
        constraints: {
          "depth=": 1,
          "conductivity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 32.4659996032715,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 50,
        data_type: {
          standard_name: "sea_water_electrical_conductivity",
          short_name: "COND",
          long_name: "Conductivity",
          units: "siemens/m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "conductivity",
        constraints: {
          "depth=": 50,
          "conductivity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 37.0120010375977,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 100,
        data_type: {
          standard_name: "sea_water_electrical_conductivity",
          short_name: "COND",
          long_name: "Conductivity",
          units: "siemens/m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "conductivity",
        constraints: {
          "depth=": 100,
          "conductivity_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 290.853210449219,
        time: "2019-12-30T17:00:00Z",
        depth: 0,
        data_type: {
          standard_name: "direction_of_sea_water_velocity",
          short_name: "CDIR",
          long_name: "Current Direction",
          units: "angular_degrees",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "current_direction",
        constraints: {
          "direction_of_sea_water_velocity_qc=": 0,
        },
        dataset: "M01_aanderaa_all",
        start_time: "2018-07-09T15:00:00Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 1.39300000667572,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "significant_wave_height",
          short_name: "SWH",
          long_name: "Significant Wave Height",
          units: "m",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "significant_wave_height_3",
        constraints: {
          "significant_wave_height_3_qc=": 0,
        },
        dataset: "M01_waves_mstrain_all",
        start_time: "2019-05-29T19:18:44Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        highlighted: "Before",
        readings: [
          {
            reading: 2.85,
            time: "2020-02-11T20:00:00.000Z",
          },
          {
            reading: 2.63,
            time: "2020-02-11T21:00:00.000Z",
          },
          {
            reading: 3.02,
            time: "2020-02-11T22:00:00.000Z",
          },
          {
            reading: 2.8,
            time: "2020-02-11T23:00:00.000Z",
          },
          {
            reading: 2.84,
            time: "2020-02-12T00:00:00.000Z",
          },
          {
            reading: 2.97,
            time: "2020-02-12T01:00:00.000Z",
          },
          {
            reading: 2.68,
            time: "2020-02-12T02:00:00.000Z",
          },
          {
            reading: 2.57,
            time: "2020-02-12T03:00:00.000Z",
          },
          {
            reading: 2.55,
            time: "2020-02-12T04:00:00.000Z",
          },
          {
            reading: 2.45,
            time: "2020-02-12T05:00:00.000Z",
          },
          {
            reading: 2.31,
            time: "2020-02-12T06:00:00.000Z",
          },
          {
            reading: 2.06,
            time: "2020-02-12T07:00:00.000Z",
          },
          {
            reading: 2.17,
            time: "2020-02-12T08:00:00.000Z",
          },
          {
            reading: 2.23,
            time: "2020-02-12T09:00:00.000Z",
          },
          {
            reading: 2.42,
            time: "2020-02-12T10:00:00.000Z",
          },
          {
            reading: 2.46,
            time: "2020-02-12T11:00:00.000Z",
          },
          {
            reading: 2.38,
            time: "2020-02-12T12:00:00.000Z",
          },
          {
            reading: 2.42,
            time: "2020-02-12T13:00:00.000Z",
          },
          {
            reading: 1.96,
            time: "2020-02-12T14:00:00.000Z",
          },
          {
            reading: 1.92,
            time: "2020-02-12T15:00:00.000Z",
          },
          {
            reading: 1.84,
            time: "2020-02-12T16:00:00.000Z",
          },
          {
            reading: 1.62,
            time: "2020-02-12T17:00:00.000Z",
          },
          {
            reading: 1.56,
            time: "2020-02-12T18:00:00.000Z",
          },
        ],
      },
      {
        value: 18.4778995513916,
        time: "2019-12-30T17:00:00Z",
        depth: 0,
        data_type: {
          standard_name: "sea_water_velocity",
          short_name: "CSPD",
          long_name: "Current Speed",
          units: "cm/s",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "current_speed",
        constraints: {
          "sea_water_velocity_qc=": 0,
        },
        dataset: "M01_aanderaa_all",
        start_time: "2018-07-09T15:00:00Z",
        error: "",
        loadStartTimes: [],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 5.13100004196167,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 1,
        data_type: {
          standard_name: "sea_water_temperature",
          short_name: "WT",
          long_name: "Water Temperature",
          units: "celsius",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "temperature",
        constraints: {
          "depth=": 1,
          "temperature_qc=": 0,
        },
        dataset: "M01_sbe37_all",
        start_time: "2001-07-16T15:35:01Z",
        error: "",
        loadStartTimes: [new Date("2020-01-28T14:18:01.570Z")],
        loading: false,
        highlighted: "After",
        readings: [
          {
            reading: 5.92,
            time: new Date("2020-01-28T14:30:00.000Z"),
          },
          {
            reading: 6.027,
            time: new Date("2020-01-28T15:00:00.000Z"),
          },
          {
            reading: 6.024,
            time: new Date("2020-01-28T15:30:00.000Z"),
          },
          {
            reading: 6.016,
            time: new Date("2020-01-28T16:00:00.000Z"),
          },
          {
            reading: 6.008,
            time: new Date("2020-01-28T16:30:00.000Z"),
          },
          {
            reading: 6.021,
            time: new Date("2020-01-28T17:00:00.000Z"),
          },
          {
            reading: 6.016,
            time: new Date("2020-01-28T17:30:00.000Z"),
          },
          {
            reading: 6.007,
            time: new Date("2020-01-28T18:00:00.000Z"),
          },
          {
            reading: 6.01,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 6.003,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 6.002,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 6.004,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 5.948,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 5.909,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 5.89,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 5.894,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 5.891,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 5.886,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 5.884,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 5.884,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 5.879,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 5.857,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 5.868,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 5.866,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 5.865,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 5.851,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 5.86,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 5.864,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 5.857,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 5.864,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 5.865,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 5.901,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 5.903,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 5.893,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 5.897,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 5.909,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 5.928,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 5.937,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 5.939,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 5.866,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 5.85,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 5.786,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 5.767,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 5.768,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 5.77,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 5.765,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 5.79,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 5.829,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 5.823,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 5.834,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 5.826,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 5.824,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 5.813,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 5.799,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 5.784,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 5.78,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 5.773,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 5.776,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 5.803,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 5.821,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 5.785,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 5.689,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 5.637,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 5.611,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 5.65,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 5.641,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 5.637,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 5.636,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 5.642,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 5.645,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 5.653,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 5.615,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 5.683,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 5.745,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 5.74,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 5.734,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 5.724,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 5.736,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 5.726,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 5.731,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 5.729,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 5.728,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 5.712,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 5.707,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 5.716,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 5.733,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 5.73,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 5.649,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 5.66,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 5.657,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 5.632,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 5.661,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 5.636,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 5.722,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 5.707,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 5.724,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 5.737,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 5.743,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 5.775,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 5.78,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 5.863,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 5.773,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 5.714,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 5.879,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 5.83,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 5.809,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 5.804,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 5.835,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 5.687,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 5.683,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 5.731,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 5.792,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 5.818,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 5.657,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 5.686,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 5.698,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 5.703,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 5.584,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 5.671,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 5.655,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 5.718,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 5.686,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 5.697,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 5.752,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 5.749,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 5.7,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 5.758,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 5.727,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 5.796,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 5.786,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 5.806,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 5.798,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 5.715,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 5.639,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 5.639,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 5.659,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 5.674,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 5.656,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 5.648,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 5.642,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 5.648,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 5.644,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 5.641,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 5.625,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 5.616,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 5.605,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 5.621,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 5.651,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 5.773,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 5.745,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 5.735,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 5.71,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 5.692,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 5.661,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 5.635,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 5.639,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 5.636,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 5.646,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 5.643,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 5.609,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 5.61,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 5.592,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 5.58,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 5.577,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 5.573,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 5.567,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 5.574,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 5.576,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 5.566,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 5.557,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 5.564,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 5.566,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 5.558,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 5.553,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 5.558,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 5.563,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 5.54,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 5.51,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 5.469,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 5.408,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 5.371,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 5.341,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 5.33,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 5.319,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 5.268,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 5.233,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 5.281,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 5.182,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 5.202,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 5.284,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 5.256,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 5.153,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 5.067,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 4.988,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 4.961,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 5.033,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 5.056,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 5.089,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 5.048,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 5.024,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 4.959,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 4.906,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 4.91,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 4.9,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 4.895,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 4.908,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 4.874,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 4.864,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 4.848,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 4.869,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 4.834,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 4.846,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 4.837,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 4.859,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 4.895,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 4.88,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 4.906,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 4.959,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 5.009,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 5.062,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 5.077,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 5.141,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 5.333,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 5.417,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 5.476,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 5.516,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 5.563,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 5.579,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 5.607,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 5.586,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 5.542,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 5.498,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 5.553,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 5.455,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 5.427,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 5.416,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 5.397,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 5.373,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 5.387,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 5.429,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 5.44,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 5.446,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 5.447,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 5.528,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 5.592,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 5.597,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 5.608,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 5.646,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 5.665,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 5.68,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 5.681,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 5.691,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 5.669,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 5.663,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 5.661,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 5.672,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 5.66,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 5.658,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 5.652,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 5.655,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 5.66,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 5.662,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 5.647,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 5.646,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 5.645,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 5.642,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 5.628,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 5.65,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 5.658,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 5.704,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 5.706,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 5.681,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 5.516,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 5.412,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 5.373,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 5.389,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 5.401,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 5.461,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 5.481,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 5.553,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 5.49,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 5.493,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 5.512,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 5.477,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 5.49,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 5.521,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 5.569,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 5.565,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 5.593,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 5.609,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 5.623,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 5.632,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 5.624,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 5.592,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 5.572,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 5.536,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 5.51,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 5.516,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 5.519,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 5.523,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 5.537,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 5.54,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 5.52,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 5.479,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 5.459,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 5.415,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 5.409,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 5.411,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 5.409,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 5.422,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 5.427,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 5.428,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 5.431,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 5.426,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 5.403,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 5.346,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 5.295,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 5.285,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 5.203,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 5.12,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 5.05,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 5.009,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 4.985,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 5.004,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 5.016,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 5.032,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 5.051,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 5.101,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 5.122,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 5.131,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 6.25,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "dominant_wave_period",
          short_name: "DWP",
          long_name: "Dominant Wave Period",
          units: "seconds",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "dominant_wave_period_3",
        constraints: {
          "dominant_wave_period_3_qc=": 0,
        },
        dataset: "M01_waves_mstrain_all",
        start_time: "2019-05-29T19:19:40Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "After",
        readings: [
          {
            reading: 5,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 7.14,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 7.14,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 6.667,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 3.571,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 3.704,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 4.348,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 3.704,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 3.448,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 3.846,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 3.704,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 3.571,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 3.125,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 2.857,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 3.03,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 3.03,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 3.571,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 4,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 3.571,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 4.762,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 4.762,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 4.762,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 3.448,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 4.348,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 4.167,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 4.167,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 4.167,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 4,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 4.348,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 8.33,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 10,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 4.545,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 10,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 8.33,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 10,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 7.69,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 12.9,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 4.762,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 5,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 5.263,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 12.9,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 5.556,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 12.9,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 5.882,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 6.25,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 3.81900000572205,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "air_temperature",
          short_name: "AT",
          long_name: "Air Temperature",
          units: "celsius",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "air_temperature",
        constraints: {
          "air_temperature_qc=": 0,
        },
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "Before",
        readings: [
          {
            reading: 0.696,
            time: "2020-01-28T14:20:00.000Z",
          },
          {
            reading: 0.462,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 0.614,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 0.462,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 0.481,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 0.447,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 0.401,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 0.354,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 0.347,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 0.399,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 0.539,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 0.602,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 0.525,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 0.4,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 0.608,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 0.487,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 0.459,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 0.327,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 0.156,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 0.022,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 0.12,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 0.035,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: -0.239,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: -0.323,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: -0.23,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: -0.192,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: -0.117,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 0.084,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 0.007,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: -0.127,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: -0.133,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: -0.05,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: -0.199,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: -0.111,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: -0.059,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: -0.099,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: -0.054,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: -0.056,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: -0.095,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: -0.06,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: -0.119,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: -0.18,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: -0.163,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: -0.214,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: -0.154,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: -0.308,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: -0.416,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: -0.299,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: -0.375,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: -0.374,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: -0.355,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: -0.285,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: -0.274,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: -0.38,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: -0.366,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: -0.25,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: -0.369,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: -0.346,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: -0.22,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: -0.28,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: -0.493,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: -0.521,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: -0.565,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: -0.77,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: -0.817,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: -0.936,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: -1.007,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: -0.991,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: -1.065,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: -1.223,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: -1.24,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: -1.314,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: -1.143,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: -1.372,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: -1.319,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: -1.606,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: -1.485,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: -1.658,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: -1.631,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: -1.633,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: -1.753,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: -1.662,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: -1.89,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: -1.954,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: -1.677,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: -1.912,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: -1.934,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: -2.038,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: -2.186,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: -2.002,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: -2.155,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: -2.067,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: -2.116,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: -2.068,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: -1.907,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: -1.916,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: -1.853,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: -1.717,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: -1.782,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: -1.843,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: -1.707,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: -1.646,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: -1.683,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: -1.756,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: -1.69,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: -1.765,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: -1.591,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: -1.338,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: -1.4,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: -1.299,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: -1.288,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: -1.273,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: -1.325,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: -1.285,
            time: "2020-01-29T09:10:00.000Z",
          },
          {
            reading: -1.381,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: -1.403,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: -1.504,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: -1.46,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: -1.661,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: -1.617,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: -1.618,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: -1.54,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: -1.626,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: -1.634,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: -1.943,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: -1.98,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: -1.968,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: -1.988,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: -2.014,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: -2.001,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: -1.672,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: -1.773,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: -1.952,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: -2.082,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: -2.167,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: -2.283,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: -2.355,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: -2.175,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: -2.185,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: -2.09,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: -2.082,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: -1.968,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: -1.906,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: -1.967,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: -2.036,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: -2.039,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: -1.989,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: -2.001,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: -2.08,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: -2.144,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: -2.014,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: -1.896,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: -1.934,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: -1.736,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: -1.897,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: -1.545,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: -1.665,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: -1.7,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: -1.572,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: -1.524,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: -1.521,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: -1.378,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: -1.326,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: -1.329,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: -1.388,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: -1.44,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: -1.349,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: -1.137,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: -1.159,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: -1.177,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: -1.349,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: -1.056,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: -1.02,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: -1.123,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: -0.996,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: -0.742,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: -0.687,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: -0.545,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: -0.62,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: -0.426,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: -0.497,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: -0.342,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: -0.231,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: -0.255,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: -0.11,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: -0.218,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: -0.229,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: -0.115,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: -0.321,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: -0.449,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: -0.42,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: -0.57,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: -0.569,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: -0.674,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: -0.902,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: -0.909,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: -0.981,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: -1.013,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: -1.019,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: -1.12,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: -1.176,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: -1.339,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: -1.399,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: -1.562,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: -1.596,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: -1.564,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: -1.569,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: -1.817,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: -1.868,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: -1.905,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: -2.128,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: -2.177,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: -2.081,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: -2.258,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: -2.493,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: -2.441,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: -2.797,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: -2.78,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: -3.083,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: -3.277,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: -3.332,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: -3.487,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: -3.758,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: -3.898,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: -4.081,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: -4.047,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: -4.064,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: -4.154,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: -4.119,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: -4.299,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: -4.569,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: -4.651,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: -4.598,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: -4.493,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: -4.633,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: -4.584,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: -4.655,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: -4.824,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: -4.843,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: -4.88,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: -4.787,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: -5.002,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: -5.009,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: -4.964,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: -5.162,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: -4.968,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: -5.005,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: -5.38,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: -5.377,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: -5.369,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: -5.358,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: -5.517,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: -5.387,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: -5.47,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: -5.305,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: -5.378,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: -5.237,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: -5.199,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: -5.258,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: -5.253,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: -5.366,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: -5.295,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: -4.966,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: -5.163,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: -5.212,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: -5.391,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: -5.067,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: -5.271,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: -5.226,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: -5.087,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: -5.144,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: -5.279,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: -5.087,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: -4.979,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: -5.147,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: -5.284,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: -4.966,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: -4.853,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: -4.919,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: -4.844,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: -4.745,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: -4.834,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: -4.89,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: -4.551,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: -4.48,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: -4.268,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: -4.343,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: -4.206,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: -4.087,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: -4.159,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: -4.216,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: -4.074,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: -3.846,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: -3.897,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: -3.86,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: -3.681,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: -3.505,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: -3.472,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: -3.362,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: -3.702,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: -3.635,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: -3.479,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: -3.412,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: -3.384,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: -3.241,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: -3.227,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: -3.193,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: -3.213,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: -3.054,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: -3.04,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: -2.787,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: -2.866,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: -2.718,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: -2.922,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: -2.798,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: -2.884,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: -2.743,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: -2.686,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: -2.694,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: -2.577,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: -2.53,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: -2.528,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: -2.468,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: -2.387,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: -2.237,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: -2.051,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: -2.106,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: -1.88,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: -1.838,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: -1.884,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: -1.902,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: -1.83,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: -1.876,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: -1.622,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: -1.651,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: -1.259,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: -1.084,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: -0.965,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: -1.012,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: -0.923,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: -0.88,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: -0.683,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: -0.608,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: -0.601,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: -0.418,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: -0.297,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: -0.189,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: -0.06,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: -0.113,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 0.067,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 0.107,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 0.077,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 0.075,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 0.151,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 0.195,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 0.028,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 0.12,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 0.245,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 0.113,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 0.238,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 0.304,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 0.225,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 0.251,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 0.26,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 0.205,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 0.218,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 0.279,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 0.359,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 0.283,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 0.324,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 0.337,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 0.386,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 0.34,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 0.386,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 0.406,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 0.437,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 0.502,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 0.584,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 0.653,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 0.557,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 0.618,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 0.736,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 0.733,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 0.847,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 0.968,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 0.978,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 1.149,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 1.198,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 1.201,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 1.229,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 1.262,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 1.355,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 1.385,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 1.404,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 1.47,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 1.528,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 1.578,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 1.606,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 1.646,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 1.7,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 1.8,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 1.76,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 1.86,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 1.916,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 1.942,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 1.99,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 1.942,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 2.116,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 2.271,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 2.358,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 2.367,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 2.482,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 2.559,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 2.618,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 2.678,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 2.711,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 2.675,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 2.704,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 2.685,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 2.707,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 2.667,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 2.707,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 2.872,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 2.806,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 2.913,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 2.868,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 2.886,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 3.038,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 3.167,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 3.022,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 3.135,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 3.32,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 3.326,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 3.403,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 3.241,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 3.278,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 3.303,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 3.305,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 3.348,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 3.409,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 3.484,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 3.485,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 3.534,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 3.416,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 3.535,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 3.675,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 3.67,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 3.666,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 3.546,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 3.723,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 3.641,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 3.605,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 3.66,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 3.636,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 3.691,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 3.695,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 3.778,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 3.679,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 3.727,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 3.741,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 3.696,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 3.758,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 3.686,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 3.687,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 3.637,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 3.602,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 3.533,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 3.578,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 3.47,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 3.445,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 3.36,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 3.322,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 3.326,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 3.335,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 3.273,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 3.259,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 3.292,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 3.23,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 3.266,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 3.285,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 3.338,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 3.456,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 3.471,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 3.446,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 3.495,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 3.516,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 3.555,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 3.631,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 3.607,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 3.678,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 3.721,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 3.73,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 3.779,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 3.784,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 3.852,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 3.887,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 3.954,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 3.936,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 4.033,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 4.034,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 4.056,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 4.058,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 4.136,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 4.2,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 4.2,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 4.26,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 4.304,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 4.335,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 4.38,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 4.422,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 4.461,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 4.485,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 4.524,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 4.544,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 4.616,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 4.648,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 4.611,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 4.622,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 4.645,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 4.636,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 4.635,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 4.679,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 4.599,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 4.591,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 4.584,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 4.594,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 4.527,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 4.522,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 4.512,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 4.523,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 4.494,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 4.537,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 4.567,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 4.636,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 4.692,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 4.723,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 4.764,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 4.803,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 4.645,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 4.1,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 3.803,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 3.65,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 3.496,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 3.325,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 3.31,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 3.225,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 3.065,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 3.075,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 3.121,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 3.122,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 3.14,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 3.14,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 3.03,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 3.145,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 3.242,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 3.335,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 3.377,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 3.398,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 3.349,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 3.395,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 3.361,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 3.334,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 3.248,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 3.194,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 3.123,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 3.118,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 3.057,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 3.066,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 3.004,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 3.049,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 3.01,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 2.977,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 2.933,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 2.905,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 2.863,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 2.839,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 2.836,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 2.848,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 2.886,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 2.91,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 2.917,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 3,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 3.045,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 2.978,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 2.868,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 2.876,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 2.846,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 2.846,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 2.795,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 2.697,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 2.664,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 2.673,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 2.631,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 2.679,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 2.692,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 2.677,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 2.735,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 2.542,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 2.517,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 2.514,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 2.472,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 2.454,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 2.371,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 2.437,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 2.245,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 2.316,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 2.296,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 2.342,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 2.435,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 2.411,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 2.438,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 2.441,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 2.507,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 2.474,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 2.488,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 2.57,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 2.616,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 2.61,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 2.538,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 2.692,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 2.632,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 2.555,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 2.667,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 2.577,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 2.598,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 2.538,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 2.563,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 2.565,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 2.564,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 2.579,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 2.504,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 2.523,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 2.541,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 2.627,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 2.589,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 2.606,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 2.629,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 2.671,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 2.855,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 2.875,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 2.849,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 2.943,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 2.937,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 2.921,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 3.053,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 3.152,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 3.14,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 3.173,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 3.199,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 3.293,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 3.27,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 3.272,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 3.366,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 3.367,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 3.382,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 3.386,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 3.478,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 3.603,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 3.54,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 3.561,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 3.608,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 3.623,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 3.699,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 3.633,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 3.647,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 3.666,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 3.62,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 3.526,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 3.515,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 3.531,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 3.597,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 3.599,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 3.634,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 3.762,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 3.747,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 3.712,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 3.712,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 3.574,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 3.539,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 3.374,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 3.098,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 3.029,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 3.011,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 2.938,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 2.854,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 2.798,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 2.753,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 2.703,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 2.79,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 2.725,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 2.788,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 2.82,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 2.854,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 2.736,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 2.791,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 2.812,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 2.726,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 2.688,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 2.645,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 2.595,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 2.513,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 2.529,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 2.521,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 2.567,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 2.528,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 2.507,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 2.468,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 2.572,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 2.457,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 2.402,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 2.343,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 2.267,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 2.337,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 2.283,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 2.229,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 2.172,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 2.06,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 2.016,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 2.032,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 1.974,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 1.818,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 1.765,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 1.793,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 1.751,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 1.814,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 1.74,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 1.8,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 1.925,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 1.926,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 1.865,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 1.836,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 1.824,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 1.893,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 1.891,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 1.854,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 1.967,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 1.952,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 1.98,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 1.904,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 1.955,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 1.868,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 1.904,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 1.94,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 2.054,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 2.1,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 1.916,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 1.989,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 2,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 2.042,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 1.942,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 1.942,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 1.847,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 2.026,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 1.93,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 1.918,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 1.968,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 1.892,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 1.882,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 1.771,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 1.693,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 1.728,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 1.648,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 1.721,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 1.643,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 1.746,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 1.705,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 1.669,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 1.719,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 1.744,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 1.617,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 1.812,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 1.606,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 1.751,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 1.674,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 1.869,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 1.877,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 1.909,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 1.882,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 1.94,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 1.933,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 1.914,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 1.947,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 1.935,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 1.935,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 1.93,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 1.917,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 1.859,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 1.607,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 1.45,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 1.264,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 1.135,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 1.002,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 0.755,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 0.596,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 0.58,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 0.505,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 0.663,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 0.837,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 0.887,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 0.754,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 0.771,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 0.798,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 0.868,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 0.76,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 0.707,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 0.686,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 0.824,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 0.802,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 1.03,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 1.075,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 1.105,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 1.244,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 1.216,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 1.132,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 1.055,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 1.08,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 1.082,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 1.061,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 1.199,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 0.998,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 0.891,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 0.962,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 0.975,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 0.914,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 0.918,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 0.779,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 0.873,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 0.839,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 0.851,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 0.92,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 0.788,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 0.917,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 0.902,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 0.931,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 0.908,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 0.896,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 0.972,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 0.924,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 0.942,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 1.041,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 1.086,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 1.088,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 1.199,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 1.221,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 1.254,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 1.293,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 1.382,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 1.337,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 1.501,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 1.58,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 1.576,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 1.765,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 1.951,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 2.137,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 2.151,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 2.169,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 2.219,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 2.27,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 2.437,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 2.546,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 2.572,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 2.648,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 2.638,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 2.793,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 2.944,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 2.926,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 2.89,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 2.896,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 3.008,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 3.004,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 2.976,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 3.017,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 3.044,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 2.89,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 2.904,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 2.888,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 2.913,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 2.84,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 2.904,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 2.905,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 2.92,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 2.945,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 3.094,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 3.134,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 3.283,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 3.271,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 3.237,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 3.323,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 3.671,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 3.682,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 3.824,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 3.976,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 4.219,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 4.294,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 4.299,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 4.343,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 4.443,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 4.487,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 4.589,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 4.548,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 4.522,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 4.635,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 4.667,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 4.761,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 4.736,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 4.74,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 4.726,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 4.699,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 4.7,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 4.874,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 5.018,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 5.152,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 5.193,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 5.099,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 5.099,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 5.094,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 5.125,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 5.127,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 5.153,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 5.039,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 5.048,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 5.095,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 5.112,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 5.137,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 5.122,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 5.084,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 5.209,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 5.322,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 5.342,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 5.421,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 5.868,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 5.931,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 5.906,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 5.803,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 5.826,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 5.819,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 5.796,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 5.755,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 5.706,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 5.67,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 5.637,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 5.632,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 5.641,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 5.596,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 5.564,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 5.564,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 5.547,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 5.434,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 5.417,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 5.361,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 5.328,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 5.343,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 5.362,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 5.346,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 5.335,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 5.352,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 5.383,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 5.341,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 5.334,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 5.321,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 5.432,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 5.455,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 5.433,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 5.394,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 5.385,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 5.368,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 5.316,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 5.336,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 5.293,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 5.281,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 5.247,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 5.152,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 5.086,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 5.016,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 4.943,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 4.886,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 4.867,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 4.811,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 4.727,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 4.643,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 4.576,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 4.513,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 4.451,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 4.26,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 4.218,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 4.168,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 4.088,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 4.047,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 4.008,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 3.951,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 3.917,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 3.9,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 3.841,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 3.828,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 3.821,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 3.823,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 3.773,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 3.783,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 3.84,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 3.819,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 2977.74658203125,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "visibility_in_air",
          short_name: "VIS",
          long_name: "Visibility",
          units: "meters",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "visibility",
        constraints: {
          "visibility_qc=": 0,
        },
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 2977.7466,
            time: "2020-01-28T14:20:00.000Z",
          },
          {
            reading: 2863.6125,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 2930.8916,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 2956.722,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 2963.9304,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 2957.9233,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 2970.538,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 2941.1035,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 2971.7395,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 2974.1423,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 2960.3262,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 2959.7256,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 2948.9128,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: 2918.2769,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 2610.1147,
            time: "2020-01-29T09:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 2951.3157,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 2888.8423,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: 2972.3403,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: 2974.7432,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 2926.6868,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: 2954.319,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: 2971.7395,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: 2974.7432,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: 2958.5242,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: 2956.1213,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 2972.3403,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: 2974.7432,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 2933.8953,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: 2939.3015,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 2924.284,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: 2969.3367,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: 2895.45,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 2947.7114,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: 2942.9058,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: 2936.8987,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 2923.0825,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: 2899.655,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: 2887.6409,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 2895.45,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: 2945.3086,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: 2918.2769,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 2948.9128,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: 2958.5242,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: 2949.5134,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 2956.722,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: 2973.5417,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: 2920.0789,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: 2867.2168,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 2968.736,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: 2969.3367,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: 2954.92,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: 2929.0896,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 2966.3333,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 2823.3652,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: 2964.5312,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: 2974.1423,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: 2964.5312,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: 2966.3333,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 2954.92,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 2978.948,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: 2890.6443,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 2966.3333,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: 2933.8953,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: 2923.0825,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 2953.1177,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: 2954.92,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: 2948.312,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 2974.1423,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: 2914.6726,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: 2952.517,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: 2924.8845,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: 2964.5312,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 2954.92,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: 2921.2803,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: 2858.807,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: 2971.139,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: 2899.655,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 2969.3367,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: 2908.6655,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: 2977.146,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 2915.2732,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: 2939.3015,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: 2921.2803,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 2971.7395,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: 2939.3015,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: 2950.7148,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 2930.291,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 2933.8953,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 2972.3403,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 2814.9556,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 2883.4358,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 2694.8142,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 2915.2732,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 2931.4924,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 2964.5312,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 2928.4888,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 2934.4958,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 2975.9446,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 2971.139,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 2944.7078,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 2929.0896,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 2935.6973,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 2886.4395,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 2973.5417,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 2944.1072,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 2958.5242,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 2899.655,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 2954.319,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 2948.312,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 2973.5417,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 2942.9058,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 2935.0967,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 2941.7043,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 2977.146,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 2906.8635,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 2813.1533,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 2703.825,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 2846.7927,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 2781.316,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 2890.6443,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 2759.6904,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 2898.4536,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 2819.1604,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 2950.7148,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 2966.3333,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 2873.8247,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 2855.8035,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 2678.5952,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 2785.5208,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 2868.4182,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 2811.952,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 2803.542,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 2905.662,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 2888.8423,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 2878.6301,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 2911.0684,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 2941.1035,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 2811.952,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 2944.7078,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 2747.6765,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 2953.7185,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 2964.5312,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 2963.3298,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 2893.047,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 2933.8953,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 2961.5276,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 2966.3333,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 2945.3086,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 2896.6514,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 2963.9304,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 2935.0967,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 2963.9304,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 2922.4817,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 2905.662,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 2929.6902,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 2959.1248,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 2974.7432,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 2901.457,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 2944.1072,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 2909.266,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 2965.1318,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 2971.139,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 2971.7395,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 2978.3474,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 2948.312,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 2972.3403,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 2929.6902,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 2822.1638,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 2742.8708,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 2808.3477,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 2893.047,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 2971.7395,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 2970.538,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 2841.9873,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 2666.581,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 2777.111,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 2843.7893,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 2824.5667,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 2824.5667,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 2905.0613,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 2600.5037,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 2891.8457,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 2947.7114,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 2685.2031,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 2958.5242,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 2961.5276,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 2911.0684,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 2963.3298,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 2952.517,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 2903.2593,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 2876.8281,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 2908.6655,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 2684.0017,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 2957.9233,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 2930.8916,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 2787.323,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 2782.5173,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 2729.6553,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 2965.1318,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 2882.8352,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 2951.3157,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 2780.1145,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 2963.3298,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 2977.7466,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 44.4599990844727,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "wind_from_direction",
          short_name: "WD",
          long_name: "Wind Direction",
          units: "degrees",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "wind_direction",
        constraints: {},
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 355.92,
            time: "2020-01-28T14:20:00.000Z",
          },
          {
            reading: 355.26,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 356.22,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 0.24,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 1.45,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 0.82,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 357.05,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 358.8,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 2.95,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 359.93,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 6.3,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 4.42,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 4.85,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 4.72,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 355.58,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 358.47,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 352.79,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 353.33,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 352.26,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 353.42,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 351.54,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 346.64,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: 352.24,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 353.87,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: 350.41,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: 353.38,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 349.99,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 349.51,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 348.852,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 359.69,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: 350.35,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: 350.89,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 358.17,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: 349.122,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: 352.31,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 354.85,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: 358.42,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: 351.78,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 349.46,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: 355.64,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: 352.9,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 1.29,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: 355.25,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: 350.03,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 355.46,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: 3.53,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 358.37,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: 5.65,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: 0.75,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 1.12,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: 358.9,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: 357.3,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 353.83,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: 1.35,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: 352.67,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 355.21,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: 351.75,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: 355.81,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 356.07,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: 351.58,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: 357.01,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 354.9,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: 3.52,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: 1.63,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 4.34,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: 359.19,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: 351.6,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 359.67,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: 0.78,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: 1.67,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 9.44,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: 7.36,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: 2.86,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 359.37,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: 355.19,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: 351.22,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 352.58,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: 3.59,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: 12.32,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 354.1,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: 359.18,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: 354.58,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 338.7,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: 350.71,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: 353.08,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 351.92,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: 358.24,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: 348.57,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 356.87,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: 348.539,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: 356.95,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 346.675,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: 338.7,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: 352.68,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 350.91,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: 347.151,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: 353.35,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 344.46,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: 345.387,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: 339.1,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 345.472,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: 347.67,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: 348.215,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 348.283,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: 356.12,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: 349.89,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 353.75,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: 356.74,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: 353.31,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 347.469,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: 345.278,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: 348.187,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 348.608,
            time: "2020-01-29T09:10:00.000Z",
          },
          {
            reading: 338.6,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: 334.5,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 335.6,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: 350.68,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: 348.282,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 350.94,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: 347.9,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: 349.151,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 351.71,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: 348.202,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: 346.844,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 350.58,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: 348.204,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: 354.63,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 355.04,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: 351.81,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: 354.74,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 347.883,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: 351.16,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: 352.25,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 349.77,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: 350.32,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: 351.07,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 351.4,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: 355.85,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: 350.46,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 351.95,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: 353.07,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: 352.95,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 350.33,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: 356.46,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: 353.81,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 354.62,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: 352.92,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: 354.51,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 352.52,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: 357.14,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: 347.373,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 353.6,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: 353.95,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: 348.692,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 350.5,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: 345.533,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: 345.234,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 346.868,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: 350.8,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: 348.972,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 351.62,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: 349.77,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: 349.9,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 345.998,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: 349.494,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: 346.72,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 349.71,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: 347.997,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: 339.6,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 344.434,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: 333.6,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: 332.7,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 334.4,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: 336.5,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: 333.8,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 339.2,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: 340.1,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: 341.3,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 336.5,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: 342.868,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: 339.3,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 337.9,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: 344.32,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: 336.9,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 341.2,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: 342,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: 347.196,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 342.1,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: 352.3,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: 354.18,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 350.13,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: 352.82,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: 0.01,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 354.36,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: 356.87,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: 346.013,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 352.27,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: 352.6,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: 347.062,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 358.91,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: 2.95,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 3.63,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: 358.68,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: 2.61,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 353.02,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: 347.688,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: 353.31,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 351.67,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: 350.97,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: 355.51,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 359.15,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: 0.24,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: 359.88,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 0.11,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: 358.27,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: 356.9,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 355.07,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: 357.73,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: 353.21,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 0,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: 1.88,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: 353.1,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 0.59,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: 357.03,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: 7.91,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 2.63,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: 7.08,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: 9.02,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 9.08,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: 2.39,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: 7.52,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 7.81,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: 1.26,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: 3.38,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 357.51,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: 7.62,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: 7.54,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 0.59,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: 357.69,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: 359.46,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 352.68,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: 356.57,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: 1,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 359.48,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: 358.88,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: 351.02,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 351.44,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: 346.996,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: 350.44,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 352.31,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: 0.99,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: 359.18,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 342.627,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: 348.137,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: 356.27,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 339.8,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: 340.4,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: 347.774,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 347.85,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: 342,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: 348.932,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 347.534,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: 351.55,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: 350.14,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 354.72,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: 349.183,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: 354.15,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 358.45,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: 0.15,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: 356.53,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 355.25,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: 3.79,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: 353.61,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 356.97,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: 358.3,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: 4.85,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: 8.16,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: 5.93,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 2.13,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: 7.05,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: 9.43,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 4.64,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: 6.52,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: 5.73,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 2.26,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: 1.88,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: 2.1,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 13.87,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: 8.92,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: 12.24,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 10.09,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: 2.98,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: 16.86,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 11.2,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: 17.77,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: 8.28,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 7.94,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: 7.01,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: 6.55,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 9.14,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: 6.4,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: 10.25,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 10.73,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: 2.76,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 5.06,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: 1.63,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: 352.42,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 355.63,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: 349.211,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: 345.69,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 349.3,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: 338.5,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: 346.007,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 334,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: 345.398,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: 336.8,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 332.6,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: 326.4,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: 315.4,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 328,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: 312.5,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: 312.9,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 317.1,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: 325.7,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: 322.1,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 316.1,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: 313.3,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: 312.2,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 319.8,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: 313.8,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: 308.6,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 318.1,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: 317.2,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: 307.6,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 306.6,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: 309,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: 313.8,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 316.2,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: 311,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: 312.9,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 311.3,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: 310.2,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: 322.7,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 321,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: 318.7,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 325.8,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 331.4,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 333.8,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 337.9,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 334.3,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 343.057,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 340.8,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 338.5,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 350.01,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 349.377,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 332.7,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 342.3,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 347.798,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 326.5,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 346.753,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 351.57,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 338.3,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 339.4,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 344.284,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 339.4,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 322.9,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 315,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 307.4,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 297.7,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 288.4,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 317.5,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 308,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 288,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 282.6,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 288.6,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 281.7,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 286.1,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 286.1,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 280.5,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 284.3,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 275.4,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 265.5,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 265.4,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 264.4,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 268.7,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 262.9,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 272.5,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 272.9,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 262.8,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 266.5,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 278.3,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 274.7,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 268.4,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 273.5,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 263.8,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 268.9,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 259.9,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 253.9,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 262.3,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 264.7,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 264.1,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 255.8,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 253.4,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 252.2,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 253.3,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 250.2,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 248.4,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 247,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 257.5,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 249.4,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 250.2,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 253.5,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 249,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 256.3,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 248.9,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 250.8,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 247.3,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 248,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 240.6,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 244.1,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 247.5,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 246.7,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 241.9,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 245.8,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 241.6,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 240.5,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 238.2,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 239.4,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 241.4,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 241.6,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 246.3,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 245.6,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 240.7,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 242.5,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 242.9,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 245.9,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 244.4,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 245.5,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 249,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 247,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 248.4,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 250.6,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 245.5,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 251.8,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 242.9,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 252.1,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 250.6,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 253,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 255.1,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 250.8,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 252.4,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 252.8,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 252.4,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 249.7,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 254.3,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 248.5,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 246.2,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 248.6,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 252.7,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 252.2,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 252.9,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 251.9,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 252.9,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 255.2,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 251.1,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 249.4,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 250.7,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 247.9,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 252.8,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 250,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 253.4,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 246.9,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 247.5,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 247.4,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 248.9,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 246.4,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 251.5,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 249.9,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 251.8,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 251.6,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 253.5,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 253.5,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 252.7,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 251.1,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 251.3,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 247.9,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 245.3,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 252.2,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 252,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 245.4,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 252.5,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 249.7,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 248.5,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 254.7,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 252.5,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 253.4,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 252.7,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 252.1,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 253.3,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 255.4,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 253.4,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 256.7,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 251.5,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 251.8,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 247.5,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 250.4,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 246.9,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 256.1,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 256.8,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 257,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 253,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 251.2,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 252.1,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 249.5,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 254.5,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 248.4,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 247.5,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 246.7,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 234.3,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 239,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 240.6,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 235.6,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 233.8,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 231,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 228.2,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 227.6,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 224.9,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 219.9,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 223.4,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 222.9,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 225.9,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 228.3,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 229,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 231.7,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 229.7,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 237.1,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 240.8,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 236.9,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 240.3,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 243.5,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 240.7,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 235.5,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 236.3,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 229,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 224.9,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 242,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 252,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 249.7,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 230.3,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 209.4,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 194,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 198.3,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 191.6,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 179,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 177,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 172.1,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 169.7,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 177.6,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 165.8,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 166.1,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 159,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 162.9,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 162.8,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 157.8,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 152.8,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 158.2,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 152.4,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 152,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 153.9,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 156.8,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 154.5,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 150.6,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 150.1,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 151.5,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 151,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 149.8,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 150.6,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 147.7,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 149.1,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 153.9,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 150.5,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 157.2,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 157.3,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 150,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 151.7,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 149.6,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 158.6,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 157.5,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 147.5,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 117.9,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 109.1,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 138.3,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 83,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 87.4,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 87,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 51.67,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 88,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 66.2,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 40.78,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 59.3,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 32.47,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 42.1,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 45.51,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 49.69,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 21.64,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 34.55,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 32.58,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 47.33,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 49.82,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 62,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 70.1,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 70.2,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 59.5,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 64,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 54.4,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 48.94,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 41.39,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 59.7,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 53.6,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 53.8,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 49.51,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 53.7,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 46.63,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 47.46,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 44.7,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 48.04,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 45.32,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 46.33,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 47.07,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 43.25,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 49.07,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 49.22,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 51.36,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 58,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 56.5,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 55.6,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 44.14,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 47,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 41.39,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 38.29,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 31.85,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 37.66,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 39.53,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 37.88,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 36.38,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 35.91,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 34.41,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 32.06,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 31.12,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 19.98,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 23.3,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 24.22,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 11.24,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 8.44,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 13.45,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 19.74,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 20.08,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 14.43,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 16.05,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 13.41,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 22.79,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 30.3,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 28.72,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 25.18,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 25.92,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 27.11,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 31.15,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 25.92,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 26.47,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 24.4,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 19.74,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 22.41,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 17.69,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 14.7,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 19.2,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 12.12,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 15.21,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 13.88,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 10.37,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 5.35,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 5.64,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 7.24,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 9.75,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 12.92,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 12.65,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 12.19,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 9.44,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 7.97,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 7.12,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 7.63,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 10.13,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 13.16,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 10.23,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 7.75,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 11.3,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 12.86,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 9.38,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 6.38,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 8.96,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 359.35,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 3.58,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 1.41,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 3.33,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 4.56,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 3.75,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 359.44,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 357.9,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 356.81,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 354.26,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 351.97,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 355.47,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 353.47,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 355.34,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 350.37,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 351.21,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 352.44,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 354.71,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 354.97,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 353.77,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 356.46,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 0.22,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 353.14,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 345.912,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 349.56,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 345.228,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 347.82,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 346.663,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 346.039,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 347.02,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 345.035,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 336.2,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 340.3,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 335.3,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 341.9,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 340.3,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 340.9,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 337.7,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 336,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 337,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 339.6,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 333.9,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 330.4,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 322.4,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 326.5,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 324.6,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 315.2,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 314.8,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 320.4,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 316.7,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 314.7,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 312.4,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 321.1,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 319.9,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 316.4,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 327.2,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 320.1,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 317.5,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 326.6,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 317.2,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 327.1,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 329.9,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 326.6,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 335.6,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 339.1,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 332.1,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 328.7,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 329.8,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 318.9,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 306.9,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 309.3,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 305.5,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 314.2,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 308.6,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 328.5,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 309.4,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 299.9,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 302.4,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 328.5,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 343.917,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 329.9,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 313.6,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 293,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 330,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 328,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 305.4,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 308.5,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 295.3,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 308.3,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 312.7,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 318.3,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 329.7,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 332.8,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 331.9,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 323.2,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 336.5,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 334.4,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 330.6,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 331.5,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 328.6,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 330.9,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 325.3,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 326,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 320.8,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 334.4,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 318.3,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 327.8,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 323.8,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 309.8,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 321.3,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 320.9,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 321.6,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 325.7,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 324.1,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 324.4,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 318.4,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 311.5,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 320.8,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 317.6,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 317.1,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 318,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 319.8,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 320.2,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 321.4,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 319.1,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 320.9,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 316.5,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 323.5,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 322.7,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 316,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 318.8,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 317.4,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 322.8,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 319.8,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 319.1,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 311.6,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 306.2,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 317.3,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 309.9,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 315.4,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 313.7,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 306.5,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 306.8,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 306.1,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 302.6,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 300,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 296.2,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 301.4,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 297.7,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 305.3,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 304.4,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 302.2,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 299.7,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 295.6,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 294.4,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 292.1,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 295,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 296.2,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 291.3,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 297.4,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 296.9,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 301.3,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 298.7,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 299.6,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 295.2,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 293.9,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 301.1,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 297.2,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 299.2,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 294.9,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 290.1,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 287,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 294,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 291.6,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 289.6,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 290.6,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 292.8,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 287.6,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 284.5,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 281.7,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 282.3,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 282.3,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 279.5,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 280.9,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 284,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 278.2,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 270.4,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 273.8,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 273.5,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 269.9,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 269.4,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 273.2,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 270.8,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 267.3,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 262.2,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 265.9,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 262.4,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 260,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 255.8,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 255.4,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 259.4,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 260.3,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 258.5,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 264,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 267.2,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 264.7,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 267,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 259.7,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 258.4,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 259.5,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 257.5,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 256.4,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 254.5,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 248.1,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 244.7,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 244.7,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 247.1,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 241,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 236.2,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 233.4,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 238.8,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 241.1,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 240.7,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 253.5,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 277.9,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 276.9,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 276.7,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 275,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 275.8,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 278,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 277.6,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 279.4,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 278.3,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 281.5,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 287.8,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 286.4,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 285.5,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 291.1,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 289.4,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 291.2,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 289.4,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 280.1,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 285.9,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 279.7,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 283.1,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 286.7,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 286.1,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 284.7,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 284.6,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 279,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 280.9,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 281.4,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 283.6,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 277.1,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 281.5,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 280.5,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 283.9,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 287.4,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 286.4,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 293.1,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 295.1,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 296.9,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 301.2,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 303.3,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 305.6,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 305.2,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 304.1,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 311.4,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 312,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 316.2,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 323.2,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 326.8,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 326.4,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 333.6,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 338.6,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 339.3,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 339.9,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 342.734,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 348.61,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 346.639,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 347.664,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 352.08,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 353.4,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 5.22,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 0.36,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 356.78,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 1.26,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 11.91,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 10.08,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 5.29,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 20.2,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 27.54,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 27.44,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 39.37,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 44.46,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 2.33999991416931,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "wind_speed",
          short_name: "WSPD",
          long_name: "Wind Speed",
          units: "m/s",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "wind_speed",
        constraints: {},
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 8.46,
            time: "2020-01-28T14:20:00.000Z",
          },
          {
            reading: 8.64,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 8.53,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 9.08,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 9.22,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 9.27,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 9.73,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 8.64,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 8.52,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 8.69,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 8.22,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 8.21,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 9.01,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 9.22,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 9.2,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 9.35,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 10.01,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 9.61,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 10.01,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 9.59,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: 9.59,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 9.48,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 9.62,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: 9.67,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: 9.54,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 8.8,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: 8.95,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: 9.46,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 9.4,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: 8.53,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: 8.49,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 8.76,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: 8.13,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: 8.28,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: 7.93,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 8.02,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 8.63,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: 7.98,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: 8.16,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 8.12,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: 8.37,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: 8.17,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: 8.22,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: 7.93,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 8.06,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: 8,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: 8.17,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 7.9,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: 8.42,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 8.36,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: 7.82,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: 8.07,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: 7.15,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 6.785,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: 6.694,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 6.129,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: 6.673,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: 6.574,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 5.795,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: 6.111,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: 5.166,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 6.669,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: 6.854,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: 6.722,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 6.064,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: 6.26,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: 7.11,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: 7.56,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 7.4,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: 7.99,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 7.59,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: 8.05,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: 7.51,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 7.5,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: 8.28,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: 9.03,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: 8.44,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 8.3,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: 8.77,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 8.95,
            time: "2020-01-29T09:10:00.000Z",
          },
          {
            reading: 8.4,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: 8.75,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 7.74,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 7.54,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: 7.99,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: 8.36,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: 8.05,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 8.22,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: 8.57,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: 8.59,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: 8.5,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 9.44,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: 9.36,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 9.5,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: 9.36,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 9.51,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: 9.94,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: 9.76,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: 9.27,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: 9.26,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: 9.54,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: 9.03,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: 9.55,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 9.94,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: 9.66,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: 9.59,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 9.79,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: 9.28,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: 9.18,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 9.38,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: 10.14,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: 10.57,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 10.48,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: 10.75,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 10.37,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: 10.24,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: 11.04,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 11.06,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 10.47,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: 9.24,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: 8.95,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 9.22,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: 9.46,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 10.12,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: 10.12,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: 9.99,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: 10.45,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 10.65,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: 10.06,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: 9.79,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 9.82,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: 9.39,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: 9.82,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: 9.89,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: 10.46,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 11.5,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: 10.95,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 11.42,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: 11.25,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: 10.92,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: 10.88,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 9.96,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: 10.16,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: 10.57,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: 11.72,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 11.33,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: 10.79,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: 11.18,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 10.88,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: 11.24,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: 11.08,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: 10.61,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 11.7,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: 10.88,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: 10.87,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 11.5,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: 11.75,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 11.81,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: 12.32,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: 12.38,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 12.64,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: 12.64,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: 12.43,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 12.06,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: 12.21,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: 12.04,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 12.26,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: 11.98,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: 12.5,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 12.23,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: 11.62,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 10.79,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: 10.73,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: 10.38,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 10.46,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: 10.32,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 9.78,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: 9.7,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: 8.87,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: 8.33,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 8.8,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: 8.67,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: 8.24,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 8.69,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: 8.13,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 7.97,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: 8.14,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 8.46,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: 8.24,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: 8.51,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 8.5,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: 9.08,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 8.99,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: 9.12,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: 9.78,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 10.57,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: 10.73,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: 10.26,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 10.28,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: 10.71,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: 10.62,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 10.75,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: 10.76,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 10.56,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: 10.92,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: 10.5,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 10.59,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: 10.83,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: 11.09,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 11.43,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: 10.99,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: 10.63,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: 11.13,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: 10.81,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 10.75,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: 10.37,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: 10.09,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 9.97,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: 9.98,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: 10.02,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 10.49,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: 10.51,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 9.79,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: 9.18,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: 9.76,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 9.63,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: 9.93,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 8.41,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: 8.37,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 7.47,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: 8.3,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: 8.1,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: 7.46,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 6.569,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: 6.642,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: 6.092,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 6.06,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: 6.545,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: 5.885,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 5.772,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: 5.193,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: 5.368,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 5.455,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: 5.417,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: 5.829,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 5.889,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: 5.787,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: 6.05,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 5.688,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: 5.674,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 5.508,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: 5.926,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: 6.107,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 5.516,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: 6.001,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: 6.097,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 5.776,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: 6.288,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: 6.266,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 6.232,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: 6.297,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: 6.902,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 6.901,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: 6.521,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: 6.575,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 6.88,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: 7,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: 6.271,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 6.313,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: 6.139,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: 6.695,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 6.596,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: 5.928,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 6.007,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 5.599,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 5.604,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 5.35,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 5.494,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 5.616,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 5.128,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 4.644,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 4.541,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 4.206,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 4.481,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 4.032,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 3.853,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 3.468,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 3.209,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 2.878,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 2.851,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 2.548,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 2.205,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 2.189,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 2.16,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 2.077,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 2.387,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 2.352,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 1.851,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 2.359,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 2.56,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 2.42,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 2.389,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 2.803,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 2.542,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 3.049,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 2.619,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 2.927,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 3.256,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 3.34,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 3.355,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 3.699,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 3.766,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 3.621,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 4.363,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 4.366,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 4.245,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 4.619,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 4.59,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 4.412,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 3.984,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 4.638,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 4.138,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 4.233,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 3.945,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 4.236,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 3.968,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 4.069,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 4.517,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 3.973,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 4.447,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 3.84,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 5.006,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 5.312,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 5.209,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 5.363,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 5.327,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 6.438,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 5.93,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 6.369,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 6.257,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 6.023,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 5.695,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 5.572,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 5.822,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 6.122,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 6.409,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 6.74,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 6.695,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 6.822,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 7.29,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 6.999,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 6.815,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 6.708,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 6.445,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 7.04,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 6.921,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 7.05,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 6.874,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 6.88,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 6.918,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 6.809,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 6.974,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 7.01,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 7.3,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 7.15,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 7.61,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 6.955,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 8.05,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 8.54,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 8.38,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 8.52,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 7.98,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 8.4,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 8.21,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 7.42,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 7.52,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 7.35,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 7.56,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 7.52,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 7.14,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 7.28,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 7.35,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 7.61,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 7.23,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 6.925,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 6.679,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 6.829,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 7.4,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 7.79,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 7.61,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 7.44,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 7.38,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 7.77,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 7.7,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 7.47,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 7.65,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 7.9,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 7.61,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 7.82,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 7.74,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 6.715,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 6.761,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 6.606,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 6.5,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 6.599,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 6.291,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 6.342,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 6.246,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 6.155,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 5.793,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 6.644,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 6.795,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 6.368,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 6.428,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 6.386,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 6.181,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 6.124,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 5.736,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 5.89,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 6.15,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 5.934,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 5.808,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 6.042,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 5.62,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 5.432,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 5.552,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 5.784,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 5.583,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 5.374,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 5.471,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 4.994,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 4.633,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 4.305,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 4.41,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 4.598,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 5.087,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 4.911,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 4.974,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 4.453,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 5.077,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 4.993,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 3.854,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 3.455,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 3.536,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 3.793,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 4.847,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 5.469,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 5.995,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 6.442,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 6.628,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 7.46,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 6.616,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 7.09,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 6.575,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 6.3,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 5.848,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 4.96,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 4.131,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 3.757,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 3.502,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 3.698,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 3.802,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 3.791,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 2.828,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 2.246,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 2.672,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 3.106,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 3.64,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 4.132,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 4.378,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 4.242,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 4.831,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 4.689,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 4.918,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 4.858,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 5.381,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 4.427,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 4.698,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 5.07,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 5.546,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 5.904,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 6.148,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 5.676,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 5.473,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 5.872,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 6.377,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 6.521,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 6.517,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 6.415,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 6.141,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 5.748,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 5.622,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 5.173,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 5.221,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 4.58,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 3.98,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 3.838,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 4.199,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 3.716,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 2.603,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 1.131,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 1.829,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 0.862,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 0.984,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 1.197,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 0.813,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 1.893,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 1.994,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 2.147,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 2.148,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 1.454,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 2.912,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 1.985,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 3.599,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 1.691,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 2.403,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 2.772,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 3.25,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 3.835,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 3.948,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 3.831,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 3.815,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 3.851,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 3.614,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 2.952,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 3.318,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 3.516,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 5.381,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 3.22,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 4.112,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 4.41,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 3.871,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 4.363,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 4.322,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 4.958,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 4.447,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 4.633,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 4.635,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 5.504,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 5.664,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 5.223,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 5.53,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 4.755,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 4.704,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 4.144,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 5.223,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 4.868,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 5.006,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 5.806,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 5.624,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 5.99,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 5.975,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 6.299,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 6.069,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 5.468,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 5.871,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 5.785,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 5.564,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 5.442,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 5.395,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 5.695,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 5.931,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 5.408,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 5.97,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 6.115,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 5.941,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 5.876,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 5.934,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 6.172,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 6.416,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 6.616,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 6.912,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 6.548,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 6.824,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 6.631,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 6.731,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 6.842,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 7.08,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 6.546,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 6.098,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 6.073,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 5.84,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 6.648,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 6.248,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 6.737,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 6.808,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 6.626,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 7.29,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 7.51,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 7.86,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 7.46,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 7.3,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 7.58,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 7.56,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 7.27,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 7.42,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 7.73,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 7.89,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 7.87,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 7.66,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 7.83,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 7.91,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 7.29,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 7.2,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 6.669,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 6.09,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 6.323,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 6.746,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 6.874,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 6.654,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 6.103,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 6.147,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 6.056,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 6.278,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 6.223,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 6.276,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 6.569,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 6.668,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 7.28,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 6.988,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 7.15,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 7.07,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 7.01,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 7.01,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 6.748,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 6.841,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 6.916,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 5.976,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 6.134,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 6.258,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 6.036,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 6.252,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 5.968,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 6.224,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 6.315,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 6.126,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 6.014,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 6.135,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 6.029,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 6.038,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 5.754,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 5.685,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 6.164,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 6.169,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 5.679,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 5.633,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 5.58,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 5.492,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 5.414,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 5.542,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 5.531,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 5.481,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 5.702,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 6.047,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 6.011,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 6.212,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 6.014,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 6.452,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 6.223,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 6.688,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 6.474,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 6.186,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 6.304,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 6.06,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 5.63,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 5.082,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 5.653,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 5.423,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 5.659,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 5.358,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 5.508,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 5.25,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 5.624,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 5.239,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 5.076,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 4.974,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 4.774,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 4.722,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 4.973,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 4.566,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 3.795,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 3.775,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 4.023,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 3.882,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 3.535,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 3.195,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 2.722,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 2.59,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 2.725,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 2.758,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 2.69,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 2.269,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 2.936,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 2.069,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 2.205,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 2.705,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 2.8,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 2.53,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 3.495,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 3.703,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 4.247,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 4.554,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 3.904,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 4.123,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 4.032,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 4.745,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 4.943,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 4.757,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 4.873,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 4.914,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 5.165,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 5.365,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 5.055,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 5.45,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 5.813,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 5.75,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 5.381,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 5.227,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 6.159,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 5.705,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 6.245,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 6.21,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 6.941,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 6.794,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 7.28,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 7.74,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 7.74,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 7.63,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 7.81,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 7.78,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 7.75,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 7.44,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 7.65,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 7.81,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 7.38,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 7.95,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 7.7,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 7.26,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 7.18,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 7.14,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 6.476,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 6.41,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 6.61,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 6.347,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 5.677,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 5.674,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 5.546,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 6.303,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 6.179,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 6.644,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 6.73,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 7.55,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 7.95,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 7.75,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 8.03,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 8.61,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 8.54,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 8.12,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 8.73,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 8.81,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 9.26,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 8.85,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 9.56,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 9.46,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 9.57,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 9.54,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 9.13,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 9.57,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 9.89,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 9.75,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 9.28,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 8.68,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 7.99,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 8.54,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 9.04,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 9.07,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 9.03,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 9.55,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 9.78,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 9.51,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 9.52,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 9.07,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 10.28,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 9.77,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 9.19,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 8.97,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 8.95,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 8.83,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 8.65,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 8.38,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 8.83,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 9.42,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 8.91,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 8.69,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 8.22,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 8.46,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 9.31,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 9.66,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 9.77,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 8.26,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 8.44,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 8.49,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 7.78,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 7.43,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 7.35,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 6.684,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 6.325,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 5.818,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 6.701,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 7.11,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 6.742,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 6.571,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 9.44,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 10.03,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 9.77,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 9.38,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 9.11,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 9.44,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 8.96,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 8.59,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 8.88,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 8.6,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 8.64,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 8.67,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 8.97,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 9.08,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 8.28,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 7.19,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 7.36,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 7.09,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 7.94,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 7.93,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 8.24,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 7.82,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 8.05,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 8.57,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 8.41,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 7.51,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 8.54,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 8.33,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 7.23,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 8.41,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 7.93,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 8.12,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 8.03,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 8.24,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 7.16,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 6.99,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 7.54,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 6.926,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 7.27,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 7.01,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 7.5,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 7.06,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 6.749,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 6.922,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 6.786,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 6.688,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 6.999,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 7.09,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 6.602,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 5.659,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 5.354,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 5.028,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 4.311,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 4.15,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 3.577,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 3.414,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 2.882,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 2.694,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 2.759,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 2.388,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 2.963,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 2.34,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 1012.89410400391,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "barometric_pressure",
          short_name: "BP",
          long_name: "Barometric Pressure",
          units: "millibars",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "barometric_pressure",
        constraints: {
          "barometric_pressure_qc=": 0,
        },
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 1004.6906,
            time: "2020-01-28T14:20:00.000Z",
          },
          {
            reading: 1004.6906,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 1004.7518,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 1004.7518,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 1004.7518,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 1004.8129,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 1004.8129,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 1004.8129,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 1004.7518,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 1004.7518,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 1004.6295,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 1004.56836,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 1004.5072,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 1004.5072,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 1004.5072,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 1004.3849,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 1004.3849,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 1004.3849,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: 1004.26263,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: 1004.26263,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 1004.5072,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 1004.56836,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: 1004.6906,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: 1004.8129,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 1004.93524,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 1005.36334,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: 1005.4245,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: 1005.48566,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 1005.6691,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: 1005.608,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: 1005.6691,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 1005.7915,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: 1005.975,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: 1006.03613,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 1006.1585,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: 1006.4032,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: 1006.5256,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 1006.64795,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: 1006.8315,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: 1006.95386,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 1007.1986,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: 1007.321,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: 1007.3822,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 1007.5046,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: 1007.5658,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: 1007.62695,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 1007.6882,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: 1007.87177,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: 1007.933,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 1007.933,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: 1007.9942,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: 1008.11664,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 1008.1778,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: 1008.30023,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: 1008.4839,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 1008.4839,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: 1008.6063,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: 1008.6063,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 1008.66754,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: 1008.72876,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: 1008.79,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 1008.72876,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: 1008.79,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: 1008.8512,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 1008.9124,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: 1008.97363,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: 1009.03485,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 1009.1573,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: 1009.2797,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: 1009.2185,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 1009.2797,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: 1009.341,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: 1009.4022,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: 1009.46344,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 1009.64716,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 1009.7084,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: 1009.7696,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: 1009.7696,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 1009.8921,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: 1009.8921,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: 1010.0758,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: 1010.0758,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: 1010.0758,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 1010.382,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: 1010.4433,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 1010.4433,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: 1010.5658,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: 1010.627,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 1010.6883,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: 1010.6883,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: 1010.7495,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 1010.8721,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: 1010.9333,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: 1011.11707,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 1011.2396,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: 1011.4234,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: 1011.6072,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 1011.66846,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: 1011.72974,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: 1011.791,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 1011.9136,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: 1012.0974,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: 1012.22,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 1012.4038,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: 1012.52637,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 1012.77155,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 1013.01666,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: 1013.078,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: 1013.20056,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 1013.20056,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: 1013.2619,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: 1013.20056,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 1013.2619,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: 1013.3232,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: 1013.3232,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 1013.2619,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: 1013.3232,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: 1013.2619,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 1013.078,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: 1013.01666,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: 1013.1393,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 1013.01666,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: 1012.9554,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: 1012.77155,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 1012.7102,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: 1012.58765,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 1012.58765,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: 1012.58765,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: 1012.58765,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: 1012.7102,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: 1012.77155,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 1012.77155,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: 1012.8328,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 1012.9554,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: 1013.078,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: 1013.1393,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 1013.2619,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: 1013.20056,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: 1013.38446,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 1013.38446,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: 1013.56836,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: 1013.7523,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 1013.8136,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: 1013.9362,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: 1013.99756,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 1014.05884,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: 1014.2428,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: 1014.42676,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 1014.6107,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: 1014.7947,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: 1014.9787,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 1015.1014,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: 1015.28534,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: 1015.46936,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 1015.6534,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: 1015.8374,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: 1015.8988,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 1016.0828,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: 1016.32825,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: 1016.5123,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 1016.57367,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: 1016.8191,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: 1016.8805,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 1017.1259,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: 1017.31006,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: 1017.37146,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 1017.4942,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: 1017.55554,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: 1017.61694,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 1017.8011,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: 1017.8625,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: 1017.9852,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 1018.10803,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: 1018.2922,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: 1018.415,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 1018.5378,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: 1018.5991,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: 1018.6605,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 1018.7219,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: 1018.8447,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: 1019.09033,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 1019.1518,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: 1019.336,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: 1019.4588,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 1019.4588,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: 1019.58167,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: 1019.70447,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 1019.70447,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: 1019.82733,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: 1019.88873,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 1019.95013,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: 1020.0116,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: 1020.0116,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 1020.13446,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: 1020.25726,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: 1020.3187,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 1020.3801,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: 1020.4416,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: 1020.503,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 1020.56445,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: 1020.7488,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: 1020.93304,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 1020.9945,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: 1021.1174,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: 1021.30176,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 1021.30176,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: 1021.4861,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: 1021.54755,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 1021.6705,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: 1021.8548,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: 1021.9777,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 1022.10065,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: 1022.10065,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: 1022.1621,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 1022.28503,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: 1022.3465,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: 1022.408,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 1022.4695,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: 1022.53094,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: 1022.53094,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 1022.53094,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: 1022.53094,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: 1022.5924,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 1022.6539,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: 1022.71533,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: 1022.8383,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 1022.77686,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: 1022.96124,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: 1023.2072,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 1023.2072,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: 1023.33014,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: 1023.4531,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 1023.63763,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: 1024.0066,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 1024.0681,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: 1024.191,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: 1024.4371,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 1024.7446,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: 1024.6216,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 1024.8062,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: 1024.9907,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: 1025.0522,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 1025.1138,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: 1025.0522,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: 1024.9907,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 1024.8062,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: 1024.9292,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: 1024.8677,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 1024.9907,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: 1025.1138,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: 1024.9292,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: 1024.4371,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 1024.8062,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: 1024.6216,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 1024.7446,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: 1024.5602,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 1024.4371,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 1024.3756,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: 1024.4371,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 1024.4987,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: 1024.4987,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: 1024.5602,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 1024.4987,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: 1024.6216,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: 1024.5602,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 1024.6216,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: 1024.7446,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: 1024.7446,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 1024.8062,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: 1024.8677,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: 1024.9292,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 1024.9907,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: 1025.1138,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: 1025.2983,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 1025.4214,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: 1025.4214,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: 1025.5444,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 1025.6675,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: 1025.606,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: 1025.6675,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 1025.7905,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: 1025.9137,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: 1025.9752,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 1025.9752,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: 1026.0983,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: 1026.0983,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 1026.8984,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: 1026.8984,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: 1026.8984,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 1026.8984,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: 1027.0215,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 1027.0215,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 1027.0215,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 1027.083,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 1027.1447,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 1027.083,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 1027.0215,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 1027.0215,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 1026.96,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 1026.8984,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 1026.8368,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 1026.3445,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 1026.2213,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 1026.3445,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 1026.3445,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 1026.3445,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 1026.4675,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 1026.7753,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 1026.7753,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 1026.7753,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 1026.6522,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 1026.7137,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 1026.5906,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 1026.529,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 1026.406,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 1026.2828,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 1026.2213,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 1026.1598,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 1026.1598,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 1026.0367,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 1025.9752,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 1025.852,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 1025.729,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 1025.606,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 1025.4214,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 1025.3599,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 1025.2368,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 1025.1138,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 1024.9292,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 1024.8062,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 1024.6831,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 1024.5602,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 1024.5602,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 1024.4371,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 1024.2526,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 1024.0681,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 1024.0066,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 1023.94507,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 1023.6991,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 1023.94507,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 1024.0681,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 1024.191,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 1024.1296,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 1024.3756,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 1024.3756,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 1024.3756,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 1024.3141,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 1024.191,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 1024.1296,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 1024.0066,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 1024.0681,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 1024.1296,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 1024.1296,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 1024.0066,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 1023.8836,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 1023.8836,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 1023.63763,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 1023.5761,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 1023.94507,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 1023.8836,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 1023.8221,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 1023.7606,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 1023.5761,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 1023.5761,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 1023.4531,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 1023.33014,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 1023.2072,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 1023.2072,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 1023.02277,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 1023.02277,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 1022.77686,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 1022.6539,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 1022.71533,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 1022.8383,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 1022.8383,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 1022.5924,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 1022.408,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 1022.1621,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 1021.9777,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 1021.79333,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 1021.609,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 1021.54755,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 1021.4861,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 1021.17883,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 1021.1174,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 1020.8102,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 1020.6873,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 1020.56445,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 1020.19586,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 1019.88873,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 1019.82733,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 1019.95013,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 1020.25726,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 1020.503,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 1020.56445,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 1020.7488,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 1020.93304,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 1021.05597,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 1021.05597,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 1020.87164,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 1020.7488,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 1020.56445,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 1020.25726,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 1020.073,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 1019.7659,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 1019.4588,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 1019.2132,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 1019.02893,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 1018.9675,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 1019.09033,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 1019.09033,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 1018.7219,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 1018.5378,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 1018.5378,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 1018.415,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 1018.2922,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 1018.2922,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 1018.3536,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 1018.415,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 1018.2922,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 1018.2308,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 1018.04663,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 1018.04663,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 1017.9852,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 1017.8011,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 1017.7397,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 1017.67834,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 1017.4942,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 1017.37146,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 1017.1873,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 1017.1259,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 1017.24866,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 1017.24866,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 1017.1259,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 1016.94183,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 1016.6964,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 1016.4509,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 1016.4509,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 1016.3896,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 1016.32825,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 1016.2055,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 1016.2055,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 1016.14417,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 1015.96014,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 1015.77606,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 1015.5307,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 1015.1014,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 1014.67206,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 1014.5494,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 1014.5494,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 1014.1202,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 1013.8136,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 1013.3232,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 1013.078,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 1012.4038,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 1012.03613,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 1011.791,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 1011.2396,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 1010.8721,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 1010.7495,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 1010.5658,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 1010.1983,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 1009.8309,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 1009.64716,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 1009.341,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 1009.2797,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 1009.1573,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 1009.1573,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 1009.4022,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 1009.1573,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 1008.8512,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 1008.4839,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 1008.1778,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 1007.933,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 1007.9942,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 1007.8106,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 1007.8106,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 1007.6882,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 1007.7494,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 1007.6882,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 1007.5046,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 1006.89264,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 1006.95386,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 1006.7703,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 1006.7091,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 1006.7091,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 1007.015,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 1007.2598,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 1007.015,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 1006.8315,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 1006.4644,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 1006.09735,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 1005.85266,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 1005.4245,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 1005.36334,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 1004.9964,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 1004.6906,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 1004.6295,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 1004.5072,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 1004.26263,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 1004.1403,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 1003.83466,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 1003.529,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 1003.4679,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 1003.16223,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 1002.79553,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 1002.49,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 1002.5511,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 1002.42883,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 1002.30664,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 1001.94,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 1001.6956,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 1001.5123,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 1001.32904,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 1001.26794,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 1001.14575,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 1000.84033,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 1000.6571,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 1000.596,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 1000.4739,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 1000.3517,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 1000.16846,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 1000.3517,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 1000.29065,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 1000.3517,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 1000.4128,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 1000.29065,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 1000.1074,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 1000.0463,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 999.8631,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 999.74097,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 999.5578,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 999.49677,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 999.31354,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 999.1304,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 999.06934,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 999.1304,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 999.0083,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 998.88617,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 998.7641,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 998.703,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 998.64197,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 998.5199,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 998.5199,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 998.3978,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 998.3978,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 998.3978,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 998.33673,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 998.2757,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 997.7874,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 997.7874,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 997.7874,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 997.66534,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 997.5433,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 997.2992,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 997.1771,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 996.9941,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 996.81104,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 996.56696,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 996.44495,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 996.2619,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 996.1399,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 996.07886,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 995.8959,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 995.77386,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 995.7128,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 995.5909,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 995.5909,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 995.52985,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 995.40784,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 995.34686,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 995.34686,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 995.2859,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 995.34686,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 995.40784,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 995.4689,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 995.52985,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 995.5909,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 995.5909,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 995.7128,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 995.83484,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 995.83484,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 995.77386,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 995.7128,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 995.5909,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 995.52985,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 995.7128,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 995.7128,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 995.83484,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 995.83484,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 995.83484,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 995.8959,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 996.0179,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 996.07886,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 996.2619,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 996.3839,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 996.56696,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 996.75,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 996.93304,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 997.0551,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 997.1771,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 997.2992,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 997.3602,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 997.3602,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 997.3602,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 997.4212,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 997.4212,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 997.4212,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 997.48224,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 997.5433,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 997.6043,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 997.7264,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 997.7874,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 997.84845,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 997.9095,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 997.9095,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 997.9705,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 998.03156,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 998.0926,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 998.1536,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 998.21466,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 998.33673,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 998.33673,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 998.2757,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 998.3978,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 998.58093,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 998.703,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 998.82513,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 998.88617,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 999.0083,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 999.06934,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 999.1304,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 999.43567,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 999.61884,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 999.74097,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 999.80206,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 999.9242,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 999.8631,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 999.9242,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 1000.16846,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 1000.3517,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 1000.29065,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 1000.4739,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 1000.6571,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 1000.84033,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 1001.14575,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 1001.39014,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 1001.5123,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 1001.6345,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 1001.8178,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 1001.94,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 1002.0622,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 1002.18445,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 1002.42883,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 1002.6122,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 1002.9178,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 1003.04,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 1003.10114,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 1003.2234,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 1003.34564,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 1003.529,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 1003.529,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 1003.7124,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 1003.83466,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 1003.9569,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 1004.1403,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 1004.3238,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 1004.3849,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 1004.3849,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 1004.44604,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 1004.6295,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 1004.8741,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 1005.05756,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 1004.93524,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 1004.9964,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 1004.8741,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 1004.9964,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 1005.05756,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 1004.8129,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 1004.93524,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 1005.1799,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 1005.1799,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 1005.3022,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 1005.3022,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 1005.05756,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 1005.1799,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 1005.05756,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 1005.1187,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 1005.36334,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 1005.241,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 1005.1799,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 1005.36334,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 1005.608,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 1005.6691,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 1005.7915,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 1005.9138,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 1005.975,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 1006.09735,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 1006.09735,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 1006.1585,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 1006.2809,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 1006.2809,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 1006.34204,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 1006.4644,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 1006.7091,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 1006.95386,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 1007.1986,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 1007.321,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 1007.44336,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 1007.7494,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 1007.933,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 1008.11664,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 1008.36145,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 1008.30023,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 1008.36145,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 1008.30023,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 1008.30023,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 1008.30023,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 1008.36145,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 1008.36145,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 1008.36145,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 1008.42267,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 1008.4839,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 1008.6063,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 1008.72876,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 1008.72876,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 1008.97363,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 1009.09607,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 1009.2185,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 1009.2797,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 1009.4022,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 1009.46344,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 1009.46344,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 1009.46344,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 1009.46344,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 1009.52466,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 1009.5859,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 1009.64716,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 1009.7084,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 1009.8921,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 1009.8309,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 1009.9533,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 1010.137,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 1010.0146,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 1010.2595,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 1010.1983,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 1010.1983,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 1010.1983,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 1010.3208,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 1010.2595,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 1010.1983,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 1010.2595,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 1010.5045,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 1010.7495,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 1010.7495,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 1010.7495,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 1010.627,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 1010.8108,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 1011.05585,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 1010.9333,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 1010.9333,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 1011.11707,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 1011.2396,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 1011.2396,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 1010.99457,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 1011.11707,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 1011.30084,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 1011.2396,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 1011.3621,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 1011.54596,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 1011.72974,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 1011.72974,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 1011.72974,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 1011.72974,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 1011.791,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 1011.9136,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 1012.0974,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 1012.1587,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 1012.22,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 1012.3425,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 1012.4038,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 1012.6489,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 1012.7102,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 1012.7102,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 1012.7102,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 1012.8941,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
      {
        value: 7.7946720123291,
        time: "2019-12-30T17:00:00Z",
        depth: 0,
        data_type: {
          standard_name: "sea_water_temperature",
          short_name: "WT",
          long_name: "Water Temperature",
          units: "celsius",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "temperature",
        constraints: {
          "depth=": 1,
          "temperature_qc=": 0,
        },
        dataset: "M01_aanderaa_all",
        start_time: "2018-07-09T15:00:00Z",
        error: "Unable to load dataset due to server error",
        loadStartTimes: ["2020-01-28T14:18:01.570Z"],
        loading: false,
        readings: [],
        highlighted: "No",
      },
      {
        value: 3.33200001716614,
        time: "2020-02-04T12:59:59.999986Z",
        depth: 0,
        data_type: {
          standard_name: "wind_speed_of_gust",
          short_name: "WGST",
          long_name: "Wind Gust",
          units: "m/s",
        },
        server: "http://www.neracoos.org/erddap",
        variable: "wind_gust",
        constraints: {},
        dataset: "M01_met_all",
        start_time: "2001-07-16T16:00:00Z",
        error: "",
        loadStartTimes: ["2020-01-28T14:20:13.209Z"],
        loading: false,
        highlighted: "No",
        readings: [
          {
            reading: 10.31,
            time: "2020-01-28T14:30:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-01-28T14:40:00.000Z",
          },
          {
            reading: 10.74,
            time: "2020-01-28T14:50:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-28T15:00:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-01-28T15:10:00.000Z",
          },
          {
            reading: 12.39,
            time: "2020-01-28T15:20:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-01-28T15:30:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-01-28T15:40:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-01-28T15:50:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-01-28T16:00:00.000Z",
          },
          {
            reading: 10.66,
            time: "2020-01-28T16:10:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-28T16:20:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-01-28T16:30:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-28T16:40:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-01-28T16:50:00.000Z",
          },
          {
            reading: 11.76,
            time: "2020-01-28T17:00:00.000Z",
          },
          {
            reading: 12.78,
            time: "2020-01-28T17:10:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-28T17:20:00.000Z",
          },
          {
            reading: 12.7,
            time: "2020-01-28T17:30:00.000Z",
          },
          {
            reading: 12,
            time: "2020-01-28T17:40:00.000Z",
          },
          {
            reading: 12.31,
            time: "2020-01-28T17:50:00.000Z",
          },
          {
            reading: 12.23,
            time: "2020-01-28T18:00:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-28T18:10:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-28T18:20:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-01-28T18:30:00.000Z",
          },
          {
            reading: 11.76,
            time: "2020-01-28T18:40:00.000Z",
          },
          {
            reading: 12.03,
            time: "2020-01-28T18:50:00.000Z",
          },
          {
            reading: 11.45,
            time: "2020-01-28T19:00:00.000Z",
          },
          {
            reading: 12.5,
            time: "2020-01-28T19:10:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-01-28T19:20:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-28T19:30:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-28T19:40:00.000Z",
          },
          {
            reading: 12.23,
            time: "2020-01-28T19:50:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-28T20:00:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-01-28T20:10:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-01-28T20:20:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-01-28T20:30:00.000Z",
          },
          {
            reading: 11.96,
            time: "2020-01-28T20:40:00.000Z",
          },
          {
            reading: 10.94,
            time: "2020-01-28T20:50:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-28T21:00:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-28T21:10:00.000Z",
          },
          {
            reading: 10.94,
            time: "2020-01-28T21:20:00.000Z",
          },
          {
            reading: 10.47,
            time: "2020-01-28T21:30:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-01-28T21:40:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-01-28T21:50:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-28T22:00:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-01-28T22:10:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-28T22:20:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-01-28T22:30:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-01-28T22:40:00.000Z",
          },
          {
            reading: 10.23,
            time: "2020-01-28T22:50:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-28T23:00:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-01-28T23:10:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-01-28T23:20:00.000Z",
          },
          {
            reading: 9.72,
            time: "2020-01-28T23:30:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-01-28T23:40:00.000Z",
          },
          {
            reading: 10.35,
            time: "2020-01-28T23:50:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-01-29T00:00:00.000Z",
          },
          {
            reading: 10.31,
            time: "2020-01-29T00:10:00.000Z",
          },
          {
            reading: 10.35,
            time: "2020-01-29T00:20:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-01-29T00:30:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-01-29T00:40:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-01-29T00:50:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-01-29T01:00:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-29T01:10:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-01-29T01:20:00.000Z",
          },
          {
            reading: 9.84,
            time: "2020-01-29T01:30:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-01-29T01:40:00.000Z",
          },
          {
            reading: 9.96,
            time: "2020-01-29T01:50:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-01-29T02:00:00.000Z",
          },
          {
            reading: 10.23,
            time: "2020-01-29T02:10:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-29T02:20:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-29T02:30:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-01-29T02:40:00.000Z",
          },
          {
            reading: 10.11,
            time: "2020-01-29T02:50:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-01-29T03:00:00.000Z",
          },
          {
            reading: 10.04,
            time: "2020-01-29T03:10:00.000Z",
          },
          {
            reading: 9.64,
            time: "2020-01-29T03:20:00.000Z",
          },
          {
            reading: 10.94,
            time: "2020-01-29T03:30:00.000Z",
          },
          {
            reading: 8.58,
            time: "2020-01-29T03:40:00.000Z",
          },
          {
            reading: 10.31,
            time: "2020-01-29T03:50:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-01-29T04:00:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-01-29T04:10:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-01-29T04:20:00.000Z",
          },
          {
            reading: 8.74,
            time: "2020-01-29T04:30:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-01-29T04:40:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-29T04:50:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-01-29T05:00:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-29T05:10:00.000Z",
          },
          {
            reading: 8.97,
            time: "2020-01-29T05:20:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-01-29T05:30:00.000Z",
          },
          {
            reading: 8.74,
            time: "2020-01-29T05:40:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-01-29T05:50:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-01-29T06:00:00.000Z",
          },
          {
            reading: 9.17,
            time: "2020-01-29T06:10:00.000Z",
          },
          {
            reading: 10.11,
            time: "2020-01-29T06:20:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-01-29T06:30:00.000Z",
          },
          {
            reading: 9.64,
            time: "2020-01-29T06:40:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-29T06:50:00.000Z",
          },
          {
            reading: 10.07,
            time: "2020-01-29T07:00:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-01-29T07:10:00.000Z",
          },
          {
            reading: 10.47,
            time: "2020-01-29T07:20:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-29T07:30:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-01-29T07:40:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-29T07:50:00.000Z",
          },
          {
            reading: 10.07,
            time: "2020-01-29T08:00:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-29T08:10:00.000Z",
          },
          {
            reading: 11.37,
            time: "2020-01-29T08:20:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-01-29T08:30:00.000Z",
          },
          {
            reading: 10.07,
            time: "2020-01-29T08:40:00.000Z",
          },
          {
            reading: 10.62,
            time: "2020-01-29T08:50:00.000Z",
          },
          {
            reading: 10.94,
            time: "2020-01-29T09:00:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-29T09:10:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-01-29T09:20:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-01-29T09:30:00.000Z",
          },
          {
            reading: 9.84,
            time: "2020-01-29T09:40:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-01-29T09:50:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-01-29T10:00:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-01-29T10:10:00.000Z",
          },
          {
            reading: 9.49,
            time: "2020-01-29T10:20:00.000Z",
          },
          {
            reading: 10.94,
            time: "2020-01-29T10:30:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-01-29T10:40:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-29T10:50:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-01-29T11:00:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-01-29T11:10:00.000Z",
          },
          {
            reading: 10.9,
            time: "2020-01-29T11:20:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-01-29T11:30:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-01-29T11:40:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-01-29T11:50:00.000Z",
          },
          {
            reading: 11.09,
            time: "2020-01-29T12:00:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-01-29T12:10:00.000Z",
          },
          {
            reading: 11.37,
            time: "2020-01-29T12:20:00.000Z",
          },
          {
            reading: 12.35,
            time: "2020-01-29T12:30:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-29T12:40:00.000Z",
          },
          {
            reading: 11.37,
            time: "2020-01-29T12:50:00.000Z",
          },
          {
            reading: 11.8,
            time: "2020-01-29T13:00:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-29T13:10:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-29T13:20:00.000Z",
          },
          {
            reading: 12.07,
            time: "2020-01-29T13:30:00.000Z",
          },
          {
            reading: 12.27,
            time: "2020-01-29T13:40:00.000Z",
          },
          {
            reading: 12.35,
            time: "2020-01-29T13:50:00.000Z",
          },
          {
            reading: 11.29,
            time: "2020-01-29T14:00:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-01-29T14:10:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-29T14:20:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-29T14:30:00.000Z",
          },
          {
            reading: 12.39,
            time: "2020-01-29T14:40:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-01-29T14:50:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-01-29T15:00:00.000Z",
          },
          {
            reading: 12.11,
            time: "2020-01-29T15:10:00.000Z",
          },
          {
            reading: 11.52,
            time: "2020-01-29T15:20:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-29T15:30:00.000Z",
          },
          {
            reading: 12.54,
            time: "2020-01-29T15:40:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-01-29T15:50:00.000Z",
          },
          {
            reading: 11.33,
            time: "2020-01-29T16:00:00.000Z",
          },
          {
            reading: 11.37,
            time: "2020-01-29T16:10:00.000Z",
          },
          {
            reading: 12.58,
            time: "2020-01-29T16:20:00.000Z",
          },
          {
            reading: 12.98,
            time: "2020-01-29T16:30:00.000Z",
          },
          {
            reading: 13.21,
            time: "2020-01-29T16:40:00.000Z",
          },
          {
            reading: 12.78,
            time: "2020-01-29T16:50:00.000Z",
          },
          {
            reading: 13.41,
            time: "2020-01-29T17:00:00.000Z",
          },
          {
            reading: 12.39,
            time: "2020-01-29T17:10:00.000Z",
          },
          {
            reading: 12.78,
            time: "2020-01-29T17:20:00.000Z",
          },
          {
            reading: 14.11,
            time: "2020-01-29T17:30:00.000Z",
          },
          {
            reading: 13.52,
            time: "2020-01-29T17:40:00.000Z",
          },
          {
            reading: 12.07,
            time: "2020-01-29T17:50:00.000Z",
          },
          {
            reading: 13.52,
            time: "2020-01-29T18:00:00.000Z",
          },
          {
            reading: 12.54,
            time: "2020-01-29T18:10:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-01-29T18:20:00.000Z",
          },
          {
            reading: 10.74,
            time: "2020-01-29T18:30:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-29T18:40:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-29T18:50:00.000Z",
          },
          {
            reading: 12.54,
            time: "2020-01-29T19:00:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-29T19:10:00.000Z",
          },
          {
            reading: 12.43,
            time: "2020-01-29T19:20:00.000Z",
          },
          {
            reading: 12.07,
            time: "2020-01-29T19:30:00.000Z",
          },
          {
            reading: 12.03,
            time: "2020-01-29T19:40:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-29T19:50:00.000Z",
          },
          {
            reading: 12.43,
            time: "2020-01-29T20:00:00.000Z",
          },
          {
            reading: 12.86,
            time: "2020-01-29T20:10:00.000Z",
          },
          {
            reading: 12.39,
            time: "2020-01-29T20:20:00.000Z",
          },
          {
            reading: 11.37,
            time: "2020-01-29T20:30:00.000Z",
          },
          {
            reading: 11.45,
            time: "2020-01-29T20:40:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-01-29T20:50:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-29T21:00:00.000Z",
          },
          {
            reading: 12.15,
            time: "2020-01-29T21:10:00.000Z",
          },
          {
            reading: 12.98,
            time: "2020-01-29T21:20:00.000Z",
          },
          {
            reading: 12.7,
            time: "2020-01-29T21:30:00.000Z",
          },
          {
            reading: 14.58,
            time: "2020-01-29T21:40:00.000Z",
          },
          {
            reading: 13.33,
            time: "2020-01-29T21:50:00.000Z",
          },
          {
            reading: 13.84,
            time: "2020-01-29T22:00:00.000Z",
          },
          {
            reading: 13.99,
            time: "2020-01-29T22:10:00.000Z",
          },
          {
            reading: 14.31,
            time: "2020-01-29T22:20:00.000Z",
          },
          {
            reading: 14.15,
            time: "2020-01-29T22:30:00.000Z",
          },
          {
            reading: 13.88,
            time: "2020-01-29T22:40:00.000Z",
          },
          {
            reading: 13.6,
            time: "2020-01-29T22:50:00.000Z",
          },
          {
            reading: 13.33,
            time: "2020-01-29T23:00:00.000Z",
          },
          {
            reading: 12.62,
            time: "2020-01-29T23:10:00.000Z",
          },
          {
            reading: 13.6,
            time: "2020-01-29T23:20:00.000Z",
          },
          {
            reading: 13.52,
            time: "2020-01-29T23:30:00.000Z",
          },
          {
            reading: 15.37,
            time: "2020-01-29T23:40:00.000Z",
          },
          {
            reading: 13.76,
            time: "2020-01-29T23:50:00.000Z",
          },
          {
            reading: 15.05,
            time: "2020-01-30T00:00:00.000Z",
          },
          {
            reading: 14.54,
            time: "2020-01-30T00:10:00.000Z",
          },
          {
            reading: 13.48,
            time: "2020-01-30T00:20:00.000Z",
          },
          {
            reading: 13.25,
            time: "2020-01-30T00:30:00.000Z",
          },
          {
            reading: 14.54,
            time: "2020-01-30T00:40:00.000Z",
          },
          {
            reading: 14.5,
            time: "2020-01-30T00:50:00.000Z",
          },
          {
            reading: 13.96,
            time: "2020-01-30T01:00:00.000Z",
          },
          {
            reading: 14.54,
            time: "2020-01-30T01:10:00.000Z",
          },
          {
            reading: 13.45,
            time: "2020-01-30T01:20:00.000Z",
          },
          {
            reading: 13.76,
            time: "2020-01-30T01:30:00.000Z",
          },
          {
            reading: 14.03,
            time: "2020-01-30T01:40:00.000Z",
          },
          {
            reading: 13.68,
            time: "2020-01-30T01:50:00.000Z",
          },
          {
            reading: 14.03,
            time: "2020-01-30T02:00:00.000Z",
          },
          {
            reading: 13.84,
            time: "2020-01-30T02:10:00.000Z",
          },
          {
            reading: 15.05,
            time: "2020-01-30T02:20:00.000Z",
          },
          {
            reading: 15.92,
            time: "2020-01-30T02:30:00.000Z",
          },
          {
            reading: 14.31,
            time: "2020-01-30T02:40:00.000Z",
          },
          {
            reading: 14.58,
            time: "2020-01-30T02:50:00.000Z",
          },
          {
            reading: 15.84,
            time: "2020-01-30T03:00:00.000Z",
          },
          {
            reading: 15.44,
            time: "2020-01-30T03:10:00.000Z",
          },
          {
            reading: 15.05,
            time: "2020-01-30T03:20:00.000Z",
          },
          {
            reading: 15.13,
            time: "2020-01-30T03:30:00.000Z",
          },
          {
            reading: 14.62,
            time: "2020-01-30T03:40:00.000Z",
          },
          {
            reading: 15.44,
            time: "2020-01-30T03:50:00.000Z",
          },
          {
            reading: 15.21,
            time: "2020-01-30T04:00:00.000Z",
          },
          {
            reading: 15.01,
            time: "2020-01-30T04:10:00.000Z",
          },
          {
            reading: 15.17,
            time: "2020-01-30T04:20:00.000Z",
          },
          {
            reading: 15.64,
            time: "2020-01-30T04:30:00.000Z",
          },
          {
            reading: 15.05,
            time: "2020-01-30T04:40:00.000Z",
          },
          {
            reading: 14.43,
            time: "2020-01-30T04:50:00.000Z",
          },
          {
            reading: 14.23,
            time: "2020-01-30T05:00:00.000Z",
          },
          {
            reading: 14.43,
            time: "2020-01-30T05:10:00.000Z",
          },
          {
            reading: 12.86,
            time: "2020-01-30T05:20:00.000Z",
          },
          {
            reading: 12.98,
            time: "2020-01-30T05:30:00.000Z",
          },
          {
            reading: 12.9,
            time: "2020-01-30T05:40:00.000Z",
          },
          {
            reading: 12.82,
            time: "2020-01-30T05:50:00.000Z",
          },
          {
            reading: 14.11,
            time: "2020-01-30T06:00:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-30T06:10:00.000Z",
          },
          {
            reading: 13.41,
            time: "2020-01-30T06:20:00.000Z",
          },
          {
            reading: 12.9,
            time: "2020-01-30T06:30:00.000Z",
          },
          {
            reading: 12,
            time: "2020-01-30T06:40:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-30T06:50:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-30T07:00:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-01-30T07:10:00.000Z",
          },
          {
            reading: 11.64,
            time: "2020-01-30T07:20:00.000Z",
          },
          {
            reading: 10.62,
            time: "2020-01-30T07:30:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-30T07:40:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-01-30T07:50:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-01-30T08:00:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-01-30T08:10:00.000Z",
          },
          {
            reading: 10.66,
            time: "2020-01-30T08:20:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-01-30T08:30:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-01-30T08:40:00.000Z",
          },
          {
            reading: 10.11,
            time: "2020-01-30T08:50:00.000Z",
          },
          {
            reading: 10.74,
            time: "2020-01-30T09:00:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-30T09:10:00.000Z",
          },
          {
            reading: 10.66,
            time: "2020-01-30T09:20:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-01-30T09:30:00.000Z",
          },
          {
            reading: 12.31,
            time: "2020-01-30T09:40:00.000Z",
          },
          {
            reading: 11.84,
            time: "2020-01-30T09:50:00.000Z",
          },
          {
            reading: 12.39,
            time: "2020-01-30T10:00:00.000Z",
          },
          {
            reading: 13.88,
            time: "2020-01-30T10:10:00.000Z",
          },
          {
            reading: 14.35,
            time: "2020-01-30T10:20:00.000Z",
          },
          {
            reading: 12.58,
            time: "2020-01-30T10:30:00.000Z",
          },
          {
            reading: 12.5,
            time: "2020-01-30T10:40:00.000Z",
          },
          {
            reading: 12.82,
            time: "2020-01-30T10:50:00.000Z",
          },
          {
            reading: 13.17,
            time: "2020-01-30T11:00:00.000Z",
          },
          {
            reading: 13.88,
            time: "2020-01-30T11:10:00.000Z",
          },
          {
            reading: 12.74,
            time: "2020-01-30T11:20:00.000Z",
          },
          {
            reading: 12.82,
            time: "2020-01-30T11:30:00.000Z",
          },
          {
            reading: 13.52,
            time: "2020-01-30T11:40:00.000Z",
          },
          {
            reading: 13.25,
            time: "2020-01-30T11:50:00.000Z",
          },
          {
            reading: 13.05,
            time: "2020-01-30T12:00:00.000Z",
          },
          {
            reading: 13.13,
            time: "2020-01-30T12:10:00.000Z",
          },
          {
            reading: 13.21,
            time: "2020-01-30T12:20:00.000Z",
          },
          {
            reading: 13.76,
            time: "2020-01-30T12:30:00.000Z",
          },
          {
            reading: 13.72,
            time: "2020-01-30T12:40:00.000Z",
          },
          {
            reading: 14.39,
            time: "2020-01-30T12:50:00.000Z",
          },
          {
            reading: 12.94,
            time: "2020-01-30T13:00:00.000Z",
          },
          {
            reading: 12.62,
            time: "2020-01-30T13:10:00.000Z",
          },
          {
            reading: 13.64,
            time: "2020-01-30T13:20:00.000Z",
          },
          {
            reading: 13.29,
            time: "2020-01-30T13:30:00.000Z",
          },
          {
            reading: 13.88,
            time: "2020-01-30T13:40:00.000Z",
          },
          {
            reading: 13.05,
            time: "2020-01-30T13:50:00.000Z",
          },
          {
            reading: 12.58,
            time: "2020-01-30T14:00:00.000Z",
          },
          {
            reading: 12,
            time: "2020-01-30T14:10:00.000Z",
          },
          {
            reading: 13.41,
            time: "2020-01-30T14:20:00.000Z",
          },
          {
            reading: 12.74,
            time: "2020-01-30T14:30:00.000Z",
          },
          {
            reading: 12.94,
            time: "2020-01-30T14:40:00.000Z",
          },
          {
            reading: 13.25,
            time: "2020-01-30T14:50:00.000Z",
          },
          {
            reading: 13.6,
            time: "2020-01-30T15:00:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-01-30T15:10:00.000Z",
          },
          {
            reading: 10.98,
            time: "2020-01-30T15:20:00.000Z",
          },
          {
            reading: 12.45,
            time: "2020-01-30T15:30:00.000Z",
          },
          {
            reading: 11.45,
            time: "2020-01-30T15:40:00.000Z",
          },
          {
            reading: 12.15,
            time: "2020-01-30T15:50:00.000Z",
          },
          {
            reading: 12.15,
            time: "2020-01-30T16:00:00.000Z",
          },
          {
            reading: 11.33,
            time: "2020-01-30T16:10:00.000Z",
          },
          {
            reading: 10.62,
            time: "2020-01-30T16:20:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-01-30T16:30:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-01-30T16:40:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-01-30T16:50:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-30T17:00:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-01-30T17:10:00.000Z",
          },
          {
            reading: 10.04,
            time: "2020-01-30T17:20:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-30T17:30:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-01-30T17:40:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-01-30T17:50:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-01-30T18:00:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-01-30T18:10:00.000Z",
          },
          {
            reading: 9.13,
            time: "2020-01-30T18:20:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-01-30T18:30:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-01-30T18:40:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-01-30T18:50:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-01-30T19:00:00.000Z",
          },
          {
            reading: 6.586,
            time: "2020-01-30T19:10:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-01-30T19:20:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-01-30T19:30:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-01-30T19:40:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-01-30T19:50:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-01-30T20:00:00.000Z",
          },
          {
            reading: 6.978,
            time: "2020-01-30T20:10:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-01-30T20:20:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-01-30T20:30:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-01-30T20:40:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-01-30T20:50:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-01-30T21:00:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-01-30T21:10:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-01-30T21:20:00.000Z",
          },
          {
            reading: 7.57,
            time: "2020-01-30T21:30:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-01-30T21:40:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-01-30T21:50:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-01-30T22:00:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-01-30T22:10:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-01-30T22:20:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-01-30T22:30:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-01-30T22:40:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-01-30T22:50:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-01-30T23:00:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-01-30T23:10:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-01-30T23:20:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-01-30T23:30:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-30T23:40:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-01-30T23:50:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-01-31T00:00:00.000Z",
          },
          {
            reading: 7.76,
            time: "2020-01-31T00:10:00.000Z",
          },
          {
            reading: 7.76,
            time: "2020-01-31T00:20:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-01-31T00:30:00.000Z",
          },
          {
            reading: 6.821,
            time: "2020-01-31T00:40:00.000Z",
          },
          {
            reading: 6.978,
            time: "2020-01-31T00:50:00.000Z",
          },
          {
            reading: 6.742,
            time: "2020-01-31T01:00:00.000Z",
          },
          {
            reading: 6.742,
            time: "2020-01-31T01:10:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-01-31T01:20:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-01-31T01:30:00.000Z",
          },
          {
            reading: 6.429,
            time: "2020-01-31T01:40:00.000Z",
          },
          {
            reading: 6.076,
            time: "2020-01-31T01:50:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-01-31T02:00:00.000Z",
          },
          {
            reading: 6.037,
            time: "2020-01-31T02:10:00.000Z",
          },
          {
            reading: 5.135,
            time: "2020-01-31T02:20:00.000Z",
          },
          {
            reading: 4.782,
            time: "2020-01-31T02:30:00.000Z",
          },
          {
            reading: 4.743,
            time: "2020-01-31T02:40:00.000Z",
          },
          {
            reading: 4.547,
            time: "2020-01-31T02:50:00.000Z",
          },
          {
            reading: 4.038,
            time: "2020-01-31T03:00:00.000Z",
          },
          {
            reading: 4.077,
            time: "2020-01-31T03:10:00.000Z",
          },
          {
            reading: 3.842,
            time: "2020-01-31T03:20:00.000Z",
          },
          {
            reading: 2.94,
            time: "2020-01-31T03:30:00.000Z",
          },
          {
            reading: 3.293,
            time: "2020-01-31T03:40:00.000Z",
          },
          {
            reading: 3.45,
            time: "2020-01-31T03:50:00.000Z",
          },
          {
            reading: 3.097,
            time: "2020-01-31T04:00:00.000Z",
          },
          {
            reading: 3.685,
            time: "2020-01-31T04:10:00.000Z",
          },
          {
            reading: 3.606,
            time: "2020-01-31T04:20:00.000Z",
          },
          {
            reading: 2.626,
            time: "2020-01-31T04:30:00.000Z",
          },
          {
            reading: 3.567,
            time: "2020-01-31T04:40:00.000Z",
          },
          {
            reading: 3.646,
            time: "2020-01-31T04:50:00.000Z",
          },
          {
            reading: 3.763,
            time: "2020-01-31T05:00:00.000Z",
          },
          {
            reading: 3.567,
            time: "2020-01-31T05:10:00.000Z",
          },
          {
            reading: 4.43,
            time: "2020-01-31T05:20:00.000Z",
          },
          {
            reading: 3.959,
            time: "2020-01-31T05:30:00.000Z",
          },
          {
            reading: 4.155,
            time: "2020-01-31T05:40:00.000Z",
          },
          {
            reading: 3.685,
            time: "2020-01-31T05:50:00.000Z",
          },
          {
            reading: 4.155,
            time: "2020-01-31T06:00:00.000Z",
          },
          {
            reading: 4.626,
            time: "2020-01-31T06:10:00.000Z",
          },
          {
            reading: 4.547,
            time: "2020-01-31T06:20:00.000Z",
          },
          {
            reading: 4.312,
            time: "2020-01-31T06:30:00.000Z",
          },
          {
            reading: 4.743,
            time: "2020-01-31T06:40:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-01-31T06:50:00.000Z",
          },
          {
            reading: 5.214,
            time: "2020-01-31T07:00:00.000Z",
          },
          {
            reading: 5.723,
            time: "2020-01-31T07:10:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-01-31T07:20:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-01-31T07:30:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-01-31T07:40:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-01-31T07:50:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-01-31T08:00:00.000Z",
          },
          {
            reading: 5.331,
            time: "2020-01-31T08:10:00.000Z",
          },
          {
            reading: 5.88,
            time: "2020-01-31T08:20:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-01-31T08:30:00.000Z",
          },
          {
            reading: 5.331,
            time: "2020-01-31T08:40:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-01-31T08:50:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-01-31T09:00:00.000Z",
          },
          {
            reading: 5.645,
            time: "2020-01-31T09:10:00.000Z",
          },
          {
            reading: 5.449,
            time: "2020-01-31T09:20:00.000Z",
          },
          {
            reading: 5.841,
            time: "2020-01-31T09:30:00.000Z",
          },
          {
            reading: 4.939,
            time: "2020-01-31T09:40:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-01-31T09:50:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-01-31T10:00:00.000Z",
          },
          {
            reading: 6.782,
            time: "2020-01-31T10:10:00.000Z",
          },
          {
            reading: 6.546,
            time: "2020-01-31T10:20:00.000Z",
          },
          {
            reading: 6.664,
            time: "2020-01-31T10:30:00.000Z",
          },
          {
            reading: 6.468,
            time: "2020-01-31T10:40:00.000Z",
          },
          {
            reading: 6.429,
            time: "2020-01-31T10:50:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-01-31T11:00:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-01-31T11:10:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-31T11:20:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-01-31T11:30:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-01-31T11:40:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-01-31T11:50:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-01-31T12:00:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-01-31T12:10:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-01-31T12:20:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-01-31T12:30:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-31T12:40:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-31T12:50:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-31T13:00:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-01-31T13:10:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-01-31T13:20:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-01-31T13:30:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-01-31T13:40:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-01-31T13:50:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-01-31T14:00:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-01-31T14:10:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-31T14:20:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-31T14:30:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-01-31T14:40:00.000Z",
          },
          {
            reading: 8.31,
            time: "2020-01-31T14:50:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-01-31T15:00:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-31T15:10:00.000Z",
          },
          {
            reading: 9.13,
            time: "2020-01-31T15:20:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-01-31T15:30:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-01-31T15:40:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-01-31T15:50:00.000Z",
          },
          {
            reading: 8.31,
            time: "2020-01-31T16:00:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-01-31T16:10:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-01-31T16:20:00.000Z",
          },
          {
            reading: 10.31,
            time: "2020-01-31T16:30:00.000Z",
          },
          {
            reading: 9.53,
            time: "2020-01-31T16:40:00.000Z",
          },
          {
            reading: 9.76,
            time: "2020-01-31T16:50:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-31T17:00:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-01-31T17:10:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-01-31T17:20:00.000Z",
          },
          {
            reading: 10.51,
            time: "2020-01-31T17:30:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-01-31T17:40:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-31T17:50:00.000Z",
          },
          {
            reading: 8.74,
            time: "2020-01-31T18:00:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-01-31T18:10:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-01-31T18:20:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-01-31T18:30:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-01-31T18:40:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-01-31T18:50:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-01-31T19:00:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-01-31T19:10:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-01-31T19:20:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-01-31T19:30:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-01-31T19:40:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-01-31T19:50:00.000Z",
          },
          {
            reading: 8.51,
            time: "2020-01-31T20:00:00.000Z",
          },
          {
            reading: 8.51,
            time: "2020-01-31T20:10:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-01-31T20:20:00.000Z",
          },
          {
            reading: 7.88,
            time: "2020-01-31T20:30:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-01-31T20:40:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-01-31T20:50:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-01-31T21:00:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-01-31T21:10:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-01-31T21:20:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-01-31T21:30:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-01-31T21:40:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-31T21:50:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-31T22:00:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-01-31T22:10:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-01-31T22:20:00.000Z",
          },
          {
            reading: 9.45,
            time: "2020-01-31T22:30:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-01-31T22:40:00.000Z",
          },
          {
            reading: 8.9,
            time: "2020-01-31T22:50:00.000Z",
          },
          {
            reading: 9.13,
            time: "2020-01-31T23:00:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-01-31T23:10:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-01-31T23:20:00.000Z",
          },
          {
            reading: 9.13,
            time: "2020-01-31T23:30:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-01-31T23:40:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-01-31T23:50:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-02-01T00:00:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-01T00:10:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-01T00:20:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-02-01T00:30:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-02-01T00:40:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-01T00:50:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-01T01:00:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-02-01T01:10:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-02-01T01:20:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-02-01T01:30:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-02-01T01:40:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-01T01:50:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-01T02:00:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-01T02:10:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-01T02:20:00.000Z",
          },
          {
            reading: 6.664,
            time: "2020-02-01T02:30:00.000Z",
          },
          {
            reading: 7.06,
            time: "2020-02-01T02:40:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-02-01T02:50:00.000Z",
          },
          {
            reading: 6.86,
            time: "2020-02-01T03:00:00.000Z",
          },
          {
            reading: 6.703,
            time: "2020-02-01T03:10:00.000Z",
          },
          {
            reading: 7.06,
            time: "2020-02-01T03:20:00.000Z",
          },
          {
            reading: 6.664,
            time: "2020-02-01T03:30:00.000Z",
          },
          {
            reading: 6.507,
            time: "2020-02-01T03:40:00.000Z",
          },
          {
            reading: 6.546,
            time: "2020-02-01T03:50:00.000Z",
          },
          {
            reading: 6.86,
            time: "2020-02-01T04:00:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-01T04:10:00.000Z",
          },
          {
            reading: 6.39,
            time: "2020-02-01T04:20:00.000Z",
          },
          {
            reading: 6.39,
            time: "2020-02-01T04:30:00.000Z",
          },
          {
            reading: 6.115,
            time: "2020-02-01T04:40:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-02-01T04:50:00.000Z",
          },
          {
            reading: 5.292,
            time: "2020-02-01T05:00:00.000Z",
          },
          {
            reading: 5.135,
            time: "2020-02-01T05:10:00.000Z",
          },
          {
            reading: 5.37,
            time: "2020-02-01T05:20:00.000Z",
          },
          {
            reading: 5.919,
            time: "2020-02-01T05:30:00.000Z",
          },
          {
            reading: 5.449,
            time: "2020-02-01T05:40:00.000Z",
          },
          {
            reading: 6.037,
            time: "2020-02-01T05:50:00.000Z",
          },
          {
            reading: 5.88,
            time: "2020-02-01T06:00:00.000Z",
          },
          {
            reading: 5.88,
            time: "2020-02-01T06:10:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-02-01T06:20:00.000Z",
          },
          {
            reading: 4.547,
            time: "2020-02-01T06:30:00.000Z",
          },
          {
            reading: 3.92,
            time: "2020-02-01T06:40:00.000Z",
          },
          {
            reading: 4.273,
            time: "2020-02-01T06:50:00.000Z",
          },
          {
            reading: 4.704,
            time: "2020-02-01T07:00:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-02-01T07:10:00.000Z",
          },
          {
            reading: 6.546,
            time: "2020-02-01T07:20:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-01T07:30:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-02-01T07:40:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-02-01T07:50:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-02-01T08:00:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-02-01T08:10:00.000Z",
          },
          {
            reading: 8,
            time: "2020-02-01T08:20:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-01T08:30:00.000Z",
          },
          {
            reading: 8,
            time: "2020-02-01T08:40:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-01T08:50:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-02-01T09:00:00.000Z",
          },
          {
            reading: 5.919,
            time: "2020-02-01T09:10:00.000Z",
          },
          {
            reading: 5.096,
            time: "2020-02-01T09:20:00.000Z",
          },
          {
            reading: 4.586,
            time: "2020-02-01T09:30:00.000Z",
          },
          {
            reading: 4.586,
            time: "2020-02-01T09:40:00.000Z",
          },
          {
            reading: 4.469,
            time: "2020-02-01T09:50:00.000Z",
          },
          {
            reading: 4.9,
            time: "2020-02-01T10:00:00.000Z",
          },
          {
            reading: 4.704,
            time: "2020-02-01T10:10:00.000Z",
          },
          {
            reading: 3.41,
            time: "2020-02-01T10:20:00.000Z",
          },
          {
            reading: 3.058,
            time: "2020-02-01T10:30:00.000Z",
          },
          {
            reading: 3.371,
            time: "2020-02-01T10:40:00.000Z",
          },
          {
            reading: 3.998,
            time: "2020-02-01T10:50:00.000Z",
          },
          {
            reading: 4.508,
            time: "2020-02-01T11:00:00.000Z",
          },
          {
            reading: 4.978,
            time: "2020-02-01T11:10:00.000Z",
          },
          {
            reading: 5.174,
            time: "2020-02-01T11:20:00.000Z",
          },
          {
            reading: 5.37,
            time: "2020-02-01T11:30:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-01T11:40:00.000Z",
          },
          {
            reading: 5.645,
            time: "2020-02-01T11:50:00.000Z",
          },
          {
            reading: 5.684,
            time: "2020-02-01T12:00:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-01T12:10:00.000Z",
          },
          {
            reading: 6.233,
            time: "2020-02-01T12:20:00.000Z",
          },
          {
            reading: 6.076,
            time: "2020-02-01T12:30:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-02-01T12:40:00.000Z",
          },
          {
            reading: 6.311,
            time: "2020-02-01T12:50:00.000Z",
          },
          {
            reading: 6.586,
            time: "2020-02-01T13:00:00.000Z",
          },
          {
            reading: 6.86,
            time: "2020-02-01T13:10:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-01T13:20:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-02-01T13:30:00.000Z",
          },
          {
            reading: 6.507,
            time: "2020-02-01T13:40:00.000Z",
          },
          {
            reading: 6.39,
            time: "2020-02-01T13:50:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-01T14:00:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-01T14:10:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-01T14:20:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-01T14:30:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-02-01T14:40:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-01T14:50:00.000Z",
          },
          {
            reading: 6.703,
            time: "2020-02-01T15:00:00.000Z",
          },
          {
            reading: 6.586,
            time: "2020-02-01T15:10:00.000Z",
          },
          {
            reading: 6.272,
            time: "2020-02-01T15:20:00.000Z",
          },
          {
            reading: 6.115,
            time: "2020-02-01T15:30:00.000Z",
          },
          {
            reading: 5.488,
            time: "2020-02-01T15:40:00.000Z",
          },
          {
            reading: 4.978,
            time: "2020-02-01T15:50:00.000Z",
          },
          {
            reading: 4.508,
            time: "2020-02-01T16:00:00.000Z",
          },
          {
            reading: 5.057,
            time: "2020-02-01T16:10:00.000Z",
          },
          {
            reading: 4.743,
            time: "2020-02-01T16:20:00.000Z",
          },
          {
            reading: 3.802,
            time: "2020-02-01T16:30:00.000Z",
          },
          {
            reading: 2.47,
            time: "2020-02-01T16:40:00.000Z",
          },
          {
            reading: 2.744,
            time: "2020-02-01T16:50:00.000Z",
          },
          {
            reading: 1.882,
            time: "2020-02-01T17:00:00.000Z",
          },
          {
            reading: 1.842,
            time: "2020-02-01T17:10:00.000Z",
          },
          {
            reading: 2.509,
            time: "2020-02-01T17:20:00.000Z",
          },
          {
            reading: 1.372,
            time: "2020-02-01T17:30:00.000Z",
          },
          {
            reading: 2.783,
            time: "2020-02-01T17:40:00.000Z",
          },
          {
            reading: 3.136,
            time: "2020-02-01T17:50:00.000Z",
          },
          {
            reading: 3.567,
            time: "2020-02-01T18:00:00.000Z",
          },
          {
            reading: 3.802,
            time: "2020-02-01T18:10:00.000Z",
          },
          {
            reading: 2.391,
            time: "2020-02-01T18:20:00.000Z",
          },
          {
            reading: 3.646,
            time: "2020-02-01T18:30:00.000Z",
          },
          {
            reading: 3.528,
            time: "2020-02-01T18:40:00.000Z",
          },
          {
            reading: 4.155,
            time: "2020-02-01T18:50:00.000Z",
          },
          {
            reading: 3.097,
            time: "2020-02-01T19:00:00.000Z",
          },
          {
            reading: 3.959,
            time: "2020-02-01T19:10:00.000Z",
          },
          {
            reading: 4.155,
            time: "2020-02-01T19:20:00.000Z",
          },
          {
            reading: 4.312,
            time: "2020-02-01T19:30:00.000Z",
          },
          {
            reading: 4.782,
            time: "2020-02-01T19:40:00.000Z",
          },
          {
            reading: 5.37,
            time: "2020-02-01T19:50:00.000Z",
          },
          {
            reading: 5.88,
            time: "2020-02-01T20:00:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-02-01T20:10:00.000Z",
          },
          {
            reading: 5.018,
            time: "2020-02-01T20:20:00.000Z",
          },
          {
            reading: 5.018,
            time: "2020-02-01T20:30:00.000Z",
          },
          {
            reading: 5.253,
            time: "2020-02-01T20:40:00.000Z",
          },
          {
            reading: 4.547,
            time: "2020-02-01T20:50:00.000Z",
          },
          {
            reading: 4.39,
            time: "2020-02-01T21:00:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-01T21:10:00.000Z",
          },
          {
            reading: 3.92,
            time: "2020-02-01T21:20:00.000Z",
          },
          {
            reading: 5.37,
            time: "2020-02-01T21:30:00.000Z",
          },
          {
            reading: 5.684,
            time: "2020-02-01T21:40:00.000Z",
          },
          {
            reading: 5.684,
            time: "2020-02-01T21:50:00.000Z",
          },
          {
            reading: 5.723,
            time: "2020-02-01T22:00:00.000Z",
          },
          {
            reading: 6.507,
            time: "2020-02-01T22:10:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-02-01T22:20:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-01T22:30:00.000Z",
          },
          {
            reading: 6.076,
            time: "2020-02-01T22:40:00.000Z",
          },
          {
            reading: 5.998,
            time: "2020-02-01T22:50:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-01T23:00:00.000Z",
          },
          {
            reading: 7.1,
            time: "2020-02-01T23:10:00.000Z",
          },
          {
            reading: 6.272,
            time: "2020-02-01T23:20:00.000Z",
          },
          {
            reading: 6.546,
            time: "2020-02-01T23:30:00.000Z",
          },
          {
            reading: 6.194,
            time: "2020-02-01T23:40:00.000Z",
          },
          {
            reading: 5.723,
            time: "2020-02-01T23:50:00.000Z",
          },
          {
            reading: 5.096,
            time: "2020-02-02T00:00:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-02T00:10:00.000Z",
          },
          {
            reading: 5.919,
            time: "2020-02-02T00:20:00.000Z",
          },
          {
            reading: 6.115,
            time: "2020-02-02T00:30:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-02-02T00:40:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-02T00:50:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-02T01:00:00.000Z",
          },
          {
            reading: 7.17,
            time: "2020-02-02T01:10:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-02-02T01:20:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-02T01:30:00.000Z",
          },
          {
            reading: 6.194,
            time: "2020-02-02T01:40:00.000Z",
          },
          {
            reading: 6.742,
            time: "2020-02-02T01:50:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-02T02:00:00.000Z",
          },
          {
            reading: 7.41,
            time: "2020-02-02T02:10:00.000Z",
          },
          {
            reading: 6.194,
            time: "2020-02-02T02:20:00.000Z",
          },
          {
            reading: 6.703,
            time: "2020-02-02T02:30:00.000Z",
          },
          {
            reading: 6.703,
            time: "2020-02-02T02:40:00.000Z",
          },
          {
            reading: 7.76,
            time: "2020-02-02T02:50:00.000Z",
          },
          {
            reading: 6.507,
            time: "2020-02-02T03:00:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-02T03:10:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-02T03:20:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-02-02T03:30:00.000Z",
          },
          {
            reading: 6.978,
            time: "2020-02-02T03:40:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-02T03:50:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-02T04:00:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-02T04:10:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-02-02T04:20:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-02-02T04:30:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-02T04:40:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-02-02T04:50:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-02-02T05:00:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-02T05:10:00.000Z",
          },
          {
            reading: 8.31,
            time: "2020-02-02T05:20:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-02-02T05:30:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-02-02T05:40:00.000Z",
          },
          {
            reading: 7.76,
            time: "2020-02-02T05:50:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-02-02T06:00:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-02-02T06:10:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-02T06:20:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-02T06:30:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-02-02T06:40:00.000Z",
          },
          {
            reading: 8,
            time: "2020-02-02T06:50:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-02-02T07:00:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-02-02T07:10:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-02-02T07:20:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-02T07:30:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-02-02T07:40:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-02-02T07:50:00.000Z",
          },
          {
            reading: 8.58,
            time: "2020-02-02T08:00:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-02-02T08:10:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-02-02T08:20:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-02T08:30:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-02-02T08:40:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-02T08:50:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-02T09:00:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-02T09:10:00.000Z",
          },
          {
            reading: 9.49,
            time: "2020-02-02T09:20:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-02T09:30:00.000Z",
          },
          {
            reading: 9.06,
            time: "2020-02-02T09:40:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-02T09:50:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-02T10:00:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-02-02T10:10:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-02T10:20:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-02-02T10:30:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-02T10:40:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-02-02T10:50:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-02-02T11:00:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-02-02T11:10:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-02T11:20:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-02-02T11:30:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-02-02T11:40:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-02-02T11:50:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-02-02T12:00:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-02T12:10:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-02T12:20:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-02T12:30:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-02T12:40:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T12:50:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T13:00:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-02-02T13:10:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-02T13:20:00.000Z",
          },
          {
            reading: 8.86,
            time: "2020-02-02T13:30:00.000Z",
          },
          {
            reading: 9.49,
            time: "2020-02-02T13:40:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-02-02T13:50:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-02T14:00:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-02T14:10:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-02T14:20:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-02-02T14:30:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-02T14:40:00.000Z",
          },
          {
            reading: 8.51,
            time: "2020-02-02T14:50:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-02T15:00:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T15:10:00.000Z",
          },
          {
            reading: 7.5,
            time: "2020-02-02T15:20:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-02T15:30:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-02-02T15:40:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-02T15:50:00.000Z",
          },
          {
            reading: 8.19,
            time: "2020-02-02T16:00:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-02-02T16:10:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-02T16:20:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-02T16:30:00.000Z",
          },
          {
            reading: 7.57,
            time: "2020-02-02T16:40:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-02T16:50:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T17:00:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-02T17:10:00.000Z",
          },
          {
            reading: 7.29,
            time: "2020-02-02T17:20:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-02-02T17:30:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-02T17:40:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-02T17:50:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-02T18:00:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-02T18:10:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-02T18:20:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-02T18:30:00.000Z",
          },
          {
            reading: 7.49,
            time: "2020-02-02T18:40:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-02T18:50:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-02T19:00:00.000Z",
          },
          {
            reading: 7.8,
            time: "2020-02-02T19:10:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-02-02T19:20:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-02-02T19:30:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-02T19:40:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-02-02T19:50:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-02T20:00:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T20:10:00.000Z",
          },
          {
            reading: 8.51,
            time: "2020-02-02T20:20:00.000Z",
          },
          {
            reading: 8.58,
            time: "2020-02-02T20:30:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-02T20:40:00.000Z",
          },
          {
            reading: 8.23,
            time: "2020-02-02T20:50:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-02T21:00:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-02T21:10:00.000Z",
          },
          {
            reading: 7.53,
            time: "2020-02-02T21:20:00.000Z",
          },
          {
            reading: 6.586,
            time: "2020-02-02T21:30:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-02-02T21:40:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-02T21:50:00.000Z",
          },
          {
            reading: 7.6,
            time: "2020-02-02T22:00:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-02T22:10:00.000Z",
          },
          {
            reading: 7.21,
            time: "2020-02-02T22:20:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-02T22:30:00.000Z",
          },
          {
            reading: 7.13,
            time: "2020-02-02T22:40:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-02T22:50:00.000Z",
          },
          {
            reading: 6.978,
            time: "2020-02-02T23:00:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-02T23:10:00.000Z",
          },
          {
            reading: 6.586,
            time: "2020-02-02T23:20:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-02T23:30:00.000Z",
          },
          {
            reading: 6.742,
            time: "2020-02-02T23:40:00.000Z",
          },
          {
            reading: 6.625,
            time: "2020-02-02T23:50:00.000Z",
          },
          {
            reading: 5.41,
            time: "2020-02-03T00:00:00.000Z",
          },
          {
            reading: 5.214,
            time: "2020-02-03T00:10:00.000Z",
          },
          {
            reading: 5.331,
            time: "2020-02-03T00:20:00.000Z",
          },
          {
            reading: 5.096,
            time: "2020-02-03T00:30:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-03T00:40:00.000Z",
          },
          {
            reading: 4.743,
            time: "2020-02-03T00:50:00.000Z",
          },
          {
            reading: 4.704,
            time: "2020-02-03T01:00:00.000Z",
          },
          {
            reading: 3.489,
            time: "2020-02-03T01:10:00.000Z",
          },
          {
            reading: 4.822,
            time: "2020-02-03T01:20:00.000Z",
          },
          {
            reading: 4.978,
            time: "2020-02-03T01:30:00.000Z",
          },
          {
            reading: 3.802,
            time: "2020-02-03T01:40:00.000Z",
          },
          {
            reading: 4.234,
            time: "2020-02-03T01:50:00.000Z",
          },
          {
            reading: 4.626,
            time: "2020-02-03T02:00:00.000Z",
          },
          {
            reading: 3.724,
            time: "2020-02-03T02:10:00.000Z",
          },
          {
            reading: 3.606,
            time: "2020-02-03T02:20:00.000Z",
          },
          {
            reading: 3.998,
            time: "2020-02-03T02:30:00.000Z",
          },
          {
            reading: 3.959,
            time: "2020-02-03T02:40:00.000Z",
          },
          {
            reading: 3.724,
            time: "2020-02-03T02:50:00.000Z",
          },
          {
            reading: 4.586,
            time: "2020-02-03T03:00:00.000Z",
          },
          {
            reading: 5.802,
            time: "2020-02-03T03:10:00.000Z",
          },
          {
            reading: 5.606,
            time: "2020-02-03T03:20:00.000Z",
          },
          {
            reading: 5.566,
            time: "2020-02-03T03:30:00.000Z",
          },
          {
            reading: 5.37,
            time: "2020-02-03T03:40:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-02-03T03:50:00.000Z",
          },
          {
            reading: 5.174,
            time: "2020-02-03T04:00:00.000Z",
          },
          {
            reading: 6.076,
            time: "2020-02-03T04:10:00.000Z",
          },
          {
            reading: 6.311,
            time: "2020-02-03T04:20:00.000Z",
          },
          {
            reading: 6.272,
            time: "2020-02-03T04:30:00.000Z",
          },
          {
            reading: 6.272,
            time: "2020-02-03T04:40:00.000Z",
          },
          {
            reading: 6.272,
            time: "2020-02-03T04:50:00.000Z",
          },
          {
            reading: 6.429,
            time: "2020-02-03T05:00:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-03T05:10:00.000Z",
          },
          {
            reading: 6.782,
            time: "2020-02-03T05:20:00.000Z",
          },
          {
            reading: 6.938,
            time: "2020-02-03T05:30:00.000Z",
          },
          {
            reading: 7.37,
            time: "2020-02-03T05:40:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-03T05:50:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-03T06:00:00.000Z",
          },
          {
            reading: 6.429,
            time: "2020-02-03T06:10:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-03T06:20:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-03T06:30:00.000Z",
          },
          {
            reading: 7.72,
            time: "2020-02-03T06:40:00.000Z",
          },
          {
            reading: 8,
            time: "2020-02-03T06:50:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-03T07:00:00.000Z",
          },
          {
            reading: 8.55,
            time: "2020-02-03T07:10:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-03T07:20:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-03T07:30:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-03T07:40:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-02-03T07:50:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-03T08:00:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-02-03T08:10:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-02-03T08:20:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-02-03T08:30:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-03T08:40:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-03T08:50:00.000Z",
          },
          {
            reading: 9.84,
            time: "2020-02-03T09:00:00.000Z",
          },
          {
            reading: 10.43,
            time: "2020-02-03T09:10:00.000Z",
          },
          {
            reading: 9.49,
            time: "2020-02-03T09:20:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-02-03T09:30:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-03T09:40:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-03T09:50:00.000Z",
          },
          {
            reading: 8.98,
            time: "2020-02-03T10:00:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-02-03T10:10:00.000Z",
          },
          {
            reading: 9.8,
            time: "2020-02-03T10:20:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-02-03T10:30:00.000Z",
          },
          {
            reading: 8.9,
            time: "2020-02-03T10:40:00.000Z",
          },
          {
            reading: 8.94,
            time: "2020-02-03T10:50:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-03T11:00:00.000Z",
          },
          {
            reading: 8.66,
            time: "2020-02-03T11:10:00.000Z",
          },
          {
            reading: 8.15,
            time: "2020-02-03T11:20:00.000Z",
          },
          {
            reading: 7.45,
            time: "2020-02-03T11:30:00.000Z",
          },
          {
            reading: 7.64,
            time: "2020-02-03T11:40:00.000Z",
          },
          {
            reading: 7.33,
            time: "2020-02-03T11:50:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-03T12:00:00.000Z",
          },
          {
            reading: 7.92,
            time: "2020-02-03T12:10:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-03T12:20:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-03T12:30:00.000Z",
          },
          {
            reading: 9.02,
            time: "2020-02-03T12:40:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-03T12:50:00.000Z",
          },
          {
            reading: 9.68,
            time: "2020-02-03T13:00:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-02-03T13:10:00.000Z",
          },
          {
            reading: 9.84,
            time: "2020-02-03T13:20:00.000Z",
          },
          {
            reading: 10.23,
            time: "2020-02-03T13:30:00.000Z",
          },
          {
            reading: 10.07,
            time: "2020-02-03T13:40:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-02-03T13:50:00.000Z",
          },
          {
            reading: 10,
            time: "2020-02-03T14:00:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-02-03T14:10:00.000Z",
          },
          {
            reading: 10.82,
            time: "2020-02-03T14:20:00.000Z",
          },
          {
            reading: 10.23,
            time: "2020-02-03T14:30:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-02-03T14:40:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-02-03T14:50:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-02-03T15:00:00.000Z",
          },
          {
            reading: 11.09,
            time: "2020-02-03T15:10:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-02-03T15:20:00.000Z",
          },
          {
            reading: 11.45,
            time: "2020-02-03T15:30:00.000Z",
          },
          {
            reading: 11.6,
            time: "2020-02-03T15:40:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-02-03T15:50:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-02-03T16:00:00.000Z",
          },
          {
            reading: 10.7,
            time: "2020-02-03T16:10:00.000Z",
          },
          {
            reading: 12,
            time: "2020-02-03T16:20:00.000Z",
          },
          {
            reading: 11.68,
            time: "2020-02-03T16:30:00.000Z",
          },
          {
            reading: 11.88,
            time: "2020-02-03T16:40:00.000Z",
          },
          {
            reading: 11.29,
            time: "2020-02-03T16:50:00.000Z",
          },
          {
            reading: 10.39,
            time: "2020-02-03T17:00:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-02-03T17:10:00.000Z",
          },
          {
            reading: 10.74,
            time: "2020-02-03T17:20:00.000Z",
          },
          {
            reading: 10.27,
            time: "2020-02-03T17:30:00.000Z",
          },
          {
            reading: 10.47,
            time: "2020-02-03T17:40:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-02-03T17:50:00.000Z",
          },
          {
            reading: 10.35,
            time: "2020-02-03T18:00:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-02-03T18:10:00.000Z",
          },
          {
            reading: 11.64,
            time: "2020-02-03T18:20:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-02-03T18:30:00.000Z",
          },
          {
            reading: 11.76,
            time: "2020-02-03T18:40:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-02-03T18:50:00.000Z",
          },
          {
            reading: 10.86,
            time: "2020-02-03T19:00:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-02-03T19:10:00.000Z",
          },
          {
            reading: 11.17,
            time: "2020-02-03T19:20:00.000Z",
          },
          {
            reading: 12.15,
            time: "2020-02-03T19:30:00.000Z",
          },
          {
            reading: 11.8,
            time: "2020-02-03T19:40:00.000Z",
          },
          {
            reading: 11.09,
            time: "2020-02-03T19:50:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-02-03T20:00:00.000Z",
          },
          {
            reading: 10.62,
            time: "2020-02-03T20:10:00.000Z",
          },
          {
            reading: 10.7,
            time: "2020-02-03T20:20:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-02-03T20:30:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-02-03T20:40:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-02-03T20:50:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-02-03T21:00:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-02-03T21:10:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-02-03T21:20:00.000Z",
          },
          {
            reading: 10.31,
            time: "2020-02-03T21:30:00.000Z",
          },
          {
            reading: 10,
            time: "2020-02-03T21:40:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-02-03T21:50:00.000Z",
          },
          {
            reading: 10.04,
            time: "2020-02-03T22:00:00.000Z",
          },
          {
            reading: 10.11,
            time: "2020-02-03T22:10:00.000Z",
          },
          {
            reading: 11.02,
            time: "2020-02-03T22:20:00.000Z",
          },
          {
            reading: 11.49,
            time: "2020-02-03T22:30:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-02-03T22:40:00.000Z",
          },
          {
            reading: 10.31,
            time: "2020-02-03T22:50:00.000Z",
          },
          {
            reading: 10.51,
            time: "2020-02-03T23:00:00.000Z",
          },
          {
            reading: 9.76,
            time: "2020-02-03T23:10:00.000Z",
          },
          {
            reading: 9.64,
            time: "2020-02-03T23:20:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-03T23:30:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-03T23:40:00.000Z",
          },
          {
            reading: 8.62,
            time: "2020-02-03T23:50:00.000Z",
          },
          {
            reading: 8.47,
            time: "2020-02-04T00:00:00.000Z",
          },
          {
            reading: 8.11,
            time: "2020-02-04T00:10:00.000Z",
          },
          {
            reading: 7.68,
            time: "2020-02-04T00:20:00.000Z",
          },
          {
            reading: 7.25,
            time: "2020-02-04T00:30:00.000Z",
          },
          {
            reading: 7.84,
            time: "2020-02-04T00:40:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-04T00:50:00.000Z",
          },
          {
            reading: 8,
            time: "2020-02-04T01:00:00.000Z",
          },
          {
            reading: 9.33,
            time: "2020-02-04T01:10:00.000Z",
          },
          {
            reading: 11.21,
            time: "2020-02-04T01:20:00.000Z",
          },
          {
            reading: 12.31,
            time: "2020-02-04T01:30:00.000Z",
          },
          {
            reading: 11.52,
            time: "2020-02-04T01:40:00.000Z",
          },
          {
            reading: 11.56,
            time: "2020-02-04T01:50:00.000Z",
          },
          {
            reading: 11.45,
            time: "2020-02-04T02:00:00.000Z",
          },
          {
            reading: 11.09,
            time: "2020-02-04T02:10:00.000Z",
          },
          {
            reading: 11.64,
            time: "2020-02-04T02:20:00.000Z",
          },
          {
            reading: 10.58,
            time: "2020-02-04T02:30:00.000Z",
          },
          {
            reading: 10.54,
            time: "2020-02-04T02:40:00.000Z",
          },
          {
            reading: 10.78,
            time: "2020-02-04T02:50:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-02-04T03:00:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-02-04T03:10:00.000Z",
          },
          {
            reading: 10.74,
            time: "2020-02-04T03:20:00.000Z",
          },
          {
            reading: 10.66,
            time: "2020-02-04T03:30:00.000Z",
          },
          {
            reading: 11.05,
            time: "2020-02-04T03:40:00.000Z",
          },
          {
            reading: 10.04,
            time: "2020-02-04T03:50:00.000Z",
          },
          {
            reading: 9.96,
            time: "2020-02-04T04:00:00.000Z",
          },
          {
            reading: 8.9,
            time: "2020-02-04T04:10:00.000Z",
          },
          {
            reading: 8.82,
            time: "2020-02-04T04:20:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-04T04:30:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-02-04T04:40:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-02-04T04:50:00.000Z",
          },
          {
            reading: 9.92,
            time: "2020-02-04T05:00:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-02-04T05:10:00.000Z",
          },
          {
            reading: 9.41,
            time: "2020-02-04T05:20:00.000Z",
          },
          {
            reading: 9.25,
            time: "2020-02-04T05:30:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-02-04T05:40:00.000Z",
          },
          {
            reading: 11.41,
            time: "2020-02-04T05:50:00.000Z",
          },
          {
            reading: 9.29,
            time: "2020-02-04T06:00:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-02-04T06:10:00.000Z",
          },
          {
            reading: 9.21,
            time: "2020-02-04T06:20:00.000Z",
          },
          {
            reading: 9.88,
            time: "2020-02-04T06:30:00.000Z",
          },
          {
            reading: 10.15,
            time: "2020-02-04T06:40:00.000Z",
          },
          {
            reading: 9.09,
            time: "2020-02-04T06:50:00.000Z",
          },
          {
            reading: 8.78,
            time: "2020-02-04T07:00:00.000Z",
          },
          {
            reading: 10.04,
            time: "2020-02-04T07:10:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-02-04T07:20:00.000Z",
          },
          {
            reading: 9.37,
            time: "2020-02-04T07:30:00.000Z",
          },
          {
            reading: 9.84,
            time: "2020-02-04T07:40:00.000Z",
          },
          {
            reading: 9.64,
            time: "2020-02-04T07:50:00.000Z",
          },
          {
            reading: 9.6,
            time: "2020-02-04T08:00:00.000Z",
          },
          {
            reading: 10.19,
            time: "2020-02-04T08:10:00.000Z",
          },
          {
            reading: 8.7,
            time: "2020-02-04T08:20:00.000Z",
          },
          {
            reading: 8.58,
            time: "2020-02-04T08:30:00.000Z",
          },
          {
            reading: 9.17,
            time: "2020-02-04T08:40:00.000Z",
          },
          {
            reading: 9.02,
            time: "2020-02-04T08:50:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-04T09:00:00.000Z",
          },
          {
            reading: 8.74,
            time: "2020-02-04T09:10:00.000Z",
          },
          {
            reading: 9.02,
            time: "2020-02-04T09:20:00.000Z",
          },
          {
            reading: 8.27,
            time: "2020-02-04T09:30:00.000Z",
          },
          {
            reading: 8.08,
            time: "2020-02-04T09:40:00.000Z",
          },
          {
            reading: 8.35,
            time: "2020-02-04T09:50:00.000Z",
          },
          {
            reading: 8.04,
            time: "2020-02-04T10:00:00.000Z",
          },
          {
            reading: 7.76,
            time: "2020-02-04T10:10:00.000Z",
          },
          {
            reading: 8.39,
            time: "2020-02-04T10:20:00.000Z",
          },
          {
            reading: 8.43,
            time: "2020-02-04T10:30:00.000Z",
          },
          {
            reading: 7.96,
            time: "2020-02-04T10:40:00.000Z",
          },
          {
            reading: 7.02,
            time: "2020-02-04T10:50:00.000Z",
          },
          {
            reading: 7.06,
            time: "2020-02-04T11:00:00.000Z",
          },
          {
            reading: 6.703,
            time: "2020-02-04T11:10:00.000Z",
          },
          {
            reading: 6.154,
            time: "2020-02-04T11:20:00.000Z",
          },
          {
            reading: 5.527,
            time: "2020-02-04T11:30:00.000Z",
          },
          {
            reading: 5.057,
            time: "2020-02-04T11:40:00.000Z",
          },
          {
            reading: 4.508,
            time: "2020-02-04T11:50:00.000Z",
          },
          {
            reading: 4.508,
            time: "2020-02-04T12:00:00.000Z",
          },
          {
            reading: 4.038,
            time: "2020-02-04T12:10:00.000Z",
          },
          {
            reading: 3.822,
            time: "2020-02-04T12:20:00.000Z",
          },
          {
            reading: 3.41,
            time: "2020-02-04T12:30:00.000Z",
          },
          {
            reading: 3.371,
            time: "2020-02-04T12:40:00.000Z",
          },
          {
            reading: 3.92,
            time: "2020-02-04T12:50:00.000Z",
          },
          {
            reading: 3.332,
            time: "2020-02-04T13:00:00.000Z",
          },
        ],
      },
    ],
    attribution: [
      {
        program: {
          name: "University of Maine",
          website: "http://gyre.umeoce.maine.edu/gomoos.php",
        },
        attribution: "University of Maine",
      },
    ],
    alerts: [],
    mooring_site_desc: "Jordan Basin",
    active: true,
    ndbc_site_id: "44037",
    uscg_light_letter: "M",
    uscg_light_num: "6",
    watch_circle_radius: null,
    programs: [1],
    forecasts: [
      {
        error: "",
        loading: false,
        readings: [
          {
            time: "2020-02-12T05:00:00.000Z",
            reading: 0.20156552,
          },
          {
            time: "2020-02-12T06:00:00.000Z",
            reading: 0.24418882,
          },
          {
            time: "2020-02-12T07:00:00.000Z",
            reading: 0.2734705,
          },
          {
            time: "2020-02-12T08:00:00.000Z",
            reading: 0.2910188,
          },
          {
            time: "2020-02-12T09:00:00.000Z",
            reading: 0.29830545,
          },
          {
            time: "2020-02-12T10:00:00.000Z",
            reading: 0.31519064,
          },
          {
            time: "2020-02-12T11:00:00.000Z",
            reading: 0.4231507,
          },
          {
            time: "2020-02-12T12:00:00.000Z",
            reading: 0.47215548,
          },
          {
            time: "2020-02-12T13:00:00.000Z",
            reading: 0.4933786,
          },
          {
            time: "2020-02-12T14:00:00.000Z",
            reading: 0.51386136,
          },
          {
            time: "2020-02-12T15:00:00.000Z",
            reading: 0.553458,
          },
          {
            time: "2020-02-12T16:00:00.000Z",
            reading: 0.61181843,
          },
          {
            time: "2020-02-12T17:00:00.000Z",
            reading: 0.68514544,
          },
          {
            time: "2020-02-12T18:00:00.000Z",
            reading: 0.730987,
          },
          {
            time: "2020-02-12T19:00:00.000Z",
            reading: 0.74715096,
          },
          {
            time: "2020-02-12T20:00:00.000Z",
            reading: 0.7472564,
          },
          {
            time: "2020-02-12T21:00:00.000Z",
            reading: 0.70445025,
          },
          {
            time: "2020-02-12T22:00:00.000Z",
            reading: 0.61957645,
          },
          {
            time: "2020-02-12T23:00:00.000Z",
            reading: 0.5176776,
          },
          {
            time: "2020-02-13T00:00:00.000Z",
            reading: 0.43221903,
          },
          {
            time: "2020-02-13T01:00:00.000Z",
            reading: 0.37360895,
          },
          {
            time: "2020-02-13T02:00:00.000Z",
            reading: 0.32834172,
          },
          {
            time: "2020-02-13T03:00:00.000Z",
            reading: 0.2966763,
          },
          {
            time: "2020-02-13T04:00:00.000Z",
            reading: 0.2726903,
          },
          {
            time: "2020-02-13T05:00:00.000Z",
            reading: 0.25044215,
          },
          {
            time: "2020-02-13T06:00:00.000Z",
            reading: 0.24504542,
          },
          {
            time: "2020-02-13T07:00:00.000Z",
            reading: 0.3551926,
          },
          {
            time: "2020-02-13T08:00:00.000Z",
            reading: 0.3945924,
          },
          {
            time: "2020-02-13T09:00:00.000Z",
            reading: 0.48065132,
          },
          {
            time: "2020-02-13T10:00:00.000Z",
            reading: 0.58581847,
          },
          {
            time: "2020-02-13T11:00:00.000Z",
            reading: 0.68567955,
          },
          {
            time: "2020-02-13T12:00:00.000Z",
            reading: 0.75821376,
          },
          {
            time: "2020-02-13T13:00:00.000Z",
            reading: 0.7996336,
          },
          {
            time: "2020-02-13T14:00:00.000Z",
            reading: 0.82221955,
          },
          {
            time: "2020-02-13T15:00:00.000Z",
            reading: 0.8271206,
          },
          {
            time: "2020-02-13T16:00:00.000Z",
            reading: 0.81764174,
          },
          {
            time: "2020-02-13T17:00:00.000Z",
            reading: 0.8007812,
          },
          {
            time: "2020-02-13T18:00:00.000Z",
            reading: 0.81063837,
          },
          {
            time: "2020-02-13T19:00:00.000Z",
            reading: 0.8821573,
          },
          {
            time: "2020-02-13T20:00:00.000Z",
            reading: 0.97417957,
          },
          {
            time: "2020-02-13T21:00:00.000Z",
            reading: 1.0147204,
          },
          {
            time: "2020-02-13T22:00:00.000Z",
            reading: 1.008955,
          },
          {
            time: "2020-02-13T23:00:00.000Z",
            reading: 0.9885929,
          },
          {
            time: "2020-02-14T00:00:00.000Z",
            reading: 0.96682936,
          },
          {
            time: "2020-02-14T01:00:00.000Z",
            reading: 0.9381642,
          },
          {
            time: "2020-02-14T02:00:00.000Z",
            reading: 0.8818195,
          },
          {
            time: "2020-02-14T03:00:00.000Z",
            reading: 0.8384474,
          },
          {
            time: "2020-02-14T04:00:00.000Z",
            reading: 0.8351069,
          },
          {
            time: "2020-02-14T05:00:00.000Z",
            reading: 0.86592317,
          },
          {
            time: "2020-02-14T06:00:00.000Z",
            reading: 0.85886353,
          },
          {
            time: "2020-02-14T07:00:00.000Z",
            reading: 0.8031491,
          },
          {
            time: "2020-02-14T08:00:00.000Z",
            reading: 0.7066663,
          },
          {
            time: "2020-02-14T09:00:00.000Z",
            reading: 0.6274075,
          },
          {
            time: "2020-02-14T10:00:00.000Z",
            reading: 0.58947283,
          },
          {
            time: "2020-02-14T11:00:00.000Z",
            reading: 0.5943019,
          },
          {
            time: "2020-02-14T12:00:00.000Z",
            reading: 0.63198084,
          },
          {
            time: "2020-02-14T13:00:00.000Z",
            reading: 0.6571148,
          },
          {
            time: "2020-02-14T14:00:00.000Z",
            reading: 0.6736632,
          },
          {
            time: "2020-02-14T15:00:00.000Z",
            reading: 0.7649672,
          },
          {
            time: "2020-02-14T16:00:00.000Z",
            reading: 0.9343899,
          },
          {
            time: "2020-02-14T17:00:00.000Z",
            reading: 1.1294929,
          },
          {
            time: "2020-02-14T18:00:00.000Z",
            reading: 1.2007008,
          },
          {
            time: "2020-02-14T19:00:00.000Z",
            reading: 1.1699296,
          },
          {
            time: "2020-02-14T20:00:00.000Z",
            reading: 1.1131436,
          },
          {
            time: "2020-02-14T21:00:00.000Z",
            reading: 1.0778192,
          },
          {
            time: "2020-02-14T22:00:00.000Z",
            reading: 1.0795597,
          },
          {
            time: "2020-02-14T23:00:00.000Z",
            reading: 1.1256485,
          },
          {
            time: "2020-02-15T00:00:00.000Z",
            reading: 1.1785005,
          },
          {
            time: "2020-02-15T01:00:00.000Z",
            reading: 1.2064724,
          },
          {
            time: "2020-02-15T02:00:00.000Z",
            reading: 1.220472,
          },
          {
            time: "2020-02-15T03:00:00.000Z",
            reading: 1.2522255,
          },
          {
            time: "2020-02-15T04:00:00.000Z",
            reading: 1.3110608,
          },
          {
            time: "2020-02-15T05:00:00.000Z",
            reading: 1.3926048,
          },
        ],
        source: {
          slug: "bedford_ww3_wave_height",
          forecast_type: "Wave Height",
          name: "Bedford Institute Wave Model - Height",
          description: "Wave Height from the Bedford Institute Wave Model",
          source_url: "http://www.neracoos.org/erddap/griddap/WW3_72_GulfOfMaine_latest.html",
          point_forecast: "/api/forecasts/bedford_ww3_wave_height/",
          units: "meters",
        },
      },
    ],
  },
}

// cast dates back to being Date types
export const platform: PlatformFeatureWithDatasets = {
  ...platform_base,
  properties: {
    ...platform_base.properties,
    readings: platform_base.properties.readings.map((data_type) => ({
      ...data_type,
      readings: data_type.readings.map((reading) => ({
        ...reading,
        time: new Date(reading.time),
      })),
    })),
    forecasts: platform_base.properties.forecasts.map((forecast) => ({
      ...forecast,
      readings: forecast.readings.map((reading) => ({
        ...reading,
        time: new Date(reading.time),
      })),
    })),
  },
}

export const forecast_type = "wave_height"

const standard_name = forecastToStandardNames[forecast_type]

const wave_datasets = platform.properties.readings.filter((reading) =>
  standard_name.has(reading.data_type.standard_name),
)

let data: DataTimeSeries[] = wave_datasets.map((dataset) => ({
  name: dataset.data_type.long_name + " observed",
  timeSeries: dataset.readings,
  unit: dataset.data_type.units,
}))

const forecast = platform.properties.forecasts[0]

data.push({
  name: forecast.source.name,
  timeSeries: forecast.readings,
  unit: forecast.source.units,
})

export { data }
