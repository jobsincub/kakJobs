import { baseQueryWithReauth } from '@/shared/api'

import { createApi } from '@reduxjs/toolkit/query/react'

export const oAuthApi = createApi({
  reducerPath: 'oAuthApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['user'],
  endpoints: builder => ({
    googleLogin: builder.mutation<
      { accessToken: string; email: string },
      { redirectUrl: string; code: string }
    >({
      query: body => ({
        url: 'auth/google/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    githubUpdateTokens: builder.mutation<{ accessToken: string }, void>({
      query: () => ({
        url: 'auth/github/update-tokens',
        method: 'POST',
      }),
      invalidatesTags: ['user'],
    }),
  }),
})

export const { useGoogleLoginMutation, useGithubUpdateTokensMutation } = oAuthApi
