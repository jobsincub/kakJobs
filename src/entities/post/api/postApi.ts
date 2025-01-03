import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<PostData>, { description: string; photos: string[] }>({
      query: body => ({
        body,
        url: 'posts',
        method: 'POST',
      }),
    }),
  }),
})

export const { useCreatePostMutation } = postApi

type ApiResponse<T> = {
  data: T
  code: number
  extensions: Extension[]
}

type Extension = {
  message: string
  field: string | null
}

type PostImage = {
  id: string
  imageUrl: string
  createdAt: string
}

type PostData = {
  id: string
  userId: string
  description: string
  createdAt: string
  updatedAt: string
  postImages: PostImage[]
}
