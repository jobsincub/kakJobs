import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

interface Photo {
  id: string
  originalImageUrl: string
  updatedImageUrl: string | null
}

interface PostState {
  currentStep: OrderStatus
  photos: Photo[]
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
    setPhoto(state, action: PayloadAction<Photo['originalImageUrl']>) {
      state.photos.unshift({
        id: nanoid(),
        originalImageUrl: action.payload,
        updatedImageUrl: null,
      })
      // TODO change to OrderStatus.Cropping
      state.currentStep = OrderStatus.Filters
    },
    updatePhoto(state, action: PayloadAction<Omit<Photo, 'originalImageUrl'>>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)
      if (photo) {
        photo.updatedImageUrl = action.payload.updatedImageUrl
      }
    },
    removePhoto(state, action: PayloadAction<Photo['id']>) {
      state.photos = state.photos.filter(photo => photo.id !== action.payload)
    },
    setDescription(state, action: PayloadAction<PostState['description']>) {
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

export const { nextStep, previousStep, setDescription, reset, setPhoto, removePhoto, updatePhoto } =
  postSlice.actions

export const { selectStep, selectPhotos } = postSlice.selectors
