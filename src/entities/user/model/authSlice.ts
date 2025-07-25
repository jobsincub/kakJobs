import { refreshToken } from '@/shared/api'
import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'
import { oAuthApi } from '../api/oAuthApi'

type UserData = {
  email: string
  userName: string
  userId: number
  isBlocked: boolean
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
        isAnyOf(
          authApi.endpoints.signIn.matchFulfilled,
          refreshToken.fulfilled,
          oAuthApi.endpoints.googleLogin.matchFulfilled
        ),
        (state, { payload }) => {
          state.accessToken = payload.accessToken
        }
      )
      .addMatcher(
        isAnyOf(authApi.endpoints.logout.matchFulfilled, refreshToken.rejected),
        () => initialState
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.signIn.matchFulfilled,
          authApi.endpoints.me.matchFulfilled,
          oAuthApi.endpoints.googleLogin.matchFulfilled
        ),
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
    selectUserEmail: state => state.userData?.email,
    selectUserId: state => state.userData?.userId,
  },
})

export const { selectIsLoggedIn, selectUserName, selectUserEmail, selectUserId } =
  authSlice.selectors
