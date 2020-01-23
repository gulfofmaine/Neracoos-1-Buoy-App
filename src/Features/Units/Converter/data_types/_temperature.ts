import { DataTypeConversion } from "../conversions"

export class Temperature extends DataTypeConversion {
  constructor(public data_type: string, public display_name: string) {
    super(data_type, display_name, "C", "F", "C", "F", "Fahrenheit", "Celsius", "Fahrenheit")
  }
}
