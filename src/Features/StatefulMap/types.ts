import type { RView } from "rlayers/RMap"

export interface MapState {
  view?: RView
}

export const initialStoreState: MapState = {
  view: undefined,
}
