import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformSummaryPage } from './platform-summary';

@NgModule({
  declarations: [
    PlatformSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformSummaryPage),
  ],
})
export class PlatformSummaryPageModule {}
