import { BACKEND_BASE_URL } from '@/shared/config'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
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
        await api.dispatch(refreshToken({ api, extraOptions })).unwrap()

        result = await baseQuery(args, api, extraOptions)
      } catch {
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

interface RefreshTokenResponse {
  data: { accessToken: string }
}

interface RefreshTokenArgs {
  api: BaseQueryApi
  extraOptions: object
}

export const refreshToken = createAsyncThunk<RefreshTokenResponse, RefreshTokenArgs>(
  'authApi/refreshToken',
  async ({ api, extraOptions }, { rejectWithValue }) => {
    const refreshResult = await baseQuery(
      {
        url: 'auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      const accessToken = (refreshResult.data as ApiResponse<{ accessToken: string }>).data
        .accessToken

      return { data: { accessToken } }
    } else {
      return rejectWithValue('11222')
    }
  }
)
