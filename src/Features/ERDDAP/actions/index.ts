/**
 * ERDDAP related actions and functions
 */
import { ErddapDatasetActions } from "./dataset"
import { ErddapPlatformActions } from "./platform"

export type ErddapActions = ErddapPlatformActions | ErddapDatasetActions

export { erddapDatasetsOrganizeLoadGroups } from "./dataset"
export { erddapPlatformLoad } from "./platform"
