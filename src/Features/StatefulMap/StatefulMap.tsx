/**
 * Connect the basemap to Redux to track view state
 */
import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { BaseMap, BaseMapProps, MapView } from "components/Map"
import { StoreState } from "Shared/constants/store"

import { setView } from "./actions"

type Props = Omit<BaseMapProps, "onViewChange" | "mapView">

/**
 * Enhances the BaseMap with view tracking via Redux.
 *
 * @param props All of the props from BaseMap except mapView and onViewChange
 */
export const StatefulMap: React.FC<Props> = (props: Props) => {
  const view = useSelector((state: StoreState) => state.mapState.view)
  const dispatch = useDispatch()

  /** When the view changes, dispatch a Redux action with the updated view */
  const handleViewChange = (view: MapView) => {
    dispatch(setView(view))
  }

  return <BaseMap mapView={view} onViewChange={handleViewChange} {...props} />
}
