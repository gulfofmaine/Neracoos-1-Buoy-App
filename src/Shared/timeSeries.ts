/**
 * Common time series types.
 */

/**
 * A single time series reading.
 */
export interface ReadingTimeSeries {
    time: Date
    reading: number
}

/**
 * A collection of time series readings with an associated name and unit.
 */
export interface DataTimeSeries {
    timeSeries: ReadingTimeSeries[]
    name: string
    unit: string
}
