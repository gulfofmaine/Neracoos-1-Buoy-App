import { UnitSystem } from "../../types"
import { DataTypeConversion } from "../conversions"

export class Visibility extends DataTypeConversion {
  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.mariners:
        return value / 1852

      default:
        return super.convertTo(value, unitSystem)
    }
  }
}
