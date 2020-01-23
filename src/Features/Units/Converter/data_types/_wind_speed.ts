import { DataTypeConversion } from "../conversions"

export class WindSpeed extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "m/s", "knot", "m/s", "m/h", "Knots", "Meters/Second", "Miles Per Hour")
  }
}
