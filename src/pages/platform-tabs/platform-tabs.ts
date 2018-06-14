import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs, MenuController } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { PlatformDataPage } from '../platform-data/platform-data';
import { PlatformGraphPage } from '../platform-graph/platform-graph';
import { PlatformDatasetsGraphPage } from '../platform-datasets-graph/platform-datasets-graph';
import { PlatformDesignerGraphPage } from '../platform-designer-graph/platform-designer-graph';
/**
 * Generated class for the PlatformTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var require;
 require('highcharts-windbarb');

@Component({
  selector: 'page-platform-tabs',
  templateUrl: 'platform-tabs.html',
})
export class PlatformTabsPage {
  @ViewChild("pageTabs") pageTabs: Tabs;

  tab1Root = PlatformDataPage;
  tab2Root = PlatformGraphPage;
  tab3Root = PlatformDatasetsGraphPage;
  tab4Root = PlatformDesignerGraphPage;
  error_msg_array:any = [] ;
  error_message: string ;
  tabsIndex: number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public appConfig: AppConfig,
          public waveService: WaveProvider,
          public menuCtrl: MenuController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlatformTabsPage');
  }

  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_data_menu') ;
    this.appConfig.setTabSelected("graph");
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
            let pos: number = event_obj.error.message.search("Unexpected token" );
            this.error_msg_array = [] ;
            this.error_msg_array.push(event_obj.error.message) ;
            let msg: string = event_obj.error.message ;
            if ( pos == 0 ) {
              msg += "</br> This messages often indicates a error returned from a web service";
            this.error_msg_array.push("This messages often indicates a error returned from a web service, and unfortunately there may be multiple possiblities.") ;
            }
            for ( var uKey in event_obj.fetch_urls ) {
              msg += "</br>" + event_obj.fetch_urls[uKey];
              this.error_msg_array.push (" ");
              this.error_msg_array.push(event_obj.fetch_urls[uKey]) ;
            }
            this.error_message = msg;
            /* giving up on this.
            // this.navCtrl.popToRoot();
            // this.navCtrl.pop();
            if ( this.navCtrl != undefined ) {
              // let navLen : number = this.navCtrl.length();
              // if ( navLen > 0 ) {
              if ( this.navCtrl.canGoBack() ) {
                this.navCtrl.popToRoot();
              }
              // this.navCtrl.push("ErrorPage");
              this.navCtrl.setRoot('ErrorPage');
            } else {
            }
            */
            // set a flag to tell us to display the choices next time.
            this.appConfig.waveDisplayedErrorMessage = true;
            break;
        }
      });
    }
  }

}
