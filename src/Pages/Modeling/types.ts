import type { RView } from "rlayers/RMap"

export interface Layer {
  id?: string
  vars: string[]
}

export const initialLayer: Layer = { vars: [] }

export const initialView: RView = { center: [-68.5, 43.5], zoom: 6 }
