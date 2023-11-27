import { configureStore } from "@reduxjs/toolkit"

import { unitReducer as unit } from "Features/Units"

export const store = configureStore({
  reducer: {
    unit,
  },
})

export type RootState = ReturnType<typeof store.getState>
