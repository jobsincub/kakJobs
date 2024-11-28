// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type VerificationData = {
  code: string
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://picassonova.online/api/v1/auth' }),
  endpoints: builder => ({
    verifyEmail: builder.query<VerificationData, string>({
      query: verificationData => ({
        url: `/verify-email`,
        method: 'POST',
        body: verificationData,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useVerifyEmailQuery } = authApi
