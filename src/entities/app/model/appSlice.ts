import { createAppAsyncThunk } from '@/shared/lib'
import { createSlice, isFulfilled, type PayloadAction } from '@reduxjs/toolkit'

export type Local = 'en' | 'ru'

type AppState = {
  local: Local
}

const initialState: AppState = {
  local: 'en',
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      isFulfilled(initializeLocal, changeLocal),
      (state, action: PayloadAction<{ local: Local }>) => {
        state.local = action.payload.local
      }
    )
  },
  selectors: {
    selectLocal: state => state.local,
  },
})

export const { selectLocal } = appSlice.selectors

export const initializeLocal = createAppAsyncThunk<{ local: Local }>(
  `${appSlice.name}/initializeLocal`,
  async (_, { rejectWithValue }) => {
    const localFromStorage = localStorage.getItem('locale')

    if (localFromStorage) {
      if (localFromStorage === 'en' || localFromStorage === 'ru') {
        return { local: localFromStorage }
      }
    } else {
      const localFromNavigator = navigator.language.split('-')[0]
      if (localFromNavigator === 'en' || localFromNavigator === 'ru') {
        localStorage.setItem('locale', localFromNavigator)

        return { local: localFromNavigator }
      }
    }

    return rejectWithValue(null)
  }
)

export const changeLocal = createAppAsyncThunk<{ local: Local }, { local: Local }>(
  `${appSlice.name}/changeLocal`,
  async arg => {
    localStorage.setItem('locale', arg.local)

    return arg
  }
)
