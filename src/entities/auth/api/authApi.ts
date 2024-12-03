import { createBaseQuery } from '@/shared/config/base-query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: createBaseQuery('https://picassonova.online/api/v1/auth'),
  endpoints: builder => ({
    signIn: builder.mutation<AuthResponse, { email: string; password: string }>({
      query: body => ({
        url: '/sign-in',
        method: 'POST',
        body,
      }),
    }),
    verifyEmail: builder.mutation<AuthResponse, string>({
      query: verificationData => ({
        url: `/verify-email`,
        method: 'POST',
        body: verificationData,
      }),
    }),
  }),
})

export const { useSignInMutation, useVerifyEmailMutation } = authApi

// type VerificationData = {
//   code: string
// }

type ApiResponse<T> = {
  data: T
  code: number
  extensions: Extension[]
}

type Extension = {
  message: string
  field: string | null
}

type SuccessResponse = {
  accessToken: string
}

type ErrorResponseData = null

type AuthResponse = ApiResponse<SuccessResponse> | ApiResponse<ErrorResponseData>
