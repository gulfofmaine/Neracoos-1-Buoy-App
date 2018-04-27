import {sprintf} from "sprintf-js";
///////////////////////
// GMRI Javascript Common Unit conversions
//////////////////////////
export class GMRIUnits {
  SCALE_POUNDS_TO_KILOS: number = 0.4536;
  data_units: any = [] ;
  data_units_short: any = [] ;
  data_type_units: any = [] ;
  data_type_comments: any;
  data_type_desc: any;
  data_type_desc_short: any;
  colors: any = [] ;
  data_type_color: any = [] ;
  depth_colors: any = [];
  compare_color_ramps: any = [] ;
  skip_plotting_parameters: any = [] ;

  constructor() {
     this.skip_plotting_parameters = [
            "station",
            "time",
            "mooring_site_desc",
            "water_depth",
            "index",
            "offset_time",
            "time_created",
            "time_modified",
            "longitude",
            "latitude",
            "depth"] ;
    let color_ramp: any = [
      '#ff0000',
      '#ef0000',
      '#df0000',
      '#cf0000',
      '#bf0000',
      '#af0000',
      '#9f0000',
      '#8f0000',
      '#7f0000',
      '#6f0000'
    ];
    this.compare_color_ramps.push(color_ramp) ;
    color_ramp = [
      '#00ff00',
      '#00ef00',
      '#00df00',
      '#00cf00',
      '#00bf00',
      '#00af00',
      '#009f00',
      '#008f00',
      '#007f00',
      '#006f00'
    ];
    this.compare_color_ramps.push(color_ramp) ;
    color_ramp = [
      '#0000ff',
      '#0000ef',
      '#0000df',
      '#0000cf',
      '#0000bf',
      '#0000af',
      '#00009f',
      '#00008f',
      '#00007f',
      '#00006f'
    ];
    this.compare_color_ramps.push(color_ramp) ;

    // add some color to this.
    this.colors[1] = '#000000';
    this.colors[2] = '#0000ff';
    this.colors[3] = '#00ff00';
    this.colors[4] = '#ff0000';
    this.colors[5] = '#00ffff';
    this.colors[7] = '#ffff00';

    this.depth_colors[0] = '#ff0000';
    this.depth_colors[1] = '#000000';
    this.depth_colors[2] = '#0000ff';
    this.depth_colors[3] = '#00ff00';
    this.depth_colors[4] = '#ff0000';
    this.depth_colors[5] = '#00ffff';
    this.depth_colors[7] = '#ffff00';
    this.depth_colors[8] = '#000000';
    this.depth_colors[9] = '#0000ff';
    this.depth_colors[10] = '#00ff00';
    this.depth_colors[11] = '#ff0000';
    this.depth_colors[12] = '#00ffff';
    this.depth_colors[13] = '#ffff00';

    this.data_type_color['air_temperature']= 1;
    this.data_type_color['sea_level_pressure']= 2 ;
    this.data_type_color['chlorophyll']= 3 ;
    this.data_type_color['direction_of_sea_water_velocity']= 4 ;
    this.data_type_color['current_direction']= 4 ;
    this.data_type_color['sea_water_speed']= 5 ;
    this.data_type_color['sea_water_density']= 6 ;
    this.data_type_color['dissolved_oxygen']= 7 ;
    this.data_type_color['percent_oxygen_saturation']= 1;
    this.data_type_color['oxygen_saturation']= 1;
    this.data_type_color['Ed_PAR']= 1;
    this.data_type_color['sea_water_salinity']= 1;
    this.data_type_color['salinity']= 1;
    this.data_type_color['turbidity']= 1;
    this.data_type_color['visibility_in_air']= 1;
    this.data_type_color['sea_water_temperature']= 1;
    this.data_type_color['temperature']= 1;
    this.data_type_color['significant_height_of_wind_and_swell_waves']= 1;
    this.data_type_color['dominant_wave_period']= 1;
    this.data_type_color['wind_from_direction']= 1;
    this.data_type_color['wind_direction']= 1;
    this.data_type_color['wind_gust']= 4;
    this.data_type_color['wind_speed']= 3;
    this.data_type_color['attenuation']= 1;
    this.data_type_color['transmissivity']= 1;
    this.data_type_color['sea_water_alkalinity_expressed_as_mole_equivalent']= 1;
    this.data_type_color['sea_water_pH_reported_on_total_scale']= 1;

    /* Units: Uni2tName */
    this.data_units[1]='Degrees Fahrenheit';
    this.data_units[2]='Degrees Centigrade';
    this.data_units[3]='Meters per Second';
    this.data_units[4]='Knots';
    this.data_units[5]='Miles per Hour';
    this.data_units[7]='Meters';
    this.data_units[8]='Feet';
    this.data_units[9]='Micrograms per Liter';
    this.data_units[10]='Kilograms per Cubic Meter';
    this.data_units[11]='Practical Salinity Unit';
    this.data_units[12]='Milliliters per Liter';
    this.data_units[13]='Seconds';
    this.data_units[14]='Centimeters per Second';
    this.data_units[15]='Angular Degrees';
    this.data_units[16]='MicroEinsteins per Square Meter per Second';
    this.data_units[17]='Millibars';
    this.data_units[18]='Inches';
    this.data_units[19]='Percent';
    this.data_units[20]='Nephelometric Turbidity Units';
    this.data_units[21]='Compass Points';
    this.data_units[22]='Kilometers Per Hour';
    this.data_units[23]='Beam Attenuation Coefficient';

    // And the shortened version
    this.data_units_short[1]='Deg F';
    this.data_units_short[2]='Deg C';
    this.data_units_short[3]='mps';
    this.data_units_short[4]='Knots';
    this.data_units_short[5]='MPH';
    this.data_units_short[7]='Meters';
    this.data_units_short[8]='Feet';
    this.data_units_short[9]='ugm/l';
    this.data_units_short[10]='kg/m3';
    this.data_units_short[11]='PSU';
    this.data_units_short[12]='ml/l';
    this.data_units_short[13]='Sec';
    this.data_units_short[14]='cm/s';
    this.data_units_short[15]='Deg';
    this.data_units_short[16]='MicroEinsteins/m2/s';
    this.data_units_short[17]='mb';
    this.data_units_short[18]='in';
    this.data_units_short[19]='%';
    this.data_units_short[20]='NTU';
    this.data_units_short[21]='Compass';
    this.data_units_short[22]='KPH';
    this.data_units_short[23]='1/m';
    this.data_units_short[24]='m/s';
    this.data_units_short[25]='mg chl/m<sup>3</sup>';
    this.data_units_short[26]='miles';
    this.data_units_short[27]='uATM';
    this.data_units_short[28]='kg';
    this.data_units_short[29]='lbs';
    this.data_units_short[30]='msiemens/cm';
    this.data_units_short[31]='uM/kg';
    this.data_units_short[32]='';

    /* Datatype Units */
    this.data_type_units['air_temperature']='1,2';
    this.data_type_units['sea_level_pressure']='17,18';
    this.data_type_units['chlorophyll']='9';
    this.data_type_units['direction_of_sea_water_velocity']='15,21';
    this.data_type_units['sea_water_speed']='3,14,4';
    this.data_type_units['sea_water_density']='10';
    this.data_type_units['dissolved_oxygen']='12';
    this.data_type_units['percent_oxygen_saturation']='19';
    this.data_type_units['oxygen_saturation']='19';
    this.data_type_units['Ed_PAR']='16';
    this.data_type_units['sea_water_salinity']='11';
    this.data_type_units['salinity']='11';
    this.data_type_units['turbidity']='20';
    this.data_type_units['visibility_in_air']='7,8';
    this.data_type_units['sea_water_temperature']='1,2';
    this.data_type_units['significant_height_of_wind_and_swell_waves']='7,8';
    this.data_type_units['dominant_wave_period']='13';
    this.data_type_units['wind_from_direction']='15,21';
    this.data_type_units['wind_direction']='15,21';
    this.data_type_units['wind_gust']='3,4,5,22';
    this.data_type_units['wind_speed']='3,4,5,22';
    this.data_type_units['attenuation']='23';
    this.data_type_units['transmissivity']='19';
    this.data_type_units['sea_water_alkalinity_expressed_as_mole_equivalent']='31';
    this.data_type_units['sea_water_pH_reported_on_total_scale']='32';
    this.data_type_units['conductivity']='30';
    this.data_type_units['sigma_t']='10';



   	this.data_type_comments = {
   	    wind_gust: 'Maximum measured wind speed over the observation interval.',
        wind_from_direction: 'Meteorological conventions (direction from which the wind blows, measured from true north)',
        wind_direction: 'Meteorological conventions (direction from which the wind blows, measured from true north)',
        significant_height_of_wind_and_swell_waves:'The average height of the highest third of the waves.',
        dominant_wave_period: 'Wave Period is the dominant wave period which is the period with maximum energy and is always either the swell period or the wind-wave period.',
        visibility_in_air: 'The purpose of the visibility observation is to identify reduced visibility events. For readings that come in at 3000 meters, it is implied that the visibility is 3000 meters or greater.',
        direction_of_sea_water_velocity: 'Measured in Oceanographic conventions (direction into which the water flows, measured from true north).',
        chlorophyll: 'The chlorophyll concentrations we present are calculated from fluorescence values.',
        Ed_PAR: 'Photosynthetically Avaialble Radiation'
        };

   	this.data_type_desc = {
   	    wind_speed: 'Wind speed',
        wind_gust: 'Wind gust',
        wind_from_direction: 'Wind direction',
        wind_direction: 'Wind direction',
        significant_height_of_wind_and_swell_waves: 'Wave height',
        significant_wave_height: 'Wave height',
        significant_wave_height_3: 'Wave height 3',
        maximum_wave_height_3: 'Wave height 3',
        swell_wave_height_3: 'Swell wave height 3',
        wind_wave_height_3: 'Wind wave height 3',
        dominant_wave_period: 'Dominant wave period',
        dominant_wave_period_3: 'Dominant wave period 3',
        swell_wave_period_3: 'Swell wave period',
        swell_and_wind_wave_separation_frequency_3: 'Swell and wind wave separation frequency 3',
        wave_steepness_3: 'Wave steepness 3',
        wind_wave_period_3: 'Wind wave period',
        max_wave_height: 'Maximum Wave Height',
        wave_direction_spread: 'Wave Direction Spread',
        dew_point_temperature: 'Dew Point Temperature',
        average_wave_period: 'Average wave period',
        mean_wave_direction: 'Mean wave direction',
        mean_wave_direction_3: 'Mean wave direction 3',
        mean_wave_direction_spread_3: 'Mean wave direction spread',
        principal_wave_direction_3: 'Principal wave direction 3',
        principal_wave_direction_spread_3: 'Principal wave direction spread',
        air_temperature: 'Air temperature',
        visibility_in_air: 'Visibility',
        visibility: 'Visibility',
        sea_level_pressure: 'Atmospheric pressure',
        barometric_pressure: 'Atmospheric pressure',
        pressure_tendency: 'Pressure tendency',
        sea_water_temperature: 'Water temperature',
        temperature: 'Water temperature',
        direction_of_sea_water_velocity: 'Current direction',
        current_direction: 'Current direction',
        current_u: 'Current Easterly',
        current_v: 'Current Northerly',
        sea_water_speed: 'Current speed',
        current_speed: 'Current speed',
        sea_water_salinity: 'Salinity',
        salinity: 'Salinity',
        sea_water_density: 'Density',
        sea_water_electrical_conductivity: 'Sea Water Electrical Conductivity',
        conductivity: 'Sea Water Electrical Conductivity',
        turbidity: 'Turbidity',
        chlorophyll: 'Chlorophyll concentration',
        dissolved_oxygen: 'Dissolved oxygen',
        oxygen_saturation: 'Oxygen saturation',
        percent_oxygen_saturation: 'Percent oxygen saturation',
        Ed_PAR: 'PAR',
        par_percent: 'Percent clear sky',
        percent_sun: 'Percent sun',
        solar_zenith_angle: 'Solar Zenith Angle',
        transmissivity: 'Transmissivity (0.25m pathlength)',
        attenuation: 'Beam Attenuation Coefficient',
        cloud_index_icon: 'Cloudiness',
        surface_partial_pressure_of_carbon_dioxide_in_air: 'Surface Partial Pressure CO2 in Air',
        surface_partial_pressure_of_carbon_dioxide_in_sea_water: 'Surface Partial Pressure CO2 in Sea Water',
        sea_water_alkalinity_expressed_as_mole_equivalent: 'Sea Water Alkalinity Expressed as Mole Equivalent',
        sea_water_pH_reported_on_total_scale: 'Sea Water PH reported on Total Scale',
        sigma_t: 'sigma_t',
        nitrate: 'Nitrate'
        };

   	 this.data_type_desc_short = {
   	    wind_speed: 'WSPD',
        wind_gust: 'GST',
        wind_from_direction: 'WDIR',
        wind_direction: 'WDIR',
        significant_height_of_wind_and_swell_waves: 'WVHT',
        dominant_wave_period: 'DPD',
        max_wave_height: 'Max WVHT',
        wave_direction_spread: 'WV Direction Spread',
        dew_point_temperature: 'DP Temp',
        average_wave_period: 'Average wave period',
        mean_wave_direction: 'Mean wave direction',
        air_temperature: 'ATMP',
        visibility_in_air: 'VIS',
        sea_level_pressure: 'PRES',
        pressure_tendency: 'Pressure tendency',
        sea_water_temperature: 'WTMP',
        direction_of_sea_water_velocity: 'Current direction',
        sea_water_speed: 'Current speed',
        sea_water_salinity: 'Salinity',
        sea_water_density: 'Density',
        sea_water_electrical_conductivity: 'Electrical Conductivity',
        conductivity: 'Electrical Conductivity',
        turbidity: 'Turbidity',
        chlorophyll: 'Chlorophyll concentration',
        dissolved_oxygen: 'Dissolved oxygen',
        oxygen_saturation: 'Oxygen saturation',
        percent_oxygen_saturation: 'Percent oxygen saturation',
        Ed_PAR: 'PAR',
        par_percent: 'Percent clear sky',
        percent_sun: 'Percent sun',
        solar_zenith_angle: 'Solar Zenith Angle',
        transmissivity: 'TRANS',
        attenuation: 'Attn',
        cloud_index_icon: 'Cloudiness',
        surface_partial_pressure_of_carbon_dioxide_in_air: 'pCO2 in air',
        surface_partial_pressure_of_carbon_dioxide_in_sea_water: 'pCO2 in water',
        sea_water_alkalinity_expressed_as_mole_equivalent: 'Sea Water Alkalinity',
        sea_water_pH_reported_on_total_scale: 'Sea Water PH'
        };
  }
  conv_celsius_to_farenheit(in_put) { return ( in_put * 1.8 ) + 32.0; };
  conv_fahrenheit_to_celsius(in_put) { return ( in_put - 32.0 ) / 1.8; };
  conv_fathoms_to_meters(in_put) { return in_put * 1.8288 };
  conv_meters_to_fathoms(in_put) { return in_put / 1.8288 };
  conv_meters_to_feet(in_put) { return in_put / 0.3048 };
  conv_feet_to_meters(in_put) { return in_put * 0.3048 };
  conv_feet_to_miles(in_put) { return in_put / 5280 };
  conv_feet_to_nm(in_put) { return in_put / 6076.12 };
  conv_feet_to_km(in_put) { return in_put / 3280.84 };
  conv_meters_to_miles(in_put) { return in_put / 1609.344 };
  conv_meters_to_nm(in_put) { return in_put / 1852 };
  conv_meters_to_km(in_put) { return in_put / 1000.0 };
  conv_miles_to_nm(in_put) { return in_put * 0.868976 };
  conv_nm_to_miles(in_put) { return in_put * 1.15078 };
  conv_miles_to_km(in_put) { return in_put * 1.60934 };
  conv_km_to_miles(in_put) { return in_put * 1.60934 };
  conv_km_to_nm(in_put) { return in_put / 1.852 };
  conv_nm_to_km(in_put) { return in_put * 1.852 };
  conv_meters_to_nautical_miles(in_put) { return in_put / 1853.184 };
  conv_mps_to_knots(in_put) { return in_put / 0.5144444 };
  conv_mps_to_kph(in_put) { return in_put / 0.2777778 };
  conv_mps_to_mph(in_put) { return in_put / 0.44704 };
  conv_knots_to_mph(in_put) { return ( in_put * 1.15078) };
  conv_mph_to_knots(in_put) { return ( in_put * 0.868976 ) };
  conv_mph_to_mps(in_put) { return in_put * 0.44704  };
  conv_mph_to_kph(in_put) { return in_put * 1.60934  };
  conv_knots_to_mps(in_put) { return in_put * 0.5144444  };
  conv_knots_to_kph(in_put) { return in_put * 1.852  };
  conv_radian_to_degrees(in_put) { return in_put * (180 / 3.14159); };

