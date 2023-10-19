import { DataTypeConversion } from "../conversions"

/**
 * Convert wind speed between m/s and knots
 */
export class WindSpeed extends DataTypeConversion {
  /**
   * Convert wind speed between m/s and knots
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(
    public data_type: string,
    public display_name: string,
  ) {
    super(data_type, display_name, "m/s", "m/s", "knot", "Meters/Second", "Knots")
  }
}
