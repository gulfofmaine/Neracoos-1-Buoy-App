import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, MenuController, Events } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { MetProvider } from '../../providers/met/met';
import Highcharts from 'highcharts/highstock';
/**
 * Generated class for the PlatformDatasetsGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var require;
require('highcharts-windbarb');

@Component({
  selector: 'page-platform-datasets-graph',
  templateUrl: 'platform-datasets-graph.html',
})
export class PlatformDatasetsGraphPage {
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
    // now that the tap is handled in this class add _disabled
    // so I'm not really subscribed.
    events.subscribe('platformTapped_disabled:rightmenu', (monitoringlocation) => {
      if ( this.waveService.isInitialized()  ) {
        // if a choice has been made and there was not previous error go directly to the page
        if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
            this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
        }
      }
      this.drawDatasetsGraph(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
    });
    // subscribe to graph drawn event
    events.subscribe('graphingFinished', (graph_type) => {
      this.post_graph_timer = Observable.timer(1000);
      // subscribing to a observable returns a subscription object
      this.post_graph_sub = this.post_graph_timer.subscribe(t => this.postGraphFunc(t));
    });
  }
  postGraphFunc(tick){
    this.appConfig.enableMenu('platform_dataset_menu') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlatformDatasetsGraphPage');
    // After 15 minutes refresh and do it every 15 minutes after that.
    this.timer = Observable.timer(15 * 60 * 1000, 15 * 60 * 1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    this.appConfig.setTabSelected("graph");
  }
  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_dataset_menu') ;
    this.appConfig.setTabSelected("graph");
    if ( this.waveService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
          this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
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
    this.drawDatasetsGraph(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
  }
  drawDatasetsGraph(startDate, endDate) {
    let erddapDatasetId: any;
    let erddapDatasetKey: any ;
    let erddapGraphDatasets: any = [] ;
    let erddapRequestDatasets: any = [] ;
    let erddapGraphDatasetIds: any = [] ;
    let platform_names: any = [] ;
    let dataset_available: boolean;
    if ( this.metService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
        let location_name: string = this.appConfig.platform_name ;
        let mlMetaData = this.appConfig.getMonitoringLocationMetadata( location_name);
        //for ( erddapDatasetId in this.appConfig.neracoosErddap.getDatasetIds( appConfig,
        //                     this.appConfig.getPlatformName() )) {
        // first set the metServices bookkeeping array for web services to empty
        this.metService.resetDataGet();

        for ( erddapDatasetKey in mlMetaData.properties.dataset_ids) {
          erddapDatasetId = mlMetaData.properties.dataset_ids[erddapDatasetKey] ;
          // for now hard code aanderra_hist and so forth to do the plots
          // when the data is available.
          // A01_aanderaa_hist"
          let dataTypeMagicKey: string = erddapDatasetId.substr(erddapDatasetId.indexOf("_") + 1 ) ;
          // a blank array is a signal to use them all.
          let visible_parameters: any = [] ;
          dataset_available = this.metService.setUpDataset(false, this.appConfig.gmriUnits.skip_plotting_parameters,
                  erddapDatasetId, dataTypeMagicKey, visible_parameters, location_name,
                  'single_dataset', startDate, endDate);
          // Data may or may not have already been requested.
          // only add if the data is available
          if ( dataset_available['dataAvailable'] ) {
            erddapGraphDatasets.push(dataTypeMagicKey);
            erddapGraphDatasetIds.push(erddapDatasetId);
            platform_names.push(location_name);   // for handling B01 vs B01-/ UGH.
            // flag for loading if it's not already
            if ( !dataset_available['dataLoaded']) {
              erddapRequestDatasets.push(erddapDatasetId);
            }
          }
        }
        // make the request
        let graph_instructions: any = {
          graph_type: 'single_dataset',
          graph_datasets: erddapGraphDatasets,
          graph_dataset_ids: erddapGraphDatasetIds,
          request_dataset_ids: erddapRequestDatasets,
          platform_names: platform_names
        }
        // anticipating success null the existing graphs
        this.metService.resetDatasetsGraphs();
        this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
      }
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
      // this.events.publish('platformTapped:rightmenu', item.properties.name);
      this.appConfig.setDateFromInterface();
      this.drawDatasetsGraph(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
    }
    this.menuCtrl.close();
  }
  datasetMenuClosed() {
    this.appConfig.setDateFromInterface();
    this.drawDatasetsGraph(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
  }

}
