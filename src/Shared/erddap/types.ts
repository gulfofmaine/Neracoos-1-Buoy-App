/**
 * Types for interacting with ERDDAP data
 */

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
  grid = "griddap",
  table = "tabledap"
}

export interface ErddapDataset {
  name: string
  datasetId: string
  datasetType: DatasetTypes
  depth?: number
  invertLongitude: boolean
  server: string
}

export interface Constraints {
  [key: string]: string | number
}

export interface ErddapJson {
  table: {
    columnNames: string[]
    columnTypes: string[]
    columnUnits: string[]
    rows: Array<Array<number | string>>
  }
}
