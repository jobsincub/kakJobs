import type { AppDispatch, RootState } from '@/shared/config'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null
}>()
