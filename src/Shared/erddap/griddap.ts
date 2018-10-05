import { round } from '@app/Shared/math'
import { shortIso } from '@app/Shared/time'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'

import { 
    ErddapDataset,
    GriddapTable 
} from './types'

export function extractColumn(griddapResponse: GriddapTable, columnName: string): ReadingTimeSeries[] {
    const { rows, columnNames } = griddapResponse
    const columnIndex = columnNames.indexOf(columnName)

    const data: ReadingTimeSeries[] = []

    rows.forEach((row) => {
        data.push({time: new Date(row[0]), reading: row[columnIndex]})
    })

    return data
}

export function metadataValue(griddapResponse: GriddapTable, metadataField: string): string | number | boolean {
    const { rows } = griddapResponse

    const index = rows.map((r) => r[2]).indexOf(metadataField)

    return rows[index][4]
}

export function erddapUrl(dataset: ErddapDataset, lat: number, lon: number, field: string, startDate: Date, endDate: Date): string {
    /*
    http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?hs
    [( 2018-10-06T00:00:00Z):1:(2018-10-06T00:00:00Z)][(40.05):1:(40.05)][(-63.05):1:(-63.05)]

    http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?hs
    [(2018-10-04):1:(2018-10-06T00:00:00Z)]
    [(40.05):1:(40.05)][(-63.05):1:(-63.05)]
    */

    if (dataset.invertLongitude) {
        lon = 360 + lon
    }

    return dataset.server + '/griddap/' + dataset.datasetId + '.json?' + field +
        '[(' + shortIso(startDate) + '):1:(' + shortIso(endDate) + ')]' +
        (dataset.depth !== undefined ? '[(' + round(dataset.depth!, 1) + '):1:(' + round(dataset.depth!, 1) + ')]' : '') +
        '[(' + lat + '):1:(' + lat + ')][(' + lon + '):1:(' + lon + ')]'
}
