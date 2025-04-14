import { useGetPostByIdQuery, useUpdatePostMutation } from '@/entities/post/api/postApi'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from '@/shared/config'
import { useState } from 'react'

export type EditPostFormValues = {
  description: string
}

export const useEditDialogContent = () => {
  const [isEditPostDialogOpen, setIsEditPostDialogOpen] = useState(false)
  const [isPostFormDirty, setIsPostFormDirty] = useState(false)
  const [isConfirmCloseDialogOpen, setIsConfirmCloseDialogOpen] = useState(false)

  const [updatePost] = useUpdatePostMutation()
  const searchParams = useSearchParams()
  const postId = searchParams!.get('postId')!

  const { data: post } = useGetPostByIdQuery(postId)

  const {
    t: {
      features: {
        post: { updatePostContent },
      },
    },
  } = useTranslation()

  const updatePostHandler = (data: EditPostFormValues) => {
    updatePost({ ...data, id: postId })
      .unwrap()
      .then(() => setIsEditPostDialogOpen(false))
  }

  const toggleEditPostDialog = (isOpen: boolean) => {
    if (!isOpen && isPostFormDirty) {
      setIsConfirmCloseDialogOpen(true)
    } else {
      setIsEditPostDialogOpen(isOpen)
    }
  }

  const confirmCloseHandler = () => {
    setIsEditPostDialogOpen(false)
  }

  return {
    updatePostHandler,
    updatePostContent,
    isEditPostDialogOpen,
    isConfirmCloseDialogOpen,
    toggleEditPostDialog,
    confirmCloseHandler,
    setIsConfirmCloseDialogOpen,
    post,
    isPostFormDirty,
    setIsPostFormDirty,
  }
}
