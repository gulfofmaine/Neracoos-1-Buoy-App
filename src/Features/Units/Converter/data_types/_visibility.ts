import { UnitSystem } from "../../types"
import { DataTypeConversion } from "../conversions"

export class Visibility extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "m", "nMi", "km", "mi", "Nautical Miles", "Kilometers", "Miles")
  }

  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.mariners:
        return value / 1852

      default:
        return super.convertTo(value, unitSystem) as number
    }
  }
}
