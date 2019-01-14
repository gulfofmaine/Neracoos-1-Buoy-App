import { DrupalStoreState } from "@app/Features/Drupal"
import { ERDDAPStoreState } from "@app/Features/ERDDAP"

/**
 * Global Redux store state
 */
export interface StoreState {
  drupal: DrupalStoreState
  erddap: ERDDAPStoreState
}
