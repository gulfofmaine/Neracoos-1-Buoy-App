/**
 * Types related to unit managent
 */

export enum UnitSystem {
  metric = "Metric",
  imperial = "Imperial"
}

export interface UnitStoreState {
  system: UnitSystem
}

export const initialStoreState: UnitStoreState = {
  system: UnitSystem.imperial
}
