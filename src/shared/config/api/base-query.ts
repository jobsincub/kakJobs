import type { RootState } from '@/shared/config'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const createBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')

      const token = (getState() as RootState).auth.accessToken

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })
