/**
 * Types related to unit managent
 */

export enum UnitSystem {
  metric = "Metric",
  english = "English"
}

export interface UnitStoreState {
  system: UnitSystem
}

export const initialStoreState: UnitStoreState = {
  system: UnitSystem.english
}
