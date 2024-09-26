import Highcharts from "highcharts"
import * as React from "react"
import {
  Chart,
  HighchartsChart,
  Legend,
  SplineSeries,
  Tooltip,
  HighchartsProvider,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"

import { LoadedData } from "./types"

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

export const ModelChart = ({ loaded }: Props) => {
  const data: LayerData[] = []

  loaded.forEach(({ item, layer, response }) => {
    layer.vars.forEach((l_var) => {
      if (item.properties) {
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
      }
    })
  })

  let by_standard = {}

  data.forEach((d) => {
    if (!by_standard.hasOwnProperty(d.standard_name)) {
      by_standard[d.standard_name] = []
    }

    by_standard[d.standard_name].push(d)
  })

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart colors={colorCycle}>
        <Chart />

        <Legend />

        <XAxis type="datetime" />

        {Object.keys(by_standard).map((key) => {
          const series = by_standard[key]

          return (
            <YAxis key={key}>
              <YAxis.Title>{series[0].unit}</YAxis.Title>
              {series.map((s) => {
                return (
                  <SplineSeries key={s.id} id={s.id} name={s.description} data={s.data} marker={{ enabled: false }} />
                )
              })}
            </YAxis>
          )
        })}
        <Tooltip />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
