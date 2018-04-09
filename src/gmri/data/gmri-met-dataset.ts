import {GMRIDataset} from "../../gmri/data/gmri-dataset";
import { AppConfig } from '../../providers/appconfig/appconfig';
import {sprintf} from "sprintf-js";

export class GMRIMetDataset  extends GMRIDataset {

  name: string ;
  appConfig: any;
  initialized: boolean = false ;
  ml_name: any ;
  ml_identifier: any;
  program: any ;
  geo_array: any ;
  requested_data: boolean = false ;

  dt_wave_format: string ;
  dt_location_format: string ;

  geo_display_array: any ;

  dww_start_date: any ;
  dww_end_date: any ;
  start_date_ms: number;
  end_date_ms: number;
  hours_back: number;
  buoy_name = this.ml_name;

  erddapObservationData: any;
  metObservationData: any;
  chart_config_array: any ;
  erddapDatasetNames: any = [] ;
  datasetParameters: any = [] ;


  constructor( ml_identifier: string, appConfig: AppConfig) {
    super(ml_identifier, appConfig);
    this.ml_identifier = ml_identifier ;
    this.appConfig = appConfig ;
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
    this.dww_start_date = appConfig.get_erddap_dww_start_date();
    this.dww_end_date = appConfig.get_erddap_dww_end_date();
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

}
