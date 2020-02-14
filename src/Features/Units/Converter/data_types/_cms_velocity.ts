import convert from "convert-units"

import { DataTypeConversion, ConvertFrom } from "../conversions"

/**
 * Display cm/s velocities as knots or m/s
 */
export class CmsVelocity extends DataTypeConversion {
  /**
   * Display cm/s velocities as knots or m/s
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "cm/s", "m/s", "knot", "Meters/Second", "Knots")
  }

  convertFrom(value: number | string): ConvertFrom {
    return convert((value as number) / 100).from("m/s")
  }
}
