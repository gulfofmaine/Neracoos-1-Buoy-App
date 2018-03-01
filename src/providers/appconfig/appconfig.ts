import { Injectable } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'intl';
import 'intl/locale-data/jsonp/en';

/*
  Generated class for the Config provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppConfig {
  /*
  static get parameters() {
      return [[HttpModule]];
  }
  */
  // debug flags
  debug_dww: Boolean = false;
  dev_flag: Boolean = false;
  tab_selected: string = "data";  // which tab is the user on. data, graph..
  // lets start with a level 0 for manager, 5 for all
  // then I can use if (content_level > x ) as a filter.
  // interface_level: Number = 5 ;
  interface_level: Number = 0 ;
  // these are set by the inundation provider
  // deep water level date range allowed bedford institute
  dww_end_date_index: number ;
  dww_start_date: string ;
  dww_end_date: string ;
  // deep water level date range allowed coastwatch
  // NOTE start date is made up it goes back to 2010 if you want it.
  dww_global_end_date_index: number ;
  dww_global_start_date: string ;
  dww_global_end_date: string ;

  nodejs_proxy_prod: string = 'http://fast.gmri.org:8202' ;
  nodejs_proxy_dev: string = 'http://fast.gmri.org:8202' ;

  njs_proxy_cbass_host_prefix_prod: string = 'cbass.gmri.org';
  njs_proxy_cbass_host_prefix_dev: string = 'local_ian.cbass.gmri.org';

  neracoos_host_prefix_prod:string = 'http://www.neracoos.org';
  neracoos_host_prefix_dev:string = 'http://local.drupal7.neracoos.org';

  cbass_host_prefix_prod = 'http://cbass.gmri.org/';
  cbass_host_prefix_dev = 'http://local_ian.cbass.gmri.org/';

  njs_proxy_wqdata_host_prefix_prod = 'wqdata.neracoos.org';
  njs_proxy_wqdata_host_prefix_dev = 'local.dev.odpdx7.neracoos.org';

  njs_proxy_neracoos_host_prefix_prod = 'www.neracoos.org';
  njs_proxy_neracoos_host_prefix_dev = 'local.drupal7.neracoos.org';

  inundationLocationURL: string ;
  dateRangeWW3URL: string ;
  dateRangeWW3GlobalURL: string ;
  deepWaterWaveURL: string;
  waveLocationURL: string ;
  erddapMetadataURL: string ;

  start_date: any = new Date();
  end_date: any = new Date();
  min_date_allowed: any ;
  max_date_allowed: any ;
  days_forward: any = 3.0;

  datum: string = 'MSL';
  tideRequestedDatum : string = 'MSL';
  center_datum_index = 1 ;  // based on graph center choices 1 - n and MSL is the first.
  location_index = 1 ; // monitoring locations
  platform_name : string ; // platform (right now waves)
  tide_name: string;
  ts_variability: number = 5;
  wave_percent: number = 0 ;
  necofs_wave_percent: number = 0 ;
  pwl_percent: any = {} ; // predicted water level
  offsetTweaks: any = [] ;
  augmentedpwl_percent: any = {} ; // predicted water level
  etofs_tide_percent: any = {} ; // predicted water level
  etofs_surge_percent: any = {} ; // predicted water level
  necofs_tide_percent: any = {} ; // predicted water level
  various_prompts: any = [] ;
  stocktonDisplayedParameters: any = [] ;
  error_message: string ;

  gmriUnits: any = new GMRIUnits();
  plotColors: any = [] ;
  various_titles: any = [] ;
  chartTickIntervalsInMinutes: number = 360 ;
  // interface level choices
  interface_level_choices: any = [] ;
  interfaceSelectedItem: any;
  default_interface_selected: number = 1 ;
  graph_center_choices: any = [] ;
  runningParameterVisibilities: any = [] ;
  defaultParemeterVisibilities: any = [] ;

  allow_persona_select: boolean = false ;
  waveDisplayedErrorMessage: boolean = false ;
  bumpedEndDate: boolean = false ;
  waveServices: any = [] ;
  wave_model_selected: string = 'WW3GLOBAL' ;
  wave_model_used: string = 'WW3GLOBAL' ;


  // I admit I am flailing here. retrieving data from localstorge is
  // asynchronous so I'm setting up an array to hold what's retrieved
  // and hoping it will be filled in before it's used.
  userPreferenceChoices: any = ['TIDE_ETOFS_TIDE','TIDE_ETOFS_SURGE',
                'TIDE_AUGMENTED_ETOFS_SURGE_TIDE','TIDE_ETOFS_SURGE_TIDE',
                'RHIGH','RLOW','ERDDAP_PREDICTED_WAVE_HEIGHT', 'ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT',
                'INUNDATION_MODEL_PREDICTED_WAVE_HEIGHT',
                'NECOFS_PREDICTED_WAVE_HEIGHT',
                'BUOY_OBS_WAVE_HEIGHT','TIDE_OBS_WATER_LEVEL','R2','INTERFACE_LEVEL',
                'DATUM', 'TAB_SELECTED', 'LOCATION_SELECTED'] ;
  userPreferences: any = [] ;

  configObservable: any;
  configObserver: any;

  mainMenuTriggered: boolean = false ;

  // drupal based content
  // contentURLOne: string = 'http://contentservice.gmri.org/api/node/16.jsonp?callback=JSONP_CALLBACK' ;
  drupalURLOne: string = 'http://neracoos.org/proxy2?ajax=1&url=http://contentservice.gmri.org/rest/neracoos_buoy_pwa_content';
  drupalContent: any  ;

  constructor( public datePipe: DatePipe,
                public storage: Storage,
                public http: Http,
                public httpClient: HttpClient ) {
    console.log('Hello AppConfig Provider');

    this.configObservable = Observable.create(observer => {
      this.configObserver = observer;
    });
    // get the drupal content
    this.getContentOne();
    this.initializeDateRange();
    // the url for inundation locations
    let mlConfigPath:string = '/code/cbassobjectjson?object_type=projmls&organizationidentifier=GMRI&projectidentifier=INUNDATION' ;
    // let mlConfigURLEncQS:string =  encodeURIComponent(mlConfigPath);
    this.inundationLocationURL = 'http://' + this.getNJSProxyCbassHostPrefix() + mlConfigPath ;
    // the url for Erddap date range
    // retrieve the date range of available data
    // If you ask outside of the range erdap errors out.
    // http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.json?time[]
    let path: string = '/erddap/griddap/WW3_GulfOfMaine_latest.json?time[]' ;
    let encQS: string =  encodeURIComponent(path);
    this.dateRangeWW3URL = this.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;
    // NWW3_Global also has a date range issue.
    // but getting all the dates is prohibitive (2+ megabytes)
    // so use the start date
    // https://coastwatch.pfeg.noaa.gov/erddap/griddap/NWW3_Global_Best.json?time[(2011-01-01T00:00:00Z):1:last]
    let ww3StartDate: string = this.getStartDate().toISOString();
    path = '/erddap/griddap/NWW3_Global_Best.json?time[(' + ww3StartDate + '):1:last]' ;
    encQS =  encodeURIComponent(path);
    this.dateRangeWW3GlobalURL = this.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://coastwatch.pfeg.noaa.gov' + encQS ;
    // Adding ERDAP Deep Water Wave Locations. The are a series of monitoring locations
    // in a "project" Load them in first and then use them to construct the erddap urls
    // necessary to retrieve actual data.
    // http://local_ian.cbass.gmri.org/code/cbassobjectjson?object_type=projmls&organizationidentifier=NOAA&projectidentifier=NOS/CO-OPS
    path = '/code/cbassobjectjson?object_type=projmls&organizationidentifier=GMRI&projectidentifier=DEEP_WATER_WAVE_LOCATIONS' ;
    encQS =  encodeURIComponent(path);
    this.deepWaterWaveURL = 'http://' + this.getNJSProxyCbassHostPrefix() + path ;
    // wave locations
    // http://www.neracoos.org/data/json/monitoringlocations.php?format=geojson
    this.waveLocationURL = "http://www.neracoos.org/data/json/monitoringlocations.php?format=geojson";
    // Eric's erddap metadata
    path = '/lgnc/ERDHighStock/EDInfoDump/erdap_info_all_aws.json' ;
    encQS =  encodeURIComponent(path);
    this.erddapMetadataURL = this.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=http://www.neracoos.org' + encQS ;


    this.offsetTweaks['pwl'] =  {} ;
    this.offsetTweaks['pwl'].value = 0  ;
    this.offsetTweaks['pwl'].prompt = 'ESTOFS Tide & Surge' ;
    this.offsetTweaks['augmentedpwl'] =  {} ;
    this.offsetTweaks['augmentedpwl'].value = 0  ;
    this.offsetTweaks['augmentedpwl'].prompt = 'ESTOFS Tide & Surge' ;
    this.offsetTweaks['ETOFS_TIDE'] =  {} ;
    this.offsetTweaks['ETOFS_TIDE'].value = 0  ;
    this.offsetTweaks['ETOFS_TIDE'].prompt = 'ESTOFS Tide' ;
    this.offsetTweaks['ETOFS_SURGE'] =  {} ;
    this.offsetTweaks['ETOFS_SURGE'].value = 0  ;
    this.offsetTweaks['ETOFS_SURGE'].prompt = 'ESTOFS Surge' ;
    this.offsetTweaks['NECOFS_TIDE'] =  {} ;
    this.offsetTweaks['NECOFS_TIDE'].value = 0  ;
    this.offsetTweaks['NECOFS_TIDE'].prompt = 'NECOFS Water Level' ;
    this.offsetTweaks['NECOFS_WAVES'] =  {} ;
    this.offsetTweaks['NECOFS_WAVES'].value = 0  ;
    this.offsetTweaks['NECOFS_WAVES'].prompt = 'NECOFS Waves' ;

    this.augmentedpwl_percent.value = this.offsetTweaks['augmentedpwl'].value ;
    this.augmentedpwl_percent.prompt = this.offsetTweaks['augmentedpwl'].prompt ;
    this.etofs_tide_percent.value = this.offsetTweaks['ETOFS_TIDE'].value ;
    this.etofs_tide_percent.prompt = this.offsetTweaks['ETOFS_TIDE'].prompt ;
    this.etofs_surge_percent.value = this.offsetTweaks['ETOFS_SURGE'].value ;
    this.etofs_surge_percent.prompt = this.offsetTweaks['ETOFS_SURGE'].prompt ;
    this.necofs_tide_percent.value = this.offsetTweaks['NECOFS_TIDE'].value ;
    this.necofs_tide_percent.prompt = this.offsetTweaks['NECOFS_TIDE'].prompt ;

    this.pwl_percent.value = this.offsetTweaks['pwl'].value ;
    this.pwl_percent.prompt = this.offsetTweaks['pwl'].prompt ;

    this.various_prompts['ETOFS_SURGE'] = 'Surge' ;
    this.various_prompts['RHIGH'] = 'Max Run Up' ;
    this.various_prompts['RLOW'] = 'Max Set up' ;
    this.various_prompts['R2'] = 'R2' ;
    this.various_prompts['ERDDAP_PREDICTED_WAVE_HEIGHT'] = 'WW3 Bedford Institute Predicted Wave Height' ;
    this.various_prompts['ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT'] = 'WW3 Global Model Predicted Wave Height' ;
    this.various_prompts['NECOFS_PREDICTED_WAVE_HEIGHT'] = 'NECOFS Predicted Wave Height' ;
    this.various_prompts['BUOY_OBS_WAVE_HEIGHT'] = 'Observed Wave Height' ;
    this.various_prompts['TIDE_OBS_WATER_LEVEL'] = 'Obs Water Level' ;
    this.various_prompts['R2'] = 'R2' ;
    this.various_prompts['NOAA_PREDICTED_TIDE'] = 'Predicted Tide' ;
    this.various_prompts['NOAA_OBSERVED_TIDE'] = 'Preliminary Obs' ;
    this.various_prompts['NOAA_OBSERVED_PREDICTED'] = 'Observed - Predicted' ;
    this.various_prompts['NECOFS_WATER_LEVEL'] = 'NECOFS Predicted Water Level' ;
    this.various_prompts['NECOFS_WAVES'] = 'NECOFS Predicted Wave Height' ;
    this.various_prompts['USGS_OBS_WL'] = 'Observed Water Level' ;

    this.stocktonDisplayedParameters['Rhigh'] = true ;
    this.stocktonDisplayedParameters['Rlow'] = true ;
    this.stocktonDisplayedParameters['elevsfc'] = true ;
    this.stocktonDisplayedParameters['waveHeight'] = true ; // ww3 or NECOFS

    this.plotColors['etcwlsfc'] = '#66ccff' ;  // surge + tide
    this.plotColors['etsurgeplustide'] = '#66ccff' ;  // surge + tide
    this.plotColors['elevsfc'] = '#00cc66' ;   // tide
    this.plotColors['etsrgsfc'] = '#996600' ;  // surge
    this.plotColors['SurgeTideRange'] = '#4dd2ff' ;
    this.plotColors['Rhigh'] = '#0000cc' ;
    this.plotColors['Rlow'] = '#8800cc' ;
    this.plotColors['R2'] = '#0088cc' ;
    this.plotColors['predicted_wave_height'] = 'red' ;
    this.plotColors['ww3global_predicted_wave_height'] = '#e28812' ;
    this.plotColors['observed_wave_height'] = 'blue' ;
    this.plotColors['noaa_predicted_tide'] = 'blue' ;
    this.plotColors['noaa_predicted_water_level'] = 'red' ;
    this.plotColors['necofs_water_level'] = '#cc3333' ;
    this.plotColors['necofs_waves'] = '#cc3333' ;
    this.plotColors['noaa_observed_minus_predicted_wl'] = 'purple' ;
    this.plotColors['observed_water_level'] = '#00cc66' ;
    this.plotColors['mhhw_guide_line'] = 'yellow' ;
    this.plotColors['center_guide_line'] = 'blue' ;
    this.plotColors['msl_guide_line'] = 'blue' ;
    this.plotColors['mllw_guide_line'] = 'yellow' ;
    this.plotColors['mhhw_guide_line'] = 'yellow' ;
    this.plotColors['dune_base_guide_line'] = '#cc9900' ;
    this.plotColors['dune_crest_guide_line'] = '#cc9900' ;
    this.plotColors['usgs_observed_water_level'] = 'red' ;

    this.various_titles['surge_tab_chart'] = "Inundation at " ;

    this.interface_level_choices['Manager'] = 0 ;
    this.interface_level_choices['Forecaster'] = 1 ;
    this.interface_level_choices['Validater'] = 5 ;

    this.graph_center_choices['MSL'] = 'MSL' ;
    this.graph_center_choices['NAVD88'] = 'NAVD88' ;
    this.graph_center_choices['MLLW'] = 'MLLW' ;
    this.graph_center_choices['MHHW'] = 'MHHW' ;

    this.defaultParemeterVisibilities['TIDE_ETOFS_TIDE'] = true ;
    this.defaultParemeterVisibilities['TIDE_ETOFS_SURGE'] = false ;
    this.defaultParemeterVisibilities['TIDE_ETOFS_SURGE_TIDE'] = true ;
    this.defaultParemeterVisibilities['TIDE_AUGMENTED_ETOFS_SURGE_TIDE'] = true ;
    this.defaultParemeterVisibilities['TIDE_OBS_WATER_LEVEL'] = true ;       // aka preliminary
    this.defaultParemeterVisibilities['TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL'] = true ;
    this.defaultParemeterVisibilities['TIDE_PREDICTED_WATER_LEVEL'] = true ;  // this is tide
    this.defaultParemeterVisibilities['BUOY_OBS_WAVE_HEIGHT'] = true ;
    this.defaultParemeterVisibilities['ERDDAP_PREDICTED_WAVE_HEIGHT'] = true ;
    this.defaultParemeterVisibilities['ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT'] = true ;
    this.defaultParemeterVisibilities['INUNDATION_MODEL_PREDICTED_WAVE_HEIGHT'] = false ;
    this.defaultParemeterVisibilities['NECOFS_PREDICTED_WAVE_HEIGHT'] = true ;
    this.defaultParemeterVisibilities['RLOW'] = true ;
    this.defaultParemeterVisibilities['R2'] = false ;
    this.defaultParemeterVisibilities['RHIGH'] = true ;
    this.defaultParemeterVisibilities['NECOFS_WATER_LEVEL'] = true ;
    this.defaultParemeterVisibilities['NECOFS_WAVES'] = true ;
    this.defaultParemeterVisibilities['USGS_OBSERVED_WATER_LEVEL'] = true ;

    let ww3BIOService : any = { model_name: 'Wave Watch III Bedford Institute', model_id: 'WW3' } ;
    let ww3GlobalService : any = { model_name: 'Wave Watch III Global Wave Model', model_id: 'WW3GLOBAL' } ;
    let necofsService : any = { model_name: 'NECOFS Wave Model', model_id: 'NECOFS' } ;
    this.waveServices.push( ww3BIOService );
    this.waveServices.push( ww3GlobalService );
    this.waveServices.push( necofsService );

  }
  setWaveModelSelected( selected ) {
    this.wave_model_selected = selected ;
  }
  getWaveModelSelectedName() {
    let name: string = 'WW3GLOBAL';
    for ( var wKey in this.waveServices ) {
      if (this.waveServices[wKey].model_id == this.wave_model_selected) {
        name = this.waveServices[wKey].model_name ;
      }
    }
    return(name);
  }
  getWaveModelUsedName() {
    let name = this.getWaveModelName(this.wave_model_used) ;
    return ( name ) ;
  }
  getWaveModelName(model_name) {
    let name: string = 'Name Not found';
    for ( var wKey in this.waveServices ) {
      if (this.waveServices[wKey].model_id == model_name) {
        name = this.waveServices[wKey].model_name ;
      }
    }
    return(name);
  }
  initializeDateRange() {
    this.start_date = new Date();
    // set up the date range allowed for the user.
    // this keeps the user from expecting a miracle in the data available.
    var msforward = this.days_forward * 24 * 60 * 60 * 1000 ;
    this.end_date = new Date(this.start_date.getTime() + msforward) ;
    // it seems that having minutes down set to 0 is crucial to the web services working!
    this.end_date.setMinutes(0,0,0);
    // the NOAA page starts yesterday.
    // but Ian finds that too far back.
    let before_now: number = 12*60*60*1000
    let timeMinusBeforeNow: any = this.start_date.getTime() - before_now ;
    this.start_date.setTime(timeMinusBeforeNow);
    // try setting a minimum date
    let timeMinusThreeDays:any = this.start_date.getTime() - (72*60*60*1000) ;
    this.min_date_allowed = new Date(timeMinusThreeDays);
    this.max_date_allowed = new Date(timeMinusThreeDays);
    this.start_date.setHours(0,0,0,0) ;
  }
  // drupal data
  getContentOne() {
    this.http.get(this.drupalURLOne).map(res => res.json()).subscribe(
      data => {this.readyContentOne(data)},
      error => {console.log(error)},
      () => { console.log("completed"); }
      );
  }
  readyContentOne( data ) {
    this.drupalContent = data;
    // send out an event object
    let event_obj: any = { name: "drupal_content_available" };
    if ( this.configObserver != undefined ) {
      this.configObserver.next(event_obj);
    }
  }
  setErrorMessage( error_msg ) {
    this.error_message = error_msg ;
  }
  // return the observer
  configUpdates() {
    return this.configObservable;
  }
  getChartTickIntervalsInMinutes() {
    return( this.chartTickIntervalsInMinutes);
  }
  //generic select an item use
  getSelectItems( choices ) {
    var ret_items = [] ;
    var item_count = 1 ; // in select ngModel is 1 to N not 0 to n-1
    for (var key in choices ) {
      var value = choices[key];
      var item = { 'id':item_count, 'label': key, subItem: { value: value } };
      item_count ++;
      ret_items.push(item);
    }
  return(ret_items);
  }
  getSelectedItem(item_id, choices) {
    var selectedItem = 'item not found';
    var items = this.getSelectItems(choices);
    for ( var item_key in items ) {
      // if ( items[item_key].subItem.value == item_id ) {
      if ( items[item_key].id == item_id ) {
        selectedItem = items[item_key] ;
      }
    }
  return(selectedItem);
  }
  getTabSelected() {
    if ( this.userPreferences['TAB_SELECTED'] != undefined ) {
      return this.userPreferences['TAB_SELECTED'] ;
    } else {
      return (this.tab_selected);
    }
  }
  setTabSelected(tab_type) {
    this.storage.set('TAB_SELECTED', tab_type);
    this.userPreferences['TAB_SELECTED'] = tab_type;
    console.log("set tab selected = " + tab_type );
  }
  getLocationSelected() {
    if ( this.userPreferences['LOCATION_SELECTED'] != undefined ) {
      return this.userPreferences['LOCATION_SELECTED'] ;
    } else {
      // return ("CAMP_ELLIS");
    }
  }
  isLocationUserSelected() {
    if ( this.userPreferences['LOCATION_SELECTED'] != undefined ) {
      return true ;
    } else {
      return false;
    }
  }
  setLocationSelected(inundationService, location) {
    this.storage.set('LOCATION_SELECTED', location);
    this.userPreferences['LOCATION_SELECTED'] = location;
    this.location_index = inundationService.locationSelectedItem( location ) ;
    // this.location_index = location;
  }
  setPlatformSelected(waveService, location) {
    this.storage.set('PLATFORM_SELECTED', location);
    this.userPreferences['PLATFORM_SELECTED'] = location;
    this.platform_name = location ;
  }
  getPlatformName() {
    return( this.platform_name ) ;
  }
  setTideSelected(waterlevelService, location) {
    this.storage.set('TIDE_SELECTED', location);
    this.userPreferences['TIDE_SELECTED'] = location;
    this.tide_name = location ;
  }
  getTideSelected() {
    return( this.tide_name);
  }
  get_erddap_dww_start_date() {
    return (this.dww_start_date) ;
  }
  get_erddap_dww_end_date () {
    return (this.dww_end_date) ;
  }
  // Interface choices
  get_interface_level(){
    //
    if ( this.userPreferences['INTERFACE_LEVEL'] != undefined ) {
      return this.userPreferences['INTERFACE_LEVEL'] ;
    } else {
      return (this.interface_level_choices['Forecaster']);
    }
  }
  set_interface_level( new_il) {
    this.userPreferences['INTERFACE_LEVEL'] = new_il;
    // temporary clear storage if user selects validator.
    if ( new_il == 5 ) {
      this.storage.clear();
      this.storage.remove('INTERFACE_LEVEL') ;
    } else {
      // setting this before clearing seems to make it stick
      // despite the clear.
      this.storage.set('INTERFACE_LEVEL', new_il);
    }
    // unset all the graph display related items.
    this.storage.remove('TIDE_ETOFS_TIDE') ;
    this.storage.remove('TIDE_ETOFS_SURGE') ;
    this.storage.remove('TIDE_AUGMENTED_ETOFS_SURGE_TIDE') ;
    this.storage.remove('TIDE_ETOFS_SURGE_TIDE') ;
    this.storage.remove('RHIGH') ;
    this.storage.remove('RLOW') ;
    this.storage.remove('ERDDAP_PREDICTED_WAVE_HEIGHT') ;
    this.storage.remove('ERDDAP_WW3GLOBAL_PREDICTED_WAVE_HEIGHT');
    this.storage.remove('INUNDATION_MODEL_PREDICTED_WAVE_HEIGHT');
    this.storage.remove('NECOFS_PREDICTED_WAVE_HEIGHT') ;
    this.storage.remove('BUOY_OBS_WAVE_HEIGHT') ;
    this.storage.remove('TIDE_OBS_WATER_LEVEL') ;
    this.storage.remove('R2') ;
  }
  getInterfaceSelectedItem() {
    var interface_level = this.get_interface_level();
    var items = this.interfaceSelectItems();
    for ( var item_key in items ) {
      if ( items[item_key].subItem.level_index == interface_level ) {
        var selectedItem = items[item_key] ;
      }
    }
  return(selectedItem);
  }
  // select an interface to use
  interfaceSelectItems() {
    var ret_items = [] ;
    var item_count = 1 ;
    var interface_level = this.get_interface_level();
    for (var key in this.interface_level_choices ) {
      var user_layer_level = this.interface_level_choices[key];
      var selected = false ;
      if ( interface_level == user_layer_level ) {
        selected = true ;
      }
      var item = { 'id':item_count,
                  'label': key,
                  subItem: { level_index: user_layer_level },
                  selected: selected };

      item_count ++;
      ret_items.push(item);
    }
  return(ret_items);
  }
  isInterfaceSelected( sel_interface_level ) {
    var interface_level = this.get_interface_level();
    var selected = false ;
    if (  interface_level == sel_interface_level ) {
      selected = true ;
    }
    console.log( "Selected interface level " + sel_interface_level + " selected: " + selected );
    return(selected);
  }
  // update an array of user preference
  // it's  asynchronous! And what a horrendous way to do this.
  // Start with zero increment and if there are still choices left call yourself again.
  updateUserPreferences(upKey) {
    // this rolls through the entire array and only one preference gets set
    // in the end the one for the last member!
    // for ( var upKey in this.userPreferenceChoices ) {
      this.storage.get(this.userPreferenceChoices[upKey]).then((val) => {
        if ( val != undefined ) {
          // console.log('Visiblity for ' + param_name + ' is', val);
          // limit what we restore
          // first off no location. the user must select that  on startup.
          // second no predicted wave height.
          switch ( this.userPreferenceChoices[upKey] ) {
            case 'LOCATION_SELECTED':
            case 'ERDDAP_PREDICTED_WAVE_HEIGHT':
              break;
            default:
              this.userPreferences[this.userPreferenceChoices[upKey]] = val ;
              break;
          }
          // send out an event object
          let event_obj: any = {
                name: "updated_preference",
                preference: this.userPreferenceChoices[upKey],
                value: val }
          if ( this.configObserver != undefined ) {
            this.configObserver.next(event_obj);
          }
        }
        upKey ++;
        if ( upKey < this.userPreferenceChoices.length ) {
          this.updateUserPreferences(upKey);
        }
      });
    // } // end of for loop that didn't work
  }
  // an alternative interface visibility based on interface level
  // that's set elsewhere.
  getInterfaceLevelParameterVisibilty( parent, parameter ) {
    // see if the user has set any preference previously
    var visible = this.getUserPreferenceParameterVisibility( parameter ) ;
    if ( visible == undefined ) {
      var parameters = parent.get_chart_display_parameters(this);
      visible = false ;
      for ( var vKey in parameters ) {
        if ( parameters[vKey].toLowerCase() == parameter.toLowerCase() ) {
          visible = true ;
          break;
        }
      }
    }
  return(visible);
  }
  // parameter visibility on chart
  // this is set by the user and if the user hasn't set any then
  // return undefined ( null)
  getUserPreferenceParameterVisibility( param_name ) {
    // var visibility = defaultParemeterVisibilities[param_name] ;
    var visibility = null ;
    if ( this.userPreferences[param_name] != undefined ) {
      visibility = this.userPreferences[param_name] ;
    }
    /*
    if ( $.cookie != undefined ) {
      var saved = $.cookie(param_name);
      if ( saved != undefined ) {
        // don't try to figure this out.
        visibility = saved ;
        if ( visibility == 'false' ) {
          visibility = false ;
        }
        if ( visibility == 'true' ) {
          visibility = true ;
        }
      } else {
        // fall back on this array
        // not any more
        // if ( runningParameterVisibilities[param_name] != undefined ) {
        //  visibility = runningParameterVisibilities[param_name] ;
        //}
      }
    }
    */
    return(visibility) ;
  }
  setUserPreferenceParameterVisibility( param_name, visibility ) {
    /*
    if ( $.cookie != undefined ) {
      $.cookie(param_name, visibility);
    }
    */
    this.storage.set(param_name, visibility);
    this.userPreferences[param_name] = visibility;
    this.runningParameterVisibilities[param_name] = visibility;
  }
  getWQDataHostPrefix() {
    let ret_val: string = this.njs_proxy_wqdata_host_prefix_prod ;
    if ( this.dev_flag ) {
      ret_val = this.njs_proxy_wqdata_host_prefix_dev ;
    }
    return( ret_val);
  }
  getCbassHostPrefix() {
    let ret_val: string = this.cbass_host_prefix_prod ;
    if ( this.dev_flag ) {
      ret_val = this.cbass_host_prefix_dev ;
    }
    return( ret_val);
  }
  getNeracoosHostPrefix() {
    let ret_val: string = this.neracoos_host_prefix_prod ;
    if ( this.dev_flag ) {
      ret_val = this.neracoos_host_prefix_dev ;
    }
    return( ret_val);
  }
  getNJSProxyNeracoosHostPrefix() {
    let ret_val: string = this.njs_proxy_neracoos_host_prefix_prod ;
    if ( this.dev_flag ) {
      ret_val = this.njs_proxy_neracoos_host_prefix_dev ;
    }
    return( ret_val);
  }
  getNodeJsProxy() {
    let ret_val: string = this.nodejs_proxy_prod ;
    if ( this.dev_flag ) {
      ret_val = this.nodejs_proxy_dev ;
    }
    return( ret_val);
  }
  getNJSProxyCbassHostPrefix() {
    let ret_val: string = this.njs_proxy_cbass_host_prefix_prod ;
    if ( this.dev_flag ) {
      ret_val = this.njs_proxy_cbass_host_prefix_dev ;
    }
    return( ret_val);
  }
  getIndundationLocationURL() {
    return( this.inundationLocationURL);
  }
  getDateRangeWW3URL() {
    return( this.dateRangeWW3URL);
  }
  getDateRangeWW3GlobalURL() {
    return( this.dateRangeWW3GlobalURL);
  }
  getErddapMetadataURL() {
    return( this.erddapMetadataURL);
  }
  getDeepWaterWaveURL() {
    return( this.deepWaterWaveURL );
  }
  getTideLocationURL() {
    let tideConfigPath: string = '/code/cbassobjectjson?object_type=projmls&organizationidentifier=NOAA&projectidentifier=NOS/CO-OPS' ;
    var tideURL = 'http://' + this.getNJSProxyCbassHostPrefix() + tideConfigPath ;
    return(tideURL);
  }
  getWaveLocationURL() {
    return( this.waveLocationURL ) ;
  }
  getMinDateAllowed() {
    var clonedDate = new Date(this.min_date_allowed.getTime()) ;
    return(clonedDate);
  }
  getMaxDateAllowed() {
    var clonedDate = new Date(this.max_date_allowed.getTime()) ;
    return(clonedDate);
  }
  // start Date choices
  getStartDate() {
    var clonedDate = new Date(this.start_date.getTime()) ;
    return(clonedDate);
  }
  setStartDate(new_start_date) {
    this.start_date.setTime(new_start_date.getTime());
    // start_date = new Date(new_start_date.getTime()) ;
  }
  // Days forward
  getDaysForward() {
    return(this.days_forward);
  }
  getMaxDaysForward() {
    // don't know where days_forward_choices came from!
    // var days_forward = this.days_forward_choices.length;
    var days_forward = 5;
    return (days_forward);
  }
  getHoursForward() {
    let time_difference : number = this.end_date - this.start_date ;
    time_difference /= 60 * 60 * 1000 ;
    return( time_difference);
  }
  getEndDate() {
    // var msforward = this.days_forward * 24 * 60 * 60 * 1000 ;
    // var end_date = new Date(this.start_date.getTime() + msforward) ;
    return( this.end_date ) ;
  }
  bumpEndDate(msEndDate) {
    let new_end: any = new Date(msEndDate);
    if ( new_end > this.end_date ) {
      this.end_date = new_end ;
      this.bumpedEndDate = true ;
    }
  }
  setDaysForward(new_days_forward) {
    this.days_forward = new_days_forward ;
  }
  // Graph Center Choices
  getGraphCenter() {
    // return this.graph_center;
    let sel_item: any = this.getSelectedItem(this.getCenterDatumIndex(), this.graph_center_choices);
    // this gets called way to often to have this here.
    // this.storage.set('DATUM', sel_item.subItem.value);
    // this.userPreferences['DATUM'] = sel_item.subItem.value;
    return ( sel_item.subItem.value );
  }
  getCenterDatumIndex() {
    return this.center_datum_index;
  }
  initializeCenterDatumIndex () {
    // Oh the tangled web I've woven here. The choices are from an
    // array with indexes the same as the data graph_center_choices['MSL'] = 'MSL'
    // but really what we're using is the index that is kept by the ion-select
    // and that's from 1 to n.
    // and further more this is called after the "initalizeData" because the
    // retrieval of the preferences takes so long.
    if ( this.userPreferences['DATUM'] != undefined ) {
      let count: number = 1 ;
      for ( var gcIndex in this.graph_center_choices ) {
        if ( gcIndex == this.userPreferences['DATUM'] ) {
          this.center_datum_index = count ;
          break;
        }
        count++;
      }
    }
  }
  getDatum() {
    if ( this.userPreferences['DATUM'] != undefined ) {
      return this.userPreferences['DATUM'] ;
    } else {
      return (this.datum);
    }
  }
  getTideRequestDatum() {
    return this.tideRequestedDatum ;
  }
  setGraphCenter( ) {
    let datum: string = this.getGraphCenter();
    if ( this.userPreferences['DATUM'] != datum ) {
      this.storage.set('DATUM', datum);
      this.userPreferences['DATUM'] = datum;
    }
  }
  // tide_surge_variability
  getTSVariability() {
    return this.ts_variability;
  }
  setTSVariability( new_gc) {
    this.ts_variability = new_gc;
  }
  getWavePercent () {
    return this.wave_percent ;
  }
  setWavePercent (new_wp) {
    this.wave_percent = new_wp ;
  }
  getNECOFSWavePercent () {
    return this.necofs_wave_percent ;
  }
  setNECOFSWavePercent (new_wp) {
    this.necofs_wave_percent = new_wp ;
  }
  // really ETOFS Tide + Surge
  getPWLPercent () {
    return this.pwl_percent.value ;
  }
  setPWLPercent (new_value) {
    this.pwl_percent.value = new_value ;
  }
  getPWLPrompt () {
    return this.pwl_percent.prompt ;
  }
  getAugmentedPWLPercent () {
    return this.augmentedpwl_percent.value ;
  }
  setAugmentedPWLPercent (new_value) {
    this.augmentedpwl_percent.value = new_value ;
  }
  getAugmentedPWLPrompt () {
    return this.augmentedpwl_percent.prompt ;
  }
  getETOFSTIDEPercent () {
    return this.etofs_tide_percent.value ;
  }
  setETOFSTIDEPercent (new_value) {
    this.etofs_tide_percent.value = new_value ;
  }
  getETOFSSURGEPercent () {
    return this.etofs_surge_percent.value ;
  }
  setETOFSSURGEPercent (new_value) {
    this.etofs_surge_percent.value = new_value ;
  }
  getNECOFSTIDEPercent () {
    return this.necofs_tide_percent.value ;
  }
  setNECFSTIDEPercent (new_value) {
    this.necofs_tide_percent.value = new_value ;
  }
  getETOFSTIDEPrompt () {
    return this.etofs_tide_percent.prompt ;
  }
  getETOFSSURGEPrompt () {
    return this.etofs_surge_percent.prompt ;
  }
  getVariousPrompts (prompt_id) {
    return this.various_prompts[prompt_id] ;
  }
  getTideDateRange ( ) {
    // pretty simple, today and tomorrow.
    // 20160510
    var date_range = [] ;
    var date_now = new Date(this.getStartDate());
    var date_last = new Date(this.getStartDate());
    // minutes between here and GMT.
    var toff = date_now.getTimezoneOffset();
    toff += 60 * 1000;
    // for the moment don't use GMT. I'm asking for lst/ldt (local savings time...)
    // date_now.setTime(date_last.getTime() + toff);
    date_last.setTime(date_last.getTime() + (this.getDaysForward()*24*60*60*1000));
    // date_now.setHours(date_now.getHours() - hours_back);
    // var date_start = date_now.toString("yyyy-MM-ddTHH:mm:ssO");
    date_range['date_start'] = this.datePipe.transform(date_now, "yMMdd");
    date_range['date_end'] = this.datePipe.transform(date_last, "yMMdd");
    date_range['display_date_start'] = this.datePipe.transform(date_now, "y/MM/dd");
    date_range['display_date_end'] = this.datePipe.transform(date_last, "y/MM/dd");

    // var date_start = this.datePipe.transform(date_now, 'yMMdd');

    return ( date_range );
  }
  getEtofsDateRange() {
    var date_range = [] ;
    var date_now = this.getStartDate();
    // var date_min = this.getMinDateAllowed();
    var date_last = this.getEndDate();
    // the old date_last
    // var date_last = this.getStartDate();
    //// var days_forward = appService.getDaysForward();
    var days_forward = this.getMaxDaysForward();
    var hours_forward = this.getHoursForward();
    // date_last.setTime(date_last.getTime() + (days_forward*24*60*60*1000));
    // date_last.setTime(date_last.getTime() + (28*60*60*1000));
    // end of the old date_last

    // date_now.setHours(date_now.getHours() - hours_back);
    // var date_start = date_now['format']("Y-m-d H:i:sO");
    // var date_min_start = date_min['format']("Y-m-d H:i:sO");

    var date_start = this.datePipe.transform(date_now, 'y-MM-dd H:mm:ss');
    // var date_min_start = this.datePipe.transform(date_min, 'y-MM-dd H:mm:ss');

    // these two are no longer used. ERDDAP generates and error if you
    // don't get the dates exactly perfect.
    // var date_start_iso = date_min.toISOString();
    // var date_end_iso = date_last.toISOString();
    // var date_start = date_now.toISOString();
    // var date_start = date_now.toLocaleString();
    // var date_start = date_now.toUTCString();
    date_range['date_start'] = date_start ;
    date_range['date_last'] = date_last ;
    date_range['days_forward'] = days_forward ;
    date_range['hours_forward'] = hours_forward ;
    date_range['date_start_iso'] = date_start ;
    date_range['date_end_iso'] = date_start ;
    return( date_range) ;
  }
  // Asking Erddap for data out of range is problematic
  // so check against the metadata we have from Erics service.
  getERDDAPDateRange(erddap_array) {
    var date_range = [] ;
    var date_start = this.getStartDate();
    var date_last = this.getEndDate();
    if ( erddap_array != undefined ) {
      var erd_date_start = new Date(erddap_array['start_time_msse']) ;
      var erd_date_end = new Date(erddap_array['end_time_msse']) ;
      // if we don't go back far enough
      if ( erd_date_start > date_start ) {
        date_start = erd_date_start ;
      }
      // if we're asking for too much
      if ( erd_date_end < date_last ) {
        date_last = erd_date_end ;
      }
    }

    var date_start_iso = date_start.toISOString();
    var date_end_iso = date_last.toISOString();
    // ERDDAP doesn't like the T
    // ERROR in parseISODateTime: dateTime='2017-09-10T16:00:00.000Z
    //var date_start_iso_not = date_start_iso.substr(0,10) + " " + date_start_iso.substr(11) ;
    // var date_end_iso_not = date_end_iso.substr(0,10) + " " + date_end_iso.substr(11) ;
    date_range['date_start'] = date_start ;
    date_range['date_end'] = date_last ;
    date_range['date_start_iso'] = date_start_iso ;
    date_range['date_end_iso'] = date_end_iso ;
    date_range['date_start_msse'] = date_start.valueOf();
    date_range['date_end_msse'] = date_last.valueOf();
    return( date_range) ;
  }
  // geolocation: "POINT(-70.32741 43.46415)"
  parseGeoLocation( geoLocation ) {
    var gt_index = geoLocation.indexOf('(') ;
    var geo_type = geoLocation.substring(0, gt_index) ;
    var ret_array = [] ;
    switch ( geo_type ) {
      case 'POINT':
        var lon_text_start =  gt_index + 1 ;
        var lon_text = geoLocation.substring( lon_text_start, geoLocation.indexOf(' ') );
        var lat_text_start = geoLocation.indexOf(' ') + 1 ;
        var lat_text = geoLocation.substring( lat_text_start, geoLocation.indexOf(')') ) ;
        ret_array['lat'] = parseFloat( lat_text ) ;
        ret_array['lon'] = parseFloat( lon_text ) ;
        break;
      default:
        break;
    }
  return(ret_array);
  }
  // formatting an hour minute am/pm time
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  dataTypeFormatString (data_type) {
    var ret_val = '%s';
    switch ( data_type )
      {
      case 'air_temperature' :
      case 'sea_water_temperature' :
        ret_val = '%.1f' ;
        break;
      case 'water_level':
      case 'significant_height_of_wind_and_swell_waves' :
        ret_val = '%.2f' ;
        break;
      case 'location':
        ret_val = '%.3f' ;
        break;
      case 'depth':
      case 'sea_water_speed' :
      case 'wind_speed' :
      case 'wind_gust' :
      case 'dissolved_oxygen' :
      case 'turbidity' :
      case 'visibility_in_air' :
        ret_val = '%.1f' ;
        break;
      case 'solar_zenith_angle':
      case 'dominant_wave_period' :
      case 'wind_from_direction' :
      case 'direction_of_sea_water_velocity' :
      case 'percent_oxygen_saturation' :
      case 'percent_sun':
      case 'sea_water_salinity' :
      case 'sea_water_pressure' :
      case 'sea_level_pressure' :
      case 'sea_water_density' :
      case 'percent_oxygen_saturation' :
      case 'chlorophyll' :
      case 'Ed_PAR' :
      case 'surface_partial_pressure_of_carbon_dioxide_in_air':
      case 'surface_partial_pressure_of_carbon_dioxide_in_sea_water':
      case 'transmissivity' :
      case 'attenuation' :
      case 'sound_velocity':
        ret_val = '%0.2f' ;
        break;
      case 'pressure_tendency' :
        ret_val = '%+0.2f' ;
        break;
      default:
        break;
      }
    return(ret_val);
  }
  // calculate wave length from wave period and wave height
  // http://www.ehow.com/how_7404178_calculate-wavelength-water-wave.html
  calculatedWaveLength( wavePeriod, waveHeightM ) {
    var gravitationalConstant = 9.81 ;
    var twoPI = Math.PI * 2 ;
    var divideByPeriod = twoPI / wavePeriod ;
    var interium_value_3 = divideByPeriod * divideByPeriod * waveHeightM / gravitationalConstant ;
    // WTF? var interium_value_4 = Math.sqrt(interium_value_3) ;
    var interium_value_5 = Math.pow(interium_value_3, 0.75 );
    var interium_value_6 = Math.tanh(interium_value_5);
    var interium_value_8 = Math.pow(interium_value_6, 0.66 ) ;

    var interium_value_9 = wavePeriod * wavePeriod * gravitationalConstant / twoPI ;
    var waveLength = interium_value_8 * interium_value_9 ;
    return (waveLength);
  }
  // erddap column index from column name
  // return the column index for a given column name
  ERDDAPColumnIndexFromColumnName( columnNames, columnName ) {
    var column_index = '';
    for ( column_index in columnNames ) {
      if ( columnNames[column_index] == columnName ) {
        break;
      }
    }
  return(column_index);
  }
  // check for 00 or 30 minutes
  // now try using them all!
  useThisTime( ms_to_check ) {
    var use_this_time = false ;
    var date_check = new Date(ms_to_check) ;
    var minutes = date_check.getMinutes() ;
    if ( minutes == 0 || minutes == 30 ) {
      use_this_time = true ;
    }
    use_this_time = true ;
    return(use_this_time);
  }
}

