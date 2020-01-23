import { DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"
import { compassDirection } from "Shared/unitConversion"

export class CardinalDirection extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "degrees", "Cardinal Direction", "Degrees", "Cardinal Direction")
  }

  public convertTo(value: number, unitSystem: UnitSystem): number | string {
    switch (unitSystem) {
      case UnitSystem.metric:
        return value
      case UnitSystem.imperial:
      case UnitSystem.mariners:
        return compassDirection(value)[1]
    }
  }
}
