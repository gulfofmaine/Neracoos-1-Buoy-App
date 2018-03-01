import {sprintf} from "sprintf-js";
import { DatePipe } from '@angular/common';

export class ESTOFSObject {

  name: string ;
  initialized: boolean = false ;
  surge_data: any;

  constructor( name: string) {
    this.name = name ;
  }

  getDataURL(date_start,hours_forward, location_name, appConfig) {
    // this reads from a table which aggregates the surge forecasts
    // monitoring locations identifiers are suppose to be unique in this table
    // as opposed to generally they are unique by project but Ian didn't think of that
    // until now. 9-16-2015
    // http://local.dev.odpdx7.neracoos.org/data/export/estofs.php?monitoringlocationidentifier=CAMP_ELLIS_1&date_start=2015-09-15T16:00:00&hours_forward=24
    let queryString: string = '/data/export/estofs.php?monitoringlocationidentifier=' +
              location_name + '&date_start=' + date_start +
              '&hours_forward=' + hours_forward ;
    // let encQS: string =  encodeURIComponent(queryString);
    // NOTE: host should not have http in it's name!!!
    let straightURL: string = 'http://' + appConfig.getWQDataHostPrefix() + queryString ;
    return( straightURL );
  }

}

export class TideObject {

  name: string ;
  appConfig: any;
  initialized: boolean = false ;
  tide_data: any;
  ml_identifier: string ;
  geolocation: any;
  tideMLLW: any ;
  tideMSL: any ;
  tideMHHW: any ;
  tideMHW: any ;
  tideMLW: any ;
  tideNAVD88: any ;
  tideHAT: any ;
  tideLAT: any ;
  dt_wl_format: any;
  relativeTo: any;
  date_range: any;
  datum: any;
  etofs_date_range: any;
  etofs_date_start: any;
  days_forward: any;
  hours_forward: any ;
  tidePredictionData: any;
  hiloTidePredictionData: any;
  waterLevelData: any;
  surgeData: any;
  necofs_data: any;
  start_date_ms: any;
  end_date_ms: any;
  chart_config_array: any ;


  constructor( ml_identifier: string,
              public datePipe: DatePipe) {
    this.ml_identifier = ml_identifier ;
  }

  update_tide_object(appConfig) {
    this.relativeTo = appConfig.getGraphCenter() ;
  }
  initialize_tide_object( tide_ml_data, appConfig ) {
    this.ml_identifier = tide_ml_data.monitoringlocationidentifier;
    this.name = tide_ml_data.monitoringlocationname;
    appConfig.dt_wl_format = appConfig.dataTypeFormatString('water_level');
    this.geolocation = tide_ml_data.geolocation;

    this.relativeTo = appConfig.getGraphCenter() ;
    this.date_range = appConfig.getTideDateRange() ;
    this.datum = appConfig.getDatum() ;

    this.etofs_date_range = appConfig.getEtofsDateRange() ;

    this.etofs_date_start = this.etofs_date_range['date_start'];
    this.days_forward = this.etofs_date_range['days_forward'];
    this.hours_forward = this.days_forward * 24 ;
    // get a start and end date in ms to limit necofs data displayed.
    this.start_date_ms = appConfig.getStartDate().getTime();
    this.end_date_ms = appConfig.getEndDate().getTime();

    for ( var attr_key in tide_ml_data.attributes ) {
     //  test_output += "<tr><td>" + ml[sa_key].attributes[attr_key].fields[0].fieldfloat_0.standard_name + "</td><td>" +
     //         ml[sa_key].attributes[attr_key].fields[0].fieldfloat_0.data_value + "</td></tr>";
      switch (tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0.standard_name ) {
        case 'MLLW':
          this.tideMLLW = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'MLW':
          this.tideMLW = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'MSL':
          this.tideMSL = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'MHHW':
          this.tideMHHW = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'MHW':
          this.tideMHW = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'NAVD88':
          this.tideNAVD88 = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'HAT':
          this.tideHAT = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
        case 'LAT':
          this.tideLAT = tide_ml_data.attributes[attr_key].fields[0].fieldfloat_0;
          break;
      }
    }
  }

