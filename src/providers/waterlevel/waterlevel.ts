import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppConfig } from '../appconfig/appconfig';
import { GMRIUnits } from '../appconfig/appconfig';
// import {sprintf} from "sprintf-js";
import {USGSTidalObject} from "../../gmri/waterlevel/water-level";
import {ESTOFSObject} from "../../gmri/waterlevel/water-level";
import {TideObject} from "../../gmri/waterlevel/water-level";

/*
  Generated class for the WaterlevelProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WaterlevelProvider {

  // since there are multiple waterlevel sources keep track of them
  // by using arrays of objects.
  estofsObjects: any = [] ;
  tideObjects: any = [] ;
  usgstidalObjects: any = [];
  tide_locations: any = [] ;
  tideProv: any;
  tideProvObserver: any;
  ml_metadata_loaded: boolean = false;
  tideChart: any;
  loadedMLArray: any = [] ;
  forecast_ready: boolean = false ;
  notReadyText: string ;
  hiloTide: any ;

  constructor(public appConfig:AppConfig,
              public gmriUnits:GMRIUnits,
              public http: Http,
              public httpClient: HttpClient,
              public datePipe: DatePipe) {
    console.log('Hello WaterlevelProvider Provider');
    this.tideProv = Observable.create(observer => {
      // will this get here!
      this.tideProvObserver = observer;
    });
  }
  tideProvUpdates() {
    return this.tideProv;
  }
  isForecastReady() {
    return( this.forecast_ready );
  }
  isInitialized() {
    let ret_val: boolean = false ;
    if ( this.tide_locations.length > 0 ) {
      ret_val = true ;
    }
  return( ret_val ) ;
  }
  graphCenterSelectItems () {
    let items: any = this.appConfig.getSelectItems(this.appConfig.graph_center_choices);
    return items;
  }
  graphCenterSelectedItem () {
    let item: any = this.appConfig.getSelectedItem(this.appConfig.getCenterDatumIndex(), this.appConfig.graph_center_choices);
    return item ;
  }
  isGraphCenterSelectedItem (item) {
    let selected: boolean = false ;
    let sel_item: any = this.appConfig.getSelectedItem(this.appConfig.getCenterDatumIndex(), this.appConfig.graph_center_choices);
    if ( sel_item.id == item.id ) {
      selected = true ;
      // console.log( "selected item id = " + sel_item.id ) ;
    }
    return selected ;
  }
  initializeData(refresh = false) {
    if ( !this.ml_metadata_loaded || refresh ) {

      let tideLocationURL: string = this.appConfig.getTideLocationURL();
      let tideLocation = this.http.get(tideLocationURL).map(res => res.json());

      Observable.forkJoin([tideLocation]).subscribe(results => {
        this.tide_monitoring_locations_setup( results[0]);
        // send out an event object
        let event_obj_init_data: any = { name: "initial_station_data_loaded", "data_loaded": "yes" }
        if ( this.tideProvObserver != undefined ) {
          this.tideProvObserver.next(event_obj_init_data);
        }
      },
      error => console.log(error));
    }
  }
  getWaterlevelData(force_refresh) {
    // providing an array of urls
    // because some may have loaded ok previously
    var date_range = this.appConfig.getEtofsDateRange() ;
    var date_start = date_range['date_start'];
    var days_forward = date_range['days_forward'];
    var hours_forward = days_forward * 24 ;
    let dataTypeLoaded: any = [] ;
    let necofsDataTypeLoaded: any = [] ;
    let dataGETs: any = [] ;
    let dataGetNecofs: any = [];
    // buoy dates
    // assemble all the necessary urls to get a full set of data
    // account for some perhaps having been previously loaded.
    // this is using classes to encapsulate the data
    // the tide location ex. 8423898
    let tide_location_name: string = this.appConfig.tide_name ;
    let tideKey = this.getTideObjectKey(tide_location_name, this.appConfig);

    if ( !this.tideObjects[tideKey].initialized || force_refresh ) {
      // first use the meta data already initialized
      let tlMetaData = this.getTideLocationMetadata( tide_location_name);
      this.tideObjects[tideKey].initialize_tide_object( tlMetaData, this.appConfig ) ;
      // tideDataObject.initialize_tide_object( tlMetaData, this.appConfig )
      // multiple data streams here
      // metadata from cbass
      let getTide  = this.http.get(this.tideObjects[tideKey].getDataURL(date_start, hours_forward, tide_location_name, this.appConfig)).map(res => res.json());
      dataGETs.push( getTide);
      dataTypeLoaded.push("TIDE");
      // prediction data from tides and currents
      let getPredictions  = this.http.get(this.tideObjects[tideKey].getPredictionsURL(this.appConfig, 6, 'lst_ldt')).map(res => res.json());
      dataGETs.push( getPredictions);
      dataTypeLoaded.push("TIDE_PREDICTIONS");
      // observed water level from tides and currents
      let getObs  = this.http.get(this.tideObjects[tideKey].getWaterLevelURL(this.appConfig)).map(res => res.json());
      dataGETs.push( getObs);
      dataTypeLoaded.push("TIDE_OBSERVED");
      // High/low prediction data from tides and currents
      // NOTE: GMT so I can manipulate the date easily
      let getHiloPredictions  = this.http.get(this.tideObjects[tideKey].getPredictionsURL(this.appConfig, 'hilo', 'gmt')).map(res => res.json());
      dataGETs.push( getHiloPredictions);
      dataTypeLoaded.push("HILO_TIDE_PREDICTIONS");
      // ESTOFS data for the same location as this tide station
      let getESTOFS  = this.http.get(this.tideObjects[tideKey].getEstofsURL(this.appConfig)).map(res => res.json());
      dataGETs.push( getESTOFS);
      dataTypeLoaded.push("TIDE_LOCATION_ESTOFS");
      // NECOFS data for the same location as this tide station
      // necofs data isn't used in the stockton equation because it's too unreliably available
      let getNECOFS  = this.http.get(this.tideObjects[tideKey].getNecofsURL(this.appConfig)).map(res => res.json());
      dataGetNecofs.push( getNECOFS);
      necofsDataTypeLoaded.push("TIDE_LOCATION_NECOFS");
    } else {
      // After the fact I need to update any changes to the datum
      this.tideObjects[tideKey].update_tide_object(this.appConfig);
    }
    // use a separate observable for necofs
    if ( dataGetNecofs.length > 0 ) {
      Observable.forkJoin(dataGetNecofs).subscribe(
        results => this.forecastDataReady("necofs_data", results, dataTypeLoaded),
        error => this.forecastDataError("necofs_data error", error, dataTypeLoaded),
        () => this.forecastDataComplete("necofs_data complete", dataTypeLoaded));
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
      Observable.forkJoin(dataGETs).subscribe(
      results => this.forecastDataReady("stable_data", results, dataTypeLoaded),
      error => this.forecastDataError("stable_data error", error, dataTypeLoaded),
      () => this.forecastDataComplete("stable_data complete", dataTypeLoaded));
    } else {
      // the data was already loaded
      let tide_location_name: string = this.appConfig.tide_name ;
      let tideKey = this.getTideObjectKey(tide_location_name, this.appConfig);
      this.hiloTide = this.tideObjects[tideKey].getHiloTideData(this.appConfig, false);
      let tide_array : any = this.tideObjects[tideKey].drawChart(this.appConfig);
      this.tideChart = tide_array['chartConfig'];
      this.forecast_ready = true ;
    }
  }  // this handles the subscription to two multi http querys
  // on is for everything but necofs and the other is for necofs.
  // necofs on occasion just times out so go ahead without it.
  forecastDataReady (data_queried, results, dataTypeLoaded) {
    // keep a status
    let dataLoaded: boolean = false ;
    let dataLoadingText : string = "Loading data from..." ;
    let dataLoading: any = [] ;
    for ( dKey in dataTypeLoaded ) {
      dataLoading[dKey] = true ;
    }
    // get the object for this location
    let tide_location_name: string = this.appConfig.tide_name ;
    let tideKey = this.getTideObjectKey(tide_location_name, this.appConfig);
    // depending on the same order that they were pushed into the arrays.
    if ( data_queried == "stable_data" ) {
      for ( var dKey in dataTypeLoaded ) {
        switch ( dataTypeLoaded[dKey] ) {
          case 'TIDE':
            this.tideObjects[tideKey].tide_data = results[dKey] ;
            this.tideObjects[tideKey].initialized = true;
            dataLoaded = true ;
            break;
          case 'TIDE_PREDICTIONS':
            this.tideObjects[tideKey].tidePredictionData = results[dKey] ;
            dataLoaded = true ;
            break;
          case 'TIDE_OBSERVED':
            this.tideObjects[tideKey].waterLevelData = results[dKey] ;
            dataLoaded = true ;
            break;
          case 'HILO_TIDE_PREDICTIONS':
            this.tideObjects[tideKey].hiloTidePredictionData = results[dKey] ;
            break;
          case 'TIDE_LOCATION_ESTOFS':
            this.tideObjects[tideKey].surgeData = results[dKey] ;
            dataLoaded = true ;
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
      for ( dKey in dataTypeLoaded ) {
        switch ( dataTypeLoaded[dKey] ) {
          case 'TIDE_LOCATION_NECOFS':
            // REMEMBER THIS NEEDS TO BE ON IT's OWN!
            this.tideObjects[tideKey].necofs_data = results[dKey] ;
            dataLoaded = true ;
            break;
          default:
            break;
        }
      }
    }
    this.loadedMLArray[tide_location_name] = true;
    // NECOFS data is usually a little slower than the rest.
    // tide chart
    if ( dataLoaded ) {
      this.hiloTide = this.tideObjects[tideKey].getHiloTideData(this.appConfig, false);
      let tide_array : any = this.tideObjects[tideKey].drawChart(this.appConfig);
      this.tideChart = tide_array['chartConfig'];
      this.forecast_ready = true ;
    }
  }
  forecastDataError( data_queried, error, dataTypeLoaded) {
    // send out an event object
    let event_obj_data: any = {
          name: "forecast_data_error",
          error: error,
          dataTypeLoaded: dataTypeLoaded };
    event_obj_data.name = "forecast_data_error" ; // make tslint happy
  }
  forecastDataComplete( data_queried, dataTypeLoaded ) {
    // send out an event object
    let event_obj_data: any = {
          name: "forecast_data_complete",
          dataTypeLoaded: dataTypeLoaded,
          data_queried: data_queried } ;
    event_obj_data.name = "forecast_data_complete" ; // make tslint happy
  }
  getTideLocationMetadata( tide_location_id ) {
    for ( var tlKey in this.tide_locations ) {
      if ( this.tide_locations[tlKey].monitoringlocationidentifier == tide_location_id ) {
        break;
      }
    }
    return ( this.tide_locations[tlKey]);
  }
  getOfficialTideLocations() {
    let officialLocations: any = [] ;
    for ( var tlKey in this.tide_locations ) {
      if ( !isNaN(this.tide_locations[tlKey].monitoringlocationidentifier)) {
        officialLocations.push(this.tide_locations[tlKey]) ;
      }
    }
    // ye old bubble sort
    let changed: boolean = true ;
    while ( changed ) {
      changed = false ;
      for ( var sKey in officialLocations ) {
        let nKey : number = parseInt(sKey);
        if ( nKey < officialLocations.length - 1 ) {
          let nKeyTwo : string = (nKey + 1).toString() ;
          if ( officialLocations[sKey].monitoringlocationname > officialLocations[nKeyTwo].monitoringlocationname ){
            // copy this one
            let temp: any = officialLocations[sKey];
            // replace it with the next one
            officialLocations[sKey] = officialLocations[nKeyTwo];
            // and make this one the next one.
            officialLocations[nKeyTwo] = temp
            // flag a change
            changed = true ;
          }
        }
      }
    }
    return ( officialLocations);
  }
  // Tide monitoring locations.
  tide_monitoring_locations_setup( json_data ) {
    this.tide_locations = [];
    // var tide_proj_identifier = json_data.projectidentifier;
    for (var tide_ml_key in json_data.monitoringlocations) {
      var tide_ml_data = json_data.monitoringlocations[tide_ml_key] ;
      // do these individually as the pages get loaded for specific sites.
      // var tide_ml = new tideObjectB($http, $q, tide_ml_data);
      this.tide_locations.push(tide_ml_data);
    }
  }
  // get the object or create a new one.
  getEstofsObject(name) {
    let found: boolean = false ;
    for ( var eKey in this.estofsObjects ) {
      if ( this.estofsObjects[eKey].name == name ) {
        found = true;
        break;
      }
    }
  if ( !found ) {
    let newObject = new ESTOFSObject(name) ;
    this.estofsObjects.push(newObject);
    return ( newObject ) ;
  }
  return ( this.estofsObjects[eKey] );
  }
  // get the key for an object or create a new one.
  getEstofsObjectKey(name) {
    let found: boolean = false ;
    let estofsKey : any = 0 ;
    for ( var eKey in this.estofsObjects ) {
      if ( this.estofsObjects[eKey].name == name ) {
        found = true;
        estofsKey = eKey ;
        break;
      }
    }
  if ( !found ) {
    let newObject = new ESTOFSObject(name) ;
    this.estofsObjects.push(newObject);
    return ( this.estofsObjects.length - 1 ) ;
  }
  return ( estofsKey );
  }
  // get the object or create a new one.
  getTideObjectKey(ml_identifier, appConfig) {
    let found: boolean = false ;
    let TideKey: any = 0 ;
    for ( var eKey in this.tideObjects ) {
      if ( this.tideObjects[eKey].ml_identifier == ml_identifier ) {
        found = true;
        TideKey = eKey ;
        break;
      }
    }
  if ( !found ) {
    let newObject = new TideObject(ml_identifier, this.datePipe) ;
    this.tideObjects.push(newObject);
    return ( this.tideObjects.length - 1 ) ;
  }
  return ( TideKey );
  }
  // get the object or create a new one.
  getUSGSTidalObject(name) {
    let found: boolean = false ;
    for ( var eKey in this.usgstidalObjects ) {
      if ( this.usgstidalObjects[eKey].name == name ) {
        found = true;
        break;
      }
    }
  if ( !found ) {
    let newObject = new USGSTidalObject(name) ;
    this.usgstidalObjects.push(newObject);
    return ( newObject ) ;
  }
  return ( this.usgstidalObjects[eKey] );
  }

}


