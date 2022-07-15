import type { RView } from "rlayers/RMap"
import { IItem } from "@gulfofmaine/tsstac"

export interface Layer {
  id?: string
  vars: string[]
}

export const initialLayer: Layer = { vars: [] }

export const initialView: RView = { center: [-68.5, 43.5], zoom: 6 }

export type EDRValues = Array<string | number>

export interface EDRResponse {
  domain: {
    axes: {
      [key: string]: {
        values: EDRValues
      }
    }
    domainType: string
    referencing: []
    type: string
  }
  parameters: {
    [key: string]: {
      description: {
        en: string
      }
      observedProperty: {
        id: string
        label: {
          en: string
        }
      }
      type: string
      unit: {
        label: {
          en: string
        }
      }
    }
  }
  ranges: {
    [key: string]: {
      axisNames: string[]
      dataType: string
      shape: number[]
      values: EDRValues
    }
  }
  type: string
}

export interface LoadedData {
  item: IItem
  layer: Layer
  response: EDRResponse
}
