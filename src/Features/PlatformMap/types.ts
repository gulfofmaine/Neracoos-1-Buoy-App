import { Feature } from '@turf/helpers'

export interface PlatformLocationsJson {
    // http://www.neracoos.org/data/json/monitoringlocations.php
    [props: string]: PlatformLocation
}

export interface PlatformDataDepths {
    [props: string]: number[]
}

export interface PlatformDataTypes {
    [props: string]: string
}

export interface SensorName {
    name: string
    stub: string
}

export interface PlatformProperties {
    active: boolean
    program: string
    platform_credit: string
    mooring_site_desc: string
    name: string
    sensors: SensorName[]
}

export interface PlatformLocation {
    active: boolean
    data_depths: PlatformDataDepths
    data_types: PlatformDataTypes
    lat: string
    lon: string
    mooring_site_desc: string
    platform_credit: string
    program: string
}

export interface PlatformMapStoreState {
    platforms: Feature[]
    errorMessage: string
}

export interface Geometry {
    type: string
    coordinates: number[]
}
