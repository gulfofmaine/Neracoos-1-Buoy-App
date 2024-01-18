import convert from "convert-units"

import { UnitSystem } from "../types"

export interface ConvertFrom {
  to: (output_unit: string) => number
}

/**
 * Base DataTypeConversion class
 *
 * Uses convert-units to change values from source unit
 * to specified unit system.
 *
 * Individual methods can be overridden for units
 * that are currently unsupported by
 * convert-units
 */
export class DataTypeConversion {
  /**
   * Create a new DataTypeConversion
   *
   * @param data_type ERDDAP data_type/CF standard name
   * @param display_name Public friendly name
   * @param source_unit Unit type that convert-units understands as input
   * @param metric_unit Unit type that convert-units understands as output
   * @param english_unit Unit type that convert-units understands as output
   * @param metric_unit_display Friendly unit name
   * @param english_unit_display Friendly unit name
   */
  constructor(
    public data_type: string,
    public display_name: string,
    protected source_unit: string,
    protected metric_unit: string,
    protected english_unit: string,
    protected metric_unit_display?: string,
    protected english_unit_display?: string,
  ) {}

  /**
   * Convert a value from it's source value to a given unit system.
   *
   * @param value Value that should be converted
   * @param unitSystem Unit system that the value should be converted into
   */
  public convertTo(value: number | string, unitSystem: UnitSystem): number | string {
    const to = this.toUnitSystem(unitSystem)
    return this.convertFrom(value).to(to)
  }

  /**
   * Convert a value from it's source to a given unit system as a number
   *
   * @param value Value that should be converted to a number
   * @param unitSystem Unit system that the value should be converted to
   */
  public convertToNumber(value: number | string, unitSystem: UnitSystem): number {
    return Number(this.convertTo(value, unitSystem))
  }

  /**
   * Overriddable conversion source
   *
   * @param value Value that should be converted
   */
  protected convertFrom(value: number | string): ConvertFrom {
    return convert(value as number).from(this.source_unit)
  }

  protected toUnitSystem(unitSystem: UnitSystem): string {
    let to: string

    switch (unitSystem) {
      case UnitSystem.metric:
        to = this.metric_unit
        break
      default:
        to = this.english_unit
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
      default:
        return this.english_unit_display ? this.english_unit_display : this.english_unit
    }
  }

  public unitName(unitSystem: UnitSystem): string {
    switch (unitSystem) {
      case UnitSystem.metric:
        return this.metric_unit
      default:
        return this.english_unit
    }
  }
}
