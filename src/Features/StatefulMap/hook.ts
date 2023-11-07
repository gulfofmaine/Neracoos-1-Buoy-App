import { useSelector, useDispatch } from "react-redux"
import type { RView } from "rlayers/RMap"

import { RootState } from "../../../app/store"

import { setView } from "./slice"

/**
 * Hook to handle returning and setting current view
 *
 * @returns current view and setter for view
 */
export const useStatefulView: () => [RView | undefined, (RView) => void] = () => {
  const view = useSelector((state: RootState) => state.mapState.view)
  const dispatch = useDispatch()

  const handleSetView = (view: RView) => {
    dispatch(setView(view))
  }

  return [view, handleSetView]
}
