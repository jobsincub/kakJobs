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
    getUsersPosts: builder.query<Data, { userId: string | undefined; page: number }>({
      query: ({ userId, page }) => ({
        url: `posts/${userId}`,
        params: { page, limit: 8 },
      }),
    }),
  }),
})

export const { useCreatePostMutation, useGetUsersPostsQuery } = postApi

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

type Data = {
  data: PostData[]
}