///////////////////////
// GMRI Javascript Common Unit conversions
//////////////////////////
export class GMRIUnits {
  SCALE_POUNDS_TO_KILOS: number = 0.4536;

  constructor() {
  }
  conv_celsius_to_farenheit(in_put) { return ( in_put * 1.8 ) + 32.0; };
  conv_fahrenheit_to_celsius(in_put) { return ( in_put - 32.0 ) / 1.8; };
  conv_fathoms_to_meters(in_put) { return in_put * 1.8288 };
  conv_meters_to_fathoms(in_put) { return in_put / 1.8288 };
  conv_meters_to_feet(in_put) { return in_put / 0.3048 };
  conv_feet_to_meters(in_put) { return in_put * 0.3048 };
  conv_meters_to_miles(in_put) { return in_put / 1609.344 };
  conv_meters_to_nautical_miles(in_put) { return in_put / 1853.184 };
  conv_mps_to_knots(in_put) { return in_put / 0.5144444 };
  conv_mps_to_kph(in_put) { return in_put / 0.2777778 };
  conv_mps_to_mph(in_put) { return in_put / 0.44704 };
  conv_mph_to_knots(in_put) { return ( in_put / 0.44704 ) * 0.5144444 };
  conv_knots_to_mph(in_put) { return ( in_put / 0.5144444 ) * 0.44704 };
  conv_radian_to_degrees(in_put) { return in_put * (180 / 3.14159) };