  conv_degrees_to_compass(degrees) {
    var val = Math.floor((degrees / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
    /*
    let compass: any =  ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    degrees = ( degrees + 22.5 ) / 22.5;
    degrees -= .5;
    // Note: Units.pm relied on integer truncation
    var quad = degrees % 16;
    return compass[quad];
    */
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
  // given an imput and it's units do the appropriate conversion for a
  // measurement system.
  convert( in_put, units, measurement_system) {
    let ret_val: any = in_put;
    switch ( units ) {
      case 'm':
      case 'meters':
        if ( in_put > 100 ) {
          if ( measurement_system == 'english') {
            ret_val = this.conv_meters_to_miles(in_put);
          }
          if ( measurement_system == 'nautical') {
            ret_val = this.conv_meters_to_nm(in_put);
          }
          if ( measurement_system == 'metric') {
            ret_val = this.conv_meters_to_km(in_put);
          }
        } else {
          if ( measurement_system == 'english') {
            ret_val = this.conv_meters_to_feet(in_put);
          }
          if ( measurement_system == 'nautical') {
            ret_val = this.conv_meters_to_feet(in_put);
          }
          if ( measurement_system == 'metric') {
            ret_val = in_put;
          }
        }
        break;
      case 'f':
      case 'feet':
      case 'ft':
        if ( in_put > 300 ) {
          if ( measurement_system == 'english') {
            ret_val = this.conv_feet_to_miles(in_put);
          }
          if ( measurement_system == 'nautical') {
            ret_val = this.conv_feet_to_nm(in_put);
          }
          if ( measurement_system == 'metric') {
            ret_val = this.conv_feet_to_km(in_put);
          }
        } else {
          if ( measurement_system == 'english') {
            ret_val = in_put;
          }
          if ( measurement_system == 'nautical') {
            ret_val = in_put;
          }
          if ( measurement_system == 'metric') {
            ret_val = this.conv_feet_to_meters(in_put);
          }
        }
        break;
      case 'm/s':
        if ( measurement_system == 'english' ) {
          ret_val = this.conv_mps_to_mph(in_put) ;
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = this.conv_mps_to_knots(in_put) ;
        }
        if ( measurement_system == 'metric') {
          ret_val = this.conv_mps_to_kph(in_put);
        }
        break;
      case 'knots':
      case 'kts':
        if ( measurement_system == 'english' ) {
          ret_val = this.conv_knots_to_mph(in_put) ;
        }
        if ( measurement_system == 'metric' ) {
          ret_val = this.conv_knots_to_kph(in_put) ;
        }
        break;
      case 'mph':
        if ( measurement_system == 'metric' ) {
          ret_val = this.conv_mph_to_kph(in_put) ;
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = this.conv_mph_to_knots(in_put) ;
        }
        break;
      case 'fahrenheit':
      case '°F':
        if ( measurement_system == 'metric' ) {
          ret_val = this.conv_fahrenheit_to_celsius(in_put) ;
        }
        break;
      case 'celsius':
      case 'centigrade':
      case '°C':
        if ( measurement_system == 'english' || measurement_system == 'nautical') {
          ret_val = this.conv_celsius_to_farenheit(in_put);
        }
        break;
      case 'miles':
        if ( measurement_system == 'nautical' ) {
          ret_val = this.conv_mps_to_knots(in_put) ;
        }
        if ( measurement_system == 'metric') {
          ret_val = this.conv_mps_to_kph(in_put);
        }
        break;
      case 'nm':
      case 'nautical miles':
        if ( measurement_system == 'english' ) {
          ret_val = this.conv_nm_to_miles(in_put) ;
        }
        if ( measurement_system == 'metric') {
          ret_val = this.conv_nm_to_km(in_put);
        }
        break;
      case 'km':
      case 'kilometers':
        if ( measurement_system == 'english' ) {
          ret_val = this.conv_km_to_miles(in_put) ;
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = this.conv_km_to_nm(in_put) ;
        }
        break;
      case 'angular_degrees' :
      case 'deg':
          if ( measurement_system == 'compass') {
            ret_val = this.conv_degrees_to_compass(in_put) ;
          } else {
            ret_val = in_put;
          }
        break;
      default:
        ret_val = in_put;
        break;
    }
    return(ret_val);
  }
  // given units return an appropriate unit for a
  // measurement system.
  convert_unit_label( measurement, units, measurement_system) {
    let ret_val: any = units;
    switch ( units ) {
      case 'm':
      case 'meters':
        if ( measurement > 100 ) {
          if ( measurement_system == 'english') {
            ret_val = 'miles';
          }
          if ( measurement_system == 'nautical') {
            ret_val = 'nm';
          }
          if ( measurement_system == 'metric') {
            ret_val = 'km';
          }
        } else {
          if ( measurement_system == 'english') {
            ret_val = 'feet';
          }
          if ( measurement_system == 'nautical') {
            ret_val = 'feet';
          }
          if ( measurement_system == 'metric') {
            ret_val = 'm';
          }
        }
        break;
      case 'f':
      case 'feet':
      case 'ft':
        if ( measurement > 300 ) {
          if ( measurement_system == 'english') {
            ret_val = 'miles';
          }
          if ( measurement_system == 'nautical') {
            ret_val = 'nm';
          }
          if ( measurement_system == 'metric') {
            ret_val = 'km' ;
          }
        } else {
          if ( measurement_system == 'english') {
            ret_val = 'feet';
          }
          if ( measurement_system == 'nautical') {
            ret_val = 'feet';
          }
          if ( measurement_system == 'metric') {
            ret_val = 'm' ;
          }
        }
        break;
      case 'm/s':
        if ( measurement_system == 'english' ) {
          ret_val = 'mph';
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = 'knots';
        }
        if ( measurement_system == 'metric' ) {
          ret_val = 'kph' ;
        }
        break;
      case 'knots':
      case 'kts':
        if ( measurement_system == 'english' ) {
          ret_val = 'mph' ;
        }
        if ( measurement_system == 'metric' ) {
          ret_val = 'kph' ;
        }
        break;
      case 'mph':
        if ( measurement_system == 'metric' ) {
          ret_val = 'kph' ;
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = 'knots' ;
        }
        break;
      case 'c':
      case 'celsius':
      case 'centigrade':
      case '°C':
        if ( measurement_system == 'english' || measurement_system == 'nautical') {
          ret_val = '°F';
        }
        break;
      case 'fahrenheit':
      case '°F':
        if ( measurement_system == 'metric' ) {
          ret_val = '°C' ;
        }
        break;
      case 'millibars':
        ret_val = 'mb' ;
        break;
      case 'visibility':
      case 'visibility_in_air':
        if ( measurement_system == 'metric' ) {
          ret_val = 'km' ;
        }
        if ( measurement_system == 'nautical' ) {
          ret_val = 'nm' ;
        }
        if ( measurement_system == 'english' ) {
          ret_val = 'miles' ;
        }
        break;
      case 'miles':
        if ( measurement_system == 'nautical' ) {
          ret_val = 'nm' ;
        }
        if ( measurement_system == 'metric') {
          ret_val = 'km';
        }
        break;
      case 'nm':
      case 'nautical miles':
        if ( measurement_system == 'nautical' ) {
          ret_val = 'nm' ;
        }
        if ( measurement_system == 'english' ) {
          ret_val = 'miles' ;
        }
        if ( measurement_system == 'metric') {
          ret_val = 'km' ;
        }
        break;
      case 'km':
      case 'kilometers':
        if ( measurement_system == 'nautical' ) {
          ret_val = 'nm' ;
        }
        if ( measurement_system == 'english' ) {
          ret_val = 'miles' ;
        }
        if ( measurement_system == 'metric') {
          ret_val = 'km' ;
        }
        break;
      case 'percent':
        ret_val = "%";
        break;
      case 'angular_degrees':
        ret_val = "deg";
        break;
      default:
        ret_val = units;
        break;
    }
    return(ret_val);
  }
  // wrap this in a function to catch unknown data types
  getDataTypeDescription(parameter) {
    let ret_val: string = "unk data type description for " + parameter ;
    if ( this.data_type_desc[parameter] != undefined ) {
      ret_val = this.data_type_desc[parameter] ;
    }
    return( ret_val ) ;
  }
  // I'm trying to use a color ramp for readings below the surface
  // which in the oceanographic world is positive.
  getPlotColor(parameter, depth, dKey, depths) {
    let color : any ;
    // if there is more than a single depth then use the depths color ramp
    if ( depth != -99999 && depth > 0 && depths.length > 1 ) {
      color = this.depth_colors[dKey] ;
    } else {
      color = this.colors[this.data_type_color[parameter]] ;
    }
    return( color );
  }
  // format a display string containing the various conversions.
  getDisplayString( parameter, units, measurement, measurement_system) {
    let ret_val: string = '';
    let par_lwr = parameter.toLowerCase() ;
    let desired_measurement : number = this.convert(measurement, units, measurement_system);
    let english_measurement: number = this.convert(measurement, units, 'english');
    let metric_measurement: number = this.convert(measurement, units, 'metric');
    let nautical_measurement: number = this.convert(measurement, units, 'nautical');
    let desired_units: string = this.convert_unit_label( measurement, units, measurement_system );
    let english_units: string = this.convert_unit_label( measurement, units, 'english' );
    let metric_units: string = this.convert_unit_label( measurement, units, 'metric' );
    let nautical_units: string = this.convert_unit_label( measurement, units, 'nautical' );
    let fs: string = this.dataTypeFormatString(par_lwr);
    switch ( par_lwr ) {
      case 'wind speed' :
      case 'wind gust' :
      case 'wind_speed' :
      case 'wind_gust':
        ret_val = sprintf( fs + " %s", desired_measurement, desired_units) ;
        switch ( measurement_system ) {
          case 'english':
            ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", metric_measurement, metric_units,
                                      nautical_measurement, nautical_units) ;
            break;
          case 'nautical':
            ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", english_measurement, english_units,
                                      metric_measurement, metric_units) ;
            break;
          case 'metric':
            ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", english_measurement, english_units,
                                      nautical_measurement, nautical_units) ;
            break;
        }
        break;
      case 'air temperature' :
      case 'air_temperature' :
      case 'temperature':
      case 'wave_height':
      case 'significant_wave_height':
      case 'significant_height_of_wind_and_swell_waves':
      case 'wave_height':
      case 'significant_wave_height_3' :
      case 'wave_height_3':
      case 'maximum_wave_height_3':
      case 'swell_wave_height_3':
        ret_val = sprintf( fs + " %s", desired_measurement, desired_units) ;
        switch ( measurement_system ) {
          case 'english':
          case 'nautical':
            ret_val += sprintf( " ("+ fs + " %s)", metric_measurement, metric_units) ;
            break;
        }
        break;
      case 'visibility' :
      case 'visibility_in_air' :
          ret_val = sprintf( fs + " %s", desired_measurement, desired_units) ;
          switch ( measurement_system ) {
            case 'english':
              ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", metric_measurement, metric_units,
                                        nautical_measurement, nautical_units) ;
              break;
            case 'nautical':
              ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", english_measurement, english_units,
                                        metric_measurement, metric_units) ;
              break;
            case 'metric':
              ret_val += sprintf( " ("+ fs + " %s, " + fs + " %s)", english_measurement, english_units,
                                        nautical_measurement, nautical_units) ;
              break;
          }
        break;
      case 'deg':
      case 'current_direction':
        if ( measurement_system == 'compass') {
          ret_val = sprintf( "%s", desired_measurement) ;
        } else {
          ret_val = sprintf( fs + "%s", desired_measurement, desired_units) ;
        }
        break;
      default:
        ret_val = sprintf( fs + "%s", desired_measurement, desired_units) ;
        break;
    }
    return(ret_val);
  }
  dataTypeFormatString (data_type) {
    var ret_val = '%s';
    switch ( data_type )
      {
      case 'celsius':
      case 'fahrenheit':
      case 'psu':
      case 'msiemens/cm':
      case 'kg/m^3':
        ret_val = '%.1f' ;
        break;
      case 'water_level':
      case 'significant_height_of_wind_and_swell_waves' :
      case 'significant_wave_height' :
      case 'wave_height':
      case 'significant_wave_height_3' :
      case 'wave_height_3':
      case 'maximum_wave_height_3':
      case 'swell_wave_height_3':
        ret_val = '%.2f' ;
        break;
      case 'location':
        ret_val = '%.3f' ;
        break;
      case 'depth':
      case 'sea_water_speed' :
      case 'current_speed' :
      case 'current_u' :
      case 'current_v' :
      case 'wind_speed' :
      case 'wind_gust' :
      case 'turbidity' :
      case 'visibility_in_air' :
      case 'visibility':
      case 'air_temperature' :
      case 'air temperature' :
      case 'sea_water_temperature' :
      case 'temperature' :
        ret_val = '%.1f' ;
        break;
      case 'wind speed':
      case 'wind gust':
      case 'percent':
        ret_val = '%.0f' ;
        break;
      case 'solar_zenith_angle':
      case 'dominant_wave_period' :
      case 'wind_from_direction' :
      case 'direction_of_sea_water_velocity' :
      case 'dissolved_oxygen':
      case 'percent_oxygen_saturation' :
      case 'oxygen_saturation':
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
      case 'millibars':
      case 'barometric_pressure':
      case 'mb':
      case 'conductivity':
      case 'sigma_t':
      case 'salinity':
      case 'ml/l':
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
}
