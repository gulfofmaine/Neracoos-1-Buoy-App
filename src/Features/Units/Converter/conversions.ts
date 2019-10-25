import convert from "convert-units"

import { UnitSystem } from "../types"

export interface ConvertFrom {
  to: (output_unit: string) => number
}

export class DataTypeConversion {
  constructor(
    public data_type: string,
    public display_name: string,
    private source_unit: string,
    private mariners_unit: string,
    private metric_unit: string,
    private imperial_unit: string,
    private mariners_unit_display?: string,
    private metric_unit_display?: string,
    private imperial_unit_display?: string
  ) {}

  /**
   * Convert a value from it's source value to a given unit system.
   *
   * @param value Value that should be converted
   * @param unitSystem Unit system that the value should be converted into
   */
  public convertTo(value: number, unitSystem: UnitSystem): number {
    const to = this.toUnitSystem(unitSystem)
    return this.convertFrom(value).to(to)
  }

  /**
   * Overriddable conversion source
   *
   * @param value Value that should be converted
   */
  protected convertFrom(value: number): ConvertFrom {
    return convert(value).from(this.source_unit)
  }

  protected toUnitSystem(unitSystem: UnitSystem): string {
    let to: string

    switch (unitSystem) {
      case UnitSystem.metric:
        to = this.metric_unit
        break
      case UnitSystem.imperial:
        to = this.imperial_unit
        break
      default:
        to = this.mariners_unit
    }
    return to
  }

  /**
   * Return the display name for the given unit system
   * @param unitSystem Unit system that the name should be displayed for
   */
  public displayName(unitSystem: UnitSystem): string {
    switch (unitSystem) {
      case UnitSystem.metric:
        return this.metric_unit_display ? this.metric_unit_display : this.metric_unit
      case UnitSystem.imperial:
        return this.imperial_unit_display ? this.imperial_unit_display : this.imperial_unit
      case UnitSystem.mariners:
        return this.mariners_unit_display ? this.mariners_unit_display : this.mariners_unit
    }
  }
}
