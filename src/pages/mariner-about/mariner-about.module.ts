import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarinerAboutPage } from './mariner-about';

@NgModule({
  declarations: [
    MarinerAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(MarinerAboutPage),
  ],
})
export class MarinerAboutPageModule {}
