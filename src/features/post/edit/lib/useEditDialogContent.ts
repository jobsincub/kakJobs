import { useUpdatePostMutation } from '@/entities/post/api/postApi'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/shared/config'
import { EditPostFormValues } from './useEditPostForm'
import { useState } from 'react'
// import { useFormContext } from 'react-hook-form'

export const useEditDialogContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false) // Состояние EditDialogContent
  const [isConfirmOpen, setIsConfirmOpen] = useState(false) // Состояние ConfirmCloseDialog

  const [updatePost] = useUpdatePostMutation()
  const params = useParams<{ postId: string }>()
  const postId = params?.postId

  // const { formState } = useFormContext()
  // const isDirty = formState.isDirty

  const {
    t: {
      features: {
        post: { updatePostContent },
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

  // const openConfirmHandler = (isOpen: boolean) => {
  //   if (!isOpen) {
  //     if (isDirty) {
  //       setIsConfirmOpen(false) // Если есть изменения — показать ConfirmCloseDialog
  //     } else {
  //       setIsDialogOpen(false) // Если нет изменений — просто закрываем
  //     }
  //   } else {
  //     setIsDialogOpen(true)
  //   }
  // }

  const openConfirmHandler = (isOpen: boolean) => {
    if (!isOpen) {
      setIsConfirmOpen(true) // Вместо закрытия сразу открываем ConfirmCloseDialog
    } else {
      setIsDialogOpen(true)
    }
  }

  const confirmCloseHandler = () => {
    setIsDialogOpen(false) // Закрываем основное окно
    setIsConfirmOpen(false) // Закрываем ConfirmCloseDialog
  }

  return {
    updatePostHandler,
    updatePostContent,
    isDialogOpen,
    isConfirmOpen,
    openConfirmHandler,
    confirmCloseHandler,
    setIsConfirmOpen,
  }
}
