/**
 * Collected actions from all of the Features.
 */

import { ErddapActions } from "@app/Features/ERDDAP"
import { WagtailActions } from "@app/Features/WagtailApi"

/**
 * Redux action that incorporates all the different possible shapes of the included actions.
 */
export type Action = ErddapActions | WagtailActions
