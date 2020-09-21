/**
 * Hooks to connect the current unit system
 */
import { useSelector } from "react-redux"

import { StoreState } from "Shared/constants/store"

const currentUnitSystem = (state: StoreState) => state.unit.system

/**
 * Return the current unit system that is connected to Redux updates
 */
export const useUnitSystem = () => useSelector(currentUnitSystem)
