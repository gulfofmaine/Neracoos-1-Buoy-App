/**
 * Funtions for interacting with ERDDAP TableDAP datasets
 */

import { DataTimeSeries } from "Shared/timeSeries"

import { Constraints, ErddapJson } from "./types"

/**
 * Transform ERDDAP constraints from a object into a URL valid string
 *
 * @param constraints ERDDAP constraints
 */
export function constraintsToString(constraints: Constraints): string {
  let constraintStr: string = ""

  for (const key in constraints) {
    if (constraints.hasOwnProperty(key)) {
      const constraint = constraints[key]
      if (typeof constraint === "number") {
        constraintStr += "&" + key + constraints[key]
      } else {
        constraintStr += "&" + key + "%22" + constraints[key] + "%22"
      }
    }
  }

  return constraintStr
}

/**
 * Return ERDDAP variable string to request from dataset
 * @param variables Array of variable strings to request from dataset
 */
export function variableString(variables: string[]): string {
  const vars = ["time", ...variables]
  return encodeURIComponent(vars.join(","))
}

/**
 * Return the base URL for a tabledap dataset
 *
 * @param server ERDDAP server root
 * @param dataset ERDDAP dataset
 */
export function baseTabledapUrl(server: string, dataset: string): string {
  return `${server}/tabledap/${dataset}`
}

/**
 * Tabledap HTML URL
 *
 * @param server
 * @param dataset
 * @param variables
 * @param constraints
 */
export function tabledapHtmlUrl(
  server: string,
  dataset: string,
  variables: string[],
  constraints: Constraints
): string {
  return `${baseTabledapUrl(server, dataset)}.html?${variableString(variables)}${constraintsToString(constraints)}`
}

/**
 * Format the tableDAP URL for a dataset json
 *
 * @param server ERDDAP server root
 * @param dataset ERDDAP dataset
 * @param variables Array of variable strings to get from dataset
 * @param constraints Constraint object to filter dataset with.
 */
export function tabledapUrl(server: string, dataset: string, variables: string[], constraints: Constraints): string {
  return `${baseTabledapUrl(server, dataset)}.json?${variableString(variables)}${constraintsToString(constraints)}`
}

/**
 * Reformat ERDDAP tableDAP JSON into TimeSeries.
 *
 * @param result JSON from ERDDAP dataset
 * @param variables Array of variable strings requested from dataset
 */
export function resultToTimeseries(result: ErddapJson, variables: string[]): DataTimeSeries[] {
  const output: DataTimeSeries[] = []

  const timeIndex = result.table.columnNames.indexOf("time")

  for (const variable of variables) {
    const varIndex = result.table.columnNames.indexOf(variable)

    output.push({
      name: variable,
      timeSeries: result.table.rows.map((row) => ({
        reading: row[varIndex] as number,
        time: new Date(row[timeIndex]),
      })),
      unit: result.table.columnUnits[varIndex],
    })
  }

  return output
}
