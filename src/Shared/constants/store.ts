import { RouterState } from "connected-react-router"

import { MapState } from "Features/StatefulMap/types"
import { UnitStoreState } from "Features/Units/types"

/**
 * Global Redux store state
 */
export interface StoreState {
  mapState: MapState
  unit: UnitStoreState
  router: RouterState
}
