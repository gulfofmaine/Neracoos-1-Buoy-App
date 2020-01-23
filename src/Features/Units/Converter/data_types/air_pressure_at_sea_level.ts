import convert from "convert-units"

import { DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"

class AirPressureAtSeaLevel extends DataTypeConversion {
  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.metric:
      case UnitSystem.imperial:
        return super.convertTo(value, unitSystem)
      case UnitSystem.mariners:
        return (
          convert(value)
            .from("hPa")
            .to("bar") * 1000
        )
    }
  }
}

export const air_pressure_at_sea_level = new AirPressureAtSeaLevel(
  "air_pressure_at_sea_level",
  "Air Pressure",
  "hPa",
  "millibars",
  "hPa",
  "psi"
)
