import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

interface PostFile {
  id: string
  imageUrl: string
}

interface PostState {
  currentStep: OrderStatus
  photos: PostFile[]
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
    setPhoto(state, action: PayloadAction<string>) {
      state.photos.unshift({
        id: nanoid(),
        imageUrl: action.payload,
      })
      // TODO change to OrderStatus.Cropping
      state.currentStep = OrderStatus.Filters
    },
    removePhoto(state, action: PayloadAction<string>) {
      state.photos = state.photos.filter(photo => photo.id !== action.payload)
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    reset() {
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
