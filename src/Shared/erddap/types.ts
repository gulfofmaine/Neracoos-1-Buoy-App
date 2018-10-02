export interface GriddapTable {
    columnNames: string[]
    columnTypes: string | number | boolean
    columnUnits: string
    rows: Array<string | number | boolean>
}

export interface GriddapJson {
    table: GriddapTable
}
