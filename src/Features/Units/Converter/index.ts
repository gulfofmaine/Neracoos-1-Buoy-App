import { data_types } from "./data_types"
import { DataTypeConversion } from "./conversions"

/**
 * Given a known data type, return the DataTypeConversion
 *
 * @param data_type A known data type
 */
export const converter = (data_type: string): DataTypeConversion => {
  return data_types[data_type]
}
