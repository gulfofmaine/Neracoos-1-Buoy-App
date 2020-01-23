import { DataTypeConversion } from "../conversions"

import { air_pressure } from "./air_pressure"
import { air_pressure_at_sea_level } from "./air_pressure_at_sea_level"
import { Temperature } from "./_temperature"
import { Visibility } from "./_visibility"
import { WaveHeight } from "./_wave_height"
import { WindSpeed } from "./_wind_speed"

interface DataTypesObject {
  [key: string]: DataTypeConversion
}

export const data_types: DataTypesObject = {
  air_pressure,
  air_pressure_at_sea_level,
  air_temperature: new Temperature("air_temperature", "Air Temperature"),
  dew_point_temperature: new Temperature("dew_point_temperature", "Dewpoint Temperature"),
  eastward_wind: new WindSpeed("eastward_wind", "Wind Speed, Zonal"),
  max_visibility: new Visibility("max_visibility", "Maximum Visibility"),
  max_wave_height: new WaveHeight("max_wave_height", "Maximum Wave Height"),
  min_visibility: new Visibility("min_visibility", "Minimum Visibility"),
  northward_wind: new WindSpeed("northward_wind", "Wind Speed, Meridional"),
  sea_surface_temperature: new Temperature("sea_surface_temperature", "Sea Surface Temperature"),
  sea_surface_wave_significant_height: new WaveHeight("max_wave_height", "Wave Height"),
  significant_height_of_wind_and_swell_waves: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_height_of_wind_and_swell_waves_3: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_wave_height: new WaveHeight("max_wave_height", "Significant Wave Height"),
  visibility_in_air: new Visibility("visibility_in_air", "Visibility"),
  wind_speed_of_gust: new WindSpeed("wind_speed_of_gust", "Wind Gust"),
  wind_speed_sc: new WindSpeed("wind_speed_sc", "Scalar Average Wind Speed"),
  wind_speed_ve: new WindSpeed("wind_speed_ve", "Vector Average Wind Speed"),
  wind_speed: new WindSpeed("wind_speed", "Wind Speed")
}
