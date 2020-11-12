import * as Sentry from "@sentry/react"
import { data_types, Passthrough } from "./data_types"
import { DataTypeConversion } from "./conversions"

const possibleConverter = (data_type: string): DataTypeConversion | undefined => {
  return data_types[data_type]
}

/**
 * Given a known data type, return the DataTypeConversion
 *
 * @param data_type A known data type
 */
export const converter = (data_type: string): DataTypeConversion => {
  const dataConverter = possibleConverter(data_type)

  if (dataConverter) {
    return dataConverter
  }

  Sentry.captureMessage(`Invalid data type attempting to be converted ${data_type}`)

  return new Passthrough("unknown", "Unknown Data Type", "unknown", "Unknown")
}
