export interface ReadingTimeSeries {
    time: Date
    reading: number
}

export interface DataTimeSeries {
    timeSeries: ReadingTimeSeries[]
    name: string
    unit: string
}
