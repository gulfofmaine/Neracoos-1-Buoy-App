import { DataTypeConversion } from "../conversions"

/**
 * Display hPa (or millibar) Air Pressure as psi
 */
export class AirPressureHpa extends DataTypeConversion {
  /**
   * Display hPa (or millibar) Air Pressure as psi
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "hPa", "hPa", "psi")
  }
}
