import { DataTypeConversion } from "../conversions"

import { AirPressureHpa } from "./_air_pressure_hpa"
import { CardinalDirection } from "./_cardinal_direction"
import { Temperature } from "./_temperature"
import { Visibility } from "./_visibility"
import { WaveHeight } from "./_wave_height"
import { WindSpeed } from "./_wind_speed"

import { air_pressure } from "./air_pressure"

interface DataTypesObject {
  [key: string]: DataTypeConversion
}

export const data_types: DataTypesObject = {
  air_pressure,
  air_pressure_at_sea_level: new AirPressureHpa("air_pressure_at_sea_level", "Air Pressure"),
  air_temperature: new Temperature("air_temperature", "Air Temperature"),
  dew_point_temperature: new Temperature("dew_point_temperature", "Dewpoint Temperature"),
  eastward_wind: new WindSpeed("eastward_wind", "Wind Speed, Zonal"),
  max_visibility: new Visibility("max_visibility", "Maximum Visibility"),
  max_wave_height: new WaveHeight("max_wave_height", "Maximum Wave Height"),
  mean_wave_direction: new CardinalDirection("mean_wave_direction", "Mean Wave Direction"),
  min_visibility: new Visibility("min_visibility", "Minimum Visibility"),
  northward_wind: new WindSpeed("northward_wind", "Wind Speed, Meridional"),
  predicted_sea_water_level: new WaveHeight("predicted_sea_water_level", "Predicted level of sea water"),
  sea_level_pressure: new AirPressureHpa("sea_level_pressure", "Sea Level Pressure"),
  sea_surface_temperature: new Temperature("sea_surface_temperature", "Sea Surface Temperature"),
  sea_water_temperature: new Temperature("sea_water_temperature", "Water Temperature"),
  sea_surface_wave_significant_height: new WaveHeight("max_wave_height", "Wave Height"),
  sea_surface_wave_to_direction: new CardinalDirection("sea_surface_wave_to_direction", "Wave Direction"),
  sea_water_level: new WaveHeight("sea_water_level", "Sea water level relative to the mean"),
  significant_height_of_wind_and_swell_waves: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_height_of_wind_and_swell_waves_3: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_wave_height: new WaveHeight("max_wave_height", "Significant Wave Height"),
  tendency_of_air_pressure: new AirPressureHpa("tendency_of_air_pressure", "Pressure Tendency"),
  surface_altitude: new WaveHeight("surface_altitude", "Water Level"),
  visibility_in_air: new Visibility("visibility_in_air", "Visibility"),
  wind_direction_kvh: new CardinalDirection("wind_direction_kvh", "Mean Wind Direction"),
  wind_from_direction: new CardinalDirection("wind_from_direction", "Wind Direction"),
  wind_speed_of_gust: new WindSpeed("wind_speed_of_gust", "Wind Gust"),
  wind_speed_sc: new WindSpeed("wind_speed_sc", "Scalar Average Wind Speed"),
  wind_speed_ve: new WindSpeed("wind_speed_ve", "Vector Average Wind Speed"),
  wind_speed: new WindSpeed("wind_speed", "Wind Speed")
}
