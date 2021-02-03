import * as actionTypes from "./actionTypes"
import { UnitSystem } from "./types"

// Action types

export interface UnitSwitch {
  type: typeof actionTypes.UNIT_SWITCH
  system: UnitSystem
}

export type UnitActions = UnitSwitch

// Action creators

/**
 * Switch display to use designated system of units
 * @param system system of  units to switch display into
 */
export const unitSwitch = (system: UnitSystem): UnitSwitch => {
  return {
    system,
    type: actionTypes.UNIT_SWITCH,
  }
}
