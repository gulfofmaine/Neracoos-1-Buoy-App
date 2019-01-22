/**
 * ERDDAP related actions and functions
 */
import { ErddapDatasetActions } from "./dataset"
import { ErddapForecastActions } from "./forecast"
import { ErddapForecastMetadataActions } from "./forecast_metadata"
import { ErddapPlatformActions } from "./platform"

export type ErddapActions =
  | ErddapPlatformActions
  | ErddapDatasetActions
  | ErddapForecastMetadataActions
  | ErddapForecastActions

export { erddapDatasetsOrganizeLoadGroups } from "./dataset"
export { forecastLoad } from "./forecast"
export { erddapPlatformLoad } from "./platform"
export { forecastMetadataLoad } from "./forecast_metadata"
