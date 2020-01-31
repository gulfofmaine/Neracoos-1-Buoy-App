import { UnitSystem } from "../../types"
import { DataTypeConversion } from "../conversions"

export class Visibility extends DataTypeConversion {
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
