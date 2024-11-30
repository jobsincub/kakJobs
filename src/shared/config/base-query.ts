import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { AppRootStateType } from './store'

export const createBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppRootStateType).auth.accessToken

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })
