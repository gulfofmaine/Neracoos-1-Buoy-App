/**
 * Types related to the ERDDAP service
 */

import type { Feature } from "geojson"

import { ReadingTimeSeries } from "Shared/timeSeries"

export interface PlatformFeatureCollection {
  features: PlatformFeature[]
}

export type PlatformFeature = Feature & {
  id: string
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
  station_name?: string
  // uscg_light_letter?: string
  // watch_circle_radius?: number
}

export interface PlatformAlert {
  start_time: string
  end_time?: string
  message: string
  level: string
}

export type TimeSeriesType = "Prediction" | "Observation" | "Forecast" | "Climatology"

export interface Tides {
  tide: "high" | "low"
  time: string
  value: number
}

export interface NextTides {
  tides: Tides[]
  name: "string" | null
  type: TimeSeriesType
}

export interface ExtremaValuesType {
  max?: {
    time: string
    value: number
  }
  min?: {
    time: string
    value: number
  }
  tides?: Tides[]
}

export interface PlatformTimeSeries {
  value?: number
  time?: string
  depth?: number
  data_type: DataType
  server: string
  cors_proxy_url?: string
  variable: string
  dataset: string
  start_time: string
  flood_levels: FloodLevels[]
  datum_offsets: DatumOffsets
  constraints: {
    [key: string]: string | number
  }
  highlighted: "No" | "Before" | "After"
  type: TimeSeriesType
  extrema: boolean
  extrema_values?: ExtremaValuesType
  dataset_public_name: string | null
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
  windDirection = "Wind Direction",
}

export interface ForecastSource {
  slug: string
  forecast_type: string
  name: string
  description: string
  source_url: string
  point_forecast: string
  units: string
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
  datasets: PlatformTimeSeries[]
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
  short_name?: string
  long_name: string
  units: string
}

export interface FloodLevels {
  name: string
  min_value: number
  description: string
}

export interface FloodThreshold {
  minValue: number
  maxValue: number
}

export enum Datums {
  NAVD88 = "navd88",
  MHHW = "datum_mhhw_meters",
  MHW = "datum_mhw_meters",
  MLLW = "datum_mllw_meters",
  MLW = "datum_mlw_meters",
  MSL = "datum_msl_meters",
  MTL = "datum_mtl_meters",
}
export const DATUM_MLLW_METERS = Datums.MLLW

export type DatumOffsetOptions =
  | "datum_mhhw_meters"
  | "datum_mhw_meters"
  | typeof DATUM_MLLW_METERS
  | "datum_mlw_meters"
  | "datum_msl_meters"
  | "datum_mtl_meters"
  | "navd88"

export interface DatumOffsets {
  datum_mhhw_meters?: number
  datum_mhw_meters?: number
  datum_mllw_meters?: number
  datum_mlw_meters?: number
  datum_msl_meters?: number
  datum_mtl_meters?: number
}
