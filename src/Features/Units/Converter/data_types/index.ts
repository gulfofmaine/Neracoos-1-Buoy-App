import { DataTypeConversion } from "../conversions"

import { AirPressureHpa } from "./_air_pressure_hpa"
import { CardinalDirection } from "./_cardinal_direction"
import { CmsVelocity } from "./_cms_velocity"
import { Passthrough } from "./_passthrough"
import { Temperature } from "./_temperature"
import { TidalLevel } from "./_tidal_level"
import { Visibility } from "./_visibility"
import { WaveHeight } from "./_wave_height"
import { WindSpeed } from "./_wind_speed"

import { air_pressure } from "./air_pressure"

export { Passthrough }

interface DataTypesObject {
  [key: string]: DataTypeConversion
}

export const data_types: DataTypesObject = {
  air_pressure,
  air_pressure_at_sea_level: new AirPressureHpa("air_pressure_at_sea_level", "Air Pressure"),
  air_temperature: new Temperature("air_temperature", "Air Temperature"),
  amps: new Passthrough("amps", "Amps", "counts", "Counts"),
  attenuation: new Passthrough("attenuation", "Beam Attenuation", "m-1", "Per Meter"),
  average_wave_period: new Passthrough("average_wave_period", "Average Wave Period", "s", "Seconds"),
  barometric_pressure: new AirPressureHpa("barometric_pressure", "Barometric Pressure"),
  dew_point_temperature: new Temperature("dew_point_temperature", "Dewpoint Temperature"),
  chlorophyll: new Passthrough("chlorophyll", "Chlorophyll", "chl/m3", "Chlorophyll per Cubic Meter"),
  concentration_of_colored_dissolved_organic_matter_in_sea_water: new Passthrough(
    "concentration_of_colored_dissolved_organic_matter_in_sea_water",
    "Chromophoric Dissolved Organic Matter",
    "ppbQSE",
    "ppbQSE"
  ),
  count: new Passthrough("count", "Count", "count", "Count"),
  direction_of_sea_water_velocity: new Passthrough(
    "direction_of_sea_water_velocity",
    "Current Direction",
    "Angular Degrees",
    "Angular Degrees"
  ),
  dissolved_oxygen: new Passthrough("dissolved_oxygen", "Dissolved Oxygen", "ml/l", "ml/l"),
  dominant_wave_period: new Passthrough("dominant_wave_period", "Dominant Wave Period", "s", "Seconds"),
  dominant_wave_period_3: new Passthrough("dominant_wave_period_3", "Dominant Wave Period", "s", "Seconds"),
  eastward_sea_water_velocity: new CmsVelocity("eastward_sea_water_velocity", "East Velocity Component"),
  eastward_wind: new WindSpeed("eastward_wind", "Wind Speed, Zonal"),
  Ed_PAR: new Passthrough("Ed_PAR", "Downwelling Irradiance of PAR", "microE/m^2/s", "microE/m^2/s"),
  fractional_saturation_of_oxygen_in_sea_water: new Passthrough(
    "fractional_saturation_of_oxygen_in_sea_water",
    "Percent Oxygen Saturation",
    "percent",
    "percent"
  ),
  lat_offset: new Passthrough("lat_offset", "Latitudinal Offset", "Angular Minutes", "Angular Minutes"),
  lon_offset: new Passthrough("lon_offset", "Longitudinal Offset", "Angular Minutes", "Angular Minutes"),
  max_visibility: new Visibility("max_visibility", "Maximum Visibility"),
  max_wave_height: new WaveHeight("max_wave_height", "Maximum Wave Height"),
  mean_wave_direction: new CardinalDirection("mean_wave_direction", "Mean Wave Direction"),
  min_visibility: new Visibility("min_visibility", "Minimum Visibility"),
  mole_concentration_of_carbon_dioxide_in_air_ppm: new Passthrough(
    "mole_concentration_of_carbon_dioxide_in_air_ppm",
    "Atmospheric Concentration of Carbon Dioxide in Parts Per Million",
    "ppm",
    "ppm"
  ),
  mole_concentration_of_nitrate_in_sea_water: new Passthrough(
    "mole_concentration_of_nitrate_in_sea_water",
    "Nitrate Concentration",
    "microM",
    "microM"
  ),
  mole_concentration_of_phosphate_in_sea_water: new Passthrough(
    "mole_concentration_of_phosphate_in_sea_water",
    "Phosphate Concentration",
    "microM/l",
    "microM/l"
  ),
  moles_of_oxygen_per_unit_mass_in_sea_water_um_kg: new Passthrough(
    "moles_of_oxygen_per_unit_mass_in_sea_water_um_kg",
    "Micro Moles Oxygen per Kilogram of Sea Water",
    "uM/kg",
    "uM/kg"
  ),
  northward_sea_water_velocity: new CmsVelocity("northward_sea_water_velocity", "North Velocity Component"),
  northward_wind: new WindSpeed("northward_wind", "Wind Speed, Meridional"),
  omega_aragonite: new Passthrough(
    "omega_aragonite",
    "Omega Aragonite - Derived from total alkalinity and pCO2",
    "Omega",
    "Omega"
  ),
  omega_calcite: new Passthrough(
    "omega_calcite",
    "Omega Calcite - Derived from total alkalinity and pCO2",
    "Omega",
    "Omega"
  ),
  oxygen_concentration_in_sea_water: new Passthrough(
    "oxygen_concentration_in_sea_water",
    "Oxygen Concentration In Sea Water",
    "mg/L",
    "mg/L"
  ),
  oxygen_saturation: new Passthrough("oxygen_saturation", "Oxygen Saturation", "ml/l", "ml/l"),
  par: new Passthrough("par", "Photosynthetically Available Radiation", "µE/m2/sec", "µE/m2/sec"),
  percent_clear_sky: new Passthrough("percent_clear_sky", "Percent Clear Sky", "percent", "percent"),
  percent_oxygen_saturation: new Passthrough(
    "percent_oxygen_saturation",
    "Percent Oxygen Saturation",
    "percent",
    "percent"
  ),
  percent_sun: new Passthrough("percent_sun", "Percent Sun", "percent", "percent"),
  period: new Passthrough("period", "Dominant Wave Period", "s", "Seconds"),
  predicted_sea_water_level: new WaveHeight("predicted_sea_water_level", "Predicted level of sea water"),
  pressure_tendency: new Passthrough("pressure_tendency", "Pressure Tendency", "degrees", "Degrees"),
  relative_humidity: new Passthrough("relative_humidity", "Relative Humidity", "percent", "Percent"),
  sea_level_pressure: new AirPressureHpa("sea_level_pressure", "Sea Level Pressure"),
  surface_partial_pressure_of_carbon_dioxide_in_sea_water_ppm: new Passthrough(
    "surface_partial_pressure_of_carbon_dioxide_in_sea_water_ppm",
    "Sea Water Concentration of Carbon Dioxide in Parts Per Million",
    "ppm",
    "ppm"
  ),
  sea_surface_swell_wave_period: new Passthrough(
    "sea_surface_swell_wave_period",
    "Wave Period, Average",
    "s",
    "Seconds"
  ),
  sea_surface_temperature: new Temperature("sea_surface_temperature", "Sea Surface Temperature"),
  sea_water_temperature: new Temperature("sea_water_temperature", "Water Temperature"),
  sea_surface_height_above_geopotential_datum: new TidalLevel("sea_surface_height_above_geopotential_datum", "Sea Surface Height (NAVD 88)"),
  sea_surface_wave_significant_height: new WaveHeight("max_wave_height", "Wave Height"),
  sea_surface_wave_from_direction: new CardinalDirection("sea_surface_wave_from direction", "Waves from Direction"),
  sea_surface_wave_to_direction: new CardinalDirection("sea_surface_wave_to_direction", "Wave Direction"),
  sea_water_alkalinity_expressed_as_mole_equivalent: new Passthrough(
    "sea_water_alkalinity_expressed_as_mole_equivalent",
    "Total Alkalinity",
    "microM/kg",
    "microM/kg"
  ),
  sea_water_density: new Passthrough("sea_water_density", "Sigma-T", "kg/m^3", "Kilograms per cubic meter"),
  sea_water_electrical_conductivity: new Passthrough(
    "sea_water_electrical_conductivity",
    "Conductivity",
    "siemens/m",
    "siemens/m"
  ),
  sea_water_level: new WaveHeight("sea_water_level", "Sea water level relative to the mean"),
  sea_water_pH_reported_on_total_scale: new Passthrough(
    "sea_water_pH_reported_on_total_scale",
    "pH",
    "pH Total",
    "pH Total"
  ),
  sea_water_pressure: new Passthrough("sea_water_pressure", "Pressure", "decibars", "Decibars"),
  sea_water_salinity: new Passthrough("sea_water_salinity", "Salinity", "psu", "PSU"),
  sea_water_speed: new CmsVelocity("sea_water_speed", "Current Speed"),
  sea_water_velocity: new CmsVelocity("sea_water_velocity", "Current Speed"),
  sea_water_velocity_m: new DataTypeConversion(
    "sea_water_velocity_m",
    "Sea Water Velocity",
    "m/s",
    "m/s",
    "knot",
    "Meters/Second",
    "Knots"
  ),
  significant_height_of_wind_and_swell_waves: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_height_of_wind_and_swell_waves_3: new WaveHeight("max_wave_height", "Significant Wave Height"),
  significant_wave_height: new WaveHeight("max_wave_height", "Significant Wave Height"),
  solar_zenith_angle: new Passthrough("solar_zenith_angle", "Solar Zenith Angle", "radians", "Radians"),
  sun_icon: new Passthrough("sun_icon", "Sun Icon", "1", "Sun Icon"),
  surface_altitude: new WaveHeight("surface_altitude", "Water Level"),
  surface_partial_pressure_of_carbon_dioxide_in_air: new Passthrough(
    "surface_partial_pressure_of_carbon_dioxide_in_air",
    "Atmospheric CO2 Partial Pressure",
    "microATM",
    "microATM"
  ),
  surface_partial_pressure_of_carbon_dioxide_in_sea_water: new Passthrough(
    "surface_partial_pressure_of_carbon_dioxide_in_sea_water",
    "Sea Surface CO2 Partial Pressure",
    "microATM",
    "microATM"
  ),
  tendency_of_air_pressure: new AirPressureHpa("tendency_of_air_pressure", "Pressure Tendency"),
  tidal_sea_surface_height_above_mean_higher_high_water: new TidalLevel("tidal_sea_surface_height_above_mean_higher_high_water", "Mean Higher High Water"),
  tidal_sea_surface_height_above_mean_lower_low_water: new TidalLevel("tidal_sea_surface_height_above_mean_lower_low_water", "Mean Lower Low Water"),
  tidal_sea_surface_height_above_mean_sea_level: new TidalLevel("tidal_sea_surface_height_above_mean_sea_level", "Mean Sea Level"),
  transmissivity: new Passthrough("transmissivity", "Transmissivity", "percent", "percent"),
  transmissivity_voltage: new Passthrough("transmissivity_voltage", "Transmissivity Voltage", "percent", "percent"),
  turbidity: new Passthrough("turbidity", "Turbidity", "ntu", "ntu"),
  visibility_in_air: new Visibility("visibility_in_air", "Visibility"),
  volume_fraction_of_oxygen_in_sea_water: new Passthrough(
    "volume_fraction_of_oxygen_in_sea_water",
    "Dissolved Oxygen",
    "ml/l",
    "ml/l"
  ),
  wave_direction_spread: new Passthrough("wave_direction_spread", "Wave Direction Spread", "degrees", "Degrees"),
  wind_direction_kvh: new CardinalDirection("wind_direction_kvh", "Mean Wind Direction"),
  wind_direction_stddev: new Passthrough(
    "wind_direction_stddev",
    "Wind Direction Standard Deviation",
    "degrees",
    "Degrees"
  ),
  wind_direction_uv: new Passthrough("wind_direction_uv", "Unit Vector Mean Wind Direction", "degrees", "Degrees"),
  wind_direction_uv_stddev: new Passthrough(
    "wind_direction_uv_stddev",
    "Unit Vector Mean Wind Direction Standard Deviation",
    "degrees",
    "Degrees"
  ),
  wind_direction_ve: new Passthrough("wind_direction_ve", "Vector Averaged Wind Direction", "degrees", "Degrees"),
  wind_direction_ve_stddev: new Passthrough(
    "wind_direction_ve_stddev",
    "Vector Averaged Wind Direction Standard Deviation",
    "degrees",
    "Degrees"
  ),
  wind_from_direction: new CardinalDirection("wind_from_direction", "Wind Direction"),
  wind_gust: new CmsVelocity("wind_gust", "Wind Gust"),
  wind_min: new CmsVelocity("wind_min", "Wind Minimum Speed"),
  wind_peak: new CmsVelocity("wind_peak", "Wind Peak"),
  wind_percent_good: new Passthrough("wind_percent_good", "Wind Percent Good", "1", "Wind Percent Good"),
  wind_speed_and_direction: new Passthrough(
    "wind_speed_and_direction",
    "Wind Speed and Direction",
    "m/s, degrees",
    "m/s, degrees"
  ),
  wind_speed_of_gust: new WindSpeed("wind_speed_of_gust", "Wind Gust"),
  wind_speed_sc: new WindSpeed("wind_speed_sc", "Scalar Average Wind Speed"),
  wind_speed_ve: new WindSpeed("wind_speed_ve", "Vector Average Wind Speed"),
  wind_speed: new WindSpeed("wind_speed", "Wind Speed"),
}
