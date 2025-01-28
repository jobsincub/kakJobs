import { appSlice } from '@/entities/app'
import { postApi, postSlice } from '@/entities/post'
import { authApi, authSlice } from '@/entities/user'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [appSlice.reducerPath]: appSlice.reducer,
      [postApi.reducerPath]: postApi.reducer,
      [postSlice.reducerPath]: postSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authApi.middleware, postApi.middleware),
  })
}
