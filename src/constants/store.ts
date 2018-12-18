import { DrupalStoreState } from '@app/Features/Drupal'
import { ERDDAPStoreState } from '@app/Features/ERDDAP'
import { PlatformDataStoreState } from '@app/Features/PlatformData'
import { PlatformMapStoreState } from '@app/Features/PlatformMap'

/**
 * Global Redux store state
 */
export interface StoreState {
    drupal: DrupalStoreState,
    erddap: ERDDAPStoreState,
    platformData: PlatformDataStoreState,
    platformMap: PlatformMapStoreState
}
