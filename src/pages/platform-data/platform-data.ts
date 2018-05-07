import { Component } from '@angular/core';
import { NavController, NavParams, Events, MenuController } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { MetProvider } from '../../providers/met/met';
import { Observable, Subscription } from 'rxjs/Rx';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public appConfig: AppConfig,
          public waveService: WaveProvider,
          public metService: MetProvider,
          public events: Events,
          public menuCtrl: MenuController) {
    // subscribe to the page loading event
    events.subscribe('platformTapped:rightmenu', (monitoringlocation) => {
      if ( this.waveService.isInitialized()  ) {
        // if a choice has been made and there was not previous error go directly to the page
        if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
            this.waveService.getWaveData(false);
        }
      }
      if ( this.metService.isInitialized()  ) {
        // if a choice has been made and there was not previous error go directly to the page
        if ( this.appConfig.getPlatformName() != undefined && this.appConfig.displayedErrorMessage == false ) {
          // first set the metServices bookkeeping array for web services to empty
          this.metService.resetDataGet();
          this.getDatasetsData() ;
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
    this.menuCtrl.open('right');
    console.log('ionViewDidLoad PlatformDataPage');
    // this.appConfig.enableMenu('platform_menu') ;
    this.timer = Observable.timer(1000);
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
        this.getDatasetsData() ;
      } else {
          this.menuCtrl.open('right');
      }
    } else {
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            if ( this.appConfig.getPlatformName() != undefined ) {
              this.getDatasetsData() ;
            } else {
                this.menuCtrl.open('right');
            }
            break;
        }
      });
    }
  }
  getDatasetsData() {
    let erddapDatasetId: any;
    let erddapDatasetKey: any ;
    let erddapGraphDatasets: any = [] ;
    let erddapRequestDatasets: any = [] ;
    let erddapGraphDatasetIds: any = [] ;
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
                  'no_graph_single_dataset');
          // Data may or may not have already been requested.
          // only add if the data is available
          if ( dataset_available['dataAvailable'] ) {
            erddapGraphDatasets.push(dataTypeMagicKey);
            erddapGraphDatasetIds.push(erddapDatasetId);
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
          request_dataset_ids: erddapRequestDatasets
        }
        this.metService.getData(this.appConfig.gmriUnits.skip_plotting_parameters, graph_instructions);
      }
    }
  }
  // filters platform, station
  platformTapped(event, item) {
    if ( item.properties.name != undefined ) {
      this.appConfig.setPlatformSelected(this.waveService, item.properties.name);
      this.appConfig.setDateFromInterface();
      this.metService.resetDataGet();
      this.getDatasetsData() ;
    }
    this.menuCtrl.close();
  }

}
