import convert from "convert-units"

import { DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"

export class AirPressureHpa extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "hPa", "millibars", "hPa", "psi")
  }

  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.metric:
      case UnitSystem.imperial:
        return super.convertTo(value, unitSystem) as number
      case UnitSystem.mariners:
        return (
          convert(value)
            .from("hPa")
            .to("bar") * 1000
        )
    }
  }
}
