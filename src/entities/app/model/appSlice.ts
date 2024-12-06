import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Local = 'en' | 'ru'

type AppState = {
  local: Local
}

const initialState: AppState = {
  local: 'en',
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLocal: (state, action: PayloadAction<{ local: Local }>) => {
      state.local = action.payload.local
    },
  },
  selectors: {
    selectLocal: state => state.local,
  },
})

export const { changeLocal } = appSlice.actions
export const { selectLocal } = appSlice.selectors
