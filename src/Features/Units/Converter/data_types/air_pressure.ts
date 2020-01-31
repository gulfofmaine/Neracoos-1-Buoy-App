import convert from "convert-units"

import { ConvertFrom, DataTypeConversion } from "../conversions"
import { UnitSystem } from "Features/Units/types"

class AirPressure extends DataTypeConversion {
  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.imperial:
        return value / 33.863886666667
      case UnitSystem.metric:
        return value
    }
  }
  protected convertFrom(value: number): ConvertFrom {
    return convert(value / 1000).from("bar")
  }
}

export const air_pressure = new AirPressure(
  "air_pressure",
  "Barometric Pressure",
  "mbar",
  "hPa",
  "inches",
  "Millibars",
  "Inches"
)
