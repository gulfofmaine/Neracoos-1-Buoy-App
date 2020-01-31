import { DataTypeConversion } from "../conversions"

export class AirPressureHpa extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "hPa", "hPa", "psi")
  }
}
