import { baseQueryWithReauth } from '@/shared/api'
import { loggedOut, setAccessToken } from '@/entities/auth/model'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    signIn: builder.mutation<
      ApiResponse<{ accessToken: string }>,
      { email: string; password: string }
    >({
      query: body => ({
        url: 'auth/sign-in',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled
          dispatch(setAccessToken(data.data))
        } catch (error) {
          console.error(error)
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled
          dispatch(loggedOut())
        } catch (error) {
          console.error('Logout failed:', error)
        }
      },
    }),
    resendVerificationEmail: builder.mutation<ApiResponse<void>, ResendRegistrationArgs>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/resend-verification-email',
      }),
    }),
    createNewPassword: builder.mutation<ApiResponse<void>, CreateNewPasswordArgs>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/new-password',
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useLogoutMutation,
  useResendVerificationEmailMutation,
  useCreateNewPasswordMutation,
} = authApi

type ApiResponse<T> = {
  data: T
  code: number
  extensions: Extension[]
}

type Extension = {
  message: string
  field: string | null
}

type ResendRegistrationArgs = {
  email: string
}
type CreateNewPasswordArgs = {
  newPassword: string
  recoveryCode: string
}
