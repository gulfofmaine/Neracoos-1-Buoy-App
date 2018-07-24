import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformDatasetsGraphPage } from './platform-datasets-graph';
import { ChartModule } from 'angular-highcharts';

// declare var require ;

@NgModule({
  declarations: [
    PlatformDatasetsGraphPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformDatasetsGraphPage),
    ChartModule,
    // ChartModule.forRoot(require('highcharts/highstock'),
    //              require('highcharts-windbarb'))
  ],
  exports: [
    PlatformDatasetsGraphPage
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class PlatformDatasetsGraphPageModule {}
