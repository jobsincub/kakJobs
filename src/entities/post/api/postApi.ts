import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 60, // Держим кэш 60 секунд
  tagTypes: ['Post'],
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<Data>, { description: string; photos: string[] }>({
      query: body => ({
        body,
        url: 'posts',
        method: 'POST',
      }),
    }),
    getUsersPosts: builder.query<ApiResponse<Data>, { userId: string | undefined; page: number }>({
      query: ({ userId, page }) => ({
        url: `posts/${userId}`,
        params: { page, limit: 4 },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName, // Все запросы getUsersPosts хранятся в одном ключе
      merge: (currentCache, newData) => {
        currentCache.data.items.push(...newData.data.items) // Добавляем новые посты в кеш без перезаписи
        currentCache.data.meta = newData.data.meta
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page // Форсим рефетч, если номер страницы изменился
      },
      providesTags: ['Post'], // Используем кеширование
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
