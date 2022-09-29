import Highcharts from "highcharts"
import React from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  SplineSeries,
  Tooltip,
  withHighcharts,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { IItem } from "@gulfofmaine/tsstac"

import { colors, colorCycle } from "Shared/colors"
import { round } from "Shared/math"

import { Layer, EDRResponse, LoadedData } from "./types"

// interface LoadedData {
//   item: IItem
//   layer: Layer
//   response: EDRResponse
// }

interface Props {
  loaded: LoadedData[]
}

interface LayerData {
  id: string
  description: string
  data: (string | number | Date)[][]
  directional: boolean
  unit: string
  standard_name: string
}

const ModelChartBase = ({ loaded }: Props) => {
  const data: LayerData[] = []

  loaded.forEach(({ item, layer, response }) => {
    layer.vars.forEach((l_var) => {
      const unit = item.properties["cube:variables"][l_var].unit
      const layer_data = {
        id: `${layer.id}-${l_var}`,
        description: `${item.id} - ${item.properties["cube:variables"][l_var].description}`,
        data: response.ranges[l_var].values.map((v, i) => [
          new Date(response.domain.axes.t.values[i]).valueOf(),
          round(v as number, 2),
        ]),
        directional: unit === "degree",
        unit,
        standard_name: response.parameters[l_var].observedProperty.id,
      }

      data.push(layer_data)
    })
  })
  //   debugger

  return (
    <HighchartsChart colors={colorCycle}>
      <Chart />

      <Legend />

      <XAxis type="datetime" />

      {/* <YAxis>
        {data.map((d) => (
          <SplineSeries key={d.id} id={d.id} name={d.description} data={d.data} marker={{ enabled: false }} />
        ))}
      </YAxis> */}
      {data.map((d) => (
        <YAxis key={d.id}>
          <YAxis.Title>{d.unit}</YAxis.Title>
          <SplineSeries id={d.id} name={d.description} data={d.data} marker={{ enabled: false }} />
        </YAxis>
      ))}
      <Tooltip />
    </HighchartsChart>
  )
}

export const ModelChart = withHighcharts(ModelChartBase, Highcharts)
