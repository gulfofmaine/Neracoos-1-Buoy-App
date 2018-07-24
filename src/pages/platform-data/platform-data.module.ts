import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDataPage } from './platform-data';
//import { ChartModule, HIGHCHARTS_MODULES  } from 'angular-highcharts';
//import * as highcharts from 'highcharts';
//import * as more from 'highcharts/highcharts-more.src';
//import * as exporting from 'highcharts/modules/exporting.src';
//import * as highstock from 'highcharts/modules/stock.src';

@NgModule({
  declarations: [
    PlatformDataPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDataPage)//,
    //ChartModule
  ],
  exports: [
    PlatformDataPage
  ],
  schemas: [ NO_ERRORS_SCHEMA  ],
//providers: [
//    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highcharts, highstock ] }
    // { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
//  ]
})
export class PlatformDataPageModule {}
