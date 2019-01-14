/**
 * Types related to the ERDDAP service
 */

import { Feature } from "@turf/helpers"

import { ReadingTimeSeries } from "@app/Shared/timeSeries"

export interface ERDDAPStoreState {
  errorMessage?: string
  loading: boolean
  platforms: PlatformFeatureWithDatasets[]
  forecasts: ForecastStore
}

export interface ForecastStore {
  forecasts: ForecastSource[]
  loading: boolean
  errorMessage?: string
}

export const initialStoreState: ERDDAPStoreState = {
  forecasts: {
    forecasts: [],
    loading: false
  },
  loading: false,
  platforms: []
}

export interface PlatformFeatureCollection {
  features: PlatformFeature[]
}

export type PlatformFeature = Feature & {
  properties: PlatformProperties & {
    readings: PlatformTimeSeries[]
  }
}

export type PlatformFeatureWithDatasets = Feature & {
  properties: PlatformProperties & {
    readings: PlatformDataset[]
    forecasts: ForecastDataset[]
  }
}

export interface PlatformProperties {
  alerts: PlatformAlert[]
  attribution: PlatformAttribution[]
  mooring_site_desc: string
  nbdc_site_id?: string
  // uscg_light_letter?: string
  // watch_circle_radius?: number
}

export interface PlatformAlert {
  start_time: string
  end_time?: string
  message: string
  level: string
}

export interface PlatformTimeSeries {
  value?: number
  time?: string
  depth: number
  data_type: DataType
  server: string
  variable: string
  dataset: string
  start_time: string
  constraints: {
    [key: string]: string | number
  }
}

export type PlatformDataset = PlatformTimeSeries & {
  loading: boolean
  loadStartTimes: Date[]
  error: string
  readings: ReadingTimeSeries[]
}

export enum ForecastType {
  waveHeight = "Wave Height",
  wavePeriod = "Wave Period",
  waveDirection = "Wave Direction",
  airTemperature = "Air Temperature",
  windSpeed = "Wind Speed",
  windDirection = "Wind Direction"
}

export interface ForecastSource {
  slug: string
  forecast_type: string
  name: string
  description: string
  source_url: string
  point_forecast: string
}

export interface ForecastDataset {
  source: ForecastSource
  loading: boolean
  error: string
  readings: ReadingTimeSeries[]
}

export type ForecastJson = ForecastSource & {
  latitude: number
  longitude: number
  time_series: ReadingTimeSeries[]
}

export interface FetchGroup {
  server: string
  dataset: string
  constraints: {
    [key: string]: string | number
  }
  datasets: PlatformDataset[]
}

export interface PlatformAttribution {
  program: PlatformProgram
  attribution: string
}

export interface PlatformProgram {
  name: string
  website: string
}

export interface DataType {
  standard_name: string
  short_name: string
  long_name: string
  units: string
}
