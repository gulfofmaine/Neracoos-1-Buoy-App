import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController, Events } from 'ionic-angular';
import { Subscription, timer } from 'rxjs';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { MetProvider } from '../../providers/met/met';
import Highcharts from 'highcharts/highstock';
/**
 * Generated class for the PlatformGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var require;
require('highcharts-windbarb');

@IonicPage()
@Component({
  selector: 'page-platform-graph',
  templateUrl: 'platform-graph.html',
})
export class PlatformGraphPage {
  // refresh timer
  private timer;
  // Subscription object
  private sub: Subscription;
  error_message:string = "";
  error_msg_array: any = [] ;
  // post graph timer
  private post_graph_timer;
  // Subscription object
  private post_graph_sub: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public appConfig: AppConfig,
          public waveService: WaveProvider,
          public metService: MetProvider,
          public popoverCtrl: PopoverController,
          public menuCtrl: MenuController,
          public events: Events) {
    Highcharts.setOptions({
      global: {
          useUTC: false
          // timezoneOffset: 5 * 60
      }
    });
    // subscribe to the page loading event
    events.subscribe('platformTapped:rightmenu', (monitoringlocation) => {
      this.drawPlatformGraphs(this.appConfig.getStartDate(), this.appConfig.getEndDate());
    });
    // subscribe to graph drawn event
    events.subscribe('graphingFinished', (graph_type) => {
      this.post_graph_timer = timer(15000);
      // subscribing to a observable returns a subscription object
      this.post_graph_sub = this.post_graph_timer.subscribe(t => this.postGraphFunc(t));
    });
  }
  postGraphFunc(tick){
    this.appConfig.enableMenu('platform_graph_menu') ;
    this.menuCtrl.enable(true, 'page_menu') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaveGraphPage');
    // After 15 minutes refresh and do it every 15 minutes after that.
    this.timer = timer(15 * 60 * 1000, 15 * 60 * 1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    this.appConfig.setTabSelected("graph");
  }
  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_graph_menu') ;
    this.appConfig.setTabSelected("graph");
    if ( this.waveService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
          this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
          this.drawPlatformGraphs(this.appConfig.getStartDate(), this.appConfig.getEndDate());
      } else {
          this.menuCtrl.open('right');
      }
    } else {
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            if ( this.appConfig.getPlatformName() != undefined ) {
                this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
            } else {
                this.menuCtrl.open('right');
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
            this.appConfig.displayedErrorMessage = true;
            break;
        }
      });
    }
  }
  getErrorMessage() {
    let ret_err : string;
    ret_err =this.error_message ;
    return ret_err;
  }
  tickerFunc(tick){
    console.log(this);
    // refresh the data.
    this.appConfig.initializeDateRange();
    this.waveService.initializeData(true);
  }
  showSelection() {
    let popover = this.popoverCtrl.create('FilterPage', {filter_type:"waves"});
    popover.onDidDismiss(data => {
      if ( data != "cancel" ) {
        this.displayPage() ;
      }
    });
    popover.present({
    });
  }
  //  check for having enough data to display and
  // subscribe to the provider(s) if necessary.
  displayPage() {
    let everybodyReady: boolean = true ;
    if ( !this.waveService.isInitialized() ) {
      everybodyReady = false ;
      // subscribe to the initialdata loaded event
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        if ( event_obj.name == "initial_platform_data_loaded" ) {
          if ( this.waveService.isInitialized() ) {
            this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
            this.appConfig.displayedErrorMessage = false;
          }
        }
      });
    }
    if ( everybodyReady) {
      this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
      this.appConfig.displayedErrorMessage = false;
    }
  }
  displayChoices() {
    if ( this.appConfig.platform_name == undefined ||
          this.appConfig.displayedErrorMessage == true ) {
      let popover = this.popoverCtrl.create('FilterPage', {filter_type:"waves"});
      popover.onDidDismiss(data => {
        if ( data != "cancel" ) {
          this.appConfig.displayedErrorMessage = false;
          this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
        }
      });
      popover.present({
      });
    }
  }
  // filters platform, station
  platformTapped(event, item) {
    if ( item.properties.name != undefined ) {
      this.appConfig.setPlatformSelected(this.waveService, item.properties.name);
      this.appConfig.setDateFromInterface();
      this.metService.resetDataGet();
      this.drawPlatformGraphs(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
    }
    this.menuCtrl.close();
  }
  graphMenuClosed() {
    this.appConfig.setDateFromInterface();
    this.metService.resetDataGet();
    this.drawPlatformGraphs(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
  }
  drawPlatformGraphs(startDate, endDate) {
    if ( this.waveService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
          this.waveService.getWaveData(false, startDate, endDate);
      }
    }
    if ( this.metService.isInitialized()  ) {
      let erddapGraphDatasets : any = [] ;
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
        // first set the metServices bookkeeping array for web services to empty
        this.metService.resetDataGet();
        // meterological data
        let visible_parameters: any = ['air_temperature', 'barometric_pressure',
                      'wind_gust', 'wind_speed', 'wind_direction', 'visibility'] ;
        let erdDataTypeOfInterest  : any = [ "air_temperature", "air_temperature_qc",
                                  "wind_speed", "wind_speed_qc"];
        let dataTypeMagicKey: string = "ERDDAP_MET_OBSERVATIONS" ;
        erddapGraphDatasets.push(dataTypeMagicKey) ;
        this.metService.setUpData(false, visible_parameters, erdDataTypeOfInterest, dataTypeMagicKey,
                    'custom_observations', startDate, endDate);
        // SBE16 Oxygen and more
        visible_parameters = ['temperature', 'salinity',
                      'dissolved_oxygen', 'oxygen_saturation', 'percent_oxygen_saturation',
                      'conductivity', 'sigma_t'] ;
        erdDataTypeOfInterest = [ "temperature", "temperature_qc",
                                  "salinity", "salinity_qc"];
        dataTypeMagicKey = "ERDDAP_SBE16_OBSERVATIONS" ;
        erddapGraphDatasets.push(dataTypeMagicKey) ;
        this.metService.setUpData(false, visible_parameters, erdDataTypeOfInterest, dataTypeMagicKey,
                    'custom_observations', startDate, endDate);
        // make the request
        let graph_instructions: any = {
          graph_type: 'custom_observations',
          graph_datasets: erddapGraphDatasets
        }
        this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
      }
    }
  }

}
