import { DataTypeConversion } from "../conversions"

export class WaveHeight extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "m", "ft", "m", "ft", "Feet", "Meters", "Feet")
  }
}
