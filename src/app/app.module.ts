import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular'
import { APP_BASE_HREF } from '@angular/common'

import { GMRIErrorHandler } from '../helpers/errorhandling/errorhandler'

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { ListPage } from '../pages/list/list';

import { HomePageModule } from '../pages/home/home.module'
import { MarinerAboutPageModule } from '../pages/mariner-about/mariner-about.module'
import { BuoydataMapPageModule } from '../pages/buoydata-map/buoydata-map.module'
import { MarinerForecastPageModule } from '../pages/mariner-forecast/mariner-forecast.module'
import { MarinerTabsPageModule } from '../pages/mariner-tabs/mariner-tabs.module'
import { NeracoosTabsPageModule } from '../pages/neracoos-tabs/neracoos-tabs.module'
import { PlatformDataPageModule } from '../pages/platform-data/platform-data.module'
import { PlatformDatasetsGraphPageModule } from '../pages/platform-datasets-graph/platform-datasets-graph.module'
import { PlatformDesignerGraphPageModule } from '../pages/platform-designer-graph/platform-designer-graph.module'
import { PlatformGraphPageModule } from '../pages/platform-graph/platform-graph.module'
import { PlatformTabsPageModule } from '../pages/platform-tabs/platform-tabs.module'
import { WaveGraphPageModule } from '../pages/wave-graph/wave-graph.module'

import { BuoyDataProvider } from '../providers/buoy-data/buoy-data';
import { MappingProvider } from '../providers/mapping/mapping';
import { WaveProvider } from '../providers/wave/wave';
import { AppConfig } from '../providers/appconfig/appconfig';
import { GMRIUnits } from "../gmri/data/gmri-units";
import { HttpModule} from '@angular/http';
import { JsonpModule} from '@angular/http';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WaterlevelProvider } from '../providers/waterlevel/waterlevel';
// import { ChartModule } from 'angular2-highcharts';
import { MetProvider } from '../providers/met/met';
import { ChartModule } from 'angular2-highcharts';
// import * as highcharts from 'highcharts'
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'

import exporting from 'highcharts/modules/exporting.src';
import windbarb from 'highcharts-windbarb/windbarb.js';

export declare var require: any;


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ exporting, windbarb ];
}

export function highchartsFactory() {
  const hc = require('highcharts/highstock')
  const dd = require('highcharts/modules/drilldown')
  dd(hc)
  return hc
}



@NgModule({
  declarations: [
    MyApp,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'],
      monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                        'Oct', 'Nov', 'Dec'],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
      dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    }),
    HttpModule,
    HttpClientModule,
    JsonpModule,
    HomePageModule,
    MarinerAboutPageModule,
    BuoydataMapPageModule,
    MarinerForecastPageModule,
    MarinerTabsPageModule,
    NeracoosTabsPageModule,
    PlatformDataPageModule,
    PlatformDatasetsGraphPageModule,
    PlatformDesignerGraphPageModule,
    PlatformGraphPageModule,
    PlatformTabsPageModule,
    WaveGraphPageModule,

    IonicStorageModule.forRoot(),
    ChartModule
  ],
  exports: [
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GMRIErrorHandler },
    { provide: APP_BASE_HREF, useValue: '/'},
    BuoyDataProvider,
    MappingProvider,
    WaveProvider,
    GMRIUnits,
    WaterlevelProvider,
    AppConfig,
    DatePipe,
    HttpClient,
    MetProvider,

    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ]
})
export class AppModule {}
