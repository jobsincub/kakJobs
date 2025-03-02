import { useUpdatePostMutation } from '@/entities/post/api/postApi'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '@/shared/config'
import { EditPostFormValues } from './useEditPostForm'
// import { useFormContext } from 'react-hook-form'

export const useEditDialogContent = () => {
  //   const { formState } = useFormContext()
  const [updatePost] = useUpdatePostMutation()
  const params = useParams<{ postId: string }>()
  const postId = params?.postId
  console.log(postId)
  console.log(params)
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  const {
    t: {
      features: {
        posts: { updatePostContent },
      },
    },
  } = useTranslation()

  const updatePostHandler = async (data: EditPostFormValues) => {
    if (!postId) {
      console.error('Post ID is undefined')
      return
    }
    try {
      await updatePost({ ...data, id: postId }).unwrap()
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }
  const handleOpenUpdateDialog = () => {
    // if (formState.isDirty) { // Показываем модалку, только если есть изменения
    setIsUpdateDialogOpen(true)
    // }
  }

  const handleCloseUpdateDialog = () => {
    setIsUpdateDialogOpen(false)
  }

  return {
    updatePostHandler,
    isUpdateDialogOpen,
    handleOpenUpdateDialog,
    handleCloseUpdateDialog,
    updatePostContent,
  }
}
