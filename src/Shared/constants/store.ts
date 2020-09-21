import { RouterState } from "connected-react-router"

import { UnitStoreState } from "Features/Units/types"

/**
 * Global Redux store state
 */
export interface StoreState {
  unit: UnitStoreState
  router: RouterState
}
