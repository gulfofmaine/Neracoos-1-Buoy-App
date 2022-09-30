/**
 * Types related to unit managent
 */

export enum UnitSystem {
  metric = "Metric",
  english = "English",
}

export interface UnitStoreState {
  system: UnitSystem
}

export const initialState = { system: UnitSystem.english } as UnitStoreState
