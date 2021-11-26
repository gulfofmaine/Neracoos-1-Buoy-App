/**
 * Collected actions from all of the Features.
 */
import { MapStateActions } from "Features/StatefulMap/actions"
import { UnitActions } from "Features/Units/actions"

/**
 * Redux action that incorporates all the different possible shapes of the included actions.
 */
export type Action = MapStateActions | UnitActions
