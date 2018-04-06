import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformTabsPage } from './platform-tabs';

@NgModule({
  declarations: [
    PlatformTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformTabsPage),
  ],
})
export class PlatformTabsPageModule {}
