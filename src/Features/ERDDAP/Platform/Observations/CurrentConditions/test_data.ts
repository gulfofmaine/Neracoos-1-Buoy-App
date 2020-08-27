import { prefferedDataTypes, prefferedDataTypesList, windDataTypes } from "./index"

import { platform } from "stories/platform"

export const wind_datasets = platform.properties.readings.filter((reading) =>
  windDataTypes.has(reading.data_type.standard_name)
)

export const filtered_datasets = platform.properties.readings.filter(
  (reading) => prefferedDataTypes.has(reading.data_type.standard_name) && reading.depth < 2
)
filtered_datasets.sort(
  (a, b) =>
    prefferedDataTypesList.indexOf(a.data_type.standard_name) -
    prefferedDataTypesList.indexOf(b.data_type.standard_name)
)
