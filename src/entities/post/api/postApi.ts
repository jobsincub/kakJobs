import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    createPost: builder.mutation<ApiResponse<PostItems>, FormData>({
      query: formData => ({
        body: formData,
        url: 'posts',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    getUsersPosts: builder.query<
      { items: PostItems[]; meta: PostMeta },
      { userId: string; page: number }
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
      providesTags: ['Posts'],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const {
            data: { items },
          } = await queryFulfilled

          items.forEach(post => {
            dispatch(postApi.util.upsertQueryData('getPostById', post.id, post))
          })
        } catch (error) {
          console.error('Failed to fetch posts:', error)
        }
      },
    }),
    getPostById: builder.query<PostItems, string>({
      query: postId => ({
        url: `posts/post/${postId}`,
      }),
      transformResponse: (response: ApiResponse<PostItems>) => response.data,
      providesTags: ['Posts'],
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

export const {
  useCreatePostMutation,
  useGetUsersPostsQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} = postApi

type PostImage = {
  id: string
  imageUrl: string
  createdAt: string
}

export type PostItems = {
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
