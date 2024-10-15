import { DataTypeConversion } from "../conversions"

/**
 * Convert height between meters and feet
 */
export class WaveHeight extends DataTypeConversion {
  /**
   * Convert height between meters and feet
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(
    public data_type: string,
    public display_name: string,
  ) {
    super(data_type, display_name, "m", "m", "ft", "Meters", "ft")
  }
}