  conv_degrees_to_compass(degrees) {
    var compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    degrees = ( degrees + 22.5 ) / 22.5;
    degrees -= .5;
    // Note: Units.pm relied on integer truncation
    var quad = degrees % 16;
    return compass[quad];
  }
  roundNumber(num, dec) {
   var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
   return result;
  }

  // utc_str must look like GLOS SLR WMS times "2012-05-23 10:00:00"
  // gets converted to users browser local time
  conv_UTC_to_local(utc_str){
    if(!utc_str){
        return '';
    }
    var tz_offset_ms = 0;
    tz_offset_ms = new Date().getTimezoneOffset() * 60000 * -1;
    var tmp = utc_str.split(' ');
    var tmp2 = tmp[0].split('-');
    var tmp3 = tmp[1].split(':');
    var y = tmp2[0];
    var m = tmp2[1] - 1;
    var d = tmp2[2];

    var h = tmp3[0];

    var epoch = Date.UTC(y,m,d,h,0,0,0);
    epoch += tz_offset_ms;

    var local_dt = new Date(epoch);
    var ly = local_dt.getUTCFullYear();
    var lm = local_dt.getUTCMonth() + 1;
    var ld = local_dt.getUTCDate();
    var lh = local_dt.getUTCHours();
    return (this.formatGLOSDate(ly, lm, ld, lh));
  }

