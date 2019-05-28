import { RouterState } from "connected-react-router"

import { ERDDAPStoreState } from "Features/ERDDAP/types"
import { WagtailStoreState } from "Features/WagtailApi/constants"

/**
 * Global Redux store state
 */
export interface StoreState {
  erddap: ERDDAPStoreState
  wagtail: WagtailStoreState
  router: RouterState
}
