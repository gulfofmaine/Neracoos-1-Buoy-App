/**
 * Utilities to translate some of our data source names to much more pronouncable names.
 */

import * as Sentry from '@sentry/browser'


export const humanDataNameDict = {
    'air_temperature': 'Air Temperature',

    'chlorophyll': 'Chlorophyll',

    'dew_point_temperature': 'Dew Point',
    
    'direction_of_sea_water_velocity': 'Current Direction',

    'dissolved_oxygen': 'Dissolved Oxygen',
    
    'dominant_wave_period': 'Wave Period',

    'mean_wave_direction': 'Wave Direction',

    'mole_concentration_of_nitrate_in_sea_water': 'Molarity of Nitrate in Sea Water',
    
    'sea_level_pressure': 'Air Pressure',
    'sea_water_density': 'Water Density',
    'sea_water_electrical_conductivity': 'Water Conductivity',
    'sea_water_salinity': 'Salinity',
    'sea_water_speed': 'Current Speed',
    'sea_water_temperature': 'Water Temperature',
    
    'significant_height_of_wind_and_swell_waves': 'Wave Height',

    'surface_partial_pressure_of_carbon_dioxide_in_air': 'Partial Surface Pressure of Carbon Dioxide in Air',
    'surface_partial_pressure_of_carbon_dioxide_in_sea_water': 'Partial Surface Pressure of Carbon Dioxide in Sea Water',

    'turbidity': 'Turbidity',

    'pressure_tendency': 'Pressure trend',

    'visibility_in_air': 'Visibility',

    'wind_from_direction': 'Wind Direction',
    'wind_gust': 'Wind Gust',
    'wind_speed': 'Wind Speed',
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
    Sentry.captureMessage('Unknown data type: ' + dataType)
    return dataType
}

export const humanUnitNamesDict = {
    'cm/s': 'Centimeters / Second',

    'kg/m3': 'Kilograms / Cubic Meter',

    'Deg': 'Degrees',
    'Deg C': 'Degrees Celsius',

    
    
    'Meters': 'Meters',
    'mb': 'Millibars',
    'mg chl/m<sup>3</sup>': 'Milligrams Chlorophyll / Cubic Meter',
    'ml/l': 'Milliliters / liter',
    'msiemens/cm': 'Millisiemens / Centimeter',

    'NTU': 'Nephelometric Turbidity Units (NTU)',

    'PSU': 'Practical Salinity Unit (PSU, g salt / kg sea water)',

    'Sec': 'Seconds',

    'uATM': 'Microatmospheres (uATM)'
}

/**
 * Convert from short unit names, to longer more people friendly ones.
 * 
 * @param unit short unit name
 * @returns friendlier unit name
 */
export function humanUnitName(unit: string): string {
    if (humanUnitNamesDict.hasOwnProperty(unit)) {
        return humanUnitNamesDict[unit]
    }

    Sentry.captureMessage('Unknown unit name: ' + unit)
    return unit
}
