import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuoydataMapPage } from '../pages/buoydata-map/buoydata-map';
import { PlatformTabsPage } from '../pages/platform-tabs/platform-tabs';
import { PlatformDataPage } from '../pages/platform-data/platform-data';
import { PlatformGraphPage } from '../pages/platform-graph/platform-graph';
import { PlatformDatasetsGraphPage } from '../pages/platform-datasets-graph/platform-datasets-graph';
import { PlatformDesignerGraphPage } from '../pages/platform-designer-graph/platform-designer-graph';
import { WaveGraphPage } from '../pages/wave-graph/wave-graph';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { ChartModule } from 'angular2-highcharts';
import { MetProvider } from '../providers/met/met';

declare var require: any;
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuoydataMapPage,
    PlatformTabsPage,
    PlatformDataPage,
    PlatformGraphPage,
    PlatformDatasetsGraphPage,
    PlatformDesignerGraphPage,
    ListPage,
    WaveGraphPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    JsonpModule,
    IonicStorageModule.forRoot(),
    ChartModule.forRoot(require('highcharts/highstock'))
  ],
  exports: [
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuoydataMapPage,
    PlatformTabsPage,
    PlatformDataPage,
    PlatformGraphPage,
    PlatformDatasetsGraphPage,
    PlatformDesignerGraphPage,
    ListPage,
    WaveGraphPage
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
