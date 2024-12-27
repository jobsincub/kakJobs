import { loggedOut, setAccessToken } from '@/entities/auth/model'
import { baseQueryWithReauth } from '@/shared/api'
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
    resendVerificationEmail: builder.mutation<void, { email: string }>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/resend-verification-email',
      }),
    }),
    signUp: builder.mutation<void, { userName: string; email: string; password: string }>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/sign-up',
      }),
    }),
    createNewPassword: builder.mutation<
      ApiResponse<void>,
      { newPassword: string; recoveryCode: string }
    >({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/new-password',
      }),
    }),
    passwordRecovery: builder.mutation<
      ApiResponse<{ accessToken: string }>,
      { email: string; recaptchaToken: string }
    >({
      query: body => ({
        url: 'auth/password-recovery',
        method: 'POST',
        body,
      }),
    }),
    verifyEmail: builder.mutation<ApiResponse<void>, { code: string }>({
      query: verificationData => ({
        url: `auth/verify-email`,
        method: 'POST',
        body: verificationData,
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutMutation,
  useResendVerificationEmailMutation,
  useCreateNewPasswordMutation,
  usePasswordRecoveryMutation,
  useVerifyEmailMutation,
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
