import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuController, Events} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Jsonp } from '@angular/http';

import { AppConfig } from '../appconfig/appconfig';
import {GMRIMetDataset} from "../../gmri/data/gmri-met-dataset";

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

  // Charts
  windChart: any;
  airTempChart: any;
  visibilityChart: any;
  waterTempChart: any;
  salinityChart: any;
  barometricPressure: any;
  conductivitySigmaTChart: any;
  designerChart: any ;

  met_all: any;
  sbe16_all: any;
  sbe16_disox_all: any;
  sbe16_trans_all: any;
  sbe37_all: any;
  accelerometer_all: any;
  e_waves_mstrain_all: any;
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

  // Data
  dataDisplay: any = {} ;

  loadedMLArray: any = [] ;
  dataTypeLoaded: any = [] ;
  dataGetUrls: any = [] ;
  dataGETs: any = [] ;
  requestedData: boolean = false ;
  datasetObjects: any = [];
  platformParameterList: any = [] ;
  buoySelectedList: any = [] ;

  constructor(public httpClient: HttpClient,
              public appConfig:AppConfig,
              public menuCtrl: MenuController,
              public http: Http,
              public jsonp: Jsonp,
              public events: Events) {
    console.log('Hello MetProvider Provider');
    this.metProv = Observable.create(observer => {
      this.metProvObserver = observer;
    });
    console.log('Hello MetProvider Provider');

    this.dataDisplay.title = "Select a Platform";
    this.dataDisplay.subtitle = "";
    this.dataDisplay.seriesArray = [] ;
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
  resetDatasetsGraphs() {
    this.met_all = null ;
    this.sbe16_all = null ;
    this.sbe16_disox_all = null ;
    this.sbe16_trans_all = null ;
    this.sbe37_all = null ;
    this.accelerometer_all = null ;
    this.e_waves_mstrain_all = null ;
    this.optics_hist = null ;
    this.optics_s = null ;
    this.optode_all = null ;
    this.aanderaa_all = null ;
    this.aanderaa_o2_all = null ;
    this.aanderaa_hist = null ;

    this.suna_all = null ;
    this.DSG_MA101_met = null ;
    this.DSG_MA101_sbe37 = null ;
    this.DSG_MA101_echorange = null ;
    this.DSG_MA101_waves = null ;
  }
  setPlatformParameterList() {
    let data_type: any = {} ;
    let parameterObject: any ;
    let mlMetaData : any ;
    let bKey: any ;
    // remember the currently selected parameters
    let existingSelectionList = this.platformParameterList ;
    this.platformParameterList = [] ;
    for ( bKey in this.buoySelectedList) {
      mlMetaData = this.appConfig.getMonitoringLocationMetadata( this.buoySelectedList[bKey].name);
      if ( this.buoySelectedList[bKey].selected ) {
        for ( data_type in mlMetaData.properties.data_types ) {
          if ( this.appConfig.gmriUnits.skip_plotting_parameters.indexOf(data_type) == -1 &&
                data_type.indexOf('_qc') == -1 ) {
            parameterObject = {} ;
            parameterObject.erddap_data_type = data_type ;
            parameterObject.cf_data_type = mlMetaData.properties.data_types[data_type] ;
            parameterObject.description = this.appConfig.gmriUnits.getDataTypeDescription(data_type);
            if ( this.getParameterSelect( existingSelectionList, parameterObject.description) ) {
              parameterObject.selected = true ;
            } else {
              parameterObject.selected = false ;
            }
            if ( !this.isParameterInList(parameterObject.description)) {
              this.platformParameterList.push(parameterObject);
            }
          }
        }
      }
    }
  }
  // check for an existing parameter in the list
  isParameterInList( parameter) {
    let pKey: any ;
    let ret_val: boolean = false ;
    for ( pKey in this.platformParameterList ) {
      if (this.platformParameterList[pKey].description == parameter ) {
        ret_val = true;
        break;
      }
    }
    return( ret_val) ;
  }
  // return the selected status of a parameter in a list
  // this is for moving from one list to a new list with
  // potentially different parametrs
  getParameterSelect( platformParameterList, parameter) {
    let pKey: any ;
    let ret_val: boolean = false ;
    for ( pKey in platformParameterList ) {
      if (platformParameterList[pKey].description == parameter &&
        platformParameterList[pKey].selected) {
        ret_val = true;
        break;
      }
    }
    return( ret_val) ;
  }
  getPlatformParameterList() {
    return( this.platformParameterList);
  }
  updateParameterVisibility(parameter, visibility) {
    let pKey: any ;
    for ( pKey in this.platformParameterList ) {
      if ( this.platformParameterList[pKey].description == parameter ) {
        this.platformParameterList[pKey].selected = visibility ;
        break;
      }
    }
  }
  setBuoySelectionList(waveService) {
    let lKey: any;
    let buoyObject: any ;
    this.buoySelectedList = [] ;

    for ( lKey in waveService.wave_locations ) {
      buoyObject = {} ;
      buoyObject.name = waveService.wave_locations[lKey].properties.name;
      buoyObject.selected = false ;
      this.buoySelectedList.push(buoyObject);
    }
  }
  getBuoySelectionList() {
    return( this.buoySelectedList);
  }
  updateBuoySelected(name, visibility) {
    let pKey: any ;
    for ( pKey in this.buoySelectedList ) {
      if ( this.buoySelectedList[pKey].name == name ) {
        this.buoySelectedList[pKey].selected = visibility ;
        break;
      }
    }
  }
  // setup a single dataset and all it's variables for a dataget
  // it's just a little different than setUpData below.
  setUpDataset(force_refresh, skip_plotting_parameters, erddapDatasetId,
            dataTypeMagicKey, visible_parameters, location_name, graph_type) {
    let ret_val : any = [] ;
    let dataType: any ;
    ret_val['dataAvailable'] = false ;
    ret_val['dataLoaded'] = false ;

    // providing an array of urls
    // buoy dates
    // var date_now = new Date();
    // var datems = Date.parse(date_start).getTime();
    // var buoy_date_start = this.appConfig.getStartDate()
    // var datems = buoy_date_start.getTime();
    // var hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
    let datsetKey = this.getDatasetKeyFromDatasetId(location_name, erddapDatasetId, this.appConfig)
    // getDatasetKey generates a dataset if none was found.
    if ( !this.gmriDatasets[datsetKey].isInitialized(this.appConfig) || force_refresh ) {
      // first use the meta data already initialized
      let mlMetaData = this.appConfig.getMonitoringLocationMetadata( location_name);
      this.gmriDatasets[datsetKey].initialize_dataset_object( mlMetaData, this.appConfig ) ;
      // save this in the object
      this.gmriDatasets[datsetKey].setDatasetId( erddapDatasetId );
      // this is confusing but it's getting key/value pairs of variables from the neracoos
      // erddap magic file then reducing that to just an array of variables.
      // key value pairs
      this.gmriDatasets[datsetKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                    this.appConfig, erddapDatasetId  ) ;
      // returns a straight up array
      let erdDataTypes: any = this.gmriDatasets[datsetKey].getDataVariables() ;
      // setup the prameteter Visibility if none have been passed in.
      // Anything not having _qc in it.
      if ( visible_parameters.length == 0 ) {
        for ( dataType in erdDataTypes ) {
          if ( erdDataTypes[dataType].indexOf("_qc") == -1 &&
                skip_plotting_parameters.indexOf(erdDataTypes[dataType]) == -1 ) {
            visible_parameters.push(erdDataTypes[dataType]);
          }
        }
      }
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      // save these for drawing the graph.
      this.gmriDatasets[datsetKey].plottedParameters[graph_type] = visible_parameters ;
      let return_erddap: any = this.appConfig.neracoosErddap.getDatasetDateRange(this.appConfig,
                                      this.gmriDatasets[datsetKey].ml_name, erddapDatasetId );
      if ( return_erddap.datasetMatched['datasetID'] != null &&
            return_erddap.datasetMatched['start_time_msse'] != undefined &&
            return_erddap.datasetMatched['end_time_msse'] != undefined) {
        // save this date range in the dataset
        this.gmriDatasets[datsetKey].setDatasetRetrievedDateRange(return_erddap.datasetMatched['start_time_msse'],
                                      return_erddap.datasetMatched['end_time_msse'] );
        let getErdObsURL : string = this.gmriDatasets[datsetKey].getERDDAPObservationURL(this.appConfig, erdDataTypes, return_erddap) ;
        this.dataGetUrls.push(getErdObsURL) ;
        let getBuoyErdObservations = this.jsonp.request(getErdObsURL).map(res => res.json());
        // 9/11/2017 get erddap to use jsonp.
        this.dataGETs.push( getBuoyErdObservations);
        this.dataTypeLoaded.push(dataTypeMagicKey);
        ret_val['dataAvailable'] = true ;
        ret_val['dataLoaded'] = false ;
      }
    } else {
      // visible parameters are different for different graph types.
      // this is confusing but it's getting key/value pairs of variables from the neracoos
      // erddap magic file then reducing that to just an array of variables.
      // key value pairs
      this.gmriDatasets[datsetKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                    this.appConfig, erddapDatasetId  ) ;
      // returns a straight up array
      let erdDataTypes: any = this.gmriDatasets[datsetKey].getDataVariables() ;
      // setup the prameteter Visibility if none have been passed in.
      // Anything not having _qc in it.
      if ( visible_parameters.length == 0 ) {
        for ( dataType in erdDataTypes ) {
          if ( erdDataTypes[dataType].indexOf("_qc") == -1 &&
                skip_plotting_parameters.indexOf(erdDataTypes[dataType]) == -1 ) {
            visible_parameters.push(erdDataTypes[dataType]);
          }
        }
      }
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      // save these for drawing the graph.
      this.gmriDatasets[datsetKey].plottedParameters[graph_type] = visible_parameters ;
      ret_val['dataAvailable'] = true ;
      ret_val['dataLoaded'] = true ;
    }
  return(ret_val);
  }
  // set up the data gets for these data types of interest.
  // NOTE: they should identify with a single datasetID
  setUpData(force_refresh, visible_parameters, erdDataTypeOfInterest, dataTypeMagicKey, graph_type) {
    let ret_val : boolean = false ;
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
    if ( !this.gmriDatasets[datsetKey].isInitialized(this.appConfig) || force_refresh ) {
      // setup the prameteter Visibility
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      // save these for drawing the graph.
      this.gmriDatasets[datsetKey].plottedParameters[graph_type] = visible_parameters ;
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
      if ( return_erddap_dtoiID.datasetMatched['datasetID'] != null &&
            return_erddap_dtoiID.datasetMatched['ret_date_start_msse'] != undefined &&
            return_erddap_dtoiID.datasetMatched['ret_date_end_msse'] != undefined ) {
        // save this date range in the dataset
        this.gmriDatasets[datsetKey].setDatasetRetrievedDateRange(return_erddap_dtoiID.datasetMatched['ret_date_start_msse'],
                                      return_erddap_dtoiID.datasetMatched['ret_date_end_msse'] );
        // save this in the object
        this.gmriDatasets[datsetKey].setDatasetId( return_erddap_dtoiID.datasetMatched['datasetID'] );
        // key value pairs
        this.gmriDatasets[datsetKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                      this.appConfig, return_erddap_dtoiID.datasetMatched['datasetID']  ) ;
        // returns a straight up array
        let erdDataTypes: any = this.gmriDatasets[datsetKey].getDataVariables() ;
        let return_erddap: any = this.appConfig.neracoosErddap.getDatasetID(this.appConfig, this.gmriDatasets[datsetKey].ml_name, erdDataTypes );
        if ( return_erddap.datasetMatched['datasetID'] != null ) {
          let getErdObsURL : string = this.gmriDatasets[datsetKey].getERDDAPObservationURL(this.appConfig, erdDataTypes, return_erddap) ;
          this.dataGetUrls.push(getErdObsURL) ;
          let getBuoyErdObservations = this.jsonp.request(getErdObsURL).map(res => res.json());
          // 9/11/2017 get erddap to use jsonp.
          this.dataGETs.push( getBuoyErdObservations);
          this.dataTypeLoaded.push(dataTypeMagicKey);
          ret_val = true ;
        }
      }
    } else {
      // setup the prameteter Visibility
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(0, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(1, visible_parameters);
      this.gmriDatasets[datsetKey].setInterfaceLevelParameterVisibility(2, visible_parameters);
      // save these for drawing the graph.
      this.gmriDatasets[datsetKey].plottedParameters[graph_type] = visible_parameters ;
      // dataset already acquired
      ret_val = true ;
    }
    return(ret_val);
  }
  getData( skipPlottingParameters, graph_instructions ){
    // block redundant calls
    if ( !this.requestedData ) {
      this.requestedData = true ;
      switch ( graph_instructions.graph_type ) {
        case 'no_graph_single_dataset' :
          if ( this.dataGETs.length > 0 ) {
            Observable.forkJoin(this.dataGETs).subscribe(
              results => this.obsDataReady( results, this.dataTypeLoaded,skipPlottingParameters,graph_instructions),
              error => this.obsDataError( "ERDDAP data Failed to Load", error, this.dataGetUrls, graph_instructions ),
              () => this.obsDataComplete( "ERDDAP Data Complete", this.dataGetUrls, graph_instructions));
          } else {
            // the data was already loaded
            this.requestedData = false ;
            this.createData(skipPlottingParameters,graph_instructions) ;
          }
          break;
        case 'multiple_dataset':
        case 'single_dataset':
        case 'custom_observations':
        default:
          // have the http get's go get the data.
          // this is still subject to problems. I'm utilizing the dataTypeLoaded array
          // to keep track of the url's that are being accessed. But  what if this is hit
          // again before the observable has come back? It won't happen now but
          // it's a model that needs work to be safe.
          if ( this.dataGETs.length > 0 ) {
            Observable.forkJoin(this.dataGETs).subscribe(
              results => this.obsGraphDataReady( results, this.dataTypeLoaded,skipPlottingParameters,graph_instructions),
              error => this.obsDataError( "ERDDAP data Failed to Load", error, this.dataGetUrls, graph_instructions ),
              () => this.obsDataComplete( "ERDDAP Data Complete", this.dataGetUrls, graph_instructions));
          } else {
            // the data was already loaded
            this.requestedData = false ;
            this.createChart(skipPlottingParameters,graph_instructions) ;
            // let ml_location_name: string = this.appConfig.platform_name ;
            // use some sample data types to get this dataset
            // let erdDataTypeOfInterest  : any = [ "air_temperature", "air_temperature_qc",
            //                                "wind_speed", "wind_speed_qc"];
            // let datsetKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
            // wave chart
            // let wave_array : any = this.gmriDatasets[datsetKey].drawWaveChart(this.appConfig);
            // this.waveChart = wave_array['chartConfig'];
          }
          break;
      }
    }
  }
  // data only no graphing
  obsDataReady(results, types_array, skipPlottingParameters,graph_instructions){
      // data_queried is a little useless  here
      let ml_location_name: string;
      let mlKey : any ;
      let dKey : any ;


      switch ( graph_instructions.graph_type ) {
        case 'no_graph_single_dataset':
            for ( dKey in graph_instructions.request_dataset_ids ) {
              // get the object for this location
              ml_location_name  = this.appConfig.platform_name ;
              mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                                graph_instructions.request_dataset_ids[dKey], this.appConfig) ;
              this.gmriDatasets[mlKey].observationData = results[dKey] ;
              }
            break;
          default:
            break;
        } // end on switch for graph_type
      this.requestedData = false ;
      this.createData(skipPlottingParameters,graph_instructions) ;
      // send out an event object
      let event_obj: any = { name: "data_available" };
      if ( this.metProvObserver != undefined ) {
        this.metProvObserver.next(event_obj);
      }
  }
  obsGraphDataReady(results, types_array, skipPlottingParameters,graph_instructions){
      // data_queried is a little useless  here
      let ml_location_name: string;
      let erdDataTypeOfInterest  : any = [] ;
      let mlKey : any ;
      let dKey : any ;
      let columnNameKey: any ;


      switch ( graph_instructions.graph_type ) {
        case 'single_dataset':
            for ( dKey in graph_instructions.request_dataset_ids ) {
              // get the object for this location
              ml_location_name  = this.appConfig.platform_name ;
              mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                                graph_instructions.request_dataset_ids[dKey], this.appConfig) ;
              this.gmriDatasets[mlKey].observationData = results[dKey] ;
              }
            this.resetDatasetsGraphs() ;
            break;
          case 'multiple_dataset':
            // there are 2 sets of parameters here.
            // 1) erdDataTypeOfInterest is gleaned from the results and used to find the dataset
            // 2) plottedParemeters was determined previously after searching for datasets
            for ( dKey in graph_instructions.request_dataset_ids ) {
              // reset this
              erdDataTypeOfInterest = [] ;
              for (columnNameKey in results[dKey].table.columnNames ) {
                // grab the station name as it goes by
                if ( results[dKey].table.columnNames[columnNameKey] == 'station') {
                  ml_location_name = results[dKey].table.rows[0][columnNameKey] ;
                }
              }
              mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                                graph_instructions.request_dataset_ids[dKey], this.appConfig) ;
              this.gmriDatasets[mlKey].observationData = results[dKey] ;
            }

            break;
          case 'custom_observations':
            for ( dKey in types_array ) {
              // switch on the magic key
              switch ( types_array[dKey] ) {
                case 'ERDDAP_MET_OBSERVATIONS':
                  // get the object for this location
                  ml_location_name  = this.appConfig.platform_name ;
                  // look for some sample data types to see if we already have this dataset
                  erdDataTypeOfInterest = [ "air_temperature", "air_temperature_qc",
                                            "wind_speed", "wind_speed_qc"];
                  mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
                  this.gmriDatasets[mlKey].observationData = results[dKey] ;
                  break;
                case 'ERDDAP_SBE16_OBSERVATIONS':
                  // get the object for this location
                  ml_location_name= this.appConfig.platform_name ;
                  // look for some sample data types to see if we already have this dataset
                  erdDataTypeOfInterest = [ "temperature", "temperature_qc",
                                          "salinity", "salinity_qc"];
                  mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
                  this.gmriDatasets[mlKey].observationData = results[dKey] ;
                  break;
                default:
                  break;
              } // end of switch on types_array values
            } // end on walking types_array
            break;
          default:
            break;
        } // end on switch for graph_type
      this.requestedData = false ;
      this.createChart(skipPlottingParameters,graph_instructions) ;
      // send out an event object
      let event_obj: any = { name: "chart_available" };
      if ( this.metProvObserver != undefined ) {
        this.metProvObserver.next(event_obj);
      }
  }
  obsDataError( data_queried, error, types_array,graph_instructions) {
    this.requestedData = false ;
    // send out an event object
    let event_obj: any = { name: "initial_app_data_error" };
    if ( this.metProvObserver != undefined ) {
      this.metProvObserver.next(event_obj);
    }
  }
  obsDataComplete(data_queried, types_array,graph_instructions) {
    // send out an event object
    this.requestedData = false ;
    let event_obj: any = { name: "initial_app_data_complete" };
    if ( this.metProvObserver != undefined ) {
      this.metProvObserver.next(event_obj);
    }
  }
  // the data is all ready and in datasets. Create a chart.
  createChart(skipPlottingParameters,graph_instructions){
      // data_queried is a little useless  here
      let parameters: any;
      let chart_results: any;
      let measurement_system = 'nautical';
      let ml_location_name: string;
      let erdDataTypeOfInterest  : any = [] ;
      let mlKey : any ;
      let dKey : any ;
      let columnNameKey: any ;
      let datasetID: string ;
      let dataType:any;
      let dataTypeMagicKey: any ;

      let newSeries:any ;
      let seriesKey: any ;
      let seriesArray: any = [] ;
      let myAxisArray: any = [] ;
      let intKeyAxisArray: any = [] ;
      let missingyAxisKeysArray: any = [] ;
      let myAxisKey: any ;
      let missingKey: any ;
      let chartTitle: string = "";
      let chartSubTitle:string = '';
      let savedFirstDatasetKey: any ;
      let bOpposite: boolean = false ;
      let cKey: any ;
      let colorRampIndex: number = -1 ;
      let titleArray: any = [] ;


      switch ( graph_instructions.graph_type ) {
        case 'single_dataset':
            // get the object for this location
            ml_location_name  = this.appConfig.platform_name ;
            for ( dKey in graph_instructions.graph_datasets ) {
                // unique to each dataset.
                chartTitle = '';
                chartSubTitle = '' ;
                seriesArray = [] ;
                // dataset id is a combination of the platoform name and the dataset type.
                // magic stuff.
                datasetID = ml_location_name + "_" + graph_instructions.graph_datasets[dKey] ;
                mlKey = this.getDatasetKeyFromDatasetId(ml_location_name, datasetID, this.appConfig) ;
                // key value pairs
                this.gmriDatasets[mlKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                              this.appConfig, datasetID  ) ;
                // returns a straight up array
                let erdDataTypes: any = this.gmriDatasets[mlKey].getDataVariables() ;
                // Anything not having _qc in it.
                for ( dataType in erdDataTypes ) {
                  if ( erdDataTypes[dataType].indexOf("_qc") == -1 &&
                        skipPlottingParameters.indexOf(erdDataTypes[dataType]) == -1 ) {
                    erdDataTypeOfInterest.push(erdDataTypes[dataType]);
                  }
                }
                // get the variables from this dataset
                // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, erdDataTypeOfInterest,
                //                                 measurement_system, graph_instructions.graph_datasets[dKey]);
                chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            this.gmriDatasets[mlKey].plottedParameters[graph_instructions.graph_type],
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                // using the not so standard dataset names as the variable name too!
                this[graph_instructions.graph_datasets[dKey]] = chart_results['chartConfig'];
              }
            break;
          case 'multiple_dataset':
            // there are 2 sets of parameters here.
            // 1) erdDataTypeOfInterest is gleaned from the results and used to find the dataset
            // 2) plottedParemeters was determined previously after searching for datasets
            for ( dKey in graph_instructions.graph_dataset_ids ) {
              ml_location_name = graph_instructions.graph_dataset_ids[dKey].substr(0,
                      graph_instructions.graph_dataset_ids[dKey].indexOf("_") ) ;
              mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                    graph_instructions.graph_dataset_ids[dKey], this.appConfig) ;
              colorRampIndex = graph_instructions.colorRampArray[dKey] ;
              // reset this
              erdDataTypeOfInterest = [] ;
              for (columnNameKey in this.gmriDatasets[mlKey].observationData.table.columnNames ) {
                // plot it if it's not in the list to skip and it's not a qc name.
                if ( skipPlottingParameters.indexOf(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) == -1 &&
                      this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey].indexOf("_qc") == -1 ) {
                  erdDataTypeOfInterest.push(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) ;
                }
              }

              dataTypeMagicKey = graph_instructions.graph_dataset_ids[dKey].substr(graph_instructions.graph_dataset_ids[dKey].indexOf("_") + 1 ) ;
              this.gmriDatasets[mlKey].creatChartComponents(this.appConfig,
                                            this.gmriDatasets[mlKey].plottedParameters[graph_instructions.graph_type],
                                            measurement_system, dataTypeMagicKey,
                                            ml_location_name, colorRampIndex);
            }

            for ( dKey in graph_instructions.graph_dataset_ids ) {
              ml_location_name = graph_instructions.graph_dataset_ids[dKey].substr(0,
                      graph_instructions.graph_dataset_ids[dKey].indexOf("_") ) ;
              mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                    graph_instructions.graph_dataset_ids[dKey], this.appConfig) ;
              // same rigamoroll to get the datasets
              erdDataTypeOfInterest = [] ;
              for (columnNameKey in this.gmriDatasets[mlKey].observationData.table.columnNames ) {
                // plot it if it's not in the list to skip and it's not a qc name.
                if ( skipPlottingParameters.indexOf(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) == -1 &&
                      this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey].indexOf("_qc") == -1 ) {
                  erdDataTypeOfInterest.push(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) ;
                }
              }
              // look for some sample data types to see if we already have this dataset
              mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
              // first dataset just take all it's yAxis entries
              // they are unique by units
              if ( myAxisArray.length == 0 ) {
                myAxisArray = this.gmriDatasets[mlKey].chartComponents.yAxisArray ;
              } else {
                // update any existing entries min max values with this datasaets.
                myAxisArray = this.gmriDatasets[mlKey].updateAxisMinMax(myAxisArray) ;
                // then get any missing entries and add them.
                missingyAxisKeysArray = this.gmriDatasets[mlKey].getMissingyAxisKeys(myAxisArray ) ;
                for ( missingKey in missingyAxisKeysArray ) {
                  myAxisArray.push(this.gmriDatasets[mlKey].chartComponents.yAxisArray[missingyAxisKeysArray[missingKey]]) ;
                }
              }
              // give them integer keys
              intKeyAxisArray = [] ;
              bOpposite = false ;
              for ( myAxisKey in myAxisArray ) {
                intKeyAxisArray.push(myAxisArray[myAxisKey]);
                intKeyAxisArray[intKeyAxisArray.length-1].opposite = bOpposite ;
                bOpposite = !bOpposite ;
              }
              // As long as we're here in the loop. Any yAxis that have been accumulated
              // will cover this dataset so get the series and add an index to the yAxis to it.
              for ( seriesKey in this.gmriDatasets[mlKey].chartComponents.seriesArray) {
                newSeries = this.gmriDatasets[mlKey].chartComponents.seriesArray[seriesKey];
                newSeries.yAxis = this.gmriDatasets[mlKey].getyAxisKeyByUnit(intKeyAxisArray,
                    this.gmriDatasets[mlKey].chartComponents.seriesArray[seriesKey].parameter_units);
                seriesArray.push(newSeries);
              }
              // accumulate the title and sub title
              for ( cKey in  this.gmriDatasets[mlKey].chartComponents.platforms ) {
                if ( titleArray.indexOf(this.gmriDatasets[mlKey].chartComponents.platforms[cKey]) == -1 ) {
                  titleArray.push(this.gmriDatasets[mlKey].chartComponents.platforms[cKey]) ;
                }
              }
              // punt here. The parameters should be the same for all components
              if ( chartSubTitle.length == 0 ){
                chartSubTitle += this.gmriDatasets[mlKey].chartComponents.chart_sub_title ;
              }
              if ( dKey == 0 ) {
                savedFirstDatasetKey = mlKey ;
              }
            }
            for ( cKey in titleArray ) {
              if ( chartTitle.length == 0 ){
                chartTitle += titleArray[cKey] ;
              } else {
                chartTitle += " : " + titleArray[cKey] ;
              }
            }
            chart_results = this.gmriDatasets[savedFirstDatasetKey].assembleChart( chartTitle, chartSubTitle,
                                  myAxisArray, seriesArray,this.appConfig) ;
            this.designerChart = chart_results['chartConfig'];

            this.events.publish('graphingFinished', 'multiple_dataset');
            break;
          case 'custom_observations':
            for ( dKey in graph_instructions.graph_datasets ) {
              // switch on the magic key
              switch ( graph_instructions.graph_datasets[dKey] ) {
                case 'ERDDAP_MET_OBSERVATIONS':
                  // get the object for this location
                  ml_location_name  = this.appConfig.platform_name ;
                  // look for some sample data types to see if we already have this dataset
                  erdDataTypeOfInterest = [ "air_temperature", "air_temperature_qc",
                                            "wind_speed", "wind_speed_qc"];
                  mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);

                  parameters = ['wind_speed', 'wind_gust', 'wind_direction']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.windChart = chart_results['chartConfig'];

                  parameters = ['air_temperature']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.airTempChart = chart_results['chartConfig'];

                  parameters = ['visibility']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.visibilityChart = chart_results['chartConfig'];

                  parameters = ['barometric_pressure']
                  //chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.barometricPressure = chart_results['chartConfig'];
                  break;
                case 'ERDDAP_SBE16_OBSERVATIONS':
                  // get the object for this location
                  ml_location_name= this.appConfig.platform_name ;
                  // look for some sample data types to see if we already have this dataset
                  erdDataTypeOfInterest = [ "temperature", "temperature_qc",
                                          "salinity", "salinity_qc"];
                  mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);

                  parameters = ['temperature']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.waterTempChart = chart_results['chartConfig'];

                  parameters = ['salinity']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.salinityChart = chart_results['chartConfig'];

                  parameters = ['conductivity', 'sigma_t']
                  // chart_results = this.gmriDatasets[mlKey].drawChart(this.appConfig, parameters, measurement_system);
                  chart_results = this.gmriDatasets[mlKey].createChart(this.appConfig,
                                            parameters,
                                            measurement_system, graph_instructions.graph_datasets[dKey],
                                            ml_location_name);
                  this.conductivitySigmaTChart = chart_results['chartConfig'];
                  break;
                default:
                  break;
              } // end of switch on graph_instructions.graph_datasets values
            } // end on walking graph_instructions.graph_datasets
            break;
          default:
            break;
        } // end on switch for graph_type
      this.requestedData = false ;
      // send out an event object
      let event_obj: any = { name: "erddap_data_available" };
      if ( this.metProvObserver != undefined ) {
        this.metProvObserver.next(event_obj);
      }
  }
    // the data is all ready and in datasets. Create data variables.
  createData(skipPlottingParameters,graph_instructions){
      // data_queried is a little useless  here
      let ret_val: any = [] ;
      let data_results: any;
      let measurement_system = 'nautical';
      let ml_location_name: string;
      let mlKey : any ;
      let dKey : any ;
      let datasetID: string ;
      let dataType:any;
      let erdDataTypeOfInterest: any = [];

      let seriesArray: any = [] ;
      let chartTitle: string = "";
      let chartSubTitle:string = '';
      let colorRampIndex: number = -1 ;
      let dataTypeMagicKey: any ;
      let columnNameKey: any ;

      let newSeries:any ;
      let seriesKey: any ;
      let myAxisArray: any = [] ;
      let intKeyAxisArray: any = [] ;
      let missingyAxisKeysArray: any = [] ;
      let myAxisKey: any ;
      let missingKey: any ;
      let savedFirstDatasetKey: any ;
      let bOpposite: boolean = false ;
      let cKey: any ;
      let titleArray: any = [] ;


      switch ( graph_instructions.graph_type ) {
        case 'no_graph_single_dataset':
            // get the object for this location
            // this is very similar to the multi dataset graph and
            // NOT the single dataset graph. Because it's concatenating the information
            // for multiple datasets
            ml_location_name  = this.appConfig.platform_name ;
            for ( dKey in graph_instructions.graph_datasets ) {
                // unique to each dataset.
                chartTitle = '';
                chartSubTitle = '' ;
                seriesArray = [] ;
                // dataset id is a combination of the platoform name and the dataset type.
                // magic stuff.
                datasetID = ml_location_name + "_" + graph_instructions.graph_datasets[dKey] ;
                mlKey = this.getDatasetKeyFromDatasetId(ml_location_name, datasetID, this.appConfig) ;
                // key value pairs
                this.gmriDatasets[mlKey].data_variables = this.appConfig.neracoosErddap.getDatasetVariables(
                                              this.appConfig, datasetID  ) ;
                // returns a straight up array
                let erdDataTypes: any = this.gmriDatasets[mlKey].getDataVariables() ;
                // Anything not having _qc in it.
                for ( dataType in erdDataTypes ) {
                  if ( erdDataTypes[dataType].indexOf("_qc") == -1 &&
                        skipPlottingParameters.indexOf(erdDataTypes[dataType]) == -1 ) {
                    erdDataTypeOfInterest.push(erdDataTypes[dataType]);
                  }
                }
                dataTypeMagicKey = graph_instructions.graph_dataset_ids[dKey].substr(graph_instructions.graph_dataset_ids[dKey].indexOf("_") + 1 ) ;
                this.gmriDatasets[mlKey].creatChartComponents(this.appConfig,
                                this.gmriDatasets[mlKey].plottedParameters[graph_instructions.graph_type],
                                measurement_system, dataTypeMagicKey,
                                ml_location_name, colorRampIndex);

              }               // walk the datasets again concatenating the results saved in them.
              for ( dKey in graph_instructions.graph_dataset_ids ) {
                ml_location_name = graph_instructions.graph_dataset_ids[dKey].substr(0,
                        graph_instructions.graph_dataset_ids[dKey].indexOf("_") ) ;
                mlKey = this.getDatasetKeyFromDatasetId(ml_location_name,
                      graph_instructions.graph_dataset_ids[dKey], this.appConfig) ;
                // same rigamoroll to get the datasets
                erdDataTypeOfInterest = [] ;
                for (columnNameKey in this.gmriDatasets[mlKey].observationData.table.columnNames ) {
                  // plot it if it's not in the list to skip and it's not a qc name.
                  if ( skipPlottingParameters.indexOf(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) == -1 &&
                        this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey].indexOf("_qc") == -1 ) {
                    erdDataTypeOfInterest.push(this.gmriDatasets[mlKey].observationData.table.columnNames[columnNameKey]) ;
                  }
                }
                // look for some sample data types to see if we already have this dataset
                mlKey = this.getDatasetKey(ml_location_name, erdDataTypeOfInterest, this.appConfig);
                // first dataset just take all it's yAxis entries
                // they are unique by units
                if ( myAxisArray.length == 0 ) {
                  myAxisArray = this.gmriDatasets[mlKey].chartComponents.yAxisArray ;
                } else {
                  // update any existing entries min max values with this datasaets.
                  myAxisArray = this.gmriDatasets[mlKey].updateAxisMinMax(myAxisArray) ;
                  // then get any missing entries and add them.
                  missingyAxisKeysArray = this.gmriDatasets[mlKey].getMissingyAxisKeys(myAxisArray ) ;
                  for ( missingKey in missingyAxisKeysArray ) {
                    myAxisArray.push(this.gmriDatasets[mlKey].chartComponents.yAxisArray[missingyAxisKeysArray[missingKey]]) ;
                  }
                }
                // give them integer keys
                intKeyAxisArray = [] ;
                bOpposite = false ;
                for ( myAxisKey in myAxisArray ) {
                  intKeyAxisArray.push(myAxisArray[myAxisKey]);
                  intKeyAxisArray[intKeyAxisArray.length-1].opposite = bOpposite ;
                  bOpposite = !bOpposite ;
                }
                // As long as we're here in the loop. Any yAxis that have been accumulated
                // will cover this dataset so get the series and add an index to the yAxis to it.
                for ( seriesKey in this.gmriDatasets[mlKey].chartComponents.seriesArray) {
                  newSeries = this.gmriDatasets[mlKey].chartComponents.seriesArray[seriesKey];
                  newSeries.yAxis = this.gmriDatasets[mlKey].getyAxisKeyByUnit(intKeyAxisArray,
                      this.gmriDatasets[mlKey].chartComponents.seriesArray[seriesKey].parameter_units);
                  seriesArray.push(newSeries);
                }
                // accumulate the title and sub title
                for ( cKey in  this.gmriDatasets[mlKey].chartComponents.platforms ) {
                  if ( titleArray.indexOf(this.gmriDatasets[mlKey].chartComponents.platforms[cKey]) == -1 ) {
                    titleArray.push(this.gmriDatasets[mlKey].chartComponents.platforms[cKey]) ;
                  }
                }
                // punt here. The parameters should be the same for all components
                if ( chartSubTitle.length == 0 ){
                  chartSubTitle += this.gmriDatasets[mlKey].chartComponents.chart_sub_title ;
                }
                if ( dKey == 0 ) {
                  savedFirstDatasetKey = mlKey ;
                }
              }
              for ( cKey in titleArray ) {
                if ( chartTitle.length == 0 ){
                  chartTitle += titleArray[cKey] ;
                } else {
                  chartTitle += " : " + titleArray[cKey] ;
                }
              }
              data_results = this.gmriDatasets[savedFirstDatasetKey].assembleData( chartTitle, chartSubTitle,
                                    myAxisArray, seriesArray,this.appConfig) ;

              /*
              // get the variables from this dataset                               measurement_system, graph_instructions.graph_datasets[dKey]);
              data_results = this.gmriDatasets[mlKey].createData(this.appConfig,
                                          this.gmriDatasets[mlKey].plottedParameters[graph_instructions.graph_type],
                                          measurement_system, graph_instructions.graph_datasets[dKey],
                                          ml_location_name);
              */
              this.dataDisplay = data_results['dataConfig'] ;
            break;
          default:
            break;
        } // end on switch for graph_type
      this.requestedData = false ;
      // send out an event object
      let event_obj: any = { name: "erddap_data_available" };
      if ( this.metProvObserver != undefined ) {
        this.metProvObserver.next(event_obj);
      }
    return( ret_val );
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
