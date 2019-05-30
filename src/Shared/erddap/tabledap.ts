/**
 * Funtions for interacting with ERDDAP TableDAP datasets
 */

import { DataTimeSeries } from "Shared/timeSeries"

import { Constraints, ErddapJson } from "./types"

/**
 * Transform ERDDAP constraints from a object into a URL valid string
 * @param constraints ERDDAP constraints
 */
export function constraintsToString(constraints: Constraints): string {
  let constraintStr: string = ""

  for (const key in constraints) {
    if (constraints.hasOwnProperty(key)) {
      // constraintStr += "&" + key + "%22" + constraints[key] + "%22"
      constraintStr += "&" + key + constraints[key]
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
  return vars.join(",")
}

/**
 * Format the tableDAP URL for a dataset
 * @param server ERDDAP server root
 * @param dataset ERDDAP dataset
 * @param variables Array of variable strings to get from dataset
 * @param constraints Constraint object to filter dataset with.
 */
export function tabledapUrl(server: string, dataset: string, variables: string[], constraints: Constraints): string {
  return `${server}/tabledap/${dataset}.json?${variableString(variables)}${constraintsToString(constraints)}`
}

// export async function fetchDataset(
//   server: string,
//   dataset: string,
//   variables: string[],
//   constraints: Constraints
// ): Promise<ErddapJson> {
//   const url = tabledapUrl(server, dataset, variables, constraints)
//   const proxyUrl = proxytizeUrl(url)

//   // tslint:disable-next-line:no-console
//   console.log(url, proxyUrl)

//   const result = await fetch(proxyUrl)

//   return result.json()
// }

/**
 * Reformat ERDDAP tableDAP JSON into TimeSeries.
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
      timeSeries: result.table.rows.map(row => ({
        reading: row[varIndex] as number,
        time: new Date(row[timeIndex])
      })),
      unit: result.table.columnUnits[varIndex]
    })
  }

  return output
}
