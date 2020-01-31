import { DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"

/**
 * Class designed to pass through any values without converting
 */
export class Passthrough extends DataTypeConversion {
  /**
   * Class designed to pass through any values without converting
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   * @param unit Scientific unit notation
   * @param unit_display_name Friendly unit name
   */
  constructor(
    public data_type: string,
    public display_name: string,
    public unit: string,
    public unit_display_name: string
  ) {
    super(data_type, display_name, unit, unit, unit, unit_display_name, unit_display_name)
  }

  public convertTo(value: number | string, unitSystem: UnitSystem): number | string {
    return value
  }
}
