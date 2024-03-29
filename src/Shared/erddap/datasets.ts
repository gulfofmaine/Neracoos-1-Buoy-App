/**
 * The ERDDAP datasets taht we use.
 */

import { DatasetTypes, ErddapDataset } from "./types"

const erddapServers = {
  coastWatch: "https://coastwatch.pfeg.noaa.gov/erddap",
  neracoos: "http://www.neracoos.org/erddap",
}

/**
 * NOAA wave forecast
 */
const NWW3: ErddapDataset = {
  datasetId: "NWW3_Global_Best",
  datasetType: DatasetTypes.grid,
  depth: 0,
  invertLongitude: true,
  name: "NOAA Wave Model",
  server: erddapServers.coastWatch,
}

/**
 * Bedford Institute wave forecast
 */
const WW3: ErddapDataset = {
  datasetId: "WW3_72_GulfOfMaine_latest", // 'WW3_GulfOfMaine_latest',
  datasetType: DatasetTypes.grid,
  invertLongitude: false,
  name: "Bedford Institute Wave Model",
  server: erddapServers.neracoos,
}

export const datasets = {
  NWW3,
  WW3,
}
