import { MenuController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Jsonp } from '@angular/http';

import { AppConfig } from '../appconfig/appconfig';
import { GMRIUnits } from "../../gmri/data/gmri-units";
import {sprintf} from "sprintf-js";
/*
  Generated class for the WaveProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WaveProvider {
  waveObjects: any = [] ;
  bioWW3Objects: any = [] ;
  buoyObjects: any = [] ;
  dwwObjects: any = [] ;
  wave_locations: any = [] ;
  ml_metadata_loaded: boolean = false ;
  waveProv: any;
  waveProvObserver: any;
  waveChart: any;
  loadedMLArray: any = [] ;
  dataTypeLoaded: any = [] ;
  necofsDataTypeLoaded: any = [] ;
  dataGetUrls: any = [] ;
  dataGetNecofsUrls: any = [] ;
  forecast_ready: boolean = false ;
  notReadyText: string ;
  requested_forecast: boolean = false ;
  // moved to appConfig
  // neracoosErddap: any ;

  constructor(public menuCtrl: MenuController,
              public appConfig:AppConfig,
              public gmriUnits:GMRIUnits,
              public http: Http,
              public httpClient: HttpClient,
              public jsonp: Jsonp) {

    this.waveProv = Observable.create(observer => {
      // 9-5-2017 I'm never getting here!
      this.waveProvObserver = observer;
      // this.initializeData(true);
    });
    console.log('Hello WaveProvider Provider');
  }
  waveProvUpdates() {
    return this.waveProv;
  }
  isForecastReady() {
    return( this.forecast_ready );
  }
  isInitialized() {
    let ret_val: boolean = false ;
    if ( this.wave_locations.length > 0 ) {
      ret_val = true ;
    }
  return( ret_val ) ;
  }
  // get a key to the object or create a new one.
  // Using object keys to avoid duplicating the object in the array
  // and be able to update it in place.
  // WW3 data from ERDDAP
  getWaveObjectKey(ml_identifier, appConfig) {
    let found: boolean = false ;
    let OKey: any = 0 ;
    for ( var eKey in this.waveObjects ) {
      if ( this.waveObjects[eKey].ml_identifier == ml_identifier ) {
        found = true;
        OKey = eKey ;
        break;
      }
    }
  if ( !found ) {
    let newObject = new WaveObject(ml_identifier, appConfig) ;
    this.waveObjects.push(newObject);
    return ( this.waveObjects.length - 1 ) ;
  }
  return ( OKey );
  }
  // duplicated in webservice-provider
  // get the object or create a new one.
  getBioWW3Object(name) {
    let found: boolean = false ;
    for ( var eKey in this.bioWW3Objects ) {
      if ( this.bioWW3Objects[eKey].name == name ) {
        found = true;
        break;
      }
    }
    if ( !found ) {
      let newObject = new BioWW3Object(name) ;
      this.bioWW3Objects.push(newObject);
      return ( newObject ) ;
    }
  return(this.bioWW3Objects[eKey]);
  }

  // get the object or create a new one.
  getBuoyObject(name) {
    let found: boolean = false ;
    for ( var eKey in this.buoyObjects ) {
      if ( this.buoyObjects[eKey].name == name ) {
        found = true;
        break;
      }
    }
    if ( !found ) {
      let newObject = new BuoyObject(name) ;
      this.buoyObjects.push(newObject);
      return ( newObject ) ;
    }
  return(this.buoyObjects[eKey]);
  }

  // get the object or create a new one.
  getDWWObject(name) {
    let found: boolean = false ;
    for ( var eKey in this.dwwObjects ) {
      if ( this.dwwObjects[eKey].name == name ) {
        found = true;
        break;
      }
    }
    if ( !found ) {
      let newObject = new DWWObject(name) ;
      this.dwwObjects.push(newObject);
      return ( newObject ) ;
    }
  return(this.dwwObjects[eKey]);
  }
  // end duplicated in webservice-provider
  locationSelectedItem (monitoringlocationidentifier) {
    let ret_val : number = 1 ;
    for ( var eKey in this.waveObjects ) {
      if ( this.waveObjects[eKey].ml_identifier == monitoringlocationidentifier ) {
        ret_val = parseInt(eKey) + 1 ;
        break;
      }
    }
    return(ret_val);
  }
  initializeData(refresh = false) {
    if ( !this.ml_metadata_loaded || refresh ) {

      let waveLocationURL: string = this.appConfig.getWaveLocationURL();
      let waveLocation = this.http.get(waveLocationURL).pipe(map(res => res.json()));

      let drrURL: string = this.appConfig.getDateRangeWW3URL();
      let dateRangeWW3 = this.http.get(drrURL).pipe(map(res => res.json()));

      let drrWW3GlobalURL: string = this.appConfig.getDateRangeWW3GlobalURL();
      let dateRangeWW3Global = this.http.get(drrWW3GlobalURL).pipe(map(res => res.json()));

      // moved to appConfig
      // let ERDDAPMetadataURL: string = this.appConfig.getErddapMetadataURL();
      // let erddapMetadata = this.http.get(ERDDAPMetadataURL).pipe(map(res => res.json()));

      let obj_text: string = '';

      forkJoin([waveLocation, dateRangeWW3, dateRangeWW3Global]).subscribe(results => {
        // set up wave locations
        // replaced with erddap_wave_monitoring_locations_setup
        // NOPE I changed the web service to use erddap
        this.wave_monitoring_locations_setup( results[0] ) ;
        // where should I put this!
        // this.erddap_wave_monitoring_locations_setup();

        // set these in appConfig for anyone to use
        // this is the bedford ww3 start and end range
        this.appConfig.dww_end_date_index = results[1].table.rows.length - 1 ;
        this.appConfig.dww_start_date = results[1].table.rows[0] ;
        this.appConfig.dww_end_date = results[1].table.rows[this.appConfig.dww_end_date_index];
        if ( this.appConfig.debug_dww ) {
          obj_text = JSON.stringify(results[1], null, 4);
          console.log("Deep Water Wave Response Date response received:" + obj_text);
        }
        // create a NeracoosErddap object to encaplulate the neracoos erddap service
        // moved to app config
        // this.neracoosErddap = new NeracoosErddap(results[2] ) ;
        // this is the coastwatch ww3 global start and end range
        this.appConfig.dww_global_end_date_index = results[2].table.rows.length - 1 ;
        this.appConfig.dww_global_start_date = results[2].table.rows[0] ;
        this.appConfig.dww_global_end_date = results[2].table.rows[this.appConfig.dww_global_end_date_index];
        if ( this.appConfig.debug_dww ) {
          obj_text = JSON.stringify(results[2], null, 4);
          console.log("Coastwatch Deep Water Wave Response Date response received:" + obj_text);
        }
        // send out an event object
        let event_obj_init_data: any = { name: "initial_platform_data_loaded", "data_loaded": "yes" }
        if ( this.waveProvObserver != undefined ) {
          this.waveProvObserver.next(event_obj_init_data);
        }
      },
      error => console.log(error));
    }
  }
  // use erddap data for wave monitoring locations
  // try to mimic properties found in this geojson web service
  // http://www.neracoos.org/data/json/monitoringlocations.php?format=geojson
  erddap_wave_monitoring_locations_setup() {
    this.wave_locations = [];
    let platform_object: any ;
    // first neracoos
    for(let rKey in this.appConfig.neracoosErddap.raw_data[0].erdTables){
      if ( this.appConfig.neracoosErddap.raw_data[0].erdTables[rKey].neracoos_data_provider &&
            this.appConfig.neracoosErddap.raw_data[0].erdTables[rKey].neracoos_data_provider == 'UMO') {
        let bFound = false ;
        for ( let wKey in this.wave_locations) {
          if ( this.wave_locations[wKey].properties.name ==
                    this.appConfig.neracoosErddap.raw_data[0].erdTables[rKey].platform) {
            bFound =  true ;
            break;
          }
        }
        if ( !bFound ) {
          // mimic the other data format
          platform_object = {};
          platform_object.properties = {} ;
          platform_object.properties.name = this.appConfig.neracoosErddap.raw_data[0].erdTables[rKey].platform ;
          this.wave_locations.push(platform_object) ;
        }
      }
    }
  }
  // wave monitoring locations.
  wave_monitoring_locations_setup( json_data) {
    this.wave_locations = [];
    for (var wave_ml_key in json_data.features) {
      var wave_ml_data = json_data.features[wave_ml_key] ;
      // 3-7-2018 Old check using geojson service based on database
      // if ( wave_ml_data.properties.data_depths != undefined &&
      //   wave_ml_data.properties.data_depths.significant_height_of_wind_and_swell_waves != undefined ) {
      //   // do these individually as the pages get loaded for specific sites.
      //   // var wave_ml = new waveObject($http, $q, wave_ml_data);
      //   this.wave_locations.push(wave_ml_data);
      //   }
      // New check based on Erddap geojson service
      if ( wave_ml_data.properties.data_types != undefined &&
        wave_ml_data.properties.data_types.significant_wave_height != undefined ) {
        // do these individually as the pages get loaded for specific sites.
        // var wave_ml = new waveObject($http, $q, wave_ml_data);
        this.wave_locations.push(wave_ml_data);
        }
    }
  this.sortMonitoringLocations();
  }
  sortMonitoringLocations() {
    // ye old bubble sort
    let changed: boolean = true ;
    let sKey: any ;
    while ( changed ) {
      changed = false ;
      for ( sKey in this.wave_locations ) {
        let nKey : number = parseInt(sKey);
        if ( nKey < this.wave_locations.length - 1 ) {
          let nKeyTwo : string = (nKey + 1).toString() ;
          if ( this.wave_locations[sKey].properties.name > this.wave_locations[nKeyTwo].properties.name ){
            // copy this one
            let temp: any = this.wave_locations[sKey];
            // replace it with the next one
            this.wave_locations[sKey] = this.wave_locations[nKeyTwo];
            // and make this one the next one.
            this.wave_locations[nKeyTwo] = temp
            // flag a change
            changed = true ;
          }
        }
      }
    }
    // ye old bubble sort now numbers last
    changed = true ;
    while ( changed ) {
      changed = false ;
      for ( sKey in this.wave_locations ) {
        let nKey : number = parseInt(sKey);
        if ( nKey < this.wave_locations.length - 1 ) {
          let nKeyTwo : string = (nKey + 1).toString() ;
          // If the first is a number and the second isn't then swap them
          if ( !isNaN(this.wave_locations[sKey].properties.name) && isNaN(this.wave_locations[nKeyTwo].properties.name )){
            // copy this one
            let temp: any = this.wave_locations[sKey];
            // replace it with the next one
            this.wave_locations[sKey] = this.wave_locations[nKeyTwo];
            // and make this one the next one.
            this.wave_locations[nKeyTwo] = temp
            // flag a change
            changed = true ;
          }
        }
      }
    }
  }
  getMonitoringLocationMetadata( location_name ) {
    let ret_val:any ;
    for ( var mlKey in this.wave_locations ) {
      if ( this.wave_locations[mlKey].properties.name == location_name ) {
        ret_val = this.wave_locations[mlKey] ;
        break;
      }
    }
  return(ret_val);
  }
  // allow the start date to be specified.
  getWaveData(force_refresh, startDate, endDate) {
    // block redundant calls
    if ( !this.requested_forecast ) {
      // providing an array of urls
      // because some may have loaded ok previously
      // var date_range = this.appConfig.getEtofsDateRange() ;
      // var date_start = date_range['date_start'];
      this.dataTypeLoaded = [] ;
      this.necofsDataTypeLoaded = [] ;
      let dataGETs: any = [] ;
      let dataGetNecofs: any = [] ;
      // buoy dates
      // var date_now = new Date();
      // var datems = Date.parse(date_start).getTime();
      // var buoy_date_start = this.appConfig.getStartDate()
      // var datems = buoy_date_start.getTime();
      // var hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
      // assemble all the necessary urls to get a full set of data
      // account for some perhaps having been previously loaded.
      // this is using classes to encapsulate the data
      // the buoy location ex. B01 may be shared among mulitple inundation locations.
      // it's a comparison reference location
      let wave_location_name: string = this.appConfig.platform_name ;
      // let wave_location : any = this.getMonitoringLocationMetadata(this.appConfig.platform_name);
      let waveKey = this.getWaveObjectKey(wave_location_name, this.appConfig);
      if ( !this.waveObjects[waveKey].initialized || force_refresh ) {
        // first use the meta data already initialized
        let waveMetaData = this.getMonitoringLocationMetadata( wave_location_name);
        if ( waveMetaData != undefined ) {
          this.requested_forecast = true ;
          this.waveObjects[waveKey].initialize_wave_object( waveMetaData, this ) ;
          // multiple data streams here
          // metadata from cbass
          let getWW3URL: string = this.waveObjects[waveKey].getWW3URL(this.appConfig) ;
          this.dataGetUrls.push(getWW3URL) ;
          let getWW3  = this.http.get(getWW3URL).pipe(map(res => res.json()));
          dataGETs.push( getWW3);
          this.dataTypeLoaded.push("WW3");

          // ww3 global data
          // NOTE: not ussing dww_start_date and dww_end_date because the global doesn't have those constraints
          let ww3StartDate: string = startDate.toISOString();
          // now coastwatchs erddap is unpredictable so use a value gleaned from them on start up
          // as the end date.
          // let ww3EndDate: string = this.appConfig.getEndDate().toISOString();
          let ww3EndDate: string = this.appConfig.dww_global_end_date;
          let dwwGlobalURL: string = this.waveObjects[waveKey].getWW3CoastwatchGlobalDataURL(ww3StartDate,
                      ww3EndDate, this.waveObjects[waveKey].geo_array, this.appConfig );
          this.dataGetUrls.push( dwwGlobalURL);
          let getGlobalDWW  = this.http.get(dwwGlobalURL).pipe(map(res => res.json()));
          dataGETs.push( getGlobalDWW);
          this.dataTypeLoaded.push("WW3GLOBAL");

          let getBuoyURL : string = this.waveObjects[waveKey].getBuoyObservationURL(this.appConfig) ;
          this.dataGetUrls.push(getBuoyURL) ;
          // let getBuoyObservations  = this.http.get(getBuoyURL).map(res => res.json());
          // what happens if I skip getting this?
          // 5-11-2018 Removing the legacy calls for buoyrecentdata
          // they take forever compared to erddap
          // dataGETs.push( getBuoyObservations);
          // this.dataTypeLoaded.push("WAVE_OBSERVATIONS");
          // Erddap data.
          // right now too big a can of worms. We don't know exactly what data is available
          // eric has that in a metadata service that eventually will be great.
          // check for availability of wave data
          let erdDataTypes : any = [ "significant_wave_height", "significant_wave_height_qc",
                                        "dominant_wave_period", "dominant_wave_period_qc"];
          let bReturnAll: boolean = false ;
          let return_erddap: any = this.appConfig.neracoosErddap.getDatasetID(this.appConfig,
                    this.waveObjects[waveKey].ml_name, erdDataTypes, bReturnAll, startDate, endDate );
          if ( return_erddap.datasetMatched.datasetID != null ) {
            let getErdWaveObsURL : string = this.waveObjects[waveKey].getERDDAPObservationURL(this.appConfig,
                                            erdDataTypes, return_erddap, startDate, endDate) ;
            this.dataGetUrls.push(getErdWaveObsURL) ;
            let getBuoyErdWaveObservations = this.jsonp.request(getErdWaveObsURL).pipe(map(res => res.json()));
            // 9/11/2017 get erddap to use jsonp.
            dataGETs.push( getBuoyErdWaveObservations);
            this.dataTypeLoaded.push("ERDDAP_WAVE_OBSERVATIONS");
          }
          if ( 0 ) {
          // if ( wave_location.properties.program == 'NERACOOS' ) {

            // change to your favorite types. This doesn't handle multiple sensor packages.
            // let erdDataTypes : any = [ "significant_wave_height", "significant_wave_height_qc",
            //                             "dominant_wave_period", "dominant_wave_period_qc"];
            // let return_erddap: any = this.neracoosErddap.getDatasetID(this.appConfig, this.waveObjects[waveKey].ml_name, erdDataTypes );
            // let datasetID: any = this.waveObjects[waveKey].ml_name + this.waveObjects[waveKey].erddapDatasetNames[dataset] ;
            // let getMetObsURL : string = this.waveObjects[waveKey].getERDDAPObservationURL(this.appConfig, this.waveObjects[waveKey].meterologyParameters, datasetID) ;
            // this.dataGetUrls.push(getMetObsURL) ;
            // let getBuoyMetObservations = this.jsonp.request(getMetObsURL).map(res => res.json());
            // 9/11/2017 get erddap to use jsonp.
            // dataGETs.push( getBuoyMetObservations);
            this.dataTypeLoaded.push("MET_OBSERVATIONS");
          }

          let getNECOFSWavePredictionsURL: string = this.waveObjects[waveKey].getNECOFSWaveURL()
          this.dataGetNecofsUrls.push(getNECOFSWavePredictionsURL) ;
          let getNECOFSWavePredictions  = this.http.get(getNECOFSWavePredictionsURL).pipe(map(res => res.json()));
          dataGetNecofs.push( getNECOFSWavePredictions);
          this.necofsDataTypeLoaded.push("NECOFS_WAVE_PREDICTIONS");

          let getNECOFSWaveLengthPredictionsURL: string = this.waveObjects[waveKey].getNECOFSWaveLengthURL() ;
          this.dataGetNecofsUrls.push(getNECOFSWaveLengthPredictionsURL) ;
          let getNECOFSWaveLengthPredictions  = this.http.get(getNECOFSWaveLengthPredictionsURL).pipe(map(res => res.json()));
          dataGetNecofs.push( getNECOFSWaveLengthPredictions);
          this.necofsDataTypeLoaded.push("NECOFS_WAVE_LENGTH_PREDICTIONS");

          let buoyDataObject = this.getBuoyObject(wave_location_name);
          if ( !buoyDataObject.initialized || force_refresh ) {
            this.requested_forecast = true ;
            // let getBuoyURL: string = buoyDataObject.getDataURL(date_start, hours_back, wave_location_name, this.appConfig) ;
            // 5-11-2018 Removing the legacy calls for buoyrecentdata
            // they take forever compared to erddap
            // this.dataGetUrls.push( getBuoyURL);
            // let getBuoy  = this.http.get(getBuoyURL).map(res => res.json());
            // dataGETs.push( getBuoy);
            // this.dataTypeLoaded.push("BUOY");
          }
          let dwwDataObject = this.getDWWObject(wave_location_name);
          if ( !dwwDataObject.initialized || force_refresh ) {
            this.requested_forecast = true ;
            // Erddap ww3 data
            let dwwURL: string = dwwDataObject.geoGetDataURL(this.appConfig.dww_start_date,
                        this.appConfig.dww_end_date, this.waveObjects[waveKey].geo_array, this.appConfig );
            this.dataGetUrls.push( dwwURL);
            let getDWW  = this.http.get(dwwURL).pipe(map(res => res.json()));
            dataGETs.push( getDWW);
            this.dataTypeLoaded.push("DWW");
            // NECOFS data
            // Wave height
            let dwwNECOFSWavePredictionsURL: string = dwwDataObject.getNECOFSWaveURL(this.waveObjects[waveKey].geo_array );
            this.dataGetNecofsUrls.push(dwwNECOFSWavePredictionsURL) ;
            let getDWWNECOFSWavePredictions  = this.http.get(dwwNECOFSWavePredictionsURL).pipe(map(res => res.json()));
            dataGetNecofs.push( getDWWNECOFSWavePredictions);
            this.necofsDataTypeLoaded.push("NECOFS_DWW_WAVE_PREDICTIONS");
            // Wave Length
            let dwwNECOFSWavelengthPredictionsURL: string = dwwDataObject.getNECOFSWaveLengthURL(this.waveObjects[waveKey].geo_array );
             this.dataGetNecofsUrls.push(dwwNECOFSWavelengthPredictionsURL) ;
            let getDWWNECOFSWavelengthPredictions  = this.http.get(dwwNECOFSWavelengthPredictionsURL).pipe(map(res => res.json()));
            dataGetNecofs.push( getDWWNECOFSWavelengthPredictions);
            this.necofsDataTypeLoaded.push("NECOFS_DWW_WAVE_LENGTH_PREDICTIONS");
          }

        }
      }
      // use a separate observable for necofs
      if ( dataGetNecofs.length > 0 ) {
        forkJoin(dataGetNecofs).subscribe(results => this.forecastDataReady("necofs_data", results, startDate),
        error => this.forecastDataError( "NECOFS Data Failed to Load", error, this.dataGetNecofsUrls ),
        () => this.forecastDataComplete( "NECOFS Data Competed", this.dataGetNecofsUrls));
      } else {
        // the data was already loaded
        // do nothing. It's taken care of by the other dataGets stuff.
      }
      // have the http get's go get the data.
      // this is still subject to problems. I'm utilizing the dataTypeLoaded array
      // to keep track of the url's that are being accessed. But  what if this is hit
      // again before the observable has come back? It won't happen now but
      // it's a model that needs work to be safe.
      if ( dataGETs.length > 0 ) {
        forkJoin(dataGETs).subscribe(results => this.forecastDataReady("stable_data", results, startDate),
        error => this.forecastDataError( "stable_data", error, this.dataGetUrls ) ,
        () => this.forecastDataComplete( "stable_data", this.dataGetUrls));
      } else {
        // the data was already loaded
        let wave_location_name: string = this.appConfig.platform_name ;
        let waveKey = this.getWaveObjectKey(wave_location_name, this.appConfig);
        // wave chart
        let wave_array : any = this.waveObjects[waveKey].drawWaveChart(this.appConfig, startDate);
        this.waveChart = wave_array['chartConfig'];
        this.forecast_ready = true ;
      }
    }
  }
  forecastDataError( data_queried, error, fetchURLs ) {
    // unblock
    this.requested_forecast = false ;
    // send out an event object
    let event_obj_data: any = {
          name: "forecast_data_error",
          "data_loaded": "no",
          error_msg: "what have you done!?",
          error: error,
          fetch_urls: fetchURLs }
    if ( this.waveProvObserver != undefined ) {
      this.waveProvObserver.next(event_obj_data);
    }
  }
  forecastDataComplete( data_queried, fetchURLs ) {
    // allow new requests
    this.requested_forecast = false ;
    // send out an event object
    let event_obj_data: any = {
          name: "forecast_data_complete",
          fetch_urls: fetchURLs,
          data_queried: data_queried }
    if ( this.waveProvObserver != undefined ) {
      this.waveProvObserver.next(event_obj_data);
    }
  }
  // this handles the subscription to two multi http querys
  // on is for everything but necofs and the other is for necofs.
  // necofs on occasion just times out so go ahead without it.
  forecastDataReady (data_queried, results, startDate) {
    let rdt_temp:string ;
    let resultdatems:number;
    let dKey:any;
    let dww_key:any;
    // unblock
    this.requested_forecast = false ;
    // keep a status
    let dataLoadingText : string = "Loading data from..." ;
    let dataLoading: any = [] ;
    for ( dKey in this.dataTypeLoaded ) {
      dataLoading[dKey] = true ;
    }
    // get the object for this location
    let wave_location_name: string = this.appConfig.platform_name ;
    let waveKey = this.getWaveObjectKey(wave_location_name, this.appConfig);
    let bioWW3DataObject = this.getBioWW3Object(wave_location_name);
    let buoyDataObject = this.getBuoyObject(wave_location_name);
    let dwwDataObject = this.getDWWObject(wave_location_name);
    // depending on the same order that they were pushed into the arrays.
    if ( data_queried == "stable_data" ) {
      for ( dKey in this.dataTypeLoaded ) {
        switch ( this.dataTypeLoaded[dKey] ) {
          case 'BIOWW3':
            bioWW3DataObject.bioww3_data = results[dKey] ;
            bioWW3DataObject.initialized = true;
            break;
          case 'BUOY':
            buoyDataObject.buoy_data = results[dKey] ;
            buoyDataObject.initialized = true;
            break;
          case 'DWW':
            dwwDataObject.dww_data = results[dKey] ;
            dwwDataObject.initialized = true;
            break;
          case 'WW3GLOBAL':
            this.waveObjects[waveKey].waveGlobalPredictionData = results[dKey] ;
            let max_ts : number = 0;
            var time_index = this.appConfig.ERDDAPColumnIndexFromColumnName( this.waveObjects[waveKey].waveGlobalPredictionData.table.columnNames, 'time' );
            for (dww_key in this.waveObjects[waveKey].waveGlobalPredictionData.table.rows) {
              let resultdatetext: any = this.waveObjects[waveKey].waveGlobalPredictionData.table.rows[dww_key][time_index];
              // Date.parse("2016-03-31T13:00:00Z")
              rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                              "/" + resultdatetext.substr(8,2) + " " +
                              resultdatetext.substr(11, 8) + " GMT" ;
              resultdatems = Date.parse(rdt_temp);
              if ( resultdatems > max_ts ) {
                max_ts = resultdatems ;
              }
            }
            if ( max_ts > 0 ) {
              this.appConfig.bumpEndDate(max_ts) ;
            }
            break;
          case 'WW3':
            this.waveObjects[waveKey].wavePredictionData = results[dKey] ;
            break;
          case 'WAVE_OBSERVATIONS':
            this.waveObjects[waveKey].waveHeightObservationData = results[dKey] ;
            break;
          case 'ERDDAP_WAVE_OBSERVATIONS':
            this.waveObjects[waveKey].erddapWaveHeightObservationData = results[dKey] ;
            break;
          case 'MET_OBSERVATIONS':
            this.waveObjects[waveKey].metObservationData = results[dKey] ;
            break;
          default:
            break;
        }
        dataLoading[dKey] = false ;
        dataLoadingText = "Loading Status:" ;
        for ( var dlKey in dataLoading ) {
          if ( dataLoading[dlKey] ) {
            dataLoadingText += " " + dlKey + "-loaded";
          } else {
            dataLoadingText += " " + dlKey + "-loading";
          }
        }
        this.notReadyText = dataLoadingText ;
      }
    }
    if ( data_queried == "necofs_data" ) {
      // depending on the same order that they were pushed into the arrys.
      for ( dKey in this.necofsDataTypeLoaded ) {
        switch ( this.necofsDataTypeLoaded[dKey] ) {
          case 'NECOFS_WAVE_PREDICTIONS':
            // REMEMBER THIS NEEDS TO BE ON IT's OWN!
            this.waveObjects[waveKey].necofs_wave_data = results[dKey] ;
            let resultdatetext: string = this.waveObjects[waveKey].necofs_wave_data.end_time ;
            rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                              "/" + resultdatetext.substr(8,2) + " " +
                              resultdatetext.substr(11, 8) + " GMT" ;
            resultdatems = Date.parse(rdt_temp);
            this.appConfig.bumpEndDate(resultdatems) ;
            break;
          case 'NECOFS_WAVE_LENGTH_PREDICTIONS':
            // REMEMBER THIS NEEDS TO BE ON IT's OWN!
            this.waveObjects[waveKey].necofs_wavelength_data = results[dKey] ;
            break;
          case 'NECOFS_DWW_WAVE_PREDICTIONS':
            dwwDataObject.necofs_wave_data = results[dKey] ;
            break;
          case 'NECOFS_DWW_WAVE_LENGTH_PREDICTIONS':
            dwwDataObject.necofs_wavelength_data = results[dKey] ;
            break;
          default:
            break;
        }
      }
    }
    this.loadedMLArray[wave_location_name] = true;
    // NECOFS data is usually a little slower than the rest.
    // For Mile Stretch Beach this can mean that second time around
    // the initialized flag is false. But the surge_data is there
    // They are both set at the same time! I can't figure it out!
    // if ( buoyDataObject.initialized && dwwDataObject.initialized  ) {
      // wave chart
      let wave_array : any = this.waveObjects[waveKey].drawWaveChart(this.appConfig, startDate);
      this.waveChart = wave_array['chartConfig'];
      this.forecast_ready = true ;
      // Assume that if we got this far the user has made a selection
      // if ( !this.appConfig.isLocationUserSelected() ) {
      //   this.menuCtrl.open();
      // }
    // } else {
    //}
  }
}

class WaveObject {

  name: string ;
  appConfig: any;
  initialized: boolean = false ;
  ml_name: any ;
  ml_identifier: any;
  program: any ;
  geo_array: any ;

  dt_wave_format: string ;
  dt_location_format: string ;

  geo_display_array: any ;

  dww_start_date: any ;
  dww_end_date: any ;
  start_date_ms: number;
  end_date_ms: number;
  hours_back: number;
  buoy_name = this.ml_name;

  waveHeightObservationData: any ;
  erddapWaveHeightObservationData: any ;
  wavePredictionData: any ;
  waveGlobalPredictionData: any ;
  metObservationData: any;
  necofs_wave_data: any;
  necofs_wavelength_data: any;
  chart_config_array: any ;
  erddapDatasetNames: any = [] ;
  meterologyParameters: any = [] ;


  constructor( ml_identifier: string, appConfig: AppConfig) {
    this.ml_identifier = ml_identifier ;
    this.appConfig = appConfig ;
    this.erddapDatasetNames['MET'] = '_met_all' ;
    this.meterologyParameters.push('air_temperature');
    this.meterologyParameters.push('barometric_pressure');
    this.meterologyParameters.push('wind_gust');
    this.meterologyParameters.push('wind_speed');
    this.meterologyParameters.push('wind_direction');
    this.meterologyParameters.push('visibility');
  }

  initialize_wave_object( wave_ml_data, waveService ) {
    // this.ml_identifier = wave_ml_data.monitoringlocationidentifier;
    // this.name = wave_ml_data.monitoringlocationname;
    this.ml_name = wave_ml_data.properties.name;
    this.program = wave_ml_data.properties.program;
    this.geo_array = [] ;
    this.geo_array['lat'] = wave_ml_data.geometry.coordinates[1];
    this.geo_array['lon'] = wave_ml_data.geometry.coordinates[0];

    this.dt_wave_format = waveService.appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves');
    this.dt_location_format = waveService.appConfig.gmriUnits.dataTypeFormatString('location');

    this.geo_display_array = [] ;
    this.geo_display_array['lat'] = parseFloat(sprintf(this.dt_location_format,wave_ml_data.geometry.coordinates[1])) ;
    this.geo_display_array['lon'] = parseFloat(sprintf(this.dt_location_format,wave_ml_data.geometry.coordinates[0])) ;

    this.waveHeightObservationData = null;
    this.erddapWaveHeightObservationData = null;
    this.wavePredictionData = null;
    this.waveGlobalPredictionData = null;
    this.dww_start_date = waveService.appConfig.get_erddap_dww_start_date();
    this.dww_end_date = waveService.appConfig.get_erddap_dww_end_date();
    this.buoy_name = this.ml_name;

    var date_now = new Date();
    var start_date = waveService.appConfig.getCcdFcstStartDate() ;
    // var datems = Date.parse(start_date).getTime();
    var datems = start_date.getTime();
    this.hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
    // get a start and end date in ms to limit necofs data displayed.
    this.start_date_ms = datems ;
    this.end_date_ms = waveService.appConfig.getCcdFcstEndDate().getTime();
  }
  getNECOFSWaveURL() {
    // NECOFS forecast
    // Wave
    // http://www.neracoos.org:8300/cgi-bin/necofs_query?lat=43.18&lon=-70.42&necofs_type=water_level&domain=GOM3
    var necofs_wave_qs = '/cgi-bin/necofs_query?lat=' + this.geo_array['lat'] + '&lon=' +
            this.geo_array['lon'] +
           '&necofs_type=wave&domain=GOM3';
    var necofsWaveURL = "http://www.neracoos.org:8300" + necofs_wave_qs ;
    return( necofsWaveURL ) ;
  }
  getNECOFSWaveLengthURL() {
    // NECOFS forecast
    // Wave
    // http://www.neracoos.org:8300/cgi-bin/necofs_query?lat=43.18&lon=-70.42&necofs_type=water_level&domain=GOM3
    var necofs_wave_qs = '/cgi-bin/necofs_query?lat=' + this.geo_array['lat'] + '&lon=' +
            this.geo_array['lon'] +
           '&necofs_type=wlen&domain=GOM3';
    var necofsWaveURL = "http://www.neracoos.org:8300" + necofs_wave_qs ;
    return( necofsWaveURL ) ;
  }
  getWW3URL( appConfig ) {
    // get the predicted wave data from ERDDAP
    // 2-26-2018 new 72 hour forecast is available swp is now fp (wave peak frequency, s-1)
    var path = '/erddap/griddap/WW3_72_GulfOfMaine_latest.json?' ;
    // format is start step stop for both time and position.
    // data types are
    // hs significant wave height, m
    // swp (sea_surface_wave_frequency, s)
    // dir (Dominant Wave Direction, degree_true)
    // hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += 'hs[(' + this.dww_start_date + '):1:(' + this.dww_end_date + ']' ;
    path += '[(' + this.geo_array['lat'] + '):1:(' +this.geo_array['lat'] + ')][(' + this.geo_array['lon'] + '):1:(' + this.geo_array['lon'] + ')]' ;
    // ,swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',fp[(' + this.dww_start_date + '):1:(' + this.dww_end_date + ']' ;
    path += '[(' + this.geo_array['lat'] + '):1:(' +this.geo_array['lat'] + ')][(' + this.geo_array['lon'] + '):1:(' + this.geo_array['lon'] + ')]' ;
    // ,dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',dir[(' + this.dww_start_date + '):1:(' + this.dww_end_date + ']' ;
    path += '[(' + this.geo_array['lat'] + '):1:(' +this.geo_array['lat'] + ')][(' + this.geo_array['lon'] + '):1:(' + this.geo_array['lon'] + ')]' ;

    // var plain_url = "http://www.neracoos.org" + path ;
    var encQS =  encodeURIComponent(path);
    // var encQS = path;
    var neracoosProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;
    return( neracoosProxyURL ) ;
  }
  getWW3CoastwatchGlobalDataURL(dww_start_date, dww_end_date, geo_array, appConfig) {
    let geo_array_360 : any = [] ;
    geo_array_360['lat'] = geo_array['lat'];
    geo_array_360['lon'] = 360 + parseFloat(geo_array['lon']);
    // https://coastwatch.pfeg.noaa.gov/erddap/griddap/NWW3_Global_Best.html
    // http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    // https://coastwatch.pfeg.noaa.gov/erddap/griddap/NWW3_Global_Best.json?Thgt[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)],sper[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)],shgt[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)]
    // coast watch uses longitude of degrees east 0.0 to 359.5. We are using +- 180.
    // Add 360 degrees -69.5 = 360 - 69.5 or 290.5
    var server = 'https://coastwatch.pfeg.noaa.gov';
    var path = '/erddap/griddap/NWW3_Global_Best.json?' ;
    // format is start step stop for both time and position.
    // data types are
    // Thgt (significant wave height, meters)
    // sper (swell peak wave period, seconds)
    // shgt (swell significant wave height, meters)
    // Thgt[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)]
    path += 'Thgt[(' + dww_start_date + '):1:(' + dww_end_date + '][(0.0):1:(0.0)]' ;
    path += '[(' + geo_array_360['lat'] + '):1:(' +geo_array_360['lat'] + ')][(' + geo_array_360['lon'] + '):1:(' + geo_array_360['lon'] + ')]' ;
    // ,sper[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)]
    path += ',Tper[(' + dww_start_date + '):1:(' + dww_end_date + '][(0.0):1:(0.0)]' ;
    path += '[(' + geo_array_360['lat'] + '):1:(' +geo_array_360['lat'] + ')][(' + geo_array_360['lon'] + '):1:(' + geo_array_360['lon'] + ')]' ;
    // ,shgt[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)]
    path += ',shgt[(' + dww_start_date + '):1:(' + dww_end_date + '][(0.0):1:(0.0)]' ;
    path += '[(' + geo_array_360['lat'] + '):1:(' +geo_array_360['lat'] + ')][(' + geo_array_360['lon'] + '):1:(' + geo_array_360['lon'] + ')]' ;
    // ,shgt[(2017-10-08T09:00:00Z):1:(2017-10-08T09:00:00Z)][(0.0):1:(0.0)][(-77.5):1:(77.5)][(0.0):1:(359.5)]
    path += ',sper[(' + dww_start_date + '):1:(' + dww_end_date + '][(0.0):1:(0.0)]' ;
    path += '[(' + geo_array_360['lat'] + '):1:(' +geo_array_360['lat'] + ')][(' + geo_array_360['lon'] + '):1:(' + geo_array_360['lon'] + ')]' ;

    // var plain_url = "http://www.neracoos.org" + path ;
    var encQS =  encodeURIComponent(path);
    var neracoosProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url='+ server + encQS ;

    return( neracoosProxyURL );
  }
  // the array contains erddap start and end metadata
  getERDDAPObservationURL(appConfig, parameters, erddap_array, startDate, endDate) {
    let mpKey:any;
    var date_range = this.appConfig.getERDDAPDateRange(erddap_array, startDate, endDate) ;
    var date_start_iso = date_range['date_start_iso'];
    var date_end_iso = date_range['date_end_iso'];
    // http://www.neracoos.org/erddap/tabledap/A01_met_all.json?station%2Ctime%2Cmooring_site_desc%2Cair_temperature%2Cair_temperature_qc%2Cbarometric_pressure%2Cbarometric_pressure_qc%2Cwind_gust%2Cwind_gust_qc%2Cwind_speed%2Cwind_speed_qc%2Cwind_direction%2Cwind_direction_qc%2Cvisibility%2Cvisibility_qc%2Clongitude%2Clatitude%2Cdepth&time%3E=2017-09-01T00%3A00%3A00Z&time%3C=2017-09-08T12%3A00%3A00Z

    // json p version
    // http://coastwatch.pfeg.noaa.gov/erddap/tabledap/documentation.html
    var path_jsonp = '/erddap/tabledap/' + erddap_array.datasetMatched['datasetID'] + '.json?station,time,mooring_site_desc' ;
    for( mpKey in parameters ) {
      path_jsonp += "," + parameters[mpKey] ;
    }
    path_jsonp += ",longitude,latitude,depth&time>=" + date_start_iso ;
    path_jsonp += "&time<=" + date_end_iso + "&.jsonp=JSONP_CALLBACK" ;
    // path_jsonp += "&time<=" + date_end_iso + "&.jsonp=__ng_jsonp__.__req1.finished" ;

    // json version
    var path = '/erddap/tabledap/' + erddap_array.datasetMatched['datasetID'] + '.json?station,time,mooring_site_desc' ;
    for( mpKey in parameters ) {
      path += "," + parameters[mpKey] ;
    }
    path += ",longitude,latitude,depth&time>=" + date_start_iso ;
    path += "&time<=" + date_end_iso ;
    var neracoosUnproxiedURL = "http://www.neracoos.org" + path_jsonp ;
    // var encQS =  encodeURIComponent(path);
    // var encQS = path;
    // var neracoosProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;
    return( neracoosUnproxiedURL ) ;
    // return( neracoosProxyURL ) ;
  }
  getBuoyObservationURL(appConfig) {
    let queryString:string;
    // the observed wave data from neracoos
    // this reads from the gomoos gomoos2 database of buoy data
    // http://local.drupal7.neracoos.org/data/json/buoyrecentdata.php?platform=B01&mp=no&hb=6&tsdt=significant_height_of_wind_and_swell_waves,dominant_wave_period,sea_water_temperature,sea_water_density
    if ( this.ml_name == 'A01' ) {
      queryString = '/data/json/buoyrecentdata.php?platform=' + this.buoy_name +
              '&mp=no&hb=' + this.hours_back + '&tsdt=significant_height_of_wind_and_swell_waves_3,significant_height_of_wind_and_swell_waves,dominant_wave_period,sea_water_temperature,sea_water_density';
    } else {
      queryString = '/data/json/buoyrecentdata.php?platform=' + this.buoy_name +
              '&mp=no&hb=' + this.hours_back + '&tsdt=significant_height_of_wind_and_swell_waves,dominant_wave_period,sea_water_temperature,sea_water_density';
    }
    // var encQS =  encodeURIComponent(queryString);
    var buoyObservationsURL = 'http://' + appConfig.getNJSProxyNeracoosHostPrefix() + queryString ;
    return( buoyObservationsURL);
  }
  // allow for custom start date. This is for a forecast current conditions range
  drawWaveChart(appConfig, startDate) {
    var ret_array = [] ;
    var new_series = [];
    var yaxis_array = [];
    // var count = 0 ;
    var toggle_opposite = false ;
    var param_time_series = [] ;
    // var param_time_series_range = [] ;
    var gmriUnitsHelp = new GMRIUnits();

    var max_tp = 0 ;
    var min_tp = 100 ;
    var wave_percent = appConfig.getWavePercent();
    var wave_percent_increase_prompt = '';
    var necofs_wave_percent = appConfig.getNECOFSWavePercent();
    var necofs_wave_percent_increase_prompt = '';
    var visible = true ;
    var addThisSeries = false ; // don't add series with no points is disabled
    // having multiple yAxis isn't desireable or necessary. We're comparing
    // wave heights and want a single yAxis.
    var seriesCount = 0 ; // add a y-axis for each series.

    // re-initialize this. It may have changed.
    this.end_date_ms = appConfig.getEndDate().getTime();
    // var debug_start_date = new Date(this.start_date_ms);
    // var debug_end_date = new Date(this.end_date_ms);
    var param_ts_key = 0 ;
    let resultdatems:number;
    let point_count:number;
    let obsWaveHeightM: any;
    let obsWaveHeightD: any;
    let obsWaveHeight: any ;
    let rdt_temp:string;
    let dww_key:any;
    let hs_index: any ;
    let waveHeightD:any;
    let waveHeightM:any;
    let waveHeight:any;
    // create a series of forecasts starting 2 hours ago going out 24 hours
    ///////////////
    // NECOFS Predictions
    if ( this.necofs_wave_data != undefined && this.necofs_wave_data.data != undefined ) {
      let necofs_series_object: any = {} ;
      // value suffix object
      let necofs_vs:any = {shared: true, crosshairs: true};
      necofs_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      //new_vs.valueSuffix = " feet" ;
      necofs_vs.pointFormatter = function () {
        return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
         ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
          parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
           'm)</b><br/>')
      }
      var series_name =  appConfig.getVariousPrompts('NECOFS_WAVES') ;
      necofs_series_object.name = series_name ;
      necofs_series_object.tooltip = necofs_vs;
      necofs_series_object.type = 'spline';
      necofs_series_object.color = appConfig.plotColors['necofs_waves'];
      // visible = appConfig.getUserPreferenceParameterVisibility('NECOFS_WAVES');
      necofs_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'NECOFS_WAVES') ;

      necofs_series_object.events = {
          legendItemClick: function(event) {
            // we're toggling from this value
            // I could have used the event here too it seems.
            // ios issues two events touchstart and click. Highcharts toggles
            // the visibility on both events. for example Press see, release don't see.
            // Click is the only event in the browser So on click register the change of state
            // and on touchstart undo the change.
            if ( event.browserEvent.type == "touchstart" ) {
              event.target.visible = !event.target.visible ;
            }
            if ( event.browserEvent.type == "click" ) {
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('NECOFS_WAVES') ) ;
              if(visible_value) {
                  appConfig.setUserPreferenceParameterVisibility('NECOFS_WAVES', false) ;
                } else {
                  appConfig.setUserPreferenceParameterVisibility('NECOFS_WAVES', true) ;
                }
            }
          }
      } ;
      // set up the yaxis labeling and so forth for wave
      // necofs_series_object.yAxis = 0;
      param_ts_key = 0 ;
      yaxis_array[seriesCount] = {};

      let new_label: any = {} ;
      new_label.format = '{value} ' + seriesCount  ;

      let new_title: any = {} ;
      new_title.text = 'feet' ;

      yaxis_array[seriesCount].labels = new_label;
      yaxis_array[seriesCount].title = new_title;
      yaxis_array[seriesCount].opposite = toggle_opposite;
      yaxis_array[seriesCount].gridlinewidth = 0;

      toggle_opposite = !toggle_opposite;

      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'wave Model' ;
      param_time_series[param_ts_key].uom = "flibits" ;
      param_time_series[param_ts_key].display_uom = "flibits display uom" ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      necofs_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      // loop through the points
      point_count = 0;
      for (dww_key in this.necofs_wave_data.data) {
        var point_date_ms = this.necofs_wave_data.data[dww_key][0] ;
        // The necofs service gives us all the data available and it's more
        // than BIO's ww3 so limit what's displayed to avoid artificially diminishing
        // ww3's validity.
        if ( point_date_ms > this.start_date_ms && point_date_ms < this.end_date_ms )
          {
          waveHeightM = this.necofs_wave_data.data[dww_key][1];
          if ( necofs_wave_percent != 0 ) {
            waveHeightM = waveHeightM + waveHeightM * (necofs_wave_percent / 100) ;
            if ( necofs_wave_percent > 0 ) {
              necofs_wave_percent_increase_prompt = '(+' + necofs_wave_percent + '%)';
            } else {
              necofs_wave_percent_increase_prompt = '(' + necofs_wave_percent + '%)';
            }
          }

          waveHeight = gmriUnitsHelp.conv_meters_to_feet(waveHeightM) ;
          waveHeightD = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),waveHeight)) ;

          param_time_series[param_ts_key].data[0].reading_array.push([point_date_ms,waveHeightD]);
          addThisSeries = true;
          if ( waveHeight > max_tp ) {
            max_tp = waveHeight ;
          }
          if ( waveHeight < min_tp ) {
            min_tp = waveHeight ;
          }
        }
        point_count ++;
      } // end of looping
      // if  we adjusted the wave height, reflect that in the hover text.
      if ( wave_percent_increase_prompt.length > 0 ) {
          necofs_vs.pointFormatter = function () {
            return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
             ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
             parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
              'm)</b>' +  wave_percent_increase_prompt + '<br/>')
          }
        necofs_series_object.name += wave_percent_increase_prompt ;
      }
      if ( addThisSeries ) {
        new_series.push( necofs_series_object );
      }
    }
    ///////////////
    // WW3 Predictions
    if ( this.wavePredictionData != undefined ) {
      addThisSeries = false ;
      let WW3_series_object: any = {} ;
      // value suffix object
      let WW3_vs:any = {shared: true, crosshairs: true};
      WW3_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      //new_vs.valueSuffix = " feet" ;
      WW3_vs.pointFormatter = function () {
        return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
         ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
          parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
           'm)</b><br/>')
      }
      series_name =  appConfig.getVariousPrompts('ERDDAP_PREDICTED_WAVE_HEIGHT') ;
      WW3_series_object.name = series_name ;
      WW3_series_object.tooltip = WW3_vs;
      WW3_series_object.type = 'spline';
      WW3_series_object.color = appConfig.plotColors['predicted_wave_height'];
      // visible = appConfig.getUserPreferenceParameterVisibility('ERDDAP_PREDICTED_WAVE_HEIGHT');
      WW3_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'ERDDAP_PREDICTED_WAVE_HEIGHT') ;

      WW3_series_object.events = {
          legendItemClick: function(event) {
            // we're toggling from this value
            // I could have used the event here too it seems.
            // ios issues two events touchstart and click. Highcharts toggles
            // the visibility on both events. for example Press see, release don't see.
            // Click is the only event in the browser So on click register the change of state
            // and on touchstart undo the change.
            if ( event.browserEvent.type == "touchstart" ) {
              event.target.visible = !event.target.visible ;
            }
            if ( event.browserEvent.type == "click" ) {
            var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('ERDDAP_PREDICTED_WAVE_HEIGHT') ) ;
              if(visible_value) {
                  appConfig.setUserPreferenceParameterVisibility('ERDDAP_PREDICTED_WAVE_HEIGHT', false) ;
                } else {
                  appConfig.setUserPreferenceParameterVisibility('ERDDAP_PREDICTED_WAVE_HEIGHT', true) ;
                }
            }
          }
      } ;
      // set up the yaxis labeling and so forth for wave
      // WW3_series_object.yAxis = 0;
      // seriesCount++ ;
      param_ts_key = 0 ;
      yaxis_array[seriesCount] = {};

      let new_label2: any = {} ;
      new_label2.format = '{value} ' + seriesCount  ;

      let new_title2: any = {} ;
      new_title2.text = 'feet' ;

      yaxis_array[seriesCount].labels = new_label2;
      yaxis_array[seriesCount].title = new_title2;
      yaxis_array[seriesCount].opposite = toggle_opposite;
      yaxis_array[seriesCount].gridlinewidth = 0;

      toggle_opposite = !toggle_opposite;

      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'wave Model' ;
      param_time_series[param_ts_key].uom = "flibits" ;
      param_time_series[param_ts_key].display_uom = "flibits display uom" ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      WW3_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      // loop through the points
      point_count = 0;
      // hs sea_surface_wave_significant_height
      // swp sea_surface_wave_frequency
      hs_index = appConfig.ERDDAPColumnIndexFromColumnName( this.wavePredictionData.table.columnNames, 'hs' );
      // var swp_index = appConfig.ERDDAPColumnIndexFromColumnName( this.wavePredictionData.table.columnNames, 'swp' );
      for (dww_key in this.wavePredictionData.table.rows) {
        let resultdatetext: any = this.wavePredictionData.table.rows[dww_key][0];
        // Date.parse("2016-03-31T13:00:00Z")
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                        resultdatetext.substr(11, 8) + " GMT" ;
        resultdatems = Date.parse(rdt_temp);

        // 1443600000000
        // limit the display to the same window as I'm limiting necofs.
        if ( resultdatems > this.start_date_ms && resultdatems < this.end_date_ms )
          {
          waveHeightM = this.wavePredictionData.table.rows[dww_key][hs_index];
          if ( wave_percent != 0 ) {
            waveHeightM = waveHeightM + waveHeightM * (wave_percent / 100) ;
            if ( wave_percent > 0 ) {
              wave_percent_increase_prompt = '(+' + wave_percent + '%)';
            } else {
              wave_percent_increase_prompt = '(' + wave_percent + '%)';
            }
          }

          waveHeight = gmriUnitsHelp.conv_meters_to_feet(waveHeightM) ;
          waveHeightD = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),waveHeight)) ;

          param_time_series[param_ts_key].data[0].reading_array.push([resultdatems,waveHeightD]);
          addThisSeries = true ;
          if ( waveHeight > max_tp ) {
            max_tp = waveHeight ;
          }
          if ( waveHeight < min_tp ) {
            min_tp = waveHeight ;
          }
        }
        point_count ++;
      } // end of looping
      // if  we adjusted the wave height, reflect that in the hover text.
      if ( wave_percent_increase_prompt.length > 0 ) {
          WW3_vs.pointFormatter = function () {
            return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
             ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
             parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
              'm)</b>' +  wave_percent_increase_prompt + '<br/>')
          }
        WW3_series_object.name += wave_percent_increase_prompt ;
      }
      if ( addThisSeries ) {
        new_series.push( WW3_series_object );
      }
    }    ///////////////
    // WW3 Glbal Predictions
    if ( this.waveGlobalPredictionData != undefined ) {
      addThisSeries = false ;
      let WW3_series_object: any = {} ;
      // value suffix object
      let WW3_vs:any = {shared: true, crosshairs: true};
      WW3_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      //new_vs.valueSuffix = " feet" ;
      WW3_vs.pointFormatter = function () {
        return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
         ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
          parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
           'm)</b><br/>')
      }
      series_name =  appConfig.getVariousPrompts('ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT') ;
      WW3_series_object.name = series_name ;
      WW3_series_object.tooltip = WW3_vs;
      WW3_series_object.type = 'spline';
      WW3_series_object.color = appConfig.plotColors['ww3global_predicted_wave_height'];
      // visible = appConfig.getUserPreferenceParameterVisibility('ERDDAP_PREDICTED_WAVE_HEIGHT');
      WW3_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT') ;

      WW3_series_object.events = {
          legendItemClick: function(event) {
            // we're toggling from this value
            // I could have used the event here too it seems.
            // ios issues two events touchstart and click. Highcharts toggles
            // the visibility on both events. for example Press see, release don't see.
            // Click is the only event in the browser So on click register the change of state
            // and on touchstart undo the change.
            if ( event.browserEvent.type == "touchstart" ) {
              event.target.visible = !event.target.visible ;
            }
            if ( event.browserEvent.type == "click" ) {
            var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT') ) ;
              if(visible_value) {
                  appConfig.setUserPreferenceParameterVisibility('ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT', false) ;
                } else {
                  appConfig.setUserPreferenceParameterVisibility('ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT', true) ;
                }
            }
          }
      } ;
      // set up the yaxis labeling and so forth for wave
      // WW3_series_object.yAxis = 0;
      // seriesCount++ ;
      param_ts_key = 0 ;
      yaxis_array[seriesCount] = {};

      let new_label2: any = {} ;
      new_label2.format = '{value} ' + seriesCount  ;

      let new_title2: any = {} ;
      new_title2.text = 'feet' ;

      yaxis_array[seriesCount].labels = new_label2;
      yaxis_array[seriesCount].title = new_title2;
      yaxis_array[seriesCount].opposite = toggle_opposite;
      yaxis_array[seriesCount].gridlinewidth = 0;

      toggle_opposite = !toggle_opposite;

      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'wave Model' ;
      param_time_series[param_ts_key].uom = "flibits" ;
      param_time_series[param_ts_key].display_uom = "flibits display uom" ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      WW3_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      // loop through the points
      point_count = 0;
      // hs sea_surface_wave_significant_height
      // swp sea_surface_wave_frequency
      hs_index = appConfig.ERDDAPColumnIndexFromColumnName( this.waveGlobalPredictionData.table.columnNames, 'Thgt' );
      // var swp_index = appConfig.ERDDAPColumnIndexFromColumnName( this.waveGlobalPredictionData.table.columnNames, 'Tper' );
      for (dww_key in this.waveGlobalPredictionData.table.rows) {
        let resultdatetext: any = this.waveGlobalPredictionData.table.rows[dww_key][0];
        // Date.parse("2016-03-31T13:00:00Z")
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                        resultdatetext.substr(11, 8) + " GMT" ;
        resultdatems = Date.parse(rdt_temp);

        // 1443600000000
        // limit the display to the same window as I'm limiting necofs.
        if ( resultdatems > this.start_date_ms && resultdatems < this.end_date_ms )
          {
          waveHeightM = this.waveGlobalPredictionData.table.rows[dww_key][hs_index];
          if ( wave_percent != 0 ) {
            waveHeightM = waveHeightM + waveHeightM * (wave_percent / 100) ;
            if ( wave_percent > 0 ) {
              wave_percent_increase_prompt = '(+' + wave_percent + '%)';
            } else {
              wave_percent_increase_prompt = '(' + wave_percent + '%)';
            }
          }

          waveHeight = gmriUnitsHelp.conv_meters_to_feet(waveHeightM) ;
          waveHeightD = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),waveHeight)) ;

          param_time_series[param_ts_key].data[0].reading_array.push([resultdatems,waveHeightD]);
          addThisSeries = true ;
          if ( waveHeight > max_tp ) {
            max_tp = waveHeight ;
          }
          if ( waveHeight < min_tp ) {
            min_tp = waveHeight ;
          }
        }
        point_count ++;
      } // end of looping
      // if  we adjusted the wave height, reflect that in the hover text.
      if ( wave_percent_increase_prompt.length > 0 ) {
          WW3_vs.pointFormatter = function () {
            return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
             ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
             parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
              'm)</b>' +  wave_percent_increase_prompt + '<br/>')
          }
        WW3_series_object.name += wave_percent_increase_prompt ;
      }
      if ( addThisSeries ) {
        new_series.push( WW3_series_object );
      }
    }
    /////////////////
    // Buoy Wave Data
    addThisSeries = false ;
    let buoy_series_object: any = {} ;
    // value suffix object
    let buoy_vs:any = {shared: true, crosshairs: true};
    buoy_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
    //new_vs.valueSuffix = " feet" ;
    buoy_vs.pointFormatter = function () {
      return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
       ': <b>' + parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),this.y)) + 'f (' +
       parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),gmriUnitsHelp.conv_feet_to_meters(this.y))) +
        'm)</b><br/>')
    }
    series_name =  appConfig.getVariousPrompts('BUOY_OBS_WAVE_HEIGHT') ;
    buoy_series_object.name = series_name ;
    buoy_series_object.tooltip = buoy_vs;
    buoy_series_object.visible = true ;
    buoy_series_object.type = 'spline';
    buoy_series_object.color = appConfig.plotColors['observed_wave_height'];
    visible = appConfig.getUserPreferenceParameterVisibility('BUOY_OBS_WAVE_HEIGHT');
    buoy_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'BUOY_OBS_WAVE_HEIGHT') ;

    buoy_series_object.events = {
        legendItemClick: function(event) {
          // we're toggling from this value
          // I could have used the event here too it seems.
          // ios issues two events touchstart and click. Highcharts toggles
          // the visibility on both events. for example Press see, release don't see.
          // Click is the only event in the browser So on click register the change of state
          // and on touchstart undo the change.
          if ( event.browserEvent.type == "touchstart" ) {
            event.target.visible = !event.target.visible ;
          }
          if ( event.browserEvent.type == "click" ) {
            var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('BUOY_OBS_WAVE_HEIGHT') ) ;
            if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('BUOY_OBS_WAVE_HEIGHT', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('BUOY_OBS_WAVE_HEIGHT', true) ;
              }
          }
        }
    } ;

    param_ts_key++;
    param_time_series[param_ts_key] = {} ;
    param_time_series[param_ts_key].data = [] ;  // array of dataobjects
    param_time_series[param_ts_key].name = 'Preliminary' ;
    param_time_series[param_ts_key].uom = "flibits" ;
    param_time_series[param_ts_key].display_uom = "flibits display uom" ;

    param_time_series[param_ts_key].data[0] = {};
    param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
    buoy_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

    if ( this.erddapWaveHeightObservationData != undefined ) {
      // hs sea_surface_wave_significant_height
      // swp sea_surface_wave_frequency
      var time_index = appConfig.ERDDAPColumnIndexFromColumnName( this.erddapWaveHeightObservationData.table.columnNames, 'time' );
      hs_index = appConfig.ERDDAPColumnIndexFromColumnName( this.erddapWaveHeightObservationData.table.columnNames, 'significant_wave_height' );
      // var swp_index = appConfig.ERDDAPColumnIndexFromColumnName( this.erddapWaveHeightObservationData.table.columnNames, 'dominant_wave_period' );
      // var hs_index_qc = appConfig.ERDDAPColumnIndexFromColumnName( this.erddapWaveHeightObservationData.table.columnNames, 'significant_wave_height_qc' );
      // var swp_index_qc = appConfig.ERDDAPColumnIndexFromColumnName( this.erddapWaveHeightObservationData.table.columnNames, 'dominant_wave_period_qc' );
      for (dww_key in this.erddapWaveHeightObservationData.table.rows) {
        let resultdatetext: any = this.erddapWaveHeightObservationData.table.rows[dww_key][time_index];
        // Date.parse("2016-03-31T13:00:00Z")
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                        resultdatetext.substr(11, 8) + " GMT" ;
        resultdatems = Date.parse(rdt_temp);

        // 1443600000000
        // limit the display to the same window as I'm limiting necofs.
        if ( resultdatems > this.start_date_ms && resultdatems < this.end_date_ms )
          {
          obsWaveHeightM = this.erddapWaveHeightObservationData.table.rows[dww_key][hs_index];
          obsWaveHeight = gmriUnitsHelp.conv_meters_to_feet(obsWaveHeightM);
          obsWaveHeightD = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),obsWaveHeight)) ;
          param_time_series[param_ts_key].data[0].reading_array.push([resultdatems,obsWaveHeightD]);
          addThisSeries = true ;
          if ( obsWaveHeight > max_tp ) {
            max_tp = obsWaveHeight ;
          }
          if ( obsWaveHeight < min_tp ) {
            min_tp = obsWaveHeight ;
          }
        }
        point_count ++;
      } // end of looping
    } else {
      var buoy_data = this.waveHeightObservationData ;
      let signification_height_of_wind_and_swell_waves: any ;
      if ( this.ml_name == 'A01' && buoy_data != undefined &&
              buoy_data['time_series-significant_height_of_wind_and_swell_waves_3'] != undefined  ) {
        signification_height_of_wind_and_swell_waves = buoy_data['time_series-significant_height_of_wind_and_swell_waves_3']
      } else {
        if ( buoy_data != undefined &&
            buoy_data['time_series-significant_height_of_wind_and_swell_waves'] != undefined ) {
          signification_height_of_wind_and_swell_waves =  buoy_data['time_series-significant_height_of_wind_and_swell_waves']
        }
      }
      if ( signification_height_of_wind_and_swell_waves != undefined ) {
        for (var bd_key in signification_height_of_wind_and_swell_waves) {
          let resultdatetext: any = bd_key;
          // adding two zeros seems to do the trick
          // Date.parse("2015-09-30 07:00:00-0400")
          resultdatetext += "00";
          // var resultdatems = Date.parse(resultdatetext).getTime();
          rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                          "/" + resultdatetext.substr(8,2) + " " +
                            resultdatetext.substr(11) ;
          resultdatems = Date.parse(rdt_temp);
          if ( resultdatems > this.start_date_ms && resultdatems < this.end_date_ms )
            {
            obsWaveHeightM = signification_height_of_wind_and_swell_waves[bd_key][0].reading;
            obsWaveHeight = gmriUnitsHelp.conv_meters_to_feet(obsWaveHeightM);
            obsWaveHeightD = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves'),obsWaveHeight)) ;
            param_time_series[param_ts_key].data[0].reading_array.push([resultdatems,obsWaveHeightD]);
            addThisSeries = true ;
            if ( obsWaveHeight > max_tp ) {
              max_tp = obsWaveHeight ;
            }
            if ( obsWaveHeight < min_tp ) {
              min_tp = obsWaveHeight ;
            }
            point_count ++;
          }
        }
      }
    }
    if ( addThisSeries ) {
      new_series.push( buoy_series_object );
    }
    // seriesCount++ ;
    yaxis_array[seriesCount] = {};

    let new_label3: any = {} ;
    new_label3.format = '{value} ' + seriesCount  ;

    let new_title3: any = {} ;
    new_title3.text = 'feet' ;

    yaxis_array[seriesCount].labels = new_label3;
    yaxis_array[seriesCount].title = new_title3;
    yaxis_array[seriesCount].opposite = toggle_opposite;
    yaxis_array[seriesCount].gridlinewidth = 0;

    yaxis_array[seriesCount].min = min_tp;
    yaxis_array[seriesCount].max = max_tp;
    if ( point_count > 3 ) {
      ret_array['success'] = 'yes' ;
    } else {
      ret_array['success'] = 'Not enough points were created to complete a chart for ' + this.ml_name;
    }
    // var chart_title = "MLLW of " + sf.waveMLLW;
    var chart_title = this.program + " Platform " +  this.ml_name +
      "<br/> Observed Wave Height vs Predicted" ;
    // create an array without the keys
    var yaxis = [] ;
    for ( var yaxis_key in yaxis_array ) {
      yaxis.push(yaxis_array[yaxis_key]);
    }
    var chartConfig = {
      options: {
      },
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
          type: 'spline',
          // Adding this line causes a Highcharts not defined error.
          // animation: Highcharts.svg, // don't animate in old IE
         //  marginRight: 100, // hide margin because chart display: block is in app.scss
          // marginLeft: 100,
          marginBottom: 100,
          ignoreHiddenSeries: false
      },
      legend: {
          enabled: true,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          x: 0,
          y: 0,
          floating: false,
          backgroundColor: '#FFFFFF'
          // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      rangeSelector: {
        enabled: true,
        selected: 0
      },
      scrollbar: {
        enabled: true
      },
      navigator: {
        //adaptToUpdatedData: false,
        enabled: true
      },
      title: {
          text: chart_title,
          x: -20 //center
      },
      subtitle: {
          text: "", // "from " + date_range['date_start'] + " to " + date_range['date_end'],
          x: -20
      },
      xAxis: {
        type: 'datetime',
        isDirty: true,
        labels: {
            style: {
                fontFamily: 'Tahoma'
            },
            rotation: -45
        },
        min: startDate.getTime(),
        max: appConfig.getEndDate().getTime(),
        tickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
        allowDecimals: true,
        minTickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
        ordinal: false
      },
      yAxis: yaxis,
      series: new_series
    } ;
    ret_array['chartConfig'] = chartConfig;
    return( ret_array ) ;
  }
  // who sees what is tbd and yes this function name is the same
  // in surge too so watch out!
  get_chart_display_parameters () {
    // which parameters to graph.
    var parameters = [];
    var il = this.appConfig.get_interface_level() ;
    switch (il) {
      case 0:
        if (this.appConfig.defaultParemeterVisibilities['NECOFS_WAVES'] ) {
          parameters.push( 'NECOFS_WAVES' );
        }
        if (this.appConfig.defaultParemeterVisibilities['ERDDAP_PREDICTED_WAVE_HEIGHT'] ) {
          parameters.push( 'ERDDAP_PREDICTED_WAVE_HEIGHT' );
        }
        if (this.appConfig.defaultParemeterVisibilities['BUOY_OBS_WAVE_HEIGHT'] ) {
          parameters.push( 'BUOY_OBS_WAVE_HEIGHT' );
        }
        break;
      case 1:
        if (this.appConfig.defaultParemeterVisibilities['NECOFS_WAVES'] ) {
          parameters.push( 'NECOFS_WAVES' );
        }
        if (this.appConfig.defaultParemeterVisibilities['ERDDAP_PREDICTED_WAVE_HEIGHT'] ) {
          parameters.push( 'ERDDAP_PREDICTED_WAVE_HEIGHT' );
        }
        if (this.appConfig.defaultParemeterVisibilities["ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT"] ) {
          parameters.push( "ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT" );
        }
        if (this.appConfig.defaultParemeterVisibilities['BUOY_OBS_WAVE_HEIGHT'] ) {
          parameters.push( 'BUOY_OBS_WAVE_HEIGHT' );
        }
        break;
      case 5:
      default:
        if (this.appConfig.defaultParemeterVisibilities['NECOFS_WAVES'] ) {
          parameters.push( 'NECOFS_WAVES' );
        }
        if (this.appConfig.defaultParemeterVisibilities['ERDDAP_PREDICTED_WAVE_HEIGHT'] ) {
          parameters.push( 'ERDDAP_PREDICTED_WAVE_HEIGHT' );
        }
        if (this.appConfig.defaultParemeterVisibilities['BUOY_OBS_WAVE_HEIGHT'] ) {
          parameters.push( 'BUOY_OBS_WAVE_HEIGHT' );
        }
        break;
    }
    return(parameters);
  }
}
// duplicated in waveservice-provider
class BioWW3Object {

  name: string ;
  initialized: boolean = false ;
  bioww3_data: any;

  constructor( name: string) {
    this.name = name ;
  }

  getDataURL(date_start,hours_forward, location_name, data_type_name, appConfig) {
    // this reads from the gomoos bio database of ww3 forecast data
    //http://local.drupal7.neracoos.org:8082/data/export/bioww3.php?bio_site_id=Forecast%20for%20E0111&grid=E_FINE
    var queryString = '/data/export/bioww3.php?bio_site_id=' +
              location_name + '&date_start=' + date_start +
              '&hours_forward=' + hours_forward + '&grid=' + data_type_name;
    // var encQS =  encodeURIComponent(queryString);
    var straightURL = 'http://' + appConfig.getNJSProxyNeracoosHostPrefix() + queryString ;

    return( straightURL );
  }

}
class BuoyObject {

  name: string ;
  initialized: boolean = false ;
  buoy_data: any;

  constructor( name: string) {
    this.name = name ; ;
  }

  getDataURL(date_start,hours_back, location_name, appConfig) {
    // this reads from the gomoos gomoos2 database of buoy data
    // http://local.drupal7.neracoos.org/data/json/buoyrecentdata.php?platform=B01&mp=no&hb=6&tsdt=significant_height_of_wind_and_swell_waves,dominant_wave_period,sea_water_temperature,sea_water_density
    var queryString = '/data/json/buoyrecentdata.php?platform=' +
              location_name +
              '&mp=no&hb=' + hours_back + '&tsdt=significant_height_of_wind_and_swell_waves,dominant_wave_period,sea_water_temperature,sea_water_density';
    // var encQS =  encodeURIComponent(queryString);
    var straightURL = 'http://' + appConfig.getNJSProxyNeracoosHostPrefix() + queryString ;
    return( straightURL );
  }

}
class DWWObject {

  name: string ;
  initialized: boolean = false ;
  dww_data: any;
  dww_global_data: any;

  constructor( name: string) {
    this.name = name ;
  }

  geoGetDataURL(dww_start_date, dww_end_date, geo_array, appConfig) {
    // http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    // 2-26-2018 new 72 hour forecast is available swp is now fp (wave peak frequency, s-1)
    var path = '/erddap/griddap/WW3_72_GulfOfMaine_latest.json?' ;
    // format is start step stop for both time and position.
    // data types are
    // hs significant wave height, m
    // swp (sea_surface_wave_frequency, s)
    // dir (Dominant Wave Direction, degree_true)
    // hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += 'hs[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;
    // ,swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',fp[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;
    // ,dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',dir[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;

    // var plain_url = "http://www.neracoos.org" + path ;
    var encQS =  encodeURIComponent(path);
    var neracoosProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;

    return( neracoosProxyURL );
  }
  getDataURL(dww_start_date, dww_end_date, geo_array, appConfig) {

    // http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)],dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    // 2-26-2018 new 72 hour forecast is available swp is now fp (wave peak frequency, s-1)
    var path = '/erddap/griddap/WW3_72_GulfOfMaine_latest.json?' ;
    // format is start step stop for both time and position.
    // data types are
    // hs significant wave height, m
    // swp (sea_surface_wave_frequency, s)
    // dir (Dominant Wave Direction, degree_true)
    // hs[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += 'hs[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;
    // ,swp[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',fp[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;
    // ,dir[(2016-04-01T00:00:00Z):1:(2016-04-01T00:00:00Z)][(46.05):1:(40.05)][(-72.05):1:(-63.05)]
    path += ',dir[(' + dww_start_date + '):1:(' + dww_end_date + ']' ;
    path += '[(' + geo_array['lat'] + '):1:(' +geo_array['lat'] + ')][(' + geo_array['lon'] + '):1:(' + geo_array['lon'] + ')]' ;

    // var plain_url = "http://www.neracoos.org" + path ;
    var encQS =  encodeURIComponent(path);
    var neracoosProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;

    return( neracoosProxyURL );
  }
  getNECOFSWaveURL(geo_array) {
    // NECOFS forecast
    // Wave
    // http://www.neracoos.org:8300/cgi-bin/necofs_query?lat=43.18&lon=-70.42&necofs_type=water_level&domain=GOM3
    var necofs_wave_qs = '/cgi-bin/necofs_query?lat=' + geo_array['lat'] + '&lon=' +
            geo_array['lon'] +
           '&necofs_type=wave&domain=GOM3';
    var necofsWaveURL = "http://www.neracoos.org:8300" + necofs_wave_qs ;
    return( necofsWaveURL ) ;
  }
  getNECOFSWaveLengthURL(geo_array) {
    // NECOFS forecast
    // Wave
    // http://www.neracoos.org:8300/cgi-bin/necofs_query?lat=43.18&lon=-70.42&necofs_type=water_level&domain=GOM3

    var necofs_wave_qs = '/cgi-bin/necofs_query?lat=' + geo_array['lat'] + '&lon=' +
            geo_array['lon'] +
           '&necofs_type=wlen&domain=GOM3';
    var necofsWaveURL = "http://www.neracoos.org:8300" + necofs_wave_qs ;
    return( necofsWaveURL ) ;
  }

}
// end duplicated in waveservice-provider
