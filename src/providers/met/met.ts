import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Jsonp } from '@angular/http';

import { AppConfig } from '../appconfig/appconfig';
import {GMRIMetDataset} from "../../gmri/data/gmri-met-dataset";
import { GMRIUnits } from "../../gmri/data/gmri-units";

/*
  Generated class for the MetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MetProvider {
  gmriDatasets: any = [] ;
  ml_metadata_loaded: boolean = false ;
  metProv: any;
  metProvObserver: any;
  windChart: any;
  airTempChart: any;
  visibilityChart: any;
  waterTempChart: any;
  salinityChart: any;
  barometricPressure: any;
  conductivitySigmaTChart: any;

  met_all: any;
  sbe16_all: any;
  sbe16_disox_all: any;
  sbe16_trans_all: any;
  sbe37_all: any;
  accelerometer_all: any;
  _e_waves_mstrain_all: any;
  optics_hist: any;
  optics_s: any;
  optode_all: any;
  aanderaa_all: any;
  aanderaa_o2_all: any;
  aanderaa_hist: any;

  suna_all: any;
  DSG_MA101_met: any;
  DSG_MA101_sbe37: any;
  DSG_MA101_echorange: any;
  DSG_MA101_waves: any;

  loadedMLArray: any = [] ;
  dataTypeLoaded: any = [] ;
  dataGetUrls: any = [] ;
  dataGETs: any = [] ;
  requestedData: boolean = false ;
  datasetObjects: any = [];

  constructor(public httpClient: HttpClient,
              public appConfig:AppConfig,
              public menuCtrl: MenuController,
              public gmriUnits:GMRIUnits,
              public http: Http,
              public jsonp: Jsonp) {
    console.log('Hello MetProvider Provider');
    this.metProv = Observable.create(observer => {
      this.metProvObserver = observer;
    });
    console.log('Hello MetProvider Provider');
  }
  metProvUpdates() {
    return this.metProv;
  }

  isInitialized() {
    let ret_val: boolean = false ;
    if ( !this.requestedData ) {
      ret_val = true ;
    }
  return( ret_val ) ;
  }
  resetDataGet() {
    // because some may have loaded ok previously
    this.dataTypeLoaded = [] ;
    this.dataGETs = [] ;
  }
  // setup a single dataset and all it's variables for a dataget
  // it's just a little different than setUpData below.
  setUpDataset(force_refresh, skip_plotting_parameters, erddapDatasetId, dataTypeMagicKey) {
    let visible_parameters: any = [] ;
    let dataType: any ;
    // providing an array of urls
    // buoy dates
    // var date_now = new Date();
    // var datems = Date.parse(date_start).getTime();
    // var buoy_date_start = this.appConfig.getStartDate()
    // var datems = buoy_date_start.getTime();
    // var hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
    let location_name: string = this.appConfig.platform_name ;
    let datsetKey = this.getDatasetKeyFromDatasetId(location_name, erddapDatasetId, this.appConfig)
    // getDatasetKey generates a dataset if none was found.
    if ( !this.gmriDatasets[datsetKey].initialized || force_refresh ) {
      // first use the meta data already initialized
      let mlMetaData = this.appConfig.getMonitoringLocationMetadata( location_name);
      this.gmriDatasets[datsetKey].initialize_dataset_object( mlMetaData, this.appConfig ) ;
      // this is confusing but it's getting key/value pairs of variables from the neracoos
      // erddap magic file then reducing that to just an array of variables.
      // key value pairs
      this.gmriDatasets[datsetKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                    this.appConfig, erddapDatasetId  ) ;
      // returns a straight up array
      let erdDataTypes: any = this.gmriDatasets[datsetKey].getDataVariables() ;
      // setup the prameteter Visibility. Anything not having _qc in it.
      for ( dataType in erdDataTypes ) {
        if ( erdDataTypes[dataType].indexOf("_qc") == -1 &&
              skip_plotting_parameters.indexOf(erdDataTypes[dataType]) == -1 ) {
          visible_parameters.push(erdDataTypes[dataType]);
        }
      }
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      let return_erddap: any = this.appConfig.neracoosErddap.getDatasetDateRange(this.appConfig, this.gmriDatasets[datsetKey].ml_name, erddapDatasetId );
      if ( return_erddap['datasetID'] != null &&
            return_erddap['start_time_msse'] != undefined &&
            return_erddap['end_time_msse'] != undefined) {
        let getErdObsURL : string = this.gmriDatasets[datsetKey].getERDDAPObservationURL(this.appConfig, erdDataTypes, return_erddap) ;
        this.dataGetUrls.push(getErdObsURL) ;
        let getBuoyErdObservations = this.jsonp.request(getErdObsURL).map(res => res.json());
        // 9/11/2017 get erddap to use jsonp.
        this.dataGETs.push( getBuoyErdObservations);
        this.dataTypeLoaded.push(dataTypeMagicKey);
      }
    }
  }
  // set up the data gets for these data types of interest.
  // NOTE: they should identify with a single datasetID
  setUpData(force_refresh, visible_parameters, erdDataTypeOfInterest, dataTypeMagicKey) {
    // providing an array of urls
    // buoy dates
    // var date_now = new Date();
    // var datems = Date.parse(date_start).getTime();
    // var buoy_date_start = this.appConfig.getStartDate()
    // var datems = buoy_date_start.getTime();
    // var hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
    let location_name: string = this.appConfig.platform_name ;
    // look for some sample data types to see if we already have this dataset
    let datsetKey = this.getDatasetKey(location_name, erdDataTypeOfInterest, this.appConfig);
    // getDatasetKey generates a dataset if none was found.
    if ( !this.gmriDatasets[datsetKey].initialized || force_refresh ) {
      // setup the prameteter Visibility
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      // first use the meta data already initialized
      let mlMetaData = this.appConfig.getMonitoringLocationMetadata( location_name);
      this.gmriDatasets[datsetKey].initialize_dataset_object( mlMetaData, this.appConfig ) ;
      // Erddap data.
      // getDatasetID only returns and id if ALL the variable exist in a single
      // dataset!
      // I need to get these from Eric's metadata eventually
      // ok use a single datatype to retrieve a datasetid then get all the variables
      // from that dataset, then ask for all the data. What if that datatype isn't there?
      // for example the sensor has broken.
      let return_erddap_dtoiID: any = this.appConfig.neracoosErddap.getDatasetID(this.appConfig,
                                      this.gmriDatasets[datsetKey].ml_name, erdDataTypeOfInterest );
      if ( return_erddap_dtoiID['datasetID'] != null ) {
        // key value pairs
        this.gmriDatasets[datsetKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                      this.appConfig, return_erddap_dtoiID['datasetID']  ) ;
        // returns a straight up array
        let erdDataTypes: any = this.gmriDatasets[datsetKey].getDataVariables() ;
        let return_erddap: any = this.appConfig.neracoosErddap.getDatasetID(this.appConfig, this.gmriDatasets[datsetKey].ml_name, erdDataTypes );
        if ( return_erddap['datasetID'] != null ) {
          let getErdObsURL : string = this.gmriDatasets[datsetKey].getERDDAPObservationURL(this.appConfig, erdDataTypes, return_erddap) ;
          this.dataGetUrls.push(getErdObsURL) ;
          let getBuoyErdObservations = this.jsonp.request(getErdObsURL).map(res => res.json());
          // 9/11/2017 get erddap to use jsonp.
          this.dataGETs.push( getBuoyErdObservations);
          this.dataTypeLoaded.push(dataTypeMagicKey);
        }
      }
    }
  }
  getData( skipPlottingParameters) {
    // block redundant calls
    if ( !this.requestedData ) {
      this.requestedData = true ;
      // have the http get's go get the data.
      // this is still subject to problems. I'm utilizing the dataTypeLoaded array
      // to keep track of the url's that are being accessed. But  what if this is hit
      // again before the observable has come back? It won't happen now but
      // it's a model that needs work to be safe.
      if ( this.dataGETs.length > 0 ) {
        Observable.forkJoin(this.dataGETs).subscribe(
          results => this.obsDataReady( results, this.dataTypeLoaded,skipPlottingParameters),
          error => this.obsDataError( "ERDDAP data Failed to Load", error, this.dataGetUrls ),
          () => this.obsDataComplete( "ERDDAP Data Complete", this.dataGetUrls ));
      } else {
        // the data was already loaded
        this.requestedData = false ;
        // let ml_location_name: string = this.appConfig.platform_name ;
        // use some sample data types to get this dataset
        // let erdDataTypeOfInterest  : any = [ "air_temperature", "air_temperature_qc",
        //                                "wind_speed", "wind_speed_qc"];
        // let datsetKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
        // wave chart
        // let wave_array : any = this.gmriDatasets[datsetKey].drawWaveChart(this.appConfig);
        // this.waveChart = wave_array['chartConfig'];
      }
    }
  }
  obsDataReady(results, types_array, skipPlottingParameters){
      // data_queried is a little useless  here
      let parameters: any;
      let chart_results: any;
      let measurement_system = 'nautical';
      let ml_location_name: string;
      let erdDataTypeOfInterest  : any = [] ;
      let mlKey : any ;
      let columnNameKey: any ;

      for ( var dKey in types_array ) {
        // switch on the magic key
        switch ( types_array[dKey] ) {
          case 'met_all' :
          case 'sbe37_all':
          case 'sbe16_all':
          case 'sbe16_disox_all':
          case 'sbe16_trans_all':
          case 'accelerometer_all' :
          case '_e_waves_mstrain_all' :
          case 'aanderaa_all' :
          case 'aanderaa_o2_all' :
          case 'aanderaa_hist' :
          case 'optics_hist':
          case 'optics_s':
          case 'optode_all':
          case 'suna_all':
          case 'DSG_MA101_met' :
          case 'DSG_MA101_sbe37' :
          case 'DSG_MA101_echorange' :
          case 'DSG_MA101_waves' :
            // get the object for this location
            ml_location_name  = this.appConfig.platform_name ;
            // reset this
            erdDataTypeOfInterest = [] ;
            for (columnNameKey in results[dKey].table.columnNames ) {
              // plot it if it's not in the list to skip and it's not a qc name.
              if ( skipPlottingParameters.indexOf(results[dKey].table.columnNames[columnNameKey]) == -1 &&
                    results[dKey].table.columnNames[columnNameKey].indexOf("_qc") == -1 ) {
                erdDataTypeOfInterest.push(results[dKey].table.columnNames[columnNameKey]) ;
              }
            }
            // look for some sample data types to see if we already have this dataset
            mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
            this.gmriDatasets[mlKey].observationData = results[dKey] ;

            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, erdDataTypeOfInterest,
                                            measurement_system, types_array[dKey]);
            this[types_array[dKey]] = chart_results['chartConfig'];
            break;
          case 'ERDDAP_MET_OBSERVATIONS':
            // get the object for this location
            ml_location_name  = this.appConfig.platform_name ;
            // look for some sample data types to see if we already have this dataset
            erdDataTypeOfInterest = [ "air_temperature", "air_temperature_qc",
                                      "wind_speed", "wind_speed_qc"];
            mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
            this.gmriDatasets[mlKey].observationData = results[dKey] ;

            parameters = ['wind_speed', 'wind_gust', 'wind_direction']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.windChart = chart_results['chartConfig'];

            parameters = ['air_temperature']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.airTempChart = chart_results['chartConfig'];

            parameters = ['visibility']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.visibilityChart = chart_results['chartConfig'];

            parameters = ['barometric_pressure']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.barometricPressure = chart_results['chartConfig'];
            break;
          case 'ERDDAP_SBE16_OBSERVATIONS':
            // get the object for this location
            ml_location_name= this.appConfig.platform_name ;
            // look for some sample data types to see if we already have this dataset
            erdDataTypeOfInterest = [ "temperature", "temperature_qc",
                                    "salinity", "salinity_qc"];
            mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
            this.gmriDatasets[mlKey].observationData = results[dKey] ;

            parameters = ['temperature']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.waterTempChart = chart_results['chartConfig'];

            parameters = ['salinity']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.salinityChart = chart_results['chartConfig'];

            parameters = ['conductivity', 'sigma_t']
            chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
            this.conductivitySigmaTChart = chart_results['chartConfig'];
            break;
          default:
            break;
        }
      }
      this.requestedData = false ;
      // send out an event object
      let event_obj: any = { name: "erddap_data_available" };
      if ( this.metProvObserver != undefined ) {
        this.metProvObserver.next(event_obj);
      }
  }
  obsDataError( data_queried, error, types_array) {
    this.requestedData = false ;
    // send out an event object
    let event_obj: any = { name: "initial_app_data_error" };
    if ( this.metProvObserver != undefined ) {
      this.metProvObserver.next(event_obj);
    }
  }
  obsDataComplete(data_queried, types_array) {
    // send out an event object
    this.requestedData = false ;
    let event_obj: any = { name: "initial_app_data_complete" };
    if ( this.metProvObserver != undefined ) {
      this.metProvObserver.next(event_obj);
    }
  }
  // get a key to the object or create a new one.
  // Using object keys to avoid duplicating the object in the array
  // and be able to update it in place.
  // WW3 data from ERDDAP
  // now searching data_variables (an objec) to see if any of the data types
  // of interest is used as a key in it. If so we've already asked for it.
  getDatasetKey(ml_identifier, erdDataTypesOfInterest, appConfig) {
    let found: boolean = false ;
    let OKey: any = 0 ;
    let dvKey: any ;
    let matched_array : any = [] ;
    let matchKey: any ;
    let max_matched: any = 0 ;

    for ( var eKey in this.gmriDatasets ) {
      if ( this.gmriDatasets[eKey].ml_identifier == ml_identifier ) {
        for ( dvKey in this.gmriDatasets[eKey].data_variables ) {
          if ( erdDataTypesOfInterest.indexOf(dvKey) != -1 ) {
            // count and save the matches
            if ( matched_array[eKey] == undefined ) {
              matched_array[eKey] = 1 ;
            } else {
              matched_array[eKey]++ ;
            }
          }
        }
      }
    }
    // get the maximum matches
    for (matchKey in matched_array) {
      if ( matched_array[matchKey] > max_matched ) {
        max_matched = matched_array[matchKey] ;
        OKey = matchKey ;
        found = true ;
      }
    }
    if ( !found ) {
      let newObject = new GMRIMetDataset(ml_identifier, appConfig) ;
      this.gmriDatasets.push(newObject);
      return ( this.gmriDatasets.length - 1 ) ;
    }
  return ( OKey );
  }
  // get a key to the object or create a new one.
  // Using object keys to avoid duplicating the object in the array
  // and be able to update it in place.
  // WW3 data from ERDDAP
  // Searches for a datasetid match
  getDatasetKeyFromDatasetId(ml_identifier, erddapDatasetId, appConfig) {
    let found: boolean = false ;
    let OKey: any = 0 ;
    for ( var eKey in this.gmriDatasets ) {
      if ( this.gmriDatasets[eKey].ml_identifier == ml_identifier &&
              this.gmriDatasets[eKey].datasetId == erddapDatasetId) {
        found = true;
        OKey = eKey ;
        break;
      }
    }
    if ( !found ) {
      let newObject = new GMRIMetDataset(ml_identifier, appConfig) ;
      this.gmriDatasets.push(newObject);
      return ( this.gmriDatasets.length - 1 ) ;
    }
  return ( OKey );
  }
}
