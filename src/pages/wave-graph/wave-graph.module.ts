import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaveGraphPage } from './wave-graph';
import { ChartModule } from 'angular-highcharts';
// import Highcharts from 'highcharts/highstock';

// You can only have .forRoot calls in the root of your app, so in app.module.ts you'll have:
// ChartModule.forRoot(require('highcharts/highstock'))
// declare var require : any;
@NgModule({
  declarations: [
    WaveGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(WaveGraphPage),
    ChartModule
  ],
  exports: [
    WaveGraphPage
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class WaveGraphPageModule {}
