import { createAppAsyncThunk } from '@/shared/lib'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { postApi, type PostData } from '../api/postApi'
import { buildImagesUploadFormData } from '../lib/buildImagesUploadFormData'

export enum AspectRatio {
  Original = 0,
  Square = 1,
  Portrait = 4 / 5,
  Widescreen = 16 / 9,
}

export type Filter = {
  name: string
  filterStyle: string
}

export interface Photo {
  id: string
  originalImageUrl: string
  updatedImageUrl: string
  zoom: number
  aspectRatio: AspectRatio
  filter: Filter
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
      state.photos.push({
        id: nanoid(),
        originalImageUrl: action.payload,
        updatedImageUrl: action.payload,
        zoom: 1,
        aspectRatio: AspectRatio.Original,
        filter: { name: 'Default', filterStyle: '' },
      })
      state.currentStep = OrderStatus.Cropping
    },
    updateUrlPhoto(state, action: PayloadAction<Pick<Photo, 'updatedImageUrl' | 'id'>>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)
      if (photo) {
        photo.updatedImageUrl = action.payload.updatedImageUrl
      }
    },
    updateZoomPhoto(state, action: PayloadAction<Pick<Photo, 'zoom' | 'id'>>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)
      if (photo) {
        photo.zoom = action.payload.zoom
      }
    },
    updateAspectRatioPhoto(state, action: PayloadAction<Pick<Photo, 'aspectRatio' | 'id'>>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)
      if (photo) {
        photo.aspectRatio = action.payload.aspectRatio
      }
    },
    updateFilterPhoto(state, action: PayloadAction<Pick<Photo, 'filter' | 'id'>>) {
      const photo = state.photos.find(photo => photo.id === action.payload.id)
      if (photo) {
        photo.filter = action.payload.filter
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
    selectZoomById: (state, photoId: string) => {
      const photo = state.photos.find(photo => photo.id === photoId)
      return photo ? photo.zoom : null
    },
    selectAspectRatioById: (state, photoId: string) => {
      const photo = state.photos.find(photo => photo.id === photoId)
      return photo ? photo.aspectRatio : null
    },
    selectFilterById: (state, photoId: string) => {
      const photo = state.photos.find(photo => photo.id === photoId)
      return photo ? photo.filter : null
    },
  },
})

export const createPost = createAppAsyncThunk<PostData, { description?: string; photos: Photo[] }>(
  `${postSlice.name}/createPost`,
  async ({ description, photos }, { dispatch, rejectWithValue }) => {
    try {
      const imagesFormData = await buildImagesUploadFormData(photos)

      const { images } = await dispatch(
        postApi.endpoints.uploadPostImages.initiate(imagesFormData)
      ).unwrap()

      const post = await dispatch(
        postApi.endpoints.createPost.initiate({
          description,
          childrenMetadata: images.map(image => ({ uploadId: image.uploadId })),
        })
      ).unwrap()

      return post
    } catch {
      return rejectWithValue(null)
    }
  }
)

export const {
  nextStep,
  previousStep,
  setDescription,
  reset,
  setPhoto,
  removePhoto,
  updateUrlPhoto,
  updateFilterPhoto,
  updateZoomPhoto,
  updateAspectRatioPhoto,
} = postSlice.actions

export const { selectStep, selectPhotos, selectFilterById, selectZoomById, selectAspectRatioById } =
  postSlice.selectors
