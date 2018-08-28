import { Component } from '@angular/core';
import { NavController, NavParams, Events, MenuController } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { MetProvider } from '../../providers/met/met';
import { Subscription, timer } from 'rxjs';

/**
 * Generated class for the PlatformDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-platform-data',
  templateUrl: 'platform-data.html',
})
export class PlatformDataPage {
  // refresh timer
  private timer;
  // Subscription object
  private sub: Subscription;
  dataDisplay: any = [];

  public instance: PlatformDataPage

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public appConfig: AppConfig,
          public waveService: WaveProvider,
          public metService: MetProvider,
          public events: Events,
          public menuCtrl: MenuController) {
    // connect instance to this so that mini-map can update the display cleaner
    this.instance = this
    
    // subscribe to the page loading event
    events.subscribe('platformTapped:rightmenu', (monitoringlocation) => {
      if ( this.waveService.isInitialized()  ) {
        // if a choice has been made and there was not previous error go directly to the page
        if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
            this.waveService.getWaveData(false, this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate());
        }
      }
      if ( this.metService.isInitialized()  ) {
        // if a choice has been made and there was not previous error go directly to the page
        if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
          // first set the metServices bookkeeping array for web services to empty
          this.metService.resetDataGet();
          this.getDatasetsData(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
        }
      }
    });
    // subscribe to the left menu page chosen
    events.subscribe('pageChosen:leftmenu', (page) => {
      this.menuCtrl.open('right');
    });
  }

  tickerFunc(tick){
    if ( this.metService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() == undefined ) {
          this.menuCtrl.open('right');
      }
    }
  }
  ionViewDidLoad() {
    // this.menuCtrl.open('right');
    console.log('ionViewDidLoad PlatformDataPage');
    // this.appConfig.enableMenu('platform_menu') ;
    this.timer = timer(1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }
  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_data_menu') ;
    console.log('ionViewDidEnter PlatformDataPage');
    // this.appConfig.setTabSelected("graph");

    if ( this.metService.isInitialized()  ) {
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
        this.getDatasetsData(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
      } else {
          this.menuCtrl.open('right');
      }
    } else {
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            if ( this.appConfig.getPlatformName() != undefined ) {
              this.getDatasetsData(this.appConfig.getStartDate(), this.appConfig.getEndDate()) ;
            } else {
                this.menuCtrl.open('right');
            }
            break;
        }
      });
    }
  }
  getDatasetsData(startDate, endDate) {
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
        if ( mlMetaData != undefined ) {
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
            dataset_available = this.metService.setUpDataset(false,
                    this.appConfig.gmriUnits.skip_plotting_parameters,
                    erddapDatasetId, dataTypeMagicKey, visible_parameters, location_name,
                    'no_graph_single_dataset', startDate, endDate);
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
            graph_type: 'no_graph_single_dataset',
            graph_datasets: erddapGraphDatasets,
            graph_dataset_ids: erddapGraphDatasetIds,
            request_dataset_ids: erddapRequestDatasets,
            platform_names: platform_names
          }
          this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
        }
      }
    }
  }
  // create a structure of data for this page
  pageDisplayData() {
    let ret_val: any = [] ;
    let mKey: any ;
    let dataItem: any ;
    let dtD: string;
    // walk the dataDisplay series created and look for desired parameters
    for ( mKey in this.metService.dataDisplay.seriesArray ) {
      dtD = this.metService.dataDisplay.seriesArray[mKey].seriesGraph.data_type_description ;
      if ( this.appConfig.mariner_data_type_descriptions.indexOf(dtD) != -1 ) {
        dataItem = this.metService.dataDisplay.seriesArray[mKey] ;
        ret_val.push(dataItem) ;
      }
    }
    return( ret_val );
  }

  // return the latest timestamp from loaded data
  latestTimestamp(): string {
    let items = this.pageDisplayData()
    items.sort((a, b) => b.latestValue[0] - a.latestValue[0])  // sort by the highest time values
    if (items[0] != undefined) {
      return '@ ' + items[0].latestTimestamp
    }
    return ""
  }

  // filters platform, station
  platformTapped(event, item) {
    if ( item.properties.name != undefined ) {
      this.selectPlatform(item.properties.name)
    }
    this.menuCtrl.close();
  }

  // display selected platform
  selectPlatform(name) {
    this.appConfig.setPlatformSelected(this.waveService, name);
    this.appConfig.setDateFromInterface();
    this.metService.resetDataGet();
    // limit the data ask by using CurrentConditions Forecast dates.
    this.getDatasetsData(this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate()) ;


    this.metService.metProvUpdates().subscribe( event_obj => {
      console.log( event_obj.name ) ;
      switch (event_obj.name) {
        case "no_graph_single_dataset_data_available":
          // get the parameters
          let parameters : any = this.pageDisplayData();
          let visible_parameters: any = [];
          visible_parameters.push(parameters[0].seriesGraph.parameter) ;
          // draw a graph using the first parameter
          this.drawParameterGraph(visible_parameters, this.appConfig.getCcdFcstStartDate(),
                                  this.appConfig.getCcdFcstEndDate());
          break;
      }
    });
  }

  dataMenuClosed() {
    this.appConfig.setDateFromInterface();
    this.metService.resetDataGet();
      // limit the data ask by using CurrentConditions Forecast dates.
    this.getDatasetsData(this.appConfig.getCcdFcstStartDate(), this.appConfig.getCcdFcstEndDate()) ;
  }
  changeGraph(item) {
    // get the parameters
    let visible_parameters: any = [];
    visible_parameters.push(item.seriesGraph.parameter) ;
    // draw a graph using the first parameter
    this.drawParameterGraph(visible_parameters, this.appConfig.getCcdFcstStartDate(),
                            this.appConfig.getCcdFcstEndDate());
  }
  drawParameterGraph(visible_parameters, startDate, endDate) {
    let pKey: any ;
    let erdDataTypeOfInterest  : any = [] ;
    if ( this.metService.isInitialized()  ) {
      let erddapGraphDatasets : any = [] ;
      // if a choice has been made and there was not previous error go directly to the page
      if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
        // first set the metServices bookkeeping array for web services to empty
        this.metService.resetDataGet();
        // meterological data
        // [ "water_temperature", "water_temperature_qc"];
        for ( pKey in visible_parameters  ) {
          erdDataTypeOfInterest.push(visible_parameters[pKey]) ;
          erdDataTypeOfInterest.push(visible_parameters[pKey] + "_qc") ;
        }
        let dataTypeMagicKey: string = "ERDDAP_SINGLE_PARAMETER" ;
        erddapGraphDatasets.push(dataTypeMagicKey) ;
        // erdDataTypeOfInterest is used to find the correct dataset
        // visible_parameters tells us what parameters to show.
        this.metService.setUpData(false, visible_parameters, erdDataTypeOfInterest, dataTypeMagicKey,
                    'custom_observations', startDate, endDate);
        // make the request
        let graph_instructions: any = {
          graph_type: 'custom_observations',
          graph_datasets: erddapGraphDatasets,
          graph_erdDataTypeOfInterest: erdDataTypeOfInterest,
          graph_title_postfix: ''
        }
        this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
      }
    }
  }

}
