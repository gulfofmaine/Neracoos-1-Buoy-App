/**
 * Collected actions from all of the Features.
 */

import { LocationChangeAction } from "connected-react-router"

import { UnitActions } from "Features/Units/actions"

/**
 * Redux action that incorporates all the different possible shapes of the included actions.
 */
export type Action = LocationChangeAction | UnitActions
