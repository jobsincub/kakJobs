import { refreshToken } from '@/shared/api/baseQueryWithReauth'
import { createSlice, isAnyOf } from '@reduxjs/toolkit'
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(authApi.endpoints.signIn.matchFulfilled, refreshToken.fulfilled),
        (state, { payload }) => {
          state.accessToken = payload.data.accessToken
        }
      )
      .addMatcher(
        isAnyOf(authApi.endpoints.logout.matchFulfilled, refreshToken.rejected),
        () => initialState
      )
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
    selectUserName: state => state.userData?.userName,
  },
})

export const { selectIsLoggedIn, selectUserName } = authSlice.selectors
