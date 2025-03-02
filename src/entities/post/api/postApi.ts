import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<PostData>, { description: string; photos: string[] }>({
      query: body => ({
        body,
        url: 'posts',
        method: 'POST',
      }),
    }),
    updatePost: builder.mutation<void, { description: string; id: string }>({
      query: ({ id, ...body }) => ({
        body,
        url: `posts/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),
  }),
})

export const { useCreatePostMutation, useUpdatePostMutation } = postApi

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
