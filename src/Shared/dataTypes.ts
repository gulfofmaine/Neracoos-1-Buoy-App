/**
 * Utilities to translate some of our data source names to much more pronouncable names.
 */

import * as Sentry from "@sentry/react"

export const humanDataNameDict = {
  air_temperature: "Air Temperature",

  barometric_pressure: "Air Pressure",

  chlorophyll: "Chlorophyll",

  dew_point_temperature: "Dew Point",

  direction_of_sea_water_velocity: "Current Direction",

  dissolved_oxygen: "Dissolved Oxygen",

  dominant_wave_period: "Wave Period",

  ED_PAR: "Photosynthetically_active_radiation",
  Ed_PAR: "Photosynthetically Active Radiation",

  mean_wave_direction: "Wave Direction",

  mole_concentration_of_nitrate_in_sea_water: "Molarity of Nitrate in Sea Water",

  oxygen_satruation: "Oxygen Saturation",
  oxygen_saturation: "Oxygen Saturation",

  percent_oxygen_saturation: "Oxygen Saturation",
  period: "Dominant Wave Period",

  sea_level_pressure: "Air Pressure",
  sea_water_density: "Water Density",
  sea_water_electrical_conductivity: "Water Conductivity",
  sea_water_salinity: "Salinity",
  sea_water_speed: "Current Speed",
  sea_water_temperature: "Water Temperature",
  sea_water_velocity: "Current Speed",

  significant_height_of_wind_and_swell_waves: "Wave Height",

  surface_partial_pressure_of_carbon_dioxide_in_air: "Partial Surface Pressure of Carbon Dioxide in Air",
  surface_partial_pressure_of_carbon_dioxide_in_sea_water: "Partial Surface Pressure of Carbon Dioxide in Sea Water",

  turbidity: "Turbidity",

  pressure_tendency: "Pressure trend",

  visibility_in_air: "Visibility",

  wind_from_direction: "Wind Direction",
  wind_gust: "Wind Gust",
  wind_speed: "Wind Speed",
}

/**
 * Convert machine names for data to those that people like more.
 * If a machine name is unknown, then return that rather than exploding.
 *
 * @param dataType Machine name for a sensor or data type.
 * @returns String with a much friendlier name for people.
 */
export function humanDataName(dataType: string): string {
  if (humanDataNameDict.hasOwnProperty(dataType)) {
    return humanDataNameDict[dataType]
  }
  const message = "Unknown data type: " + dataType
  Sentry.captureMessage(message)

  // tslint:disable-next-line:no-console
  console.log(message)

  return dataType
}

export const humanUnitNamesDict = {
  "%": "Percent",
  angular_degrees: "Angular Degrees",

  celsius: "Degrees Celsius",

  "cm/s": "Centimeters / Second",

  "kg/m3": "Kilograms / Cubic Meter",

  deg: "Degrees",
  "deg c": "Degrees Celsius",
  degree_C: "Degrees Celsius",
  degrees: "Degrees Celsius",
  degrees_true: "Degrees",

  f: "Degrees Fahrenheit",

  hpa: "Hectopascals",

  "kg/m^3": "Kilograms per cubic meter",

  meters: "Meters",

  m: "Meters",
  "m/s": "Meters per Second",

  mb: "Millibars",
  "mg chl/m<sup>3</sup>": "Milligrams Chlorophyll / Cubic Meter",
  "microeinsteins/m2/s": "MicroEinsteins/m2/s",
  millibars: "Millibars",
  "ml/l": "Milliliters / liter",
  "msiemens/cm": "Millisiemens / Centimeter",

  ntu: "Nephelometric Turbidity Units (NTU)",

  oxygen_saturation: "Oxygen Saturation",

  psu: "Practical Salinity Unit (PSU, g salt / kg sea water)",

  s: "Seconds",
  sec: "Seconds",
  seconds: "Seconds",

  "siemens/m": "Siemens / Meter",

  uatm: "Microatmospheres (uATM)",
}

/**
 * Convert from short unit names, to longer more people friendly ones.
 *
 * @param unit short unit name
 * @returns friendlier unit name
 */
export function humanUnitName(unit: string): string {
  if (humanUnitNamesDict.hasOwnProperty(unit.toLowerCase())) {
    return humanUnitNamesDict[unit.toLowerCase()]
  }

  Sentry.captureMessage("Unknown unit name: " + unit)
  return unit
}

/** Natural bounds that we like to view datasets with */
export const dataBounds = {
  air_temperature: [10, 20],

  // 'chlorophyll': 'Chlorophyll',

  // 'dew_point_temperature': 'Dew Point',

  // 'direction_of_sea_water_velocity': 'Current Direction',

  // 'dissolved_oxygen': 'Dissolved Oxygen',

  dominant_wave_period: [0, 5],

  // 'mean_wave_direction': 'Wave Direction',

  // 'mole_concentration_of_nitrate_in_sea_water': 'Molarity of Nitrate in Sea Water',

  // 'oxygen_satruation': 'Oxygen Saturation',
  percent_oxygen_saturation: [75, 90],

  // 'sea_level_pressure': 'Air Pressure',
  // 'sea_water_density': 'Water Density',
  // 'sea_water_electrical_conductivity': 'Water Conductivity',
  // 'sea_water_salinity': 'Salinity',
  // 'sea_water_speed': 'Current Speed',
  // 'sea_water_temperature': 'Water Temperature',

  significant_height_of_wind_and_swell_waves: [0, 1],

  // 'surface_partial_pressure_of_carbon_dioxide_in_air': 'Partial Surface Pressure of Carbon Dioxide in Air',
  // 'surface_partial_pressure_of_carbon_dioxide_in_sea_water': 'Partial Surface Pressure of Carbon Dioxide in Sea Water',

  // 'turbidity': 'Turbidity',

  pressure_tendency: [undefined, undefined],

  visibility_in_air: [0, 1],

  wind_from_direction: [undefined, undefined],
  wind_gust: [0, 10],
  wind_speed: [0, 10],
}

/**
 * Return the natural min and max that a chart should display for a data type.
 * If the min and max are unknown, it returns unknown instead.
 *
 * @param dataType
 * @returns [min, max]
 */
export function naturalBounds(dataType: string): Array<number | undefined> {
  if (dataBounds.hasOwnProperty(dataType)) {
    return dataBounds[dataType]
  }

  return [undefined, undefined]
}

const datumDisplayNames = {
  datum_mllw_meters: "Mean Low Low Water",
  datum_mlw_meters: "Mean Low Water",
  datum_mhhw_meters: "Mean High High Water",
  datum_mhw_meters: "Mean High Water",
  datum_mtl_meters: "Mean Tide Level",
  datum_msl_meters: "Mean Sea Level",
}

/** Return the display name for datum types
 *
 * @param datumName - name of Datum from BuoyBarn
 * @returns displayName for graph
 */

export function getDatumDisplayName(datum) {
  return datumDisplayNames[datum]
}
