/**
 * Tools for interacting with ERDDAP gridded datasets.
 */

import { round } from "Shared/math"
import { shortIso } from "Shared/time"
import { ReadingTimeSeries } from "Shared/timeSeries"

import { ErddapDataset, GriddapTable } from "./types"

/**
 * Griddap returns multiple columns for every query, yet often you only are looking for a single one.
 * This returns a time series with just your selected column of data.
 *
 * @param griddapResponse JSON table from ERDDAP.
 * @param columnName Column name of data to extract.
 * @returns Time series with the given column.
 */
export function extractColumn(griddapResponse: GriddapTable, columnName: string): ReadingTimeSeries[] {
  const { rows, columnNames } = griddapResponse
  const columnIndex = columnNames.indexOf(columnName)

  const data: ReadingTimeSeries[] = []

  rows.forEach((row) => {
    data.push({ time: new Date(row[0]), reading: row[columnIndex] })
  })

  return data
}

/**
 * ERDDAP shoehorns metadata into similar responses to it's normal time series,
 * so it takes some creativity to extract data.
 *
 * @param griddapResponse JSON table from ERDDAP.
 * @param metadataField Field that we are looking to return from the metadata.
 * @returns Value of metadata field.
 */
export function metadataValue(griddapResponse: GriddapTable, metadataField: string): string | number | boolean {
  const { rows } = griddapResponse

  const index = rows.map((r) => r[2]).indexOf(metadataField)

  return rows[index][4]
}

/**
 * Creates a formatted URL for a simple ERDDAP grid query.
 *
 * @param dataset Dataset that we are looking to query.
 * @param lat Latitude North.
 * @param lon Longitude East.
 * @param field Field that we are looking for.
 * @param startDate Date to start the query.
 * @param endDate Date to end the query.
 * @returns URL string for ERDDAP json query.
 */
export function erddapUrl(
  dataset: ErddapDataset,
  lat: number,
  lon: number,
  field: string,
  startDate: Date,
  endDate: Date,
): string {
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

  return (
    dataset.server +
    "/griddap/" +
    dataset.datasetId +
    ".json?" +
    field +
    "[(" +
    shortIso(startDate) +
    "):1:(" +
    shortIso(endDate) +
    ")]" +
    (dataset.depth !== undefined ? "[(" + round(dataset.depth!, 1) + "):1:(" + round(dataset.depth!, 1) + ")]" : "") +
    "[(" +
    lat +
    "):1:(" +
    lat +
    ")][(" +
    lon +
    "):1:(" +
    lon +
    ")]"
  )
}
