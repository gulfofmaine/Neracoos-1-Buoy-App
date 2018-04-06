import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformMetadataPage } from './platform-metadata';

@NgModule({
  declarations: [
    PlatformMetadataPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformMetadataPage),
  ],
})
export class PlatformMetadataPageModule {}
