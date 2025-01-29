import { createAsyncThunk } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppStore = () => useStore<AppStore>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null
}>()
