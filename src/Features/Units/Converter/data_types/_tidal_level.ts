import { DataTypeConversion } from "../conversions"

/**
 * Convert tide heights from meters to feet
 */
export class TidalLevel extends DataTypeConversion {
  /**
   * Convert tide heights from meters to feet
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

export const getValueWithOffset = (value: number, offset: number) => {
  return value - offset
}
