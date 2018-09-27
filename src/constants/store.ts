import { DrupalStoreState } from '@app/Features/Drupal'
import { PlatformDataStoreState } from '@app/Features/PlatformData'
import { PlatformMapStoreState } from '@app/Features/PlatformMap'

export interface StoreState {
    drupal: DrupalStoreState,
    platformData: PlatformDataStoreState,
    platformMap: PlatformMapStoreState
}
