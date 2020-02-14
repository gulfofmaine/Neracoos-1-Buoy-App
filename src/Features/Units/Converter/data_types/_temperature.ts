import { DataTypeConversion } from "../conversions"

/**
 * Convert temperatures from celsius to fahrenheit
 */
export class Temperature extends DataTypeConversion {
  /**
   * Convert temperatures from celsius to fahrenheit
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "C", "C", "F", "Celsius", "Fahrenheit")
  }
}
