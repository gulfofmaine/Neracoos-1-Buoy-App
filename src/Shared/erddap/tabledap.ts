/**
 * Funtions for interacting with ERDDAP TableDAP datasets
 */

import { DataTimeSeries } from "Shared/timeSeries"

import { Constraints, ErddapJson } from "./types"
import { TimeSeriesType } from "Features/ERDDAP/types"

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
        constraintStr += "&" + encodeURIComponent(key + constraints[key])
      } else {
        constraintStr += "&" + encodeURIComponent(key + '"' + constraints[key] + '"')
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
  const serverTrailing = server + (server.endsWith("/") ? "" : "/")
  return new URL(`tabledap/${dataset}`, serverTrailing).href
}

/**
 * Return Tabledap URLs for a given protocol
 * @param server ERDDAP server root
 * @param dataset ERDDAP dataset
 * @param protocol Type of ERDDAP TableDAP URL to return
 * @param variables Array of variable strings to get from dataset
 * @param constraints Constraint object to filter dataset with.
 * @returns URL for a given protocol
 */
export function tabledapProtocolUrl(
  server: string,
  dataset: string,
  protocol: string,
  variables: string[],
  constraints: Constraints,
): string {
  return `${baseTabledapUrl(server, dataset)}.${protocol}?${variableString(variables)}${constraintsToString(
    constraints,
  )}`
}

/**
 * Tabledap HTML URL
 *
 * @param server ERDDAP server root
 * @param dataset ERDDAP dataset
 * @param variables Array of variable strings to get from dataset
 * @param constraints Constraint object to filter dataset with.
 */
export function tabledapHtmlUrl(
  server: string,
  dataset: string,
  variables: string[],
  constraints: Constraints,
): string {
  return tabledapProtocolUrl(server, dataset, "html", variables, constraints)
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
  return tabledapProtocolUrl(server, dataset, "json", variables, constraints)
}

/**
 * Reformat ERDDAP tableDAP JSON into TimeSeries.
 *
 * @param result JSON from ERDDAP dataset
 * @param variables Array of variable strings requested from dataset
 */
export function resultToTimeseries(
  result: ErddapJson,
  variables: string[],
  displayName?: string | null,
  type?: TimeSeriesType,
): DataTimeSeries[] {
  const output: DataTimeSeries[] = []

  const timeIndex = result.table.columnNames.indexOf("time")

  for (const variable of variables) {
    const varIndex = result.table.columnNames.indexOf(variable)
    output.push({
      name: variable,
      displayName: displayName || null,
      type: type as TimeSeriesType,
      timeSeries: result.table.rows
        .filter((row) => row[varIndex] !== null)
        .map((row) => ({
          reading: row[varIndex] as number,
          time: new Date(row[timeIndex] as string),
        }))
        .sort((a, b) => a.time.valueOf() - b.time.valueOf()),
      unit: result.table.columnUnits[varIndex],
    })
  }

  return output
}
