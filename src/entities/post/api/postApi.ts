import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 60,
  tagTypes: ['Post'],
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<Data>, { description: string; photos: string[] }>({
      query: body => ({
        body,
        url: 'posts',
        method: 'POST',
      }),
    }),
    getUsersPosts: builder.query<
      { items: PostItems[]; meta: PostMeta },
      { userId: string | undefined; page: number }
    >({
      query: ({ userId, page }) => ({
        url: `posts/${userId}`,
        params: { page },
      }),
      transformResponse: (response: ApiResponse<Data>) => ({
        items: response.data.items,
        meta: response.data.meta,
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData) => {
        if (!currentCache.items) {
          currentCache.items = newData.items
        } else {
          currentCache.items.push(...newData.items)
        }
        currentCache.meta = newData.meta
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      providesTags: ['Post'],
    }),
  }),
})

export const { useCreatePostMutation, useGetUsersPostsQuery } = postApi

type PostImage = {
  id: string
  imageUrl: string
  createdAt: string
}

type PostItems = {
  id: string
  userId: string
  description: string
  createdAt: string
  updatedAt: string
  postImages: PostImage[]
}

type PostMeta = {
  total: number
  page: number
  limit: number
  totalPages: number
}

type Data = {
  items: PostItems[]
  meta: PostMeta
}
