/**
 * Time related functions.
 */

const HOUR = 1000 * 60 * 60
const HALF_DAY = HOUR * 12
const DAY = HOUR * 24
const THREE_DAYS = DAY * 3
const WEEK = DAY * 7
const YEAR = DAY * 365

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
 * Get correct start Date when setting a date range
 * @param date Date that you want to start a range with
 * @returns Returns the date accounting for hour offsets
 */

export function fullBeginningDateIso(date) {
  const newDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  )
  return newDate
}

/**
 * Get correct end Date when setting a date range (date increase by 1 to account for timezone)
 * @param date Date to end range with
 * @returns Date accounting for hour and date offsets (based on a relative time)
 */

export function manuallySetFullEODIso(date: Date) {
  date.setHours(23, 59, 59, 999)
  date.setDate(date.getDate() + 1)
  return date
}

/**
 * Get the current date in the formate that <input type="date"> accepts
 * @returns Current date in YYYY-MM-DD format
 */

export function getToday() {
  return new Date().toISOString().split("T")[0]
}

export function getIsoForPicker(date) {
  return date.toISOString().split("T")[0]
}

/**
 * ISO date without milliseconds.
 *
 * @param date
 * @returns ISO date string without trailing milliseconds.
 */
export function shortIso(date: Date): string {
  return date.toISOString().split(".")[0] + "Z"
}

/**
 * ISO date for display
 *
 * @param date
 * @returns ISO date in format: Weekday Month DD YYYY hh:mm:ss GMT
 */
export function displayShortIso(date: Date): string {
  const newDate = date.toISOString().split(".")[0].split("T").join(" ") + " GMT"
  return new Date(newDate).toString().split("GMT")[0] + " EST"
}

/**
 * ISO date for display
 *
 * @param date
 * @returns ISO date in format: DD Month hh:mm:ss
 */
export function shortestDisplayIso(date: Date): string {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`
}

/**
 * Round to the 5 minutes and set everything less to 0
 *
 * @param date Date
 */
export function roundDate(date: Date) {
  date.setUTCMinutes(Math.floor(date.getUTCMinutes() / 5) * 5)

  date.setSeconds(0)
  date.setMilliseconds(0)
}

/** Return a new date that is a number of hours before the specified one */
export function hoursBefore(dt: Date, numberOfHours: number): Date {
  return new Date(dt.valueOf() - HOUR * numberOfHours)
}

/**
 * Get a date that is an hour previous
 */
export function anHourAgoRounded(): Date {
  const hourAgo = new Date(Date.now() - HOUR)
  roundDate(hourAgo)
  return hourAgo
}

export function calcAnyHourAgoRounded(numberOfHours: number): Date {
  const numberOfHoursAgo = new Date(Date.now() - HOUR * numberOfHours)
  roundDate(numberOfHoursAgo)
  return numberOfHoursAgo
}

/**
 * Return a time 12 hours previous
 */
export function halfADayAgoRounded(): Date {
  const halfDay = new Date(Date.now() - HALF_DAY)

  roundDate(halfDay)

  return halfDay
}

/**
 * Get a date that is a day previous
 */
export function aDayAgoRounded(): Date {
  const dayAgo = new Date(Date.now() - DAY)

  roundDate(dayAgo)

  return dayAgo
}

export function threeDaysAgoRounded(): Date {
  const threeDaysAgo = new Date(Date.now() - THREE_DAYS)

  roundDate(threeDaysAgo)

  return threeDaysAgo
}

export function daysAgoRounded(numberOfDays): Date {
  const daysAgo = new Date(Date.now() - DAY * numberOfDays)

  roundDate(daysAgo)

  return daysAgo
}

/**
 * Get a date that is a week previous
 */
export function aWeekAgoRounded(): Date {
  const weekAgo = new Date(Date.now() - WEEK)

  roundDate(weekAgo)

  return weekAgo
}

/**
 * Get a date that is a month previous
 */
export function fourWeeksAgoRounded(): Date {
  const fourWeeks = new Date(Date.now() - WEEK * 4)

  roundDate(fourWeeks)

  return fourWeeks
}

/**
 * Return a date that is rounded to a year previous
 * @returns A year previous
 */
export function aYearAgoRounded(): Date {
  const yearAgo = new Date(Date.now() - YEAR)

  roundDate(yearAgo)

  return yearAgo
}

/**
 * Return a future date in time calculated by number of weeks
 * @param numberOfWeeks number of weeks into future to calculate
 * @returns Date that is that numberOfWeeks into future
 */
export function weeksInFuture(numberOfWeeks): Date {
  const weekFromToday = new Date(Date.now() + WEEK * numberOfWeeks)

  roundDate(weekFromToday)

  return weekFromToday
}

/**
 * Return a future date in time calculated by number of days
 * @param numberOfDays number of days into future to calculate
 * @returns Date that is that numberOfDays into future
 */
export function daysInFuture(numberOfDays): Date {
  const dayFromToday = new Date(Date.now() + DAY * numberOfDays)

  roundDate(dayFromToday)

  return dayFromToday
}
