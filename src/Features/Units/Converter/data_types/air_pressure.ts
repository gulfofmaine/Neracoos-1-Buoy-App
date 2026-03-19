import convert from "convert-units"

import { UnitSystem } from "Features/Units/types"

import { type ConvertFrom, DataTypeConversion } from "../conversions"

class AirPressure extends DataTypeConversion {
  public convertTo(value: number, unitSystem: UnitSystem): number {
    switch (unitSystem) {
      case UnitSystem.english:
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
  "Inches",
)
