import { DrupalActions } from '@app/Features/Drupal'
import { PlatformDataActions } from '@app/Features/PlatformData'
import { PlatformMapActions } from '@app/Features/PlatformMap'

export type Action = DrupalActions | PlatformMapActions | PlatformDataActions
