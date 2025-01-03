import { appSlice } from '@/entities/app'
import { authApi, authSlice } from '@/entities/user'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [appSlice.reducerPath]: appSlice.reducer,
      // [postApi.reducerPath]: postApi.reducer,
      // [postSlice.reducerPath]: postSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
  })
}

setupListeners(makeStore().dispatch)
