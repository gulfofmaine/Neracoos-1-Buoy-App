import { ERDDAPStoreState } from "@app/Features/ERDDAP"
import { WagtailStoreState } from "@app/Features/WagtailApi"

/**
 * Global Redux store state
 */
export interface StoreState {
  erddap: ERDDAPStoreState
  wagtail: WagtailStoreState
}
