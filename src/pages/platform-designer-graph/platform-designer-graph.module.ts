import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDesignerGraphPage } from './platform-designer-graph';
import { ChartModule } from 'angular-highcharts';

// import { windbarb } from 'highcharts-windbarb';
// import * as highcharts from 'Highcharts';
// import { windbarb } from 'Highcharts';
// import { Highcharts } from 'angular2-highcharts';
/// ('highcharts/highcharts-more')(Highcharts);
// require('highcharts/modules/windbarb')(Highcharts);
// declare var require ;

@NgModule({
  declarations: [
    PlatformDesignerGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDesignerGraphPage),
    ChartModule,
    //ChartModule.forRoot(require('highcharts/highstock'),
     //             require('highcharts-windbarb'))
  ],
  exports: [
    PlatformDesignerGraphPage
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDesignerGraphPageModule {}
