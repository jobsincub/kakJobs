import { createAppAsyncThunk } from '@/shared/lib/store/redux'
import { createSlice, isFulfilled, type PayloadAction } from '@reduxjs/toolkit'

export type Locale = 'en' | 'ru'

type AppState = {
  locale: Locale
}

const initialState: AppState = {
  locale: 'en',
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialLocale: (state, action: PayloadAction<{ locale: Locale }>) => {
      state.locale = action.payload.locale
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isFulfilled(changeLocaleThunk),
      (state, action: PayloadAction<{ locale: Locale }>) => {
        state.locale = action.payload.locale
      }
    )
  },
  selectors: {
    selectLocale: state => state.locale,
  },
})

export const { selectLocale } = appSlice.selectors
export const { setInitialLocale } = appSlice.actions

export const changeLocaleThunk = createAppAsyncThunk<{ locale: Locale }, { locale: Locale }>(
  `${appSlice.name}/changeLocal`,
  async arg => {
    await fetch('/api/locale', {
      method: 'POST',
      body: JSON.stringify({ locale: arg.locale }),
    })

    return { locale: arg.locale }
  }
)
