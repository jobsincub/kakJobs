import { createSlice, isAnyOf, type PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'

type UserData = {
  email: string
  userName: string
  userId: string
}

type AuthState = {
  accessToken: null | string
  isLoggedIn: boolean
  userData: null | UserData
}

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  userData: null,
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
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(authApi.endpoints.signIn.matchFulfilled, authApi.endpoints.me.matchFulfilled),
        state => {
          state.isLoggedIn = true
        }
      )
      .addMatcher(authApi.endpoints.me.matchFulfilled, (state, { payload }) => {
        state.userData = payload
      })
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
  },
})

export const { setAccessToken, loggedOut } = authSlice.actions
export const { selectIsLoggedIn } = authSlice.selectors
