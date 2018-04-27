import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController, Events } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';

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
  selector: 'page-platform-designer-graph',
  templateUrl: 'platform-designer-graph.html',
})
export class PlatformDesignerGraphPage {
  // refresh timer
  private timer;
  // Subscription object
  private sub: Subscription;
  error_message:string = "";
  error_msg_array: any = [] ;

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
    // subscribe to selection changed event
    events.subscribe('buoySelectionChanged:rightmenu', () => {
      this.appConfig.enableMenu('comparison_menu') ;
    });
    // handle the menu closing
    events.subscribe('comparisonMenuClosed:rightmenu', () => {
      let erddapDatasetId: any;
      let erddapDatasetKey: any ;
      let bKey: any ;
      let bList: any = this.metService.getBuoySelectionList();
      let pList: any = this.metService.getPlatformParameterList();
      let bContinue: boolean = true ;
      let location_name: string ;
      let erddapDatasetReturnArray: any ;
      let datasetsMatched: any = [] ;
      let dataTypesNotFound: any = [] ;
      let visible_parameters :any = [];
      let dataTypeMagicKey: string ;
      let erddapGraphDatasets: any = [] ;
      let erddapGraphDatasetIds: any = [] ;
      let erddapRequestDatasets: any = [] ;
      let dataset_available: boolean;
      let bAtLeastSomething : boolean = false ;
      let colorRampIndex: number = 0 ;
      let maxColorRampIndex: number = 2 ;
      let colorRampArray: any = [];

      if ( this.metService.isInitialized()  ) {
        // first set the metServices bookkeeping array for web services to empty
        this.metService.resetDataGet();
        // at this point in theory we have a list of platforms and a list of parameters
        // we'd like to graph from them. The plan is to walk the platforms and look for
        // datasets with the parameters of interest in them assembling a list of dataset id's
        // once we have the dataset ids we can create requests
        // the names, as always, are confusing.
        for ( bKey in bList ) {
          if ( bList[bKey].selected) {
            bContinue = true ;
            location_name = bList[bKey].name;
            // matched per buoy
            datasetsMatched = [];
            // start by looking for them all
            // loop until you stop finding data
            dataTypesNotFound = pList ;
            // now go get a dataset id and other stuff.
            while ( bContinue ) {
              erddapDatasetReturnArray = this.appConfig.neracoosErddap.getDatasetID(this.appConfig,
                                              location_name, dataTypesNotFound );
              if ( erddapDatasetReturnArray['datasetMatched'] != undefined ) {
                datasetsMatched.push(erddapDatasetReturnArray['datasetMatched']) ;
                dataTypesNotFound = erddapDatasetReturnArray['dataTypesNotFound'];
                if ( dataTypesNotFound.length == 0 ) {
                  bContinue = false ;
                }
              } else {
                // we didn't find anything this time. we're all done.
                bContinue = false ;
              }
            }
            for ( erddapDatasetKey in datasetsMatched) {
              erddapDatasetId = datasetsMatched[erddapDatasetKey].datasetID ;
              visible_parameters = datasetsMatched[erddapDatasetKey].dataTypesFound ;
              dataTypeMagicKey = erddapDatasetId.substr(erddapDatasetId.indexOf("_") + 1 ) ;
              dataset_available = this.metService.setUpDataset(false, this.appConfig.gmriUnits.skip_plotting_parameters,
                               erddapDatasetId, dataTypeMagicKey, visible_parameters, location_name,
                               'multiple_dataset');
              // Data may or may not have already been requested.
              if ( dataset_available['dataAvailable'] ) {
                erddapGraphDatasets.push(dataTypeMagicKey);
                erddapGraphDatasetIds.push(erddapDatasetId);
                colorRampArray.push(colorRampIndex) ;
                colorRampIndex++ ;
                if ( colorRampIndex > maxColorRampIndex ) {
                  colorRampIndex = 0 ;
                }
                bAtLeastSomething = true ;
                if ( !dataset_available['dataLoaded']) {
                  erddapRequestDatasets.push(erddapDatasetId);
                }
              }
            }
          }
        }
        let graph_instructions: any = {
          graph_type: 'multiple_dataset',
          parameter_list: pList,
          platform_list: bList,
          graph_datasets: erddapGraphDatasets,
          graph_dataset_ids: erddapGraphDatasetIds,
          request_dataset_ids: erddapRequestDatasets,
          colorRampArray: colorRampArray
        }
        if ( bAtLeastSomething ) {
          this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlatformDesignerGraphPage');
    // After 15 minutes refresh and do it every 15 minutes after that.
    this.timer = Observable.timer(15 * 60 * 1000, 15 * 60 * 1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    this.appConfig.setTabSelected("graph");
  }
  ionViewDidEnter() {
    this.appConfig.enableMenu('comparison_menu') ;
    this.appConfig.setTabSelected("graph");
    if ( this.waveService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.metService.designerChart != undefined && this.appConfig.displayedErrorMessage == false ) {
          this.waveService.getWaveData(false);
      } else {
        this.menuCtrl.open('right');
        this.metService.metProvUpdates().subscribe( event_obj => {
          console.log( event_obj.name ) ;
          switch (event_obj.name) {
            case "chart_available":
              if ( this.metService.designerChart != undefined ) {
                event_obj.name = event_obj.name ;
              }
              break;
          }
        });
      }
    } else {
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            this.metService.setBuoySelectionList(this.waveService);
            this.metService.setPlatformParameterList();
            this.menuCtrl.open('right');
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
            this.waveService.getWaveData(false);
            this.appConfig.displayedErrorMessage = false;
          }
        }
      });
    }
    if ( everybodyReady) {
      this.waveService.getWaveData(false);
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
          this.waveService.getWaveData(false);
        }
      });
      popover.present({
      });
    }
  }

}
