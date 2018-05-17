import { AppConfig } from '../../providers/appconfig/appconfig';
import {sprintf} from "sprintf-js";

export class GMRIDataset {

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

  start_date_ms: number;
  end_date_ms: number;
  hours_back: number;
  buoy_name = this.ml_name;

  observationData: any;
  predictionData: any;
  chart_config_array: any ;
  erddapDatasetNames: any = [] ;
  datasetParameters: any = [] ;
  data_variables: any ;   // the object coming from Eric's special file
  interfaceLevelParamVisibility: any = [] ;
  datasetId: string;
  chartComponents: any ;
  plottedParameters: any = [] ;
  start_time_msse : number = 0 ;
  end_time_msse : number = 0 ;


  constructor( ml_identifier: string, appConfig: AppConfig) {
    this.ml_identifier = ml_identifier ;
    this.appConfig = appConfig ;
  }

  setDatasetId( datasetId ) {
    this.datasetId = datasetId ;
  }
  // Set the date range for the data actually retrieved
  // and in this objects observationData
  setDatasetRetrievedDateRange(start_time_msse, end_time_msse ) {
    this.start_time_msse = start_time_msse ;
    this.end_time_msse = end_time_msse ;
  }
  // check if this dataset has already acquired the data it would need
  // for the date range
  isDataAcquired(appConfig) {
    let ret_val: boolean = false ;
    let date_range: any = appConfig.getERDDAPDateRange(null) ;
    let date_start_msse: number = date_range['date_start_msse'];
    let date_end_msse: number = date_range['date_end_msse'];
    // if the requested start time is between the data already acquireds start and end
    // data AND the requested end time is also between those AND the observationData
    // is set then in theory we have the data necessary already.
    if ( date_start_msse >= this.start_time_msse && date_start_msse < this.end_time_msse &&
            date_end_msse > this.start_time_msse && date_end_msse <= this.end_time_msse &&
            this.observationData != null && this.observationData != undefined  ) {
      ret_val = true ;
    }

    return(ret_val);
  }
  // redundant I know but at some point we may need to have an even more involved
  // definition of initialized.
  isInitialized(appConfig) {
    let ret_val: boolean = false ;
    if ( this.observationData != null && this.observationData != undefined ) {
      ret_val = this.isDataAcquired(appConfig) ;
    }
    return(ret_val);
  }
  initialize_dataset_object( ml_data, appConfig ) {
    // this.ml_identifier = ml_data.monitoringlocationidentifier;
    // this.name = ml_data.monitoringlocationname;
    this.ml_name = ml_data.properties.name;
    this.program = ml_data.properties.program;
    this.geo_array = [] ;
    this.geo_array['lat'] = ml_data.geometry.coordinates[1];
    this.geo_array['lon'] = ml_data.geometry.coordinates[0];

    this.dt_wave_format = appConfig.gmriUnits.dataTypeFormatString('significant_height_of_wind_and_swell_waves');
    this.dt_location_format = appConfig.gmriUnits.dataTypeFormatString('location');

    this.geo_display_array = [] ;
    this.geo_display_array['lat'] = parseFloat(sprintf(this.dt_location_format,ml_data.geometry.coordinates[1])) ;
    this.geo_display_array['lon'] = parseFloat(sprintf(this.dt_location_format,ml_data.geometry.coordinates[0])) ;

    this.observationData = null;
    this.predictionData = null;
    this.buoy_name = this.ml_name;

    var date_now = new Date();
    var start_date = appConfig.getStartDate() ;
    // var datems = Date.parse(start_date).getTime();
    var datems = start_date.getTime();
    this.hours_back = Math.round((date_now.getTime() - datems) / (60*60*1000));
    // get a start and end date in ms to limit necofs data displayed.
    this.start_date_ms = datems ;
    this.end_date_ms = appConfig.getEndDate().getTime();
  }
  // the array contains erddap start and end metadata
  getERDDAPObservationURL(appConfig, parameters, erddap_array) {
    let mpKey:any;
    var date_range = this.appConfig.getERDDAPDateRange(erddap_array) ;
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
  // return an array of the data_varaibles in this dataset
  // air_temperature: "air_temperature",
  // air_temperature_qc: "air_temperature data_quality",
  getDataVariables() {
    let dvKey: any ;
    let dv_array: any = [] ;
    for ( dvKey in this.data_variables) {
      dv_array.push(dvKey);
    }
    return( dv_array);
  }
  // the mechanism to set who sees what on the graphs
  setInterfaceLevelParameterVisibility( level, parameters) {
    this.interfaceLevelParamVisibility[level] = parameters ;
  }
  get_chart_display_parameters (interface_level) {
    // which parameters to graph.
    return( this.interfaceLevelParamVisibility[interface_level]) ;
  }

  // set's up chart components such as series, yAxis's and titles
  // to be used together in a single chart
  //  a color ram index of -1 is a flag to use the parameter coloring scheme.
  creatChartComponents(appConfig, parameters, measurement_system, dataset_type,
          platform_name, colorRampIndex) {
    let ret_array: any = [] ;
    let new_series: any = [];
    let yaxis_array: any = [];
    // keep track of parameters for the yAxis
    let current_parameter: string = '';
    // var count = 0 ;
    var toggle_opposite = false ;

    var addThisSeries = false ; // don't add series with no points is disabled
    // having multiple yAxis isn't desireable or necessary. We're comparing
    // wave heights and want a single yAxis.
    var seriesCount = 0 ;
    var yAxisCount = 0 ; // add a y-axis for each parameter.

    // re-initialize this. It may have changed.
    this.end_date_ms = appConfig.getEndDate().getTime();
    // var debug_start_date = new Date(this.start_date_ms);
    // var debug_end_date = new Date(this.end_date_ms);
    let resultdatems:number;
    let rdt_temp:string;
    let measurement: any ;
    let measurement_formatted: number;
    let readings_array: any = [] ;
    /////////////////////
    // loop through the requested parameters creating a line for each one.
    //
    let pKey: any ;
    let series_object: any ;
    let value_suffix_object: any ;
    let parameter: string ;
    let parameter_index: any ;
    let row_index: any ;
    let qc_index: any ;
    let wind_speed_index: any ;
    let parameter_units: any ;
    let yAxisParameterUnits: any;
    let displayed_units: any ;
    let point_count: number = 0 ;
    let windbarb_point: any ;
    let use_windbarb: boolean = false ;
    let depths: any = [] ;
    // check for depths
    let depth_index = appConfig.ERDDAPColumnIndexFromColumnName( this.observationData.table.columnNames, 'depth' );
    let depth: number ;
    let dKey: any ;
    let plotPoint: boolean = false ;
    let yAxisMin: number = 99999 ;
    let yAxisMax: number = -99999;
    let bFoundyAxis : boolean = false ;
    let yAKey: any ;
    this.chartComponents = {} ;
    this.chartComponents.yAxisArray = [] ;
    this.chartComponents.seriesArray = [] ;

    if ( depth_index != '' ) {
      for (row_index in this.observationData.table.rows) {
        depth = this.observationData.table.rows[row_index][depth_index] ;
        if ( depths.indexOf(depth) == -1 ) {
          depths.push(depth) ;
        }
      }
      depths.sort(function(a, b){return a-b});
    }
    if ( depths.length == 0 ) {
      depths.push(99999) ;
    }
    for ( pKey in parameters ) {
      if ( this.observationData != undefined ) {
        for ( dKey in depths ) {
          depth = depths[dKey];
          parameter = parameters[pKey];
          if ( parameter == 'dissolved_oxygen') {
            parameter = parameter ;
          }
          parameter_index = appConfig.ERDDAPColumnIndexFromColumnName( this.observationData.table.columnNames, parameter );
          // if it's the first or new parameter then reset the min max
          // and save the units of this parameter
          if ( current_parameter.length == 0 || current_parameter != parameter ) {
            // if it's not the first one then we're moving to the next and
            // need to save the first. Hows that for confusing?
            if ( current_parameter.length > 0 ) {
              let new_title: any = {} ;
              // miles vs feet
              switch ( current_parameter ) {
                case 'significant_wave_height':
                case 'wave_height':
                case 'significant_wave_height_3':
                case 'wave_height_3':
                case 'maximum_wave_height_3':
                case 'swell_wave_height_3':
                  new_title.text = appConfig.gmriUnits.convert_unit_label(10,
                                                yAxisParameterUnits, measurement_system) ;
                  break;
                default:
                  new_title.text = appConfig.gmriUnits.convert_unit_label(1000,
                                                yAxisParameterUnits, measurement_system) ;
                  break;
              }
              // if it's the first yAxis, or it's not the same as any other.
              bFoundyAxis = false ;
              if ( yAxisCount == 0 ) {
                bFoundyAxis = false ;
              } else {
                for ( yAKey in yaxis_array ) {
                  if ( yaxis_array[yAKey].yAxisParameterUnits == yAxisParameterUnits ) {
                    bFoundyAxis = true ;
                    break;
                  }
                }
              }
              if ( !bFoundyAxis ) {
                yaxis_array[yAxisCount] = {};
                yaxis_array[yAxisCount].yAxisParameterUnits = yAxisParameterUnits;
                yaxis_array[yAxisCount].min = yAxisMin;
                yaxis_array[yAxisCount].max = yAxisMax;

                let new_label: any = {} ;
                new_label.format = '{value} ' + yAxisCount  ;

                yaxis_array[yAxisCount].labels = new_label;
                yaxis_array[yAxisCount].title = new_title;
                yaxis_array[yAxisCount].opposite = toggle_opposite;
                yaxis_array[yAxisCount].gridlinewidth = 0;
                yAxisCount++;
                // reset the min max.
                yAxisMin = 99999 ;
                yAxisMax = -99999;
              }
            }
            current_parameter = parameter;
            yAxisParameterUnits = this.observationData.table.columnUnits[parameter_index] ;
          }
          qc_index = appConfig.ERDDAPColumnIndexFromColumnName( this.observationData.table.columnNames, parameter + "_qc" );
          parameter_units = this.observationData.table.columnUnits[parameter_index] ;
          series_object = {} ;
          switch ( parameter ) {
            case 'wind_direction':
              series_object.type = 'windbarb';
              series_object.showInLegend = false;
              series_object.measurement_system = measurement_system;
              break;
            case 'current_direction' :
              series_object.type = 'spline';
              series_object.measurement_system = 'compass';
              displayed_units = appConfig.gmriUnits.convert_unit_label(1000, parameter_units, 'measurement_system');
              break;
            case 'significant_wave_height' :
            case 'wave_height':
            case 'significant_wave_height_3' :
            case 'wave_height_3':
            case 'maximum_wave_height_3':
            case 'swell_wave_height_3':
              series_object.type = 'spline';
              series_object.measurement_system = measurement_system;
              displayed_units = appConfig.gmriUnits.convert_unit_label(10, parameter_units, measurement_system);
              break;
            default:
              series_object.type = 'spline';
              series_object.measurement_system = measurement_system;
              displayed_units = appConfig.gmriUnits.convert_unit_label(1000, parameter_units, measurement_system);
              break;
          }
          var series_name =  appConfig.gmriUnits.data_type_desc[parameter] ;
          // save an alternate for data only
          series_object.data_type_description = series_name ;
          series_object.name = platform_name + ":" + series_name ;
          // show only the positive (below sea level)
          if ( depth != 99999 && depth != -99999 && depth > 0 ) {
            series_object.name += " " + depth + "m";
            series_object.data_type_description += " " + depth + "m";
          }
          series_object.parameter = parameter;
          series_object.parameter_units = parameter_units;
          series_object.platform_name = platform_name;
          series_object.units = displayed_units ;
          if ( colorRampIndex > -1 ) {
            series_object.color = appConfig.gmriUnits.compare_color_ramps[colorRampIndex][dKey];
          } else {
            series_object.color = appConfig.gmriUnits.getPlotColor(parameter, depth, dKey, depths);
          }
          // visible = appConfig.getUserPreferenceParameterVisibility('NECOFS_WAVES');
          series_object.visible = appConfig.getInterfaceLevelParameterVisibilty(this, parameter) ;

          // value suffix object
          value_suffix_object = {shared: true, crosshairs: true};
          value_suffix_object.xDateFormat = '%A %m-%d-%Y %I:%M %p' ;
          //new_vs.valueSuffix = " feet" ;
          value_suffix_object.pointFormatter = function () {
            return ('<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name +
             ': <b>' + appConfig.gmriUnits.getDisplayString( this.series.options.parameter, this.series.options.units,
                        this.y, this.series.options.measurement_system)+ '</b><br/>')
          }
          series_object.tooltip = value_suffix_object;
          series_object.events = {
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

          // get the series data
          // hs sea_surface_wave_significant_height
          // swp sea_surface_wave_frequency
          var time_index = appConfig.ERDDAPColumnIndexFromColumnName( this.observationData.table.columnNames, 'time' );
          if ( parameters.indexOf('wind_direction') != -1 && parameters.indexOf('wind_speed') != -1 ) {
            wind_speed_index = appConfig.ERDDAPColumnIndexFromColumnName( this.observationData.table.columnNames, 'wind_speed' );
          }
          readings_array = [];
          for (row_index in this.observationData.table.rows) {
            plotPoint = false ;
            if ( depth != 99999 ) {
              if ( this.observationData.table.rows[row_index][depth_index] == depth ) {
                plotPoint = true ;
              }
            } else {
              plotPoint = true ;
            }
            if ( plotPoint ) {
              // check the qc first
              // or not. I'm getting values of 0 and 39 for buoy b
              // if ( this.observationData.table.rows[row_index][qc_index] == 0 ) {
                let resultdatetext: any = this.observationData.table.rows[row_index][time_index];
                // Date.parse("2016-03-31T13:00:00Z")
                rdt_temp = resultdatetext.substr(0,4) + "/" + resultdatetext.substr(5,2) +
                                "/" + resultdatetext.substr(8,2) + " " +
                                resultdatetext.substr(11, 8) + " GMT" ;
                resultdatems = Date.parse(rdt_temp);

                // 1443600000000
                // limit the display to the same window as I'm limiting necofs.
                if ( resultdatems > this.start_date_ms && resultdatems < this.end_date_ms )
                  {
                  measurement = appConfig.gmriUnits.convert( this.observationData.table.rows[row_index][parameter_index],
                                                                  parameter_units, measurement_system);

                  measurement_formatted = parseFloat(sprintf(appConfig.gmriUnits.dataTypeFormatString(parameter),measurement)) ;
                  if ( measurement_formatted > yAxisMax ) {
                    yAxisMax = measurement_formatted ;
                  }                  if ( measurement_formatted < yAxisMin ) {
                    yAxisMin = measurement_formatted ;
                  }
                  switch ( parameter ) {
                    case 'wind_direction':
                      windbarb_point = {
                        x: resultdatems,
                        value: this.observationData.table.rows[row_index][wind_speed_index],
                        direction: measurement_formatted
                      }
                      readings_array.push(windbarb_point) ;
                      // readings_array.push([resultdatems,
                      //          this.observationData.table.rows[row_index][wind_speed_index],
                      //          measurement_formatted]);
                      break;
                    default:
                      readings_array.push([resultdatems,measurement_formatted]);
                      break;
                  }
                  addThisSeries = true ;
                }
                point_count ++;
            }
            //} // end of qc check
          } // end of looping
          // end of get the series data
          // set up the yaxis labeling and so forth for wave
          // necofs_series_object.yAxis = 0;
          // hope springs eternal. leave out yAxis for windbarb
          switch ( parameter ) {
            case 'wind_direction':
              if ( use_windbarb ) {
                series_object.data = readings_array;
                new_series.push( series_object );
              }
              break;
            default:
              // if we have a new paremeter then set up the previous parameter's yAxis
              if ( parameter != current_parameter ) {
              }
              toggle_opposite = !toggle_opposite;
              series_object.data = readings_array;
              series_object.yAxis = yAxisCount ;
              new_series.push( series_object );
              break;
          }

        }
        seriesCount++;
        }
    }

      // end of the series. Set up the last yAxis
      // the switch is for handing wind direction and getting the correct label (feet vs miles)
      let new_title: any = {} ;
      let new_label: any = {} ;
      // if it's the first yAxis, or it's not the same as any other.
      bFoundyAxis = false ;
      if ( yAxisCount == 0 ) {
        bFoundyAxis = false ;
      } else {
        for ( yAKey in yaxis_array ) {
          if ( yaxis_array[yAKey].yAxisParameterUnits == yAxisParameterUnits ) {
            bFoundyAxis = true ;
            break;
          }
        }
      }
      switch ( parameter ) {
        case 'wind_direction':
          new_title.text = appConfig.gmriUnits.convert_unit_label(1000, yAxisParameterUnits, measurement_system) ;
          break;
        case 'significant_wave_height' :
        case 'wave_height' :
          new_title.text = appConfig.gmriUnits.convert_unit_label(10, yAxisParameterUnits, measurement_system) ;

          if ( !bFoundyAxis ) {
            // Always 1 behind so setup previous parameter's yAxis
            yaxis_array[yAxisCount] = {};
            yaxis_array[yAxisCount].min = yAxisMin;
            yaxis_array[yAxisCount].max = yAxisMax;

            new_label.format = '{value} ' + yAxisCount  ;

            yaxis_array[yAxisCount].labels = new_label;
            yaxis_array[yAxisCount].title = new_title;
            yaxis_array[yAxisCount].opposite = toggle_opposite;
            yaxis_array[yAxisCount].gridlinewidth = 0;
            yaxis_array[yAxisCount].yAxisParameterUnits = yAxisParameterUnits;
            yAxisCount++;
          }
          break;
        default:
          new_title.text = appConfig.gmriUnits.convert_unit_label(1000, yAxisParameterUnits, measurement_system) ;

          if ( !bFoundyAxis ) {
            // Always 1 behind so setup previous parameter's yAxis
            yaxis_array[yAxisCount] = {};
            yaxis_array[yAxisCount].min = yAxisMin;
            yaxis_array[yAxisCount].max = yAxisMax;

            new_label.format = '{value} ' + yAxisCount  ;

            yaxis_array[yAxisCount].labels = new_label;
            yaxis_array[yAxisCount].title = new_title;
            yaxis_array[yAxisCount].opposite = toggle_opposite;
            yaxis_array[yAxisCount].gridlinewidth = 0;
            yaxis_array[yAxisCount].yAxisParameterUnits = yAxisParameterUnits;
            yAxisCount++;
          }
          break;
      }

    if ( point_count > 3 ) {
      ret_array['success'] = 'yes' ;
    } else {
      ret_array['success'] = 'Not enough points were created to complete a chart for ' + this.ml_name;
    }
    // var chart_title = "MLLW of " + sf.waveMLLW;
    let chart_title: string = '';
    let chart_sub_title: string = '' ;
    if ( chart_title.length == 0 ) {
      chart_title = platform_name ;
      if ( dataset_type != undefined ) {
        chart_title += " - " + dataset_type ;
      }
    }
    for ( pKey in parameters ) {
      if ( chart_sub_title.length == 0 ) {
        chart_sub_title = appConfig.gmriUnits.getDataTypeDescription(parameters[pKey]) ;
      } else {
        chart_sub_title += ", " + appConfig.gmriUnits.getDataTypeDescription(parameters[pKey]) ;
      }
    }
    // squirrel away this stuff for custom titling
    let platforms: any = [] ;
    platforms.push(platform_name) ;
    this.chartComponents.platforms = platforms;
    this.chartComponents.parameters = parameters ;
    // create an array without the keys
    var yaxis = [] ;
    for ( var yaxis_key in yaxis_array ) {
      yaxis.push(yaxis_array[yaxis_key]);
    }
    this.chartComponents.yAxisArray = yaxis ;
    this.chartComponents.seriesArray = new_series;
    this.chartComponents.xAxis =  {
      type: 'datetime',
      isDirty: true,
      labels: {
          style: {
              fontFamily: 'Tahoma'
          },
          rotation: -45
      },
      min: appConfig.getStartDate().getTime(),
      max: appConfig.getEndDate().getTime(),
      tickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
      allowDecimals: true,
      minTickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
      ordinal: false
    };
    this.chartComponents.chart_title = chart_title ;
    this.chartComponents.chart_sub_title = chart_sub_title ;
    return;
  }
  assembleChart( chartTitle, chartSubTitle, yAxisArray, seriesArray, appConfig,
      scroll_bar_min, scroll_bar_max ) {
      // let scroll_bar_min: number = appConfig.getScrollbarStartDate().getTime() ;
      // let scroll_bar_max: number = appConfig.getScrollbarEndDate().getTime() ;
      let ret_array: any = [] ;
      let chartConfig: any = {
      options: {
      },
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
          type: 'spline',
          zoomType: "x",
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
        // min: scroll_bar_min,
        // max: scroll_bar_max,
        enabled: true
      },
      navigator: {
      //adaptToUpdatedData: false,
      enabled: true
      },
      title: {
          text: chartTitle,
          x: -20 //center
      },
      subtitle: {
          text: chartSubTitle, // "from " + date_range['date_start'] + " to " + date_range['date_end'],
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
        // min: appConfig.getStartDate().getTime(),
        // max: appConfig.getEndDate().getTime(),
        // min: appConfig.getScrollbarStartDate().getTime(),
        // max: appConfig.getScrollbarEndDate().getTime(),
        // min: scroll_bar_min,
        //max: scroll_bar_max,
        tickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
        allowDecimals: true,
        minTickInterval: appConfig.getChartTickIntervalsInMinutes() * 60 * 1000,
        ordinal: false,
        events: {
          setExtremes: function(e) {
              if(typeof(e.rangeSelectorButton)!== 'undefined') {
                this.min= scroll_bar_min;
                this.max= scroll_bar_max;
              }
          }
        }
      },
      events: {
        load: function() {
          this.xAxis[0].setExtremes( scroll_bar_min, scroll_bar_max);
        }
      },
      yAxis: yAxisArray,
      series: seriesArray
    } ;
    ret_array['chartConfig'] = chartConfig;
    return( ret_array ) ;
  }
  // return an array of yAxis keys for yAxis not in the given array
  // we're trying to develop a normalized list of yAxis
  getMissingyAxisKeys(yAxisArray) {
    let missingKeys: any = [] ;
    let bFound : boolean = false ;
    let yKey: any ;
    let mKey: any ;

    for ( yKey in this.chartComponents.yAxisArray ) {
      for ( mKey in yAxisArray ) {
        if ( this.chartComponents.yAxisArray[yKey].yAxisParameterUnits ==
               yAxisArray[mKey].yAxisParameterUnits   ) {
          bFound = true ;
          break;
        }
      }
      if ( !bFound ) {
        missingKeys.push(yKey) ;
        bFound = false ;
      }
    }
  return(missingKeys) ;
  }
  // update the min max values of this array with
  // any matching entries from this datasets chart contribution.
  updateAxisMinMax(yAxisArray) {
    let yKey: any ;
    let mKey: any ;

    for ( yKey in this.chartComponents.yAxisArray ) {
      for ( mKey in yAxisArray ) {
        if ( this.chartComponents.yAxisArray[yKey].yAxisParameterUnits ==
               yAxisArray[mKey].yAxisParameterUnits   ) {
          if ( this.chartComponents.yAxisArray[yKey].min < yAxisArray[mKey].min ) {
            yAxisArray[mKey].min = this.chartComponents.yAxisArray[yKey].min ;
          }
          if ( this.chartComponents.yAxisArray[yKey].max  > yAxisArray[mKey].max ) {
            yAxisArray[mKey].max = this.chartComponents.yAxisArray[yKey].max ;
          }
        }
      }
    }
  return(yAxisArray) ;
  }
  // return the  yAxis for a particular unit.
  getyAxisKeyByUnit(yAxisArray, unit) {
    let yKey: any ;
    let ret_val: number = 0 ;
    for ( yKey in yAxisArray ) {
        if ( yAxisArray[yKey].yAxisParameterUnits == unit   ) {
          ret_val = parseInt(yKey);
          break;
        }
    }
  return(ret_val) ;
  }
  // chart drawing is imbedded in the dataset object.
  // chart components allow the same series creation code to be used
  // across multiple datasets. This consolidates the creation
  // for charts which are from a single dataset
  // 4-30-2018 I'm second guessing whether this is necessary but leaving
  // well enough alone. This appears to just transform the yAxis array
  // to a zero based array and nothing more? That could be done in
  // the chartComponentCreation.
  componentToChart() {
    let ret_val: any = [] ;
    let myAxisKey: any ;
    let bOpposite: boolean = false ;
    let myAxisArray: any = [] ;
    let intKeyAxisArray: any = [] ;
    let seriesKey: any ;
    let newSeries: any;
    let seriesArray: any = [] ;

    ret_val['chartTitle'] = this.chartComponents.chart_title ;
    ret_val['chartSubTitle'] = this.chartComponents.chart_sub_title ;
    myAxisArray = this.chartComponents.yAxisArray ;
    // give them integer keys
    intKeyAxisArray = [] ;
    bOpposite = false ;
    for ( myAxisKey in myAxisArray ) {
      intKeyAxisArray.push(myAxisArray[myAxisKey]);
      intKeyAxisArray[intKeyAxisArray.length-1].opposite = bOpposite ;
      bOpposite = !bOpposite ;
    }
    ret_val['intKeyAxisArray'] = intKeyAxisArray ;
    for ( seriesKey in this.chartComponents.seriesArray) {
      newSeries = this.chartComponents.seriesArray[seriesKey];
      newSeries.yAxis = this.getyAxisKeyByUnit(intKeyAxisArray,
          this.chartComponents.seriesArray[seriesKey].parameter_units);
      seriesArray.push(newSeries);
    }
    ret_val['seriesArray'] = seriesArray ;
    return(ret_val);
  }
  // creates a chart for a single dataset.
  createChart(appConfig, plottedParameters, measurement_system, dataset_type,
              location_name, scroll_bar_min, scroll_bar_max) {
    let chart_results:any = [] ;
    let component_results:any = [] ;
    let colorRampIndex: number = -1 ;

    this.creatChartComponents(appConfig, plottedParameters, measurement_system,
                              dataset_type, location_name, colorRampIndex);
    // For the case of multi dataset graphs these items Titles, yAxis and Series
    // are done by chart component and then "assembled"
    component_results = this.componentToChart() ;

    chart_results = this.assembleChart( component_results['chartTitle'],
                     component_results['chartSubTitle'],
                      component_results['intKeyAxisArray'],
                      component_results['seriesArray'],appConfig, scroll_bar_min, scroll_bar_max) ;
    return(chart_results);
  }
  // creates data variables for a single dataset.
  createData(appConfig, plottedParameters, measurement_system, dataset_type, location_name) {
    let data_results:any = [] ;
    let component_results:any = [] ;
    let colorRampIndex: number = -1 ;

    this.creatChartComponents(appConfig, plottedParameters, measurement_system,
                              dataset_type, location_name, colorRampIndex);
    // For the case of multi dataset graphs these items Titles, yAxis and Series
    // are done by chart component and then "assembled"
    component_results = this.componentToChart() ;

    data_results = this.assembleData( component_results['chartTitle'],
                     component_results['chartSubTitle'],
                      component_results['intKeyAxisArray'],
                      component_results['seriesArray'],appConfig) ;
    return(data_results);
  }
  // assemble possibly multiple datasets into some semblance of order.
  // this might not really be necessary.
  assembleData( dataTitle, dataSubTitle, yAxisArray, seriesArray, appConfig) {
    let ret_array: any = [] ;
    let seriesNew: any ;
    let sKey: any ;
    let dataConfig: any = {
      title: dataTitle,
      subtitle: dataSubTitle,
      yAxis: yAxisArray
    };
    dataConfig.seriesArray = [] ;
    for ( sKey in seriesArray ) {
      seriesNew = [] ;
      seriesNew.seriesGraph = seriesArray[sKey];
      // this relies on having asked for up to the minute data
      seriesNew.latestValue = seriesArray[sKey].data[seriesArray[sKey].data.length-1];
      seriesNew.displayValue = appConfig.gmriUnits.getDisplayString( seriesArray[sKey].parameter,
                        seriesArray[sKey].units,
                        seriesNew.latestValue[1], seriesArray[sKey].measurement_system );
      dataConfig.seriesArray.push(seriesNew);
    }
    ret_array['dataConfig'] = dataConfig;
    return( ret_array ) ;
  }
}
