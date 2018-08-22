import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { ListPage } from '../pages/list/list';
import { BuoydataMapPage } from '../pages/buoydata-map/buoydata-map';
import { PlatformTabsPage } from '../pages/platform-tabs/platform-tabs';
import { PlatformDataPage } from '../pages/platform-data/platform-data';
import { PlatformGraphPage } from '../pages/platform-graph/platform-graph';
import { PlatformDatasetsGraphPage } from '../pages/platform-datasets-graph/platform-datasets-graph';
import { PlatformDesignerGraphPage } from '../pages/platform-designer-graph/platform-designer-graph';
import { WaveGraphPage } from '../pages/wave-graph/wave-graph';
import { NeracoosTabsPage } from '../pages/neracoos-tabs/neracoos-tabs';
import { MarinerTabsPage } from '../pages/mariner-tabs/mariner-tabs';
import { MarinerForecastPage } from '../pages/mariner-forecast/mariner-forecast';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePageModule } from '../pages/home/home.module'
import { AboutPageModule, MarinerAboutPageModule } from '../pages/mariner-about/mariner-about.module'
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
import exporting from 'highcharts/modules/exporting.src';
import windbarb from 'highcharts-windbarb/windbarb.js';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ exporting,windbarb ];
}

declare var require: any;
@NgModule({
  declarations: [
    MyApp,
    BuoydataMapPage,
    PlatformTabsPage,
    MarinerTabsPage,
    PlatformDataPage,
    PlatformGraphPage,
    PlatformDatasetsGraphPage,
    PlatformDesignerGraphPage,
    ListPage,
    WaveGraphPage,
    NeracoosTabsPage,
    MarinerTabsPage,
    MarinerForecastPage
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
    IonicStorageModule.forRoot(),
    ChartModule.forRoot(require('highcharts/highstock'))
  ],
  exports: [
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuoydataMapPage,
    PlatformTabsPage,
    PlatformDataPage,
    PlatformGraphPage,
    PlatformDatasetsGraphPage,
    PlatformDesignerGraphPage,
    ListPage,
    WaveGraphPage,
    NeracoosTabsPage,
    MarinerTabsPage,
    MarinerForecastPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BuoyDataProvider,
    MappingProvider,
    WaveProvider,
    GMRIUnits,
    WaterlevelProvider,
    SplashScreen,
    AppConfig,
    DatePipe,
    HttpClient,
    MetProvider
  ]
})
export class AppModule {}
