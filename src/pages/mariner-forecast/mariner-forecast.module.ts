import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarinerForecastPage } from './mariner-forecast';

@NgModule({
  declarations: [
    MarinerForecastPage,
  ],
  imports: [
    IonicPageModule.forChild(MarinerForecastPage),
  ],
})
export class MarinerForecastPageModule {}
