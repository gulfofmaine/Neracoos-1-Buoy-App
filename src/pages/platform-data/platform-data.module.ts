import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDataPage } from './platform-data';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'



export declare var require ;

export function highchartsFactory() {
  return require('highcharts')
}

@NgModule({
  declarations: [
    PlatformDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDataPage),
    ChartModule
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDataPageModule {}
