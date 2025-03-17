import { useGetPostByIdQuery, useUpdatePostMutation } from '@/entities/post/api/postApi'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/shared/config'

import { useState } from 'react'

export type EditPostFormValues = {
  description: string
}
export const useEditDialogContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const [updatePost] = useUpdatePostMutation()
  const params = useParams<{ postId: string }>()
  const postId = params?.postId

  const { data: post } = useGetPostByIdQuery(postId ?? '')

  const {
    t: {
      features: {
        post: { updatePostContent },
      },
    },
  } = useTranslation()

  const updatePostHandler = (data: EditPostFormValues) => {
    if (postId) {
      updatePost({ ...data, id: postId })
      setIsDialogOpen(false)
    }
  }

  const openConfirmHandler = (isOpen: boolean) => {
    if (!isOpen) {
      setIsConfirmOpen(true)
    } else {
      setIsDialogOpen(true)
    }
  }

  const confirmCloseHandler = () => {
    setIsDialogOpen(false)
  }

  return {
    updatePostHandler,
    updatePostContent,
    isDialogOpen,
    isConfirmOpen,
    openConfirmHandler,
    confirmCloseHandler,
    setIsConfirmOpen,
    post,
  }
}
