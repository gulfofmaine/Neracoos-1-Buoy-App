import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import { unitReducer as unit } from "Features/Units"

const preloadedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    unit,
  },
  preloadedState: {
    unit: preloadedState,
  },
})

store.subscribe(() => {
  saveToLocalStorage(store.getState().unit)
})

export type RootState = ReturnType<typeof store.getState>

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem("unit", serializedState)
  } catch (e) {
    console.error("Could not save state", e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = sessionStorage.getItem("unit")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.error("Could not load state", e)
    return undefined
  }
}

export default function ReduxStore({ children }) {
  return <Provider store={store}>{children}</Provider>
}
