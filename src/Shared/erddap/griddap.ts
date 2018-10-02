import { ReadingTimeSeries } from '@app/Shared/timeSeries'

import { GriddapTable } from './types'

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
