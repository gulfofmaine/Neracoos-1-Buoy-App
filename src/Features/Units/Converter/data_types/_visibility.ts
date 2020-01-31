import { UnitSystem } from "../../types"
import { DataTypeConversion } from "../conversions"

/**
 * Convert visibility from meters to kilometers and nautical miles
 */
export class Visibility extends DataTypeConversion {
  /**
   * Convert visibility from meters to kilometers and nautical miles
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   */
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "m", "km", "nMi", "Kilometers", "Nautical Miles")
  }

  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.imperial:
        return value / 1852

      default:
        return super.convertTo(value, unitSystem) as number
    }
  }
}
