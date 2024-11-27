import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    // app: appReducer,
    // auth: authReducer,
    // [cardsApi.reducerPath]: cardsApi.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cardsApi.middleware),
})

setupListeners(store.dispatch) // Добавляем эту строчку для refetchOfFocus и refetchOnReconnect
