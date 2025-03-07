import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { Post, postApi } from '../api/postApi'
import { createAppAsyncThunk } from '@/shared/lib'
import { convertUrlToFile } from '@/shared/lib/hooks'

export interface Photo {
  id: string
  originalImageUrl: string
  updatedImageUrl: string
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
        updatedImageUrl: action.payload,
      })
      state.currentStep = OrderStatus.Cropping
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

export const createPost = createAppAsyncThunk<
  { post: Post },
  { description?: string; photos: Photo[] }
>(
  `${postSlice.name}/createPost`,
  async ({ description, photos }, { dispatch, rejectWithValue }) => {
    const formData = new FormData()

    if (description) {
      formData.append('description', description)
    }

    const photoFiles = await Promise.all(
      photos.map(photo =>
        convertUrlToFile({
          fileUrl: photo.updatedImageUrl,
        })
      )
    )

    photoFiles.forEach(photoFile => {
      formData.append('photos', photoFile)
    })

    const res = await dispatch(postApi.endpoints.createPost.initiate(formData))

    if (res.data) {
      return { post: res.data.data }
    } else {
      return rejectWithValue(null)
    }
  }
)

export const { nextStep, previousStep, setDescription, reset, setPhoto, removePhoto, updatePhoto } =
  postSlice.actions

export const { selectStep, selectPhotos } = postSlice.selectors
