/**
 * Collected actions from all of the Features.
 */

import { DrupalActions } from "@app/Features/Drupal"
import { ErddapActions } from "@app/Features/ERDDAP"

/**
 * Redux action that incorporates all the different possible shapes of the included actions.
 */
export type Action = DrupalActions | ErddapActions
