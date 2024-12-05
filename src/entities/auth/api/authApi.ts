import { setAccessToken } from '@/entities/auth/model'
import { createBaseQuery } from '@/shared/config'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: createBaseQuery('https://picassonova.online/api/v1/auth'),
  endpoints: builder => ({
    signIn: builder.mutation<
      ApiResponse<{ accessToken: string }>,
      { email: string; password: string }
    >({
      query: body => ({
        url: '/sign-in',
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
    verifyEmail: builder.mutation<string, string>({
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
