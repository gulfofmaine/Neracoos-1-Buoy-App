import { 
    PlatformData, 
    PlatformJson,
    PlatformJsonTimeSeriesReading 
} from './types'


/**
 * Transform platform json into usuable platform data.
 * 
 * @param json Data returned from [NERACOOS.org](http://neracoos.org/data/json/buoyrecentdata.php?platform=SMB-MO-05&mp=no&hb=168&tsdt=all) to reshape.
 * @returns Data that typescript is much happier with and easier to filter and display.
 */
export function transformPlatformJson(json: PlatformJson): PlatformData[] {
    const platformData: PlatformData[] = []

    for (const dataTypeName in json.data_types) {
        if (json.data_types.hasOwnProperty(dataTypeName)) {

            const data = json.data_types[dataTypeName]

            // tslint:disable-next-line:forin
            for (const index in data.depth) {
                platformData.push({
                    data: [],
                    data_type: dataTypeName,
                    depth: parseFloat(data.depth[index]),
                    unit: data.uom,
                })
            }
        }

        const timeSeries = json['time_series-' + dataTypeName]

        for (const timeString in timeSeries) {
            if (timeSeries.hasOwnProperty(timeString)) {
                const readings = timeSeries[timeString]
                const time = new Date(timeString)
                
                // tslint:disable-next-line:forin
                for (const index in readings) {
                    const reading = readings[index] as PlatformJsonTimeSeriesReading
                    
                    const depth = parseFloat(reading.depth)
                    const value = parseFloat(reading.reading)

                    platformData.forEach((dataType) => {
                        if (dataType.depth === depth && dataType.data_type === dataTypeName) {
                            dataType.data.push({time, reading: value})
                        }
                    })
                }
            }
        }

        
    }

    return platformData
}