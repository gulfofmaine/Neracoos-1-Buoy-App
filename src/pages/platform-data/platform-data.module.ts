import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDataPage } from './platform-data';

@NgModule({
  declarations: [
    PlatformDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDataPage),
  ],
})
export class PlatformDataPageModule {}
