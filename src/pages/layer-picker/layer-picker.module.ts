import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayerPickerPage } from './layer-picker';

@NgModule({
  declarations: [
    LayerPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(LayerPickerPage),
  ],
  exports: [
    LayerPickerPage
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class LayerPickerPageModule {}
