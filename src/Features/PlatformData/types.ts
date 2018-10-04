import { ErddapDataset } from '@app/Shared/erddap'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'

export enum Status {
    Loaded = 'LOADED',
    Loading = 'LOADING',
    Error = 'ERROR'
}

export interface PlatformData {
    data_type: string
    unit: string
    depth: number
    data: ReadingTimeSeries[]
}

export type ErddapDatasetInfo = ErddapDataset & {
    coverageStart: Date
    coverageEnd: Date
    status: Status
    error_message: string
}

export type DatasetData = PlatformData & ErddapDataset & {
    status: Status
    error_message: string
}

export interface Platform {
    id: string
    status: Status
    error_message: string
    data_types: PlatformData[]
    forecasts_types: DatasetData[]
}

interface PlatformJsonDataTypeDict {
    depth: string[]
    uom: string
}

interface PlatformJsonDataType {
    [props: string]: PlatformJsonDataTypeDict
}

export interface PlatformJsonTimeSeriesReading {
    depth: string
    quality: string
    reading: string
}

interface PlatformJsonTimeSeries {
    [props: string]: PlatformJsonTimeSeriesReading
}

export interface PlatformJsonBase {
    data_types: PlatformJsonDataType
    // date
    platform: string
}

export type PlatformJson = PlatformJsonBase & {
    [props: string]: PlatformJsonTimeSeries[]
}

export interface PlatformDataStoreState {
    datasetInfo: ErddapDatasetInfo[]
    platforms: Platform[]
}

export const initialStoreState: PlatformDataStoreState = {
    datasetInfo: [],
    platforms: []
}
