/**
 * Utilities to translate some of our data source names to much more pronouncable names.
 */

export const humanDataNameDict = {
    'air_temperature': 'Air Temperature',

    'dew_point_temperature': 'Dew Point',
    
    'direction_of_sea_water_velocity': 'Current Direction',

    'dissolved_oxygen': 'Dissolved Oxygen',
    
    'dominant_wave_period': 'Wave Period',

    'mean_wave_direction': 'Wave Direction',
    
    'sea_level_pressure': 'Air Pressure',
    'sea_water_density': 'Water Density',
    'sea_water_electrical_conductivity': 'Water Conductivity',
    'sea_water_salinity': 'Salinity',
    'sea_water_speed': 'Current Speed',
    'sea_water_temperature': 'Water Temperature',
    
    'significant_height_of_wind_and_swell_waves': 'Wave Height',

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
    return dataType
}