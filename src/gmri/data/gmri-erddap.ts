export class GMRIErddap {

  erddap_info_url:string = 'http://www.neracoos.org/erddap/info/index.json';
  erddap_url:string;
  ERROR:string = '';
	data_types_erddap:any = [];
	preferred_datasets_erddap:any = [];
	institutions:any = [];
	erdTables:any = [];
	db_programs:any [];
  raw_data: any ;
  platforms: any = [] ;

  constructor( rawData: any ) {
    if ( rawData != undefined ) {
      this.raw_data = rawData ;
    }
      // Maps new neracoos_data_providers from ERDDAP datasets.xml to the GM2 database timeseries program values.
      this.db_programs = [
        ['UMO' , 'GoMOOS'],
        ['UCONN' , 'lisicos_buoy'],
        ['UNH' , 'unh_buoy']
        ];
      // table to map UMO data types to ERDDAP data types names.
      // And perhaps the ERDDAP datasetID
      this.data_types_erddap = [
        ['Ed_PAR', 'Ed_PAR'],
        ['air_temperature', 'air_temperature'],
        ['chlorophyll', 'chlorophyll'],
        ['direction_of_sea_water_velocity', 'current_direction'],
        ['dissolved_oxygen', 'dissolved_oxygen'],
        ['oxygen_saturation', 'oxygen_saturation'],
        ['percent_oxygen_saturation', 'percent_oxygen_saturation'],
        ['dominant_wave_period', 'dominant_wave_period'],
        ['percent_sun', 'percent_sun'],
        ['sea_level_pressure', 'barometric_pressure'],
        ['sea_water_density', 'sigma_t'],
        ['sea_water_electrical_conductivity', 'conductivity'],
        ['sea_water_salinity', 'salinity'],
        ['sea_water_speed', 'current_speed'],
        ['sea_water_temperature', 'temperature'],
        ['significant_height_of_wind_and_swell_waves', 'significant_wave_height'],
        ['solar_zenith_angle', 'solar_zenith_angle'],
        ['turbidity', 'turbidity'],
        ['visibility_in_air', 'visibility'],
        ['wind_from_direction', 'wind_direction'],
        ['wind_gust', 'wind_gust'],
        ['wind_speed', 'wind_speed']
      ];
      // arrays of what datasetids to look for
      // for a given parameter. There may be more than one.
      // later on the first match is used as the dataset.
      let temperature:any = [ 'aanderaa', 'sbe37' ] ;
      this.preferred_datasets_erddap['temperature'] = temperature ;

      let current_speed:any = [ 'aanderaa', 'doppler'] ;
      this.preferred_datasets_erddap['current_speed'] = current_speed ;

      let current_direction:any = [ 'aanderaa', 'doppler'] ;
      this.preferred_datasets_erddap['current_direction'] = current_direction ;

      let significant_wave_height:any = [ 'accelerometer', 'triaxys', 'mstrain' ] ;
      this.preferred_datasets_erddap['significant_wave_height'] = significant_wave_height ;

      let dominant_wave_period:any = [ 'accelerometer' , 'triaxys', 'mstrain'] ;
      this.preferred_datasets_erddap['dominant_wave_period'] = dominant_wave_period ;

      let percent_oxygen_saturation:any = [ 'optode' ] ;
      this.preferred_datasets_erddap['percent_oxygen_saturation'] = percent_oxygen_saturation ;

      let oxygen_saturation:any = [ 'optode' ] ;
      this.preferred_datasets_erddap['oxygen_saturation'] = oxygen_saturation ;

      let dissolved_oxygen:any = [ 'optode', 'aanderaa' ] ;
      this.preferred_datasets_erddap['dissolved_oxygen'] = dissolved_oxygen ;

      let air_temperature:any = [ 'met' ] ;
      this.preferred_datasets_erddap['air_temperature'] = air_temperature ;

      let barometric_pressure:any = [ 'met' ] ;
      this.preferred_datasets_erddap['barometric_pressure'] = barometric_pressure ;

      let visibility:any = [ 'met' ] ;
      this.preferred_datasets_erddap['visibility'] = visibility ;

      let wind_direction:any = [ 'met' ] ;
      this.preferred_datasets_erddap['wind_direction'] = wind_direction ;

      let wind_gust:any = [ 'met' ] ;
      this.preferred_datasets_erddap['wind_gust'] = wind_gust ;

      let wind_speed:any = [ 'met' ] ;
      this.preferred_datasets_erddap['wind_speed'] = wind_speed ;

      let salinity:any = [ 'sbe16', 'sbe17', 'sbe37' ] ;
      this.preferred_datasets_erddap['salinity'] = salinity ;

      let sigma_t:any = [ 'sbe16', 'sbe17' ] ;
      this.preferred_datasets_erddap['sigma_t'] = sigma_t ;
    }
  // create a display worthy subset of data
  getPlatformsMetadata(only_active) {
    // let platforms: any = [] ;
    for(let rKey in this.raw_data.erdTables){
      if ( (only_active && this.raw_data.erdTables[rKey].active) ||
          !only_active ) {
        if(this.raw_data.erdTables[rKey].platform){
          let platform_name : any = this.raw_data.erdTables[rKey].platform ;
          if ( this.platforms[platform_name] == undefined ) {
            let platform: any = {}
            this.platforms[platform_name] = platform;
          }
          this.platforms[platform_name].project = this.raw_data.erdTables[rKey].project ;
          this.platforms[platform_name].Title = this.raw_data.erdTables[rKey].Title;
          this.platforms[platform_name].Institution = this.raw_data.erdTables[rKey].Info;
          this.platforms[platform_name].mooring_site_desc = this.raw_data.erdTables[rKey].mooring_site_desc;
          this.platforms[platform_name].latitude = this.raw_data.erdTables[rKey].latitude;
          this.platforms[platform_name].longitude = this.raw_data.erdTables[rKey].longitude;
          this.platforms[platform_name].active = this.raw_data.erdTables[rKey].active;
        }
      }
    }
  }
  // return true if all the datatypes exist in the all_varaibles array.
  // records are organized by datasetId so many are searched.
  // This returns the dataset id for the types found. This implies a certain
  // amount of user responsibility to ask for data_types that are known to be
  // in a dataset.
  // I've been checking the end time of the observations against
  // the end time of the forecast I want. That's no good!
  // I need to adjust the end time. If Erddap gets stale
  // that's too much to ask to debug. So set the end time to
  // the Dataset's end time ( return it along with the dataset id.
  getDatasetID( appConfig, platform_name, data_type_array ) {
    var date_range = appConfig.getERDDAPDateRange(null) ;
    let date_start_msse: number = date_range['date_start_msse'];
    // var date_end_msse = date_range['date_end_msse'];
    let datasetID: any;
    let ret_array : any = [] ;
    let ret_date_start_msee: number;
    let ret_date_end_msee: number;
    // initialize the results to false
    let dataTypeFound: any = [] ;
    for ( let dKey in data_type_array ) {
      dataTypeFound[dKey] = false ;
    }
    for(let rKey in this.raw_data.erdTables){
      if ( this.raw_data.erdTables[rKey].platform &&
            this.raw_data.erdTables[rKey].platform == platform_name) {
        for ( let dKey in data_type_array ) {
          for ( let vKey in this.raw_data.erdTables[rKey].all_variables ) {
            // check for starting within the requested range.
            if ( this.raw_data.erdTables[rKey].all_variables[vKey] == data_type_array[dKey] &&
                (date_start_msse >= this.raw_data.erdTables[rKey].start_time_msse &&
                date_start_msse <= this.raw_data.erdTables[rKey].end_time_msse ) ) {
              dataTypeFound[dKey] = true ;
              datasetID = this.raw_data.erdTables[rKey].DatasetID ;
              ret_date_start_msee = this.raw_data.erdTables[rKey].start_time_msse;
              ret_date_end_msee = this.raw_data.erdTables[rKey].end_time_msse ;
            }
          }
        }
      }
    }
    for ( let dKey in data_type_array ) {
      if ( dataTypeFound[dKey] == false ) {
        datasetID = null ;
      }
    }
    ret_array['datasetID'] = datasetID ;
    ret_array['start_time_msse'] = ret_date_start_msee ;
    ret_array['end_time_msse'] = ret_date_end_msee ;
    return ( ret_array );
  }
  // given a dataset id get it's variables. A01_met_all contains the wind_speed
  // I know I want wind speed and I might as well get all the other varaibles
  // maybe I don't know yet but it seems worth doing.
  getDatasetVariables( appConfig, datasetID ) {
    let ret: any ;
    for(let rKey in this.raw_data.erdTables){
      if ( this.raw_data.erdTables[rKey].DatasetID &&
            this.raw_data.erdTables[rKey].DatasetID == datasetID) {
        ret = this.raw_data.erdTables[rKey].data_variables ;
        break;
      }
    }
    return(ret);
  }
  // this is somewhat useless at the moment. Platforms occur multiple
  // times in the raw data because the raw data is organized by DatasetID!
  getPlatform( platform_name) {
    let platform_data : any ;
    for(let rKey in this.raw_data.erdTables){
      if ( this.raw_data.erdTables[rKey].platform ) {
        platform_data = this.raw_data.erdTables[rKey] ;
        break;
      }
    }
    return(platform_data) ;
  }
  getParameter( platform_name, parameter_name ) {
    let platform_data = this.getPlatform( platform_name ) ;
    let parameter: any = platform_data[parameter_name];
    return (parameter);
  }
  getDataProviders(){
    let ret_array : any = [] ;
    for(let rKey in this.raw_data.erdTables){
      if ( this.raw_data.erdTables[rKey].neracoos_data_provider != undefined ) {
        if ( ret_array.indexOf(this.raw_data.erdTables[rKey].neracoos_data_provider) == -1) {
          ret_array.push(this.raw_data.erdTables[rKey].neracoos_data_provider) ;
        }
      }
    }
    return(ret_array);
  }
}
