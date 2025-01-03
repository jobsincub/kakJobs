import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  currentStep: number
  image: File[]
  description: string | null
}

const initialState: PostState = {
  currentStep: 0,
  image: [],
  description: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep += 1
    },
    previousStep(state) {
      state.currentStep -= 1
    },
    setImage(state, action: PayloadAction<File>) {
      state.image = [action.payload, ...state.image]
      state.currentStep = 1
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    reset() {
      return initialState
    },
  },
})

export const { nextStep, previousStep, setImage, setDescription, reset } = postSlice.actions
