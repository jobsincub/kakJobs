import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@/shared/api'

export const postApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Posts'],
  endpoints: builder => ({
    // TODO: заменить тип успешного запроса, если будет отличаться
    deletePost: builder.mutation<void, string>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
})

export const { useDeletePostMutation } = postApi
