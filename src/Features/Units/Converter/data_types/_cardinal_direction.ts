import { DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"
import { compassDirection } from "Shared/unitConversion"

/**
 * Convert degrees to cardinal (compass) direction
 */
export class CardinalDirection extends DataTypeConversion {
  /**
   * Convert degrees to cardinal (compass) direction
   */
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "degrees", "Degrees", "Cardinal Direction")
  }

  public convertTo(value: number, unitSystem: UnitSystem): number | string {
    switch (unitSystem) {
      case UnitSystem.metric:
        return value
      case UnitSystem.english:
        return compassDirection(value)[1]
    }
  }

  public convertToNumber(value: number, unitSystem: UnitSystem): number {
    return value
  }

  public displayName(unitSystem: UnitSystem): string {
    switch (unitSystem) {
      case UnitSystem.metric:
        return this.metric_unit_display ? this.metric_unit_display : this.metric_unit
      default:
        return ""
    }
  }
}
