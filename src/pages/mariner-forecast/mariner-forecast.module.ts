import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarinerForecastPage } from './mariner-forecast';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'

export declare var require ;

export function highchartsFactory() {
  return require('highcharts')
}

@NgModule({
  declarations: [
    MarinerForecastPage,
  ],
  imports: [
    IonicPageModule.forChild(MarinerForecastPage),
    ChartModule
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class MarinerForecastPageModule {}
