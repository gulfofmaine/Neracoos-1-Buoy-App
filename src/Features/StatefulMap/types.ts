import { MapView } from "components/Map"

export interface MapState {
  view?: MapView
}

export const initialStoreState: MapState = {
  view: undefined,
}
