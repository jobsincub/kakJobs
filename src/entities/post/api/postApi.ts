import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    uploadPostImages: builder.mutation<{ images: PostImage[] }, FormData>({
      query: formData => ({
        body: formData,
        url: 'posts/image',
        method: 'POST',
      }),
    }),
    createPost: builder.mutation<
      PostData,
      {
        description: string
        childrenMetadata: Pick<PostImage, 'uploadId'>[]
      }
    >({
      query: body => ({
        body,
        url: 'posts',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    getUserPosts: builder.query<
      {
        totalCount: number
        pageSize: number
        totalUsers: number
        items: PostData[]
      },
      {
        userId: number
        endCursorPostId?: number
        pageSize?: number
        sortBy?: string
        sortDirection?: SortDirection
      }
    >({
      query: ({ userId, endCursorPostId = '', ...params }) => ({
        url: endCursorPostId ? `posts/user/${userId}/${endCursorPostId}` : `posts/user/${userId}`,
        params,
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData) => {
        if (!currentCache.items) {
          currentCache.items = newData.items
        } else {
          currentCache.items.push(...newData.items)
        }
        currentCache = { ...newData, items: currentCache.items }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.endCursorPostId !== previousArg?.endCursorPostId
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
    getPostById: builder.query<PostData, number>({
      query: postId => ({
        url: `posts/id/${postId}`,
      }),
      providesTags: ['Posts'],
    }),
    updatePost: builder.mutation<void, { description: string; id: string }>({
      query: ({ id, ...body }) => ({
        body,
        url: `posts/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),
    deletePost: builder.mutation<void, string>({
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
})

export const {
  useCreatePostMutation,
  useGetUserPostsQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi

type PostImage = {
  url: string
  width: number
  height: number
  fileSize: number
  createdAt: string
  uploadId: string
}

type Owner = {
  firstName: string
  lastName: string
}

export type PostData = {
  id: number
  userName: string
  description: string
  location: string
  images: PostImage[]
  createdAt: string
  updatedAt: string
  ownerId: number
  avatarOwner: string
  owner: Owner
  likesCount: number
  isLiked: boolean
  avatarWhoLikes: string[]
}

type SortDirection = 'asc' | 'desc'
