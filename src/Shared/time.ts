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
 * ISO date without milliseconds.
 *
 * @param date
 * @returns ISO date string without trailing milliseconds.
 */
export function shortIso(date: Date): string {
  return date.toISOString().split(".")[0] + "Z"
}

/**
 * Round to the 5 minutes and set everything less to 0
 *
 * @param date Date
 */
function roundDate(date: Date) {
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

export const timeframeOptions = [
  { label: "6 hours ago", function: halfADayAgoRounded() },
  { label: "24 hours ago", function: aDayAgoRounded() },
  { label: "3 days ago", function: threeDaysAgoRounded() },
  { label: "1 week ago", function: aWeekAgoRounded() },
  { label: "4 weeks ago", function: fourWeeksAgoRounded() },
]
