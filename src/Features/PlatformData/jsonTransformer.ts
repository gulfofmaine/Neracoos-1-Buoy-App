import { 
    PlatformData, 
    PlatformJson 
} from './types'

export function transformPlatformJson(json: PlatformJson): PlatformData[] {
    const platformData: PlatformData[] = []

    // tslint:disable-next-line:no-console
    console.log(json)

    // tslint:disable-next-line:no-debugger
    // debugger

    for (const dataTypeName in json.data_types) {

        // tslint:disable-next-line:no-console
        console.log(dataTypeName)
        if (json.data_types.hasOwnProperty(dataTypeName)) {

            const data = json.data_types[dataTypeName]

            // tslint:disable-next-line:no-console
            console.log(dataTypeName, data)

            // tslint:disable-next-line:forin
            for (const index in data.depth) {
                platformData.push({
                    data: [],
                    data_type: dataTypeName,
                    depth: data.depth[index],
                    unit: data.uom,
                })
            }
        }


    }

    return platformData
}