  // utc_str must look like GLOS SLR WMS times "2012-05-23 10:00:00"
  // tz_offset is in seconds, usually negative for US
  // gets converted to arbitrary tz_offset (gotten via PHP DateTime object on the server
  conv_UTC_to_tz(utc_str, tz_offset) {
    if(!utc_str || !tz_offset){
        return '';
    }
    var tz_offset_ms = 0;
    var tmp = utc_str.split(' ');
    var tmp2 = tmp[0].split('-');
    var tmp3 = tmp[1].split(':');
    var y = tmp2[0];
    var m = tmp2[1] - 1;
    var d = tmp2[2];
    var h = tmp3[0];

    var epoch = Date.UTC(y,m,d,h,0,0,0);
    tz_offset_ms = tz_offset * 1000;
    epoch += tz_offset_ms;

    var local_dt = new Date(epoch);
    var ly = local_dt.getUTCFullYear();
    var lm = local_dt.getUTCMonth() + 1;
    var ld = local_dt.getUTCDate();
    var lh = local_dt.getUTCHours();
    return (this.formatGLOSDate(ly, lm, ld, lh));
  }

  formatGLOSDate(year, mon, day, hour) {
    var date_string = year + '-';
    if(mon < 10){
        date_string += "0" + mon;
    }else{
        date_string += mon;
    }
    date_string += '-';
    if(day < 10){
        date_string += "0" + day;
    }else{
        date_string += day;
    }

    // This is the time format the GLOS WMS needs
    // ' 07:00:00';
    date_string += ' ';

    if(hour < 10){
        date_string += "0" + hour;
    }else{
        date_string += hour;
    }

    date_string += ':00';
    return date_string;
  }
  // drill into the yAxis object returned by an event
  visibleValue( series, series_name ) {
    var series_index = this.seriesIndex( series, series_name );
    var visible = series[series_index].visible ;
    return(visible) ;
  }
  // drill into the yAxis object returned by an event
  // to get an index pointing to a series.
  seriesIndex( series, series_name ) {
    var series_key;
    for ( series_key in series ) {
      if ( series[series_key].name.indexOf(series_name ) > -1 ){
        break;
      }
    }
    return(series_key) ;
  }
}
