import type { RootState } from '@/shared/config'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { setAccessToken } from '@/entities/auth/model'
import { Mutex } from 'async-mutex'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://picassonova.online/api/v1/',
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

// create a new mutex
const mutex = new Mutex()
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery(
          {
            url: 'auth/refresh-token',
            method: 'POST',
          },
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(setAccessToken(refreshResult.data as { accessToken: string }))
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          // api.dispatch(loggedOut()) uncomment after merge logout
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