  getDataURL(date_start,hours_forward, location_name, appConfig) {
    // http://local_ian.cbass.gmri.org/code/cbassobjectjson?object_type=projmls&organizationidentifier=NOAA&projectidentifier=NOS/CO-OPS
    let path: string = '/code/cbassobjectjson?object_type=projmlsingle&organizationidentifier=NOAA&projectidentifier=NOS/CO-OPS' ;
    path += '&monitoringlocationidentifier=' + location_name ;
    // let encQS: string =  encodeURIComponent(path);
    let straightURL:string = 'http://' + appConfig.getNJSProxyCbassHostPrefix() + path ;
    return( straightURL );
  }
  getPredictionsURL(appConfig, interval, timezone) {
    let date_range: any = appConfig.getTideDateRange() ;
    let datum: string = appConfig.getTideRequestDatum() ;
    // Datums /api/datagetter?product=datums&application=NOS.COOPS.TAC.WL&station=8418150&units=english&format=json
    // tide predictions    /api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=20160510&end_date=20160511&datum=MLLW&station=8418150&time_zone=GMT&units=english&interval=&format=json
    // waterlevel observed /api/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=20160510&end_date=20160511&datum=MLLW&station=8418150&time_zone=GMT&units=english&format=json
    // timezone lst_ldt local standard time, local daylight time
    let predictionsURL: string = "http://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=" +
            this.date_range['date_start'] +
            "&end_date=" + date_range['date_end'] +
            "&datum=" + datum + "&station=" + this.ml_identifier +
            "&time_zone=" + timezone + "&units=english&interval=" + interval + "&format=json&application=GMRI";
    var encQS =  encodeURIComponent(predictionsURL);
    var predictionsProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=' + encQS ;
    return(predictionsProxyURL);

  }
  getWaterLevelURL(appConfig) {
    let date_range: any = appConfig.getTideDateRange() ;
    let datum: string = appConfig.getTideRequestDatum() ;
    let water_levelURL: string = "http://tidesandcurrents.noaa.gov/api/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=" +
            this.date_range['date_start'] +
            "&end_date=" + date_range['date_end'] +
            "&datum=" + datum + "&station=" + this.ml_identifier +
            "&time_zone=lst_ldt&units=english&interval=&format=json&application=GMRI";
    var encQS =  encodeURIComponent(water_levelURL);
    var water_levelProxyURL = appConfig.getNeracoosHostPrefix() + '/proxy2?ajax=1&url=' + encQS ;
    return(water_levelProxyURL);
  }
  getEstofsURL(appConfig) {
    // this is just the naming convention used for surge data. We're gathering data
    // from etofs for all the tide stations and naming it the same prefaced with INUNDATE_
    // INUNDATE_8423898
    let surgeMLIdentifier: string = "INUNDATE_" + this.ml_identifier ;
    // http://local.dev.odpdx7.neracoos.org/data/export/estofs.php?monitoringlocationidentifier=CAMP_ELLIS_1&date_start=2015-09-15T16:00:00&hours_forward=24
    let queryString: string = '/data/export/estofs.php?monitoringlocationidentifier=' +
              surgeMLIdentifier + '&date_start=' + this.etofs_date_start +
              '&hours_forward=' + this.hours_forward ;
    var etofsURL = 'http://' + appConfig.getWQDataHostPrefix() + queryString ;
    return(etofsURL);
  }
  getNecofsURL(appConfig) {
    // NECOFS forecast
    var geo_array = appConfig.parseGeoLocation( this.geolocation ) ;
    // WATER level
    // http://www.neracoos.org:8300/cgi-bin/necofs_query?lat=43.18&lon=-70.42&necofs_type=water_level&domain=GOM3
    var necofs_qs = '/cgi-bin/necofs_query?lat=' + geo_array['lat'] + '&lon=' + geo_array['lon'] +
           '&necofs_type=water_level&domain=GOM3';
    var necofsURL = "http://www.neracoos.org:8300" + necofs_qs ;
    return(necofsURL);
  }
  // return the relative offset (in feet I think)
  getRelativeOffset() {
    let relativeOffset: number = 0 ;
    // I asked for data realtive to MSL so do some math here.
    switch ( this.relativeTo ) {
      case 'MSL' :
        break;
      case 'MLLW' :
        relativeOffset = 0 - (this.tideMLLW.data_value  - this.tideMSL.data_value);
        break;
      case 'MHHW' :
        relativeOffset = 0 - (this.tideMHHW.data_value  - this.tideMSL.data_value);
        break;
      case 'NAVD88' :
        relativeOffset = 0 - (this.tideNAVD88.data_value  - this.tideMSL.data_value);
        break;
      case 'ZERO':
        relativeOffset = 0 + this.tideMSL.data_value;
        break;
      default:
        relativeOffset = this.tideMSL.data_value ;
        break;
    }
    return ( relativeOffset ) ;
  }
  drawChart (appConfig) {
    var ret_array = [] ;
    var new_series = [];
    var yaxis_array = [];
    // var count = 0 ;
    var toggle_opposite = false ;
    var param_time_series = [] ;
    // var param_time_series_range = [] ;
    var relativeOffset = 0 ;
    var pwl_percent = appConfig.getPWLPercent();
    var pwl_percent_increase_prompt = '';
    var etofs_tide_percent = appConfig.getETOFSTIDEPercent();
    var etofs_tide_percent_increase_prompt = '';
    var necofs_tide_percent = appConfig.getNECOFSTIDEPercent();
    var necofs_tide_percent_increase_prompt = '';

    var guideValueMLLW = this.tideMLLW.data_value ;
    var guideValueMHHW = this.tideMHHW.data_value ;
    var guideValueCenter = 0 ;
    var etofs_offset = 0 ;
    var use_custom_hover = true ;
    var point_count = 0;
    let p_key:any;
    let pointdatems:number;
    let value:number;
    let rdt_temp:string;
    let time:any;
    let series_name:string;
    let units:string;
    let rdtime:number;
    let resultdatetext:string;
    let sd_key:any;

    // var debug_start_date = new Date(this.start_date_ms);
    // var debug_end_date = new Date(this.end_date_ms);
    // I asked for data realtive to MSL so do some math here.
    relativeOffset = this.getRelativeOffset();
    switch ( this.relativeTo ) {
      case 'MSL' :
        guideValueMLLW += 0 - this.tideMSL.data_value ;
        guideValueMHHW += 0 - this.tideMSL.data_value ;
        etofs_offset = 0;
        break;
      case 'MLLW' :
        guideValueMLLW += relativeOffset - this.tideMSL.data_value ;
        guideValueMHHW += relativeOffset - this.tideMSL.data_value ;
        etofs_offset = this.tideMSL.data_value - this.tideMLLW.data_value;
        etofs_offset = 0;
        break;
      case 'MHHW' :
        guideValueMLLW += relativeOffset - this.tideMSL.data_value ;
        guideValueMHHW += relativeOffset - this.tideMSL.data_value ;
        etofs_offset = this.tideMSL.data_value - this.tideMHHW.data_value;
        etofs_offset = 0;
        break;
      case 'NAVD88' :
        guideValueMLLW += relativeOffset - this.tideMSL.data_value ;
        guideValueMHHW += relativeOffset - this.tideMSL.data_value ;
        etofs_offset = this.tideNAVD88.data_value  - this.tideMSL.data_value;
        break;
      case 'ZERO':
        break;
      default:
        break;
    }
    // var chart_max = guideValueMHHW ; // keep track of the maximum so I can add a dummy marker
    // var chart_min = guideValueMLLW ;
    var max_tp = guideValueMHHW ;
    var min_tp = guideValueMLLW ;
    var param_ts_key = 0 ;
    ////////////////
    // NECOFS waterlevel data
    if ( this.necofs_data != undefined ) {
      var necofs_value = null;
      let necofs_series_object: any = {} ;
      new_series.push( necofs_series_object );
      // value suffix object
      let necofs_vs:any = {shared: true, crosshairs: true};
      necofs_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      // necofs_vs.xDateFormat = '%Y-%m-%d' ;
      if ( use_custom_hover ) {
        necofs_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) + 'm)</b><br/>')
        }
      } else {
        necofs_vs.valueSuffix = " feet" ;
      }
      series_name = appConfig.getVariousPrompts('NECOFS_WATER_LEVEL') ;
      necofs_series_object.name = series_name ;
      necofs_series_object.tooltip = necofs_vs;
      // necofs_series_object.visible = appConfig.getUserPreferenceParameterVisibility('NECOFS_WATER_LEVEL');
      necofs_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'NECOFS_WATER_LEVEL') ;

      necofs_series_object.type = 'line';
      necofs_series_object.color = appConfig.plotColors['necofs_water_level'];
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('NECOFS_WATER_LEVEL') ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('NECOFS_WATER_LEVEL', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('NECOFS_WATER_LEVEL', true) ;
              }
            }
          }
      } ;
      // don't increment the first.
      // param_ts_key++;
      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'Preliminary' ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      necofs_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      for (sd_key in this.necofs_data.data) {
        // The necofs service gives us all the data available and it's more
        // limit what's displayed to avoid artificially diminishing the other data
        var point_date_ms = this.necofs_data.data[sd_key][0] ;
        if ( point_date_ms > this.start_date_ms && point_date_ms < this.end_date_ms )
          {
          units = 'feet';
          switch ( units ) {
            case 'feet':
              necofs_value = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(this.necofs_data.data[sd_key][1])));
              break;
          }
          necofs_value += relativeOffset ;
          if ( necofs_tide_percent != 0 ) {
            necofs_value = necofs_value + necofs_value * (necofs_tide_percent / 100) ;
            necofs_value = parseFloat(sprintf(appConfig.dt_wl_format,necofs_value));
            if ( necofs_tide_percent > 0 ) {
              necofs_tide_percent_increase_prompt = '(+' + necofs_tide_percent + '%)';
            } else {
              necofs_tide_percent_increase_prompt = '(' + necofs_tide_percent + '%)';
            }
          }
          // -9999.9 is used as no data.
          if ( necofs_value != undefined && appConfig.useThisTime(point_date_ms) &&
                    (necofs_value > -9999.0 &&  necofs_value < 900 ) ) {
            param_time_series[param_ts_key].data[0].reading_array.push([point_date_ms, necofs_value]);
            if ( necofs_value > max_tp ) {
              max_tp = necofs_value ;
            }
            if ( necofs_value < min_tp ) {
              min_tp = necofs_value ;
            }
          }
          point_count ++;
        }
      }
      if ( use_custom_hover ) {
        necofs_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) +
            'm)</b><br/>' + necofs_tide_percent_increase_prompt);
        }
        necofs_series_object.name += necofs_tide_percent_increase_prompt ;
      } else {
        necofs_vs.valueSuffix = " feet" ;
      }
    }
    ////////////////
    // Etofs surge + tide water level forecast
    // elevsfc surface ocean surface elevation relative to geoid (tide) [m] "
    // etsrgsfc surface extra tropical storm surge [m] "
    // etcwlsfc surface extra tropical storm surge combined surge and tide [m] "
    var elevsfc = 0 ;
    var etsrgsfc = 0 ;
    var etcwlsfc = 0 ;
    // var surge_datum = 'MSL';
    var surge_data = this.surgeData;

    if ( surge_data != undefined ) {
      /////
      // ETOFS elevsfc surface ocean surface elevation relative to geoid (tide) [m] "
      // ETOFS Tide
      let estofs_series_object: any = {} ;
      new_series.push( estofs_series_object );
      // value suffix object
      let estofs_vs: any = {};
      estofs_vs.shared = true ;
      // estofs_vs.xDateFormat = '%Y-%m-%d' ;
      estofs_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      estofs_vs.crosshairs = true ;
      if ( use_custom_hover ) {
        estofs_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) + 'm)</b><br/>')
        }
      } else {
        estofs_vs.valueSuffix = " feet" ;
      }
      series_name = appConfig.getETOFSTIDEPrompt() ;
      estofs_series_object.name = series_name ;
      estofs_series_object.tooltip = estofs_vs;
      // estofs_series_object.visible = appConfig.getUserPreferenceParameterVisibility('TIDE_ETOFS_TIDE');
      estofs_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_ETOFS_TIDE') ;

      estofs_series_object.type = 'line';
      estofs_series_object.color = appConfig.plotColors['elevsfc'];
      estofs_series_object.events = {
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getETOFSTIDEPrompt() ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_TIDE', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_TIDE', true) ;
              }
            }
          }
      } ;
      // don't increment the first.
      // param_ts_key++;
      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'Preliminary' ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      estofs_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      for (sd_key in surge_data.data) {
        resultdatetext = surge_data.data[sd_key].reading_time;
        // adding two zeros seems to do the trick
        // Date.parse("2015-09-30 07:00:00-0400")
        resultdatetext += "00";
        // var resultdatems = Date.parse(resultdatetext);
        // var rdtime = resultdatems.getTime();
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                          resultdatetext.substr(11) ;
        rdtime = Date.parse(rdt_temp);
        if ( rdtime > this.start_date_ms && rdtime < this.end_date_ms )
          {
          units = 'feet';
          switch ( units ) {
            case 'feet':
              elevsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].elevsfc)));
              etsrgsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etsrgsfc)));
              etcwlsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etcwlsfc)));
              elevsfc  += etofs_offset ;
              // etsrgsfc  += etofs_offset ; surge has no offset
              etcwlsfc  += etofs_offset ;
              break;
          }
          elevsfc += relativeOffset ;
          if ( etofs_tide_percent != 0 ) {
            elevsfc = elevsfc + elevsfc * (etofs_tide_percent / 100) ;
            elevsfc = parseFloat(sprintf(appConfig.dt_wl_format,elevsfc));
            if ( etofs_tide_percent > 0 ) {
              etofs_tide_percent_increase_prompt = '(+' + etofs_tide_percent + '%)';
            } else {
              etofs_tide_percent_increase_prompt = '(' + etofs_tide_percent + '%)';
            }
          }
          // -9999.9 is used as no data.
          if ( elevsfc != undefined && appConfig.useThisTime(rdtime) &&
                    (elevsfc > -9999.0 &&  elevsfc < 900 ) ) {
            param_time_series[param_ts_key].data[0].reading_array.push([rdtime, elevsfc]);
            if ( elevsfc > max_tp ) {
              max_tp = elevsfc ;
            }
            if ( elevsfc < min_tp ) {
              min_tp = elevsfc ;
            }
          }
          point_count ++;
        }
      }
      if ( use_custom_hover ) {
        estofs_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) +
            'm)</b><br/>' ); //  + etofs_tide_percent_increase_prompt);
        }
        estofs_series_object.name += etofs_tide_percent_increase_prompt ;
      } else {
        estofs_vs.valueSuffix = " feet" ;
      }
      /////
      // ETOFS etcwlsfc surface extra tropical storm surge combined surge and tide [m] "
      // don't display this on the tide page now...
      let estofs_etcwlsfc_series_object: any = {} ;
      // comment out the push to the array to remove surge and tide from the graph.
      new_series.push( estofs_etcwlsfc_series_object );
      series_name = appConfig.getPWLPrompt() ;
      estofs_etcwlsfc_series_object.name = series_name ;
      // value suffix object
      let estofs_etcwlsfc_vs: any = {};
      estofs_etcwlsfc_vs.shared = true ;
      // estofs_etcwlsfc_vs.xDateFormat = '%Y-%m-%d' ;
      estofs_etcwlsfc_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      estofs_etcwlsfc_vs.crosshairs = true ;
      // more estofs_etcwlsfc_vs after +- percent is calculated below...
      estofs_etcwlsfc_series_object.tooltip = estofs_etcwlsfc_vs;
      //estofs_etcwlsfc_series_object.visible = appConfig.getUserPreferenceParameterVisibility('TIDE_ETOFS_SURGE_TIDE') ;
      estofs_etcwlsfc_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_ETOFS_SURGE_TIDE') ;

      estofs_etcwlsfc_series_object.type = 'line';
      estofs_etcwlsfc_series_object.color = appConfig.plotColors['etcwlsfc'];
      estofs_etcwlsfc_series_object.events = {
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getPWLPrompt() ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_SURGE_TIDE', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_SURGE_TIDE', true) ;
              }
            }
          }
      } ;
      // don't increment the first.
      // param_ts_key++;
      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'Preliminary' ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      estofs_etcwlsfc_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      for (sd_key in surge_data.data) {
        resultdatetext = surge_data.data[sd_key].reading_time;
        // adding two zeros seems to do the trick
        // Date.parse("2015-09-30 07:00:00-0400")
        resultdatetext += "00";
        // var resultdatems = Date.parse(resultdatetext);
        // var rdtime = resultdatems.getTime();
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                          resultdatetext.substr(11) ;
        rdtime = Date.parse(rdt_temp);
        if ( rdtime > this.start_date_ms && rdtime < this.end_date_ms )
          {
          units = 'feet';
          switch ( units ) {
            case 'feet':
              elevsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].elevsfc)));
              etsrgsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etsrgsfc)));
              etcwlsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etcwlsfc)));
              elevsfc  += etofs_offset ;
              // etsrgsfc  += etofs_offset ; surge has not offset
              etcwlsfc  += etofs_offset ;
              break;
          }
          etcwlsfc += relativeOffset ;
          if ( pwl_percent != 0 ) {
            etcwlsfc = etcwlsfc + etcwlsfc * (pwl_percent / 100) ;
            etcwlsfc = parseFloat(sprintf(appConfig.dt_wl_format,etcwlsfc));
            if ( pwl_percent > 0 ) {
              pwl_percent_increase_prompt = '(+' + pwl_percent + '%)';
            } else {
              pwl_percent_increase_prompt = '(' + pwl_percent + '%)';
            }
          }
          // -9999.9 is used as no data.
          if ( etcwlsfc != undefined && appConfig.useThisTime(rdtime) &&
                    (etcwlsfc > -9999.0 &&  elevsfc < 900 ) ) {
            param_time_series[param_ts_key].data[0].reading_array.push([rdtime, etcwlsfc]);
            if ( elevsfc > max_tp ) {
              max_tp = etcwlsfc ;
            }
            if ( elevsfc < min_tp ) {
              min_tp = etcwlsfc ;
            }
          }
          point_count ++;
        }
      }
      if ( use_custom_hover ) {
        estofs_etcwlsfc_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) +
            'm)</b><br/>' + pwl_percent_increase_prompt);
        }
        estofs_etcwlsfc_series_object.name += pwl_percent_increase_prompt ;
      } else {
        estofs_etcwlsfc_vs.valueSuffix = " feet" ;
      }
      /////
      // ETOFS etsrgsfc surface extra tropical storm surge just surge [m] "
      // don't display this on the tide page now...
      let estofs_etsrgsfc_series_object: any = {} ;
      // comment out the push to the array to remove surge from the graph.
      new_series.push( estofs_etsrgsfc_series_object );
      series_name = appConfig.getETOFSSURGEPrompt() ;
      estofs_etsrgsfc_series_object.name = series_name ;
      // value suffix object
      let estofs_etsrgsfc_vs: any = {};
      estofs_etsrgsfc_vs.shared = true ;
      estofs_etsrgsfc_vs.crosshairs = true ;
      // more estofs_etsrgsfc_vs after +- percent is calculated below...
      estofs_etsrgsfc_series_object.tooltip = estofs_etsrgsfc_vs;
      // end of elegant scheme I'm showing it on the comparison graph but not  on the max water level one
      estofs_etsrgsfc_series_object.visible = true ; // appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_ETOFS_SURGE') ;

      estofs_etsrgsfc_series_object.type = 'line';
      estofs_etsrgsfc_series_object.color = appConfig.plotColors['etsrgsfc'];
      estofs_etsrgsfc_series_object.events = {
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getPWLPrompt() ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_SURGE', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('TIDE_ETOFS_SURGE', true) ;
              }
            }
          }
      } ;
      // don't increment the first.
      // param_ts_key++;
      param_time_series[param_ts_key] = {} ;
      param_time_series[param_ts_key].data = [] ;  // array of dataobjects
      param_time_series[param_ts_key].name = 'Preliminary' ;

      param_time_series[param_ts_key].data[0] = {};
      param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
      estofs_etsrgsfc_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      for (sd_key in surge_data.data) {
        resultdatetext = surge_data.data[sd_key].reading_time;
        // adding two zeros seems to do the trick
        // Date.parse("2015-09-30 07:00:00-0400")
        resultdatetext += "00";
        // var resultdatems = Date.parse(resultdatetext);
        // var rdtime = resultdatems.getTime();
        rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                        "/" + resultdatetext.substr(8,2) + " " +
                          resultdatetext.substr(11) ;
        rdtime = Date.parse(rdt_temp);
        if ( rdtime > this.start_date_ms && rdtime < this.end_date_ms )
          {
          units = 'feet';
          switch ( units ) {
            case 'feet':
              elevsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].elevsfc)));
              etsrgsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etsrgsfc)));
              etsrgsfc = parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_meters_to_feet(surge_data.data[sd_key].etsrgsfc)));
              elevsfc  += etofs_offset ;
              // etsrgsfc  += etofs_offset ; surge has not offset
              etsrgsfc  += etofs_offset ;
              break;
          }
          // -9999.9 is used as no data.
          if ( etsrgsfc != undefined && appConfig.useThisTime(rdtime) &&
                    (etsrgsfc > -9999.0 &&  elevsfc < 900 ) ) {
            param_time_series[param_ts_key].data[0].reading_array.push([rdtime, etsrgsfc]);
          }
          point_count ++;
        }
      }
      if ( use_custom_hover ) {
        estofs_etsrgsfc_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) +
            'm)</b>');
        }
      } else {
        estofs_etsrgsfc_vs.valueSuffix = " feet" ;
      }

    }
    // end of etofs surge + tide water level forecast
    ///////////////
    // TIDE
    let tide_series_object: any = {} ;
    new_series.push( tide_series_object );
    // value suffix object
    let tide_vs: any = {};
    tide_vs.shared = true ;
    tide_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
    // tide_vs.xDateFormat = '%Y-%m-%d' ;
    tide_vs.crosshairs = true ;
    if ( use_custom_hover ) {
      tide_vs.pointFormatter = function () {
        return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
         ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) + 'f (' +
         parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) + 'm)</b><br/>')
      }
    } else {
      tide_vs.valueSuffix = " feet" ;
    }
    tide_vs.shared = true ;
    series_name = appConfig.getVariousPrompts('NOAA_PREDICTED_TIDE') ;
    tide_series_object.name = series_name ;
    tide_series_object.tooltip = tide_vs;
    //tide_series_object.visible = appConfig.getUserPreferenceParameterVisibility('TIDE_PREDICTED_WATER_LEVEL') ;
    tide_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_PREDICTED_WATER_LEVEL') ;

    tide_series_object.type = 'line';
    tide_series_object.color = appConfig.plotColors['noaa_predicted_tide'];
    tide_series_object.events = {
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('NOAA_PREDICTED_TIDE')  ) ;
              if(visible_value) {
                // event.target.visible = false ;
                appConfig.setUserPreferenceParameterVisibility('TIDE_PREDICTED_WATER_LEVEL', false) ;
              } else {
                // event.target.visible = true ;
                appConfig.setUserPreferenceParameterVisibility('TIDE_PREDICTED_WATER_LEVEL', true) ;
              }
            }
        }
    } ;
    // set up the yaxis labeling and so forth for tide
    tide_series_object.yAxis = 0;
    let yaxis_key: number = 0 ;
    param_ts_key++;
    yaxis_array[yaxis_key] = {};

    let new_label: any = {} ;
    new_label.format = '{value} ' + yaxis_key  ;

    let new_title: any = {} ;
    new_title.text = 'feet' ;

    yaxis_array[yaxis_key].labels = new_label;
    yaxis_array[yaxis_key].title = new_title;
    yaxis_array[yaxis_key].opposite = toggle_opposite;
    yaxis_array[yaxis_key].gridlinewidth = 0;

    var guideLines = [] ;
    guideLines.push({
          value: guideValueMLLW,
          color: appConfig.plotColors['mllw_guide_line'],
          dashStyle: 'shortdash',
          width: 2,
          label: {
              text: 'MLLW'
          }
      });
    guideLines.push({
          value: guideValueMHHW,
          color: appConfig.plotColors['mhhw_guide_line'],
          dashStyle: 'shortdash',
          width: 2,
          label: {
              text: 'MHHW'
          }
      });

    switch (this.relativeTo ) {
      case 'MSL':
      case 'NAVD88':
        guideLines.push({
              value: guideValueCenter,
              color: appConfig.plotColors['center_guide_line'],
              dashStyle: 'shortdash',
              width: 2,
              label: {
                  text: this.relativeTo
              }
          });
        break;
    }

    yaxis_array[yaxis_key].plotLines = guideLines ;
    toggle_opposite = !toggle_opposite;

    param_time_series[param_ts_key] = {} ;
    param_time_series[param_ts_key].data = [] ;  // array of dataobjects
    param_time_series[param_ts_key].name = 'Tide Model' ;
    param_time_series[param_ts_key].uom = "flibits" ;
    param_time_series[param_ts_key].display_uom = "flibits display uom" ;

    param_time_series[param_ts_key].data[0] = {};
    param_time_series[param_ts_key].data[0].reading_array = []; // data objects readings array
    tide_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

    // loop through the points
    // var point_count = 0;
    for ( p_key in this.tidePredictionData.predictions ) {
      time = this.tidePredictionData.predictions[p_key].t ;
      value = parseFloat(this.tidePredictionData.predictions[p_key].v) ;
      value += relativeOffset ;
      value = parseFloat(sprintf(appConfig.dt_wl_format,value));
      // 2017-06-28 00:00
      rdt_temp = time.substr(0,4) + "/" + time.substr(5,2) +
                      "/" + time.substr(8,2) + " " +
                        time.substr(11) ;
      pointdatems = Date.parse(rdt_temp);
      //var pointdatems = Date.parse(time.toString());
      if ( pointdatems > this.start_date_ms && pointdatems < this.end_date_ms )
        {
        // -9999.9 is used as no data.
        if ( value != undefined && appConfig.useThisTime(pointdatems) &&
                  (value > -9999.0 &&  value < 900 ) ) {
          param_time_series[param_ts_key].data[0].reading_array.push([pointdatems,value]);
          if ( value > max_tp ) {
            max_tp = value ;
          }
          if ( value < min_tp ) {
            min_tp = value ;
          }
        }
        point_count ++;
      }
    } // end of looping
    /////////////////
    // Water Level
    let wl_series_object: any = {} ;
    new_series.push( wl_series_object );
    // value suffix object
    let wl_vs: any = {};
    wl_vs.shared = true ;
    // wl_vs.xDateFormat = '%Y-%m-%d' ;
    wl_vs.crosshairs = true ;
    wl_vs.shared = true ;
    wl_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
    if ( use_custom_hover ) {
      wl_vs.pointFormatter = function () {
        return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
         ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
          'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) + 'm)</b><br/>')
      }
    }
    else {
      wl_vs.valueSuffix = " feet" ;
    }
    series_name = appConfig.getVariousPrompts('NOAA_OBSERVED_TIDE') ;
    wl_series_object.name = series_name ;
    wl_series_object.tooltip = wl_vs;
    // wl_series_object.visible = appConfig.getUserPreferenceParameterVisibility('TIDE_OBS_WATER_LEVEL') ;
    wl_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_OBS_WATER_LEVEL') ;

    wl_series_object.type = 'line';
    wl_series_object.color =  appConfig.plotColors['noaa_predicted_water_level'];
    wl_series_object.events = {
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
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, appConfig.getVariousPrompts('NOAA_OBSERVED_TIDE') ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('TIDE_OBS_WATER_LEVEL', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('TIDE_OBS_WATER_LEVEL', true) ;
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
    wl_series_object.data = param_time_series[param_ts_key].data[0].reading_array;


    for ( p_key in this.waterLevelData.data ) {
      time = this.waterLevelData.data[p_key].t ;
      value = parseFloat(this.waterLevelData.data[p_key].v) ;
      value += relativeOffset ;
      value = parseFloat(sprintf(appConfig.dt_wl_format,value));
      //var pointdatems = Date.parse(time.toString());
      // 2017-06-28 00:00
      rdt_temp = time.substr(0,4) + "/" + time.substr(5,2) +
                      "/" + time.substr(8,2) + " " +
                        time.substr(11) ;
      pointdatems = Date.parse(rdt_temp);
      if ( pointdatems > this.start_date_ms && pointdatems < this.end_date_ms )
        {
        // -9999.9 is used as no data.
        if ( value != undefined && appConfig.useThisTime(pointdatems) &&
                  (value > -9999.0 &&  value < 900 ) ) {
          param_time_series[param_ts_key].data[0].reading_array.push([pointdatems,value]);
          if ( value > max_tp ) {
            max_tp = value ;
          }
          if ( value < min_tp ) {
            min_tp = value ;
          }
        }
        point_count ++;
      }
    } // end of looping
    ///////////////////
    //I added obsevred - predicted to the tidal tab because that's waht NOAA has.
    // But I'm only showing that for noaa's prediction not estofs or necofs
    // and it's not all that valuable I think.
    // At least not valuable enough to try and create an interface
    // where the users chooses which tide to do the difference with!
    // And that would only logically lead to differences between
    // the predictions themselves. The graph does this intrisnically.
    // Observed - Predicted ( waterlevel - tide )
    if ( 0 ) {
      let obs_series_object: any = {} ;
      new_series.push( obs_series_object );
      // value suffix object
      let obs_vs: any = {};
      obs_vs.shared = true ;
      obs_vs.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
      // obs_vs.xDateFormat = '%Y-%m-%d' ;
      obs_vs.crosshairs = true ;
      if ( use_custom_hover ) {
        obs_vs.pointFormatter = function () {
          return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
           ': <b>' + parseFloat(sprintf(appConfig.dt_wl_format, this.y)) +
            'f (' + parseFloat(sprintf(appConfig.dt_wl_format,appConfig.gmriUnits.conv_feet_to_meters(this.y))) + 'm)</b><br/>')
        }
      } else {
        obs_vs.valueSuffix = " feet" ;
      }
      series_name = appConfig.getVariousPrompts('NOAA_OBSERVED_PREDICTED') ;
      obs_series_object.name = series_name ;
      obs_series_object.tooltip = obs_vs;
      // obs_series_object.visible = appConfig.getUserPreferenceParameterVisibility('TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL') ;
      obs_series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, 'TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL') ;

      obs_series_object.type = 'line';
      obs_series_object.color =  appConfig.plotColors['noaa_observed_minus_predicted_wl'];
      obs_series_object.events = {
          legendItemClick: function(event) {
              // we're toggling from this value
              // I could have used the event here too it seems.
              var visible_value = appConfig.gmriUnits.visibleValue(this.yAxis.series, '(Observed - Predicted)' ) ;
              if(visible_value) {
                appConfig.setUserPreferenceParameterVisibility('TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL', false) ;
              } else {
                appConfig.setUserPreferenceParameterVisibility('TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL', true) ;
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
      obs_series_object.data = param_time_series[param_ts_key].data[0].reading_array;

      // assumes arrays share identical time values (or bins)
      for ( p_key in param_time_series[param_ts_key-1].data[0].reading_array ) {
        pointdatems = param_time_series[param_ts_key-1].data[0].reading_array[p_key][0] ;
        if ( pointdatems > this.start_date_ms && pointdatems < this.end_date_ms )
          {
          var wl = param_time_series[param_ts_key-1].data[0].reading_array[p_key][1] ;
          var tide = param_time_series[param_ts_key-2].data[0].reading_array[p_key][1];
          value = parseFloat(sprintf(appConfig.dt_wl_format, wl - tide));
          // -9999.9 is used as no data.
          if ( value != undefined && appConfig.useThisTime(pointdatems) &&
                    (value > -9999.0 &&  value < 900 ) ) {
            param_time_series[param_ts_key].data[0].reading_array.push([pointdatems,value]);
          }
        }
      } // end of looping
    } // end of removing observed - predicted.

    yaxis_array[yaxis_key].min = min_tp;
    yaxis_array[yaxis_key].max = max_tp;
    yaxis_array[yaxis_key].tooltip = {
            shared: true
        };
    if ( point_count > 3 ) {
      ret_array['success'] = 'yes' ;
    } else {
      ret_array['success'] = 'Not enough points were created to complete a chart for ' + this.name ;
    }
    // var chart_title = "MLLW of " + sf.tideMLLW;
    var chart_title = "NOAA/NOS/CO-OPS <br/> Observed Water Levels at " + this.ml_identifier +
                "," + this.name ;
    // create an array without the keys
    var yaxis = [] ;
    for ( var yax_key in yaxis_array ) {
      yaxis.push(yaxis_array[yax_key]);
    }
    var chartConfig = {
      options: {
      },
      chart: {
          type: 'spline',
          // Adding this line causes a Highcharts not defined error.
          // animation: Highcharts.svg, // don't animate in old IE
          // marginRight: 100, //hide margin because chart display: block in app.scss
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
          enabled:false,
          selected: 2
      },
      scrollbar: {
        enabled: false
      },
      navigator: {
      //adaptToUpdatedData: false,
      enabled: false
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
        // min: appConfig.getMinDateAllowed().getTime(),
        min: appConfig.getStartDate().getTime(),
        max: appConfig.getEndDate().getTime(),
        //dateTimeLabelFormats: {
        //    day: '%H'
        //},
        tickInterval: appConfig.chartTickIntervalsInMinutes * 60 * 1000,
        allowDecimals: true,
        minTickInterval: appConfig.chartTickIntervalsInMinutes * 60 * 1000,
        ordinal: false
      },
      tooltip: {
          shared: true,
          crosshairs: true
      },
      //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
      // useHighStocks: global_use_highstocks,
      yAxis: yaxis,
      series: new_series
    } ;
    ret_array['chartConfig'] = chartConfig;
    // this.chart_config_array = ret_array;
    return(ret_array);
  }
  // format this data for display
  // {t: "2017-10-24 02:39", v: "3.835", type: "H"}
  getHiloTideData(appConfig, high_only) {
    let hiloData: any = [] ;
    let relativeOffset: number = this.getRelativeOffset();
    for ( let hiloKey in this.hiloTidePredictionData.predictions ) {
      let hiloPoint: any = {} ;
      // Date.parse("2017-10-24 02:39")
      let resultdatetext: string = this.hiloTidePredictionData.predictions[hiloKey].t ;
      let rdt_temp: string = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                      "/" + resultdatetext.substr(8,2) + " " +
                      resultdatetext.substr(11, 5) + ":0000 GMT" ;
      let resultdatems: number = Date.parse(rdt_temp);
      let hiloDate: any = new Date(resultdatems) ;
      hiloPoint.hiloYMD = this.datePipe.transform(hiloDate, "EEEE, M/d h:mma");
      hiloPoint.hiloTime = this.datePipe.transform(hiloDate, "h:mm a");
      hiloPoint.hiloDate = this.datePipe.transform(hiloDate, "M/d/y");
      hiloPoint.hiloDOW = this.datePipe.transform(hiloDate, "EEEE");
      let water_level: number = parseFloat(this.hiloTidePredictionData.predictions[hiloKey].v) + relativeOffset;
      hiloPoint.water_level = parseFloat(sprintf(appConfig.dt_wl_format,water_level));
      hiloPoint.minmax = this.hiloTidePredictionData.predictions[hiloKey].type ;
      if ( !high_only ) {
        hiloData.push(hiloPoint) ;
      } else {
        if ( high_only && this.hiloTidePredictionData.predictions[hiloKey].type == 'H' ) {
          hiloData.push(hiloPoint) ;
        }
      }
    }
    return(hiloData);
  }
  // who sees what is tbd and yes this function name is the same
  // in surge too so watch out!
  get_chart_display_parameters (appConfig) {
    // which parameters to graph.
    var parameters = [];
    var il = appConfig.get_interface_level() ;
    switch (il) {
      case 0:
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['NOAA_OBSERVED_TIDE'] ) {
          parameters.push( 'NOAA_OBSERVED_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['NECOFS_WATER_LEVEL'] ) {
          parameters.push( 'NECOFS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_SURGE_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_SURGE_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_PREDICTED_WATER_LEVEL' );
        }
        break;
      case 1:
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['NOAA_OBSERVED_TIDE'] ) {
          parameters.push( 'NOAA_OBSERVED_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['NECOFS_WATER_LEVEL'] ) {
          parameters.push( 'NECOFS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_SURGE_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_SURGE_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_PREDICTED_WATER_LEVEL' );
        }
        break;
      case 5:
      default:
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_MINUS_PREDICTED_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_OBS_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_OBS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['NOAA_OBSERVED_TIDE'] ) {
          parameters.push( 'NOAA_OBSERVED_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['NECOFS_WATER_LEVEL'] ) {
          parameters.push( 'NECOFS_WATER_LEVEL' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_ETOFS_SURGE_TIDE'] ) {
          parameters.push( 'TIDE_ETOFS_SURGE_TIDE' );
        }
        if (appConfig.defaultParemeterVisibilities['TIDE_PREDICTED_WATER_LEVEL'] ) {
          parameters.push( 'TIDE_PREDICTED_WATER_LEVEL' );
        }
        break;
    }
    return(parameters);
  }
}
export class USGSTidalObject {

  name: string ;
  initialized: boolean = false ;
  usgstidal_data: any;

  constructor( name: string,) {
    this.name = name ; ;
  }

  getDataURL(date_start,hours_forward, location_name, appConfig) {

    // http://local_ian.cbass.gmri.org/code/cbassobjectjson?object_type=projmls&organizationidentifier=NOAA&projectidentifier=NOS/CO-OPS
    var path = '/code/cbassobjectjson?object_type=projmlsingle&organizationidentifier=USGS&projectidentifier=WATERDATA' ;
    path += '&monitoringlocationidentifier=' + location_name ;
    // var encQS =  encodeURIComponent(path);
    var straightURL = 'http://' + appConfig.getNJSProxyCbassHostPrefix() + path ;

    return( straightURL );
  }
}
