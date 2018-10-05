export interface GriddapTable {
    columnNames: string[]
    columnTypes: string | number | boolean
    columnUnits: string
    rows: Array<string | number | boolean>
}

export interface GriddapJson {
    table: GriddapTable
}

export enum DatasetTypes {
    grid = 'griddap',
    table = 'tabledap'
}

export interface ErddapDataset {
    datasetId: string
    datasetType: DatasetTypes
    depth?: number
    invertLongitude: boolean
    server: string
}
