import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarinerTabsPage } from './mariner-tabs';

@NgModule({
  declarations: [
    MarinerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MarinerTabsPage),
  ],
})
export class MarinerTabsPageModule {}
