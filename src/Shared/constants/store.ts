import { ERDDAPStoreState } from "Features/ERDDAP"
import { WagtailStoreState } from "Features/WagtailApi"

/**
 * Global Redux store state
 */
export interface StoreState {
  erddap: ERDDAPStoreState
  wagtail: WagtailStoreState
}
