import { setAccessToken } from '@/entities/auth/model'
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
    resendVerificationEmail: builder.mutation<ApiResponse<void>, ResendRegistrationArgs>({
      query: params => ({
        body: params,
        method: 'POST',
        url: 'auth/resend-verification-email',
      }),
    }),
    passwordRecovery: builder.mutation<AuthResponse, { email: string; recaptcha_token: string }>({
      query: body => ({
        url: '/password-recovery',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSignInMutation, useResendVerificationEmailMutation } = authApi

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
