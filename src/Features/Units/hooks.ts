/**
 * Hooks to connect the current unit system
 */
import { useSelector } from "react-redux"

import { RootState } from "../../../app/store"

const currentUnitSystem = (state: RootState) => state.unit.system

/**
 * Return the current unit system that is connected to Redux updates
 */
export const useUnitSystem = () => useSelector(currentUnitSystem)
