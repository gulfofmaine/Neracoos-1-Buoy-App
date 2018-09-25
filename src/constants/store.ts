import { DrupalStoreState } from '@app/Features/Drupal'
import { PlatformMapStoreState } from '@app/Features/PlatformMap'

export interface StoreState {
    drupal: DrupalStoreState,
    platformMap: PlatformMapStoreState
}
