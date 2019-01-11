/**
 * ERDDAP related actions and functions
 */
import { ErddapDatasetActions } from "./dataset"
import { ErddapForecastMetadataActions } from "./forecast_metadata"
import { ErddapPlatformActions } from "./platform"

export type ErddapActions = ErddapPlatformActions | ErddapDatasetActions | ErddapForecastMetadataActions

export { erddapDatasetsOrganizeLoadGroups } from "./dataset"
export { erddapPlatformLoad } from "./platform"
export { forecastMetadataLoad } from "./forecast_metadata"
