import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { initialState, UnitSystem } from "./types"

const unitSlice = createSlice({
  name: "unit",
  initialState,

  reducers: (create) => ({
    unitSwitch: create.reducer((state, action: PayloadAction<UnitSystem>) => {
      const system = action.payload
      state.system = system
    }),
  }),
})

export const { unitSwitch } = unitSlice.actions
export const unitReducer = unitSlice.reducer
