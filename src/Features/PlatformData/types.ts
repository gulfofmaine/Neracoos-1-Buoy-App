/**
 * Platform data common types
 */

import { ErddapDataset } from '@app/Shared/erddap'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'


/** Redux store state */
export interface PlatformDataStoreState {

    /** ERDDAP dataset metadata */
    datasetInfo: ErddapDatasetInfo[]

    /** NERACOOS platforms */
    platforms: Platform[]
}

/** Initial redux store state */
export const initialStoreState: PlatformDataStoreState = {
    datasetInfo: [],
    platforms: []
}


/** Data loading status */
export enum Status {
    Loaded = 'LOADED',
    Loading = 'LOADING',
    Error = 'ERROR'
}

/** Platform info and data. */
export interface Platform {
    /** Platform ID */
    id: string

    /** Loading status */
    status: Status
    error_message: string

    /** NERACOOS data types */
    data_types: PlatformData[]

    /** ERDDAP dataset data */
    forecasts_types: DatasetData[]
}

/** NERACOOS platform data types */
export interface PlatformData {
    data_type: string
    unit: string
    depth: number
    data: ReadingTimeSeries[]
}

/** ERDDAP dataset and related field to select */
export interface ErddapDatasetAndField {
    /** Dataset including name and server */
    dataset: ErddapDataset
    /** Field to select */
    field: string
    /** Human name of dataset */
    name: string
}

/** ERDDAP dataset metadata */
export type ErddapDatasetInfo = ErddapDataset & {
    /** When does coverage start for the dataset */
    coverageStart: Date
    /** When does coverage end for the dataset */
    coverageEnd: Date
    /** Dataset loading status */
    status: Status
    error_message: string
}

/** Loaded dataset data */
export type DatasetData = PlatformData &  {
    dataset: ErddapDatasetAndField
    status: Status
    error_message: string
}

/** Platform json returned from [NERACOOS.org](http://neracoos.org/data/json/buoyrecentdata.php?platform=SMB-MO-05&mp=no&hb=168&tsdt=all) */
export interface PlatformJsonBase {
    /** Data types, units, and depths */
    data_types: PlatformJsonDataType
    // date
    /** Platform ID */
    platform: string
}

export type PlatformJson = PlatformJsonBase & {
    /** Data types are top level keys with a corresponding time series value */
    [props: string]: PlatformJsonTimeSeries[]
}

interface PlatformJsonDataType {
    /** Data types are keys with corresponding depth and unit object */
    [props: string]: PlatformJsonDataTypeDict
}

interface PlatformJsonDataTypeDict {
    /** Depth of sensors */
    depth: string[]
    /** Units returned */
    uom: string
}


export interface PlatformJsonTimeSeriesReading {
    depth: string
    quality: string
    reading: string
}

interface PlatformJsonTimeSeries {
    [props: string]: PlatformJsonTimeSeriesReading
}


