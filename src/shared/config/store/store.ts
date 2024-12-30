import { appSlice } from '@/entities/app/model'
import { authApi } from '@/entities/auth/api'
import { authSlice } from '@/entities/auth/model/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '@/entities/posts/api/postsApi'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [appSlice.reducerPath]: appSlice.reducer,
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authApi.middleware, postsApi.middleware),
  })
}

setupListeners(makeStore().dispatch)

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
