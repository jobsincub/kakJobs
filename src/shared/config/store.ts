import { authApi } from '@/entities/auth/api'
import { authSlice } from '@/entities/auth/model/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
