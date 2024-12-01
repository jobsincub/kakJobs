import type { RootState } from '@/shared/config/store'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const createBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })
