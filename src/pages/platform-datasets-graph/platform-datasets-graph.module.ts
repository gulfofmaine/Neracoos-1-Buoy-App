import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDatasetsGraphPage } from './platform-datasets-graph';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'



export declare var require ;

export function highchartsFactory() {
  return require('highcharts')
}

@NgModule({
  declarations: [
    PlatformDatasetsGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDatasetsGraphPage),
    ChartModule
  ],
  exports: [
    PlatformDatasetsGraphPage
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDatasetsGraphPageModule {}
