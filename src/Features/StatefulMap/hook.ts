import { useSelector, useDispatch } from "react-redux"
import type { RView } from "rlayers/RMap"

import { StoreState } from "Shared/constants/store"

import { setView } from "./actions"

/**
 * Hook to handle returning and setting current view
 *
 * @returns current view and setter for view
 */
export const useStatefulView: () => [RView | undefined, (RView) => void] = () => {
  const view = useSelector((state: StoreState) => state.mapState.view)
  const dispatch = useDispatch()

  const handleSetView = (view: RView) => {
    dispatch(setView(view))
  }

  return [view, handleSetView]
}
