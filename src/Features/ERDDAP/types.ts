/**
 * Types related to the ERDDAP service
 */

import { Feature } from "@turf/helpers"

import { ReadingTimeSeries } from "@app/Shared/timeSeries"

export interface ERDDAPStoreState {
  errorMessage?: string
  loading: boolean
  platforms: PlatformFeatureWithDatasets[]
  // platforms: PlatformFeature[]
}

export const initialStoreState: ERDDAPStoreState = {
  loading: false,
  platforms: []
}

// export type PlatformFeatureCollection = FeatureCollection & {
//     features: PlatformFeature[]
// }

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
  }
}

export interface PlatformProperties {
  attribution: PlatformAttribution[]
  mooring_site_desc: string
  nbdc_site_id?: string
  // uscg_light_letter?: string
  // watch_circle_radius?: number
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
