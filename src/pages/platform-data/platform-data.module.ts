import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDataPage } from './platform-data';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'

import { MiniMapComponentModule } from '../../components/mini-map/mini-map.module'



export declare var require ;

export function highchartsFactory() {
  return require('highcharts')
}

@NgModule({
  declarations: [
    PlatformDataPage,
    // MiniMapComponent
  ],
  imports: [
    IonicPageModule.forChild(PlatformDataPage),
    ChartModule,
    MiniMapComponentModule
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDataPageModule {}
