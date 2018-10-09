/**
 * Time related functions.
 */

/**
 * Get the current date, but shifted to ISO to remove time zones, and without any hours, minutes, seconds, or miliseconds.
 * @returns Current Date without timezone shift from ISO.
 */
export function todayIso(): Date {
    const today = new Date()
    today.setHours(-(today.getTimezoneOffset() / 60))
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    return today
}

/**
 * ISO date without milliseconds.
 * 
 * @param date 
 * @returns ISO date string without trailing milliseconds.
 */
export function shortIso(date: Date): string {
    return date.toISOString().split('.')[0] + 'Z'
}
