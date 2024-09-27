import { useRef, PropsWithChildren } from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import { unitReducer as unit } from "Features/Units"

const preloadedState = loadFromLocalStorage()

export const makeStore = () => {
  const store = configureStore({
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

  return store
}

export type MakeStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<MakeStore["getState"]>

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

export default function ReduxStore({ children }: PropsWithChildren) {
  const storeRef = useRef<MakeStore>()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
