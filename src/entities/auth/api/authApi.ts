import { loggedOut, setAccessToken } from '@/entities/auth/model'
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
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
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
  }),
})

export const { useSignInMutation, useLogoutMutation } = authApi

type ApiResponse<T> = {
  data: T
  code: number
  extensions: Extension[]
}

type Extension = {
  message: string
  field: string | null
}
