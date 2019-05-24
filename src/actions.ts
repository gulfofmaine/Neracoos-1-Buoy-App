/**
 * Collected actions from all of the Features.
 */

import { ErddapActions } from "Features/ERDDAP"
import { WagtailActions } from "Features/WagtailApi"

/**
 * Redux action that incorporates all the different possible shapes of the included actions.
 */
export type Action = ErddapActions | WagtailActions
