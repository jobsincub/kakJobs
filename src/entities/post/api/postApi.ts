import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<Post>, FormData>({
      query: formData => ({
        body: formData,
        url: 'posts',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
})

export const { useCreatePostMutation } = postApi

type PostImage = {
  id: string
  imageUrl: string
  createdAt: string
}

export type Post = {
  id: string
  userId: string
  description: string
  createdAt: string
  updatedAt: string
  postImages: PostImage[]
}
