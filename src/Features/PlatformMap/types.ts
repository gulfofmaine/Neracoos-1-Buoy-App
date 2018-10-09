/**
 * Types for our platform map
 */

import { Feature } from '@turf/helpers'

/**
 * Interface for the JSON returned from [NERACOOS.org](http://www.neracoos.org/data/json/monitoringlocations.php)
 */
export interface PlatformLocationsJson {
    // http://www.neracoos.org/data/json/monitoringlocations.php

    /**
     * The NERACOOS monitoring locations json return with the keys being platform names, 
     * which takes some wrangling to turn into valid GeoJSON (or any other format that TypeScript is really comfortable with).
     */
    [props: string]: PlatformLocation
}

/**
 * Platform object in [monitoring location JSON](http://www.neracoos.org/data/json/monitoringlocations.php).
 */
export interface PlatformLocation {
    /** Theoretically if the platform is active or not. Appears to be manually toggled. */
    active: boolean
    /** Sensors and the depths they are deployed at */
    data_depths: PlatformDataDepths
    /** Sensors and more friendly names */
    data_types: PlatformDataTypes
    /** Latitude in decimal degrees North */
    lat: string
    /** Longitude in decimal degrees East */
    lon: string
    /** Location of platform */
    mooring_site_desc: string
    /** HTML platform info */
    platform_credit: string
    /** Managing program for platform */
    program: string
}

/** Depths that the key sensor can be found at */
export interface PlatformDataDepths {
    /** 
     * Key corresponds to a sensor type, similar to the sensor/data types in data_type keys, 
     * and the array contains the depths that the sensors are deployed at.
     */
    [props: string]: number[]
}

/** Machine sensor name to human name */
export interface PlatformDataTypes {
    /** 
     * Key corresponds to a sensor or data type
     * Value is a more human friendly version of the name
     */
    [props: string]: string
}

/** Sensor information */
export interface SensorName {
    /** Human name of sensor */
    name: string

    /** Machine name of sensor */
    stub: string
}

/** GeoJSON platform feature properties that we are interested in */
export interface PlatformProperties {

    /** Is the platform currently active */
    active: boolean

    /** What program manages the platform */
    program: string

    /** HTML info about the platform */
    platform_credit: string

    /** Where is the platform located */
    mooring_site_desc: string

    /** What is the platform name */
    name: string

    /** What sensors does the platform have */
    sensors: SensorName[]
}


/**
 * PlatformMap Redux Store
 */
export interface PlatformMapStoreState {

    /** Array of platform GeoJSON features */
    platforms: Feature[]

    /** Error message to display if string is not empty */
    errorMessage: string
}

/** Simple interface for GeoJSON geometry */
export interface Geometry {
    type: string
    /** coordinates in longitude, latitude (x, y) format */
    coordinates: number[]
}
