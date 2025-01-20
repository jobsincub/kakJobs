import { baseQueryWithReauth } from '@/shared/api'
import { createApi } from '@reduxjs/toolkit/query/react'
import { convertUrlToFile } from '@/shared/lib/hooks'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { PhotoFile } from '../model/postSlice'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    createPost: builder.mutation<
      ApiResponse<PostData>,
      { description?: string; photos: PhotoFile[] }
    >({
      queryFn: async ({ description, photos }, _api, _extraOptions, baseQuery) => {
        try {
          const formData = new FormData()

          if (description) {
            formData.append('description', description)
          }

          await Promise.all(
            photos.map(async photo => {
              const file = await convertUrlToFile({
                fileUrl: photo.url,
                fileName: photo.name,
              })
              formData.append('photos', file)
            })
          )

          const result = await baseQuery({
            url: 'posts',
            method: 'POST',
            body: formData,
          })

          return result.data
            ? { data: result.data as ApiResponse<PostData> }
            : { error: result.error as FetchBaseQueryError }
        } catch (error) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: (error as Error).message,
            },
          }
        }
      },
    }),
  }),
})

export const { useCreatePostMutation } = postApi

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
