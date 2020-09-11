import { RouterState } from "connected-react-router"

import { ERDDAPStoreState } from "Features/ERDDAP/types"
import { UnitStoreState } from "Features/Units/types"

/**
 * Global Redux store state
 */
export interface StoreState {
  erddap: ERDDAPStoreState
  unit: UnitStoreState
  router: RouterState
}
