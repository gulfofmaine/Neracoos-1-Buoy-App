export enum Status {
    Loaded = 'LOADED',
    Loading = 'LOADING',
    Error = 'ERROR'
}

export interface ReadingTimeSeries {
    time: Date
    reading: number
}

export interface PlatformData {
    data_type: string
    unit: string
    depth: number
    data: ReadingTimeSeries[]
}

export interface Platform {
    id: string
    status: Status
    error_message: string
    data_types: PlatformData[]
}

interface PlatformJsonDataTypeDict {
    depth: number[]
    uom: string
}

interface PlatformJsonDataType {
    [props: string]: PlatformJsonDataTypeDict
}

interface PlatformJsonTimeSeriesReading {
    depth: number
    quality: number
    reading: number
}

interface PlatformJsonTimeSeries {
    [props: string]: PlatformJsonTimeSeriesReading[]
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
    platforms: Platform[]
}

export const initialStoreState: PlatformDataStoreState = {
    platforms: []
}
