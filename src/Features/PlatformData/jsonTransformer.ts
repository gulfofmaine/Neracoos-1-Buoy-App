import { 
    PlatformData, 
    PlatformJson 
} from './types'

export function transformPlatformJson(json: PlatformJson): PlatformData[] {
    const platformData: PlatformData[] = []

    for (const dataTypeName in json.data_types) {
        if (json.hasOwnProperty(dataTypeName)) {

            const data = json.data_types[dataTypeName]

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