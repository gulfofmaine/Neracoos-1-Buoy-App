import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDesignerGraphPage } from './platform-designer-graph';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'


// import { windbarb } from 'highcharts-windbarb';
// import * as highcharts from 'Highcharts';
// import { windbarb } from 'Highcharts';
// import { Highcharts } from 'angular2-highcharts';
/// ('highcharts/highcharts-more')(Highcharts);
// require('highcharts/modules/windbarb')(Highcharts);
export declare var require ;

export function highchartsFactory() {
  return require('highcharts')
}

@NgModule({
  declarations: [
    PlatformDesignerGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDesignerGraphPage),
    // ChartModule
    // ChartModule.forRoot(require('highcharts/highstock'),
                  // require('highcharts-windbarb'))
    ChartModule
  ],
  exports: [
    PlatformDesignerGraphPage
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDesignerGraphPageModule {}
