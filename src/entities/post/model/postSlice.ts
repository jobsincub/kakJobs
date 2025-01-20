import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

export interface PhotoFile {
  id: string
  url: string
  name?: string
}

interface PostState {
  currentStep: OrderStatus
  photos: PhotoFile[]
  description: string | null
}

const initialState: PostState = {
  currentStep: 1,
  photos: [],
  description: null,
}

export enum OrderStatus {
  addPhoto = 1,
  Cropping = 2,
  Filters = 3,
  Publications = 4,
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
    setPhoto(state, action: PayloadAction<{ url: string; name?: string }>) {
      state.photos.unshift({
        id: nanoid(),
        ...action.payload,
      })
      // TODO change to OrderStatus.Cropping
      state.currentStep = OrderStatus.Cropping
    },
    removePhoto(state, action: PayloadAction<string>) {
      const photo = state.photos.find(photo => photo.id === action.payload)

      if (photo) {
        URL.revokeObjectURL(photo.url)
      }

      state.photos = state.photos.filter(photo => photo.id !== action.payload)
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    reset(state) {
      state.photos.forEach(photo => URL.revokeObjectURL(photo.url))

      return initialState
    },
  },
  selectors: {
    selectStep: state => state.currentStep,
    selectPhotos: state => state.photos,
  },
})

export const { nextStep, previousStep, setDescription, reset, setPhoto, removePhoto } =
  postSlice.actions

export const { selectStep, selectPhotos } = postSlice.selectors
