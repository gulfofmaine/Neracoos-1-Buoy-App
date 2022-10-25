import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RView } from "rlayers/RMap"

import { initialStoreState } from "./types"

const mapSlice = createSlice({
  name: "map-view",
  initialState: initialStoreState,
  reducers: {
    setView(state, action: PayloadAction<RView>) {
      state.view = action.payload
    },
  },
})

export const { setView } = mapSlice.actions
export const mapStateReducer = mapSlice.reducer
