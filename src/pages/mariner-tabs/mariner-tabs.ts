import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { BuoydataMapPage } from '../buoydata-map/buoydata-map'
import { PlatformDataPage } from '../platform-data/platform-data';
import { MarinerForecastPage } from '../mariner-forecast/mariner-forecast';
import { PlatformDatasetsGraphPage } from '../platform-datasets-graph/platform-datasets-graph';
import { PlatformDesignerGraphPage } from '../platform-designer-graph/platform-designer-graph';
import { MarinerAboutPage } from '../mariner-about/mariner-about';
/**
 * Generated class for the MarinerTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var require;
 require('highcharts-windbarb');

@Component({
  selector: 'page-mariner-tabs',
  templateUrl: './mariner-tabs.html',
})
export class MarinerTabsPage {

  tab1Root = PlatformDataPage;
  tab2Root = MarinerForecastPage;
  tab3Root = PlatformDatasetsGraphPage;
  tab4Root = PlatformDesignerGraphPage;
  tab5Root = BuoydataMapPage;
  tab6Root = MarinerAboutPage;
  
  error_msg_array:any = [] ;
  error_message: string ;
  tabsIndex: number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public appConfig: AppConfig,
          public waveService: WaveProvider,
          public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarinerTabsPage');
  }

  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_data_menu') ;
    // this.appConfig.setTabSelected("graph");
    if ( this.waveService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.waveDisplayedErrorMessage == false ) {
          this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
      } else {
          // this.menuCtrl.open('right');
      }
    } else {
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            if ( this.appConfig.getPlatformName() != undefined ) {
                this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
            } else {
                // this.menuCtrl.open('right');
            }
            break;
          case "forecast_data_error":
            this.appConfig.setErrorMessage(event_obj.error_msg);
            this.error_msg_array = [] ;

            if (event_obj.error.message != undefined) {
              let pos: number = event_obj.error.message.search("Unexpected token" );
              this.error_msg_array.push(event_obj.error.message) ;
              let msg: string = event_obj.error.message ;
              if ( pos == 0 ) {
                msg += "</br> This messages often indicates a error returned from a web service";
              this.error_msg_array.push("This messages often indicates a error returned from a web service, and unfortunately there may be multiple possiblities.") ;
              }
              for ( let uKey in event_obj.fetch_urls ) {
                msg += "</br>" + event_obj.fetch_urls[uKey];
              }
              this.error_message = msg;
            }
            
            for ( let uKey in event_obj.fetch_urls ) {
              
              this.error_msg_array.push (" ");
              this.error_msg_array.push(event_obj.fetch_urls[uKey]) ;
            }
            // set a flag to tell us to display the choices next time.
            this.appConfig.waveDisplayedErrorMessage = true;
            break;
        }
      });
    }
  }
}
