/**
 * Conversion functions for common units
 */

import convert from 'convert-units'

import { round } from './math'

/**
 * We prefer to round our units to one place, 
 * so let's combine the functions to make things cleaner
 * 
 * @param value Value to convert
 * @param from Source unit
 * @param to Destination unit
 */
function conversion(value:number, from: string, to:string): number {
    return round(convert(value).from(from).to(to), 1)
}

/**
 * Convert some unit values as needed
 * 
 * @param unit Unit type to convert
 * @param value Value of unit
 */
export function convertUnit(unit: string, value: number): string {
    switch(unit) {

        case 'Deg C':
            return ' (' + conversion(value, 'C', 'F') + '° F)'
        
        case 'Meters':
            if (value < 100) {
                return ' (' + conversion(value, 'm', 'ft') + " feet)"
            } else {
                // nautical miles are not currently avaliable
                // they should be avaliable in the next release
                //  + conversion(value, 'm', 'nMi') + 'nm, ' 
                return ' (' + conversion(value, 'm', 'mi') + ' miles)'
            }

        case 'm/s':
            return ' (' + conversion(value, 'm/s', 'knot') + ' knots, ' + conversion(value, 'm/s', 'm/h') + ' mph)'
        
        default:
            return ''
    }
}
