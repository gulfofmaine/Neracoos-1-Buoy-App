export const conditions = {
  airTemp: ["air_temperature", "air_temperature_1m"],
  airPressure: ["air_pressure", "barometric_pressure", "sea_level_pressure", "air_pressure_at_sea_level"],

  waveHeight: [
    "sea_surface_wave_significant_height",
    "significant_height_of_wind_and_swell_waves",
    "significant_wave_height",
    "significant_height_of_wind_and_swell_waves_3",
  ],
  wavePeriod: [
    "period",
    "sea_surface_swell_wave_period",
    "dominant_wave_period",
    "average_wave_period",
    "dominant_wave_period_3",
  ],
  waveDirection: ["mean_wave_direction", "sea_surface_wave_to_direction"],

  waterTemp: ["sea_surface_temperature", "sea_water_temperature"],

  waterLevel: [
    "sea_water_level",
    "sea_surface_height_above_geopotential_datum",
    "sea_surface_height_above_mean_sea_level",
    "sea_surface_height_above_sea_level",
    "sea_surface_height",
    "sea_surface_height_above_geoid",
    "sea_surface_height_above_reference_ellipsoid",
    "tidal_sea_surface_height_above_lowest_astronomical_tide",
    "tidal_sea_surface_height_above_mean_higher_high_water",
    "tidal_sea_surface_height_above_mean_lower_low_water",
    "tidal_sea_surface_height_above_mean_low_water_springs",
    "tidal_sea_surface_height_above_mean_sea_level",
    "sea_surface_elevation_anomaly",
    "sea_surface_elevation",
  ],

  waterLevelPredicted: ["predicted_sea_water_level"],

  windSpeed: ["wind_speed"],
  windGust: ["wind_gust", "wind_speed_of_gust"],
  windDirection: ["wind_from_direction"],

  visibility: ["visibility_in_air"],
}
