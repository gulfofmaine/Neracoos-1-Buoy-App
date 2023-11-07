import { configureStore } from "@reduxjs/toolkit"

import { mapStateReducer as mapState } from "Features/StatefulMap"
import { unitReducer as unit } from "Features/Units"

export const store = configureStore({
  reducer: {
    mapState,
    unit,
  },
})

export type RootState = ReturnType<typeof store.getState>
