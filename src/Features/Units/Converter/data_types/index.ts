import { DataTypeConversion } from "../conversions"

import { air_pressure } from "./air_pressure"
import { max_visibility } from "./max_visibility"
import { min_visibility } from "./min_visibility"

interface DataTypesObject {
  [key: string]: DataTypeConversion
}

export const data_types: DataTypesObject = {
  air_pressure,
  max_visibility,
  max_wave_height: new DataTypeConversion(
    "max_wave_height",
    "Maximum Wave Height",
    "m",
    "ft",
    "m",
    "ft",
    "Feet",
    "Meters",
    "Feet"
  ),
  min_visibility,
  sea_surface_wave_significant_height: new DataTypeConversion(
    "max_wave_height",
    "Wave Height",
    "m",
    "ft",
    "m",
    "ft",
    "Feet",
    "Meters",
    "Feet"
  ),
  significant_height_of_wind_and_swell_waves: new DataTypeConversion(
    "max_wave_height",
    "Significant Wave Height",
    "m",
    "ft",
    "m",
    "ft",
    "Feet",
    "Meters",
    "Feet"
  ),
  significant_height_of_wind_and_swell_waves_3: new DataTypeConversion(
    "max_wave_height",
    "Significant Wave Height",
    "m",
    "ft",
    "m",
    "ft",
    "Feet",
    "Meters",
    "Feet"
  ),
  significant_wave_height: new DataTypeConversion(
    "max_wave_height",
    "Significant Wave Height",
    "m",
    "ft",
    "m",
    "ft",
    "Feet",
    "Meters",
    "Feet"
  )
}
