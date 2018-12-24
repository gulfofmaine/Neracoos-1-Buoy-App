import { proxytizeUrl} from '@app/Shared/proxyUrl'
import { DataTimeSeries } from '@app/Shared/timeSeries'

import { Constraints, ErddapJson } from './types'
// http://www.neracoos.org/erddap/tabledap/N01_aanderaa_all.json
// ?time,current_speed,current_direction,temperature,depth
// &time>=2018-12-15T00:00:00Z&time<=2018-12-22T17:00:00Z




export function constraintsToString(constraints: Constraints): string {
    let constraintStr: string = ""

    for (const key in constraints) {
        if (constraints.hasOwnProperty(key)) {
            constraintStr += '&' + key + constraints[key]
        }
    }

    return constraintStr
}

export function variableString(variables: string[]): string {
    const vars = ['time', ...variables]
    return vars.join(',')
}

export function tabledapUrl(server: string, dataset: string, variables: string[], constraints: Constraints): string {
    return `${server}/tabledap/${dataset}.json?${variableString(variables)}${constraintsToString(constraints)}`
}

export async function fetchDataset(server: string, dataset: string, variables: string[], constraints: Constraints): Promise<ErddapJson> {
    const url = tabledapUrl(server, dataset, variables, constraints)
    const proxyUrl = proxytizeUrl(url)

    // tslint:disable-next-line:no-console
    console.log(url, proxyUrl)

    const result = await fetch(proxyUrl)

    return result.json()
}

export function resultToTimeseries(result: ErddapJson, variables: string[]): DataTimeSeries[] {
    const output: DataTimeSeries[] = []

    const timeIndex = result.table.columnNames.indexOf('time')

    for (const variable of variables) {
        const varIndex = result.table.columnNames.indexOf(variable)

        output.push({
            name: variable,
            timeSeries: result.table.rows.map((row) => ({
                reading: row[varIndex] as number,
                time: new Date(row[timeIndex])
            })),
            unit: result.table.columnUnits[varIndex]
        })
    }

    return output
}
