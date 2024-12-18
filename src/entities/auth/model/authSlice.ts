import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  accessToken: null | string
}

const initialState: AuthState = {
  accessToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
    loggedOut: () => initialState,
  },
})

export const { setAccessToken, loggedOut } = authSlice.actions
